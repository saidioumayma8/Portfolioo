import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService } from './contact.service';

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

  constructor(private contactService: ContactService) { }

  submitForm() {
    const formData = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    this.contactService.sendEmail(formData).subscribe({
      next: (response) => {
        console.log('Email sent successfully', response);
        alert('Message sent successfully!');
        this.name = '';
        this.email = '';
        this.message = '';
      },
      error: (error) => {
        console.error('Error sending email', error);
        alert('Failed to send message. Please try again later.');
      }
    });
  }
}