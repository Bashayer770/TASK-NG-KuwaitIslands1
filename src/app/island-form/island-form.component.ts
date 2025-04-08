import { Component, Input } from '@angular/core';

import { Island } from '../../data/islands';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-island-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './island-form.component.html',
  styleUrl: './island-form.component.css',
})
export class IslandFormComponent {
  @Input() island!: Island;
  name: string = '';
  phone: string = '';

  onSubmit() {
    const confirmed = confirm(
      `Are you sure you want to book ${this.island.name} for ${this.name} (Phone: ${this.phone})?`
    );

    if (confirmed) {
      this.island.visitors.push({
        name: this.name,
        phone: this.phone,
      });

      this.name = '';
      this.phone = '';
    }
  }
}
