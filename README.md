# Random Color Generator

Fullstack-Project with Node.js, Express, Typescript

## Features

- **Backend API** with Express.js and TypeScript
- **Random Color** in three formats:
  - Hexadecimal (HEX)
  - RGB
  - HSL
- **Frontend** mit HTML, CSS und Vanilla JavaScript

### Install dependencies

```
npm init -y
npm i express
npm install --save-dev typescript @types/node @types/express
```

### Configure package.json

```
"scripts": { "build": "tsc" }
{ "start": "npm run build && node ./dist/index.js" }
```

### Install CORS

```
npm install cors
npm install --save @types/cors
```

### Setup environment variable

```
npm install dotenv --save
```

Create a new `.env` file:

```env
PORT=5555
```

#### Install nodemon

```
npm install nodemon --save-dev
```

and add to package.json

```
"scripts": { "dev": "nodemon your-main-file.js" }
```

**Note**: This is a learning project and should not be used in a production environment without additional security measures.
