import { Tema } from './Tema'
//Uma postagem pertence a somente um tema
export class Postagem {
    public id!: number
    public titulo!: string
    public texto!: string
    public data!: Date
    public tema!: Tema
}