import {Component, OnInit} from '@angular/core';
import {CreatorService} from "../../services/creator.service"
import {FlashMessagesService} from "angular2-flash-messages";
import {Router} from "@angular/router";
import {Project} from "../../class/Project";
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute} from "@angular/router";


@Component({
    selector: 'app-strategy',
    templateUrl: './strategy.component.html',
    styleUrls: ['./strategy.component.css']
})
export class StrategyComponent implements OnInit {
    //strategy creation forms
    project: String;
    user: String = localStorage.getItem('user_id');

    name: String;
    description: String;
    duration: String;
    timeCompleted:String = '';

    trackingPoint: String;
    initialData: String;

    type: String;
    iotTech: String;


    progress: Object = {};
    isActive: Boolean = false;


    //page parameters
    isCreator: Boolean = false;

    //strategy for new project
    createdProject: Project;

    //strategy for existed project
    projects: Project[];
    projectSelector: String;

    //parameters
    parameterName = '';
    parameterValue = '';

    parameters: Object = {};

    parametersArray = [];






    constructor(private creator: CreatorService,
                private flashMessage: FlashMessagesService,
                private router: Router,
                private authService: AuthService,
                private route:ActivatedRoute) {
    }

    ngOnInit() {
        this.authService.getProfile().subscribe(profile => {
                this.user = profile.user;
            },
            err => {
                console.log(err);
                return false;
            });

        this.route.queryParams.subscribe(params=>{
            this.isCreator = params['creator'] || false;
        })


    }

    onStrategyCreation() {
        if (this.isCreator) {
            this.strategyToNewProject();
        } else {
            this.strategyToExistedProject();
        }
    }


    strategyToNewProject() {
        let project = this.creator.getProjectDataAndSetStrategy(this.description);
        this.progress[this.creator.getDateForProgress(Date.now())+""] = this.initialData;

        let strategy = {
            project: project.name,
            user: this.user,
            name: this.name,
            description: this.description,
            duration: this.duration,
            timeCompleted:this.timeCompleted,
            trackingPoint: this.trackingPoint,
            initialData: this.initialData,
            type: this.type,
            iotTech: {'iot': this.iotTech},
            parameters: this.parameters,
            progress: this.progress,
            isActive: this.isActive,
            createdDate: Date.now(),
        };

        this.creator.saveStrategy(strategy).subscribe(data => {
            if (data.success) {
                this.flashMessage.show('Strategy created', {cssClass: 'alert-success', timeout: 3000});
            } else {
                this.flashMessage.show('Something went wrong while creating a strategy', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
            }
        });

        this.creator.saveProject(project).subscribe(data => {
            if (data.success) {
                this.flashMessage.show('Project created', {cssClass: 'alert-success', timeout: 3000});
                this.router.navigate(['profile']);
            } else {
                this.flashMessage.show('Something went wrong while creating a project', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
            }
        });
    }

    strategyToExistedProject() {

        this.progress[this.creator.getDateForProgress(Date.now())+""] = this.initialData;

        let strategy = {
            project: this.projectSelector,
            user: this.user,
            name: this.name,
            description: this.description,
            duration: this.duration,
            timeCompleted:this.timeCompleted,
            trackingPoint: this.trackingPoint,
            initialData: this.initialData,
            type: this.type,
            iotTech: {'iot': this.iotTech},
            parameters: this.parameters,
            progress: this.progress,
            isActive: this.isActive,
            createdDate: Date.now(),
        };

        //console.log(strategy);
        this.creator.saveStrategy(strategy).subscribe(data => {
            if (data.success) {
                this.flashMessage.show('Strategy created', {cssClass: 'alert-success', timeout: 3000});
            } else {
                this.flashMessage.show('Something went wrong while creating a strategy', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
            }
        });
    }

    changeProject() {
        this.router.navigate(['/create'], {queryParams: {changer: true}});
    }


    changeBlock(toHideBlock, toShowBlock) {
        document.getElementById(toHideBlock).style.display = 'none';
        document.getElementById(toShowBlock).style.display = 'block';
    }

    changeCurrentProject(value) {
        this.projectSelector = value;
    }

    changeTrackingPoint(value) {
        this.trackingPoint = value;
    }

    changeStrategyType(value) {
        this.type = value;
    }


    changeIoTDevices(value) {
        this.iotTech = value;
    }

    addParameter() {
        let name = this.parameterName;
        this.parameters[name] = this.parameterValue;

        let tempRes = "".concat(this.parameterName," : ",this.parameterValue);
        this.parametersArray.push(tempRes);

        this.parameterName = '';
        this.parameterValue = '';

        // for(let i in this.parameters){
        //    console.log(i);
        //    console.log(this.parameters[i]);
        // }
    }
}
