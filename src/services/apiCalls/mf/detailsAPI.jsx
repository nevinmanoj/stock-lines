import axios from "axios";
import { proxy } from "../proxy";

//search_id in item
export const getDetails = async (value) => {
  var gurl = "https://groww.in/v1/api/data/mf/web/v3/scheme/search/";

  var header = {
    url: gurl,
    value: value,
  };
  try {
    var response = await axios.post(proxy + "details", header);
    return response.data;
  } catch (error) {
    console.log("error:" + error);
    return [];
  }
};
