import events from './got-test.json';
import {compareLinks} from "./utils/compareLinks";
import {convert} from "./convert";

const expectedNodes = [
    {id:"Lyanna Stark"},
    {id:"Prince of Dragonstone"},
    {id:"Rhaegar Targaryen"}
];

const expectedLinks = [
    {source:"Lyanna Stark", target:"Prince of Dragonstone", category: "5cc074be04e71a0010b85984"},
    {source:"Lyanna Stark", target:"Rhaegar Targaryen", category: "5cc074be04e71a0010b85984"},
    {source:"Prince of Dragonstone", target:"Rhaegar Targaryen", category: "5cc074be04e71a0010b85984"}
];

it('should convert GOT events to nodes-links', () => {
    const result = convert(
        events,
        {
            "episodesPath": "data",
            "episodeCharactersPath": "participants",
            "episodeCategoryPath": "_id"
        }
    );
    const nodes = result.nodes.sort((a, b) => a.id.localeCompare(b.id));
    expect(nodes).toEqual(expectedNodes);
    const links = result.links.sort(compareLinks);
    expect(links).toEqual(expectedLinks.sort(compareLinks));
});