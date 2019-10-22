import { Component, OnInit } from '@angular/core';
import { NounService } from 'src/app/service/noun.service';
import { Noun } from 'src/app/model/noun';

@Component({
  selector: 'app-noun-form',
  templateUrl: './noun-form.component.html',
  styleUrls: ['./noun-form.component.css']
})
export class NounFormComponent implements OnInit {

  constructor(private nounService:NounService) { }

  noun: Noun;

  ngOnInit() {
    this.noun = new Noun();
  }

  save(){
    this.nounService.save(this.noun).subscribe(value => {
      window.location.href = '/home';
    });
  }

}
