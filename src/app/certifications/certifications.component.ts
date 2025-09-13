import { Component, OnInit } from '@angular/core';
import { CertificateItem } from '../dto/CertificateItem';
import { DataService } from '../services/data.service';
import { LinkService } from '../services/link.service';

@Component({
    selector: 'app-certifications',
    imports: [],
    templateUrl: './certifications.component.html',
})
export class CertificationsComponent implements OnInit {
    certificates: CertificateItem[] = [];

    openLink(link: string): void {
        this.linkService.openLinkInNewTab(link);
    }

    constructor(
        private dataService: DataService,
        private linkService: LinkService
    ) {}

    ngOnInit(): void {
        this.dataService
            .loadData<CertificateItem[]>('certifications')
            .subscribe((data) => {
                this.certificates = data;
            });
    }
}
