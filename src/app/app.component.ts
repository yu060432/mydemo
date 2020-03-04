import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mydemo';
  totalNum = 60;
  lrlaboard = false;
  ngOnInit(): void {
    console.log( "-----------------" + this.title);
    this.myInit();
  }

  myInit() {
    console.log( "我 是niit" );
  }

  @HostListener('document:click', ['$event.target'])
  changlr() {
    console.log("我是点击事件")
    this.lrlaboard = !this.lrlaboard;
  }

}
