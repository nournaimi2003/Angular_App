import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalbarComponent } from './talbar.component';

describe('TalbarComponent', () => {
  let component: TalbarComponent;
  let fixture: ComponentFixture<TalbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TalbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TalbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
