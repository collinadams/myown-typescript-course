import * as React from 'react';
import { PlaceDetails } from './utils/places';

interface PlaceSearchResultProps {
  result: PlaceDetails
}

export const PlaceSearchResult: React.SFC<PlaceDetails> = (placeDetail) => {
  let {
    id,
    rating,
    icon,
    name,
    url,
    vicinity,
    website,
  } = placeDetail;
  let websiteWidget: JSX.Element | null = null;
  if (website) {
    websiteWidget = (
      <span>
        -
        <a href={website} target="_blank">
          {website}
        </a>
      </span>
    )
  }
  return (
    <li className="search-result">
      <img
        className="icon"
        src={icon}
      />
      <h3>
        {name}
      </h3>
      <p>
        <a href={url} target="_blank">
          {vicinity}
        </a>

        {websiteWidget}
      </p>
    </li>
  );
};