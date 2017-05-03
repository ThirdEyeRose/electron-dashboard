$(function() {

  // Import access to electron's UI
  const electron = require('electron');
  const shell = electron.shell;

  // Make sure that all job board links are opened in regular browser
  $('.job-board').on('click', 'a', function (e) {
    e.preventDefault();
    shell.openExternal(e.target.href);
  });

  //Get job feed from Zapier
  $.get('https://zapier.com/jobs/feeds/latest/', function(response){

    var feed = $(response);

    // Find each item in the RSS feed
    feed.find('item').each(function(){
      var item = $(this);

      // Get job information
      var company_name = 'Zapier';
      var job_title = item.find('title').text();
      var job_url = item.find('link').text();

      // Create <li> to store job listing.
      var li = $('<li class="job-item"><a></a></li>');

      // Add job URL to the job listing
      li.find('a')
        .attr('href', job_url);

      // Add the company name to  the job listing
      li.find('a').append('<h2 class="company-name">' + company_name +
        '</h2><p class="job-title">' + job_title + '</p>');

      li.appendTo($('ul.job-board'));
    });
  });

})
