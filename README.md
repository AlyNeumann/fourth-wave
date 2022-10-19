## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# fourth-wave


Deployment fixes - 
next.config.js - set swcMinify: false
added to devDependencies - "node-pre-gyp": "0.12.0"
added -   "peerDependencies": {
    "react": "^15.5.4 || ^16.0.0 || ^17.0.0 || ^18.0.0",
    "react-dom": "^15.5.4 || ^16.0.0 || ^17.0.0 || ^18.0.0"
  },
  added -  "engines" : { 
    "npm" : "8.14.0",
    "node" : "16.6.1" (should be 14.19.3)
  }

  //vercel - "node": "16.15.0"
  