import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastrService: ToastrService,
    private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required]]
    });
  }

  login(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.toastrService.error('Една или повече валидации не преминаха успешно.');
      return;
    }

    this.authService
      .login(this.loginForm.value)
      .subscribe(data => {
        if (data.token) {
          const roles = this.authService.getRoles(data.token);

          if (!roles.includes('admin')) {
            this.toastrService.error('Нямате достъп до платформата.');
            this.loginForm.reset();
            return;
          }

          this.authService.saveToken(data.token);
          this.router
            .navigate(['/'])
            .then(() => this.toastrService.success('Успешно влязохте в профила си.'));
        }
      });
  }

  // Get form fields
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
