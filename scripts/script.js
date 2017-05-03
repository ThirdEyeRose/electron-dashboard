$(function() {

  // Import access to electron's UI
  const electron = require('electron');
  const shell = electron.shell;

  // Make sure that all job board links are opened in regular browser
  $('.job-board').on('click', 'a', function (e) {
    e.preventDefault();
    shell.openExternal(e.target.href);
  });

})
