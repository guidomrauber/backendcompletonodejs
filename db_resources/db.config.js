module.exports = {
    server: "localhost",
    user: "root",
    pass: "",
    db: "api_pro3",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}