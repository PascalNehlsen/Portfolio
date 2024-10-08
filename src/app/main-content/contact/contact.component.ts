import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  http = inject(HttpClient);
  translate = inject(TranslationService);

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  checkboxSrc: string = './assets/img/icons/checkbox.png';
  isChecked: boolean = false;
  isFormEnabled: boolean = false;
  isFormSent: boolean = false;

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
    if (ngForm.valid && ngForm.submitted) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: () => {
            this.userFeedback();
            ngForm.resetForm();
            this.checkboxSrc = './assets/img/icons/checkbox.png';
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && !ngForm.valid) {
      this.isFormSent = false;
      ngForm.resetForm();
      this.checkboxSrc = './assets/img/icons/checkbox.png';
    }
  }

  validateEmail(
    ngForm: NgForm,
    emailControl: {
      invalid: any;
      valid: any;
      touched: any;
      control: { setValue: (arg0: string) => void };
    }
  ) {
    if (emailControl.invalid && emailControl.touched) {
      this.contactData.email = '';
      emailControl.control.setValue('');
    }
    if (emailControl.valid) {
      this.checkFormValid(ngForm);
    }
  }

  checkboxEnterMouse(ngForm: NgForm) {
    if (this.isChecked) {
      this.checkboxSrc = './assets/img/icons/checkbox-hover-checked.png';
      this.checkFormValid(ngForm);
    } else {
      this.checkboxSrc = './assets/img/icons/checkbox-hover.png';
    }
  }

  checkboxLeaveMouse(ngForm: NgForm) {
    if (this.isChecked) {
      this.checkboxSrc = './assets/img/icons/checkbox-checked.png';
      this.checkFormValid(ngForm);
    } else {
      this.checkboxSrc = './assets/img/icons/checkbox.png';
    }
  }

  checkboxOnClick(ngForm: NgForm) {
    this.isChecked = !this.isChecked;
    this.checkboxEnterMouse(ngForm);
    this.checkFormValid(ngForm);
  }

  checkFormValid(ngForm: NgForm) {
    if (
      ngForm.valid &&
      this.checkboxSrc == './assets/img/icons/checkbox-checked.png'
    ) {
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

  userFeedback() {
    this.isFormSent = true;
    this.isFormEnabled = false;
    setTimeout(() => {
      this.isFormSent = false;
    }, 3000);
  }
}
