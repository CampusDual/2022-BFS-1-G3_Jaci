import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogDetailComponent } from '../catalog-detail/catalog-detail.component';

@Component({
  selector: 'app-catalog-home',
  templateUrl: './catalog-home.component.html',
  styleUrls: ['./catalog-home.component.scss']
})
export class CatalogHomeComponent implements OnInit {

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    protected sanitizer: DomSanitizer,
    protected dialog: MatDialog
  ) {
  }

  ngOnInit() {
    // nothing to do
  }

  public getImageSrc(base64: any): any {
    return base64 ? this.sanitizer.bypassSecurityTrustResourceUrl('data:image/*;base64,' + base64.bytes) : './assets/images/no-image-transparent.png';
  }

  public openDetail(data: any): void {
    this.dialog.open(CatalogDetailComponent, {
      height: '330px',
      width: '520px',
      data: data,
      panelClass: 'my-custom-dialog-class'
    });
  }

  /*
  @HostListener("window:scroll", ['$event'])
  onWindowScroll(event) {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
    console.log("hola");
  }
  */
}
