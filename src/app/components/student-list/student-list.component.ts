import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../../home/person.module';

@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {
  @Input() student: Person;
  image: string;

  constructor() {
  }

  ngOnInit() {
    switch (this.student.civility) {
      case 'MLLE': {
        this.image = 'happy-outline';
        break;
      }
      case 'M': {
        this.image = 'male-outline';
        break;
      }
      case 'MME': {
        this.image = 'female-outline';
        break;
      }
      default: {
        this.image = 'help-outline';
      }


    }
  }
}
