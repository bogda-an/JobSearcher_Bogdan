import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css'],
  standalone: true,
  imports: [FormsModule, HttpClientModule, RouterModule]
})
export class JobFormComponent {
  job = {
    title: '',
    company: '',
    location: '',
    date_posted: '',
    employment_type: '',
    job_description: '',
    job_requirements: '',
    salary: 0,
    industry: '',
    experience_level: '',
    job_link: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  createJob(): void {
    const token = localStorage.getItem('token'); // Get the token from local storage or wherever you store it
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    this.http.post('http://localhost:5000/api/jobs', this.job, { headers }).subscribe(
      (response) => {
        console.log('Job created successfully:', response);
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Error creating job:', error);
        alert('Error creating job');
      }
    );
  }
}
