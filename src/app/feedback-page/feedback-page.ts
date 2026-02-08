import { Component, inject } from '@angular/core';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { FEEDBACK_DATA } from './feedback-data';

@Component({
  selector: 'app-feedback-page',
  imports: [TranslocoPipe],
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
}
