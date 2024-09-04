import {Component, OnInit} from '@angular/core';
import {User} from "../../../../shared/interfaces/User";
import {AdministrationService} from "../../services/administration.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users!: Array<User>;

  constructor(private administrationService: AdministrationService) {}

  ngOnInit() {
    this.administrationService
      .getUsers()
      .subscribe(res => {
        this.users = res;
      });
  }
}
