const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = (name) => {
  fs.writeFile(name, (err) => {
    if(err) throw err;
  });
};

module.exports.mkdir = (name) => {
  fs.mkdir(name, (err) => {
    if(err) throw err;
  });
};
