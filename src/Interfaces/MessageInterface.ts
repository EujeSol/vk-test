import { IGif } from "@giphy/js-types";

interface Message {
    id?: String,
    text: String | null,
    time: String,
    gif: IGif | null
  }

  export default Message