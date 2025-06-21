import { Component, OnInit } from '@angular/core';
import { SkillItem } from '../dto/SkillItem';
import { DataService } from '../services/data.service';

@Component({
    selector: 'app-skills',
    imports: [],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss',
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
