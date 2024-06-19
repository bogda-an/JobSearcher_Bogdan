import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobPostingService } from '../job-posting.service';
import { FormsModule } from '@angular/forms'; // Add this import

@Component({
  selector: 'app-update-job',
  templateUrl: './update-job.component.html',
  styleUrls: ['./update-job.component.css'],
  standalone: true,
  imports: [FormsModule] // Add this import here if standalone component
})
export class UpdateJobComponent {
  job: any = {};

  constructor(
    private jobPostingService: JobPostingService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.jobPostingService.getJobPosting(id).subscribe((data) => {
        this.job = data;
      });
    } else {
      console.error('No job ID found in route');
    }
  }

  updateJob(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.jobPostingService.updateJob(id, this.job).subscribe(
        (response: any) => {
          this.router.navigate(['/']);
        },
        (error: any) => {
          console.error(error);
          alert('Job update failed');
        }
      );
    } else {
      console.error('No job ID found in route');
    }
  }
}
