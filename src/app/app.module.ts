import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './component/first-component/first-component.component';
import { ParentDataComponent } from './component/parent-data/parent-data.component';
import { DirectivesComponent } from './component/directives/directives.component';
import { IfRenderComponent } from './component/if-render/if-render.component';
import { EventosComponent } from './component/eventos/eventos.component';
import { EmitterComponent } from './component/emitter/emitter.component';
import { ChangeComponent } from './component/change/change.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ParentDataComponent,
    DirectivesComponent,
    IfRenderComponent,
    EventosComponent,
    EmitterComponent,
    ChangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
