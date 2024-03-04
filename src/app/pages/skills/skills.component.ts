import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {SharedModule} from "@shared/shared.module";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  imports: [
    SharedModule
  ],
  standalone: true
})
export class SkillsComponent implements OnInit {
  public title = 'Skills';

  constructor(private _titleService: Title) {}

  ngOnInit() {
    this._titleService.setTitle('Skills');
  }
}
