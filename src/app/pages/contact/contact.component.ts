import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ApiService} from '../../services/api/api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SharedModule} from "@shared/shared.module";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  standalone: true,
  imports: [
    SharedModule
  ],
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactForm!: FormGroup;

  constructor(
    private _titleService: Title,
    // private apiService: ApiService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this._titleService.setTitle('Contact Me');
    this.initForm();
  }

  initForm() {
    this.contactForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      subject: ['Proposta de Emprego - Portfolio Diego Rocha', Validators.required],
      replyTo: [null, [Validators.required]],
      text: [null, [Validators.required]],
    });
  }

  sendMessage() {
    // console.log(this.contactForm);
    // if (this.contactForm.valid) {
    //   this.apiService.sendMail(this.contactForm.value)
    //     .subscribe(/*What to do after sending mail*/);
    // }
  }

  public markAsTouched(fieldName: string) {
    this.contactForm.get(fieldName)?.markAsTouched();
  }

}
