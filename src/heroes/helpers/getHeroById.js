import { heroes } from "../data/heroes";

export const getHeroById = ( id) =>{
    // recibe el id de hero

    return heroes.find(heroe=>heroe.id==id);
    // retorna unicamente el heroe sea igual al id que le paso
    // si no lo encuentra retonar un undefine

};