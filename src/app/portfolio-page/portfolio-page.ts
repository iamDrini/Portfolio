import { NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslocoPipe } from '@jsverse/transloco';
import { DialogPage } from '../shared/dialog-page/dialog-page';

@Component({
  selector: 'app-portfolio-page',
  imports: [TranslocoPipe, NgStyle],
  templateUrl: './portfolio-page.html',
  styleUrl: './portfolio-page.scss',
})
export class PortfolioPage {
  readonly dialog = inject(MatDialog);
  projects: ('pokedex' | 'join' | 'pollo')[] = ['pokedex', 'join', 'pollo'];

  openDialog(type: 'pokedex' | 'join'| 'pollo'){
    const currentIndex = this.projects.indexOf(type);
    this.dialog.open(DialogPage, {
      data: {
        type: type,
        projects: this.projects,
        currentIndex: currentIndex
      },
      width: '90vw',
      maxWidth: '1820px',
      height: 'auto',
      panelClass:'custom-dialog'
    });
  }

}
