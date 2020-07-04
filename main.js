var xhr = new XMLHttpRequest();

xhr.open("GET", "https://eu.api.blizzard.com/data/wow/guild/silvermoon/silverwing-solace?namespace=profile-eu");
xhr.send();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = this.responseText;
    }
};

