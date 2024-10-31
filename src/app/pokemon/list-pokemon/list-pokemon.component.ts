import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { Pokemon } from "../pokemon";
import { BorderCardDirective } from "../border-card.directive";
import { PokemonTypeColorPipe } from "../pokemon-type-color.pipe";
import { DetailPokemonComponent } from "../detail-pokemon/detail-pokemon.component";
import { Router } from "@angular/router";
import { PokemonService } from "../pokemon.service";
import { SearchPokemonComponent } from "../search-pokemon/search-pokemon.component";

@Component({
  selector: "app-list-pokemon",
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    BorderCardDirective,
    PokemonTypeColorPipe,
    DetailPokemonComponent,
    SearchPokemonComponent,
  ],
  templateUrl: "./list-pokemon.component.html",
  styles: ``,
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[];

  constructor(private router: Router, private pokemonService: PokemonService) {
    //const pokemonService = new PokemonService();  ça c'est interdit de le faire
  }

  ngOnInit() {
    this.pokemonService
      .getPokemonList()
      .subscribe((pokemonList) => (this.pokemonList = pokemonList));
  }

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(["/pokemon", pokemon.id]);
  }
}
