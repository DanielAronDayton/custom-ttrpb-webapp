import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  routes!: Routes;

  constructor(
    private readonly _router: Router
  ) {

  }

  ngOnInit(): void {
    this,this.routes = this._router.config
  }
}
