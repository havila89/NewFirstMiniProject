import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanentaddressComponent } from './permanentaddress.component';

describe('PermanentaddressComponent', () => {
  let component: PermanentaddressComponent;
  let fixture: ComponentFixture<PermanentaddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermanentaddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermanentaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
