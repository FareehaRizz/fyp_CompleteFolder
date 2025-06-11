import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  Orgname: string = "";
  Orgemail: string = "";
  OrgPosition: string = "";
  password: string = "";
  public_key: string = "";
  city: string = "";
  country: string = "";
  PostalCode: string = "";
  AboutOrg: string = "";
  errorMessage = "";

  signupForm: FormGroup;
  hidePassword: boolean = true; // Default password visibility

  constructor(private fb: FormBuilder, private router: Router) {
    this.signupForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}
  
  onSubmit() {
    let signupData = {
      organizationName: this.Orgname,
      email: this.Orgemail,
      organizationPosition: this.OrgPosition,
      password: this.password,
      publicKey: this.public_key,
      city: this.city,
      country: this.country,
      postalCode: this.PostalCode,
      aboutOrganization: this.AboutOrg,
    };

    this.errorMessage = "";

    fetch("http://localhost:5000/auth/RegisterUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
      credentials: "include",
    })
      .then(async (res) => {
        if (res.ok) {
          return res.json();
        } else {
          const errorText = await res.text();
          throw new Error(errorText || "Registration failed");
        }
      })
      .then((data) => {
        if (data) {
          this.router.navigate(["/login"]);
        }
      })
      .catch((error) => {
        this.errorMessage = error.message;
      });
  }

  // Toggle password visibility
  togglePasswordVisibility(input: HTMLInputElement) {
    input.type = input.type === "password" ? "text" : "password";
  }
}
