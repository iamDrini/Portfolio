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

  openDialog(type: 'pokedex' | 'join'| 'pollo'){
    this.dialog.open(DialogPage, {
      data: {
        type: type
      },
      width: '90vw',
      maxWidth: '90vw',
      height: 'auto',
      panelClass:'custom-dialog'
    });
  }

}
