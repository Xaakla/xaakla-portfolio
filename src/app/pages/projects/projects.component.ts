import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../services/api/api.service';
import {SharedModule} from "@shared/shared.module";
import {LoadingComponent} from "@shared/loading/loading.component";
import {AlertService} from "../../services/rest/alert.service";
import {DatePipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [
    SharedModule,
    LoadingComponent,
    NgIf,
    NgForOf,
    DatePipe
  ],
  providers: [
    ApiService,
    AlertService
  ],
  standalone: true
})
export class ProjectsComponent implements OnInit {
  public title = 'My Work';
  public projects = [];
  public loading = true;

  constructor(
    private titleService: Title,
    private _apiService: ApiService,
    private _alertService: AlertService
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Projects');
    this._findAllProjects(() => {});
  }

  private _findAllProjects(cb: () => void) {
    this._apiService.findAllProjects()
      .subscribe({
        next: (data: any) => {
          this.projects = data;
        }, error: () => {
          this._alertService.errorToast('Erro ao buscar os projetos');
          // this.loading = false;
        }, complete: () => this.loading = false
      });
  }

  private _findAllImageProjects() {

  }

  public handleShowDescription(projectId: number) {
    const el = document.querySelector(`#project-description-${projectId}`);
    el?.classList.toggle('show');
  }
}
