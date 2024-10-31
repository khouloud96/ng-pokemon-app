import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PokemonFormComponent } from "./pokemon/pokemon-form/pokemon-form.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    PokemonFormComponent,
    FormsModule,
    RouterOutlet,
    CommonModule,
    PageNotFoundComponent,
  ],
  templateUrl: "app.component.html",
})
export class AppComponent {}
