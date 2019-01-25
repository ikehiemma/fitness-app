import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Store } from 'store';
import { AuthService } from '../../../../auth/shared/services/auth/auth.service';
import { Observable, of } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';

export interface Workout {
    name: string,
    type: string,
    strength: any,
    endurance: any,
    timestamp: number,
    $key: string,
    $exists: () => boolean
}

@Injectable()
export class WorkoutsService {

    workouts$: Observable<Workout[]> = this.db.list<Workout>(`workouts/${this.uid}`).snapshotChanges()
    .pipe(
        map(workouts => 
            workouts.map(workout => ({ $key: workout.key, ...workout.payload.val() }))
        ),
        tap(workouts => this.store.set('workouts', workouts))
    );

    constructor(
        private store: Store,
        private db: AngularFireDatabase,
        private authService: AuthService
    ) {}

    get uid() {
        return this.authService.user.uid;
    }

    addWorkout(workout: Workout) {
        return this.db.list(`workouts/${this.uid}`).push(workout);
    }

    updateWorkout(key: string, workout: Workout) {
        return this.db.object(`workouts/${this.uid}/${key}`).update(workout);
    }

    removeWorkout(key: string) {
        return this.db.list(`workouts/${this.uid}`).remove(key);
    }

    getWorkout(key: string){
        if (!key) return of({});
        return this.store.select<Workout[]>('workouts')
            .pipe(filter(Boolean),
                map(workouts => workouts.find((workout: Workout) => workout.$key === key)));
    }
}