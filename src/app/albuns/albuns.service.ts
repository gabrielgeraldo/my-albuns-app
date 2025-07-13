import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbunsService {

  constructor(private http: HttpClient) { }

  public getData() {
    // return this.http.get(`http://localhost:8084/rest/albuns`);
    // console.log("TESTEE"+this.http.get(`/albuns`))
    return this.http.get(`/albuns`);
  }

  public getDataTeste() {
    return this.http.get(`http://localhost:8084/rest/api/v1/products`);
  }

  public save(productData: any ) {
     // console.log(productData)
    // return this.http.post(`http://localhost:8084/rest/albuns`, productData);
    return this.http.post(`/albuns`, productData);
  }

  public update(productData: any ) {
    return this.http.put(`/api/v1/products/${productData.id}`, productData);
  }

  public delete(id: string ) {
    return this.http.delete(`/api/v1/products/${id}`);
  }

  public findById(id: string) {
    return this.http.get(`/api/v1/products/${id}`);
  }
}
