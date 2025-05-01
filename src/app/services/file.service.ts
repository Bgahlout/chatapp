import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileModel } from '../models/file.model';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private apiUrl = 'https://your-api-url.com/files'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  uploadFile(file: File): Observable<FileModel> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<FileModel>(`${this.apiUrl}/upload`, formData);
  }

  deleteFile(fileId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${fileId}`);
  }

  getFile(fileId: string): Observable<FileModel> {
    return this.http.get<FileModel>(`${this.apiUrl}/${fileId}`);
  }
}