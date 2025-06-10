import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { BlogComponent } from './blog/blog.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ExperienceComponent } from './experience/experience.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'experience', component: ExperienceComponent },
    { path: 'projects', component: ProjectComponent },
    { path: 'blogs', component: BlogComponent },
    { path: 'certifications', component: CertificationsComponent },
    { path: '**', component: HomeComponent },
];
