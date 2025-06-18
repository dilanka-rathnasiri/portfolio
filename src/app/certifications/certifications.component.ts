import { Component, OnInit } from '@angular/core';
import { CertificateItem } from '../dto/CertificateItem';
import { DataService } from '../services/data.service';

@Component({
    selector: 'app-certifications',
    imports: [],
    templateUrl: './certifications.component.html',
    styleUrl: './certifications.component.scss',
})
export class CertificationsComponent implements OnInit {
    certificates: CertificateItem[] = [];

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        this.dataService
            .loadData<CertificateItem[]>('certifications')
            .subscribe((data) => {
                this.certificates = data;
            });
    }
}
