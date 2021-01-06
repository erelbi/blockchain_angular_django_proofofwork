import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

 @Injectable({
 providedIn: 'root'
 })
export class MinerService {

   constructor(private http: HttpClient) { }
  getMiner() {
   return this.http.get('http://localhost:8000/miner/');
  }
 }
