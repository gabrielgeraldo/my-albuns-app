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
        'Authorization':  'Bearer ' + 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InBKd3RQdWJsaWNLZXlGb3IyNTYifQ.eyJpc3MiOiJUT1RWUy1BRFZQTC1GV0pXVCIsInN1YiI6IkdhYnJpZWxHZXJhbGRvIiwiaWF0IjoxNzU0NDI1OTYyLCJ1c2VyaWQiOiIwMDAwMDMiLCJleHAiOjE3NTQ0Mjk1NjIsImVudklkIjoic2lnYSJ9.YvniJslRYfVQyuvTyss4LfQHrIop9_gZsh9W5coa_6cefXWF6lJPmzJeBlVgn4XjX1mRTHkonme99YTTEhR4UCnHka9Gr9KDgq5VrSjhrLdHFGYy_Sy6JhR_HMJ6ovt1RiNt-bJhmGcb9nyS6JoYAURhBOy6BkMzehtmSnl2ZJ3yQMHj6ESXwyDJeg46Wsce0ZkX8-4WqOXZ-VLPNv-0GP9pS0LDWLQaEBBGWz6a80AIWzox_RjEVmnJ_BxyNXZM2Zkpkx9u5TZr8hLvKu_7dIuvC0NfIcwYw_uruf2lR_yH5I7089CrCIjsRy5GW4T2J17REfgMxjRhAjedwRQ9dw'
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
        'Authorization':  'Bearer ' + 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InBKd3RQdWJsaWNLZXlGb3IyNTYifQ.eyJpc3MiOiJUT1RWUy1BRFZQTC1GV0pXVCIsInN1YiI6IkdhYnJpZWxHZXJhbGRvIiwiaWF0IjoxNzU0NDI1OTYyLCJ1c2VyaWQiOiIwMDAwMDMiLCJleHAiOjE3NTQ0Mjk1NjIsImVudklkIjoic2lnYSJ9.YvniJslRYfVQyuvTyss4LfQHrIop9_gZsh9W5coa_6cefXWF6lJPmzJeBlVgn4XjX1mRTHkonme99YTTEhR4UCnHka9Gr9KDgq5VrSjhrLdHFGYy_Sy6JhR_HMJ6ovt1RiNt-bJhmGcb9nyS6JoYAURhBOy6BkMzehtmSnl2ZJ3yQMHj6ESXwyDJeg46Wsce0ZkX8-4WqOXZ-VLPNv-0GP9pS0LDWLQaEBBGWz6a80AIWzox_RjEVmnJ_BxyNXZM2Zkpkx9u5TZr8hLvKu_7dIuvC0NfIcwYw_uruf2lR_yH5I7089CrCIjsRy5GW4T2J17REfgMxjRhAjedwRQ9dw'
      })};
     
    // this.http.post(`http://localhost:8084/rest/albuns`, productData, httpOptions).subscribe( data => {console.log(data);});

     return this.http.post(`http://localhost:8084/rest/albuns`, productData, httpOptions);
    }
  }

  public update(productData: any ) {
    return this.http.put(`/api/v1/products/${productData.id}`, productData);
  }

  public delete(filial: string, codigo: string ) {
    
    if (this.proAppConfigService.insideProtheus()) {
      return this.http.delete(`/albuns`);
    } else {
      var httpOptions = {};
      httpOptions = {
        headers: new HttpHeaders({
        'Content-Type':   'application/json',
        'Authorization':  'Bearer ' + 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InBKd3RQdWJsaWNLZXlGb3IyNTYifQ.eyJpc3MiOiJUT1RWUy1BRFZQTC1GV0pXVCIsInN1YiI6IkdhYnJpZWxHZXJhbGRvIiwiaWF0IjoxNzU0NDIyMzQ2LCJ1c2VyaWQiOiIwMDAwMDMiLCJleHAiOjE3NTQ0MjU5NDYsImVudklkIjoic2lnYSJ9.AoKsHacFlcIuEE6aAxxpVZ1FvIYvdZnQ855vik_tPJ_KC7nI4p_bq-JDixLoLXmn4-t1gZjRR34NTePQWBHU0aV_UARmVhWdniATlykrOGnhjG7PmVPSkEFKn6Qeyyi6BAJ6lOxpZpafTpzXzyGcOQ6sNm5BcfIFlpb67Mmi5yuY7OB6gmytf8SIF5T-Z7BC3LQPPkkjFJvmxMHHy8FLq57lI2w6uiXtVTr7rpQM4W9wt1KfJ3GfwlemWu-xQotYzZJwHqz0beEpK9yps8hkcI4TUULaSnAIAVyExjkG2WTD4bvpVBR2CFp07cirYHtPMgAQldxTdyPYYU6O03U1_g'
      })};
      
      console.log(`http://localhost:8084/rest/albuns?filial=${filial}&codigo=${codigo}`);

      return this.http.delete(`http://localhost:8084/rest/albuns?filial=${filial}&codigo=${codigo}`, httpOptions);
    }
  }

  public findById(id: string) {
    return this.http.get(`/api/v1/products/${id}`);
  }
}
