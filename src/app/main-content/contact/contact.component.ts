import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
  contactData = {
    name: '',
    email: '',
    message: '',
  };

  checkboxSrc: string = './assets/img/icons/checkbox.png';
  isChecked: boolean = false;
  isFormEnabled: boolean = false;
  isFormValid: boolean = false;

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      this.contactData.name = '';
      this.contactData.email = '';
      this.contactData.message = '';
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
