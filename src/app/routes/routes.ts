import {Routes } from "@angular/router";
import { Settings } from "../components/settings/settings";
import { Profile } from "../components/profile/profile";
import { Home } from "../home/home";

export const routes : Routes = [
{path:"", component: Home},
{path:"settings", component:Settings},
{path:"profile", component: Profile},
] 