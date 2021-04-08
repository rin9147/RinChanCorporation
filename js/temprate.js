function navbar(){
    var html = "";
    html += '<nav class="navbar navbar-expand-lg navbar-dark bg-dark">';
    html += '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>';
    html += '<div class="collapse navbar-collapse" id="navbarNavAltMarkup"><div class="navbar-nav">';
    html += '<a class="nav-item nav-link active" href="">Home</a>';
    html += '<a class="nav-item nav-link" href="#scenery">Scenery</a>';
    html += '<a class="nav-item nav-link" href="#sector">Sector Files</a>';
    html += '<a class="nav-item nav-link" href="#metar">Get METAR</a>';
    html += '<a class="nav-item nav-link" href="#license">License</a>';
    html += '<a class="nav-item nav-link" href="#contact">Contact</a>';
    html += '</div></div></nav>';
    document.write(html);
}

function footer(){
    var foot = "";
    foot += '<footer>';
    foot += '<div class="fixed-bottom text-light bg-dark text-center">';
    foot += 'Copyright(c) 2021 rin9147';
    foot += '</div></footer>';
    document.write(foot);    
}