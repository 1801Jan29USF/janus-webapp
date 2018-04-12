import { Observable } from 'rxjs/Observable';

export interface HydraCRUD<T> {
    fetchAll(object?: any): Observable<T[]>;
    create(object: T): Observable<T>;
    update(object: T): Observable<T>;
    delete(object: T): Observable<T>;
}

export interface Fetch<T> {
    fetchAll(): Observable<T[]>;
}
