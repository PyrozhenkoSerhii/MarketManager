import {Component, OnInit} from '@angular/core';
import {CreatorService} from "../../services/creator.service";
import {Router} from "@angular/router";


@Component({
    selector: 'app-mm-creation',
    templateUrl: './mm-creation.component.html',
    styleUrls: ['./mm-creation.component.css']
})
export class MmCreationComponent implements OnInit {
    user: String;
    strategy: String;

    name: String;
    goal: String;
    description: String;
    duration: String;
    timeCompleted: String = '0';

    isConfirmed: Boolean;
    isActive: Boolean;
    createdDate: Date;


    constructor(private creator: CreatorService,
                private router: Router) {
    }

    ngOnInit() {
    }

    onMMCreation() {
        const user_id = localStorage.getItem('user_id');

        const project = {
            user: user_id,
            strategy: null,
            name: this.name,
            goal: this.goal,
            description: this.description,
            duration: this.duration,
            timeCompleted: this.timeCompleted,
            isConfirmed: false,
            isActive: false,
            createdDate: new Date()
        };

        this.creator.sendProjectData(project);
        this.router.navigate(['/strategy'], {queryParams: {creator: true}});

    }

}
