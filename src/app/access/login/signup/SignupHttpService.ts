import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable({providedIn: 'root'})
export class SignupHttpService {

  constructor(private http: HttpClient) {}

  postUserRegistration(userregistration: { firstName: string, lastName: string, email: string, password: string }) {
    // Send Http request
    this.http.post(
      'http://localhost:8080/api/user',
      userregistration,
      {
        observe: 'response' //,    //body //events (HttpEventType)
        //responseType: 'text' //'json' //'blob'
      }).subscribe(responseData => {
      console.log(responseData);
      console.log(responseData.headers);
      console.log(responseData.body);
    }, error => {
      console.log(error.message);
    });
  }

}
