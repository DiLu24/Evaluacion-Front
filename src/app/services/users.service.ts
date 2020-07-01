import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url_serv = environment.urlServ;

  constructor( private http: HttpClient ) { }

  getUsers() {
    const url = `${ this.url_serv }/readAllData`;
    return this.http.get( url );
  }

  addUser( usuario: any ) {
    const url = `${ this.url_serv}/createData`;
    return this.http.post( url, usuario )
    .pipe(
      map( ( resp: any ) => {
        const alert = {
          icon: 'success',
          title: 'Contacto creado.'
        };
        this.showAlert( alert );
        return true;
      }),
      catchError( err => {
        const alert = {
          icon: 'error',
          title: 'Error al intentar crear el Contacto'
        };
        this.showAlert( alert );
        return throwError( err );
      })
    );
  }

  getUser( id: string ) {
    const url = `${ this.url_serv }/readData`;
    const paramId = new HttpParams().set('id', id );
    return this.http.get( url, { params: paramId } )
    .pipe(
      catchError( err => {
        const alert = {
          icon: 'error',
          title: 'Error para cargar al Contacto, intenta de nuevo.'
        };
        this.showAlert( alert );
        return throwError( err );
      })
    );
  }

  deletUser( id: string ) {
    const url = `${ this.url_serv }/deleteData`;
    return this.http.delete( url, { params: { id } } )
    .pipe(
      map( ( resp: any ) => {
        const alert = {
          icon: 'success',
          title: 'Contacto eliminado.'
        };
        this.showAlert( alert );
        return true;
      }),
      catchError( err => {
        const alert = {
          icon: 'error',
          title: 'Error al intentar eliminar '
        };
        this.showAlert( alert );
        return throwError( err );
      })
    );
  }

  updateUser( user: any ) {
    const url = `${ this.url_serv }/updateData`;
    return this.http.put( url, user )
    .pipe(
      map( ( resp: any ) => {
        const alert = {
          icon: 'success',
          title: 'Contacto actualizado.'
        };
        this.showAlert( alert );
        return true;
      }),
      catchError( err => {
        const alert = {
          icon: 'error',
          title: 'Error al intentar actualizar'
        };
        this.showAlert( alert );
        return throwError( err );
      })
    )
  }

  showAlert( alert: any ) {

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
          onOpen: (toast) => {
        toast.addEventListener( 'mouseenter', Swal.stopTimer )
        toast.addEventListener( 'mouseleave', Swal.resumeTimer )
      }
    });

    Toast.fire( alert );
  }

}