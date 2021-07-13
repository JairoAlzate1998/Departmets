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
        default:
            alert("Ingresa un departamento valido");
            break;
    }
  };

boton.onclick = function () {
    getInfo();
  };