import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { SocialMediaItem } from '../dto/SocialMediaItem';

@Component({
    selector: 'app-social-media',
    imports: [],
    templateUrl: './social-media.component.html',
    styleUrl: './social-media.component.scss',
})
export class SocialMediaComponent implements OnInit {
    socialMediaItems: SocialMediaItem[] = [];

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        this.dataService
            .loadData<SocialMediaItem[]>('social-media')
            .subscribe((data) => {
                this.socialMediaItems = data;
            });
    }
}
