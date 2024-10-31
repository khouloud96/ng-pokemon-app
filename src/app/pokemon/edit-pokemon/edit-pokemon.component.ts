import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Pokemon } from "../pokemon";
import { ActivatedRoute } from "@angular/router";
import { PokemonService } from "../pokemon.service";
import { PokemonFormComponent } from "../pokemon-form/pokemon-form.component";

@Component({
  selector: "app-edit-pokemon",
  standalone: true,
  imports: [CommonModule, PokemonFormComponent], // Importez le composant autonome directement
  template: `
    <h2 class="center">Editer {{ pokemon?.name }}</h2>
    <p *ngIf="pokemon" class="center">
      <img [src]="pokemon.picture" />
    </p>

    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: ``,
})
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;

  constructor(
    private router: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    const pokemonId: string | null = this.router.snapshot.paramMap.get("id");

    if (pokemonId) {
      this.pokemonService
        .getPokemonById(+pokemonId)
        .subscribe((pokemon) => (this.pokemon = pokemon));
    }
  }
}
