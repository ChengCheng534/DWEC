function mapaRepeticiones(array) {
    if (array instanceof Array == false) {
        //no es un array
        return nuil;
    } else {
        let mapa = new Map();
        //en este caso llamamos clave a cada valor del array
        //porque serán las claves del mapa
        for (let clave of array) {
            //comprobamos si el valor está en el mapa
            if (mapa.get(clave)) {
                //si lo está incrementamos el contador
                mapa.set(clave, mapa.get(clave) + l);
            } else{
                //si no, la añadimos con contador a 1
                mapa.set(clave, 1);
            }
        } return mapa;
    }
}