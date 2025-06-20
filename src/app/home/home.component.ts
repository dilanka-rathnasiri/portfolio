import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { WhatIDoItem } from '../dto/WhatIDoItem';
import { SkillItem } from '../dto/SkillItem';
import { LatestItem } from '../dto/LatestItem';
import { ExperienceComponent } from '../experience/experience.component';
import { CertificationsComponent } from '../certifications/certifications.component';

@Component({
    selector: 'app-home',
    imports: [ExperienceComponent, CertificationsComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
    whatIDoItems: WhatIDoItem[] = [];
    skillsItems: SkillItem[] = [];
    latestItems: LatestItem[] = [];

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        // Load what I do items
        this.dataService.loadData<any[]>('what-i-do').subscribe((data) => {
            this.whatIDoItems = data;
        });

        // Load skills
        this.dataService.loadData<any[]>('skills').subscribe((data) => {
            this.skillsItems = data;
        });

        // Load latest items
        this.dataService.loadData<any[]>('latest-items').subscribe((data) => {
            this.latestItems = data;
        });
    }
}
