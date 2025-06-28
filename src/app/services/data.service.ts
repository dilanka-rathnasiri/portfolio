import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor(private http: HttpClient) {}

    public loadData<T>(fileName: string): Observable<T> {
        return this.http.get<T>(`assets/data/${fileName}.json`);
    }
}
