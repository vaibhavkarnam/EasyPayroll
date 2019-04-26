import {Component, OnInit} from '@angular/core';
import {EmployeeServiceClient} from '../services/employee.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Employee} from '../models/employee.model.client';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeServiceClient,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  employeeId: String;
  employee: Employee;

  editProfile = () => {
    this.router.navigate(['employee-edit/' + this.employeeId]);
  };


  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.employeeId = params['employeeId'];
    });
    console.log(this.employeeId);
    this.employeeService.findEmployee(this.employeeId)
      .then(employee => {
        console.log(employee);
        this.employee = employee;
        console.log(this.employee);
      });
  }
}
