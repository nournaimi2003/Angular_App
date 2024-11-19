
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from '../model/product.model';
import { ProductService } from '../product.service';
import { Categorie } from '../model/Categorie.model';

@Component({
  selector: 'app-update-product',
  templateUrl: 'update-product.component.html',
  styleUrl: 'update-product.component.css',

})
export class UpdateProductComponent implements OnInit {
  categories! : Categorie[];
  updatedCatId! : number;
  currentProduit = new product();
  
  
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private productService: ProductService) { }

  ngOnInit(): void {
      this.productService.listeCategories().
      subscribe(cats => {this.categories = cats._embedded.categories;
      console.log(cats);
      });

      this.productService.consulterProduit(this.activatedRoute.snapshot.params['id']).
      subscribe( prod =>{ this.currentProduit = prod; 
      this.updatedCatId =   this.currentProduit.categorie.idCategorie;
      
    
    } ) 
    
    }

  updateProduit() {
    this.currentProduit.categorie = this.categories.find(cat => cat.idCategorie == this.updatedCatId)!;
         this.productService.modifierProduit(this.currentProduit).subscribe(prod => {
      this.router.navigate(['list']); }
      );
  }

}