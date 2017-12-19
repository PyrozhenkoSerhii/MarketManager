import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {CreatorService} from "../../services/creator.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {Project} from "../../class/Project";
import {Strategy} from "../../class/Strategy"
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],


})
export class ProfileComponent implements OnInit {
    user: Object;
    projects: Project[];
    strategies: Strategy[];

    constructor(private authService: AuthService,
                private router: Router,
                private creator: CreatorService,
                private flashMessage: FlashMessagesService,
                private activatedRoute: ActivatedRoute) {
        this.getProjects();
        this.getStrategies();
        this.createDummyProgress();
    }

    ngOnInit() {
        this.authService.getProfile().subscribe(profile => {
                this.user = profile.user;
            },
            err => {
                console.log(err);
                return false;
            });
    }

    getProjects() {
        this.creator.getProjectsByUser().subscribe(data => {
            if (data.success) {
                this.projects = data.projects;
            } else {
                this.flashMessage.show('Something went wrong while getting the projects', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
            }
        });
    }

    getStrategies() {
        this.creator.getStrategyByUser().subscribe(data => {
            if (data.success) {
                this.strategies = data.strategies;
            } else {
                this.flashMessage.show('Something went wrong while getting the strategies', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
            }

        })
    }

    projectInfo(project) {
        this.creator.sendProjectInfo(project);
        this.router.navigate(['/project-manager']);
    }

    strategyInfo(strategy) {
        this.creator.sendStrategyInfo(strategy);
        this.router.navigate(['/strategy-manager']);
    }

    deleteProject(project) {

        this.creator.deleteProject(project).subscribe(data => {
            if (data.success) {
                this.flashMessage.show('Project was deleted', {cssClass: 'alert-danger', timeout: 3000});
                location.reload();
            } else {
                this.flashMessage.show('Something went wrong while deleting the project', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
            }
        });
    }

    deleteStrategy(strategy) {
        this.creator.deleteStrategy(strategy).subscribe(data => {
            //why it is not working?
            if (data.success) {
                this.flashMessage.show('Strategy was deleted', {cssClass: 'alert-danger', timeout: 3000});
                location.reload();
            } else {
                this.flashMessage.show('Something went wrong while deleting the strategy', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
            }
        });
    }

    getStatus(status) {
        return this.creator.getStatus(status);
    }

    getDate(date) {
        return this.creator.getDate(date);
    }

    getDateForProgress(date) {
        return this.creator.getDateForProgress(date);
    }

    createDummyProgress() {
        let dummyProgress = setTimeout(() => this.dummyProgressFunc(), 1000);
    }

    dummyProgressFunc() {
        for (let strategy of this.strategies) {
            let testValue = +strategy.initialData + Math.floor(Math.random() * (100 - 10)) + "";
            let testName = this.getDateForProgress(Date.now()) + "";
            strategy.progress[testName.toString()] = testValue;

            this.creator.strategyProgressUpdate(strategy, strategy.progress).subscribe(data => {
                if (data.success) {
                    console.log(data);
                } else {
                    this.flashMessage.show('Something went wrong while changing the progress', {
                        cssClass: 'alert-danger',
                        timeout: 3000
                    });
                }
            });

        }
    }

}
