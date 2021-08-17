import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LipsComponent } from './lips.component';

describe('LipsComponent', () => {
  let component: LipsComponent;
  let fixture: ComponentFixture<LipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
