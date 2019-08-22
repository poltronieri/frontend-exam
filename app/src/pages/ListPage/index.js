import React from 'react';
import { Link } from 'react-router-dom';
// import { Container } from './styles';

// async function getData() {
//   const response = await api.get(
//       '/playlistItems?playlistId=PL6t93nUFQQ1ZiXMfhPyhjb0PX3LgEVMcF&part=snippet,id&maxResults=30&key=AIzaSyA5UPKx654zSKFH4sWQDnu1ErJPxMCpEx4'
//   );
//   console.log(response);
// }
export default function ListPage() {
  return (
    <>
      <div>ListPage</div>
      <Link to="/">
        <button type="button">
          Logout
        </button>
      </Link>
    </>
  );
}
