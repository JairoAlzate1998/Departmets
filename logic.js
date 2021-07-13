let boton = document.getElementById("boton");



const getInfo = () => {
    let departamento = document.getElementById("departamento").value;
    console.log(departamento);
    switch (departamento) {
        case "ama":
            boton.setAttribute("href", "https://es.wikipedia.org/wiki/Leticia_(Colombia)");
            break;

        case "ant":
            boton.setAttribute("href", "https://es.wikipedia.org/wiki/Medell%C3%ADn");
            break;
            
        case "ara":
            boton.setAttribute("href", "https://es.wikipedia.org/wiki/Arauca_(Arauca)");
            break;

        case "atl":
            boton.setAttribute("href", "https://es.wikipedia.org/wiki/Barranquilla");
            break;

        case "bol":
            boton.setAttribute("href", "https://es.wikipedia.org/wiki/Cartagena_de_Indias");
            break;

        case "boy":
            boton.setAttribute("href", "https://es.wikipedia.org/wiki/Tunja");
            break;

        case "cal":
            boton.setAttribute("href", "https://es.wikipedia.org/wiki/Manizales");
            break;

        case "caq":
            boton.setAttribute("href", "https://es.wikipedia.org/wiki/Florencia_(Caquet%C3%A1)");
            break;

        case "cas":
            boton.setAttribute("href", "https://es.wikipedia.org/wiki/Yopal");
            break;

        case "cau":
            boton.setAttribute("href", "https://es.wikipedia.org/wiki/Popay%C3%A1n");
            break;

        case "ces":
            boton.setAttribute("href", "https://es.wikipedia.org/wiki/Valledupar");
            break;

        case "cho":
            boton.setAttribute("href", "https://es.wikipedia.org/wiki/Quibd%C3%B3");
            break;

        case "cor":
            boton.setAttribute("href", "https://es.wikipedia.org/wiki/Monter%C3%ADa");
            break;

        case "cun":
            boton.setAttribute("href", "https://es.wikipedia.org/wiki/Bogot%C3%A1");
            break;

        case "gua":
            boton.setAttribute("href", "https://es.wikipedia.org/wiki/In%C3%ADrida");
            break;

        case "guav":
            boton.setAttribute("href", "https://es.wikipedia.org/wiki/San_Jos%C3%A9_del_Guaviare");
            break;

        case "hui":
            boton.setAttribute("href", "https://es.wikipedia.org/wiki/Neiva");
            break;

        case "lag":
            boton.setAttribute("href", "https://es.wikipedia.org/wiki/Riohacha");
            break;

        case "mag":
            boton.setAttribute("href", "https://es.wikipedia.org/wiki/Santa_Marta_(Colombia)");
            break;

        case "met":
            boton.setAttribute("href", "https://es.wikipedia.org/wiki/Villavicencio");
            break;

        case "nar":
            boton.setAttribute("href", "https://es.wikipedia.org/wiki/Pasto_(Colombia)");
            break;

        case "nor":
            boton.setAttribute("href", "https://es.wikipedia.org/wiki/C%C3%BAcuta");
            break;

        case "put":
            boton.setAttribute("href", "https://es.wikipedia.org/wiki/Mocoa");
            break;

        case "qui":
            boton.setAttribute("href", "https://es.wikipedia.org/wiki/Armenia_(Quind%C3%ADo)");
            break;

        case "ris":
            boton.setAttribute("href", "https://es.wikipedia.org/wiki/Pereira");
            break;

        case "sap":
            boton.setAttribute("href", "https://es.wikipedia.org/wiki/Isla_de_San_Andr%C3%A9s_(Colombia)");
            break;

        case "san":
            boton.setAttribute("href", "https://es.wikipedia.org/wiki/Bucaramanga");
            break;

        case "suc":
            boton.setAttribute("href", "https://es.wikipedia.org/wiki/Sincelejo");
            break;

        case "tol":
            boton.setAttribute("href", "https://es.wikipedia.org/wiki/Ibagu%C3%A9");
            break;

        case "val":
            boton.setAttribute("href", "https://es.wikipedia.org/wiki/Cali");
            break;

        case "vau":
            boton.setAttribute("href", "https://es.wikipedia.org/wiki/Mit%C3%BA");
            break;

        case "vic":
            boton.setAttribute("href", "https://es.wikipedia.org/wiki/Puerto_Carre%C3%B1o");
            break;
        default:
            alert("Ingresa un departamento valido");
            break;
    }
  };

boton.onclick = function () {
    getInfo();
  };