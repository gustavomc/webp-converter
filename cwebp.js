var path   = require('path');
//get os type then return path of respective platform library
var knowos = function () {
  if (process.platform === 'darwin') {
    return path.join(__dirname, '/lib/libwebp_osx/bin/cwebp');//return osx library path
  } else if (process.platform === 'linux') {
    return path.join(__dirname, '/lib/libwebp_linux/bin/cwebp');//return linux library path
  } else if (process.platform === 'win32') {
    if (process.arch === 'x64') {
      return path.join(__dirname, '/lib/libwebp_win64/bin/cwebp.exe');//return windows 64bit library path
    } else {
      return path.join(__dirname, '/lib/libwebp_win32/bin/cwebp.exe');//return windows 32(X86)bit library path
    }
  } else {
    console.log('Unsupported platform:', process.platform, process.arch);//show unsupported platform message 
  }
};

module.exports = knowos;