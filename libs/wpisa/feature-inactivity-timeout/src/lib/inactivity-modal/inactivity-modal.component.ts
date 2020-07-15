import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InactivityModalData } from './inactivity-modal-data.interface';

@Component({
  selector: 'wes-inactivity-modal',
  templateUrl: './inactivity-modal.component.html',
  styleUrls: ['./inactivity-modal.component.scss'],
})
export class InactivityModalComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: InactivityModalData) {}

  ngOnInit(): void {}
}
