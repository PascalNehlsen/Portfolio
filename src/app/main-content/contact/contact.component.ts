import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  checkboxSrc: string = './assets/img/icons/checkbox.png';
  isChecked: boolean = false;
  isFormEnabled: boolean = false;
  mailTest: boolean = true;

  post = {
    endPoint: 'https://pascal-nehlsen.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            // user response
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }

  checkboxEnterMouse() {
    if (this.isChecked) {
      this.checkboxSrc = './assets/img/icons/checkbox-hover-checked.png';
    } else {
      this.checkboxSrc = './assets/img/icons/checkbox-hover.png';
    }
  }

  checkboxLeaveMouse() {
    if (this.isChecked) {
      this.checkboxSrc = './assets/img/icons/checkbox-checked.png';
    } else {
      this.checkboxSrc = './assets/img/icons/checkbox.png';
    }
  }

  checkboxOnClick() {
    this.isChecked = !this.isChecked;
    this.checkboxEnterMouse();
    if (this.checkboxSrc === './assets/img/icons/checkbox-hover-checked.png') {
      this.enableFormBtn();
    } else {
      this.disableFormBtn();
    }
  }

  enableFormBtn() {
    this.isFormEnabled = true;
  }

  disableFormBtn() {
    this.isFormEnabled = false;
  }
}
