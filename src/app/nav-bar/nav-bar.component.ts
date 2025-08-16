import { Component, HostListener } from '@angular/core';
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
    isMenuCollapsed = true;
    menuItems: NavBarItem[] = [
        { label: 'Home', link: '/', exact: true },
        { label: 'Projects', link: '/projects', exact: false },
        { label: 'Blogs', link: '/blogs', exact: false },
    ];

    @HostListener('window:resize', ['$event'])
    onResize() {
        // Close menu when screen size changes to desktop
        if (window.innerWidth >= 992) { // 992px is Bootstrap's lg breakpoint
            this.isMenuCollapsed = true;
        }
    }
}
