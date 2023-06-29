import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentaddressComponent } from './currentaddress.component';

describe('CurrentaddressComponent', () => {
  let component: CurrentaddressComponent;
  let fixture: ComponentFixture<CurrentaddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentaddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
