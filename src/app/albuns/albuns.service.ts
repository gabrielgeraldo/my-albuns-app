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
        'Authorization':  'Bearer ' + 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InBKd3RQdWJsaWNLZXlGb3IyNTYifQ.eyJpc3MiOiJUT1RWUy1BRFZQTC1GV0pXVCIsInN1YiI6IkdhYnJpZWxHZXJhbGRvIiwiaWF0IjoxNzU0NDEwOTEwLCJ1c2VyaWQiOiIwMDAwMDMiLCJleHAiOjE3NTQ0MTQ1MTAsImVudklkIjoic2lnYSJ9.et8chxLJj2O6dnJZOcPGaAhH4arU9EZ7a87_GYmdvnqm_0qSwIy00g-ULwShzzCfTDpmIMlwffgL_UV8OUgjdj4KgGcMZCVpH9IN1yD8K5M94mig6cfafs_MH-FPXN9HFmiUQsjw27yPKtzoLPt6JqkGYczi2gn0svY3v4qDwKschjBmsdMqB0ftEFp-C0wjISlSFPJDJBCFrO0auB_qKsCSr2uGNarZBrHouC-h5AgohO5rzhGs9ctqpax0IX9pSlTVvKCLEYEIOCNYgpqRC8ymCEATDdfvc3ZvRNPbRopCjt1TonNc5Ubo52ZV8B53pLpXR3Fdx__737rGUvyYSQ'
      })};
      return this.http.get(`http://localhost:8084/rest/albuns`, httpOptions);
    }
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

  public delete(filial: string, codigo: string ) {
    // return this.http.delete(`/api/v1/products/${id}`);
    return this.http.delete(`/albuns/${filial}/${codigo}`);
  }

  public findById(id: string) {
    return this.http.get(`/api/v1/products/${id}`);
  }
}
