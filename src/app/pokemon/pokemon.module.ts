import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ListPokemonComponent } from "./list-pokemon/list-pokemon.component";
import { DetailPokemonComponent } from "./detail-pokemon/detail-pokemon.component";
import { BorderCardDirective } from "./border-card.directive";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";
import { RouterModule, Routes } from "@angular/router";
import { PokemonService } from "./pokemon.service";
import { EditPokemonComponent } from "./edit-pokemon/edit-pokemon.component";
import { PokemonFormComponent } from "./pokemon-form/pokemon-form.component";
import { AddPokemonComponent } from "./add-pokemon/add-pokemon.component";
import { AuthGuard } from "../auth.guard";

export const pokemonRoutes: Routes = [
  {
    path: "edit/pokemon/:id",
    component: EditPokemonComponent,
    canActivate: [AuthGuard],
  },
  { path: "pokemon/add", component: AddPokemonComponent },
  { path: "pokemons", component: ListPokemonComponent }, // accessible via "/pokemons"
  { path: "pokemon/:id", component: DetailPokemonComponent }, // accessible via "/pokemon/:id"
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    EditPokemonComponent,
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    RouterModule.forChild(pokemonRoutes),
  ], // Importez les composants autonomes ici
  providers: [PokemonService], //injecter le service au niveau du module pokemon
  exports: [PokemonFormComponent],
})
export class PokemonModule {}
