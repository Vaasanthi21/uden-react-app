# Getting Started with Documentation on Code Structure and Practices for UDEN React App

[![uden-logo!](/docs/icon.png)](https://uden.tech)
## 1. Introduction

The purpose of this document is to provide a comprehensive guide on the code structure and development practices for the UDEN React App.

*Last Release Update*: Added reusable CTA FormModal popup overlay system for zero-friction lead conversion.

## 1.2 Overview of Code Structure and Practices

This guide will outline the recommended code structure and development practices that should be followed by all members of the development team. This includes guidelines for code formatting, variable naming, commenting, and other aspects of coding style. All code and comments should be written in English.

### The guide will cover the following areas:


- Code Structure: A high-level overview of the code base, including the folder structure and organization.

- Coding Style: Best practices and guidelines for coding style, including formatting, variable naming, and commenting.

- Design Patterns: Overview of the design patterns used in the code base, including code examples and best practices for using design patterns.

- Dependency Management: Overview of the dependency management process, including how dependencies are handled and how to add or remove dependencies.

- Testing: Overview of the testing process, including the types of tests used and best practices for testing.

- Documentation: Overview of the documentation process, including how documentation is generated and maintained, and best practices for documentation.

- Version Control: Overview of the version control process, including the branching and merging strategy and best practices for contributing to the code base.

- Code Review: Overview of the code review process, including how code reviews are conducted and best practices for code reviews.

- Deployment: Overview of the deployment process, including how deployments are managed and best practices for deployment.

**By following these guidelines, we aim to ensure that the UDEN React App is consistent, maintainable, and easy to develop and support.**

## 2. Code Structure

### 2.1 Overview of the Code Base

The UDEN React App is built using functional components with React Hooks. The app includes several key features, **The app includes functional pages for companies, job seekers, and upskilling partners, The app also includes a blog feature.** and data entry forms.

### 2.2 High-Level Architecture Diagram

The following diagram provides a high-level overview of the architecture of the UDEN React App:

![High-Level-Architecture-diagram!](/docs/react_architecture.png)

### 2.3 Code Organization and Folder Structure
The code for the UDEN React App is organized into several directories, each with a specific purpose. The following is a high-level overview of the directory structure:

    -src: This directory contains the source code for the app.
        -app: This directory contains the store.js for react redux state management.
        -assets: This directory contains all the assets used in app.
        -hooks:  This directory contains all the global level hooks. any custom resusable hooks can be placed here.
        -modules: This directory contains pages and components.
            -compoments: This directory contains all the reusable custom components.
            -pages: This directory contains all the pages and each page contains are mentioned below:
                -Page1:
                    -components: This directory contains all the Components used in Page1.
                    -hooks: This directory contains all the Hooks used in Page1.
                    -styles: This directory contains all the styling used in Page1.
                    -Page1.Const.js: This file stores stores all the static/const data used in Page1.
                    -Page1.jsx: This is index file for Page1 which can be rendered.
        -services: This directory contains all the API services used in app.
        -utils: This directory contains all the utility files, helpers, const, etc
    -public: This directory contains static files used by the app, such as images and fonts.

### 2.4 Naming Conventions

Consistent naming conventions are important for maintaining a clean and organized code base. The following are the naming conventions used in the UDEN React App:

- Components: PascalCase
- Functions and variables: camelCase or PascalCase
- Constants: UPPERCASE_SNAKE_CASE

### 2.5 Coding Standards

Consistent coding standards are important for maintaining a clean and maintainable code base. The following coding standards should be followed when writing code for the UDEN React App:

- Indentation: 2 spaces
- Line length: Maximum 80 characters
- Comments: Use comments to explain complex code or to provide additional context only if its needed (keep in mind **"Good code is its own best documentation. As you're about to add a comment, ask yourself, 'How can I improve the code so that this comment isn't needed?'" - Steve McConnell**). All comments should be written in English.

### 2.6 Dependencies

The UDEN React App uses the following dependencies:

    "dependencies": {
        "@emotion/react": "^11.10.6",
        "@emotion/styled": "^11.10.6",
        "@mui/icons-material": "^5.11.9",
        "@mui/material": "^5.11.9",
        "@reduxjs/toolkit": "^1.9.2",
        "@testing-library/jest-dom": "^5.16.5",
        "@testing-library/react": "^13.4.0",
        "@testing-library/user-event": "^14.4.3",
        "axios": "^1.3.3",
        "notistack": "^3.0.0",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-redux": "^8.0.5",
        "react-router-dom": "^6.8.1",
        "react-scripts": "5.0.1",
        "react-web-share": "^2.0.2",
        "swiper": "^9.0.5",
        "web-vitals": "^2.1.4"
    }

***"Please remember to keep your dependencies up to date by checking for updates regularly. Outdated dependencies can pose security risks and may cause compatibility issues with other libraries or frameworks. Please ensure that you update your dependencies whenever required to ensure that our application remains secure and stable."***

## 3. Design Patterns

This section provides an overview of the design patterns used in the code and best practices for using them.

### 3.1 Overview

The UDEN React App primarily uses functional components, and does not rely heavily on design patterns based on classes.

However, there are still certain patterns that are utilized in the code base. These include:

- **Render props pattern:** This pattern is used to pass a component as a prop to another component, allowing the receiving component to render the passed component with additional functionality.

- **Higher-order component (HOC) pattern:** This pattern is used to wrap a component with additional functionality, allowing for code reuse and abstraction.

- **Container/component pattern:** This pattern separates presentational components (which focus on UI) from container components (which handle data and logic). This improves the overall organization of the codebase and makes it easier to maintain.

For each pattern used in the code, an explanation and code example will be provided. Best practices for using these patterns include:

- Only use patterns when they improve the overall code organization and maintainability.
- Avoid overusing patterns, as they can add unnecessary complexity to the codebase.
- Keep patterns consistent throughout the codebase to maintain a cohesive structure.

### 3.2 Explanation with Code Examples
Below are some code examples demonstrating how we have implemented each of these design patterns in our codebase:

**1. Render Props pattern:**

        import React from 'react';

        function RenderPropsExample(props) {
        return (
            <div>
            {props.render(props.value)}
            </div>
        );
        }

        function App() {
        return (
            <RenderPropsExample
            value={10}
            render={(value) => <p>The value is {value}.</p>}
            />
        );
        }

**2. Higher-Order Component (HOC) pattern:**

        import React from 'react';

        function hoc(WrappedComponent) {
        return function(props) {
            const newProps = {
            // add new props to pass down to the WrappedComponent
            };
            return <WrappedComponent {...props} {...newProps} />;
        }
        }

        function Example(props) {
        // use props passed down from the HOC
        return (
            <div>
            <p>Example component</p>
            </div>
        );
        }

        const EnhancedExample = hoc(Example);

        function App() {
        return <EnhancedExample />;
        }

**3. Container/Component Pattern:**

        import React from 'react';

        function Container(props) {
        const data = fetchData(); // fetch data from API or some other source

        return (
            <div>
            <Component data={data} />
            </div>
        );
        }

        function Component(props) {
        // use data passed down from the Container
        return (
            <div>
            <p>{props.data}</p>
            </div>
        );
        }

        function App() {
        return <Container />;
        }


*Some of the common patterns used in react are provided below with example.*





- **State Hook** - This pattern is used to manage state in functional components. Here's an example:

        import React, { useState } from 'react';

        function Counter() {
        const [count, setCount] = useState(0);

        function increment() {
            setCount(count + 1);
        }

        return (
            <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            </div>
        );
        }

- **Effect Hook** - This pattern is used to manage side effects, such as fetching data or updating the DOM. Here's an example:

        import React, { useState, useEffect } from 'react';

        function DataDisplay() {
        const [data, setData] = useState([]);

        useEffect(() => {
            fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => setData(data));
        }, []);

        return (
            <ul>
            {data.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
            </ul>
        );
        }
- **Render Prop** - This pattern is used to share code between components by passing a function as a prop. Here's an example:

        import React from 'react';

        function Hoverable({ children, onHover }) {
        return (
            <div onMouseOver={onHover}>
            {typeof children === 'function' ? children() : children}
            </div>
        );
        }

        function App() {
        return (
            <Hoverable onHover={() => console.log('Hovering!')}>
            <p>This paragraph can be hovered over.</p>
            </Hoverable>
        );
        }

These are just a few examples of common design patterns used in React functional components. There are many others that can be used depending on the specific needs of your application.

### 3.3 Best Practices

Here are some best practices to keep in mind when using design patterns in your code:


- **Use patterns sparingly:** Don't overuse design patterns in your code. Only use them where they make sense and improve the code's maintainability and scalability.

- **Keep it simple:** Choose the simplest design pattern that meets your needs. Overly complex patterns can make your code harder to understand and maintain.

- **Seperate imports:** While importing make sure you have provided a spacing between official imports, third party imports and local imports.

        example shown below:

        ///official imports
        import React from 'react'

        ///third party imports
        import Container from '@mui/material'

        //local imports
        import MyComponent from '../../MyComponent'
        import MyComponent2 from '../../MyComponent2'
        import MyComponent3 from '../../MyComponent3'

- **Use established patterns:** Use patterns that are widely recognized and have proven themselves in practice. This reduces the chances of introducing unnecessary complexity or creating maintenance headaches.

- **Document your patterns:** If you're using a less common or custom design pattern, make sure to document it thoroughly so that other developers can understand it easily.

- **Refactor as needed:** As your codebase evolves, patterns that once made sense may become unnecessary or even detrimental. Be willing to refactor or remove patterns as needed to keep your codebase maintainable and scalable.

***By following these best practices, we can ensure that our use of design patterns is effective and beneficial to our codebase.***

### 3.4 UDEN Pattern/Practices with example

Below are some code examples demonstrating how we have implemented patterns in our code base:

**1. Page Design**

Every single page in our code base is structured in same way, page structure is shown below:

    -Page1:
        -components: This directory contains all the Components used in Page1.
        -hooks: This directory contains all the Hooks used in Page1.
        -styles: This directory contains all the styling used in Page1.
        -Page1.Const.js: This file stores stores all the static/const data used in Page1.
        -Page1.jsx: This is index file for Page1 which can be rendered.

- components: 

Components directory contains all the components used by the page  example is shown below:
 we are creating one component inside component directory, now it contains one file names as **Page1Component1.jsx**

 Now our directory contains:

    -components:
        -Page1Component1.jsx

Inside **Page1Component1.jsx** we have  

        import React from 'react'

        const Page1Component1 = () => {
        return (
            <div>Page1Component1</div>
        )
        }

        export default Page1Component1

Creating Hooks for **Page1**, inside hooks directory a file named **Page1.Hooks.js** is created and it contains: 

        ///...imports
        
        ///we have divided hooks per component
        usePage1Component1Hooks = () => {
            const data = someTack()
            return {data}
        }


        const Page1Hooks = {
            usePage1Component1Hooks
        }

        export default Page1HOOKS

Creating Styles for  **Page1**, inside styles directory a file named **Page1.Styles.js** is created and it contains:


        ///we are using emotion styling engine as MUI (which is our UI library used in app) uses emotion as its default styling engine.
        import { css } from "@emotion/react";

        export const Page1Styles = {
            Page1Component1Style = css({
                ///styles....
            })
        }

Creating Const data for **Page1**, file **Page1.Const.js** conntains:

        ///imports...

        const page1Component1Const = {
            //some const data
        }

        const Page1Const = {
            page1Component1Const
        }

        export default Page1Const

Finally our **Page1** looks like:


        import React from 'react'

        import Page1Component1 from './components/Page1Component1'
        import Page1HOOKS from './hooks/Page1HOOKS'
        import {Page1Styles as styles} from './styles/Page1Styles'
        import Page1Const from './Page1Const'

        const Page1 = () => {
        return (
            <div>
                <Page1Component1 
                    data={Page1Const.page1Component1Const} 
                    hooks={Page1HOOKS.usePage1Component1Hooks} 
                    css{stylesPage1Component1Style} />
            </div>
        )
        }

        export default Page1

**Following practices should be followed while working on UDEN's code base, to ensure that our code base is maintainable and scalable.**


### 3.5 Flutter Integration

In addition to the React app, we have also integrated a Flutter app into the codebase. The Flutter app is located inside the public directory under the app subdirectory, and it is rendered whenever the /app route is triggered. This integration has several advantages, including the ability to leverage the strengths of both Flutter and React in the same application.

Flutter provides a rich set of pre-built widgets and has excellent performance, making it a great choice for creating complex UIs. By integrating Flutter into the React app, we are able to take advantage of these benefits while still using React for its powerful component architecture and easy integration with external libraries. This approach allows us to create a highly performant and customizable application while minimizing development time and effort.

## 4. Dependency Management

### 4.1 Overview

Managing dependencies is a crucial aspect of maintaining the code base. It ensures that the code remains up-to-date with the latest libraries and frameworks, and helps to avoid security vulnerabilities and compatibility issues.

### 4.2 Dependency Handling

In this app, we use npm as our package manager. All the dependencies are listed in the package.json file, and can be installed using the command `npm install`. We have also defined the required versions for each dependency to ensure that all team members are using the same versions.

### 4.3 Adding or Removing Dependencies

To add a new dependency, you can use the command `npm install <package-name>`. This will install the package and update the package.json file with the new dependency.

To remove a dependency, you can use the command `npm uninstall <package-name>`. This will remove the package and update the package.json file with the removed dependency.

Before committing any changes related to dependencies, make sure to run `npm install` to update the node_modules folder and ensure that everything is working as expected.

### 4.4 Updating Dependencies

It's important to keep the dependencies up-to-date to take advantage of new features and bug fixes. To update a dependency, you can use the command `npm update <package-name>`. However, it's recommended to update all dependencies at once using the command `npm update`.

Before updating any dependency, it's recommended to read the release notes and check for any breaking changes that may affect the code base. It's also recommended to test the app thoroughly after updating dependencies to ensure that everything is working as expected.

\[*****NOTE*****\]It is important to only use necessary dependencies and avoid adding unwanted libraries for simple tasks. Before adding a new dependency, ensure it is necessary and will not cause conflicts with existing dependencies. When adding a new dependency, update the package.json file and use the appropriate versioning. To remove a dependency, run `npm uninstall <dependency_name>` command and update the package.json file accordingly. Always review and update dependencies regularly to ensure they are up-to-date and compatible with the codebase.


## 5. Testing

### 5.1 Overview

The testing process at UDEN involves a combination of automated and manual testing to ensure that the application is functioning correctly and meeting the requirements.

#### Types of Tests

The application is tested at various levels to ensure the overall quality of the product. These tests include:

- **Unit Tests:** Used to test individual units or functions of the application.
- **Integration Tests:** Used to test the integration of multiple units or components of the application.
- **End-to-End (E2E) Tests:** Used to test the entire flow of the application from start to finish.
- **Performance Tests:** Used to test the performance of the application under various loads and stress.

### 5.2 Running Tests

To run the tests for the UDEN React App, use the following command:

        npm run test

### 5.3 Best Practices for Testing

- Write tests alongside the code to ensure code coverage.
- Use meaningful test names and organize tests in a logical manner.
- Test edge cases and handle unexpected inputs.
- Use mocking and stubbing to isolate units being tested.
- Continuously update and improve test cases to ensure that they are valid and useful.


## 6. Documentation

### 6.1 Overview

Documentation is an essential part of the development process that helps to maintain the codebase over time. In our UDEN React app, we use various tools and methods to create and maintain documentation.

### 6.2 Explanation of how documentation is created and maintained 

We use several tools and methods to generate and maintain documentation. Our documentation is written in Markdown format and is generated using tools such as JSDoc and Docz. These tools allow us to create documentation for our components, functions, and classes in a structured and organized manner.

### 6.3 Best Practices

- All code should be self-documenting as much as possible, with clear and descriptive function and variable names.
- Use JSDoc or similar tools to document all functions, classes, and modules.
- Keep documentation up-to-date as code evolves and changes.
- Avoid duplicating code in comments; instead, strive to write comments that explain why the code is written in a particular way.
- Use a consistent style for documentation across the project.

## 7. Version Control

### 7.1 Overview

The UDEN React App is version controlled using Git. All code changes should be pushed to a central Git repository on a regular basis.

### 7.2 Explanation of the branching and merging strategy

The codebase uses a GitFlow branching model, with the following branches:

- **main:** contains the production-ready code.
- **development:** contains the latest development version of the code.
- **feature branches:** created from the develop branch to work on new features or bug fixes then deleted or kept with tag.

When a feature is complete, a pull request should be created for it to be merged into the development branch. Once the development branch has accumulated enough changes, it should be merged into the main branch to create a new production-ready release.


### 7.3 Explanation of how to contribute to the code base

Contributions to the codebase can be made by creating a new branch from the develop branch and working on new features or bug fixes in isolation. Once the changes are complete, a pull request can be created for review and merging into the develop branch. All code changes should be reviewed by at least one other team member before being merged.

## 8. Code Review

### 8.1 Overview

Code reviews are an essential part of the software development process at UDEN. They help ensure that the code meets the required standards, is of high quality, and is maintainable. Code reviews are conducted by peers or senior developers who are familiar with the code base.

### 8.2 Explanation of how code reviews are conducted

Code reviews are conducted in a systematic manner. The reviewer goes through the code line by line, ensuring that it follows the coding standards, is easy to read and understand, and is well-documented. The reviewer also checks that the code is secure, efficient, and scalable. Then they provide feedback to the developer, highlighting areas for improvement.

### 8.3 Best practices for code reviews

- Code reviews should be conducted regularly, ideally for every pull request.
- Code reviews should be conducted by peers or senior developers who are familiar with the code base.
- The reviewer should focus on the functionality, readability, maintainability, and security of the code.
- The reviewer should provide specific and actionable feedback, highlighting both positive aspects and areas for improvement.
- The developer should take the feedback positively and implement the necessary changes.
- Code reviews should be conducted in a timely manner, so that the developer can address the feedback and move forward with the development process.


## 9. Deployment

### 9.1 Overview

Our deployment process includes two strategies - one for development and one for production. For the development deployment, we have set up a pipeline that automatically deploys the app to an Azure Static Web App using the provided token in the variables in GitLab whenever a pull request is made to the development branch.

Similarly, for the production deployment, we use the master branch and have set up a pipeline to automatically deploy the app to the Azure Static Web App. This ensures that the latest version of the app is always deployed and available to users. We follow best practices for deployment and ensure that our deployments are secure and stable.

### 9.2 Explanation of how deployments are managed

The deployment process is managed using GitLab's CI/CD pipelines. Whenever changes are made to the code base and committed to a branch, the pipeline is triggered, which runs the build process, runs the tests, and deploys the code to the appropriate environment. The deployments are managed using Azure Static Web App, which provides a secure and scalable hosting environment for our app.

In our project's root directory we have file **.gitlab-ci.yml** which handles the deployment process below you can find the contents on the file.

            stages:          # List of stages for jobs, and their order of execution
            - build
            - test
            - deploy


            variables:
            APP_PATH: '$CI_PROJECT_DIR'
            OUTPUT_PATH: '$CI_PROJECT_DIR/build'


            deploy-development:      # This job runs in the deploy stage.
            stage: deploy  # It only runs when *both* jobs in the test stage complete successfully.
            environment: development
            variables:
                API_TOKEN: $DEPLOYMENT_TOKEN_DEV
            image: registry.gitlab.com/static-web-apps/azure-static-web-apps-deploy
            script:
                - echo "Deploying Development application..."
                - echo "Development Application successfully deployed."
            only:
                - development

            deploy-production:      # This job runs in the deploy stage.
            stage: deploy  # It only runs when *both* jobs in the test stage complete successfully.
            environment: production
            variables:
                API_TOKEN: $DEPLOYMENT_TOKEN
            image: registry.gitlab.com/static-web-apps/azure-static-web-apps-deploy
            script:
                - echo "Deploying Production application..."
                - echo "Production Application successfully deployed."
            only:
            - master

Here **DEPLOYMENT_TOKEN_DEV** and **DEPLOYMENT_TOKEN** are the variables stored in GitLab which is fetched during deployment.


### 9.3 Best practices for deployment

- Always test your changes locally before committing to the codebase.
- Ensure that the code is properly reviewed and tested before merging into the development or master branch.
- Follow the branching and merging strategy to ensure that changes are deployed to the appropriate environment.
- Use GitLab's CI/CD pipelines to automate the build, test, and deployment process and ensure that deployments are consistent and repeatable.
- Keep track of the deployment history and monitor the deployed app to ensure that it is functioning properly.

## 10. Conclusion

After analyzing the code structure and practices of the project, it can be concluded that the codebase follows industry-standard practices and design patterns to ensure code reusability, maintainability, and scalability.

The project uses React functional components with Material UI for the user interface and Redux Toolkit for state management. It also utilizes several design patterns such as the Render Props, Higher-order Component (HOC), and Container/Component patterns.

Dependency management is handled efficiently, with careful consideration given to choosing only necessary libraries and keeping them up-to-date. The project uses a comprehensive testing process that includes unit tests, integration tests, and end-to-end tests.

The documentation process is well-maintained, with clear guidelines and examples provided. Code reviews are conducted regularly to maintain code quality, and a thorough deployment process is in place to ensure a seamless transition from development to production.

To improve the code structure and practices further, future updates could include incorporating new design patterns, updating dependencies regularly, and expanding the testing suite to cover additional use cases.

Overall, the project demonstrates a high level of proficiency in modern web development practices and serves as an excellent example for other development teams to follow.