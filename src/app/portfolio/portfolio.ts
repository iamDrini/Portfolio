import { NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslocoPipe } from '@jsverse/transloco';
import { Dialog } from '../shared/dialog/dialog';

@Component({
  selector: 'app-portfolio',
  imports: [TranslocoPipe, NgStyle],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  readonly dialog = inject(MatDialog);
  projects: ('pokedex' | 'join' | 'pollo')[] = ['pokedex', 'join', 'pollo'];

  openDialog(type: 'pokedex' | 'join'| 'pollo'){
    const currentIndex = this.projects.indexOf(type);
    this.dialog.open(Dialog, {
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
