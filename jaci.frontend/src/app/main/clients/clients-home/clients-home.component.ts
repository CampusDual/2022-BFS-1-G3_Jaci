import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OTableComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-clients-home',
  templateUrl: './clients-home.component.html',
  styleUrls: ['./clients-home.component.css']
})
export class ClientsHomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  @ViewChild('accountClientsTable', { static: false }) clientsTable: OTableComponent;

  public navigateToIDDetail() {
    let selected = this.clientsTable.getSelectedItems();
    if (selected.length === 1) {
      let accountId = selected[0]['ID']
      this.router.navigate(['main/clients/' + accountId]);
    }
  }

  ngOnInit() {
  }

}
