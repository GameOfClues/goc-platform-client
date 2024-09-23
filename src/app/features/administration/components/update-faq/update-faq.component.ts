import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {AdministrationService} from "../../services/administration.service";
import {Faq} from "../../../../shared/interfaces/Faq";

@Component({
  selector: 'app-update-faq',
  templateUrl: './update-faq.component.html',
  styleUrl: './update-faq.component.css'
})
export class UpdateFaqComponent implements OnInit {
  updateFaqForm: FormGroup;
  faq!: Faq;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private toastrService: ToastrService,
    private administrationService: AdministrationService) {
    this.updateFaqForm = this.formBuilder.group({
      question: ['', [Validators.required, Validators.minLength(2)]],
      answer: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(res => {
      this.administrationService.getFaqById(res['id']).subscribe(res => {
        this.faq = res;

        this.updateFaqForm.patchValue({
          question: this.faq.question,
          answer: this.faq.answer
        });
      });
    });
  }

  updateFaq(): void {
    if (this.updateFaqForm.invalid) {
      this.updateFaqForm.markAllAsTouched();
      this.toastrService.error('Една или повече валидации не преминаха успешно.');
      return;
    }

    this.administrationService
      .updateFaq(this.faq._id, this.updateFaqForm.value)
      .subscribe(res => {
        this.router
          .navigate(['faq'])
          .then(() => this.toastrService.success('ЧЗВ е редактиран успешно.'));
      });
  }

  get question() {
    return this.updateFaqForm.get('question');
  }

  get answer() {
    return this.updateFaqForm.get('answer');
  }
}
