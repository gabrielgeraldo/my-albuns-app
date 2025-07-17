import { Component, OnInit, ViewChild } from '@angular/core';
import { PoBreadcrumb, PoDynamicFormComponent, PoDynamicFormField, PoNotificationService, PoTableAction, PoTableColumn, PoTableComponent } from '@po-ui/ng-components';
import { AlbunsService } from '../albuns.service';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, Observable, ObservableInput } from 'rxjs';
import { Location } from '@angular/common'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @ViewChild(PoDynamicFormComponent, { static: true })
  dynamicForm!: PoDynamicFormComponent;

  @ViewChild(PoTableComponent, { static: true }) poTable!: PoTableComponent;

  public isBusy: boolean = false;
  public editMode: boolean = false;

  public tableItems = [];

  public readonly formFields: PoDynamicFormField[] = [
    
    {
      property: 'filial',
      required: true,
      label: 'Filial',
      gridColumns: 2,
      placeholder: 'Filial'
    },
    {
      label: 'Codigo',
      property: 'codigo',
      required: true,
      gridColumns: 6,
      placeholder: 'Codigo',
    },
    {
      label: 'artista',
      property: 'artista',
      required: true,
      gridColumns: 6,
      placeholder: 'artista',
    },
    {
      label: 'nomealbum',
      property: 'nomealbum',
      required: true,
      gridColumns: 6,
      placeholder: 'nomealbum',
    },
    
  ];

  public formFieldsItens: Array<any> = [
    
  ]

  public readonly columnFormFieldsItens: PoTableColumn[] = [
     { property: 'id', type: 'number'},
     { property: 'descricao', type: 'number', },
  ]

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Albuns', link: '/' },
      { label: 'Cadastro de album' },
    ]
  };
Array: any;

  get isFormInvalid(): boolean {
    if (this.dynamicForm)
      return this.dynamicForm.form.invalid as boolean;
    return true;
  }

  constructor(
    private notificationService: PoNotificationService,
    private service: AlbunsService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    if (id) {
      this.editMode = true;
      this.isBusy = true;
      this.service.findById(id).subscribe({
        next: (product) => this.dynamicForm.value = product,
        complete: () => this.isBusy = false
      })
    }
  }

  addItem() {
    this.formFieldsItens = [...this.formFieldsItens, this.formFieldsItens];
    // this.itemIndex++;
  }

  remove(item: { [key: string]: any }) {
    this.poTable.removeItem(item);
  }

  actions: Array<PoTableAction> = [
    {
      icon: 'an an-currency-circle-dollar',
      label: 'Apply Discount',
    },
    { action: this.remove.bind(this), icon: 'po-icon an an-trash', label: 'Remove' }
  ];

  onCancelClick(): void {
    this.location.back();
  }

  onSaveClick(): void {
    this.isBusy = true;
    this.save(this.dynamicForm.form.value)
      .subscribe({
        next: () => {
          this.notificationService.success('Produto salvo com sucesso');
          this.router.navigate(["products"]);
        },
        error: () => this.isBusy = false,
        complete: () => this.isBusy = false
      });
    }
    
  onSaveAndNewClick(): void {
    this.isBusy = true;
    this.save(this.dynamicForm.form.value)
      .subscribe({
        next: () => {
          this.notificationService.success('Produto salvo com sucesso');
          this.router.navigate(["products", "create"]);
        },
        error: () => this.isBusy = false,
        complete: () => this.isBusy = false
      });
  }

  private save(data: any): Observable<any> {
    if (this.editMode) 
      return this.service.update(data);
    console.log(this.dynamicForm.form.value)
    // console.log(JSON.stringify(this.dynamicForm.form))
    return this.service.save(data);
  }

}


