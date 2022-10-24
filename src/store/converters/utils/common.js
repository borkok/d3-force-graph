import {combinations} from "./combinations";

const extractNodes_ = (episodes, extractEpisodeCharacters) => {
    const characters = episodes.flatMap(extractEpisodeCharacters);
    const uniqueCharacters = new Set(characters);
    return [...uniqueCharacters].map(name => ({id: name}));
};
const extractLinksFromOneEpisode_ = (episode, extractEpisodeCharacters, extractEpisodeId) => {
    const elements = extractEpisodeCharacters(episode);
    const links = combinations(elements);
    let category = extractEpisodeId(episode);
    return links.map(link => ({...link, category: category}));
};

const extractLinks_ = (episodes, extractEpisodeCharacters, extractEpisodeId) => episodes
    .flatMap(episode => extractLinksFromOneEpisode_(episode, extractEpisodeCharacters, extractEpisodeId));

export const convert_ = (episodes, extractEpisodeCharacters, extractEpisodeId) => {
    const nodes = extractNodes_(episodes, extractEpisodeCharacters);
    const links = extractLinks_(episodes, extractEpisodeCharacters, extractEpisodeId);
    return {nodes: nodes, links: links};
};