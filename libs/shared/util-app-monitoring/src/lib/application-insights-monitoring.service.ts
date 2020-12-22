import { Injectable } from '@angular/core';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';

@Injectable({
  providedIn: 'root',
})
export class ApplicationInsightsMonitoringService {
  appInsights: ApplicationInsights;
  private isMonitoringRunning = false;

  constructor() {}

  config(instrumentationKey: string, appName: string) {
    this.appInsights = new ApplicationInsights({
      config: {
        instrumentationKey,
        accountId: `acc-id-${appName}`,
        appId: `app-id-${appName}`,
      },
    });
  }

  startMonitoring() {
    this.appInsights.loadAppInsights();
    this.isMonitoringRunning = true;
  }

  logPageView(name?: string, url?: string) {
    if (this.isMonitoringRunning) {
      // option to call manually
      this.appInsights.trackPageView({
        name: name,
        uri: url,
      });
    }
  }

  logEvent(name: string, properties?: { [key: string]: any }) {
    if (this.isMonitoringRunning) {
      this.appInsights.trackEvent({ name: name }, properties);
    }
  }

  logMetric(
    name: string,
    average: number,
    properties?: { [key: string]: any }
  ) {
    if (this.isMonitoringRunning) {
      this.appInsights.trackMetric(
        { name: name, average: average },
        properties
      );
    }
  }

  logException(exception: Error, severityLevel?: number) {
    if (this.isMonitoringRunning) {
      this.appInsights.trackException({
        exception: exception,
        severityLevel: severityLevel,
      });
    }
  }

  logTrace(message: string, properties?: { [key: string]: any }) {
    if (this.isMonitoringRunning) {
      this.appInsights.trackTrace({ message: message }, properties);
    }
  }
}
