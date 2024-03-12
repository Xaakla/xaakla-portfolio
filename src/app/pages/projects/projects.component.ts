import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../services/api/api.service';
import {SharedModule} from "@shared/shared.module";
import {LoadingComponent} from "@shared/loading/loading.component";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [
    SharedModule,
    LoadingComponent
  ],
  standalone: true
})
export class ProjectsComponent implements OnInit {
  public title = 'My Work';
  slides = [];

  constructor(
    private titleService: Title,
    // private apiService: ApiService
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Projects');
    // this.apiService.list()._subscribe((response) => {
    //   this.slides = [...this.slides, ...response];
    //   console.log(this.slides);
    // });
  }
}
