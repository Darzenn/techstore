import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyZone } from './buy-zone';

describe('BuyZone', () => {
  let component: BuyZone;
  let fixture: ComponentFixture<BuyZone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyZone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyZone);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
