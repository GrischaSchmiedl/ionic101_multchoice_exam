import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataProvider} from '../../providers/data/data';
import {Question} from '../../models/question';
import {QuestionPage} from '../question/question';

/**
 * Generated class for the QuestionListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question-list',
  templateUrl: 'question-list.html',
})
export class QuestionListPage {
  public questions: Question[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider) {
    this.questions = data.questions;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionListPage');
  }

  public addQuestion() {
    let q = new Question({questionTitle: "new", correctAnswer: 1});
    this.questions.push(q);
    this.navCtrl.push(QuestionPage, {quest2edit: q});
  }

  public showQuestion(q: Question) {
    this.navCtrl.push(QuestionPage, {quest2edit: q});
    
  }

  public deleteQuestion(q: Question) {
    let index = this.questions.indexOf(q);
    if (index>-1) this.questions.splice(index,1);
    this.data.save(); 
  }

}
