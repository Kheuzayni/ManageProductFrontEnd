import { Categorie } from "./categorie.module";

export class Produit {
    idProduit! : number;
    nomProduit! : string;
    prixProduit! : number;
    dateCreation! : Date ;
    categorie! : Categorie; 
}