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
        .getElementById('just-invest-calculator-config')
        .getAttribute('data-model');
    } catch (error) {
      throw Error(
        'Initial Sitecore config data missing from index.html <div id="just-invest-calculator-config" data-model="*MISSING*">'
      );
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
