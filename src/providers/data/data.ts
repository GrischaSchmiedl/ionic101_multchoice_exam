import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Storage} from '@ionic/storage';
import 'rxjs/add/operator/map';
import {Question} from '../../models/question';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  public questions: Question[];
  constructor(public http: Http, public storage: Storage) {
    console.log('Hello DataProvider Provider');
    this.setInitialData();
    this.load();
  }

  public setInitialData() {
    this.questions = [
      new Question({questionTitle: 'Who is the boss?', 
                       answer1: 'Bill Gates', 
                       answer2: 'Frank Sinatra', 
                       answer3: 'God', 
                       answer4: 'it\'s me', 
                       correctAnswer: 4}),
      new Question({questionTitle: 'Why is iot dark', 
                       answer1: 'Don\'t know, don\' care', 
                       answer2: 'It is not, you just think it is.', 
                       answer3: 'Open your eyes, stupid!', 
                       answer4: 'It is night.', 
                       correctAnswer: 3}),                 
    ];
  }

  public load() {
    this.storage.get("meineFragen").then(
      (strMeineFragen)=>{
        let rawListe = JSON.parse(strMeineFragen);
        console.log(rawListe);
        if(typeof(rawListe)!='undefined') {
          //this.questions = []; //bad mistake
          this.questions.length = 0 // much better - aray stays the same
          rawListe.forEach(ele => {
            this.questions.push(new Question(ele));
          })
          console.log(this.questions);
        }
      }
    ).catch(
      ()=>{}
    );

  }

  public save() {
    let string2Save = JSON.stringify(this.questions);
    console.log("this.questions");
    console.log(this.questions);
    console.log("String2Save:");
    console.log(string2Save);
    this.storage.set("meineFragen", string2Save);
  }

}
