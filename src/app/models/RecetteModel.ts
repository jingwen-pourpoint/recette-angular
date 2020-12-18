import { IngredientModel } from './IngredientModel';
export class RecetteModel {
    private _id: number;
    private _nom: string;
    private _difficulte: string;
    private _ingredients: IngredientModel[];
    private _photo: string;


    constructor(id: number, nom: string, difficulte: string, ingredients: IngredientModel[], photo:string) {
        this._id = id;
        this._nom = nom;
        this._difficulte = difficulte;
        this._ingredients = ingredients;
        this._photo = photo
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }

    public get difficulte(): string {
        return this._difficulte;
    }
    public set difficulte(value: string) {
        this._difficulte = value;
    }

    public get ingredients():IngredientModel[] {
        return this._ingredients;
    }
    public set ingredients(value: IngredientModel[]) {
        this._ingredients = value;
    }

    public get photo(): string {
        return this._photo;
    }
    public set photo(value: string) {
        this._photo = value;
    }
}