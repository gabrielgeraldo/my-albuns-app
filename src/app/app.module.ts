import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { ProtheusLibCoreModule } from '@totvs/protheus-lib-core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({ declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        PoModule,
        RouterModule.forRoot([]),
        PoTemplatesModule,
        ProtheusLibCoreModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
