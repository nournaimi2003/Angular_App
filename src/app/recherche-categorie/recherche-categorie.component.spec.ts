import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheCategorieComponent } from './recherche-categorie.component';

describe('RechercheCategorieComponent', () => {
  let component: RechercheCategorieComponent;
  let fixture: ComponentFixture<RechercheCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RechercheCategorieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RechercheCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
