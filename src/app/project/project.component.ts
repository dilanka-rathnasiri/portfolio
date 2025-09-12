import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ProjectItem } from '../dto/ProjectItem';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { LinkService } from '../services/link.service';

@Component({
    selector: 'app-project',
    imports: [CardModule, ButtonModule],
    templateUrl: './project.component.html',
})
export class ProjectComponent implements OnInit {
    projects: ProjectItem[] = [];
    linkService: LinkService;

    constructor(
        private dataService: DataService,
        linkService: LinkService
    ) {
        this.linkService = linkService;
    }

    ngOnInit(): void {
        this.dataService
            .loadData<ProjectItem[]>('projects')
            .subscribe((data) => {
                this.projects = data;
            });
    }
}
