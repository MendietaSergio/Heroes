import React from 'react'
import { heroes } from '../data/heroes'
export const getHeroesBySearch = (keyword="") => {
    return heroes.filter(heroe => heroe.superhero.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()))
    //includes concatena el tipado
}
