import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { uri } from '@shared/helper/helper';
import { Question, ApiResponse } from '@model/exam.model';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

private apiUrl = uri('/v1/exams');

  constructor(private http: HttpClient) {}

  getExams(): Observable<ApiResponse<Question[]>> {
    return this.http.get<ApiResponse<Question[]>>(this.apiUrl);
  }
  // เพิ่มข้อสอบใหม่
  createExam(payload: any) {
    return this.http.post(uri('/v1/exams'), payload);
  }
  //  ลบข้อสอบ
  deleteExam(id: string) {
    return this.http.delete(uri(`/v1/exams/${id}`));
  }
}