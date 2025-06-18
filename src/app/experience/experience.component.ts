import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ExperienceItem } from '../dto/ExperienceItem';

@Component({
    selector: 'app-experience',
    imports: [],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.scss',
})
export class ExperienceComponent implements OnInit {
    experienceItems: ExperienceItem[] = [];

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        this.dataService
            .loadData<ExperienceItem[]>('experience')
            .subscribe((data) => {
                this.experienceItems = data;
            });
    }
}
