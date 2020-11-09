module.exports = (sequelize, Sequelize) => {
    const Subject = sequelize.define('subject', {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        career: {
            type: Sequelize.STRING
        }
    })
    return Subject
}