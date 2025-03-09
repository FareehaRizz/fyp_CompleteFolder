import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  hidePassword: boolean = true; // Default password visibility


  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
   }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.signupForm.valid) {
      console.log('User registered:', this.signupForm.value);
    }
  }
  // Toggle password visibility
  togglePasswordVisibility(input: HTMLInputElement) {
    input.type = input.type === 'password' ? 'text' : 'password';
  }

}
