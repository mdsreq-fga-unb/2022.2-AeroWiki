var validarEmail = require('./validacoes/email')
var validarNome = require('./validacoes/nome')
var validarMatricula = require('./validacoes/matricula')


describe('Validar email', ()=> {
    it('verefica emails válidos', () =>{
        expect(validarEmail('miguelmsoliveira@gmail.com')).toEqual(true)
    

    })
})
describe('Validar email', ()=> {
    it('verefica emails inválidos', () =>{
        expect(validarEmail('miguelmsoliveiragmail.com')).toEqual(false)    

    })
})



describe('Validar nome', ()=> {
    it('Verifica nomes válidos', () =>{
        expect(validarNome('miguel moreira da silva')).toEqual(true)
        expect(validarNome('miguel moreirã da silva')).toEqual(true)    
    })
    it('Verifica nomes inválidos', () =>{
        expect(validarNome('miguel moreira da silva1')).toEqual(false) 
        expect(validarNome('miguel moreira da silva@')).toEqual(false)
        expect(validarNome('miguel more~ira da silva')).toEqual(false)
    })
})


describe('Validar matricula', ()=> {
    it('Verifica matrículas válidas', () =>{
        expect(validarMatricula('123456789')).toEqual(true) 
    })
    it('Verifica matrículas inválidas', () =>{
        expect(validarMatricula('1234567891')).toEqual(false)  
    })
})

