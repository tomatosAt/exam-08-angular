import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamComponent } from './features/exam/dashboard/exam.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddComponent } from './features/exam/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    ExamComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
