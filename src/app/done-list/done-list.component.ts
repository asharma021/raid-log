import { Component, OnInit } from '@angular/core';
import { RaidLogService } from '../raid-log.service';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.css']
})
export class DoneListComponent implements OnInit {
  columnDefs = [
    { field: 'priority', sortable: true, filter: true },
    { field: 'ranktype', headerName: 'Rank', sortable: true, filter: true },
    { field: 'itemNo', headerName: 'Item No', sortable: true, filter: true },
    { field: 'itemType', headerName: 'Item Type', sortable: true, filter: true },
    { field: 'area', sortable: true, filter: true },
    { field: 'subarea', sortable: true, filter: true },
    { field: 'categoryName', headerName: 'Category/Name', sortable: true, filter: true },
    { field: 'itemDescription', headerName: 'Item Description', sortable: true, filter: true },
    { field: 'actions', sortable: true, filter: true },
    { field: 'taskOwner', headerName: 'Task Owner', sortable: true, filter: true },
    { field: 'liaison', sortable: true, filter: true },
    { field: 'lastUpdateDate', headerName: 'Last Update Date', sortable: true, filter: true },
    { field: 'nextUpdateDate', headerName: 'Next Update Date', sortable: true, filter: true },
    { field: 'dueDate', headerName: 'Due Date', sortable: true, filter: true },
    { field: 'status', sortable: true, filter: true },
    { field: 'statusNotes', headerName: 'Status Notes', sortable: true, filter: true },
    { field: 'raisedBy', headerName: 'Raised By', sortable: true, filter: true },
    { field: 'submittedBy', headerName: 'Submitted By', sortable: true, filter: true },
    { field: 'dateCreated', headerName: 'Date Created', sortable: true, filter: true },
    { field: 'jiraNo', headerName: 'Jira No', sortable: true, filter: true },
    { field: 'archivedDate', headerName: 'Archived Date', sortable: true, filter: true },
    { field: 'daysDuration', headerName: 'Days Duration', sortable: true, filter: true }
  ];

  rowData: any;

  constructor(private raidLogService: RaidLogService) { }

  ngOnInit(): void {
    this.raidLogService.getDoneList().subscribe(data => {
      this.rowData = data;
    });
  }
}
