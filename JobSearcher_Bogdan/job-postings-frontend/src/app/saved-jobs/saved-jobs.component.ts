import { Component, OnInit } from '@angular/core';
import { JobPostingService } from '../job-posting.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-saved-jobs',
  templateUrl: './saved-jobs.component.html',
  styleUrls: ['./saved-jobs.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule]
})
export class SavedJobsComponent implements OnInit {
  savedJobs: any[] = [];

  constructor(private jobPostingService: JobPostingService) {}

  ngOnInit(): void {
    this.jobPostingService.getSavedJobs().subscribe(
      (data: any) => {
        this.savedJobs = data;
      },
      (error: any) => {
        console.error(error);
        alert('Failed to load saved jobs');
      }
    );
  }
}
