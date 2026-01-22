import React from 'react';
import { getPortfolioItem, getServices } from '@/lib/data-provider';
import { notFound } from 'next/navigation';
import EditProjectForm from './EditProjectForm';

export const dynamic = 'force-dynamic';

export default async function EditPortfolioPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const projectId = parseInt(id);

  if (isNaN(projectId)) {
    notFound();
  }

  const project = await getPortfolioItem(projectId);

  if (!project) {
    notFound();
  }

  const services = await getServices();

  return (
    <div className="p-8">
      <EditProjectForm project={project as any} services={services as any} />
    </div>
  );
}
