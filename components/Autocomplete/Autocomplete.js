import React from 'react'
import Autosuggest from 'react-autosuggest';

const places = [
  'Kharkiv',
  'Kyiv',
  'Sydney',
  'Egypt',
  'Turkey',
  'Paris',
  'Barselona'
];

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return places.filter(places => regex.test(places));
}

function getSuggestionValue(suggestion) { // when suggestion selected, this function tells
  return suggestion;                 // what should be the value of the input
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion}</span>
  );
}

class Autocomplete extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: getSuggestions(''),
      noSuggestions: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSuggestionsUpdateRequested = this.onSuggestionsUpdateRequested.bind(this);
  }

  onChange(event, { newValue }) {
    this.setState({
      value: newValue,
      noSuggestions: false
    });
  }

  onSuggestionsUpdateRequested({ value }) {
    const suggestions = getSuggestions(value);
    const isInputBlank = value.trim() === '';
    const noSuggestions = !isInputBlank && suggestions.length === 0;

    this.setState({
      suggestions,
      noSuggestions
    });
  }

  render() {
    const { value, suggestions, noSuggestions } = this.state;
    const inputProps = {
      placeholder: 'Destination or hotel',
      value,
      onChange: this.onChange,
      id: 'hotel'
    };

    return (
      <div className='react-autosuggest'>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsUpdateRequested={this.onSuggestionsUpdateRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
       {
         noSuggestions &&
           <div className="react-autosuggest__no-suggestions">
             No suggestions
           </div>
       }
      </div>
    );
  }
}

export default Autocomplete
