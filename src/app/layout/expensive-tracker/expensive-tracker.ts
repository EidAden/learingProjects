import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TransactionService } from '../../service/transaction-service';
import { Transaction } from '../../models/transaction';

@Component({
  selector: 'app-expensive-tracker',
  imports: [FormsModule, CommonModule],
  templateUrl: './expensive-tracker.html',
  styleUrl: './expensive-tracker.scss',
})

/**
 * Expense Tracker Component
 * Handles adding and removing transactions.
 */
export class ExpensiveTracker {
  /** Transaction description from the input field */
  text: string = '';

  /** Transaction amount from the input field */
  amount: number = 0;

  errorMessage: string = '';

  /** Injects the transaction service */
  service = inject(TransactionService);

  /**
   * Creates a new transaction and adds it to the service.
   * Resets the input fields afterwards.
   */
  addTransaction() {
    if (!this.text || !this.amount) {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }

    const transaction: Transaction = {
      id: Date.now(),
      text: this.text,
      amount: this.amount,
    };

    this.service.addTransaction(transaction);

    this.text = '';
    this.amount = 0;
  }

  /**
   * Removes a transaction by its id.
   *
   * @param id - The id of the transaction to remove.
   */
  remove(id: number) {
    this.service.removeTransaction(id);
  }
}
