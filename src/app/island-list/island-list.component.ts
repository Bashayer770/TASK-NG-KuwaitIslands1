import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Island } from '../../data/islands';
import { IslandCardComponent } from '../island-card/island-card.component';

@Component({
  selector: 'app-island-list',
  standalone: true,
  imports: [IslandCardComponent],
  templateUrl: './island-list.component.html',
  styleUrl: './island-list.component.css',
})
export class IslandListComponent {
  @Input() islands!: Island[];
  @Output() islandClicked = new EventEmitter<Island>();

  handleIslandSelect(island: Island) {
    this.islandClicked.emit(island);
  }
}
