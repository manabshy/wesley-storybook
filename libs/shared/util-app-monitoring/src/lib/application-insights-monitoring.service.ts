import { Injectable } from '@angular/core';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';

@Injectable({
  providedIn: 'root',
})
export class ApplicationInsightsMonitoringService {
  appInsights: ApplicationInsights;
  constructor() {}

  init(instrumentationKey: string, appName: string) {
    this.appInsights = new ApplicationInsights({
      config: {
        instrumentationKey,
        accountId: `acc-id-${appName}`,
        appId: `app-id-${appName}`,
      },
    });
    this.appInsights.loadAppInsights();
  }

  logPageView(name?: string, url?: string) {
    // option to call manually
    this.appInsights.trackPageView({
      name: name,
      uri: url,
    });
  }

  logEvent(name: string, properties?: { [key: string]: any }) {
    this.appInsights.trackEvent({ name: name }, properties);
  }

  logMetric(
    name: string,
    average: number,
    properties?: { [key: string]: any }
  ) {
    this.appInsights.trackMetric({ name: name, average: average }, properties);
  }

  logException(exception: Error, severityLevel?: number) {
    this.appInsights.trackException({
      exception: exception,
      severityLevel: severityLevel,
    });
  }

  logTrace(message: string, properties?: { [key: string]: any }) {
    this.appInsights.trackTrace({ message: message }, properties);
  }
}
