import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { demoInterceptor } from './app/demo.interceptor';

bootstrapApplication(AppComponent, {providers: [provideHttpClient(withInterceptors([demoInterceptor]))]})
  .catch((err) => console.error(err));
