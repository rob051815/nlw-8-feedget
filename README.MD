
  <img alt="Feedget Mockup" src=".github/mockup.png" width="100%">  
  
---

## Layout

You can see the project layout through the link below:

- [Feedback Widget - Figma](https://www.figma.com/community/file/1102912516166573468)



## Technologies

- [Vitejs](https://vitejs.dev/)
- [ReactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Express](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)



## Get started

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/package/npm)
- [For mobile -> Expo CLI](https://docs.expo.dev/workflow/expo-cli)

### Server

```bash
# From the project root folder access the 'server' folder
$ cd server
# Install the dependencies
$ npm i
# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables.
$ cp .env.example .env
# Run migrations for postgres or another prisma supported database
$ npx prisma migrate dev
# Start the server
$ npm run dev
```

### Web

**With the server running**

```bash
# From the project root folder access the 'web' folder
$ cd web
# Install the dependencies
$ npm install
# Make a copy of '.env.local.example' to '.env.local'
$ cp .env.local.example .env.local
# Start the application
$ npm run dev
```

### Mobile

**With the server running**

```bash
# From the project root folder access the 'mobile' folder
$ cd mobile

# Install the dependencies
$ npm i

# start the metro bundle
$ expo start
```