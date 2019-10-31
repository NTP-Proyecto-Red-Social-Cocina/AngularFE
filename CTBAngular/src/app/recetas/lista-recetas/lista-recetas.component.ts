import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RecetaFormComponent } from '../receta-form/receta-form.component';

@Component({
  selector: 'app-lista-recetas',
  templateUrl: './lista-recetas.component.html',
  styleUrls: ['./lista-recetas.component.css']
})
export class ListaRecetasComponent implements OnInit {
  

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  clickAddReceta(){
    const modal = this.modalService.open(RecetaFormComponent);
    modal.result.then(
      this.handleModalRecetaFormClose.bind(this),
      this.handleModalRecetaFormClose.bind(this)
    )
  }

    handleModalRecetaFormClose(){
      alert('Se canceló la creación');
    }

}
