import { Component } from '@angular/core';
import { LandingPage } from "../landing-page/landing-page";
import { Header } from "../shared/header/header";

@Component({
  selector: 'app-main-page',
  imports: [LandingPage, Header],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {

}
