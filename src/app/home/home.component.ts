import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {EmployeeServiceClient} from '../services/employee.service.client';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  ngOnInit(): void {

    this.employeeService.findAllEmployees()
      .then(employees => {
        console.log(employees);
        this.employees = employees;
      });
  }

  constructor(
    private router: Router,
    private employeeService: EmployeeServiceClient
  ) {
  }


  employees = [];

  viewEmployee = employeeId => {
    //console.log(employeeId);
    this.router.navigate(['/employee/' + employeeId]);
  };

  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}






