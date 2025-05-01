import { Component } from '@angular/core';
import { FileService } from '../../services/file.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  selectedFiles: FileList | null = null;
  uploadedFiles: string[] = [];

  constructor(private fileService: FileService) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.selectedFiles = input.files;
    }
  }

  onUpload(): void {
    if (this.selectedFiles) {
      const file = this.selectedFiles[0];
      this.fileService.uploadFile(file).subscribe(response => {
        this.uploadedFiles.push(response.filePath);
        this.selectedFiles = null;
      });
    }
  }

  onDelete(filePath: string): void {
    this.fileService.deleteFile(filePath).subscribe(() => {
      this.uploadedFiles = this.uploadedFiles.filter(file => file !== filePath);
    });
  }
}