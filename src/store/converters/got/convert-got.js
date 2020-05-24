import {combinations} from "../utils/combinations";

const extractNodes = events => {
    const participants = events.map(event => event.participants)
        .reduce((acc, val) => acc.concat(val), []);
    const uniqueCharacters = new Set(participants);
    return [...uniqueCharacters].map(name => {
        return ({id: name})
    });
};

const extractLinksFromOneEvent = (event) => {
    const links = combinations(event.participants);
    return links.map(link => {
        return ({...link, category: event._id})
    });
};

const extractLinks = (events) => {
    return events.map(extractLinksFromOneEvent)
        .reduce((acc, val) => acc.concat(val), []);
};

export let convert = ({data}) => {
    const nodes = extractNodes(data);
    const links = extractLinks(data);
    return {nodes:nodes, links:links};
};