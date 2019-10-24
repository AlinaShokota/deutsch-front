import { Component, OnInit } from '@angular/core';
import { NounService } from 'src/app/service/noun.service';
import { Noun } from 'src/app/model/noun';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-nouns-list',
  templateUrl: './nouns-list.component.html',
  styleUrls: ['./nouns-list.component.css']
})
export class NounsListComponent implements OnInit {

  wordFilter = new FormControl('');
  categoryFilter = new FormControl('');
  dataSource = new MatTableDataSource();
  columnsToDisplay = ['noun', 'plural', 'translation', 'category', 'modify','delete'];
  filterValues = {
    word: '',
    category: ''
  };

  constructor(private nounService: NounService) { }

  nouns: Noun[] = new Array();

  ngOnInit() {
    this.getAllNouns();
    this.wordFilter.valueChanges
    .subscribe(
      word => {
        this.filterValues.word = word;
        this.dataSource.filter = JSON.stringify(this.filterValues);
      }
    )
  this.categoryFilter.valueChanges
    .subscribe(
      category => {
        this.filterValues.category = category;
        this.dataSource.filter = JSON.stringify(this.filterValues);
      }
    )
  }

  getAllNouns() {
    this.nounService.getAllNouns().subscribe(value => {
      this.nouns = value;
      this.dataSource.data = this.nouns;
      this.dataSource.filterPredicate = this.createFilter();
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

  createFilter(): (data: any, filter: string) => boolean {
    let filterFunction = function (data, filter): boolean {
      let searchTerms = JSON.parse(filter);
      return (data.word.toLowerCase().indexOf(searchTerms.word) !== -1 || data.word.indexOf(searchTerms.word) !== -1)
        && (data.category.toLowerCase().indexOf(searchTerms.category) !== -1 || data.category.indexOf(searchTerms.category) !== -1);
    }
    return filterFunction;
  }

}
