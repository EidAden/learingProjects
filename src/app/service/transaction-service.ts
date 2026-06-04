import { Injectable, signal, computed } from '@angular/core';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root',
})
/**
 * Service for managing transactions and calculating totals.
 */
export class TransactionService {
  /** Internal writable signal for all transactions */
  private _transactions = signal<Transaction[]>([]);

  /** Read-only list of transactions */
  transactions = this._transactions.asReadonly();

  /**
   * Calculates the current balance.
   * Income increases the balance, expenses decrease it.
   */
  balance = computed(() => {
    return this._transactions().reduce((acc, transaction) => acc + transaction.amount, 0);
  });

  /**
   * Calculates the total income.
   */
  income = computed(() => {
    return this._transactions()
      .filter((transaction) => transaction.amount > 0)
      .reduce((acc, transaction) => acc + transaction.amount, 0);
  });

  /**
   * Calculates the total expenses.
   */
  expense = computed(() => {
    return this._transactions()
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => acc + transaction.amount, 0);
  });

  /**
   * Adds a new transaction to the list.
   *
   * @param newTransaction The transaction to add.
   */
  addTransaction(newTransaction: Transaction) {
    this._transactions.update((currentTransactions) => [...currentTransactions, newTransaction]);
  }

  /**
   * Removes a transaction by its id.
   *
   * @param id The id of the transaction to remove.
   */
  removeTransaction(id: number) {
    this._transactions.update((currentTransactions) =>
      currentTransactions.filter((transaction) => transaction.id !== id),
    );
  }
}
