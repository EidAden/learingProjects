import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GPassword } from './g-password';

describe('GPassword', () => {
  let component: GPassword;
  let fixture: ComponentFixture<GPassword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GPassword]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GPassword);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
