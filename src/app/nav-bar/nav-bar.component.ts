import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SocialMediaComponent } from '../social-media/social-media.component';
import { NavBarItem } from '../dto/NavBarItem';

@Component({
    selector: 'app-nav-bar',
    imports: [RouterLink, RouterLinkActive, SocialMediaComponent],
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
    menuItems: NavBarItem[] = [
        { label: 'Home', link: '/', exact: true },
        { label: 'Projects', link: '/projects', exact: false },
        { label: 'Blogs', link: '/blogs', exact: false },
    ];
}
