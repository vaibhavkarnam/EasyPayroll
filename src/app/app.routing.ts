import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {EmployeeComponent} from "./employee/employee.component";
import {EmployeeEditComponent} from "./employee-edit/employee-edit.component";



const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'employee', component: EmployeeComponent},
  { path: 'employee/:employeeId', component: EmployeeComponent },
  { path: 'employee-edit', component: EmployeeEditComponent},
  { path: 'employee-edit/:employeeId', component: EmployeeEditComponent },
  { path: '**', component: HomeComponent},
];
export const routing = RouterModule.forRoot(appRoutes);
