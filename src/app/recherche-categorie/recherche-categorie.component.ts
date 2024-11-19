import { Component } from '@angular/core';
import { product } from '../model/product.model';
import { Categorie } from '../model/Categorie.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-recherche-categorie',
  templateUrl: './recherche-categorie.component.html',
  styleUrl: './recherche-categorie.component.css'
})
export class RechercheCategorieComponent {
  produits! : product[];
  IdCategorie! : number;
  categories! : Categorie[];
  constructor(private produitService: ProductService) {
  }
  ngOnInit(): void {
    this.chargerProduits();
    this.produitService.listeCategories().
    subscribe(cats => {this.categories = cats._embedded.categories;
    console.log(cats);
    });
  }        
  onChange() {
     this.produitService.rechercherParCategorie(this.IdCategorie).subscribe((prods: product[]) =>{this.produits=prods});
   }
   
  chargerProduits(){
    this.produitService.listeProduit().subscribe(prods => {
    console.log(prods);
    this.produits = prods;
});
}
  

}
