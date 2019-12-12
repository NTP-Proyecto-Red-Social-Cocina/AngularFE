import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RecetaFormComponent } from '../receta-form/receta-form.component';
import {PostComponent} from '../../post/post.component'
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-lista-recetas',
  templateUrl: './lista-recetas.component.html',
  styleUrls: ['./lista-recetas.component.css']
})
export class ListaRecetasComponent implements OnInit {
  

  constructor(private modalService: NgbModal, private dialog: MatDialog) { }

  ngOnInit() {
  }

  clickAddReceta(){
    const modal = this.modalService.open(RecetaFormComponent);
  }

  openDialog(){
    this.dialog.open(PostComponent);
  }

}
