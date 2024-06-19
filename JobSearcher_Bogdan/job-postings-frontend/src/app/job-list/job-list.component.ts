import { Component, OnInit } from '@angular/core';
import { JobPostingService } from '../job-posting.service';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
  standalone: true,
  imports: [CommonModule ,FormsModule, HttpClientModule, RouterModule]
})
export class JobListComponent implements OnInit {
  jobs: any[] = [];
  date: string;
  router: any;

  constructor(private jobPostingService: JobPostingService) {
    this.date = new Date().toISOString();
  }

  ngOnInit(): void {
    this.loadJobs();
  }

  loadJobs(): void {
    this.jobPostingService.getJobPostings().subscribe((data) => {
      this.jobs = data;
    });
  }

  deleteJob(id: string): void {
    this.jobPostingService.deleteJob(id).subscribe(() => {
      this.loadJobs(); // Reload jobs after deletion
    }, (error: any) => {
      console.error(error);
      alert('Job deletion failed');
    });
  }

  updateJob(id: string): void {
    this.router.navigate(['/upade-job', id]);
  }
}