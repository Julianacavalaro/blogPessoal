import { Postagem } from './Postagem'
//Um tema pode ter Várias postagens
export class Tema {
    public id!: number
    public descricao!: string
    public postagem!: Postagem[]
}