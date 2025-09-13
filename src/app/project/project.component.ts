import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { LinkService } from '../services/link.service';
import { ProjectItem } from '../dto/ProjectItem';

@Component({
    selector: 'app-project',
    imports: [],
    templateUrl: './project.component.html',
})
export class ProjectComponent implements OnInit {
    projects: ProjectItem[] = [];

    openLink(link: string): void {
        this.linkService.openLinkInNewTab(link);
    }

    constructor(
        private dataService: DataService,
        private linkService: LinkService
    ) {}

    ngOnInit(): void {
        this.dataService
            .loadData<ProjectItem[]>('projects')
            .subscribe((data) => {
                this.projects = data;
            });
    }
}
