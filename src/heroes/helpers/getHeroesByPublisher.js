import { heroes } from "../data/heroes";


export const getHeroesByPublisher = (publisher) => {
    // fx que recibe un publicador (marvel o dc)

    const validPublisher = ['DC Comics','Marvel Comics'];

    // hago una fx que valide que los publicadores sea marvel o dc

    if (!validPublisher.includes(publisher)){
        throw new Error (`${publisher} is not a valid publisher`)
    }

    return heroes.filter(heroe=> heroe.publisher===publisher);


 

}
