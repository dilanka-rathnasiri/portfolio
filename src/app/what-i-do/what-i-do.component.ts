import { Component, OnInit } from '@angular/core';
import { WhatIDoItem } from '../dto/WhatIDoItem';
import { DataService } from '../services/data.service';

@Component({
    selector: 'app-what-i-do',
    imports: [],
    templateUrl: './what-i-do.component.html',
})
export class WhatIDoComponent implements OnInit {
    whatIDoItems: WhatIDoItem[] = [];

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        this.dataService.loadData<any[]>('what-i-do').subscribe((data) => {
            this.whatIDoItems = data;
        });
    }
}
