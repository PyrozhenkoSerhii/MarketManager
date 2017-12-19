import {Component, OnInit} from '@angular/core';
import {CreatorService} from "../../services/creator.service"
import {FlashMessagesService} from "angular2-flash-messages";
import {Router} from "@angular/router";
import {Strategy} from "../../class/Strategy";

@Component({
    selector: 'app-strategy-manager',
    templateUrl: './strategy-manager.component.html',
    styleUrls: ['./strategy-manager.component.css']
})
export class StrategyManagerComponent implements OnInit {
    strategy: Strategy;
    progressArray: Number[] = this.diagramBuilderData();
    intervalArray: String[] = this.diagramBuilderInterval();
    label: String = this.diagramBuilderLabel();
    parameters = [];

    constructor(private creator: CreatorService,
                private flashMessage: FlashMessagesService,
                private router: Router) {
        this.getParameters();
    }

    ngOnInit() {}

    changeStrategyStatusAndSetProgress(strategy, status) {
        this.creator.changeStrategyStatusAndSetProgress(strategy, status).subscribe(data => {
            if (data.success) {
                this.strategy.isActive = !(this.strategy.isActive);
                this.flashMessage.show('Status was changed', {cssClass: 'alert-success', timeout: 3000});
            } else {
                this.flashMessage.show('Something went wrong while changing the status', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
            }
        })
    }

    getStatusStrategy(status) {
        if (status) {
            return "The strategy is active now"
        }
        return "The strategy is disabled now"
    }

    getDate(date) {
        return this.creator.getDate(date);
    }

    getTrackingPoint() {
        if (this.strategy.trackingPoint === "Amount of income") {
            return "($).";
        }
        return " customers.";
    }

    getCurrentData() {
        return this.strategy.progress['sales'];
    }

    diagramBuilderData() {
        let dataArray = [];
        this.strategy = this.creator.getStrategyInfo();
        for (let name in this.strategy.progress) {
            dataArray.push(this.strategy.progress[name]);
        }
        return dataArray;
    }

    diagramBuilderInterval() {
        let intervalArray = [];
        this.strategy = this.creator.getStrategyInfo();
        for (let name in this.strategy.progress) {
            intervalArray.push(name);
        }
        return intervalArray;
    }

    diagramBuilderLabel() {
        this.strategy = this.creator.getStrategyInfo();
        return this.strategy.trackingPoint;

    }

    getParameters() {
        for (let i in this.strategy.parameters) {
            this.parameters.push(i.concat(" : ", this.strategy.parameters[i]));
        }
    }

    public lineChartData: Array<any> = [
        {data: this.progressArray, label: this.label}
    ];
    public lineChartLabels: Array<any> = this.intervalArray;
    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';

}
