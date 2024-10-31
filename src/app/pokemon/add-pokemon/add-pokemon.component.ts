import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../pokemon";
import { PokemonFormComponent } from "../pokemon-form/pokemon-form.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-add-pokemon",
  standalone: true,
  imports: [CommonModule, PokemonFormComponent],
  template: `
    <h2 class="centyer">Ajouter un pokémon</h2>
    <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: ``,
})
export class AddPokemonComponent implements OnInit {
  pokemon: Pokemon;

  ngOnInit() {
    this.pokemon = new Pokemon();
  }
}
