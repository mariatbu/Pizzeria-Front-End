import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { UserService } from '../service/user.service';
import { UserCreateDTO } from '../userDTO/userCreateDTO';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private userService: UserService) { 
  }

  // userForm = new FormGroup({
  //   firstName: new FormControl('', Validators.required),
  //   lastName: new FormControl('',  Validators.required),
  //   email: new FormControl('',  [Validators.required, Validators.email]),
  //   password: new FormControl('',Validators.required)
  // });
  // methodPost(){
  //   this.userService.post(this.user);
  // }
  

 // destroy$: Subject<boolean> = new Subject<boolean>();  

  // onSubmit() {
  //   this.userService.post(this.userForm.value).pipe(takeUntil(this.destroy$)).subscribe(() => {
  //     this.userForm.reset();
  //   });
  // }

  ngOnInit(): void {
  }

}
