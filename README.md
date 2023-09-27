# express-sql-sequelize-example

This repo is a simple CRUD user management server for my personal practice to familiar with Node.js backend develeopment.

## ☑️ v3-MVC
- Restful API with CRUD functions in User SQL database.
- Automatically create log files with winston.js. 
- Add Frontend views and implement MVC architecture with ejs. 🆕

## 🛠️ used stack
- Node.js
  - Express.js
  - winston.js 
  - ejs 🆕
- MySQL
  - Sequelize

## To Start

### install dependencies
```
npm install
```
### start the server
```
nodemon app.js
```

### If you haven't install MySQL before
```
brew install mysql
brew services start mysql

<!-- set the password to "password" -->
mysql_secure_installation

<!-- enter the mysql cli -->
mysql -u root -p
CREATE DATABASE my_express_sequelize_test;

Exit;
```

## Test by frontend page

In this version, the user routes is modefied to `/api/users`, etc..
### start here
https://localhost:3000/users/


---
I will continuously learn new features and update this repo with different branch.

@20230926 Agwurn Lu
