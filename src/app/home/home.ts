import { Component, inject } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private router = inject(Router);

  onCharacterCustomizationClick() {
    this.router.navigate(['/character-customization']);
  }

  onSkillTreeClick() {
    this.router.navigate(['/skill-tree']);
  }
}
