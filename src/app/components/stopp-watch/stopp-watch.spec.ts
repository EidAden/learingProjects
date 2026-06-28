import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoppWatch } from './stopp-watch';

describe('StoppWatch', () => {
  let component: StoppWatch;
  let fixture: ComponentFixture<StoppWatch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoppWatch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoppWatch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
