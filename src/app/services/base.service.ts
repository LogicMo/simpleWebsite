import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { findReadVarNames } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class BaseService {

  constructor( private _http: Http ) { }

  // PixaBay
  // private pixaBayURL: string = 'https://pixabay.com/api/?key=';
  // private pixaBayKEY: string = '244763-73d68c5e74b9da4ceb7c93bb5';  
  // private queryStart: string = '&q=';
  // private perPage: string = '&per_page=200';

  // private URL: string = this.pixaBayURL + this.pixaBayKEY + this.queryStart ;
  // ===================

  // getImages( query: string ) {

  //   return this._http.get( this.URL + query + this.perPage )
  //   .map( _response => _response.json() );
  // }


  // consoleSomething() {
  //   return this._http.get( this.pixaBayURL )
  //   .map( (_response: Response) => _response.json()); 
  // }


  // ========================================================================================

  private _dbSelectURL = 'http://localhost/index.php';
  private _dbInsertURL = 'http://localhost/insert.php';
  result;

  getUserFromDB() {

    const headers = new Headers();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');

    return this._http.get( this._dbSelectURL ).map( result => result.json() );
  }


  addUsersToDB(data) {

    let headers = new Headers( { 'Content-Type': 'application/json; charset=UTF-8' } );
    let options = new RequestOptions({ headers: headers });

    let finalData = JSON.parse(data);

    return this._http.post(  this._dbInsertURL, finalData, {headers: headers})
    .map((res: Response) => { res.json(); console.log(res.json() )} );
    
  }






  

}
