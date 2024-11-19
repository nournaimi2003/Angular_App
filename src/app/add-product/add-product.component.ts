import { Component, OnInit } from '@angular/core';
import { product } from '../model/product.model';
import { Categorie } from '../model/Categorie.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit  {

  newProduct = new product();
  categories! : Categorie[];
  newIdCat! : number ;

  

  constructor(private productService: ProductService, private router : Router) {}
  ngOnInit(): void {
    this.productService.listeCategories().
    subscribe(cats => {this.categories = cats._embedded.categories;
    console.log(cats);
    });
    // this.addProduit;
    }
    

    addProduit(){
      this.newProduct.categorie = this.categories.find(cat => cat.idCategorie == this.newIdCat)!;
      this.productService.ajouterProduit(this.newProduct)
                        .subscribe(prod => {
                        console.log(prod);
                        this.router.navigate(['list']);
                        }); 
      }
  }


