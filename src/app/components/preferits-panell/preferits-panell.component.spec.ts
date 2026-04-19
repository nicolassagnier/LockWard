import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferitsPanellComponent } from './preferits-panell.component';

describe('PreferitsPanellComponent', () => {
  let component: PreferitsPanellComponent;
  let fixture: ComponentFixture<PreferitsPanellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreferitsPanellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreferitsPanellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
