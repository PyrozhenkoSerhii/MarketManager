import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {Project} from "../class/Project"
import {Strategy} from "../class/Strategy"
import * as moment from 'moment';

@Injectable()
export class CreatorService {
    project: Project;
    strategy: Strategy;

    constructor(private http: Http) {
    }


    //Transfer data
    sendProjectData(project) {
        this.project = project;
    }

    getProjectDataAndSetStrategy(strategy) {
        this.project.strategy = strategy;
        return this.project;
    }

    getProject() {
        return this.project;
    }


    //Creators
    saveStrategy(strategy) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('strategies/saveStrategy', strategy, {headers: headers})
            .map(res => res.json());
    }

    saveProject(project) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('projects/saveProject', project, {headers: headers})
        //.subscribe(projects => {this.project = project});
            .map(res => res.json());
    }


    //Getters
    getProjectsByUser() {
        let user = {"user": localStorage.getItem('user_id')};
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('projects/getProjectsByUserId', user, {headers: headers})
            .map(res => res.json());
    }

    getStrategyByProject(project) {
        let headers = new Headers();
        let projectName = {"project": project};
        headers.append('Content-Type', 'application/json');
        return this.http.post('strategies/getStrategiesByProjectId', projectName, {headers: headers})
            .map(res => res.json());
    }

    getStrategyByUser() {
        let user = {"user": localStorage.getItem('user_id')};
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('strategies/getStrategiesByUserId', user, {headers: headers})
            .map(res => res.json());
    }


    //Delete
    deleteProject(project) {
        let headers = new Headers();
        let project_id = {"project": project};
        headers.append('Content-Type', 'application/json');
        return this.http.post('projects/deleteProject', project_id, {headers: headers})
            .map(res => res.json());
    }

    deleteStrategy(strategy) {
        let headers = new Headers();
        let strategy_id = {"strategy": strategy};
        headers.append('Content-Type', 'application/json');
        return this.http.post('strategies/deleteStrategy', strategy_id, {headers: headers})
            .map(res => res.json());
    }


    changeProjectStatus(project, status) {
        let headers = new Headers();
        let projectChanger = {"project": project, "changeTo": !status};
        headers.append('Content-Type', 'application/json');
        return this.http.post('projects/changeStatus', projectChanger, {headers: headers})
            .map(res => res.json());
    }


    changeStrategyStatus(strategy, status) {
        let headers = new Headers();
        let strategyChanger = {"strategy": strategy, "changeTo": !status};
        headers.append('Content-Type', 'application/json');
        return this.http.post('strategies/changeStatus', strategyChanger, {headers: headers})
            .map(res => res.json());
    }


    changeStrategyStatusAndSetProgress(strategy, status){
        let headers = new Headers();
        let strategyChanger = {"strategy": strategy, "changeTo": !status};
        headers.append('Content-Type', 'application/json');
        return this.http.post('strategies/changeStatusAndSetStrategy', strategyChanger, {headers: headers})
            .map(res => res.json());
    }

    //Manager
    sendProjectInfo(project) {
        this.project = project;
    }

    sendStrategyInfo(strategy) {
        this.strategy = strategy;
    }

    getProjectInfo() {
        return this.project;
    }

    getStrategyInfo() {
        return this.strategy;
    }

    getDate(date) {
        return moment(date).format("DD/MM/YYYY HH:mm:ss");
    }

    getDateForProgress(date){
        return moment(date).format("DD/MM HH:mm");
    }

    getStatus(status) {
        if (status) {
            return "active";
        }
        return "disabled";
    }

    strategyProgressUpdate(strategy,progress) {
        let headers = new Headers();
        let strategyChanger = {"strategy": strategy, "progress": progress};
        headers.append('Content-Type', 'application/json');
        return this.http.post('strategies/changeProgress', strategyChanger, {headers: headers})
            .map(res => res.json());
    }


}
