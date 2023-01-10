var validacao = require('./validacoes')

describe('Validação', ()=> {
    it('add two numbers', () =>{
        expect(validacao(1,2)).toEqual(3)
    })
})