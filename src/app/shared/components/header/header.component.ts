import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../features/auth/services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../interfaces/User";
import {AdministrationService} from "../../../features/administration/services/administration.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  user!: User;

  constructor(
    private authService: AuthService,
    private router: Router,
    private administrationService: AdministrationService) {}

  ngOnInit() {
    this.administrationService
      .getCurrentUser()
      .subscribe(res => {
        this.user = res;
      });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
