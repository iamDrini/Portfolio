import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmePage } from './aboutme-page';

describe('AboutmePage', () => {
  let component: AboutmePage;
  let fixture: ComponentFixture<AboutmePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutmePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutmePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
