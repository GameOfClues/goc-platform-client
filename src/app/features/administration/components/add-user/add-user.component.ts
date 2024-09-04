import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdministrationService } from '../../services/administration.service';
import { Router } from '@angular/router';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  createUserForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastrService: ToastrService,
    private administrationService: AdministrationService) {
    this.createUserForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]]
    });
  }

  createUser(): void {
    if (this.createUserForm.invalid) {
      this.createUserForm.markAllAsTouched();
      this.toastrService.error('Една или повече валидации не преминаха успешно.');
      return;
    }

    this.administrationService
      .createUser(this.createUserForm.value)
      .subscribe(res => {
        this.router
          .navigate(['administration', 'users'])
          .then(() => this.toastrService.success('Потребителят е създаден успешно.'));
      });
  }

  get firstName() {
    return this.createUserForm.get('firstName');
  }

  get lastName() {
    return this.createUserForm.get('lastName');
  }

  get email() {
    return this.createUserForm.get('email');
  }

  get phoneNumber() {
    return this.createUserForm.get('phoneNumber');
  }
}
