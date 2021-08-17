import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftsetsComponent } from './giftsets.component';

describe('GiftsetsComponent', () => {
  let component: GiftsetsComponent;
  let fixture: ComponentFixture<GiftsetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftsetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftsetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
