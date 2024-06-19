import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobPostingService {
  private apiUrl = 'http://localhost:5000/api/jobs';

  constructor(private http: HttpClient) { }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken'); // Adjust based on where you store the token
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getJobPostings(): Observable<any> {
    return this.http.get(this.apiUrl, { headers: this.getAuthHeaders() });
  }

  getJobPosting(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`, { headers: this.getAuthHeaders() });
  }

  createJob(job: any): Observable<any> {
    return this.http.post(this.apiUrl, job, { headers: this.getAuthHeaders() });
  }

  updateJob(id: string, job: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, job);
  }

  deleteJob(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
  applyForJob(application: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/apply`, application, { headers: this.getAuthHeaders() });
  }

  getSavedJobs(): Observable<any> {
    return this.http.get(`${this.apiUrl}/saved`, { headers: this.getAuthHeaders() });
  }
}
