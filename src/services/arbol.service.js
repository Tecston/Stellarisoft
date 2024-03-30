//Definimos un servicio  para interctuar con la base de datos
//realizara operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en la tabla de árboles

const { Arbol } = require('../db/models/arboles.model');

class ArbolService {
    constructor() {}

    async find() {
        const res = await Arbol.findAll();
        return res;
    }

    async findOne(id) {
        const res = await Arbol.findByPk(id);
        return res;
    }

    async create(data) {
        const res = await Arbol.create(data);
        return res;
    }

    async update(id, data) {
        const model = await this.findOne(id);
        const res = await model.update(data);
        return res;
    }

    async delete(id) {
        const model = await this.findOne(id);
        await model.destroy();
        return { deleted: true };
    }
}

module.exports = ArbolService;
