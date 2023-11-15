import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component'
import { AboutPageComponent } from './pages/about-page/about-page.component'
import { ContactPageComponent } from './pages/contact-page/contact-page.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => DefaultLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => HomePageComponent,
      },
    ],
  },
  {
    path: 'about',
    loadComponent: () => DefaultLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => AboutPageComponent,
      },
    ],
  },
  {
    path: 'contact',
    loadComponent: () => DefaultLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => ContactPageComponent,
      },
    ],
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableViewTransitions: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
