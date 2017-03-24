import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ListItem from '../../components/List-item';
import Layout from '../layout';
import fetchTopic from '../../actions/topic';
import Loader from '../../components/loader/Loader';

class List extends Component {
  componentDidMount() {
    this.props.dispatch(fetchTopic());
  }
  render() {
    const topics = this.props.topics;
    const mapTopics = topics.map(item => (
      <li key={item.id}>
        <ListItem {...item} />
      </li>
    ));
    if (this.props.fetching) {
      return (
        <Layout>
          <Loader />
        </Layout>
      );
    }

    return (
      <Layout>
        <ul style={{ paddingTop: '56px' }}>{mapTopics}</ul>
      </Layout>
    );
  }
}

List.PropTypes = {
  topics: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  topics: state.topics,
  fetching: state.fetching
});

export default connect(mapStateToProps)(List);
