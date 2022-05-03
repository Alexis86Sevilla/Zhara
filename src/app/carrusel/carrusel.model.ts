export class Carrusel {
    private id: number;
    private titulo: string;
    private subtitulo: string;
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

    public getSubtitulo(): string {
        return this.subtitulo;
    }

    public setSubtitulo(subtitulo: string): void {
        this.subtitulo = subtitulo;
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
        subtitulo: string,
        img: string
    ) {
        this.id = id
        this.titulo = titulo
        this.subtitulo = subtitulo
        this.img = img
    }

}