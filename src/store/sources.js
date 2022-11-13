import { getMarvelUrl } from "../downloaders/marvel/marvel";

export const MISERABLES = "miserables";

export const sources = [
  {
    label: "Les Miserables",
    id: "Les Miserables",
    url: MISERABLES,
    readonly: true,

    episodesPath: "--",
    episodeCharactersPath: "--",
    episodeCategoryPath: "--",
  },
  {
    label: "Marvel",
    id: "Marvel",
    url: getMarvelUrl(),
    readonly: true,
    episodesPath: "data.data.results",
    episodeCharactersPath: "characters.items[*].name",
    episodeCategoryPath: "id",
  },
  {
    label: "Game of Thrones",
    id: "Game of Thrones",
    url: "https://api.got.show/api/show/events",
    readonly: true,
    episodesPath: "data",
    episodeCharactersPath: "participants",
    episodeCategoryPath: "_id",
  },
  {
    label: "Custom",
    id: "Custom",
    url: "https://www.breakingbadapi.com/api/episodes",
    readonly: false,
    episodesPath: "data",
    episodeCharactersPath: "characters",
    episodeCategoryPath: "series",
  },
];
