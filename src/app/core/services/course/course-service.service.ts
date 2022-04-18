import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JWToken} from "../../../models/token.model";
import {Constants} from "../../../shared/constants";
import {Course} from "../../../models/course.model";
import {Page} from "../../../models/page.model";

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  constructor(private http: HttpClient) { }

  save(newCourse:any){
    return this.http.post<JWToken>(`${Constants.BASE_API_URL}/courses`,newCourse , {observe: 'response'})
  }

  getById(id: number){
    return this.http.get<Course>(`${Constants.BASE_API_URL}/${id}`, {observe: 'response'})
  }

  update(id: number, changes:any){
    return this.http.put<Course>(`${Constants.BASE_API_URL}/${id}`, changes,{observe: 'response'})
  }

  getAll(filterOptions: any){
    let queryString = new URLSearchParams(filterOptions).toString();
    return this.http.get<Page<Course>>(`${Constants.BASE_API_URL}/courses?${queryString}`, {observe: 'response'})
  }

  delete(id:number){
    return this.http.delete(`${Constants.BASE_API_URL}/${id}`);
  }
}
