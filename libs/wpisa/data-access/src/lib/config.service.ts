import { Injectable } from '@angular/core';
import { Config } from './config.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private appConfig: Config;

  private loadConfigFromHtml(): Observable<Config> {
    let configAttrData: string;
    let data: Config;

    try {
      configAttrData = document
        .getElementById('isa-config')
        .getAttribute('data-model');
    } catch (error) {
      throw Error('Initial config data missing from index.html');
    }

    if (configAttrData) {
      try {
        data = JSON.parse(configAttrData);
      } catch (error) {
        throw Error('Config string is not a valid json');
      }
    }
    return of(data);
  }

  loadConfig() {
    return this.loadConfigFromHtml()
      .toPromise()
      .then((data) => {
        this.appConfig = data;
      });
  }

  get content() {
    if (!this.appConfig) {
      throw Error('Config not loaded');
    }

    return this.appConfig;
  }
}
