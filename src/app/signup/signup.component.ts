import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  fullname: string = "";
  email: string = "";
  password: string = "";
  organization: string = "";
  public_key: string = "";

  signupForm: FormGroup;
  hidePassword: boolean = true; // Default password visibility

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    let signupData = {
      name: this.fullname,
      email: this.email,
      password: this.password,
      organization: this.organization,
      publicKey: this.public_key,
    };
    fetch("http://localhost:5000/auth/RegisterUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
      credentials: "include",
    }).then((res) => {
      if (res.status == 200) {
        return res.json();
      }
    });
  }
  // Toggle password visibility
  togglePasswordVisibility(input: HTMLInputElement) {
    input.type = input.type === "password" ? "text" : "password";
  }
}
