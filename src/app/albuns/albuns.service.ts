import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProAppConfigService } from '@totvs/protheus-lib-core';


@Injectable({
  providedIn: 'root'
})
export class AlbunsService {

  constructor(private http: HttpClient, private proAppConfigService: ProAppConfigService) { }

  public getData() {
    if (this.proAppConfigService.insideProtheus()) {
      return this.http.get(`albuns`);
    } else {
      var httpOptions = {};
      httpOptions = {
        headers: new HttpHeaders({
        'Content-Type':   'application/json',
        'Authorization':  'Bearer ' + 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InBKd3RQdWJsaWNLZXlGb3IyNTYifQ.eyJpc3MiOiJUT1RWUy1BRFZQTC1GV0pXVCIsInN1YiI6IkdhYnJpZWxHZXJhbGRvIiwiaWF0IjoxNzU0NDE3NDg4LCJ1c2VyaWQiOiIwMDAwMDMiLCJleHAiOjE3NTQ0MjEwODgsImVudklkIjoic2lnYSJ9.JFWNu_8CsUUJNaIXWefizzbfJqGuP3T1deIYgUNet8ku3kmhU4j57JFsQYqkf2mU_9djyNDM3Z8RO7vjljAILVhhJdLL6dsFrjwXkDKtPpZ-c3x5ZOc_MHxcyqK-8zAdrFCnoCcK-EQGTfC-NbuOGc0UCP8baW2S1IZn5AFyEHcYtAKCQuyEUIgsS3vvYR1J-GJaz2BjoU8Ce4eHDk2zHsx8uyfyVZJzF8eKB0NR0MxC7pq8dqlGE6D1PUuDJ7wsaP9l486h5L8XkBZhyVeO3AB7Z-53vluJC_9Lf3DvlbkJQHUR3hHbz_BQAn5zsxkb2RqT7XKaSPvKh2UFsDqspg'
      })};
      return this.http.get(`http://localhost:8084/rest/albuns`, httpOptions);
    }
  }

  public getDataTeste() {
    return this.http.get(`http://localhost:8084/rest/api/v1/products`);
  }

  public save(productData: any ) {
    if (this.proAppConfigService.insideProtheus()) {
      return this.http.post(`/albuns`, productData);
    } else {
      console.log(productData);
      var httpOptions = {};
      httpOptions = {
        headers: new HttpHeaders({
        'Content-Type':   'application/json',
        'Authorization':  'Bearer ' + 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InBKd3RQdWJsaWNLZXlGb3IyNTYifQ.eyJpc3MiOiJUT1RWUy1BRFZQTC1GV0pXVCIsInN1YiI6IkdhYnJpZWxHZXJhbGRvIiwiaWF0IjoxNzU0NDE3NDg4LCJ1c2VyaWQiOiIwMDAwMDMiLCJleHAiOjE3NTQ0MjEwODgsImVudklkIjoic2lnYSJ9.JFWNu_8CsUUJNaIXWefizzbfJqGuP3T1deIYgUNet8ku3kmhU4j57JFsQYqkf2mU_9djyNDM3Z8RO7vjljAILVhhJdLL6dsFrjwXkDKtPpZ-c3x5ZOc_MHxcyqK-8zAdrFCnoCcK-EQGTfC-NbuOGc0UCP8baW2S1IZn5AFyEHcYtAKCQuyEUIgsS3vvYR1J-GJaz2BjoU8Ce4eHDk2zHsx8uyfyVZJzF8eKB0NR0MxC7pq8dqlGE6D1PUuDJ7wsaP9l486h5L8XkBZhyVeO3AB7Z-53vluJC_9Lf3DvlbkJQHUR3hHbz_BQAn5zsxkb2RqT7XKaSPvKh2UFsDqspg'
      })};
     
    // this.http.post(`http://localhost:8084/rest/albuns`, productData, httpOptions).subscribe( data => {console.log(data);});

     return this.http.post(`http://localhost:8084/rest/albuns`, productData, httpOptions);
    }
  }

  public update(productData: any ) {
    return this.http.put(`/api/v1/products/${productData.id}`, productData);
  }

  public delete(filial: string, codigo: string ) {
    // return this.http.delete(`/api/v1/products/${id}`);
    return this.http.delete(`/albuns/${filial}/${codigo}`);
  }

  public findById(id: string) {
    return this.http.get(`/api/v1/products/${id}`);
  }
}
