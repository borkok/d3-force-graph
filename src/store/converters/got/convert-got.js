import {convert_} from "../utils/common";

export const convert = ({data}) => convert_(data,
    event => event.participants,
    event => event._id
);