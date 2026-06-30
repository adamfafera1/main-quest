import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillTree } from './skill-tree';

describe('SkillTree', () => {
  let component: SkillTree;
  let fixture: ComponentFixture<SkillTree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillTree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillTree);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
