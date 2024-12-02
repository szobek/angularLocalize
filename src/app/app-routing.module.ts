import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  {path:'login',component:AppComponent},
  {path:'card',component:CardComponent,pathMatch:'full'},
  {path:'',redirectTo:'card',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
