import { Component } from '@angular/core';
import { ExperienceItem } from '../dto/ExperienceItem';

@Component({
    selector: 'app-experience',
    imports: [],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
    experienceItems: ExperienceItem[] = [
        {
            title: 'Senior Software Engineer at Fintech API team',
            organization: 'GTN Tech, Colombo, Sri Lanka',
            time: 'From April 2024 to Present',
            description: [
                'Improved the availability of the system by cloud migration and container orchestration',
                'Reduced cloud cost by designing system architecture through container orchestration and AWS native services',
                'Developed scalable and maintainable microservices',
                'Designed and implemented solutions for customer requests',
                'Reduced deployment time by developing Infrastructure as Code using Terraform and CI/CD pipeline using GitLab CI/CD',
            ],
            techStack: [
                'Java',
                'Spring Boot',
                'AWS',
                'Python',
                'JavaScript',
                'Node.js',
                'Postgres',
                'GitLab CI/CD',
                'Terraform',
                'Kubernetes',
                'Redis',
                'FastAPI',
                'Docker',
                'Linux',
            ],
        },
        {
            title: 'Software Engineer at Alpha team',
            organization: 'GTN Tech, Colombo, Sri Lanka',
            time: 'From May 2022 to March 2024',
            description: [
                'Improved the system availability to 99.9% through cloud migration of the existing system',
                'Reduced cloud cost by 60% by restructuring the system architecture with native AWS cloud services',
                'Improved scalability and maintainability of the system by developing microservices for the existing monolithic legacy system',
                'Reduced the deployment time by 75% by developing Infrastructure as Code using Terraform and CI/CD pipeline using GitLab CI/CD',
                'Designed and implemented solutions for customer requests',
                'Improved reliability of the system by fixing bugs',
                'Improved the quality of the system through unit testing and end-to-end testing',
            ],
            techStack: [
                'Java',
                'Spring Boot',
                'AWS',
                'Python',
                'Postgres',
                'GitLab CI/CD',
                'Terraform',
            ],
        },
        {
            title: 'Software Engineering Intern at Telia team',
            organization: 'Persistent Systems, Colombo, Sri Lanka',
            time: 'From Oct 2020 to Mar 2021',
            description: [
                'Improved scalability and maintainability of the system by developing microservices for the existing monolithic legacy system',
                'Improved the reliability of the system by fixing bugs',
                'Reduced deployment time by application containerization',
                'Improved the quality of the system through unit testing and acceptance testing',
            ],
            techStack: [
                'Java',
                'Spring Boot',
                'Oracle DB',
                'JPA',
                'Apache Camel',
                'Linux',
                'Docker',
            ],
        },
    ];
}
