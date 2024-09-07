async function innerBlog() {
    readJSON("./articole.json");
    let response = await fetch("./articole.json");
    let parsed = await response.json();

    var i = 0;

    parsed.forEach(element => {
        if (parsed[i+2] != null) {
            document.getElementById("articole").innerHTML = document.getElementById("articole").innerHTML + `
            <div class="serviciiBody card-group">
            <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">`+ parsed[i].title +`</h5>
            <h6 class="card-subtitle mb-2 text-muted">`+ parsed[i+1].subtitle +`</h6>
            <p class="card-text">`+ parsed[i].description +`</p>
            </div>
            </div>
            <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">`+ parsed[i+1].title +`</h5>
            <h6 class="card-subtitle mb-2 text-muted">`+ parsed[i+1].subtitle +`</h6>
            <p class="card-text">`+ parsed[i+1].description +`</p>
            </div>
            </div>
            <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">`+ parsed[i+2].title +`</h5>
            <h6 class="card-subtitle mb-2 text-muted">`+ parsed[i+1].subtitle +`</h6>
            <p class="card-text">`+ parsed[i+2].description +`</p>
            </div>
            </div>
        </div>`;  
    } else if (parsed[i+1] != null) {
            document.getElementById("articole").innerHTML = document.getElementById("articole").innerHTML + `
                <div class="serviciiBody card-group">
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                        <h5 class="card-title">`+ parsed[i].title +`</h5>
                        <h6 class="card-subtitle mb-2 text-muted">`+ parsed[i].subtitle +`</h6>
                        <p class="card-text">`+ parsed[i].description +`</p>
                        </div>
                    </div>
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                        <h5 class="card-title">`+ parsed[i+1].title +`</h5>
                        <h6 class="card-subtitle mb-2 text-muted">`+ parsed[i+1].subtitle +`</h6>
                        <p class="card-text">`+ parsed[i+1].description +`</p>
                        </div>
                    </div>
                </div>`
        } else if (parsed[i] != null) {
            document.getElementById("articole").innerHTML = document.getElementById("articole").innerHTML + `
            <div class="serviciiBody card-group">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">`+ parsed[i].title +`</h5>
                    <h6 class="card-subtitle mb-2 text-muted">`+ parsed[i].subtitle +`</h6>
                    <p class="card-text">`+ parsed[i].description +`</p>
                    </div>
                </div>
            </div>`
        }

        i += 3;
    })
}

function readJSON(path) { 
    fetch(path) 
        .then(response => response.json())
        .then(parsed => {})
} 

innerBlog();
