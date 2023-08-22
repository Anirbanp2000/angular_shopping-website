import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { OrdersComponent } from './orders/orders.component';
import { SliderComponent } from './slider/slider.component';


const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' }, // add default path if needed
  { path: 'menu', component: MenuComponent},
  { path: 'orders', component: OrdersComponent},
  {path:'menu',component:SliderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
