const  mongoose = require('mongoose');

const MONGODB_DSN = 'mongodb+srv://admin:admin@aerowiki.lobnenq.mongodb.net'

const testeSchema = new mongoose.Schema({
  usuario: String,
  senha: String
})

const TesteUser = new mongoose.model('Users', testeSchema)


test('conexão com o mongob', async () => {
  const promise = mongoose.connect(MONGODB_DSN)

  await expect(promise).resolves.toBeInstanceOf(mongoose.Mongoose)

  await mongoose.connection.close() 
})

test ('inserção no mongodb', async () => {
  await mongoose.connect(MONGODB_DSN)

  const user = new TesteUser({
    usuario: 'Gabriel',
    senha: '12345'
  })

  await user.save()

  expect(user._id).toBeInstanceOf(mongoose.Types.ObjectId)

  await mongoose.connection.close()
})