import { Component, OnInit } from '@angular/core';
import { NounService } from 'src/app/service/noun.service';
import { Noun } from 'src/app/model/noun';

@Component({
  selector: 'app-nouns-list',
  templateUrl: './nouns-list.component.html',
  styleUrls: ['./nouns-list.component.css']
})
export class NounsListComponent implements OnInit {

  constructor(private nounService: NounService) { }

  nouns: Noun[] = new Array();

  ngOnInit() {
    this.getAllNouns();
  }

  getAllNouns() {
    this.nounService.getAllNouns().subscribe(value => {
      this.nouns = value;
    });
  }

  modify(id: number) {
    window.location.href = '/noun-form/' + id;
  }

  delete(id: number) {
    this.nounService.delete(id).subscribe(value => {
      this.getAllNouns();
    })
  }

}
