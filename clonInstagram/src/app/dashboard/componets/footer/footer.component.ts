import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: false
})
export class FooterComponent  implements OnInit {

  constructor(private router: Router) { }
  navigateTo(route: string) {
    this.router.navigate([route]);
  }
  ngOnInit() {}

}
