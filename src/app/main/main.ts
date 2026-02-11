import { Component } from '@angular/core';
import { LandingPage } from "../landing-page/landing-page";
import { Header } from "../shared/header/header";
import { Aboutme } from '../aboutme/aboutme';
import { Skills } from '../skills/skills';
import { Portfolio } from '../portfolio/portfolio';
import { Feedback } from '../feedback/feedback';
import { Contact } from "../contact/contact";
import { Footer } from "../shared/footer/footer";

@Component({
  selector: 'app-main',
  imports: [LandingPage,
    Header,
    Aboutme,
    Skills,
    Portfolio,
    Feedback,
    Contact,
    Footer],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {

}
