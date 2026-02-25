import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExamService } from '@services/exam.service';

interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})

export class ExamComponent {
  // mock data คำถาม 
  exams: any[] = [];   // เดี๋ยวค่อย strict type ทีหลัง
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
}
