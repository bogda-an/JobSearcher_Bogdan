import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JobListComponent } from './job-list/job-list.component';
import { JobFormComponent } from './job-form/job-form.component';
import { UpdateJobComponent } from './update-job/update-job.component';
import { ApplyJobComponent } from './apply-job/apply-job.component';
import { SavedJobsComponent } from './saved-jobs/saved-jobs.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    HttpClientModule,
    JobListComponent,
    JobFormComponent,
    ApplyJobComponent,
    SavedJobsComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent
  ]
})
export class AppComponent { }
