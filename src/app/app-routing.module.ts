import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagesListComponent } from './components/images-list/images-list.component';
import { ImagesFormComponent } from './components/images-form/images-form.component';

const routes: Routes = [{
  path: 'ListImages', component: ImagesListComponent
}, {
  path: 'SaveImage', component: ImagesFormComponent
},
{ path: '', redirectTo: 'ListImages', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
