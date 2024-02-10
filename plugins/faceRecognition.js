const API_TOKEN = "dae0806746714c9dbb7ba0a3dcf51e41";
function emotions(image, callback) {
  var myHeaders = new Headers();
  myHeaders.append("token", API_TOKEN);

  var formdata = new FormData();

  if (typeof image == "string" && image.indexOf("https://") == 0)
    formdata.append("photo", image);
  else formdata.append("photo", image, "file");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch("https://api.luxand.cloud/photo/emotions", requestOptions)
    .then((response) => response.json())
    .then((result) => callback(result))
    .catch((error) => console.log("error", error));
}
