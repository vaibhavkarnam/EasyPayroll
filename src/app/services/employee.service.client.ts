import {Injectable} from '@angular/core';


const HOST = 'https://easy-payroll-backend.herokuapp.com';

@Injectable()
export class EmployeeServiceClient {

  findEmployee(employeeId) {
    return fetch(HOST + '/api/payroll/employee/' + employeeId, {
      method: 'get',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => {
        return response.json();
      });
  }

  createEmployee(toCreateemployee) {
    return fetch(HOST + '/api/payroll/employee', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(toCreateemployee)
    })
      .then(response => {
        return response.json();
      });
  }

  updateEmployee(employeeId, employee) {
    return fetch(HOST + '/api/payroll/employee/' + employeeId + '/update', {
      body: JSON.stringify(employee),
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => {
        return response.json();
      });
  }

  findAllEmployees() {
    return fetch(HOST + '/api/payroll/employee')
      .then(response => {
        return response.json();
      });
  }

}
