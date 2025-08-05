import { Component, OnInit, ViewChild } from '@angular/core';
import { PoBreadcrumb, PoBreadcrumbItem, PoDialogService, PoNotificationService, PoPageAction, PoTableAction, PoTableColumn, PoTableComponent, PoTableDetail } from '@po-ui/ng-components';
import { AlbunsService } from '../albuns.service';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: false
})
export class ListComponent implements OnInit {

  public isBusy: boolean = false;
  public tableItems = [];
  totalExpanded = 0;

  public airfareDetail: PoTableDetail = {
    columns: [
      { label: 'Número', property: 'num_musica' },
      { label: 'Nome', property: 'nom_musica' },
      { label: 'Compositor 1', property: 'nom_comp1' },
      { label: 'Compositor 2', property: 'nom_comp2' },
    ],
    typeHeader: 'top'
  };

  constructor(
    private service: AlbunsService,
    private router: Router,
    private poDialog: PoDialogService,
    private notification: PoNotificationService
  ) { }


  ngOnInit(): void {
    
    this.service.getData().subscribe({
      next: (response: any) => {
        
        console.log(response); 

        this.tableItems = response.itens;

      },complete: () => this.isBusy = false
    })
    
    /*
    this.service.getDataTeste().subscribe({
      next: (response: any) => {
        console.log(response.items);
      },complete: () => this.isBusy = false
    })
    */
  }

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Albuns', link: '/albuns' }
    ]
  };

  public pageActions: PoPageAction[] = [
    { label: "Cadastrar novo album", url: "/albuns/create", icon: "po-icon-plus-circle" },
    { label: "Excluir selecionados", action: this.onDeleteSelected.bind(this), icon: "po-icon-delete", disabled: !this.hasSelectedItems, type: 'danger' },
  ]
  
  public tableColumns: PoTableColumn[] = [
    { label: 'Filial', property: 'filial' },
    { label: 'Código', property: 'codigo'},
    { label: 'Artista', property: 'artista'},
    { label: 'Nome album', property: 'album'},
    { label: 'Details' , property: 'subitens', type: 'detail', detail: this.airfareDetail}
  ]

  get hasSelectedItems(): boolean {
    return this.tableItems.filter( (item: any) => item.$selected).length > 0;
  }

  public refreshDeleteButton() {
    const selectedRows = this.tableItems.filter( (item: any) => item.$selected);
    this.pageActions[1].disabled = selectedRows.length === 0;
  }

  private onDeleteSelected() {
    this.poDialog.confirm({
      title: "Excluir albuns",
      message: "Confirma a exclusão dos albuns selecionados?",
      confirm: async () => {
        this.isBusy = true;
        const selectedRows = this.tableItems.filter( (item: any) => item.$selected);
        const observers = [];
        for (const row of selectedRows) {
          console.log("teste");
          observers.push(this.service.delete(row["filial"],row["codigo"]));
        }

        forkJoin(observers).subscribe({
          next: () => {
            this.notification.success('Excluído com sucesso');
            this.ngOnInit();
          },
          complete: () => this.isBusy = false
        })
      }
    });
  }

}
