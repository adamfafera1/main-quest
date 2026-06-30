import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCustomization } from './character-customization';

describe('CharacterCustomization', () => {
  let component: CharacterCustomization;
  let fixture: ComponentFixture<CharacterCustomization>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterCustomization]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterCustomization);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
