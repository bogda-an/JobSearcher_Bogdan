import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobPostingService } from '../job-posting.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.css'],
  standalone: true,
  imports: [FormsModule]  // Add this line to import FormsModule
})
export class ApplyJobComponent {
  application = {
    jobId: '',
    userId: '',
    resume: '',
    additionalDetails: ''
  };

  constructor(
    private jobPostingService: JobPostingService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const jobId = this.route.snapshot.paramMap.get('id');
    if (jobId !== null) {
      this.application.jobId = jobId;
    } else {
      console.error('Job ID is null');
      this.router.navigate(['/']);
    }
  }

  applyForJob(): void {
    this.jobPostingService.applyForJob(this.application).subscribe(
      (response: any) => {
        this.router.navigate(['/']);
      },
      (error: any) => {
        console.error(error);
        alert('Job application failed');
      }
    );
  }
}
