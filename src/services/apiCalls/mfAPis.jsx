import { RequestPageRounded } from "@mui/icons-material";
import axios from "axios";

export const getSuggestions = async (value) => {
  var proxy = "http://localhost:3000/data";
  var gurl =
    "https://groww.in/v1/api/search/v1/entity?app=false&entity_type=scheme&page=0&q=" +
    value +
    "&size=50";
  var header = {
    url: gurl,
  };
  try {
    var response = await axios.post(proxy, header);
    console.log(response.data);
    return response.data["content"].map((item) => item.scheme_name);
  } catch (error) {
    console.log("error:" + error);
    return [];
  }
};
