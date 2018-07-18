import { Component } from '@angular/core';
import {UserService} from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [UserService]
})
export class AppComponent implements OnInit {
    
    users=[];

    constructor(private UserService:UserService){}

    ngOnInit(){
      this.UserService.getUser().subscribe( users=> {
        this.users = users;
      })
    }

  
}
