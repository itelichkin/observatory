import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-delete-astronomical-object',
  templateUrl: './delete-astronomical-object.component.html',
  styleUrls: ['./delete-astronomical-object.component.scss']
})
export class DeleteAstronomicalObjectComponent implements OnInit {
  objectName: string;

  constructor(private dialogRef: MatDialogRef<DeleteAstronomicalObjectComponent>,
              @Inject(MAT_DIALOG_DATA) private data: { name: string }) {
    console.log(data)
    this.objectName = data.name;
  }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close(false);
  }

  toRemoveObject() {
    this.dialogRef.close(true);
  }
}
