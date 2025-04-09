import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  errorMessage: string = "";
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
    if (!this.email || !this.password) {
      this.errorMessage = "Emal and password are required";
      return;
    }

    fetch("http://localhost:5000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
      credentials: "include",
    })
      .then(async (response) => {
        console.log(response);
        const resData = await response.json();
        console.log(resData);

        if (!response.ok) {
          // Check if the error is a structured object
          if (resData.error) {
            const firstErrorKey = Object.keys(resData.error)[0];
            this.errorMessage = resData.error[firstErrorKey];
          } else {
            this.errorMessage = "Login failed. Please try again.";
          }
          throw new Error(this.errorMessage);
        }

        // Login successful
        this.router.navigate(["/dashboard"]);
      })
      .catch((err) => {
        console.error("Login error:", err);
      });
  }

  onSubmit() {
    this.login();
  }
}
