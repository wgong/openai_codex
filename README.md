# Build and Deploy Your Own ChatGPT AI Application That Will Help You Code
![Open AI CodeGPT](https://i.ibb.co/LS4DRhb/image-257.png)

- [YouTube video](https://www.youtube.com/watch?v=2FeymQoKvrk)

## Steps

### [00:00:00](https://www.youtube.com/watch?v=2FeymQoKvrk&t=0s) Intro

### [00:02:29](https://www.youtube.com/watch?v=2FeymQoKvrk&t=149s) Demo

### [00:04:54](https://www.youtube.com/watch?v=2FeymQoKvrk&t=294s) Setup

Download and install Node from https://nodejs.org/en/
```
node -v
v18.12.1
```

### [00:11:26](https://www.youtube.com/watch?v=2FeymQoKvrk&t=686s) ChatGPT Frontend 

- Create client using Vite
```
npm create vite@latest client --template vanilla
# select framework=Vanilla
# select variant = JavaScript

cd client
npm install
npm run dev
```

copy assets\*.svg, style.css

create `index.html`

create `script.js` to replace main.js

### [00:25:58](https://www.youtube.com/watch?v=2FeymQoKvrk&t=1558s) Create server to call OpenAI API

```
mkdir server
cd server
npm init -y  # create package.json
npm install cors dotenv express nodemon openai
```

create `server.js`

```
npm run server
```


### [00:50:57](https://www.youtube.com/watch?v=2FeymQoKvrk&t=3057s) Deployment

#### push code
- At [GitHub](http://github.com), create a repo called `codex`
- go to `client/server` parent folder locally

```
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/<userid>/codex.git
```

Add and ensure `.gitignore` file having `.env` and `node_modules` listed
```
git status  # .env and node_modules are not listed
git push -u origin main
```

#### deploy serer
[Render](http://render.com) is a unified cloud to build and run all your apps and websites with free TLS certificates, a global CDN, DDoS protection, private networks, and auto deploys from Git

- select github `codex` repo

- make sure to get server endpoint URL

#### deploy client

[Vercel](http://vercel.com) is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration

- make sure to update fetch URL with deployed `render` URL in `script.js` and push to github.

## Launch your development career with project-based coaching - https://www.jsmastery.pro

- JS mastery
- Filmpire Movie React app

