import { Component, OnInit } from '@angular/core';
import { BlogItem } from '../dto/BlogItem';
import { DataService } from '../services/data.service';
import { LinkService } from '../services/link.service';

@Component({
    selector: 'app-blog',
    imports: [],
    templateUrl: './blog.component.html',
})
export class BlogComponent implements OnInit {
    blogs: BlogItem[] = [];

    openLink(link: string): void {
        this.linkService.openLinkInNewTab(link);
    }

    constructor(
        private dataService: DataService,
        private linkService: LinkService
    ) {}

    ngOnInit(): void {
        this.dataService.loadData<BlogItem[]>('blogs').subscribe((data) => {
            this.blogs = data;
        });
    }
}
