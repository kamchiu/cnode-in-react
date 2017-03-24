import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

import timeAgo from '../../utils.js';

import './list-item.css';

const Avatar = (props) => (
  <div className="avatar">
    <img src={props.avatar_url} alt={props.loginname} />
  </div>
);

const ListItem = (props) => (
  <Link to={`/topic/${props.id}`}>
    <div className="list-item">
      <Avatar {...props.author} />
      <div className="topic-detail">
        <h4 className="topic-title">{props.title}</h4>
        <div className="topic-info">
          <div>
            <strong className="topic-tag">置顶</strong><span>{props.reply_count}</span> 回复
            <span> {props.visit_count} </span>浏览
          </div>
          <time>{timeAgo(props.last_reply_at)}</time>
        </div>
      </div>
    </div>
  </Link>
);

Avatar.PropTypes = {
  avatar_url: PropTypes.string.isRequired,
  loginname: PropTypes.string.isRequired,
};

ListItem.PropTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  reply_count: PropTypes.string.isRequired,
  visit_count: PropTypes.string.isRequired,
  last_reply_at: PropTypes.string.isRequired
};

export default ListItem;
