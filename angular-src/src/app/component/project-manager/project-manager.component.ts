import {Component, OnInit} from '@angular/core';
import {CreatorService} from "../../services/creator.service"
import {FlashMessagesService} from "angular2-flash-messages";
import {Router} from "@angular/router";
import {Project} from "../../class/Project";
import {Strategy} from "../../class/Strategy";
import * as moment from 'moment';

@Component({
    selector: 'app-project-manager',
    templateUrl: './project-manager.component.html',
    styleUrls: ['./project-manager.component.css']
})
export class ProjectManagerComponent implements OnInit {
    project: Project;
    strategies: Strategy[];

    constructor(private creator: CreatorService,
                private flashMessage: FlashMessagesService,
                private router: Router) {
        this.project = this.creator.getProjectInfo();
        this.getStrategies();
        console.log('constr');
    }

    ngOnInit() {
        this.getStrategies();
    }

    getStatusProject(status) {
        if (status) {
            return "The project is active now!"
        }
        return "The project is disabled now!"
    }

    getStatusStrategy(status) {
        return this.creator.getStatus(status);
    }

    getDate(date) {
        return this.creator.getDate(date);
    }

    getStrategies() {
        console.log('search running...');
        this.creator.getStrategyByProject(this.project.name).subscribe(data => {
            if (data.success) {
                this.strategies = data.strategies;
                console.log('search ended');

            } else {
                this.flashMessage.show('Something went wrong while getting the strategies', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
            }

        })
    }

    changeProjectStatus(project, status) {
        this.creator.changeProjectStatus(project, status).subscribe(data => {
            if (data.success) {
                console.log("123");
                this.project.isActive = !(this.project.isActive);
            } else {
                this.flashMessage.show('Something went wrong while changing the status', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
            }
        })
    }

    changeStrategyStatus(strategy, status) {
        this.creator.changeStrategyStatus(strategy, status).subscribe(data => {
            if (data.success) {
                console.log(data);
            } else {
                this.flashMessage.show('Something went wrong while changing the status', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
            }
        })
    }

    strategyInfo(strategy) {
        this.creator.sendStrategyInfo(strategy);
        this.router.navigate(['/strategy-manager']);
    }

    getCompletedPart(){
        return "25%";

    }
}
