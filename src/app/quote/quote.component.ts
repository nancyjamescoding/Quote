import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
title = 'Motivational quotes';
quotes: Quote[] = [
    new Quote(1,'Nancy','Dream Big','When you have a dream,', 'you’ve got to grab it and never let go.',new Date(2020,3,14),0,0),
    new Quote(2,'Meyer','About LIfe','Life has got all those twists and turns.','You’ve got to hold on tight and off you go',new Date(2019,6,9),0,0),
    new Quote(3,'Victoria','Shine your Face','Keep your face always toward the sunshine','and shadows will fall behind you',new Date(2022,1,12),0,0),
    new Quote(4,'Stephen','Success','Success is not final, failure is not fatal','it is the courage to continue that counts.',new Date(2019,0,18),0,0),
    new Quote(5,'Eric','Define your life','You define your own life','Don’t let other people write your script.',new Date(2019,2,14),0,0),
    new Quote(6,'Ann','All you want','You can be everything','You can be the infinite amount of things that people are.',new Date(2030,3,14),0,0),
  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.completeDate) - <any>new Date(a.completeDate);
    });
  }  
  addNewQuote(quote: Quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  deleteQuote(isComplete:boolean, index:number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  toggleDetails(index: number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
