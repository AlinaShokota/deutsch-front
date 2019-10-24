import { Component, OnInit } from '@angular/core';
import { NounService } from 'src/app/service/noun.service';
import { Noun } from 'src/app/model/noun';

@Component({
  selector: 'app-nouns-cards',
  templateUrl: './nouns-cards.component.html',
  styleUrls: ['./nouns-cards.component.css']
})
export class NounsCardsComponent implements OnInit {

  constructor(private nounService:NounService) { }

  noun: Noun;
  isTranslated = true;
  category: string = 'no category';
  categories: String[] = new Array();

  ngOnInit() {
    this.nounService.getCategories().subscribe(value => {
      this.categories = value;
    })
    this.getByCategory();
  }

  // getRandomWord(){
  //   this.nounService.getRandom().subscribe(value => {
  //     this.noun = value;
  //     if(this.noun.image===null){
  //       this.noun.image = 'https://cdn4.iconfinder.com/data/icons/basic-12/614/13_-_Question-256.png';
  //     }
  //     this.isTranslated = true;
  //   })
  // }

  getTranslation(){
    this.isTranslated = false;
  }

  getByCategory(){
    console.log(this.category);
    this.nounService.getByCategory(this.category).subscribe(value => {
      this.noun = value;
      if(this.noun.image===null){
        this.noun.image = 'https://cdn4.iconfinder.com/data/icons/basic-12/614/13_-_Question-256.png';
      }
      this.isTranslated = true;
    })

  }

}
