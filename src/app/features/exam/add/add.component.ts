import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ExamService } from '@services/exam.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
    form: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private examService: ExamService
  ) {
    this.form = this.fb.group({
      question: ['', Validators.required],
      choices: this.fb.array([
        this.createChoice(),
        this.createChoice(),
        this.createChoice(),
        this.createChoice()
      ])
    });
  }
  createChoice() {
    return this.fb.group({
      choice_text: ['', Validators.required],
      is_correct: [false]
    });
  }
  
  get choices(): FormArray {
    return this.form.get('choices') as FormArray;
  }
  
  submit() {
  // กำหนดคำตอบ
  const hasCorrect = this.choices.controls.some(control =>
    control.get('is_correct')?.value
  );

  if (!hasCorrect) {
    Swal.fire({
      icon: 'warning',
      title: 'ยังไม่ได้เลือกคำตอบที่ถูกต้อง',
      text: 'กรุณาเลือกคำตอบที่ถูกอย่างน้อย 1 ข้อ'
    });
    return;
  }
  // ฟอร์มไม่ครบ
  if (this.form.invalid) {
    // ตรวจค่าว่าง
    if (this.form.get('question')?.invalid) {
      Swal.fire({
        icon: 'warning',
        title: 'กรอกข้อมูลไม่ครบ',
        text: 'กรุณากรอกคำถาม'
      });
      return;
    }
    // ตรวจคำตอบ
    const incompleteChoice = this.choices.controls.some(control =>
      control.get('choice_text')?.invalid
    );
    if (incompleteChoice) {
      Swal.fire({
        icon: 'warning',
        title: 'กรอกข้อมูลไม่ครบ',
        text: 'กรุณากรอกคำตอบให้ครบทั้ง 4 ข้อ'
      });
      return;
    }
    return;
  }

  // สร้าง ข้อสอบใหม่
  this.examService.createExam(this.form.value).subscribe({
    next: () => {
      Swal.fire({
        icon: 'success',
        title: 'สำเร็จ',
        text: 'เพิ่มข้อสอบเรียบร้อยแล้ว',
        confirmButtonColor: '#2563eb'
      }).then(() => {
        this.form.reset();
        this.router.navigate(['']);
      });
    },
    error: (err) => {
      if (err.status === 400 && err.error?.message === 'question already exists') {
        Swal.fire({
          icon: 'error',
          title: 'ไม่สำเร็จ',
          text: 'คำถามนี้มีอยู่ในระบบแล้ว'
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'เกิดข้อผิดพลาด',
          text: 'กรุณาลองใหม่อีกครั้ง'
        });
      }
    }
    });
  }

  selectCorrect(index: number) {
    this.choices.controls.forEach((control, i) => {
      control.get('is_correct')?.setValue(i === index);
    });
  }

  backToStart() {
    this.router.navigate(['']);
  }
}
