import {Component, OnInit} from '@angular/core';
import {EmployeeServiceClient} from '../services/employee.service.client';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  editemployee: boolean;
  employeeId: String;
  employee_name: String;
  employee_bio: String;
  employee_department: String;
  employee_designation: String;
  employee_salary: Number;
  employee_healthPremium: Number;
  employee_lifePremium: Number;
  employee_retirementPlan: Number;
  img: String;
  employee_emailId: String;
  employee_phone: String;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private employeeService: EmployeeServiceClient,
  ) {
  }

  updateEmployee() {
    console.log('inside updateemployee');
    var toUpdateemployee = {
      employee_name: this.employee_name,
      employee_bio: this.employee_bio,
      employee_department: this.employee_department,
      img_path: this.img,
      employee_designation: this.employee_designation,
      employee_salary: this.employee_salary,
      employee_healthPremium: this.employee_healthPremium,
      employee_lifePremium: this.employee_lifePremium,
      employee_retirementPlan: this.employee_retirementPlan,
      employee_phone: this.employee_phone,
    };

    this.employeeService.updateEmployee(this.employeeId, toUpdateemployee)
      .then(employee => {
        this.router.navigate(['employee/' + this.employeeId]);
      });
  }

  postEmployee() {
    var toCreateEmployee = {
      employee_name: this.employee_name,
      employee_bio: this.employee_bio,
      employee_department: this.employee_department,
      img_path: this.img,
      employee_salary: this.employee_salary,
      employee_healthPremium: this.employee_healthPremium,
      employee_lifePremium: this.employee_lifePremium,
      employee_retirementPlan: this.employee_retirementPlan,
      employee_phone: this.employee_phone,
      employee_designation: this.employee_designation,
      employee_emailId: this.employee_emailId,
      employee_takeHomeSalary: 0

    };

    this.employeeService.createEmployee(toCreateEmployee)
      .then(event => {
        console.log(event);
        this.router.navigate(['home']);
      });
  }

  ngOnInit() {


    this.activatedRoute.params.subscribe(params => {
      this.employeeId = params['employeeId'];
    });


    if (this.employeeId) {
      this.editemployee = true;

      this.employeeService.findEmployee(this.employeeId)
        .then(employee => {
          this.employee_name = employee.employee_name;
          this.employee_bio = employee.employee_bio;
          this.employee_department = employee.employee_department;
          this.employee_designation = employee.employee_designation;
          this.employee_salary = employee.employee_salary;
          this.employee_healthPremium = employee.employee_healthPremium;
          this.employee_lifePremium = employee.employee_lifePremium;
          this.employee_retirementPlan = employee.employee_retirementPlan;
          this.img = employee.img_path;
          this.employee_emailId = employee.employee_emailId;
          this.employee_phone = employee.employee_phone;
        });

    }
  }

}
