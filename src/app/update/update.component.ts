import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { sharedServiceService } from '../services/shared.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  getCurrentDocumentListSub : Subscription | undefined;
  currentItem : any = "";
  constructor(private sharedserviceService: sharedServiceService) { }

  ngOnInit(): void {
    this.getCurrentDocumentListSub = this.sharedserviceService
    .getCurrentItem()
    .subscribe((_data: any) => {
     this.currentItem = _data;
    })
    
  }

}
