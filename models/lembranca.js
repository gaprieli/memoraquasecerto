import conexao from '../config/conexao.js'

const Lembranca = conexao.Schema({
    titulo: {type:String, required:true},
    data: {type:String, required:true},
    relato: {type:String, required:true},
    estrelas: {type:Number, required:true}
})

export default conexao.model('Lembranca',Lembranca)