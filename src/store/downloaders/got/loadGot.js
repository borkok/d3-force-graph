import {convert as convertGot} from "../../converters/got/convert-got";
import {download} from "../utils/common";

export const loadGotEvents = async (dispatch) => {
    const gotEventsUrl = "https://api.got.show/api/show/events";

    await download(dispatch, gotEventsUrl, convertGot);
};