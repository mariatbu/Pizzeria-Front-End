import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import userStorage from 'projects/core/src/lib/user/userStorage';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(private userService: UserService, private router: Router) { }

  onSubmit(){
    const user = this.userForm.value;
    if(this.userForm.valid){
      const observer = this.userService.addUser(user);
      const unsubscribe = observer.subscribe(async (data)=>{
        await userStorage.addUser(data);
        this.router.navigate(["login"]);
      })
      alert("Usuario creado");
    }

  }

  ngOnInit(): void {
  }
}
