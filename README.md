# ishtar-eve

EVE Online Microservice for Ishtar, a full-stack Discord bot in development.
This service serves as a wrapper for the ESI API, allowing Ishtar to get useful information out of the ESI api without much work.

## Example Usage
```
curl -X GET 'http://localhost:3000/api/market/price?name=vexor%20navy%20issue&strict=true'
```
```json
[
    {
        "id": 17843,
        "name": "Vexor Navy Issue",
        "group_id": 26,
        "price": {
            "sell": 98493824.99,
            "buy": 90000239.43
        }
    }
]
```

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
    * /price - Get Jita market values of search results
   
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
License
----
MIT