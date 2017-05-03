$(function() {

  const electron = require('electron');
  const shell = electron.shell;

  $('.job-board').on('click', 'a', function (e) {
    e.preventDefault();
    shell.openExternal(e.target.href);
  });

})
