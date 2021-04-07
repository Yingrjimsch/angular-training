import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-schooling-ngmodel',
  templateUrl: './angular-schooling-ngmodel.component.html',
  styleUrls: ['./angular-schooling-ngmodel.component.css']
})
export class AngularSchoolingNgmodelComponent implements OnInit {

  inputValue: string = 'Example Text';
  constructor() { }

  ngOnInit(): void {
  }

  clear(): void {
    this.inputValue = ''
  }
}
