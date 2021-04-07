import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-schooling-ngiffor',
  templateUrl: './angular-schooling-ngiffor.component.html',
  styleUrls: ['./angular-schooling-ngiffor.component.css']
})
export class AngularSchoolingNgifforComponent implements OnInit {

  isListVisible: boolean = false;
  names: string[] = ['hans', 'franz', 'jim', 'john', 'gabriel', 'wayne', 'phillip'];
  constructor() { }

  ngOnInit(): void {
  }

  changeListVisibility() {
    this.isListVisible = !this.isListVisible;
  }
}
