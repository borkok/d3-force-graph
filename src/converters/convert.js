import { combinations } from "./utils/combinations";
import jmespath from "jmespath";

const extractNodes_ = (episodes, episodeCharactersPath) => {
  const characters = episodes.flatMap((episode) =>
    jmespath.search(episode, episodeCharactersPath)
  );
  const uniqueCharacters = new Set(characters);
  return [...uniqueCharacters].map((name) => ({ id: name }));
};
const extractLinksFromOneEpisode_ = (
  episode,
  episodeCharactersPath,
  episodeCategoryPath
) => {
  const elements = jmespath.search(episode, episodeCharactersPath);
  const links = combinations(elements);
  let category = jmespath.search(episode, episodeCategoryPath);
  return links.map((link) => ({ ...link, category: category }));
};

const extractLinks_ = (episodes, episodeCharactersPath, episodeCategoryPath) =>
  episodes.flatMap((episode) =>
    extractLinksFromOneEpisode_(
      episode,
      episodeCharactersPath,
      episodeCategoryPath
    )
  );

export const convert = (
  payload,
  { episodesPath, episodeCharactersPath, episodeCategoryPath }
) => {
  const episodes = jmespath.search(payload, episodesPath);
  const nodes = extractNodes_(episodes, episodeCharactersPath);
  const links = extractLinks_(
    episodes,
    episodeCharactersPath,
    episodeCategoryPath
  );
  return { nodes: nodes, links: links };
};
