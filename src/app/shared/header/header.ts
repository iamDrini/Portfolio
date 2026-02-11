import { Component, OnInit } from '@angular/core';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [TranslocoPipe, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  private translocoService = inject(TranslocoService);
  currentLang = this.translocoService.getActiveLang();

  ngOnInit() {
    const savedLang = localStorage.getItem('language');
    if (savedLang === 'en' || savedLang === 'de') {
      this.translocoService.setActiveLang(savedLang);
      this.currentLang = savedLang;
    }
  }

  switchLanguage(lang: 'en' | 'de'){
    this.translocoService.setActiveLang(lang);
    localStorage.setItem('language', lang);
    this.currentLang = lang;
  }

}
