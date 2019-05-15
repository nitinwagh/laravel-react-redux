import React from 'react';

const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px'
};

export default ({ post: { name, email, id }, onDelete }) => {
  return (
    <div style={ styles }>
      <h2>{ name }</h2>
      <p>{ email }</p>
      <button className="btn btn-danger" type="button" onClick={() => onDelete(id)}>
        Remove
      </button>
    </div>
  );
};