This is a repo meant to highlight a bug that I found in Parcel.

The issue occurs when there are multiple entry files in your build, and are at different levels in the repository. Any entryFiles that are nested further than the top most entry file will fail to dynamically import modules (`import()`).

To run this repro.

First run:
```
npm install; node server;
```

Then open `localhost:3000/index.html` in your browser and check the console. You'll see that package2.js is trying to load `/dist/nested/dynamically-imported2.72f605e3.js` instead of `/dist/dynamically-imported2.72f605e3.js` which is where the built file is located.