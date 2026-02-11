import { Component, ViewEncapsulation } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { Header } from "../header/header";

@Component({
  selector: 'app-legal-notice',
  imports: [TranslocoPipe, Header],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
  encapsulation: ViewEncapsulation.None
})
export class LegalNotice {

}
