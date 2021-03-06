import { Component, OnInit } from '@angular/core';
import {UserInfo, UserModel} from '../../models/user.model';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  private currentUser: UserModel;
  private users: UserModel[];

  constructor() {

    //console.log('test')
  }


  updateUser(user: UserModel){
    const inx = this.users.findIndex(u => u.id === user.id);

    if (inx >= 0){

      this.users[inx].username = user.username;
      this.users[inx].email = user.email;
    }

  }

  ngOnInit() {
    console.log('User Container Init');


    this.users =  [
      new UserModel(0, 'johndoe', 'johndoe@gmail.com',
        new UserInfo('John', 'Doe', 'Clerk', 'http://authenticgoods.co/wrapbootstrap/themes/sparks/img/team/avatar-male.png')
      ),
      new UserModel(1, 'janedoe', 'janedoe@gmail.com',
        new UserInfo('Jane', 'Doe', 'Developer', 'http://authenticgoods.co/wrapbootstrap/themes/sparks/img/portfolio/small/01.png')
      ),
      new UserModel(2, 'johnsmith', 'johnsmith@gmail.com',
        new UserInfo('John', 'Smith', 'Sales', 'http://authenticgoods.co/wrapbootstrap/themes/sparks/img/header.png')
      ),
      new UserModel(3, 'janesmith', 'janesmith@gmail.com',
        new UserInfo('Jane', 'DBA', 'Developer', 'http://authenticgoods.co/wrapbootstrap/themes/sparks/img/portfolio/small/03.png')
      ),


    ]

  }

  onItemClicked(user: UserModel){
    this.currentUser = user;
  }

}
