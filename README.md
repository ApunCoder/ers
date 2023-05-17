# Employee-Review-System
A full stack, app used for reviewing employee.
Hoisted Link : https://ers-h874.onrender.com


### Description

The Employee Review System is a web application that allows the admin to assign employees to review each other based on their work performance. The admin has special privileges to manage the system, including the ability to designate a new admin, create new employee accounts, and assign reviewers and reviewees.


### Tech Used

NodeJS , Express, MongoDB , EJS as templates , JavaScript , HTML, CSS

### How to setup the project on local system

  1. Clone this project:
  ```
  git clone https://github.com/ApunCoder/ers.git
  
  ```
  2. Navigate to Project Directory.
  ```
  cd ers
  
  ```
  
  3. Start by installing npm:
  ```
  npm install || npm run build
  
  ```

  4. Start by following command:
  ```
  npm start || nodemon index.js
  
  ```

#### use the secret key to make a user admin : mewin.

### Features

  You can review the employees. The admin has the special power to assing, the task to employee, remove the employee, add new admin;
  
  
  ## HomePage / Admin View

  ## Home page / Employee view

  ## Sign-Up

  ## Sign-In

  ## Forget Password
  
  ## Assign Task

  ## Employee List

### Folder Structure
```
Employee Review System
    |
    |               |--->css
    |--->assets---->|--->images
    |             
    |
    |               |--->flashMiddleware.js
    |--->config---->|--->mongoose.js
    |               |--->passport-local-Stradegy.js
    |
    |                  |-->admin_controller.js
    |--->controllers-->|-->home_controller.js
    |                  |-->review_controller.js
    |                  |-->user_controller.js
    |
    |               |-->review.js
    |--->models---->|
    |               |-->user.js
    |
    |              
    |               |-->admin.js
    |--->routes---->|-->index.js
    |               |-->review.js
    |               |-->user.js
    |
    |              |--->_header.ejs
    |              |---> addEmployee.ejs
    |              |---> admin.ejs
    |              |---> employe.ejs
    |--->views---->|--->forget_password.ejs
    |              |--->home.ejs
    |              |--->layout.ejs
    |              |--->sign_in.ejs
    |              |--->sign_up.ejs
    |
    |-->node_modules
    |-->.gitignore
    |--> index.js
    |--> package-lock.json
    |-->package.json
```
