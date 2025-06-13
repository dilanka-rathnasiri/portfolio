import { Component } from '@angular/core';
import { WhatIDoItems } from '../dto/WhatIDoItems';

@Component({
    selector: 'app-home',
    imports: [],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {
    whatIDoItems: WhatIDoItems[] = [
        {
            title: 'Backend Development',
            icon: 'fa-solid fa-server',
            description:
                'Building robust and maintainable applications using Java,' +
                ' Python, and modern frameworks',
        },
        {
            title: 'Cloud Engineering',
            icon: 'fa-solid fa-cloud',
            description:
                'Designing and implementing scalable cloud solutions using' +
                ' AWS services and best practices',
        },
        {
            title: 'DevOps',
            icon: 'fa-solid fa-gears',
            description:
                'Implementing CI/CD pipelines and infrastructure as code' +
                ' using Terraform and GitLab CI/CD',
        },
    ];
}
