export class Productos {
    private id: number;
    private titulo: string;
    private img: string;
    private precio: number;
    private favorite: boolean;
    private oferta: number;
    private tallas: boolean;

    constructor(
        id: number,
        titulo: string,
        img: string,
        precio: number,
        favorite: boolean,
        oferta: number,
        tallas: boolean
    ) {
        this.id = id
        this.titulo = titulo
        this.img = img
        this.precio = precio
        this.favorite = favorite
        this.oferta = oferta
        this.tallas = tallas
    }

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

    public getPrecio(): number {
        return this.precio;
    }

    public setPrecio(precio: number): void {
        this.precio = precio;
    }

    public isFavorite(): boolean {
        return this.favorite;
    }

    public setFavorite(favorite: boolean): void {
        this.favorite = favorite;
    }

    public getOferta(): number {
        return this.oferta;
    }

    public setOferta(oferta: number): void {
        this.oferta = oferta;
    }

    public isTallas(): boolean {
        return this.tallas;
    }

    public setTallas(tallas: boolean): void {
        this.tallas = tallas;
    }





}
