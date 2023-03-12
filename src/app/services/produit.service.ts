import { Injectable } from '@angular/core'; 
import { Categorie } from '../model/categorie.model';
import { Produit } from '../model/produit.model'; 

import { Observable } from 'rxjs'; 
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} ) }; 

 

@Injectable({ providedIn: 'root' }) 

export class ProduitService { 
  apiURL: string = 'http://localhost:8080/produits/api';
  apiURLCat: string = 'http://localhost:8080/produits/cat';

   constructor(private http : HttpClient) { } 
   
  // produits : Produit[]; //un tableau de Produit constructor() 
  
  // categories : Categorie[];
//   constructor(){
//     this.categories = [ {idCat : 1, nomCat : "PC"}, {idCat : 2, nomCat : "Imprimante"}];
//   //   this.produits = [ { idProduit : 1, nomProduit : "PC Asus", prixProduit : 3000.600, dateCreation : new Date("01/14/2011"), categorie : {idCat : 1, nomCat : "PC"}},
//   //   { idProduit : 2, nomProduit : "Imprimante Epson", prixProduit : 450, dateCreation : new Date("12/17/2010"), categorie : {idCat : 2, nomCat : "Imprimante"}},
//   //   { idProduit : 3, nomProduit :"Tablette Samsung", prixProduit : 900.123, dateCreation : new Date("02/20/2020"),categorie : {idCat : 1, nomCat : "PC"}} ];
//   // 
// }
   
    
        listeProduit(): Observable<Produit[]>{ 
          return this.http.get<Produit[]>(this.apiURL); 
        }

        ajouterProduit( prod: Produit):Observable<Produit>{ 
          return this.http.post<Produit>(this.apiURL, prod, httpOptions); 
        }

        supprimerProduit(id : number) { 
          const url = `${this.apiURL}/${id}`; 
          return this.http.delete(url, httpOptions); 
        }

        // supprimerProduit(produit : Produit) {
        //   //supprimer le produit prod du tableau produits 
        //   const index = this.produits.indexOf(produit, 0); 
        //   if (index > -1) { 
        //     this.produits.splice(index, 1); 
        //   } 
          
          //ou Bien 
          // this.produits?.forEach((cur, index) => { 
          //   if(produit?.idProduit === cur.idProduit) {
          //      this.produits?.splice(index, 1); 
          //     } 
          //   }
          //  );
        }

        //Update
        produit! : Produit;
        // consulterProduit(id:number): Produit{ 
        //   this.produit = this.produits.find(p => p.idProduit == id)!;
        //    return this.produit;
        // }

        consulterProduit(id: number): Observable<Produit> {
           const url = `${this.apiURL}/${id}`; 
           return this.http.get<Produit>(url); 
          }

        //Tri produit après modificacion
        trierProduits(){
          //let n1 : number| undefined;
          this.produits = this.produits.sort((n1,n2) => {
          if (n1.idProduit > n2.idProduit) {
          return 1;
          }
          if (n1.idProduit < n2.idProduit) {
          return -1;
          }
          return 0;
          });
          }

        // updateProduit(p:Produit)
        // {
        // // console.log(p);
        // this.supprimerProduit(p);
        // this.ajouterProduit(p);
        // this.trierProduits();
        // }

        updateProduit(prod :Produit) : Observable<Produit> { 
          return this.http.put<Produit>(this.apiURL, prod, httpOptions); 
        }

        // 
        // listeCategories():Observable<Categorie[]>{
        //    return this.http.get<Categorie[]>(this.apiURL+"/cat"); 
        //   }

        listeCategories():Observable<CategorieWrapper>{ 
          return this.http.get<CategorieWrapper>(this.apiURLCat); 
        }

        consulterCategorie(id:number): Categorie{
           return this.categories.find(cat => cat.idCat == id)!; 
          }
}
