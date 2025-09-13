import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { LinkService } from '../services/link.service';
import { SocialMediaItem } from '../dto/SocialMediaItem';

@Component({
    selector: 'app-social-media',
    imports: [],
    templateUrl: './social-media.component.html',
    styleUrl: './social-media.component.scss',
})
export class SocialMediaComponent implements OnInit {
    socialMediaItems: SocialMediaItem[] = [];

    openLink(link: string): void {
        this.linkService.openLinkInNewTab(link);
    }

    constructor(
        private dataService: DataService,
        private linkService: LinkService
    ) {}

    ngOnInit(): void {
        this.dataService
            .loadData<SocialMediaItem[]>('social-media')
            .subscribe((data) => {
                this.socialMediaItems = data;
            });
    }
}
