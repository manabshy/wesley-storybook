import { NgModule, ModuleWithProviders } from '@angular/core';
import { GoogleTagManagerConfig } from './google-tag-manager-config';

@NgModule()
export class SharedUtilGtmModule {
  public static forRoot(
    config: GoogleTagManagerConfig
  ): ModuleWithProviders<SharedUtilGtmModule> {
    return {
      ngModule: SharedUtilGtmModule,
      providers: [{ provide: 'googleTagManagerConfig', useValue: config }],
    };
  }
}
