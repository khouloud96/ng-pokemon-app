import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../pokemon";
import { Router } from "@angular/router";
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  Subject,
  switchMap,
} from "rxjs";
import { CommonModule } from "@angular/common";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "app-search-pokemon",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./search-pokemon.component.html",
  styles: ``,
})
export class SearchPokemonComponent implements OnInit {
  //{.."a".."ab".."abz".."ab"..."abc".....}
  searchTerms = new Subject<string>();
  //{...pokemonList(a)...pokemonsList(ab)...}
  pokemons$: Observable<Pokemon[]>;

  constructor(private router: Router, private pokemonService: PokemonService) {}
  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      //{..."a"."ab"..."abz"."ab"...."abc"....}
      debounceTime(300),
      //{..."ab"...."ab"...."abc"....}
      distinctUntilChanged(),
      //{..."ab"............."abc".......}
      switchMap((term) => this.pokemonService.searchPokemonList(term))
      //{....pokemonList(ab).........pokemonList(abc).......}
    );
  }
  search(term: string) {
    this.searchTerms.next(term);
  }

  goToDetail(pokemon: Pokemon) {
    const link = ["/pokemon", pokemon.id];
    this.router.navigate(link);
  }
}
