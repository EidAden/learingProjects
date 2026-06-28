import { Routes } from '@angular/router';
import { ExpensiveTracker } from './layout/expensive-tracker/expensive-tracker';
import { Home } from './layout/home/home';
import { TodoList } from './components/todo-list/todo-list';

import { Quiz } from './components/quiz/quiz';
import { StoppWatch } from './components/stopp-watch/stopp-watch';
import { GPassword } from './components/g-password/g-password';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'expensive-tracker',
    component: ExpensiveTracker,
  },
  {
    path: 'todo-list',
    component: TodoList,
  },
  {
    path: 'stopp-watch',
    component: StoppWatch,
  },

  {
    path: 'quiz',
    component: Quiz,
  },

  {
    path: 'g-password',
    component: GPassword,
  },
];
