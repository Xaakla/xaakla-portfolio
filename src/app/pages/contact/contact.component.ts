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

  public title = 'Contact Me';
  public form!: FormGroup;

  constructor(
    private _titleService: Title,
    // private apiService: ApiService,
    private _fb: FormBuilder
  ) {}

  ngOnInit() {
    this._titleService.setTitle('Contact Me');
    this._createForm();
  }

  private _createForm() {
    this.form = this._fb.group({
      name: ['', [Validators.required]],
      subject: ['Proposta de Emprego - Portfolio Diego Rocha', Validators.required],
      replyTo: ['', [Validators.required]],
      text: ['', [Validators.required]],
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
    this.form.get(fieldName)?.markAsTouched();
  }

  public isTouched(fieldName: string): boolean {
    return this.form.controls[fieldName].touched;
  }

  onSubmit(): void {

  }

}
