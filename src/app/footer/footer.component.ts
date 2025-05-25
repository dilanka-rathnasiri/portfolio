import { Component } from '@angular/core';
import { SocialMediaComponent } from '../social-media/social-media.component';

@Component({
    selector: 'app-footer',
    imports: [SocialMediaComponent],
    templateUrl: './footer.component.html',
})
export class FooterComponent {
    currentYear: number = new Date().getFullYear();
}
