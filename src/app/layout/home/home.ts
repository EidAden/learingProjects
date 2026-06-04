import { Component } from '@angular/core';
import { ExpensiveTracker } from '../expensive-tracker/expensive-tracker';

@Component({
  selector: 'app-home',
  imports: [ExpensiveTracker],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
