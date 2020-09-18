import { Component, OnInit } from '@angular/core';
import {
  ConfigService,
  Config,
} from '@wesleyan-frontend/set-a-target-calculator/data-access';
@Component({
  selector: 'wes-target-calculator',
  templateUrl: './target-calculator.component.html',
  styleUrls: ['./target-calculator.component.scss'],
})
export class TargetCalculatorComponent implements OnInit {
  config: Config;
  constructor(private configService: ConfigService) {
    this.config = this.configService.content;
  }

  ngOnInit(): void {}
}
