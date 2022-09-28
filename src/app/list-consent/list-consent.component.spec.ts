import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConsentComponent } from './list-consent.component';

describe('ListConsentComponent', () => {
  let component: ListConsentComponent;
  let fixture: ComponentFixture<ListConsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListConsentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
