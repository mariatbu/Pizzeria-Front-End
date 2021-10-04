import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapErrorComponent } from './cap-error.component';

describe('CapErrorComponent', () => {
  let component: CapErrorComponent;
  let fixture: ComponentFixture<CapErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
