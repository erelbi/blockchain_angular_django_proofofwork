import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ChainViewService {
  private apiRoot = 'http://localhost:8000/view/';
  constructor(private http: HttpClient) { }

  getAllViews() {
    return this.http.get<any>(this.apiRoot);
  }

}
