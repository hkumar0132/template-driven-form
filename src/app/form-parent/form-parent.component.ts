import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/Employee';
import { HelperService } from 'src/app/helper.service';

@Component({
  selector: 'app-form-parent',
  templateUrl: './form-parent.component.html',
  styleUrls: ['./form-parent.component.css']
})
export class FormParentComponent {

  constructor(private router : Router, private route : ActivatedRoute, private helper : HelperService) {
    
   }

  employee : Employee = new Employee();

  onSubmit() {

    if(this.employee && this.employee.first_name &&
      this.employee.last_name && this.employee.email &&
      this.employee.phone && this.employee.password) {

        if(confirm('Registered successfully')) {
          this.helper.employeeUpdate(this.employee);
          this.router.navigate(['form-child'], {relativeTo : this.route});
      }
    }
    else {
      alert('Please fill all the fields!');
    }

  }

}
