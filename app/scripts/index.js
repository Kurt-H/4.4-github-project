var $ = require('jQuery');
var handlebars = require('handlebars');

// var githubtoken = require('./githubapikey.js');
//
// if (githubtoken !== undefined){
//   $.ajaxSetup({
//     headers: {
//       'Authorization': 'token ' + githubtoken.token
//     }
//   });
// }


var baseUrl = 'https://api.github.com/';
var profileUrl = baseUrl + 'users/Kurt-H';
console.log(profileUrl);
var repoUrl = baseUrl + 'users/Kurt-H/repos';
console.log(repoUrl);

var profileTemplate = $('#profile-template').html();
var templateP = handlebars.compile(profileTemplate);

var repositoriesTemplate = $('#repositories-template').html();
var templateR = handlebars.compile(repositoriesTemplate);

$.ajax(profileUrl).done(function(response){
  var html = templateP(response);
  $('#profile-column').append(html);
});

/** this works for one repository, but need to iterate **/
$.ajax(repoUrl).done(function(repository){
  var html = templateR(repository[0]);
  $('#repositories-column').append(html);
});

/**need to create an object to pass to template to iterate for object within array


function getRepositories(){
  $.ajax(repoUrl).done(function(reponse){
    response.forEach(function(repository){
      displayRepository(repository);
    });
  });
}

function displayRepository(repository){
  var html = templateR(repository[0]);
  $('#repositories-column').append(html);
}
**/
