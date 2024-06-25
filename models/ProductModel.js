import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Product = db.define('product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    kode_buku: {
        type: DataTypes.STRING(225)
    },
    isbn: {
        type: DataTypes.STRING(225)
    },
    judul_buku: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    pengarang: {
        type: DataTypes.STRING(225)
    },
    sekilas_isi: {
        type: DataTypes.STRING(255)
    },
    tanggal_masuk: {
        type: DataTypes.DATEONLY
    },
    stock: {
        type: DataTypes.INTEGER
    },
    image: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    url: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
   
}, {
    freezeTableName: true
});

export default Product;

(async () => {
    await db.sync();
})();
