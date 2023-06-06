import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { DashboardResponse } from '../models/responses/dahboard.response.models';


@Injectable({
    providedIn: 'root'
})
export class DashboardService {


    constructor(
        private httpClient: HttpClient
    ) {
    }


    //GET /api/dashboard
    get(): Observable<DashboardResponse[]> {
        return this.httpClient.get<DashboardResponse[]>
            (environment.apiContatos + "/dashboard");
    }
}


