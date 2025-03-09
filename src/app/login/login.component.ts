import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  username: string = '';
  password: string = '';
  
  // Static credentials
  staticCredentials = {
    username: 'admin',
    password: 'password123'
  };

  //loginData = { username: '', password: '' };
  
  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  // login() {
  //   const storedUser = localStorage.getItem('user');
  //   if (storedUser) {
  //     const user = JSON.parse(storedUser);
  //     if (this.username === user.username && this.password === user.password) {
  //       localStorage.setItem('isLoggedIn', 'true'); // Store login state
  //       this.router.navigate(['/dashboard']); // Redirect to dashboard
  //     } else {
  //       alert('Invalid username or password');
  //     }
  //   } else {
  //     alert('No user found. Please sign up first.');
  //   }
  // }
 

  login() {
    // Check if the entered credentials match the static credentials
    if (this.username === this.staticCredentials.username && this.password === this.staticCredentials.password) {
      localStorage.setItem('isLoggedIn', 'true'); // Store login state
      this.router.navigate(['/dashboard']); // Redirect to dashboard
    } else {
      alert('Invalid username or password');
    }
  }

 
  onSubmit(){
    this.login();
  }
 
}


