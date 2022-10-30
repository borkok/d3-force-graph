import comics from './marvel-comics-test.json';
import {compareLinks} from "./utils/compareLinks";
import {convert} from "./convert";

const expectedNodes = [
    {id: "Archangel"},  //2
    {id: "Pyro"},       //2
    {id: "Storm"} ,     //1,2
    {id: "Thor"},       //1
    {id: "Wasp"},       //1
    {id: "Wolverine"},  //1,2
    {id: "X-Men"}       //2
];

const expectedLinks = [
    {source: "Storm", target: "Thor", category: 1158},
    {source: "Storm", target: "Wasp", category: 1158},
    {source: "Storm", target: "Wolverine", category: 1158},

    {source: "Thor", target: "Wasp", category: 1158},
    {source: "Thor", target: "Wolverine", category: 1158},

    {source: "Wasp", target: "Wolverine", category: 1158},

    {source: "Archangel", target: "Pyro", category:1332},
    {source: "Archangel", target: "Storm", category:1332},
    {source: "Archangel", target: "Wolverine", category:1332},
    {source: "Archangel", target: "X-Men", category:1332},

    {source: "Pyro", target: "Storm", category:1332},
    {source: "Pyro", target: "Wolverine", category:1332},
    {source: "Pyro", target: "X-Men", category:1332},

    {source: "Storm", target: "Wolverine", category:1332},
    {source: "Storm", target: "X-Men", category:1332},

    {source: "Wolverine", target: "X-Men", category:1332}
];

it('should convert simple comics json to nodes-links object', function () {
    const result = convert(
        comics,
        {
            "episodesPath": "data.data.results",
            "episodeCharacterPath": "characters.items[*].name",
            "episodeCategoryPath": "id"
        }
    );
    const nodes = result.nodes.sort((a, b) => a.id.localeCompare(b.id));
    expect(nodes).toEqual(expectedNodes);
    const links = result.links.sort(compareLinks);
    expect(links).toEqual(expectedLinks.sort(compareLinks));
});