import { Component, ViewEncapsulation } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { Header } from "../header/header";
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-privacy-policy',
  imports: [TranslocoPipe, Header, Footer],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
  encapsulation: ViewEncapsulation.None
})
export class PrivacyPolicy {

}
