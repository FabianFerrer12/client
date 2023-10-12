import { Router } from '@angular/router';
import { ImageService } from './../../services/image.service';
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget & null;
}
@Component({
  selector: 'app-images-form',
  templateUrl: './images-form.component.html',
  styleUrls: ['./images-form.component.css']
})
export class ImagesFormComponent {
  file!: File;
  image: string | ArrayBuffer | null | undefined

  constructor(private ImageService: ImageService, private router: Router) {

  }


  onImagesSelect(e: any) {
    this.file = <File>e.target.files[0];
    if (this.file) {
      const reader = new FileReader();
      reader.onload = e => this.image = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  subirDatos(user: HTMLInputElement): boolean {
    const datepipe: DatePipe = new DatePipe('en-US')
    let fecha = new Date();
    let formatteDate = datepipe.transform(fecha, 'YYYY-MMM-dd HH:mm:ss')
    const fechaString = formatteDate!.toString()
    console.log(fechaString)
    this.ImageService.createImage(user.value, fechaString, this.file).subscribe(res => { console.log(res) }, err => console.log(err))
    return false;
  }
}
