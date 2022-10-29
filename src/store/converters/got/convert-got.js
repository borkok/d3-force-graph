import {convert_} from "../utils/common";

export const convert = payload => convert_(
    payload,
    "data",
    "participants",
    "_id"
);