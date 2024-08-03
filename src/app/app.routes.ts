import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const kanbanModule = () => import('./Modules/kanban/kanban.module').then(x => x.KanbanModule);
const planModule = () => import('./Modules/plan/plan.module').then(x => x.PlanModule);
const scheduleModule = () => import('./Modules/schedules/schedules.module').then(x => x.SchedulesModule);
const settingsModule = () => import('./Modules/settings/settings.module').then(x => x.SettingsModule);
const managerModule = () => import('./Modules/kanban-home/kanban-home.module').then(x => x.KanbanHomeModule)

export const routes: Routes = [
    { path: '', loadChildren: kanbanModule },
    { path: 'plan', loadChildren:planModule },
    { path: 'schedules', loadChildren:scheduleModule },
    { path: 'settings', loadChildren:settingsModule },
    { path: 'manager', loadChildren:managerModule }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        initialNavigation: 'enabledBlocking',
        scrollPositionRestoration: 'enabled'
    })],
    exports: [RouterModule]
})

export class AppRoutingModule { }