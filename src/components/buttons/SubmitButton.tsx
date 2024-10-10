'use client'

import React from 'react'
import { useFormStatus } from 'react-dom';
import Button from './Button';

const SubmitButton = ({title}: {title: string}) => {
    const { pending } = useFormStatus();
    return (
      <Button type="submit" disabled={pending} isLoading={pending}>
        {title}
      </Button>
    );
  };

export default SubmitButton