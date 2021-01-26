import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  // dataUrl = 'assets/data/menus-generic.json';
 // dataUrl = 'assets/data/menus-meditech-full-example.json';
 // dataUrl = 'assets/data/mt-menu-asp1.json';
 dataUrl = 'assets/data/mt-menu-1.json';

  constructor(private http: HttpClient) { }

getData() {
  return this.http.get(this.dataUrl);
}
}


