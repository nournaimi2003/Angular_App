import { Injectable } from '@angular/core';
import { product } from '../app/model/product.model';
import { HttpClient} from '@angular/common/http';
import { Categorie } from './model/Categorie.model';
import { CategorieWrapper } from './model/categorieWrapper.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {


  apiURL: string = 'http://localhost:8080/produits/api';
  apiURLCat: string = 'http://localhost:8080/produits/cat';

  constructor(private http : HttpClient) { }
    

  listeProduit(){
    return this.http.get<product[]>(this.apiURL);
    } 


  ajouterProduit( prod: product) {
      return this.http.post<product>(this.apiURL,prod);
      }

  supprimerProduit(id:number){
        return this.http.delete(this.apiURL+"/"+id);
      }

        
  modifierProduit(prod:product){
      return this.http.put<product>(this.apiURL,prod);
      }

      consulterProduit(id: number) {
        const url = `${this.apiURL}/${id}`;
        return this.http.get<product>(url);
        }
        
        // listeCategories(){
        //   return this.http.get<Categorie[]>(this.apiURL+"/cat");
        //   }
      listeCategories(){
          return this.http.get<CategorieWrapper>(this.apiURLCat);
          }

      rechercherParCategorie(idCategorie: number) {
          const url = `${this.apiURL}/prodscat/${idCategorie}`;
          return this.http.get<product[]>(url);
            }
            
          
          
    
    }