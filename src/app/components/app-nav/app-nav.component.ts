import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: 'app-nav',
    styleUrls: ['app-nav.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template:`
        <div class="app-nav">
            <div class="wrapper">
                <a routerLink="schedule" routerLinkActive="Active">Schedule</a>
                <a routerLink="meals" routerLinkActive="Active">Meals</a>
                <a routerLink="workouts" routerLinkActive="Active">Workouts</a>
            </div>
        </div>
    `
})
export class AppNavComponent {
    constructor() {}
}