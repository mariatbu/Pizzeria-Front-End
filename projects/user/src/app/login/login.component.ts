import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { User } from '../login';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  socialUser: SocialUser = new SocialUser;
  userLogged: SocialUser = new SocialUser;
  isLogged: boolean = false;

  constructor(private userService: UserService, private router: Router, private authService: SocialAuthService) { }

  userForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', Validators.required)
  });

  userLogin: User={
    email: "",
    password: ""
  }

  onSubmit(){
    
  }

  ngOnInit(): void {
    this.authService.authState.subscribe(
      data => {
        this.userLogged = data;
        this.isLogged = (this.userLogged != null)
      }
    );
  }

  //Social login
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      data => {
        console.log(data);
        this.socialUser = data;
        this.isLogged = true;
        this.router.navigate(['/']);
      }
    );
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      data => {
        console.log(data);
        this.socialUser = data;
        this.isLogged = true;
        this.router.navigate(['/']);
      }
    );
  }

  logout(): void {
    this.authService.signOut();
  }
}
