import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './component/first-component/first-component.component';
import { ParentDataComponent } from './component/parent-data/parent-data.component';
import { DirectivesComponent } from './component/directives/directives.component';
import { IfRenderComponent } from './component/if-render/if-render.component';
import { EventosComponent } from './component/eventos/eventos.component';
import { EmitterComponent } from './component/emitter/emitter.component';
import { ChangeComponent } from './component/change/change.component';
import { ListRenderComponent } from './component/list-render/list-render.component';
import { PipesComponent } from './component/pipes/pipes.component';
import { TowWayBindComponent } from './component/tow-way-bind/tow-way-bind.component';
import {HttpClientModule} from '@angular/common/http';
import { ItemDetailComponent } from './component/item-detail/item-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ParentDataComponent,
    DirectivesComponent,
    IfRenderComponent,
    EventosComponent,
    EmitterComponent,
    ChangeComponent,
    ListRenderComponent,
    PipesComponent,
    TowWayBindComponent,
    ItemDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
