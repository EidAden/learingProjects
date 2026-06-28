import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-github',
  imports: [],
  templateUrl: './github.html',
  styleUrl: './github.scss',
})
export class Github {
  private baseUrl = 'https://api.github.com/users';

  query = signal('');
  user = signal<any>(null);
  loading = signal(false);

  followers = signal<any>(null);
  errors = signal('');

  search() {
    if (!this.query().trim()) return;

    this.loading.set(true);
    this.errors.set('');
    this.user.set(null);
    this.followers.set(null);

    setTimeout(() => {
      fetch(`${this.baseUrl}/${this.query().trim()}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('User not found');
          }
          return res.json();
        })
        .then((data) => {
          this.user.set(data);
        })
        .catch((err) => {
          this.errors.set(err.message);
        })
        .finally(() => {
          this.loading.set(false);
        });
    }, 5000);
  }

  openProfile() {
    if (this.user()) {
      window.open(this.user().html_url, '_blank');
    }
  }
}
