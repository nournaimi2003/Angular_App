import { Component, OnInit } from '@angular/core';
import {  product } from '../model/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

    products? : product[]; //un tableau de produit

  constructor(private produitService: ProductService) {
   //this.produits=[];
     }
  ngOnInit(): void {
    this.chargerProduits();
  }

  chargerProduits(){
    this.produitService.listeProduit().subscribe(prods => {
      console.log(prods);
      this.products = prods;
      });
  }
  supprimerProduit(p: product)
 {
    let conf = confirm("vous vouillez supprimer ce produit de L'ID "+(p.idProduit) +"?");
     if (conf)
     this.produitService.supprimerProduit(p.idProduit).subscribe(() => {
        this.chargerProduits();     
});
}

   
  }
