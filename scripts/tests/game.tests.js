beforeAll (() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "UTF-8");
    document.open();
    document.write(fileContents);
    document.close();
})