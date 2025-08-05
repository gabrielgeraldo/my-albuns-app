import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { Observable } from 'rxjs';
import { AlbunsService } from '../albuns.service';
import { Musica } from 'src/app/models/Musica';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  standalone: false
})
export class FormComponent implements OnInit {
  @ViewChild('reactiveFormData', { static: true }) reactiveFormModal: PoModalComponent;

  reactiveForm: UntypedFormGroup;

  public readonly modalPrimaryAction: PoModalAction = {
    action: () => this.reactiveFormModal.close(),
    label: 'Close'
  };

  cancel() {
   
  }

  onSaveClick(): void {
    this.save(this.reactiveForm.value)
      .subscribe({
        next: () => {
          console.log('Salvo com sucesso');
        },
        error: () => {
          console.log("error");
        },
        complete: () => console.log("completou")
      });
  }
  
  private save(data: any): Observable<any> {
    console.log(this.reactiveForm.value)
    return this.service.save(data);
  }
  
  constructor(private fb: FormBuilder, private service: AlbunsService) {
    this.createReactiveForm();
  }
  ngOnInit(): void {
     
  }

  addItem() {
    this.itens.push(this.criarMusica({ numero: 0 } as Musica));
  }

  criarMusica(musica: Musica): FormGroup {
    return this.fb.group({
      num_musica: [musica.numero, Validators.required],
      nom_musica: [musica.nome, Validators.required],
    });
  }

  get itens(): FormArray {
    return this.reactiveForm.get('itens') as FormArray;
  }

  createReactiveForm() {
    this.reactiveForm = this.fb.group({
      artista: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
      album: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
      itens: this.fb.array([])
    });
  }

}