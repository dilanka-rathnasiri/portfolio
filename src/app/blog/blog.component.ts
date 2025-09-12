import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { BlogItem } from '../dto/BlogItem';
import { DataService } from '../services/data.service';
import { LinkService } from '../services/link.service';

@Component({
    selector: 'app-blog',
    imports: [CommonModule, CardModule, ButtonModule],
    templateUrl: './blog.component.html',
})
export class BlogComponent implements OnInit {
    blogs: BlogItem[] = [];
    linkService: LinkService;

    constructor(
        private dataService: DataService,
        linkService: LinkService
    ) {
        this.linkService = linkService;
    }

    ngOnInit(): void {
        this.dataService.loadData<BlogItem[]>('blogs').subscribe((data) => {
            this.blogs = data;
        });
    }
}
