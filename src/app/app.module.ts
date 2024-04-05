import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {RouterModule, Routes} from "@angular/router";
import { LoginComponent } from './access/login/login.component';
import { SignupComponent } from './access/login/signup/signup.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { DatagridComponent } from './datagrid/datagrid.component';
import { DdaeWfComponent } from './workflows/ddae-wf/ddae-wf.component';
import { DeteWfComponent } from './workflows/dete-wf/dete-wf.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'datagrid', component: DatagridComponent},
  {path: 'ddae_wf', component: DdaeWfComponent},
  {path: 'dete_wf', component: DeteWfComponent},
  // {path: 'recipes', component: RecipesComponent, canActivate: [canActivate], children: [
  //     {path: ':id', component: RecipesComponent}
  //   ]},
  // {path: 'recipes/:id/:name', component: RecipesComponent, canActivate: [canActivate]},
  // {path: 'shoppinglist', component: ShoppingListComponent},
  // {path: 'tdform', component: TdformComponent},
  // {path: 'rform', component: RformComponent},
  // {path: 'http', component: HttpComponent},
  // {path: 'userdata', component: UserdataComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    DatagridComponent,
    DdaeWfComponent,
    DeteWfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
