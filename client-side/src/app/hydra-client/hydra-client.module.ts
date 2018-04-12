import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { HttpModule } from '@angular/http';

import { HydraBatchService } from './services/batch/hydra-batch.service';
import { TrainerService } from './services/trainer/trainer.service';
import { HydraSkillService } from './services/skill/hydra-skill.service';
import { UrlService } from './services/urls/url.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HydraInterceptor } from './interceptors/hydra.interceptor';

// export const CONTEXT_CONFIG = new InjectionToken('test');

// export const urlServiceFactory = function(context: string) {
//   return new UrlService(context);
// };

@NgModule({
  imports: [
    HttpModule,
  ],
  declarations: [
  ],
  providers: [
    HydraBatchService,
    HydraSkillService,
    TrainerService,
    UrlService,

    { provide: HTTP_INTERCEPTORS, useClass: HydraInterceptor, multi: true },  // interceptor for all HTTP requests
    UrlService
  ]

})
export class HydraClientModule {

  // /**
  //  * Provide the HydraClient with a context url to use, I can't get it to build with this way, it works
  //  *
  //  * @param context
  //  */
  // static forRoot(context: string): ModuleWithProviders {
  //   return {
  //     ngModule: HydraClientModule,
  //     providers: [
  //       { provide: CONTEXT_CONFIG, useValue: {context: context} },
  //       {
  //         provide: UrlService,
  //         useFactory: urlServiceFactory,
  //         deps: [
  //           CONTEXT_CONFIG
  //         ]
  //       }
  //     ]
  //   };
  // }
}
