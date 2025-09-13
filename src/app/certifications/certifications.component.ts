import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CertificateItem } from '../dto/CertificateItem';
import { DataService } from '../services/data.service';
import { LinkService } from '../services/link.service';

@Component({
    selector: 'app-certifications',
    imports: [CommonModule, CardModule, ButtonModule],
    templateUrl: './certifications.component.html',
})
export class CertificationsComponent implements OnInit {
    certificates: CertificateItem[] = [];

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

    openCertificateLink(url: string): void {
        this.linkService.openLinkInNewTab(url);
    }
}
