import { Component } from '@angular/core';
import { BlogItem } from '../dto/BlogItem';

@Component({
    selector: 'app-blog',
    imports: [],
    templateUrl: './blog.component.html',
    styleUrl: './blog.component.scss',
})
export class BlogComponent {
    blogs: BlogItem[] = [
        {
            title: 'Understanding Angular Signals',
            description:
                'A deep dive into Angular signals and how they improve reactivity in modern applications.',
            link: 'https://blog.example.com/angular-signals',
        },
        {
            title: 'Deploying with AWS Amplify',
            description:
                'Step-by-step guide to deploying your web app using AWS Amplify.',
            link: 'https://blog.example.com/aws-amplify-deploy',
        },
        {
            title: 'TypeScript Tips & Tricks',
            description:
                'Boost your productivity with these essential TypeScript tips.',
            link: 'https://blog.example.com/typescript-tips',
        },
    ];
}
