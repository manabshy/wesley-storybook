/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Directive, InjectionToken, Input } from '@angular/core';

let nextUniqueId = 0;

/**
 * Injection token that can be used to reference instances of `MatError`. It serves as
 * alternative token to the actual `MatError` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
export const MAT_ERROR = new InjectionToken<WesError>('WesError');

/** Single error message to be shown underneath the form field. */
@Directive({
  selector: 'wes-error',
  host: {
    class: 'wes-error',
    role: 'alert',
    '[attr.id]': 'id',
  },
  providers: [{ provide: MAT_ERROR, useExisting: WesError }],
})
export class WesError {
  @Input() id: string = `wes-error-${nextUniqueId++}`;
}
