import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { TodoModalComponent } from './todo-modal/todo-modal.component';
import { ProductFormComponent } from './product-form/product-form.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, ProductDetailsComponent, ProductsComponent, TodoModalComponent, ProductFormComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
