import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';

  submitForm() {
    // In a real app, this would send data to a backend
    console.log('Form submitted:', { name: this.name, email: this.email, message: this.message });
    alert('Thanks for reaching out! This is a demo form.');
    this.name = '';
    this.email = '';
    this.message = '';
  }
}