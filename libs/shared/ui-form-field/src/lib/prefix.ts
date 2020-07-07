/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Directive, InjectionToken } from '@angular/core';

/**
 * Injection token that can be used to reference instances of `MatPrefix`. It serves as
 * alternative token to the actual `MatPrefix` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
export const MAT_PREFIX = new InjectionToken<WesPrefix>('WesPrefix');

/** Prefix to be placed in front of the form field. */
@Directive({
  selector: '[wesPrefix]',
  providers: [{ provide: MAT_PREFIX, useExisting: WesPrefix }],
})
export class WesPrefix {}
