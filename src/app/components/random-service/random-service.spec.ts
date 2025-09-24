import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomService } from './random-service';

describe('RandomService', () => {
  let component: RandomService;
  let fixture: ComponentFixture<RandomService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
