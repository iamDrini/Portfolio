import { Component } from '@angular/core';
import { LandingPage } from "../landing-page/landing-page";
import { Header } from "../shared/header/header";
import { AboutmePage } from '../aboutme-page/aboutme-page';
import { SkillsPage } from '../skills-page/skills-page';
import { PortfolioPage } from '../portfolio-page/portfolio-page';
import { FeedbackPage } from '../feedback-page/feedback-page';

@Component({
  selector: 'app-main-page',
  imports: [LandingPage, Header,AboutmePage, SkillsPage, PortfolioPage, FeedbackPage],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {

}
