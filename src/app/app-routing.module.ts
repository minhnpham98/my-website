import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { CareerComponent } from './about-me/career/career.component';
import { EducationComponent } from './about-me/education/education.component';
import { SkillsComponent } from './about-me/skills/skills.component';
import { VolunteeringComponent } from './about-me/volunteering/volunteering.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'career', component: CareerComponent },
  { path: 'education', component: EducationComponent },
  { path: 'volunteering', component: VolunteeringComponent },
  { path: 'skills', component: SkillsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
