import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss']
})
export class DashboardPage implements OnInit {
  hideStories = false

  constructor() { }

  ngOnInit() {
  }
  onScroll(event: any) {
    this.hideStories = event.detail.scrollTop > 50;
  }

}
