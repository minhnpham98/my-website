import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { CareerComponent } from './about-me/career/career.component';
import { EducationComponent } from './about-me/education/education.component';
import { InterestsComponent } from './about-me/interests/interests.component';
import { VolunteeringComponent } from './about-me/volunteering/volunteering.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'about-me/career', component: CareerComponent },
  { path: 'about-me/education', component: EducationComponent },
  { path: 'about-me/volunteering', component: VolunteeringComponent },
  { path: 'about-me/interests', component: InterestsComponent},
  { path: 'skills', component: SkillsComponent},
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
