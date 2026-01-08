'use client';

import React, { useTransition } from 'react';
import { deletePortfolioItem } from '../../actions';

export default function DeleteButton({ id }: { id: number }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      onClick={() => startTransition(() => deletePortfolioItem(id))}
      disabled={isPending}
      className="text-red-600 hover:text-red-900 font-bold disabled:opacity-50"
    >
      {isPending ? 'Deleting...' : 'Delete'}
    </button>
  );
}
