import {Component, OnInit} from '@angular/core';
import {User} from "../../../../shared/interfaces/User";
import {AdministrationService} from "../../services/administration.service";
import {Faq} from "../../../../shared/interfaces/Faq";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent implements OnInit {
  faqs!: Array<Faq>;

  constructor(
    private toastrService: ToastrService,
    private router: Router,
    private administrationService: AdministrationService) {}

  ngOnInit() {
    this.administrationService
      .getFaq()
      .subscribe(res => {
        this.faqs = res;
      });
  }

  updateFaq(id: string) {
    this.router.navigate(['/faq/update'], { queryParams: { id: id } });
  }

  deleteFaq(id: string){
    this.administrationService
      .deleteFaq(id)
      .subscribe(res => {
        if (res) this.toastrService.success('ЧЗВ е изтрит успешно.');
        location.reload();
      });
  }
}
