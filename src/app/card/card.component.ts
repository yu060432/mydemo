import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  totalminutes = 60;

  clearNum = 0;

  todayHistoryList = [];

  constructor() { }

  ngOnInit() {
    this.todayHistoryList.push({userName: 'tan', content: 'sdfsdfsfsdfssdfsdfsdfdfdsfsdfsdfds', msg_from: '1'});
    this.todayHistoryList.push({userName: 'yugg', content: 'gggggggggggggggggg', msg_from: '0'});
    this.todayHistoryList.push({userName: 'yugg', content: 'gggggggggggggggggg', msg_from: '0'});
    this.todayHistoryList.push({userName: 'yugg', content: 'gggggggggggggggggg', msg_from: '0'});
    this.todayHistoryList.push({userName: 'yugg', content: 'gggggggggggggggggg', msg_from: '0'});
    this.clearNum =  setInterval(() => {
          this.totalminutes--;
          if (this.totalminutes <= 0) {
            this.totalminutes = 60;
          }
         }, 1000);
  }

  countTime() {
    this.totalminutes--;
    if (this.totalminutes <= 0) {
      this.totalminutes = 60;
    }
  }

}
