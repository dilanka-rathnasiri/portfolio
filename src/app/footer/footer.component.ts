import { Component } from '@angular/core';
import { SocialMediaComponent } from '../social-media/social-media.component';
import { LinkService } from '../services/link.service';

@Component({
    selector: 'app-footer',
    imports: [SocialMediaComponent],
    templateUrl: './footer.component.html',
})
export class FooterComponent {
    currentYear: number = new Date().getFullYear();

    constructor(private linkService: LinkService) {}

    openLink(link: string): void {
        this.linkService.openLinkInNewTab(link);
    }
}
