import axios from "axios";
import { proxy } from "../proxy";

export const getSuggestions = async (value) => {
  var gurl =
    "https://groww.in/v1/api/search/v1/entity?app=false&entity_type=scheme&page=0&q=" +
    value +
    "&size=50";
  var header = {
    url: gurl,
  };
  try {
    var response = await axios.post(proxy + "data", header);

    return response.data["content"];
  } catch (error) {
    console.log("error:" + error);
    return [];
  }
};
