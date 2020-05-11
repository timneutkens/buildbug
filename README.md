# NextJS build bugs

# Bug-1

```
$ yarn build
```

causes

```
$ next build
Creating an optimized production build  

Compiled successfully.

Automatically optimizing pages ...
Error occurred prerendering page "/[...slugs]". Read more: https://err.sh/next.js/prerender-error:
Error: Minified React error #130; visit https://reactjs.org/docs/error-decoder.html?invariant=130&args[]=object&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.

Error occurred prerendering page "/404". Read more: https://err.sh/next.js/prerender-error:
Error: Minified React error #130; visit https://reactjs.org/docs/error-decoder.html?invariant=130&args[]=object&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.

Error occurred prerendering page "/". Read more: https://err.sh/next.js/prerender-error:
Error: Minified React error #130; visit https://reactjs.org/docs/error-decoder.html?invariant=130&args[]=object&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.

Error occurred prerendering page "/blog". Read more: https://err.sh/next.js/prerender-error:
Error: Minified React error #130; visit https://reactjs.org/docs/error-decoder.html?invariant=130&args[]=object&args[]= for the full message or use the non-minified dev environment for full errors and additional helpful warnings.

> Build error occurred
Error: Export encountered errors
    at _default (/Users/ivankleshnin/Projects/buildbug/node_modules/next/dist/export/index.js:19:1164)
    at processTicksAndRejections (internal/process/task_queues.js:97:5)
    at async build (/Users/ivankleshnin/Projects/buildbug/node_modules/next/dist/build/index.js:36:218)
error Command failed with exit code 1.

```
