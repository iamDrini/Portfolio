import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslocoPipe } from '@jsverse/transloco';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-contact',
  imports: [TranslocoPipe, FormsModule, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

  http = inject(HttpClient);

  contactData = {
    name: "",
    email:"",
    message:""
  }

  privacyAccepted = false;
  
  mailTest = true;
  sendAnimationActive = false;

  post = {
    endPoint: 'https://valdrin-murselji.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => this.triggerSendAnimation(),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
      this.triggerSendAnimation();
    }
  }

  private triggerSendAnimation() {
    this.sendAnimationActive = true;
    setTimeout(() => {
      this.sendAnimationActive = false;
    }, 600);
  }
}
