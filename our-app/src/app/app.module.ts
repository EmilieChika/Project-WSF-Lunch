import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';



import { AppComponent } from './app.component';
import { ConnectionComponent } from './connection/connection.component';
import { RouterModule, Routes} from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { FoodComponent } from './food/food.component';
import { FastFoodComponent } from './fast-food/fast-food.component';
import { BarComponent } from './bar/bar.component';


const routes: Routes= [
  {path: 'connection', component: ConnectionComponent },
  {path: '', component: HomeComponent},
  {path: 'fast-food', component: FastFoodComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    HomeComponent,
    FoodComponent,
    FastFoodComponent,
    BarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)

   
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
