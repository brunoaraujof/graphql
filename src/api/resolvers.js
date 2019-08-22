const db = require('../config/database')

module.exports = {
    Query: {
        async getUser(_, { id }){ // params destructuring
            return await db('users').where({ id }).first() // id: params.id
        },
        async getUsers(){ //  getUser(_, { offset, limit })
            return await db('users')
        }
    },
    Mutation: {
        async createUser (_, { input }){
            const result = await db('users').insert({
                name: input.name,
                email: input.email,
                password: input.password
            })

            const id = result[0]
            return await db('users').where({ id }).first()
        }
    }
}