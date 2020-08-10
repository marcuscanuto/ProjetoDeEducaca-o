import path from 'path'

// tem que exportar de uma forma mais antiga pq o knex não entende a nova forma
module.exports = {
    client:'sqlite3',
    connection:{
        filename: path.resolve(__dirname ,'Src','Database','database.sqlite')
    },
    migrations:{
        directory: path.resolve(__dirname,'Src','Database','migrations')
    },
    useNullAsDefault: true,

}