import { Component, OnInit } from '@angular/core';
import { VerbService } from 'src/app/service/verb.service';
import { Verb } from 'src/app/model/verb';

@Component({
  selector: 'app-verb-form',
  templateUrl: './verb-form.component.html',
  styleUrls: ['./verb-form.component.css']
})
export class VerbFormComponent implements OnInit {

  constructor(private verbService: VerbService) { }

  verb:Verb;

  ngOnInit() {
    this.verb = new Verb();
  }

  save(){
    this.verbService.save(this.verb).subscribe(value => {
      window.location.href = '/home';
    });
  }

}
