import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { SkillItem } from '../dto/SkillItem';
import { DataService } from '../services/data.service';

@Component({
    selector: 'app-skills',
    imports: [CommonModule, CardModule],
    templateUrl: './skills.component.html',
})
export class SkillsComponent implements OnInit {
    skillsItems: SkillItem[] = [];

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        this.dataService.loadData<any[]>('skills').subscribe((data) => {
            this.skillsItems = data;
        });
    }
}
