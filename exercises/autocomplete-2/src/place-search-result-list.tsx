import * as React from 'react';
import { PlaceDetails } from './utils/places';
import { PlaceSearchResult } from './place-search-result';

interface IAppState {
  results: PlaceDetails[];
  inProgress: boolean;
  term: string; 
}

export const PlaceSearchResultList: React.SFC<IAppState> = function({ results, term, inProgress }) {
  const resultsList = results.map(r => <PlaceSearchResult {...r} />);

  let message = <p>Please type a term in the box above.</p>
  if (inProgress) {
    message = <p>Currently searching</p>
  } else if (!inProgress && results.length > 0 && term !== '') {
    message = <p> Here are your {results.length} results</p>
  }
  return (
    <div>
      <pre>{JSON.stringify(arguments)}</pre>
      {message}
      <ul className="results">
        {...resultsList}
      </ul>
    </div>
  )
}
