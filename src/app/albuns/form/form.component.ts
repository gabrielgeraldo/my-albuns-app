import { Component, OnInit, ViewChild } from '@angular/core';
import { PoBreadcrumb, PoDynamicFormComponent, PoDynamicFormField, PoNotificationService } from '@po-ui/ng-components';
import { AlbunsService } from '../albuns.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @ViewChild(PoDynamicFormComponent, { static: true })
  dynamicForm!: PoDynamicFormComponent;

  public isBusy: boolean = false;
  public editMode: boolean = false;

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
    }
  ];
  
  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Albuns', link: '/' },
      { label: 'Cadastro de album' },
    ]
  };

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
    return this.service.save(data);
  }

}


