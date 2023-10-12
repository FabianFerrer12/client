import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Image } from '../interfaces/Images'
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  URL = 'http://localhost:4000/'
  constructor(private http: HttpClient) { }

  createImage(user: string, date: string, image: File) {
    const fd = new FormData();
    fd.append('user', user);
    fd.append('date', date);
    fd.append('image', image)
    return this.http.post(`${this.URL}images`, fd);
  }

  getImages() {
    return this.http.get<Image[]>(`${this.URL}images`);
  }

  getImagesByDate(data: object) {
    console.log(data)
    return this.http.post<Image[]>(`${this.URL}imagesByDates`, data);
  }
}
