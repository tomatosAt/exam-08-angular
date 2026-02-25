import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from '@features/exam/dashboard/exam.component';
import { AddComponent } from '@features/exam/add/add.component';

const routes: Routes = [
  { path: '', component: ExamComponent },
  { path: 'exam/add', component: AddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
