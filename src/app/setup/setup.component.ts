import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.sass']
})
export class SetupComponent implements OnInit {

   size;

  constructor(private usersService:UserService) { }

  ngOnInit() {
     this.size = this.usersService.size;
  }

  onChange(){
     this.usersService.setSize(+this.size);
  }

}
