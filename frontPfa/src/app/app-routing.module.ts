import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminTempleteComponent } from './components/admin-templete/admin-templete.component';
import { AjouterProduitComComponent } from './components/com-produit/ajouter-produit-com/ajouter-produit-com.component';
import { ComProduitComponent } from './components/com-produit/com-produit.component';
import { CrdCategorieComponent } from './components/ComCategorie/crd-categorie/crd-categorie.component';
import { UpdateCategorieComponent } from './components/ComCategorie/update-categorie/update-categorie.component';
import { UpdateProduitComponent } from './components/com-produit/update-produit/update-produit.component';
const routes: Routes = [
  {path:'',component:AdminTempleteComponent,children :[
 {path:'categorie',component:CrdCategorieComponent},

 {path:'categorie/update/:id',component:UpdateCategorieComponent},
 {path:'produit',component:ComProduitComponent},
 {path:'produit/add',component:AjouterProduitComComponent},
 {path:'produit/update/:id',component:UpdateProduitComponent},
  {path:'',redirectTo:'/categorie' ,pathMatch:'full'}
  ]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
