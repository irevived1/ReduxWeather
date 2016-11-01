import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index.js';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onChange = this.onChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onChange(e){
    this.setState({
      term: e.target.value,
    });
  }

  onFormSubmit(e) {
    e.preventDefault();
    // We need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({
      term: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather },dispatch);
}

// function mapStateToProps(state) {
//   return {};
// }

export default connect(null,mapDispatchToProps)(SearchBar);
// export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);
