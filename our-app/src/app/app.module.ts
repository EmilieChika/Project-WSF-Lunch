import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';



import { AppComponent } from './app.component';
import { ConnectionComponent } from './connection/connection.component';
import { RouterModule, Routes} from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';


const routes: Routes= [
  {path: 'connection', component: ConnectionComponent },
  {path: '', component: HomeComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    HomeComponent
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
