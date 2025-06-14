import { Component } from '@angular/core';
import { WhatIDoItems } from '../dto/WhatIDoItems';
import { SkillItem } from '../dto/SkillItem';

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

    skillsItems: SkillItem[] = [
        { name: 'Java', icon: 'fa-brands fa-java' },
        { name: 'Python', icon: 'fa-brands fa-python' },
        { name: 'AWS', icon: 'fa-brands fa-aws' },
        { name: 'Spring Boot', icon: 'fa-brands fa-java' },
        { name: 'REST API', icon: 'fa-solid fa-cloud' },
        { name: 'GitLab CI/CD', icon: 'fa-brands fa-gitlab' },
        { name: 'Terraform', icon: 'fa-brands fa-dev' },
        { name: 'FastAPI', icon: 'fa-brands fa-python' },
        { name: 'Kubernetes', icon: 'fa-brands fa-docker' },
    ];
}
