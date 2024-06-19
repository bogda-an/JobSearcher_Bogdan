import { Routes } from '@angular/router';
import { JobListComponent } from './job-list/job-list.component';
import { JobFormComponent } from './job-form/job-form.component';
import { UpdateJobComponent } from './update-job/update-job.component';
import { ApplyJobComponent } from './apply-job/apply-job.component';
import { SavedJobsComponent } from './saved-jobs/saved-jobs.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const appRoutes: Routes = [
  { path: '', component: JobListComponent },
  { path: 'create-job', component: JobFormComponent },
  { path: 'update-job/:id', component: UpdateJobComponent },
  { path: 'apply-job/:id', component: ApplyJobComponent },
  { path: 'saved-jobs', component: SavedJobsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'delete-job/:id', component: JobListComponent } // Assuming delete job functionality is part of JobListComponent
];
