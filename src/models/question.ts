
export class Question {

    public questionTitle: string;
    public answer1: string;
    public answer2: string;
    public answer3: string;
    public answer4: string;
    public correctAnswer: number;
    public solved: number = 0;

  constructor(fields: any) {
    // Quick and dirty extend/assign fields to this model
    for (const f in fields) {
      this[f] = fields[f];
    }
  }

}
