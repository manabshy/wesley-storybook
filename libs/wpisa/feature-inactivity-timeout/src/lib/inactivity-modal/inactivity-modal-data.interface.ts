import { Observable } from 'rxjs';

export interface InactivityModalData {
  countDown: Observable<number>;
}
