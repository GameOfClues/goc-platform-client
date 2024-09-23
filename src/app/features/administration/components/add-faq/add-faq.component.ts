import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {AdministrationService} from "../../services/administration.service";

@Component({
  selector: 'app-add-faq',
  templateUrl: './add-faq.component.html',
  styleUrl: './add-faq.component.css'
})
export class AddFaqComponent {
  createFaqForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastrService: ToastrService,
    private administrationService: AdministrationService) {
    this.createFaqForm = this.formBuilder.group({
      question: ['', [Validators.required, Validators.minLength(2)]],
      answer: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  createFaq(): void {
    if (this.createFaqForm.invalid) {
      this.createFaqForm.markAllAsTouched();
      this.toastrService.error('Една или повече валидации не преминаха успешно.');
      return;
    }

    this.administrationService
      .createFaq(this.createFaqForm.value)
      .subscribe(res => {
        this.router
          .navigate(['faq'])
          .then(() => this.toastrService.success('ЧЗВ е създаден успешно.'));
      });
  }

  get question() {
    return this.createFaqForm.get('question');
  }

  get answer() {
    return this.createFaqForm.get('answer');
  }
}
