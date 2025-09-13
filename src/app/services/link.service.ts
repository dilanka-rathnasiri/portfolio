import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LinkService {
    public openLinkInNewTab(link: string): void {
        window.open(link, '_blank', 'noopener,noreferrer');
    }
}
