import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipStoreComponent } from './chip-store.component';

describe('ChipStoreComponent', () => {
  let component: ChipStoreComponent;
  let fixture: ComponentFixture<ChipStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
