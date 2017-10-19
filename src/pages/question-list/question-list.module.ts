import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionListPage } from './question-list';

@NgModule({
  declarations: [
    QuestionListPage,
  ],
  imports: [
    IonicPageModule.forChild(QuestionListPage),
  ],
})
export class QuestionListPageModule {}
