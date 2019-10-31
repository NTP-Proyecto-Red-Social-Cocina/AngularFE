import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-receta-form',
  templateUrl: './receta-form.component.html',
  styleUrls: ['./receta-form.component.css']
})
export class RecetaFormComponent implements OnInit {

  todoForm:FormGroup;
  constructor(private formBuilder: FormBuilder,
    public activeModal:NgbActiveModal) { }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      title: ['',Validators.required],
      description: ['',Validators.required]
    })
  }

}
