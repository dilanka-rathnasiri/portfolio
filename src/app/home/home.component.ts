import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { EducationItem } from '../dto/EducationItem';
import { ExperienceComponent } from '../experience/experience.component';
import { CertificationsComponent } from '../certifications/certifications.component';
import { WhatIDoComponent } from '../what-i-do/what-i-do.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillsComponent } from '../skills/skills.component';
import { EducationComponent } from '../education/education.component';

@Component({
    selector: 'app-home',
    imports: [
        ExperienceComponent,
        CertificationsComponent,
        WhatIDoComponent,
        AboutMeComponent,
        SkillsComponent,
        EducationComponent,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
    latestItems: EducationItem[] = [];

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        // Load latest items
        this.dataService.loadData<any[]>('latest-items').subscribe((data) => {
            this.latestItems = data;
        });
    }
}
