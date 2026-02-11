import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-skills',
  imports: [TranslocoPipe,RouterLink],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {

}
