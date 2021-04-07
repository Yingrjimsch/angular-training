import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-schooling-interpolation',
  templateUrl: './angular-schooling-interpolation.component.html',
  styleUrls: ['./angular-schooling-interpolation.component.css']
})
export class AngularSchoolingInterpolationComponent implements OnInit {

  example: string = 'This exapmle shows a binding with {{ value }}';
  constructor() { }

  ngOnInit(): void {
  }

}
