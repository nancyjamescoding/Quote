import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlightQuote]'
})
export class HighlightQuoteDirective {
      constructor(elem:ElementRef) {
        elem.nativeElement.style.backgroundColor="#834c69"
       }
    }

//   constructor(private elem:ElementRef) { 
//   }

//   @HostListener("click") onClicks(){
//     this.textDeco("yellow")
//   }

//   private textDeco(action:string){
//     this.elem.nativeElement.style.color = action;
//   }

// }
