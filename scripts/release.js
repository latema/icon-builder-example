const fs = require('fs-extra');
const path = require('path');
const execSync = require('child_process').execSync;

const exec = command => execSync(command, { stdio: 'inherit' });

const PACKAGES_PATH = path.join(__dirname, '..', 'build');

// fs.readdirSync(PACKAGES_PATH).forEach((pack) => {
//   const packPath = path.join(PACKAGES_PATH, pack);
//   exec(`cd ${packPath} && npm publish`);
// });

const REACT_ICONS_PATH =  PACKAGES_PATH + '/react-icons';
fs.readdirSync(REACT_ICONS_PATH).forEach((file) => {
  // local publish: copy all created icons + scripts to icons directory
  fs.copySync(REACT_ICONS_PATH + '/' + file, '../../icons/' + file)
});
