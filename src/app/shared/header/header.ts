import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  lang: 'en' | 'de' = 'en';

  toggleLang(): void {
    this.lang = this.lang === 'en' ? 'de' : 'en';
  }

}
