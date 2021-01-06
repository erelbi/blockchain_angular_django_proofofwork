import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlockCreatorService {
  private apiRoot = 'http://localhost:8000/create/';
  constructor( private http: HttpClient) { }
  createBlock(creatorInput: string) {
    return this.http.post<any>(this.apiRoot, {data: creatorInput});
  }
}
