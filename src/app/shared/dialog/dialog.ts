import { } from '@angular/compiler';
import { Component, ChangeDetectionStrategy, inject, ViewEncapsulation} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-dialog',
  imports: [ MatDialogClose, MatButtonModule,TranslocoPipe],
  templateUrl: './dialog.html',
  styleUrl: './dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class Dialog {
  data = inject<{ type: string, projects: string[], currentIndex: number }>(MAT_DIALOG_DATA);
  dialogType = this.data.type;
  projects = this.data.projects;
  currentIndex = this.data.currentIndex;

  nextProject() {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    this.dialogType = this.projects[this.currentIndex];
  }

}
