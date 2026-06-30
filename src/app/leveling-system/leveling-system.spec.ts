import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelingSystem } from './leveling-system';

describe('LevelingSystem', () => {
  let component: LevelingSystem;
  let fixture: ComponentFixture<LevelingSystem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LevelingSystem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelingSystem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
