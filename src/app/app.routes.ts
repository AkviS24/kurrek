import { Routes } from '@angular/router';
import { Mainpage } from './pages/mainpage/mainpage';

export const routes: Routes = [
    {path: '', component:Mainpage},
    {path: '**', redirectTo: '', pathMatch: 'full'},
];
