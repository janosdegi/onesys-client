import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Page} from "./page";
import {ApiResponse} from "./api-response";

@Injectable({providedIn: 'root'})
export class CustomerHttpService {

  private readonly serverUrl: string = 'http://localhost:8080'

  constructor(private http: HttpClient) {}

  customer$ = (name: string = '', page: number = 0, size: number = 10): Observable<ApiResponse<Page>> =>
    this.http.get<ApiResponse<Page>>(`${this.serverUrl}/api/customer?name=${name}&page=${page}&size=${size}`);



  // getCustomer(name: string = '', page: number = 0, size: number = 10): Observable<any> {
  //   return this.http.get<any>(`${this.serverUrl}/users?name=${name}$page=${page}size=${size}`)
  // }

}
