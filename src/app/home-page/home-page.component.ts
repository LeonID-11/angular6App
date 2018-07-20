import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

   users = [];
   searchStr = '';

   constructor(private UserService:UserService){}

   ngOnInit(){
      this.UserService.getUser().subscribe( users=> {
        this.users = users;
      })
   }

}
