import { Injectable } from '@angular/core';
import { Contacto } from '../domain/contacto';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  listado: any[] = []

  constructor(private afs:AngularFirestore) { }

  getContactos(){
    return this.listado;
  }
  setContacto(contacto: Contacto){
    this.listado.push(contacto);
  }

  saveContacto(contacto: Contacto){
    // this.listado.push(Contacto);
    const refContactos = this.afs.collection("contactos");
    if(contacto.uid ==''){
    contacto.uid = this.afs.createId();
    }

    refContactos.doc(contacto.uid).set(Object.assign({},contacto));
  }
  // getListaContactos(): Observable<any[]>{
  //   const refContactos = this.afs.collection("contactos");
  //   return refContactos.valueChanges();
  // }
  getListaContactos(){
    const refContactos = this.afs.collection("contactos");
    return refContactos.valueChanges();
  }
}
