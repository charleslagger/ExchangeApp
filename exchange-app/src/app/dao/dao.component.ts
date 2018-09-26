import { Component, OnInit } from '@angular/core';
import { DaoService } from './dao.service';

@Component({
  selector: 'app-dao',
  templateUrl: './dao.component.html',
  styleUrls: ['./dao.component.css']
})
export class DaoComponent implements OnInit {

  constructor(private daoService: DaoService) { }

  ngOnInit() {
  }

  uploadFile(event) {
    const files = event.target.files;
    if (files.length > 0) {
      console.log(files); // You will see the file
      // this.daoService.uploadFile(files);
    }
  }

}
