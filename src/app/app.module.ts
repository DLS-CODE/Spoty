// MODULOS
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// COMPONENTES
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { SearchComponent } from './component/search/search.component';
import { ArtistaComponent } from './component/artista/artista.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';

// RUTAS
import { ROUTES } from './app.routes';

// PIPES
import { NoImagePipe } from './pipes/no-image.pipe';
import { CardsComponent } from './component/cards/cards.component';
import { LoadingComponent } from './component/shared/loading/loading.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoImagePipe,
    CardsComponent,
    LoadingComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash : true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
