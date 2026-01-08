import React from 'react';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import EditProjectForm from './EditProjectForm';

export default async function EditPortfolioPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const projectId = parseInt(id);

  if (isNaN(projectId)) {
    notFound();
  }

  const project = await prisma.portfolioItem.findUnique({
    where: { id: projectId },
    include: { images: true }
  });

  if (!project) {
    notFound();
  }

  const services = await prisma.service.findMany();

  return (
    <div className="p-8">
      <EditProjectForm project={project} services={services} />
    </div>
  );
}
