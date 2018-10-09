# ishtar-eve

Full-Stack Discord bot in development. This repo is only the back-end service for Ishtar.

This back-end service serves mainly as a wrapper for the EVE Online API, and also has a content curation feature, other features to come.

MongoDB is required for persistent storage.

## Example Usage
```
curl -X GET 'http://localhost:3000/market/price?name=vexor%20navy%20issue&strict=true'
```
```json
[
    {
        "id": 17843,
        "name": "Vexor Navy Issue",
        "group_id": 26,
        "price": {
            "sell": {
                "min": 98490973.5,
                "max": 988888888.42,
                "avg": 123374035.97846146
            },
            "buy": {
                "min": 198.94,
                "max": 90000239.43,
                "avg": 75047825.20419355
            }
        }
    }
]
```

### Installing
```
npm install
```

### Viewing the Docs:
Available in `DOCS.md`, you can also generate them yourself with:
```
npm run docs
```
#### *Development* mode:

```
npm run dev
```

#### *Production* mode:

```
npm run prod
```

### Trying it out
* View the docs by running `npm run docs` or by checking out `DOCS.md`
* Create a .env file to provide environment variables for the service.
* Create a user using your Master Key via a POST request to the /users/ route, more details are available in the docs. (optional)
* Get a auth token via a POST request to the /auth/ route, more details are available in the docs. (optional)
* Begin using Ishtar.

### .env specification
* A .env file in the root directory is required for this service to be run. An example can be found in `.env.example`.

### Docker
A docker file is provided to easily deploy this service into production.
```
docker build -t {NAME} .
docker run -p 3000:3000 --name {NAME} -d {NAME}:latest
```
Server scaffolding and boilerplate provided by [generator-rest](https://github.com/diegohaz/rest)
License
----
MIT
