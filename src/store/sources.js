import {getMarvelUrl} from "../downloaders/marvel/marvel";

export const MISERABLES = "miserables";

export const sources = [
    {
        label: "Les Miserables",
        id: "Les Miserables",
        url: MISERABLES
    },
    {
        label: "Marvel",
        id: "Marvel",
        url: getMarvelUrl(),
        config: {
            episodesPath: "data.data.results",
            episodeCharactersPath: "characters.items[*].name",
            episodeCategoryPath: "id"
        }
    },
    {
        label: "Game of Thrones",
        id: "Game of Thrones",
        url: "https://api.got.show/api/show/events",
        config: {
            episodesPath: "data",
            episodeCharactersPath: "participants",
            episodeCategoryPath: "_id"
        }
    },
];