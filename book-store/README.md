# Node Bookstore CRUD App

### Run mongo backend
The books will be stored/retrieved from a mongo backend through REST operations defined in our controller
```bash
docker run -it -d -p 27017:27017 --name mongo mongo:latest
```

### Install Node modules
Install our dependent modules locally
```bash
npm install --save-dev
```

### Run the server
This will run the express server at localhost port 3000 with a route to /catalog
```bash
npm run devstart
curl localhost:3000/catalog
```

### Seed the database
We can load in some books with this populatedb script
```bash
node populatedb mongodb://127.0.0.1:27017/books
```
### Test it
Go to the url in your browser http://localhost:3000/catalog

### Debug mode
To get more verbose output you can use the environment debug variable
```bash
DEBUG=book-store npm run devstart
```
