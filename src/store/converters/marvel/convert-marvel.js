import {convert_} from "../utils/common";

//remove suffix in brackets like (Ultimate) or (Age of Apocalipse)
//so that Storm (Ultimate) and Storm (Age of Apocalipse) where the same character
const standardizeName = name => name.split("(")[0].trim();

export const convert = ({data}) => convert_(data.data.results,
    comic => comic.characters.items.map(c => standardizeName(c.name)),
    comic => comic.id
);