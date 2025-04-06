import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";

  // Static credentials
  staticCredentials = {
    email: "admin",
    password: "password123",
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}
  // login() {
  //   const storedUser = localStorage.getItem('user');
  //   if (storedUser) {
  //     const user = JSON.parse(storedUser);
  //     if (this.email === user.email && this.password === user.password) {
  //       localStorage.setItem('isLoggedIn', 'true'); // Store login state
  //       this.router.navigate(['/dashboard']); // Redirect to dashboard
  //     } else {
  //       alert('Invalid email or password');
  //     }
  //   } else {
  //     alert('No user found. Please sign up first.');
  //   }
  // }

  login() {
    let loginData = { email: this.email, password: this.password };

    // Check if the entered credentials match the static credentials
    // if (
    //   this.email === this.staticCredentials.email &&
    //   this.password === this.staticCredentials.password
    // ) {

    //   localStorage.setItem("isLoggedIn", "true"); // Store login state
    //   this.router.navigate(["/dashboard"]); // Redirect to dashboard
    // } else {
    //   alert("Invalid email or password");
    // }
    const api = fetch("http://localhost:5000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
      credentials: "include",
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        if (data) {
          this.router.navigate(["/dashboard"]);
        }
      })
      .catch((err) => console.error("Login error:", err));
  }

  onSubmit() {
    this.login();
  }
}
