import React from 'react';
import { getServices } from '@/lib/data-provider';
import NewProjectForm from './NewProjectForm';

export const dynamic = 'force-dynamic';

export default async function NewProjectPage() {
  const services = await getServices();

  return <NewProjectForm services={services as any} />;
}