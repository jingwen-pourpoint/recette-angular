export class IngredientModel {
    private _nom: string;
    private _quantite: number;


    constructor(nom: string, quantite: number) {
        this._nom = nom;
        this._quantite = quantite;
    }

    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }
    public get quantite(): number {
        return this._quantite;
    }
    public set quantite(value: number) {
        this._quantite = value;
    }

}