import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ProjectItem } from '../dto/ProjectItem';

@Component({
    selector: 'app-project',
    imports: [],
    templateUrl: './project.component.html',
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
}
