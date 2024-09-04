import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './interceptors/token-interceptor.service';
import { ErrorInterceptorService } from './interceptors/error-interceptor.service';
import {AuthGuardService} from "./guards/auth-guard.service";

@NgModule({
  providers: [
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    }
  ]
})
export class CoreModule { }
