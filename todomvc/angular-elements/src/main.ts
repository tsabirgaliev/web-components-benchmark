import 'zone.js/dist/zone';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { TodoModule } from './todo.module';

platformBrowserDynamic()
    .bootstrapModule(TodoModule)
    .then(ref => {
        console.log('TodoModule boostraped');
    });