import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
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
  private elementRef = inject(ElementRef);
  currentLang = this.translocoService.getActiveLang();
  menuOpen = false;

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

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside && this.menuOpen) {
      this.menuOpen = false;
    }
  }

}
