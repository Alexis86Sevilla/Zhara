export class Categorias {
    private id: number;
    private titulo: string;
    private img: string;

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public getImg(): string {
        return this.img;
    }

    public setImg(img: string): void {
        this.img = img;
    }


    constructor(
        id: number,
        titulo: string,
        img: string
    ) {
        this.id = id
        this.titulo = titulo
        this.img = img
    }

}