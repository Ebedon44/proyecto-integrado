import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;


  constructor(private observer: BreakpointObserver, private cdr:ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  /*ngAfterViewInit() {
    this.observer.observe(['(max-width:800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
        
      }
    });
    this.cdr.detectChanges();
  }*/

}
