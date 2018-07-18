import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {
   constructor(private http: HttpClient){}

   getUser(){
      return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb%27')
      .pipe(map(response =>response['results']))
      .pipe(map(users =>{
         return users.map(u=>{
            return{
               name: u.name.first + " " + u.name.last,
               image: u.picture.large,
               geo: u.location.city + " " + u.location.state + " " + u.location.street
            } 
         })
      }))
      ;﻿
   }

   users=[
     {name: "wfn 1"},
     {name: "wfn 2"},
     {name: "wfn 3"},
     {name: "wfn 4"},
     {name: "wfn 5"},
     {name: "wfn 6"}
   ]
}
