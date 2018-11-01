import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders: Leader[];

  selectedLeader: Leader;

  constructor(private leaderService: LeaderService) { }
  
  ngOnInit() {
    this.leaders = this.leaderService.getLeaders();
  }

  onSelect(leader: Leader) {
    this.selectedLeader = leader;
  }

}
