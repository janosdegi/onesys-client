import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-ddae-wf',
  templateUrl: './ddae-wf.component.html',
  styleUrl: './ddae-wf.component.css'
})
export class DdaeWfComponent {

  constructor(private router: Router) {
  }

  endWorkflow() {
    this.router.navigate(['/datagrid'])
  }
}
