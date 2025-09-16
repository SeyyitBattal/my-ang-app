import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprovedMdf } from './improved-mdf';

describe('ImprovedMdf', () => {
  let component: ImprovedMdf;
  let fixture: ComponentFixture<ImprovedMdf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImprovedMdf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImprovedMdf);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
