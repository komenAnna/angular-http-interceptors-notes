# ANGULAR HTTP INTERCEPTORS
- Http Interceptors are a middleware mechanism in Angular's HttpClient module that allows you to intercept HTTP requests and responses.
- They allow you to intercept outgoing Http requests or incoming Http responses and perform operations such as modifying request headers, handling errors, adding auth tokens, caching responses etc.

# Puropose:
- Logging : The details of Http requests and responses such as the URL, headers & body.
- Authentication: authenticate requests before they are sent to the server by adding custom headers, appending tokens or performing auth checks.
- Caching: Interceptors can be used to cache HTTP responses, thus improving performance.
- Error Handling: handles errors atht occur during Http requests. This can help provide feedback to the user when the connection with the server is lost.

## Step 1: Set up the HTTP Client
- In main.ts file

## Step 2: Make a HTTP request
- In app.component.ts

## Step 3: Generate an interceptor in Angular CLI
- ng generate interceptor demo

## Step 4: Implement the interceptor to add an authorization header in every HTTP request
- in demo.interceptor.ts

## Step 5: Configure the interceptor 
- By calling withInterceptors and passing the interceptor into it in main.ts
-Now, in every HTTP request it will send authorization header

## Step 6: Implement the interceptor to handle errors 
- in demo.interceptor.ts

# Conclusion:
- Interceptors streamline common tasks across your app
- They make the app more reliable
- Used for security, error handling etc

























# AngularHttpInterceptors

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
