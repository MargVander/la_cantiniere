import { Meal } from 'src/app/models/meal';
export class Menu {
    id?: number;
    status?: number;
    label: string;
    description: string;
    priceDF: number;
    availableForWeeks?: string;
    image?: string;
    menu?: any;
    quantitePlat?: any;
    meals?: Meal[];
    // meals?: Meal[];
    constructor(
        id: number,
        status?: number,
        label?: string,
        description?: string,
        priceDF?: number,
        availableForWeeks?: string,
        image?: string
    ) {
        this.id = id;
        this.status = status;
        this.label = label;
        this.description = description;
        this.priceDF = priceDF;
        this.availableForWeeks = availableForWeeks;
        this.image = image;
    }
}
