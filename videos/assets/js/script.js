class Multimedia{
    constructor(url){
        const _url = url;
        this.videoYoutube = () => _url;
    }

    get url(){
        return this.videoYoutube();
    }

    set setInicio(nuevaMusica){
        this.videoYoutube = () => nuevaMusica;
    }
}
class Reproductor extends Multimedia {
    constructor(url, id) {
        console.log("constructor url : " + url);
        console.log("constructor id  : " + id);
        
        super(url);
        const _id = id;
        this.getId = () => _id
    }

    get id() {
        return this.getId();
    }
    
    playMultimedia(){
        console.log("this.url: "+ this.url);
        console.log("this.id : "+ this.id);

        Youtube(this.url, this.id);
    }

    setInicio(tiempo = 0) {

        const idHTML = document.getElementById(this.id);
        
        if (!idHTML) return;
        
        idHTML.setAttribute("src", `${this.url}?start=${tiempo}`);

        console.log("Este método es para realizar un cambio en la URL del video");
    }
}


const Youtube = (() => {
    {
        //cree una función privada que reciba la url del video y el id de la etiqueta iframe, para así poder mostrar los videos en el documento HTML.
        const agregarMedio = (url, id) => {
            console.log("URL : " + url);
            console.log("ID : " +  id);
            
            // .setAttribute("atributoHTML", "ValorDelAtributoHTML")
            const idHTML = document.getElementById(id);
            
            if (!idHTML) return;
            
            idHTML.setAttribute("src", url);
        }

            // Closure de una función!
            const agregarMedioPublica = (url, id) => agregarMedio(url, id);
  
            return agregarMedioPublica;
    }
})();



const URLmusica = "https://www.youtube.com/embed/dpmAP38r36I";
const URLPelicula = "https://www.youtube.com/embed/HrsLMofiBl8";
const URLSerie = "https://www.youtube.com/embed/dDTs4e1C4yo";

let objMusica = new Reproductor(URLmusica, "iframeMusica");
let objPelicula = new Reproductor(URLPelicula, "iframePelicula");
let objSerie = new Reproductor(URLSerie, "iframeSerie");

objMusica.playMultimedia();
objPelicula.playMultimedia();
objSerie.playMultimedia();
