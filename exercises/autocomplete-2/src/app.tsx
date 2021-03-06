import * as React from 'react';
import { PlaceSearchResultList } from './place-search-result-list';
import { PlaceDetails, PlaceSummary, fetchPlaceSummaries, fetchPlaceDetails } from './utils/places';

interface IAppState {
  results: PlaceDetails[];
  inProgress: boolean;
  term: string; 
}

export class App extends React.Component<{}, IAppState> {
  constructor() {
    super();
    this.state = {
      results: [],
      term: '',
      inProgress: false
    };
    this.trySearch = this.trySearch.bind(this);    
  }
  async trySearch(evt: React.ChangeEvent<HTMLInputElement>) {
    let search = evt.target.value;
    this.setState({ inProgress: true, term: search });
    let placeSummaries: PlaceSummary[] = await fetchPlaceSummaries(search);
    let results: PlaceDetails[] = await fetchPlaceDetails(placeSummaries.map(p => p.place_id));
    this.setState({ results, inProgress: false });
  }
  render() {
    console.log(this.state.results);
    return (
      <div>
        <input onChange={this.trySearch} />
        <PlaceSearchResultList {...this.state} />
      </div>
    );
  }
};