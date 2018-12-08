import {Component, OnInit, ViewChild } from '@angular/core';
import { PartyListsService } from '../../services/party-lists.service';
import { MatPaginator, MatTableDataSource, MatSort} from '@angular/material';

@Component({
  selector: 'app-partylist',
  templateUrl: './partylist.component.html',
  styleUrls: ['./partylist.component.css']
})
export class PartylistComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private partyListsService: PartyListsService,
  ) {}
  dataSource$ = <any>[];
  displayedColumns$: string[] = ['name', 'desc'];

  ngOnInit() {
    this.partyListsService.getPartiesList().subscribe((data => {
      this.dataSource$ = new MatTableDataSource(data);
      this.dataSource$.paginator = this.paginator;
    }));
  }
}
