import { Component, inject } from '@angular/core';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { FEEDBACK_DATA } from './feedback-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback-page',
  imports: [TranslocoPipe, CommonModule],
  templateUrl: './feedback-page.html',
  styleUrl: './feedback-page.scss',
})
export class FeedbackPage {
  private translocoService = inject(TranslocoService);
  
  feedback = FEEDBACK_DATA;
  currentLang: 'de' | 'en' = this.translocoService.getActiveLang() as 'de' | 'en';
  
  constructor() {
    this.translocoService.langChanges$.subscribe(lang => {
      this.currentLang = lang as 'de' | 'en';
    });
  }

  currentFeedback = 0;
  prevFading = false;
  nextFading = false;

  getPrevIndex(){
    return (this.currentFeedback - 1 + this.feedback[this.currentLang].length) % this.feedback[this.currentLang].length;
  }

  getNextIndex(){
    return (this.currentFeedback + 1) % this.feedback[this.currentLang].length;
  }

  nextSlide(){
    this.nextFading = true;
    this.currentFeedback = this.getNextIndex()
    setTimeout(()=>{
      this.nextFading = false;
    }, 300);
  }

  prevSlide(){
    this.prevFading = true;
    this.currentFeedback = this.getPrevIndex();
    setTimeout(() => {
      this.prevFading = false;
    }, 200);
  }
}
