var listUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=10&format=json&nojsoncallback=1';
var sizesUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=ca370d51a054836007519a00ff4ce59e&format=json&nojsoncallback=1&photo_id=';

function getimg(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', listUrl, true);
    xhr.send();
    xhr.onload = function(){
        var data = JSON.parse(this.responseText);
        data.photos.photo.forEach(function(item){
            getSizes(item.id);
        });
    }
}

function getSizes(photo_id){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', sizesUrl + photo_id, true);
    xhr.send();
    xhr.onload = function(){
        var data = JSON.parse(this.responseText);
        var large = data.sizes.size.find(function(s){ return s.label === 'Large'; });
        if(large) add_img(large.source);
    }
}

function add_img(src){
    var gal = document.getElementById("gallery");
    var img = document.createElement("img");
    img.setAttribute("src", src);
    gal.appendChild(img);
}