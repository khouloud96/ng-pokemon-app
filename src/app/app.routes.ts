import { Routes } from "@angular/router";

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { LoginComponent } from "./login/login.component";

// ordre des routes est important
// plus la route est spécifique elle sera en haut et une route global est au dessous
export const routes: Routes = [
  { path: "", redirectTo: "pokemons", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "",
    loadChildren: () =>
      import("./pokemon/pokemon.module").then((m) => m.PokemonModule),
  },

  { path: "**", component: PageNotFoundComponent },
];

//router-outlet : relier les routes
