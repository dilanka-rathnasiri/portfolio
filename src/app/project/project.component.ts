import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ProjectItem } from '../dto/ProjectItem';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-project',
    imports: [CardModule, ButtonModule],
    templateUrl: './project.component.html',
    styleUrl: './project.component.scss',
})
export class ProjectComponent implements OnInit {
    projects: ProjectItem[] = [];

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        this.dataService
            .loadData<ProjectItem[]>('projects')
            .subscribe((data) => {
                this.projects = data;
            });
    }

    openGitHubLink(link: string): void {
        window.open(link, '_blank', 'noopener,noreferrer');
    }
}
