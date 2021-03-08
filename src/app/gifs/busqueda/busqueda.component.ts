import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  //                //En donde nosotros podemos buscar por
  //                //  elementos HTML, directivas, clases, IDs
  //                //  y lo va a asignar al elemento txtBuscar de 
  //                //  de la clase.
  //                //Operador !: le estamos diciendo a TypeScript
  //                //  qye el valor de ElementRef nunca va a ser nulo.
  //                //Nota. Siempre que veamos que una clase es de tipo 
  //                //  generico, es importante especificar el Tipo,
  //                //  que en este caso el tipo HTMLInputElement.
  @ViewChild('txtBuscar') txtBuscar !: ElementRef<HTMLInputElement>;

  //------------------------------------------------------------------------------------------   
  public buscar (
  //                //Busqueda.

  ) : void{
    console.log(this.txtBuscar);
    const valor = this.txtBuscar.nativeElement.value;

    console.log(valor);

    this.txtBuscar.nativeElement.value = '';
  }
}