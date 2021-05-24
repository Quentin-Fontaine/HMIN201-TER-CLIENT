import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnHotelsComponent } from './own-hotels.component';

describe('OwnHotelsComponent', () => {
  let component: OwnHotelsComponent;
  let fixture: ComponentFixture<OwnHotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnHotelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
