import { Component } from '@angular/core';
import { WhatIDoItem } from '../dto/WhatIDoItem';
import { SkillItem } from '../dto/SkillItem';
import { LatestItem } from '../dto/LatestItem';

@Component({
    selector: 'app-home',
    imports: [],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {
    whatIDoItems: WhatIDoItem[] = [
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

    latestItems: LatestItem[] = [
        {
            label: 'Experience',
            title: 'Senior Software Engineer',
            organization: 'GTN Tech',
            time: 'April 2024 - Present',
            icon: 'fa-solid fa-briefcase',
        },
        {
            label: 'Education',
            title: 'BSc Engineering Hons. Computer Science and Engineering',
            organization: 'University of Moratuwa',
            time: 'Aug 2017 – Jun 2022',
            icon: 'fa-solid fa-graduation-cap',
        },
    ];
}
