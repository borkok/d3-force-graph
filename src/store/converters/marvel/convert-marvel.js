import {combinations} from "../utils/combinations";

//remove suffix in brackets like (Ultimate) or (Age of Apocalipse)
//so that Storm (Ultimate) and Storm (Age of Apocalipse) where the same character
const standardizeName = name => name.split("(")[0].trim();

const extractNodes = (comics) => {
    const uniqueCharacters = new Set(comics
        .map(comic => comic.characters)
        .reduce((acc, val) => acc.concat(val), [])
        .map(character => character.name)
        .map(name => standardizeName(name)));

    return [...uniqueCharacters].map(name => {
        return ({id: name})
    });
};

const extractLinksFromOneComic = (comic) => {
    const links = combinations(comic.characters.map(c => standardizeName(c.name)));
    return links.map(link => {
        return ({...link, category: comic.id})
    });
};

const extractLinks = (comics) => {
    return comics.map(extractLinksFromOneComic)
        .reduce((acc, val) => acc.concat(val), []);
};

export let convert = (input) => {
    const comics = input.data.data.results
        .filter(comic => comic.characters.available > 0)
        .map(comic => {return {id: comic.id, characters: comic.characters.items}});

    const nodes = extractNodes(comics);
    const links = extractLinks(comics);

    return {nodes: nodes, links: links};
};