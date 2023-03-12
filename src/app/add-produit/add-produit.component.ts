import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit{

  message ?: string;
  newProduit = new Produit();

  categories! : Categorie[]; 
  newIdCat! : number; 
  newCategorie! : Categorie;
  router: any;
  
  constructor(private produitService: ProduitService) { }

  ngOnInit(): void { 
    this.produitService.listeCategories(). 
    subscribe(cats => {console.log(cats); 
      this.categories = cats._embedded.categories; 
    } ); 
  }

  // ngOnInit(): void { this.produitService.listeCategories().
  //    subscribe(cats => {
  //     this.categories = cats; 
  //     console.log(cats); }); 
  //   }
  // ngOnInit(): void {this.categories = this.produitService.listeCategories();}

  // addProduit(){
  //   this.newCategorie = this.produitService.consulterCategorie(this.newIdCat); 
  //   this.newProduit.categorie = this.newCategorie; 
  //   this.produitService.ajouterProduit(this.newProduit); 
  //   this.router.navigate(['produits']);
    
  //   console.log(this.newProduit); 
  //   console.table(this.newProduit);
    
  //   this.produitService.ajouterProduit(this.newProduit);

  //   this.message = "Produit "+ this.newProduit.nomProduit +" ajouté avec succes";
  // }

  // addProduit(){ 
  //   this.produitService.ajouterProduit(this.newProduit) 
  //     .subscribe(prod => { 
  //       console.log(prod); 
  //       this.router.navigate(['produits']); 
  //     }
  //   ); 
  //   }

  addProduit(){
     this.newProduit.categorie = this.categories.find(cat => cat.idCat == this.newIdCat)!; 
     this.produitService.ajouterProduit(this.newProduit) .subscribe(prod => { 
      console.log(prod); 
      this.router.navigate(['produits']); 
    }); 
  }

  

}
