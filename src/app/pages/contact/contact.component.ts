import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ApiService} from '../../services/api/api.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SharedModule} from "@shared/shared.module";
import {NgClass} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {AlertService} from "../../services/rest/alert.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  standalone: true,
  imports: [
    SharedModule,
    HttpClientModule,
    NgClass
  ],
  providers: [
    ApiService,
    AlertService
  ],
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public title = 'Contact Me';
  public form!: FormGroup;

  constructor(
    private _titleService: Title,
    private _apiService: ApiService,
    private _alertService: AlertService,
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

  public markAsTouched(fieldName: string) {
    this.form.get(fieldName)?.markAsTouched();
  }

  public isTouched(fieldName: string): boolean {
    return this.form.controls[fieldName].touched;
  }

  public isValid(name: string, showIcon: boolean = true, showIfValid: boolean = false): { // @ts-ignore
    'is-invalid', 'is-valid'
  } {
    const el = this.form.get(name);
    // @ts-ignore
    const invalid = (!el.valid && (el.touched || el.dirty) && el.status === 'INVALID');
    return {
      'is-invalid': invalid,
      'is-valid': (showIfValid && el?.valid)
    };
  }
  private _markAllFormFieldsAsTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control?.markAsDirty();
      control?.markAsTouched();
    });
  }

  public onSubmit() {
    if (this.form.valid) {
      this._submit();
    } else {
      this._markAllFormFieldsAsTouched(this.form);
    }
  }

  private _submit() {
      this._apiService.sendMail({
        sender: this.form.get('replyTo')?.value,
        subject: `${this.form.get('name')?.value} - ${this.form.get('subject')?.value}`,
        body: this.form.get('text')?.value,
      }).subscribe({
        next: () => {
          console.log('deu')
        }, error: () => this._alertService.errorToast("deu merda")
      });
  }

}
