import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AlbunsRoutingModule } from './albuns-routing.module';
import { PoPageDynamicSearchModule, PoPageDynamicTableModule } from '@po-ui/ng-templates';
import { PoTableModule, PoPageModule, PoDynamicModule, PoLoadingModule, PoButtonModule, PoDividerModule } from '@po-ui/ng-components';
import { FormComponent } from './form/form.component';

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
    PoDividerModule
]
})
export class AlbunsModule { }
