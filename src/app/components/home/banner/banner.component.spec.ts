import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BannerComponent } from './banner.component';

import Typewriter from 'typewriter-effect/dist/core';

new Typewriter('#typewriter', {
  strings: ['Hello', 'World'],
  autoStart: true,
});

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
