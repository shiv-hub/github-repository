import { Component, OnInit, NgModule } from '@angular/core';
import {NgForm} from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  stat = false;
  userName:string;


  formLogin(formIn:NgForm){
      console.log(formIn.value.userlogin);
      if(formIn.value.userlogin){
        this.userName=formIn.value.userlogin;
          this.stat=true;
      }else{
        this.stat=false;
      }

      console.log(this.stat);
  }


  formLogout(formOut:NgForm){
      if(formOut){
        this.stat= false;
      }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
