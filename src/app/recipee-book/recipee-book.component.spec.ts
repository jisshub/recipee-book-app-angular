import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeeBookComponent } from './recipee-book.component';

describe('RecipeeBookComponent', () => {
  let component: RecipeeBookComponent;
  let fixture: ComponentFixture<RecipeeBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeeBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeeBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
