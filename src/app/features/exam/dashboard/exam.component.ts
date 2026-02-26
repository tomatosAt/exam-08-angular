import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExamService } from '@services/exam.service';
import { Question, ApiResponse } from '@model/exam.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})

export class ExamComponent {
  exams: Question[] = [];
  showResult = false;
  constructor(
    private router: Router,
    private examService: ExamService) {}
  
    ngOnInit(): void {
    this.loadQuestions();
  }
 
  loadQuestions() {
  this.examService.getExams().subscribe({
    next: (res) => {
        this.exams = res.data;
    },
      error: (err) => {
        console.error('โหลดข้อสอบไม่สำเร็จ', err);
      }
    });
  }

  // click add button
  goToAdd() {
    this.router.navigate(['/exam/add']);
  }

  goToDelete(id: string) {
    this.examService.deleteExam(id).subscribe({
      next: () => {
        this.loadQuestions(); 
      },
      error: (err) => {
        console.error('ลบข้อสอบไม่สำเร็จ', err);
        Swal.fire({
            icon: 'error',
            title: 'เกิดข้อผิดพลาด',
            text: 'กรุณาลองใหม่อีกครั้ง'
        });
      }
    });
  }
}
