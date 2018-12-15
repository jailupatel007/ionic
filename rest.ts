import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestProvider {

  apiUrl = 'https://jsonplaceholder.typicode.com';

 apiUrl2 = ' http://localhost:3000';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl2+'/profile').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  
  getUserDetail(data)
  {
    return new Promise(resolve => {
      this.http.get(this.apiUrl2+'/profile/'+data).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });

  }

  addUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl2+'/profile', data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  
  updateUser(data) {
    return new Promise((resolve, reject) => {
      this.http.put(this.apiUrl2+'/profile/'+data.id, data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
