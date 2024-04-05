import {Component, OnInit} from '@angular/core';
import {Observable, of, startWith} from "rxjs";
import { map, catchError } from "rxjs/operators";
import {ApiResponse} from "./api-response";
import {Page} from "./page";
import {HttpErrorResponse} from "@angular/common/http";
import {CustomerHttpService} from "./customer.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {Router} from "@angular/router";

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrl: './datagrid.component.css'
})
export class DatagridComponent implements OnInit {
  // dgitems = [
  //   { id: '1', firstname: 'Mark', lastname: 'Otto', handle: 'mdo' },
  //   { id: '2', firstname: 'Jacob', lastname: 'Thornton', handle: 'fat' },
  //   { id: '3', firstname: 'Larry the Bird', lastname: '', handle: 'twitter' }
  // ];

  customerState$: Observable<{ appState: string, appData?:ApiResponse<Page>, error?: HttpErrorResponse }>;

  constructor(private customerService: CustomerHttpService, private router: Router) {
  }

  ngOnInit() {
    this.getCustomers()
  }

  getPage(page: number) {
    this.getCustomers(page).subscribe()
  }

  getCustomers(page: number = 0) {
    return this.customerState$ = this.customerService.customer$('', page, 10)
      .pipe(
        map((response: ApiResponse<Page>) => {
            console.log(response);
            return ({appState: 'APP_LOADED', appData: response})
          }
        ),
        startWith({appState: 'APP_LOADING'}),
        catchError( (error: HttpErrorResponse) => of({appState: 'APP_ERROR', error}) )
      )
  }

  startWorkflow(status: string) {
    console.log("startWorkflow")
    console.log("customer.status: " + status);
    if (status === 'ACTIVE') {
      this.router.navigate(['/ddae_wf'])
    }
    if (status === 'BANNED') {
      this.router.navigate(['/dete_wf'])
    }
  }
}
