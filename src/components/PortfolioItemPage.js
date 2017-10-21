import React from 'react';

const PortfolioItemPage = (props) => {
  const id = props.match.params.id
  return (
      <div>
        <h1>A Thing I've Done</h1>
        <h3>Thing {id}</h3>
        <p>This page is for the item with id of {id}</p>
      </div>
  );
};

export default PortfolioItemPage;
