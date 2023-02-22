/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Route } from '@vaadin/router';

export const routes: Route[] = [
  {
    path: '/',
    redirect: '/Project-Pizza/home',
  },
  {
    path: '/home',
    name: 'home',
    component: 'page-home',
    action: async () => {
      await import('../pages/page-home.js');
    },
  },
  {
    path: '/menu',
    name: 'menu',
    component: 'page-menu',
    action: async () => {
      await import('../pages/page-menu.js');
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: 'page-contact',
    action: async () => {
      await import('../pages/page-contact.js');
    },
  },
  {
    path: '(.*)',
    name: 'not-found',
    component: 'page-not-found',
    action: async () => {
      await import('../pages/page-not-found.js');
    },
  },
];
