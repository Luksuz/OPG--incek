
async function getImages() {
    const response = await fetch(`https://eipf2exv0c.execute-api.us-east-1.amazonaws.com/sincek/images`, {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        },
    });
    return response.json();

}

async function deleteImage(imageId, token) {
    const confirm = window.confirm("Jeste li sigurni da želite obrisati ovu Ponudu?");
    if(confirm){
    const response = await fetch(`https://eipf2exv0c.execute-api.us-east-1.amazonaws.com/sincek/images?token=${token}&id=${imageId}`, {
        method: "DELETE",
        headers: {
        "Content-Type": "application/json",
        },
    });
    if(response.status === 200){
        alert("Ponuda uspješno obrisana, osvježite stranicu da vidite ažuriranu ponudu!");
        return response.json();
    }
    else{
        alert("Neuspješno brisanje ponude, dogodila se greška!");
    }
}}

async function uploadImage(imageFile, name, price, description, token) {

    let formData = new FormData();

    formData.append('image', imageFile);
    formData.append('name', name);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('token', token);

    const response = await fetch(`https://eipf2exv0c.execute-api.us-east-1.amazonaws.com/sincek/images`, {
        method: "POST",
        headers: {
            "Content-Type": "multipart/form-data",
        },
        body: formData,
    });
    return response.json();
}


export { getImages, deleteImage, uploadImage };