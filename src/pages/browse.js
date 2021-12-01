import React, { useState } from "react";
import { BrowseContainer } from "../containers/browse";
import { useContent } from "../hooks";
import selectionFilter from "../utils/selection-filter";
export default function Browse() {
  const [items] = useState(JSON.parse(localStorage.getItem("allContent")));
  console.log({ items });
  const { series } = useContent("series");
  const { films } = useContent("films");
  const slides = selectionFilter({ films, series });
  console.log({ slides });
  // console.log(slides["series"]);
  // console.log(series);
  // console.log(series);
  return <BrowseContainer slides={slides} />;
}
