import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageContentComponent } from './page-content/page-content.component';
import { AboutPageComponent } from './about-page/about-page.component';

const routes: Routes = [{
  path: '', component: PageContentComponent
}, {
  path: 'about-page', component: AboutPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
