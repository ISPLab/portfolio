export interface Cocktail {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
    strInstructions: string;
    [key: string]: string | null;
}

export interface CocktailResponse {
    drinks: Cocktail[] | null;
} 