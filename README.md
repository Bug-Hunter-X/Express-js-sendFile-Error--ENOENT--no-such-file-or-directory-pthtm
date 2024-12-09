# Node.js Express.js sendFile Error: ENOENT
This repository demonstrates a common error in Node.js Express.js applications where `res.sendFile` throws an error when attempting to serve a file that does not exist.  The error message is typically `ENOENT: no such file or directory`. This example shows how to reproduce the error and provides a solution to handle this scenario gracefully.

## Reproducing the Error
Clone this repository and run `npm install`. Then run `node bug.js`. You will see the server start but receive an error in the console if you try to access the root path in your browser.