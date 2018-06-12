const boton = document.getElementById("btn");
boton.addEventListener("click", () => {
  //para guardar tweet ingresado por el usuario
  let tweets = document.getElementById("tweet").value;
  //contenedor donde dejare mis tweets en html
  const containerMessage = document.getElementById("containerMessage");
  //crear un div contenedor de todos los nuevos tweets
  const newTweets = document.createElement("div");
  //esto crea un nodo donde ira el tweet
  let textNewTweet = document.createTextNode(tweets);
  //esta variable crea un parrafo que contiene el tweet ingresado
  const contenedorElement = document.createElement("p");
  //aqui declaramos que la variable texNewTweet es hijo del contenedorElement
  contenedorElement.appendChild(textNewTweet);
  //y aqui declaramos que contenedorElement es hijo de newTweets (el div donde iran los parrafos con los tweets ingresados)
  newTweets.appendChild(contenedorElement);
  //y por ultimo declaramos que newTweets es hijo de containerMessage, donde va todo lo anterior(dentro de un col-12)
  containerMessage.appendChild(newTweets);
})