import { Component, OnInit } from '@angular/core';
import { Speed } from '../speed';
import { SpeedLimitService } from '../speed-limit.service';
@Component({
  selector: 'app-speed',
  templateUrl: './speed.component.html',
  styleUrls: ['./speed.component.css']
})
export class SpeedComponent implements OnInit {
speed: Speed =  {
  id: 1,
  speed : 70,
  lattitude: 0,
  longitude: 0,
  speedLimit: 50,
  speedMessage: ''
};
  constructor(private speedLimitService: SpeedLimitService) { }

  getSpeedLimit(): void {
//    this.speed=this.speedLimitService.getSpeedLimt();
  }
  ngOnInit() {
  }

}
