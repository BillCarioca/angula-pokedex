import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { TitleComponent } from './components/card/title/title.component';
import { TypeComponent } from './components/card/type/type.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    CardComponent,
    HomeComponent,
    TitleComponent,
    TypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
