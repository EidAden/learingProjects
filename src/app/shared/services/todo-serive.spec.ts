import { TestBed } from '@angular/core/testing';

import { TodoSerive } from './todo-serive';

describe('TodoSerive', () => {
  let service: TodoSerive;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoSerive);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
