# What is angular

A framework for developing single page applications employing TypeScript and HTML template language.

## Why not just js

The more complex the application is, the harder to mantain, hence why a framework is more suitable

## Benefits of angular

- Make web application easier
- Includes a lot of re-usable code due to its component-based architecture
- Makes our apps more testable
- Intensive documentation
- Faster development, due to characteristics like API client, scope management, filters, directives, validation

# Architecture

### FrontEnd or Client-side

- What the user sees and interacts with, UI
- Presentation Logic

### BackEnd

- Responsible for storing the data and do the processing.
- Where we implement the business logic of the application

#### How to we get the data? API

- Endpoints that are acessible via HTTP request

# About Node

- Runtime environment for executing JS outside the browser

# About NPM

- Install 3rd-party libraries

# Angular Project

Create project: ng new <project_name>  
Run application: ng serve  
Create/Generate component: ng g c <componet_name>  
Create/Generate service: ng g s <service_name>

## Angular Project

1. **e2e**: simulate new user
2. **node_modules**: 3rd party library
3. **src**
4. **app**

- **assets**: static assets (ex: image file)
- **environments**: configuration settings for an environment
- **main.ts**: starting point of our application
- **polyfilss**: fill the gap between features

5. **angular.json**: angular configuration
6. **karma.conf**: configuration file, testruneer js code
7. **package.json**: application settings
8. **protractor.conf**: tool for running end to end test
9. **tsconfig**: typescript compiler settings
10. **tslintn**: checks readability, maintainability and functionality errors of typescript

## About Webpack

Webpack build automation tool, gets all our scripts and combines them it saves in bundle and minifies that bundle for otimization  
Webpack has a feature hot module replacement (HMR) which automatically refreshes our browser  
Webpack injects these bundles on our index.html

## About Typescript

Typescript is a superset of JS (all JS code is a valid typescript code), but typescript has some additional features:

- Strong typing - Unlike JS we cannot change the data type as much as we want
- Object-Oriented features
- Compile-time errors
- Great tooling
  We need to transpile the typescript code to js so that browser can understand: tsc <filename>.ts && node <filename>.js

## About Components and Modules

Angular embraces component-based architecture which allows us to work on smaller and more maintainable pieces that can be reused in different places  
Components encapsulates de data, template and logic  
Modules are containters that group related components  
There's at least one component: app.component  
There's at least one module: app.module

## About Directives

We use directives to manipulate the DOM  
We have two types of directives:

- Strutctural modiffy strutcture of DOM
- Attribute modify atributes the DOM elements

## About Binding

The direction of binding is from the component to the view  
With ngModel we can implement two-way binding. We need to import Form module

## About Routing

To define our route we need to import Route module and for each rorute, define the path and its component  
In the app.component.html we need <router-outlet> to render the component associated with the route

## Notes

For errors of filewatcher- echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
