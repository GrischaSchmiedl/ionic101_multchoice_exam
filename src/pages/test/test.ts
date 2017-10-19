import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataProvider} from '../../providers/data/data';
import {Question} from '../../models/question';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  public score: number = 0;
  public currentQuestionNumber: number = 0;
  public currentQuestion: Question;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public data: DataProvider,
              public alertCtrl: AlertController) {
    if (this.data.questions.length>0) {
      this.setQuestion(1);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

  public setQuestion(n: number) {
    this.currentQuestionNumber = n;
    this.currentQuestion = this.data.questions[this.currentQuestionNumber-1];
  }

  public clicked(n: number) {
    if (n==this.currentQuestion.correctAnswer) this.score++;
    if (this.currentQuestionNumber<this.data.questions.length) {
      this.setQuestion(this.currentQuestionNumber+1);
    } else {

      let msgBox = this.alertCtrl.create(
        {
        title: 'Test abgeschlossen?',
        message: 'Ergebnis: '+ this.score,
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.setQuestion(1);
              this.score = 0;
            }
          }
        ]
      });
      msgBox.present();
    }

  }

}
