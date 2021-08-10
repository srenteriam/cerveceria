import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PeticionService {

  constructor(private http :HttpClient) { }

  Post(url:string,data:{}): Promise<any> {

    let promise = new Promise((resolve, reject) => {

    this.http.post(url, data)
        .toPromise()
        .then(
          res => { // Success
            console.log(res);
            resolve(res);
          }
        );
    });
    return promise;

  }

  Get(url:string) {

    let promise = new Promise((resolve, reject) => {

    this.http.get(url)
        .toPromise()
        .then(
          res => { // Success
            console.log(res);
            resolve(res);
          }
        );
    });
    return promise;

  }
}
