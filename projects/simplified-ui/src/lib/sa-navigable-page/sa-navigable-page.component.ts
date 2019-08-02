import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationItem } from '../models/NavigationItem';

@Component({
  selector: 'sa-navigable-page',
  templateUrl: './sa-navigable-page.component.html',
  styleUrls: ['./sa-navigable-page.component.scss']
})
export class SaNavigablePageComponent implements OnInit {

  @Input() primaryMenu: NavigationItem[] = [];
  @Input() secondaryMenu: NavigationItem[] = [];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.fragment.subscribe(f => {
      const element = document.querySelector("a[name='" + f + "']")
      if (element) {
        element.scrollIntoView();
      }
    })
  }

}
