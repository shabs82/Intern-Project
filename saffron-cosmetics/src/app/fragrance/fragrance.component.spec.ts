import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FragranceComponent } from './fragrance.component';

describe('FragranceComponent', () => {
  let component: FragranceComponent;
  let fixture: ComponentFixture<FragranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FragranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FragranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
