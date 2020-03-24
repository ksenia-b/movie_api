import React, { useState } from 'react';
import { Form, Input, Rating } from 'semantic-ui-react';

export const MovieForm = () => {
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState(1);
    return (
        <Form>
        <Form.Field>
            <Input value={title} placeholder="movie title" onChange={e => setTitle(e.target.value)} />
        </Form.Field>
         <Form.Field>
          <Rating icon='star' value={rating} maxRating={5} onRate={(_, data) =>
          {console.log(data);}
          }/>
        </Form.Field>
        </Form>)
}