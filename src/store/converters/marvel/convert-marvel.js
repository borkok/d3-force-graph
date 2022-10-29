import {convert_} from "../utils/common";

export const convert = payload => convert_(
    payload,
    "data.data.results",
    "characters.items[*].name",
    "id"
);