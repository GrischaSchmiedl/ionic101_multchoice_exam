import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataProvider} from '../../providers/data/data';
import {Question} from '../../models/question';

/**
 * Generated class for the QuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {
  public q: Question;

  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider) {
    this.q = navParams.get('quest2edit');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
  }

  public setCorrect(i: number){
    this.q.correctAnswer = i;
  }

  ionViewWillLeave() {
    this.data.save();
    console.log("saving....");
  }


}
