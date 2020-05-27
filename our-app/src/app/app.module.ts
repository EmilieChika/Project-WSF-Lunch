import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';



import { AppComponent } from './app.component';
import { ConnectionComponent } from './connection/connection.component';
import { RouterModule, Routes} from '@angular/router';
import { from } from 'rxjs';


const routes: Routes= [
  {path: 'connection', component: ConnectionComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent
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
