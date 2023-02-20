import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit{

  //produits : string[] | undefined; //Tableau de chaine de caractère

  produits ?: Produit[]; //tableau de produit

  constructor (private produitService: ProduitService){
    //this.produits = ["PC Asus", "Imprimante Epson", "Tablette Samsung"];
    
  //   this.produits = [
  //     {idProduit : 1, nomProduit : "PC Asus", prixProduit : 3000.600, dateCreation : new Date("01/14/2011")},
  //     {idProduit : 2, nomProduit : "Imprimante Epson", prixProduit : 450, dateCreation : new Date("12/17/2010")},
  //     {idProduit : 3, nomProduit :"Tablette Samsung", prixProduit : 900.123, dateCreation : new Date("02/20/2020")}
  //   ]

  this.produits = produitService.listeProduits();
  
   }

  ngOnInit():void {}

  supprimerProduit(produit : Produit) {
    //supprimer le produit prod du tableau produits 
    // const index = this.produits.indexOf(prod, 0); 
    // if (index > -1) { 
    //   this.produits.splice(index, 1); 
    // } 
    
    //ou Bien 
    this.produits?.forEach((cur, index) => { 
      if(produit?.idProduit === cur.idProduit) {
         this.produits?.splice(index, 1); 
        } 
      }
      );
  }

}
