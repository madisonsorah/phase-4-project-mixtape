import React from 'react';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';

function SearchBar({onSearch}) {

  return (
    <Form className='d-flex'>
      <FormControl
        type='search'
        placeholder='Search'
        className='me-2'
        aria-label='Search'
        onChange={(e) => onSearch(e.target.value)}
      />
      <Button variant='outline-success'>Search</Button>
    </Form>
  )  
}

export default SearchBar;