async function createarticle(event) {
    event.preventDefault();
    const articleTitle = event.target["articleTitle"].value;
    const articleText = event.target["articleText"].value;
    const file = document.getElementById("image");
    const files = event.target["image"].files;
    const formData = new FormData();

    formData.append("image", files[0]); 

    console.log(formData.get("image"))
    
    const rawResponse = await fetch('/api/upload_image', {
        method: 'POST',
        body: formData
    })

    const res = await rawResponse.json(); 

    console.log(res)

    var options = {
        title: articleTitle,
        text: articleText,
        image: res.filename
    };

    fetch('/api/createarticle', {
            method: 'POST',
            body: JSON.stringify(options),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).then(
            console.log("Created new article")
        );
}