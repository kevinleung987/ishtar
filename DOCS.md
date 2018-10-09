# ishtar v0.0.0



- [Auth](#auth)
	- [Authenticate](#authenticate)
	
- [Market](#market)
	- [Retrieve Price by Id](#retrieve-price-by-id)
	- [Retrieve Price by Name](#retrieve-price-by-name)
	
- [User](#user)
	- [Create user](#create-user)
	- [Delete user](#delete-user)
	- [Retrieve current user](#retrieve-current-user)
	- [Retrieve user](#retrieve-user)
	- [Retrieve users](#retrieve-users)
	- [Update password](#update-password)
	- [Update user](#update-user)
	
- [Wormhole](#wormhole)
	- [Get Thera entrances to system](#get-thera-entrances-to-system)
	
- [whois](#whois)
	- [WhoIs Query](#whois-query)
	


# Auth

## Authenticate



	POST /auth

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|

# Market

## Retrieve Price by Id



	GET /price/id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| String			|  <p>The item id.</p>							|

### Success Response

Example-Response:

```
{
  "min": 0,
  "max": 0,
  "avg": 0
  }
```
## Retrieve Price by Name



	GET /price/name


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| String			|  <p>The name of the item.</p>							|
| strict			| boolean			|  <p>Use a strict ESI Search.</p>							|

### Success Response

Example-Response:

```
[{
  "id": 0,
  "name": "string",
  "group_id": 0,
  "price": {
    "sell": {
      "min": 0,
      "max": 0,
      "avg": 0
    },
    "buy": {
      "min": 0,
      "max": 0,
      "avg": 0
    }
  }
}]
```
# User

## Create user



	POST /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|
| email			| String			|  <p>User's email.</p>							|
| password			| String			|  <p>User's password.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|
| role			| String			| **optional** <p>User's role.</p>							|

## Delete user



	DELETE /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve current user



	GET /users/me


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve user



	GET /users/:id


## Retrieve users



	GET /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update password



	PUT /users/:id/password

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| password			| String			|  <p>User's new password.</p>							|

## Update user



	PUT /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|

# Wormhole

## Get Thera entrances to system



	GET /wormhole/thera


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| systemName			| String			|  <p>The name of the system.</p>							|

### Success Response

Example-Response:

```
{
  "jumps": "string",
  "name": "string",
  "security": 0,
  "region": "string",
  "theraSide": "string",
  "systemSide": "string"
}
```
# whois

## WhoIs Query



	GET /whois


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| String			|  <p>The name of the character.</p>							|

### Success Response

Example-Response:

```
{
    "id": 0,
    "name": "string",
    "birthday": "string",
    "security_status": 0,
    "alliance": {
        "alliance_id": 0,
        "name": "string",
        "ticker": "string"
    },
    "corporation": {
        "corporation_id": 0,
        "name": "string",
        "ticker": "string"
    },
    "killboard": {
        "url": "string",
        "kills": 0,
        "losses": 0,
        "iskDestroyed": 0,
        "iskLost": 0
    }
}
```

