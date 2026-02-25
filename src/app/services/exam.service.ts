import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { uri } from '@shared/helper/helper';

interface Choice {
  id: string;
  choice_text: string;
  is_correct: boolean;
}

interface Question {
  id: string;
  number: number;
  question: string;
  choices: Choice[];
}

interface ApiResponse<T> {
  status: string;
  data: T;
  status_code: number;
}

@Injectable({
  providedIn: 'root'
})
export class ExamService {

private apiUrl = uri('/v1/exams');

  constructor(private http: HttpClient) {}

  getExams(): Observable<ApiResponse<Question[]>> 
  {
    return this.http.get<ApiResponse<Question[]>>(this.apiUrl);
  }
}