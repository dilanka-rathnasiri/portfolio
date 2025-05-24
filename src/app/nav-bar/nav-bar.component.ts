import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SocialMediaComponent } from '../social-media/social-media.component';

@Component({
    selector: 'app-nav-bar',
    imports: [RouterLink, RouterLinkActive, SocialMediaComponent],
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {}
