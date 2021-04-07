import { LoggerService } from './../logger.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-angular-schooling-dependencyinjection',
  templateUrl: './angular-schooling-dependencyinjection.component.html',
  styleUrls: ['./angular-schooling-dependencyinjection.component.css']
})
export class AngularSchoolingDependencyinjectionComponent implements OnInit {

  constructor(private logger: LoggerService, private router: Router) { }

  ngOnInit(): void {
  }

  log() {
    this.logger.log(this.router.url);
  }
}
