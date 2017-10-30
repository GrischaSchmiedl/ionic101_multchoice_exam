import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TestPage} from '../test/test';
import {QuestionListPage} from '../question-list/question-list';
import {DataProvider} from '../../providers/data/data';
//import {Question} from '../../models/question';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public questions;
  public count: number;
  constructor(public navCtrl: NavController, public data: DataProvider) {
    this.questions = this.data.questions;
    this.count = this.questions.length;
    //debugger;
  }

  public gotoTestPage() {
    //debugger;
    this.navCtrl.push(TestPage);
  }
  public gotoQuestionListPage() {
    this.navCtrl.push(QuestionListPage);
  }

}
