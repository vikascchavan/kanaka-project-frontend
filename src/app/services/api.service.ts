import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public url = environment.endpoint
  constructor(
    private http: HttpClient,
  ) { }


  public createUser(body){
    return this.http.post("http://localhost:9090/signin",body);
    console.log('data',body);
  }

  public loginUser(body){
    console.log('body',body);
    return this.http.get("http://localhost:9090/login",body);
  }
}
