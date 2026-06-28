import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-stopp-watch',
  imports: [],
  templateUrl: './stopp-watch.html',
  styleUrl: './stopp-watch.scss',
})
export class StoppWatch {
  timer = signal(0);

  interval: any = null;

  star() {
    if (this.interval) return;

    this.interval = setInterval(() => {
      this.timer.update((t) => t + 1);
    }, 1000);
  }

  stopp() {
    clearInterval(this.interval);
    this.interval = null;
  }

  reset() {
    this.stopp();
    this.timer.set(0);
  }

  hours = computed(() => Math.floor(this.timer() / 3600));

  minutes = computed(() => Math.floor((this.timer() % 3600) / 60));

  seconds = computed(() => this.timer() % 60);
}
