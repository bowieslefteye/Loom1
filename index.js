const http = require('http'),
  rightNow = new Date().toLocaleString(),
  content = `<!doctype html>
  <html>
    <body>


      <h1> Inertia is a property of matter </h1>


      <img src="http://25.media.tumblr.com/tumblr_m4wxavw1VU1rtcl10o3_500.gif" height="20%"
      width="30%" alignment="top"


      <p>  </p>
      <p>  </p>

<iframe width="560" height="315" src="https://www.youtube.com/embed/_-BeS8zbB6o" frameborder="0" allowfullscreen></iframe>


      <p>
        The time is: ${rightNow}
      </p> </body>

      <body>



<h2> Characters in The Lord of The Rings </h2>
    <ol>
       <li> Frodo Baggins </li>
       <li> Bilbo Baggins </li>
       <li> Gandalf The Grey </li>
       <li> Gandalf The White </li>
       <li> Samwise Gamgee </li>
       <li> Aragorn Ranger of the North </li>
       <li> Arewn </li>
       <li> Elrond </li>
       <li> Galadriel </li>
       <li> Legolas </li>
       <li> Bro-omir </li>
       <li> Gimli, The one, the only boss-man RHYS DAVIES </li>
       </ol>


<p> </p>


<h5> Characters I haves no cheezburger for, or just people that make Middle-Earth a more hostile place to live:</h5>


<p>


<ol>  <li> <b>  Gollum-Smegol </b> </li>


<li>  <b> Saruman  </b> </li>

</ol>

<h6> Badd-er Beings: True Evil alignment? </h6>


<p> </p>




<ul>
   <li>  <b> Balrog </b> </li>
   <li>  <b> Nazgûl </b> </li>
   </ul>



    </body>


  </html>`;


const server = http.createServer((req, res) => {
  res.end(content);
});

server.listen(process.env.PORT || 3000);
