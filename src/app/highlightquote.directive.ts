import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlightQoute]'
})
export class HighlightQouteDirective {
  onstructor(elem:ElementRef) {
    elem.nativeElement.style.backgroundColor="#834c69"
   }
}

