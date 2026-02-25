import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamComponent } from './features/exam/dashboard/exam.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddComponent } from './features/exam/add/add.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteComponent } from './features/exam/delete/delete.component';
@NgModule({
  declarations: [
    AppComponent,
    ExamComponent,
    AddComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
