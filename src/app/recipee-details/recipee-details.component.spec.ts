import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeeDetailsComponent } from './recipee-details.component';

describe('RecipeeDetailsComponent', () => {
  let component: RecipeeDetailsComponent;
  let fixture: ComponentFixture<RecipeeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
