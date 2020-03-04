import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { NocardComponent } from './nocard/nocard.component';


const routes: Routes = [
  {
    path: 'index',
    component: CardComponent,
    data: {
      title: '公司主页'
    }
  },
  {
    path: 'noIn',
    component: NocardComponent,
    data: {
      title: '公司主页1'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
