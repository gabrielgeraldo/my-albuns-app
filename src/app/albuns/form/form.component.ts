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
    this.musicas.push(this.criarMusica({ numero: 0 } as Musica));
  }

  criarMusica(musica: Musica): FormGroup {
    return this.fb.group({
      numero: [musica.numero, Validators.required],
      nome: [musica.nome, Validators.required],
    });
  }

  get musicas(): FormArray {
    return this.reactiveForm.get('musicas') as FormArray;
  }

  createReactiveForm() {
    this.reactiveForm = this.fb.group({
      codigo: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(99999)])],
      artista: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
      album: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
      musicas: this.fb.array([])
    });
  }

}