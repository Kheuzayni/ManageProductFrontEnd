import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit{

  constructor(){}

  newProduit = new Produit();

  addProduit(){ console.log(this.newProduit); }

  ngOnInit(): void {
    
  }

}
