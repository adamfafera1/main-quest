import { Routes } from '@angular/router';
import { Home } from './home/home';
import { CharacterCustomization } from './character-customization/character-customization';
import { SkillTree } from './skill-tree/skill-tree';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'character-customization', component: CharacterCustomization},
    {path: 'skill-tree', component: SkillTree},
];
