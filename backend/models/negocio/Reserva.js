export class Reserva {
    #id;
    #dataEntrada;
    #dataSaida;
    #idUsuario;
    #idHotel;

    constructor({ id = null, dataEntrada, dataSaida, idUsuario, idHotel }) {
        this.setId(id);
        this.setDataEntrada(dataEntrada);
        this.setDataSaida(dataSaida);
        this.setIdUsuario(idUsuario);
        this.setIdHotel(idHotel);
    }

    // GET-SET ID
    getId() {
        return this.#id;
    }

    setId(id) {
        if (!id && id !== null) {
            throw new Error('O campo id não pode estar vazio');
        }

        if (id !== null && typeof id !== 'number') {
            throw new Error('O campo id deve ser numérico');
        }

        this.#id = id;
    }

    // GET-SET DATA_ENTRADA
    getDataEntrada() {
        return this.#dataEntrada;
    }

    setDataEntrada(dataEntrada) {
        if (!dataEntrada) {
            throw new Error('O campo dataEntrada não pode estar vazio');
        }

        if (typeof dataEntrada !== 'string') {
            throw new Error('O campo dataEntrada deve ser um texto');
        }

        let regexData = /^\d{2}\/\d{2}\/\d{4}$/;
        
        if (!regexData.test(dataEntrada)) {
            throw new Error('A data de entrada deve estar no formato dd/mm/aaaa');
        }

        this.#dataEntrada = dataEntrada;
    }

    // GET-SET DATA_SAIDA
    getDataSaida() {
        return this.#dataSaida;
    }

    setDataSaida(dataSaida) {
        if (!dataSaida) {
            throw new Error('O campo dataSaida não pode estar vazio');
        }

        if (typeof dataSaida !== 'string') {
            throw new Error('O campo dataSaida deve ser um texto');
        }

        if (!regexData.test(dataSaida)) {
            throw new Error('A data de saída deve estar no formato dd/mm/aaaa');
        }

        this.#dataSaida = dataSaida;
    }

    // GET-SET ID_USUARIO
    getIdUsuario() {
        return this.#idUsuario;
    }

    setIdUsuario(idUsuario) {
        if (!idUsuario) {
            throw new Error('O campo idUsuario não pode estar vazio');
        }

        if (typeof idUsuario !== 'number') {
            throw new Error('O campo idUsuario deve ser numérico');
        }

        this.#idUsuario = idUsuario;
    }

    // GET-SET ID_HOTEL
    getIdHotel() {
        return this.#idHotel;
    }

    setIdHotel(idHotel) {
        if (!idHotel) {
            throw new Error('O campo idHotel não pode estar vazio');
        }

        if (typeof idHotel !== 'number') {
            throw new Error('O campo idHotel deve ser numérico');
        }

        this.#idHotel = idHotel;
    }
}
