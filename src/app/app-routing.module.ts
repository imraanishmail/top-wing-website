import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageContentComponent } from './page-content/page-content.component';
import { MenuPageComponent } from './menu-page/menu-page.component';

const routes: Routes = [{
  path: '', component: PageContentComponent
}, {
  path: 'menu-page', component: MenuPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
