import { Component } from '@angular/core';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { inject } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [TranslocoPipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private translocoService = inject(TranslocoService);
  currentLang = this.translocoService.getActiveLang();

  switchLanguage(lang: 'en' | 'de'){
    this.translocoService.setActiveLang(lang);
    localStorage.setItem('language', lang);
    this.currentLang = lang;
  }

}
