import { Component, computed, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-quiz',
  imports: [],
  templateUrl: './quiz.html',
  styleUrl: './quiz.scss',
})
export class Quiz {
  questions = [
    {
      question: 'Was ist die Hauptstadt von Deutschland?',
      options: ['München', 'Berlin', 'Hamburg'],
      answer: 'Berlin',
    },
    {
      question: 'Wie viele Bundesländer hat Deutschland?',
      options: ['14', '16', '18'],
      answer: '16',
    },
    {
      question: 'Welche Farben hat die deutsche Flagge?',
      options: ['Schwarz, Rot, Gold', 'Blau, Weiß, Rot', 'Grün, Weiß, Schwarz'],
      answer: 'Schwarz, Rot, Gold',
    },
    {
      question: 'Mit welcher Währung bezahlen die meisten Länder der Europäischen Union?',
      options: ['Euro', 'Dollar', 'Pfund'],
      answer: 'Euro',
    },
    {
      question: 'Welcher Fluss fließt durch Köln?',
      options: ['Donau', 'Rhein', 'Elbe'],
      answer: 'Rhein',
    },
    {
      question: 'Welches ist das größte Bundesland Deutschlands nach Fläche?',
      options: ['Bayern', 'Nordrhein-Westfalen', 'Sachsen'],
      answer: 'Bayern',
    },
    {
      question: 'Wie heißt die Hauptstadt der Europäischen Union?',
      options: ['Brüssel', 'Paris', 'Wien'],
      answer: 'Brüssel',
    },
    {
      question: 'Welcher Planet ist der Sonne am nächsten?',
      options: ['Venus', 'Merkur', 'Mars'],
      answer: 'Merkur',
    },
    {
      question: 'Wie viele Kontinente gibt es auf der Erde?',
      options: ['5', '6', '7'],
      answer: '7',
    },
    {
      question: 'Welches Meer liegt im Norden Deutschlands?',
      options: ['Ostsee', 'Mittelmeer', 'Schwarzes Meer'],
      answer: 'Ostsee',
    },
  ];

  currentIndex = signal(0);
  score = signal(0);
  finished = signal(false);
  passed = computed(() => this.score() > 6);

  currentQuestion = () => this.questions[this.currentIndex()];

  answer(option: string) {
    if (option === this.currentQuestion().answer) {
      this.score.update((s) => s + 1);
    }

    if (this.currentIndex() < this.questions.length - 1) {
      this.currentIndex.update((i) => i + 1);
    } else {
      this.finished.set(true);
    }
  }
  reset() {
    this.currentIndex.set(0);
    this.score.set(0);
    this.finished.set(false);
  }
}
