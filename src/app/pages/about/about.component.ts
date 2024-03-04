import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {SharedModule} from "@shared/shared.module";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  standalone: true,
  imports: [
    SharedModule
  ],
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public myAge: number = new Date().getUTCFullYear() - 2004;

  constructor(private _titleService: Title) {}

  ngOnInit() {
    this._titleService.setTitle("About Me");
  }

}
