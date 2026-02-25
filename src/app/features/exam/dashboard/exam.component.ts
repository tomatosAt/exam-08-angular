import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}

interface Question {
  id: string;
  title: string;
  options: Option[];
  selectedOptionId?: string; 
}


@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})

export class ExamComponent {
constructor(private router: Router) {}
  // mock data คำถาม 
 sections: Question[] = [
    {
      id: 'q1',
      title: '1+1=?',
      options: [
        { id: 'a', text: '1', isCorrect: false },
        { id: 'b', text: '2', isCorrect: true },
        { id: 'c', text: '3', isCorrect: false },
        { id: 'd', text: '4', isCorrect: false }
      ]
    }
  ];
 
  showResult = false;
  checkAnswer() {
    const unanswered = this.sections.filter(q => !q.selectedOptionId);

    if (unanswered.length > 0) {
      alert(`กรุณาตอบคำถาม ${unanswered.length} ข้อ`);
      return; 
    }

    this.showResult = true;

    this.sections.forEach(q => {
      const correctOption = q.options.find(o => o.isCorrect);
      const isCorrect = correctOption?.id === q.selectedOptionId;
    });
  }
  // clieck add button
  goToAdd() {
  this.router.navigate(['/exam/add']);
  }
}
