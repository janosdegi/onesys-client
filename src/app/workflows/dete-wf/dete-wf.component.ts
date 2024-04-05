import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dete-wf',
  templateUrl: './dete-wf.component.html',
  styleUrl: './dete-wf.component.css'
})
export class DeteWfComponent {
  constructor(private router: Router) {
  }

  endWorkflow() {
    this.router.navigate(['/datagrid'])
  }
}
