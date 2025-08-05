import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AlbunsRoutingModule } from './albuns-routing.module';
import { PoPageDynamicSearchModule, PoPageDynamicTableModule } from '@po-ui/ng-templates';
import { PoTableModule, PoPageModule, PoDynamicModule, PoLoadingModule, PoButtonModule, PoDividerModule, PoFieldModule, PoListViewModule, PoWidgetModule, PoInfoModule } from '@po-ui/ng-components';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';

@NgModule({
  declarations: [
    ListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    AlbunsRoutingModule,
    PoPageDynamicSearchModule,
    PoPageDynamicTableModule,
    PoTableModule,
    PoPageModule,
    PoDynamicModule,
    PoLoadingModule,
    PoButtonModule,
    PoDividerModule,
    ReactiveFormsModule,
    PoFieldModule,
    PoListViewModule,
    PoWidgetModule,
    PoInfoModule 
    
],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AlbunsModule { }
