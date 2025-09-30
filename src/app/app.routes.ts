import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Settings } from './components/settings/settings';
import { Profile } from './components/profile/profile';

export const routes: Routes = [
    {path:"", component:Home},
    {path:"profile", component:Profile},
    {path:"settings", component:Settings},
];

@NgModule({
 imports:[RouterModule.forRoot(routes)],
 exports: [RouterModule]
})

export class AppRoutes{

}
