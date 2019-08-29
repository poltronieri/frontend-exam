import React from 'react';

// import { Container } from './styles';

export default function PlaylistItem(props) {
  const {item} = props;
  return (
    <li key={item.id}>
            {item.snippet.title}
            <img src={item.snippet.thumbnails.default.url} alt={item.snippet.title}/>
          </li>
  );
}
