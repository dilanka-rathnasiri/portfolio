import { Component } from '@angular/core';
import { SocialMediaItem } from '../dto/SocialMediaItem';

@Component({
    selector: 'app-social-media',
    imports: [],
    templateUrl: './social-media.component.html',
})
export class SocialMediaComponent {
    socialMediaItems: SocialMediaItem[] = [
        {
            label: 'Linkedin',
            link: 'https://www.linkedin.com/in/dilankarathnasiri',
            icon: 'fab fa-linkedin',
        },
        {
            label: 'GitHub',
            link: 'https://github.com/dilanka-rathnasiri',
            icon: 'fab fa-github',
        },
        {
            label: 'Dev.to',
            link: 'https://dev.to/dilanka-rathnasiri',
            icon: 'fab fa-dev',
        },
    ];
}
