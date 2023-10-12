import { ImageService } from './../../services/image.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.css'],
})
export class ImagesListComponent implements OnInit {
  images: any = [];
  dateform: FormGroup
  counter: any
  constructor(private ImageService: ImageService, private fb: FormBuilder) {
    this.dateform = this.fb.group({
      start: ['', Validators.required],
      end: ['', Validators.required]
    })

  }

  ngOnInit() {
    this.ImageService.getImages().subscribe((res) => {
      this.counter = res.length
      this.images = res
    }, err => (console.log(err)))
  }

  Buscar() {
    const datepipe: DatePipe = new DatePipe('en-US')
    let end = this.dateform.value.end
    let formatteDate = datepipe.transform(end, 'YYYY-MMM-dd')
    end = formatteDate + ' 23:59:59'
    let start = this.dateform.value.start
    let formatteDate1 = datepipe.transform(start, 'YYYY-MMM-dd HH:mm:ss')
    start = formatteDate1

    let data = {
      'start': start,
      'end': end
    }

    this.ImageService.getImagesByDate(data).subscribe(res => {
      this.counter = res.length
      this.images = res
    }, err => (console.log(err)))


  }
}
