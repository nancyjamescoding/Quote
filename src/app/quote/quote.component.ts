import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
quotes: Quote[] = [
    new Quote(1,'When you have a dream,', 'you’ve got to grab it and never let go.',new Date(2020,3,14)),
    new Quote(2,'Life has got all those twists and turns.','You’ve got to hold on tight and off you go',new Date(2019,6,9)),
    new Quote(3,'Keep your face always toward the sunshine','and shadows will fall behind you',new Date(2022,1,12)),
    new Quote(4,'Success is not final, failure is not fatal','it is the courage to continue that counts.',new Date(2019,0,18)),
    new Quote(5,'You define your own life','Don’t let other people write your script.',new Date(2019,2,14)),
    new Quote(6,'You can be everything','You can be the infinite amount of things that people are.',new Date(2030,3,14)),
  ];
  addNewQuote(quote: Quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  toggleDetails(index: number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  // completeQuote(isComplete:boolean, index:number){
  //   if (isComplete) {
  //     this.quotes.splice(index,1);
  //   }
  // }
  deleteGoal(isComplete:boolean, index:number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
