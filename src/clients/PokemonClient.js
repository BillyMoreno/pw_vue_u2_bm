import axios from "axios"; /*Permite usar desde la libreria axios*/

/*Exp lambda en js*/
/* dsd cualquier lugar q yo llame al metdo async debe esperar el response */
const consumirApi = async (id) => {
    const respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.data); /* El metodo hace q se consuma una api y la sintaxis es esta en general */
    console.log(respuesta);
    return respuesta;
}

/* Asi se exporta el metodo q llama al api nunca se exporta su cuerpo */
export async function consumirApiFacade() {
    return await consumirApi();
}

function obtenerAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const obtenerVectorNumerico = () => {
    const vector = [];
    for (let i = 0; i < 4; i++) {
        vector[i] = obtenerAleatorio(1, 600);
    }
    return vector;
}

const obtenerVectorPokemon = (vectorNumerico) => {
    const data1 = consumirApi(vectorNumerico[0]);
    const data2 = consumirApi(vectorNumerico[1]);
    const data3 = consumirApi(vectorNumerico[2]);
    const data4 = consumirApi(vectorNumerico[3]);


    const obj1 = {
        nombre: data1.name,
        id: data1.id
    }

}