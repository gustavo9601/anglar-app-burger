import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @ViewChild('modal_order') modal_order;

  constructor(private serviceModal: NgbModal) {
  }

  ngOnInit() {
  }


  openOrderModal() {
    /*
    * windowClass: 'modal-order'  permite crear una clase global accesible desde el style.css a este modal
    * */
    this.serviceModal.open(this.modal_order, {windowClass: 'modal-order'}).result.then(
      (respuesta) => {  // Se recibe como promesa el valor que emita al cerrar el modal
        console.log("respuesta modal order", respuesta)

        if (respuesta === 'yes'){

        }
      }
    )
  }

}
