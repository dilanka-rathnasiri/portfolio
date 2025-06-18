import { Component, OnInit } from '@angular/core';
import { BlogItem } from '../dto/BlogItem';
import { DataService } from '../services/data.service';

@Component({
    selector: 'app-blog',
    imports: [],
    templateUrl: './blog.component.html',
    styleUrl: './blog.component.scss',
})
export class BlogComponent implements OnInit {
    blogs: BlogItem[] = [];

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        this.dataService.loadData<BlogItem[]>('blogs').subscribe((data) => {
            this.blogs = data;
        });
    }
}
