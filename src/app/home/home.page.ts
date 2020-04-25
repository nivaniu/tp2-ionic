import {Component} from '@angular/core';
import {Person} from './person.module';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    constructor() {
        this.person = new Person();
        this.studentForm = new FormGroup({});
        this.studentForm.addControl(this.firstName, new FormControl(''));
        this.studentForm.addControl(this.lastName, new FormControl(''));
        this.studentForm.addControl(this.bdate, new FormControl(''));
        this.studentForm.addControl(this.route, new FormControl(''));
        this.studentForm.addControl(this.cp, new FormControl(''));
        this.studentForm.addControl(this.city, new FormControl(''));
        this.studentForm.addControl(this.tel, new FormControl(''));
        this.studentForm.addControl(this.mail, new FormControl(''));
        this.studentForm.addControl(this.redoublant, new FormControl(''));
        this.studentForm.addControl(this.redoublant, new FormControl(''));

    }

    person: Person;
    listStudents: Person[] = [];
    studentForm: FormGroup;
    firstName = 'FIRSTNAME';
    lastName = 'LASTNAME';
    bdate = 'BDATE';
    route = 'ROUTE';
    cp = 'CP';
    city = 'CITY';
    tel = 'TEL';
    mail = 'MAIL';
    redoublant = 'REDOUBLANT';
    segment = 'M';

    public segmentChanged(event) {
        console.log(event);
        this.segment = event.detail.value;
        console.log(this.studentForm.get(this.redoublant));
    }

    public onButtonClicked() {
        if (!this.studentForm.valid) {
            return;
        }
        this.person.name = this.studentForm.get(this.firstName).value;
        this.person.secondName = this.studentForm.get(this.lastName).value;
        this.person.birthDate = this.studentForm.get(this.bdate).value;
        this.person.redoublant = this.studentForm.get(this.redoublant).value;
        this.person.address.route = this.studentForm.get(this.route).value;
        this.person.address.postalCode = this.studentForm.get(this.cp).value;
        this.person.address.village = this.studentForm.get(this.city).value;
        this.person.contact.email = this.studentForm.get(this.mail).value;
        this.person.contact.phone = this.studentForm.get(this.tel).value;
        this.person.civility = this.segment;
        this.listStudents[this.listStudents.length] = this.person;
        console.log(this.listStudents);
    }
}
