import React from 'react';

const List = props => (
<div className="list">
  <ul>
    {
      props.items.map((item, index) => <li key={index}>{item}</li>)
    }
  </ul>
</div>  
);

export default List;