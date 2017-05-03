$(function() {

  // Import access to electron's UI
  const electron = require('electron');
  const shell = electron.shell;

  // Make sure that all job board links are opened in regular browser
  $('.job-board').on('click', 'a', function (e) {
    e.preventDefault();
    shell.openExternal(e.target.href);
  });

  var zapier_feed_url = 'https://zapier.com/jobs/feeds/latest/';

  //Get job feed from Zapier
  $.get(zapier_feed_url, function(response){

    var feed = $(response);

    // Find each item in the RSS feed
    feed.find('item').each(function(){
      var item = $(this);

      // Get job information
      var company_name = 'Zapier';
      var job_title = item.find('title').text();
      var job_url = item.find('link').text();

      li = formatJobListing(company_name, job_url, job_title);

      li.appendTo($('ul.job-board'));
    });
  });

  function formatJobListing(company_name, job_url, job_title) {
    // Create <li> to store job listing.
    var li = $('<li class="job-item"></li>');

    // Add the company name to  the job listing
    li.append('<h2 class="company-name">' + company_name +
      '</h2><p class="job-title"><a href="' + job_url + '">'
      + job_title + '</a></p>');

    return li;
  }

})
