import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../Employee';
import { HelperService } from 'src/app/helper.service';

@Component({
  selector: 'app-form-child',
  templateUrl: './form-child.component.html',
  styleUrls: ['./form-child.component.css']
})
export class FormChildComponent implements OnInit {

  constructor(private helper : HelperService) { }

  employee : Employee;

  ngOnInit(): void {
    this.employee = this.helper.employee;
  }

}
