import {Injectable} from '@angular/core';
import {CreatorService} from "./creator.service";

@Injectable()
export class AdminFuncService {

    constructor(private creator:CreatorService) {
    }


}
