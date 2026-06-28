import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-g-password',
  imports: [],
  templateUrl: './g-password.html',
  styleUrl: './g-password.scss',
})
export class GPassword {
  password = signal('');

  generate() {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=?';

    let newPassword = '';

    for (let i = 0; i < 15; i++) {
      newPassword += chars[Math.floor(Math.random() * chars.length)];
    }
    this.password.set(newPassword);
  }
}
