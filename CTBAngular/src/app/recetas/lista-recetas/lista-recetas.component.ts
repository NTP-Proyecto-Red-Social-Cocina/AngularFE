import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RecetaFormComponent } from '../receta-form/receta-form.component';
import {PostComponent} from '../../post/post.component'
import { MatDialog } from '@angular/material';
import {User} from '../../modelos/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-recetas',
  templateUrl: './lista-recetas.component.html',
  styleUrls: ['./lista-recetas.component.css']
})
export class ListaRecetasComponent implements OnInit {
  @Input() usuario: Observable<User[]>;
  constructor(private modalService: NgbModal, private dialog: MatDialog) { }

  ngOnInit() {
    this.usuario = new User(1,'Paco123','paco.com','Paco','M','0984279295','Paco124','22/06/1998','../../../assets/perfil.png');
  }

  clickAddReceta(){
    const modal = this.modalService.open(RecetaFormComponent);
  }

  openDialog(){
    this.dialog.open(PostComponent);
  }

}
