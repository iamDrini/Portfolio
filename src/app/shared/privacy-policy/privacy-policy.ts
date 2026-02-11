import { Component, ViewEncapsulation } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { Header } from "../header/header";

@Component({
  selector: 'app-privacy-policy',
  imports: [TranslocoPipe, Header],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
  encapsulation: ViewEncapsulation.None
})
export class PrivacyPolicy {

}
