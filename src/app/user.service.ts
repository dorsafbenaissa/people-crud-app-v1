import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private getAllUsersUrl="https://backend-people-crud-app.herokuapp.com/users";
  private deleteUsersUrl="https://backend-people-crud-app.herokuapp.com/users";

  constructor(private http:HttpClient) { }
  getAllUsers()
  {return this.http.get<any>(this.getAllUsersUrl);
    this.deleteUsersUrl(id String){
      return this.http.delete<any>(this.deleteUsersUrl.id)
    }
  }
}
