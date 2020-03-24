import React, { useState } from 'react';
import { Form, Input } from 'semantic-ui-react';

export const MovieForm = () => {
    const [title, setTitle] = useState('');

    return (
        <Form>
        <Form.Field>
            <Input value={title} placeholder="movie title" onChange={e => setTitle(e.targer.value)} />
        </Form.Field>
        </Form>)
}