import React, { useState, useEffect } from 'react';

import api from '../../apis/api'
import SideMenu from '../../components/SideMenu';
import PlayListItem from '../../components/PlaylistItem';

export default function ListPage() {
  const [playlist, setPlaylist] = useState({pageInfo:{totalResults: 6},items:[]})
  const [maxResults, incrementMaxResults] = useState(5)

  useEffect(() => {
    async function getData() {
    const response = await api.get(
      `/playlistItems?playlistId=PL6t93nUFQQ1ZiXMfhPyhjb0PX3LgEVMcF&part=snippet,id&key=AIzaSyA5UPKx654zSKFH4sWQDnu1ErJPxMCpEx4&maxResults=${maxResults}`
    );
    setPlaylist(response.data)
    }
    getData();
  }, [maxResults])
  
  return (
    <div className="list-container">
      <SideMenu />
      <ul className="playlist">
        {playlist.items.map(item => {
          return( 
            <PlayListItem item={item} />
          );
        })}
        {maxResults <= playlist.pageInfo.totalResults ? <li><button type="button" onClick={() => incrementMaxResults(playlist.items.length + 5)}>Load more</button></li> : null}
      </ul>
    </div>
      
  );
}
