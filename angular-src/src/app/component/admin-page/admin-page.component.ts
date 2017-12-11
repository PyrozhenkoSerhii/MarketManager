import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {CreatorService} from "../../services/creator.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {Project} from "../../class/Project";
import {Strategy} from "../../class/Strategy"

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
    user:Object;
    projects:Project[];
    strategies:Strategy[];

    constructor(
        private authService:AuthService,
        private router:Router,
        private creator:CreatorService,
        private flashMessage:FlashMessagesService
    ) {

    }

  ngOnInit() {
      this.authService.getProfile().subscribe(profile=>{this.user = profile.user;},
          err => {console.log(err); return false;});
  }

}
