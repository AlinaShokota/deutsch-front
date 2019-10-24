import { Component, OnInit } from '@angular/core';
import { NounService } from 'src/app/service/noun.service';
import { Noun } from 'src/app/model/noun';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-noun-form',
  templateUrl: './noun-form.component.html',
  styleUrls: ['./noun-form.component.css']
})
export class NounFormComponent implements OnInit {

  constructor(private nounService:NounService, private route: ActivatedRoute) { }

  noun: Noun= new Noun();
  categories: String[] = new Array();

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id: number = parseInt(idParam, 10);
    if (id) {
      this.nounService.get(id).subscribe(value => {
        this.noun = value;
      });
    }
    this.nounService.getCategories().subscribe(value => {
      this.categories = value;
    })
  }

  save(){
    if(this.noun.category==null){
      this.noun.category='no category';
    }
    this.nounService.save(this.noun).subscribe(value => {
      window.location.href = '/noun-form';
    });
  }

}
