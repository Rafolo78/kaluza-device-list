import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { applyFilter, orderedFilters } from '../../state/ducks/filters';
import { FilterWrapper } from './ConnectionFilterStyledComponents';

const ConnectionFilter = (props) => {
  const onFilterChange = (e) => {
    props.applyFilter(e.target.value);
  }

  return (
    <FilterWrapper>
      <label>Connection State:</label>
      <select onChange={onFilterChange}>
        {orderedFilters.map(f => <option value={f} key={`key-${f}`}>{f}</option>)}
      </select>
    </FilterWrapper>
  );
}

ConnectionFilter.propTypes = {
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
  return {
    filter: state.filters.filter
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  applyFilter
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(ConnectionFilter);
