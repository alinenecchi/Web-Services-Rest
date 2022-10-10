# Web-Services-Rest

A simples CRUD example by using NodeJS and MongoDB.

## Technologies:

- NodeJS Express
- MongoDB

### Downloading

```bash
git clone https://github.com/alinenecchi/Web-Services-Rest.git
cd Web-Services-Rest
```

### Connecting to MongoDB

Visit the [MongoDB](https://cloud.mongodb.com/) website and sign up for an account. It should take you to your dashboard where it will prompt you to set up your cluster. Select **AWS** for the provider and follow the steps.

When you are the **Connect** step, you should see something like this:
<br>
![Connect](./Assets/connect.png)
Click the **Connect Your Application** button and it should take you to a popup with your **Connection String**. Copy this string.

Go back to the your text editor and create a file called `.env`. Create a variable for your connection string like so:

```
DB_URL = "<INSERT_CONNECTION_STRING ex: mongodb+srv://admin:<password>@<app_name>.oeufh3w.mongodb.net/<app_name>?retryWrites=true&w=majority>"
```

_**Note:** Ensure your connection string has your username and password that match the credentials of the user you created on the MongoDB admin dashboard. If it doesn't match, you cannot access the cluster._

---

## To run this project

### Install packages:
```bash
npm install
```
 To run the web app, you need to start a `localhost` server running on port 3000 (as found in `index.js`). To start the server, enter the following into your command line. Run API:

```bash
nodemon index.js
```
As written in the `package.json` file, it should run the command, `nodemon index.js` behind the scenes.

---

### Accessing the web api

To access the api, open up your browser and enter the following link:

```
http://localhost:3000
```
---

### License

MIT

