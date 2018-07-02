# ishtar-eve

EVE Online Microservice for Ishtar, a full-stack Discord bot in development.

## Installing
```
npm install
```

## Running
#### *Development* mode:

```
npm run dev
```

#### *Production* mode:

```
npm run compile
npm start
```

### Trying it out
* Swagger interface available at [http://localhost:3000/spec](http://localhost:3000/spec)
* Market REST endpoint `curl http://localhost:3000/api/market`
    * getPrice - Get Jita market values of search results
   
### .env specification
* A .env file in the root directory is required for this microservice to run.
```
APP_ID=ishtar-eve
PORT=3000
LOG_LEVEL=debug
REQUEST_LIMIT=100kb
SESSION_SECRET=mySecret

#Swagger
SWAGGER_API_SPEC=/spec
```
Built on the express-no-stress template:
https://github.com/cdimascio/generator-express-no-stress

License
----
MIT