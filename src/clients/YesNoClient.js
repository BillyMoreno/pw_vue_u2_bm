import axios from "axios"; /*Permite usar desde la libreria axios*/

/*Exp lambda en js*/
/* dsd cualquier lugar q yo llame al metdo async debe esperar el response */
const consumirApi = async() => {
    const respuesta = await axios.get('https://yesno.wtf/api').then(r => r.data); /* El metodo hace q se consuma una api y la sintaxis es esta en general */
    console.log(respuesta);
    return respuesta;
}

/* Asi se exporta el metodo q llama al api nunca se exporta su cuerpo */
export async function consumirApiFacade(){
    return await consumirApi();


}