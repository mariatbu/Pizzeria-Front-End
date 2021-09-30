import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapImageComponent } from './cap-image.component';

describe('CapImageComponent', () => {
  let component: CapImageComponent;
  let fixture: ComponentFixture<CapImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
