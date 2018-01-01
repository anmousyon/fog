var l = location
var url = l.href
var id = url.substring(26,35)
var base_url = "http://goodallserver.us-east-1.elasticbeanstalk.com/Movie/";

var xhr = new XMLHttpRequest();

xhr.open("GET", base_url + "?imdb_id=" + id, false);
xhr.send();

 l.href = "http://goodallserver.us-east-1.elasticbeanstalk.com/"