import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ExperienceItem } from '../dto/ExperienceItem';
import { DataService } from '../services/data.service';

@Component({
    selector: 'app-experience',
    imports: [CommonModule, CardModule],
    templateUrl: './experience.component.html',
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
