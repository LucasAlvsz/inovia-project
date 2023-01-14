<p align="center"></br>
      <img src="./apps/client/src/assets/images/inovialogo.png" alt="inovia logo" width="300px"/>
</p>

</br>
<h1 align="center">
  Inovia Project
  </br>
</h1>
<div align="center">

  <h3>Built With</h3>

  <img alt= "typescript logo" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img alt= "node.js logo" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" height="30px"/>
  <img alt= "express logo" src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" height="30px"/>
  <img alt= "react logo" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" height="30px"/>
  <img alt= "styled components logo" src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" height="30px"/>
  <img alt= "postgresql logo" src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img alt= "prisma logo" src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" height="30px"/>
  <img alt= "mongo logo" src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img alt= "jest logo" src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" height="30px"/>
  <img alt= "docker logo" src="https://img.shields.io/badge/Docker-228FE1?style=for-the-badge&logo=docker&logoColor=white" height="30px"/>
  <img alt= "nginx logo" src="https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=nginx&logoColor=white" height="30px"/>
  <img alt= "heroku logo" src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" height="30px"/>
  <img alt= "vercel logo" src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" height="30px"/>
  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>

<br/>

# Description

Inovia project simulate a CRUD to manage products, clients and orders.

</br>

## Features

-   Sign-in, sign-up and Loggout
-   See products from orders.

</br>

## API Reference

#### Sign-up

```http
POST /sign-up
```

#### Request:

| Body         | Type     | Description                     |
| :----------- | :------- | :------------------------------ |
| `login`      | `string` | **Required**                    |
| `name`       | `string` | **Required**.                   |
| `login`      | `string` | **Required**.                   |
| `email`      | `string` | **Required**.                   |
| `password`   | `string` | **Required**.                   |
| `birhDate`   | `string` | **Required**. `YYYY/MM/DD`      |
| `adress`     | `string` | **Required**.                   |
| `phone`      | `string` | **Required**. `(99) 99999-9999` |
| `profilePic` | `file`   | **Optional**. `.png .jpeg .jpg` |

#

#### Sign-in

```http
POST /sign-in
```

#### Request:

| Body       | Type     | Description   |
| :--------- | :------- | :------------ |
| `login`    | `string` | **Required**  |
| `password` | `string` | **Required**. |

> You can use the following credentials to login:

```json
{
	"email": "admin@admin.com",
	"password": "adminadmin"
}
```

#### Response:

```json
{
	"token": "jason web token",
	"userData":{
		"name": "some name",
		"profilePicUrl:" "url"
	}
}
```

#

### Authorization

| Headers         | Type     | Description               |
| :-------------- | :------- | :------------------------ |
| `Authorization` | `string` | **Required**. valid token |

`Authorization format: Bearer jsonwebtoken`

**All following routes request an authorization header**

<br/>

#### Get all products

```http
GET /products
```

#### Response:

```json
[
	{
		"id": "63c1e31ec872a92f79832da2",
		"name": "Frango",
		"price": 8,
		"brand": "Managed",
		"taxPercentage": 10,
		"stock": 10,
		"pictureUrl": "http://localhost:5000/files/1673650974557-13107.jpeg",
		"infos": [
			{
				"info1": "info 1",
				"info2": "info 2"
			}
		]
	}
]
```

#

#### Get a product by id

```http
GET /products/:id
```

#### Response:

```json
{
	"id": "63c1e31ec872a92f79832da2",
	"name": "Frango",
	"price": 8,
	"brand": "Managed",
	"taxPercentage": 10,
	"stock": 10,
	"pictureUrl": "http://localhost:5000/files/1673650974557-13107.jpeg",
	"infos": [
		{
			"info1": "info 1",
			"info2": "info 2"
		}
	]
}
```

#### Params:

| Params | Type     | Description   |
| :----- | :------- | :------------ |
| `id`   | `string` | **Required**. |

#

#### Create a product

```http
POST /products
```

#### Request:

| Body            | Type            | Description                    |
| :-------------- | :-------------- | :----------------------------- |
| `name`          | `string`        | **Required**.                  |
| `price`         | `number`        | **Required**.                  |
| `brand`         | `string`        | **Required**.                  |
| `taxPercentage` | `number`        | **Required**.                  |
| `stock`         | `number`        | **Required**                   |
| `infos`         | `Array<Object>` | **Optional**                   |
| `picture`       | `file`          | **Required** `.png .jpeg .jpg` |

#### Response:

```json
{
	"id": "63c1e36ec872a92f79832da7",
	"name": "Atum",
	"price": 8,
	"brand": "Horizontal",
	"taxPercentage": 10,
	"stock": 10,
	"pictureUrl": "http://localhost:5000/files/1673651054322-13107.jpeg",
	"infos": []
}
```

#

#### Update a product

```http
PUT /products/:id
```

#### Request:

| Body            | Type            | Description                   |
| :-------------- | :-------------- | :---------------------------- |
| `name`          | `string`        | **Required**.                 |
| `price`         | `number`        | **Required**.                 |
| `brand`         | `string`        | **Required**. valid image url |
| `taxPercentage` | `number`        | **Required**.                 |
| `stock`         | `number`        | **Required** valid brand id.  |
| `infos`         | `Array<Object>` | **Optional**                  |

#### Params:

| Params | Type     | Description            |
| :----- | :------- | :--------------------- |
| `id`   | `string` | **Required**. valid id |

#### Response:

```json
{
	"id": "63c05fab4396b3c66fca9c4e",
	"name": "celular3",
	"price": 312,
	"brand": "iphone",
	"taxPercentage": 30,
	"stock": 200,
	"pictureUrl": "http://localhost:5000/files/2f671b1956efc250f7a900f5daed64bb",
	"infos": []
}
```

#

#### Update a product picture

```http
PUT /products/picture/:id
```

#### Request:

| Body      | Type   | Description                     |
| :-------- | :----- | :------------------------------ |
| `picture` | `file` | **Required**. `.png .jpeg .jpg` |

#### Params:

| Params | Type     | Description            |
| :----- | :------- | :--------------------- |
| `id`   | `string` | **Required**. valid id |

#### Response:

```json
{
	"id": "63c05fab4396b3c66fca9c4e",
	"name": "celular3",
	"price": 312,
	"brand": "iphone",
	"taxPercentage": 30,
	"stock": 200,
	"pictureUrl": "http://localhost:5000/files/2f671b1956efc250f7a900f5daed64bb",
	"infos": []
}
```

#

#### Delete a product

```http
DELETE /products/:id
```

#### Params:

| Params | Type     | Description   |
| :----- | :------- | :------------ |
| `id`   | `string` | **Required**. |

#

#### Get user orders

```http
GET /order
```

> **Note:** To populate the client, this route is returning all requests instead of user requests.

#### Response:

```json
[
	{
		"id": 1,
		"totalPrice": "80",
		"totalProducts": 30,
		"createdAt": "2023-01-13T22:02:17.362Z",
		"products": [
			{
				"productId": "63c0c479581bb7e9ba7fd41f",
				"quantity": 10,
				"name": "Mesa",
				"price": 2,
				"brand": "Multi-channelled",
				"taxPercentage": 10,
				"stock": 10,
				"pictureUrl": "http://localhost:5000/files/1673577593393-13107.jpeg",
				"infos": []
			}
		]
	}
]
```

#

#### Create a order

```http
POST /order
```

#### Request:

| Body       | Type            | Description   |
| :--------- | :-------------- | :------------ |
| `products` | `Array<Object>` | **Required**. |

| Products[0] | Type     | Description   |
| :---------- | :------- | :------------ |
| `id`        | `string` | **Required**. |
| `quantity`  | `number` | **Required**. |

#### Example:

```json
{
	"products": [
		{
			"id": "63c1e31ec872a92f79832da2",
			"quantity": 2
		},
		{
			"id": "63c1e36ec872a92f79832da7",
			"quantity": 1
		}
	]
}
```

</br>

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

##### Without Docker:

##### back-end (api):

`DATABASE_URL = postgres://username:password@hostname:5432/databasename`

`MONGODB_URL = mongodb://localhost:27017`

`PORT = 5000 or any port you want`

`JWT_SECRET = any secret string`

`BASE_URL = http://localhost:[PORT]`

`STORAGE_TYPE = local`

##### front-end (client):

`VITE_API_URL = http://localhost:[PORT] or http://localhost:5000`

#

##### With Docker:

##### back-end (api):

`STORAGE_TYPE = local`

`BASE_URL = http://localhost:[PORT]`

`JWT_SECRET = any secret string`

`DATABASE_URL = postgres://postgres:postgres@postgres-db:5432/inovia-project`

`POSTGRES_USER = postgres`

`POSTGRES_PASSWORD = postgres`

`POSTGRES_DB = vercel-project`

`MONGODB_URL = mongodb://mongo-db:27017`

`MONGO_INITDB_ROOT_USERNAME = root`

`MONGO_INITDB_ROOT_PASSWORD = root`

##### front-end (client):

`VITE_API_URL = http://localhost:8080/api`

</br>

## Run Locally

> Remember to create a .env file with the environment variables in /apps/api and /apps/client folders.

##### Without Docker:

Clone the project

```bash
  git clone git@github.com:LucasAlvsz/inovia-project.git
```

Go to the project directory

```bash
  cd inovia-project/
```

Install the dependencies

```bash
  npm install
```

Run the app

```bash
  npm run start
```

> The app will be running on http://localhost:4173/ by default.

#

##### With Docker:

Clone the project

```bash
  git clone git@github.com:LucasAlvsz/inovia-project.git
```

Go to the project directory

```bash
  cd inovia-project/
```

Run the app

```bash
  docker-compose up
```

> The app will be running on http://localhost:8080/ by default.

</br>

## Authors

-   [@LucasAlvsz](https://www.github.com/LucasAlvsz) 🪐

<br/>

#

<a  href="mailto:contato.lucasalv@gmail.com" target="_blank"><img src="https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg"></a>
