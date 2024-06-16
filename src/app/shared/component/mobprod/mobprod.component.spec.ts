import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobprodComponent } from './mobprod.component';

describe('MobprodComponent', () => {
  let component: MobprodComponent;
  let fixture: ComponentFixture<MobprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobprodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
