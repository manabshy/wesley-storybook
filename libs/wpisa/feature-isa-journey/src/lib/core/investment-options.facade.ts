import { Injectable } from '@angular/core';

import { ISAApiService } from '@wesleyan-frontend/wpisa/data-access';

@Injectable({
  providedIn: 'root',
})
export class InvestmentOptionsFacade {
  constructor(private isaApiService: ISAApiService) {}
}
