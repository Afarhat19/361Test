import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyquizComponent } from './easyquiz.component';

describe('EasyquizComponent', () => {
  let component: EasyquizComponent;
  let fixture: ComponentFixture<EasyquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasyquizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EasyquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
