import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router'
import { ButtonDirective } from 'primeng/button';

@Component({
  selector: 'app-home',
  imports: [ButtonDirective],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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
