import { Component, OnInit } from '@angular/core';
import { DaoService } from './dao.service';

@Component({
  selector: 'app-dao',
  templateUrl: './dao.component.html',
  styleUrls: ['./dao.component.css']
})
export class DaoComponent implements OnInit {
  image;
  constructor(private daoService: DaoService) { }

  ngOnInit() {
  }

  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();
    myReader.onloadend = (e) => {
      this.image = myReader.result;
      console.log('==>' + this.image);
    };

    myReader.readAsDataURL(file);
  }

}
