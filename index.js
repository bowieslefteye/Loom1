const http = require('http'),
  rightNow = new Date().toLocaleString(),
  content = `<!doctype html>
  <html>
    <body>
      <h1> Inertia is a property of matter </h1>
      <p>
        The time is: ${rightNow}
      </p>
    </body>
 
      <body>
   <div style="position:  absolute; bottom: 5px; background-color: white">
<h2> Characters in The Lord of The Rings </h2>
 <ul>
   <li>   <b> Frodo Baggins </b>  </li>
   <li>   <b> Bilbo Baggins </b>  </li>
   <li>   <b> Gandalf '<i> (the Grey, later the White) </i>' </b> </li>
   <li>  <b> Samwise Gamgee </b>  </li>
   <li>  <b> Aragorn
  <i> Ranger of the North
  </i> </b>  </li>
   <li>  <b> Arewn </b>  </li>
   <li> <b> Elrond </b>  </li>
   <li>   <b> Galadriel </b>  </li>
   <li>   <b> Legolas </b>  </li>
<li>  <b> Bro-omir </b>  </li>
<li>  <b> Gimli  </b> <i> The one, the only boss-man RHYS DAVIES </i> </li>
</ul>
<p> </p>
<h5> Characters I haves no cheezburger for, or just people that make Middle-Earth a more hostile place to live:</h5>


<p>

<ul>  <li> <b>  Gollum-Smegol </b> </li>

<li>  <b> Saruman  </b> </li>


<h6> Badd-er Beings: True Evil alignment? </h6>


<p> </p>
<ul>
   <li>  <b> Balrog </b> </li>
   <li>  <b> Nazgûl </b> </li>
   </ul>
</div

    </body>

  </html>`;


const server = http.createServer((req, res) => {
  res.end(content);
});

server.listen(process.env.PORT || 3000);
