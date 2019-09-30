import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerQueriesComponent } from './customer-queries.component';

describe('CustomerQueriesComponent', () => {
  let component: CustomerQueriesComponent;
  let fixture: ComponentFixture<CustomerQueriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerQueriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
