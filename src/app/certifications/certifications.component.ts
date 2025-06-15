import { Component } from '@angular/core';
import { CertificateItem } from '../dto/CertificateItem';

@Component({
    selector: 'app-certifications',
    imports: [],
    templateUrl: './certifications.component.html',
    styleUrl: './certifications.component.scss',
})
export class CertificationsComponent {
    certificates: CertificateItem[] = [
        {
            title: 'AWS Certified Solutions Architect',
            organization: 'Amazon Web Services',
            time: 'Jan 2023',
            link: 'https://certificates.example.com/aws-solutions-architect',
        },
        {
            title: 'Google Cloud Professional Engineer',
            organization: 'Google Cloud',
            time: 'Mar 2022',
            link: 'https://certificates.example.com/gcp-professional',
        },
        {
            title: 'Certified Kubernetes Administrator',
            organization: 'Cloud Native Computing Foundation',
            time: 'Sep 2021',
            link: 'https://certificates.example.com/cka',
        },
    ];
}
