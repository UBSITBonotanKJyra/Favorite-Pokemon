import { Component, inject } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemart',
  imports: [CommonModule],
  templateUrl: './pokemart.component.html',
  styleUrl: './pokemart.component.css'
})
export class PokemartComponent {
  PokemonService = inject(PokemonService);
}
