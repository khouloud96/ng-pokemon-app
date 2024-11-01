import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./login.component.html",
  styles: ``,
})
export class LoginComponent implements OnInit {
  message: string = "Vous êtes déconnectés, (pikachu/pikachu)";
  name: string;
  password: string;
  authService: AuthService;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService = this.auth;
  }

  // Informe l'utilisateur sur son authentfication.
  setMessage() {
    if (this.auth.isLoggedIn) {
      this.message = "Vous êtes connecté";
    } else {
      this.message = "Identifiant ou mot de passe incorrect.";
    }
  }

  // Connecte l'utilisateur auprès du Guard
  login() {
    this.message = "Tentative de connexion en cours ...";
    this.auth
      .login(this.name, this.password)
      .subscribe((isLoggedIn: boolean) => {
        this.setMessage();
        if (isLoggedIn) {
          this.router.navigate(["/pokemons"]);
        } else {
          this.password = "";
          this.router.navigate(["/login"]);
        }
      });
  }

  // Déconnecte l'utilisateur
  logout() {
    this.auth.logout();
    this.setMessage();
  }
}
