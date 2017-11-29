import { Component, OnInit, ElementRef } from '@angular/core';
import { BaseService } from '../services/base.service';
import { Http } from '@angular/http';
import { empty } from 'rxjs/Observer';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  
  constructor( private _baseService: BaseService ) { }   
  
  // _images :any[];
  // _searchedImages: any[];
  // _noOfImages: number = 0;


  
  // handleSuccess( result ) {

  //   this._images = result.hits;
  // }


  ngOnInit() { }


//  doSomething( ) {
   
//   this._baseService.consoleSomething()
//   .subscribe(result => { this.handleSuccess(result) } );
//  } 

// searchImages( query: string ) {

//   if( query === '' || query == 'nude' || query == 'naked' || query == 'sex' ) {
//     alert("Please type something :) ");
//   } else {
//     this._baseService.getImages(query).subscribe( data => { 
//       this.handleSearch(data);
//      } );
//   }  
// }

// handleSearch(data) {
//   this._searchedImages = data.hits;
// }


}
