import { Injectable, ErrorHandler } from '@angular/core';
import { ApplicationInsightsMonitoringService } from '@wesleyan-frontend/shared/util-app-monitoring';
import { SeverityLevel } from '@microsoft/applicationinsights-web';

@Injectable()
export class IsaErrorHandlerService extends ErrorHandler {
  constructor(private monitoringService: ApplicationInsightsMonitoringService) {
    super();
  }

  handleError(error: Error) {
    this.monitoringService.logException(error, SeverityLevel.Error);
    console.error(error); // Manually log exception
  }
}
