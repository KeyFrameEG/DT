import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from 'primeng/carousel';
import { AnimateModule } from 'primeng/animate';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TestmonialComponent } from './home/testmonial/testmonial.component';
import { GalleryComponent } from './home/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TestmonialComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    CarouselModule,
    AnimateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
