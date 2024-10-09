import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SimulationsComponents } from './simulations/simulations.component';
import { ScenarioTertiaireComponent } from './scenario-tertiaire/scenario-tertiaire.component';
import { FaconnageLotComponent } from './faconnage-lot/faconnage-lot.component';


const routes: Routes = [
{path:'login',component:LoginComponent},
{path:'simulation', component:SimulationsComponents},
{path:'CreerSTertiare', component:ScenarioTertiaireComponent},
{path:'FaconnerLot',component:FaconnageLotComponent},
{path:'',redirectTo:'/login',pathMatch:'full'},
{path:'**',redirectTo:'/login'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
