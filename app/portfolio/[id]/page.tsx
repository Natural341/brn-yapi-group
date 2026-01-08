import React from 'react';
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import ProjectClient from './ProjectClient';

interface PageProps {
  params: Promise<{ id: string }>;
}

const ProjectDetailPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const projectId = parseInt(id, 10);

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

  const siteSettings = await prisma.siteSettings.findFirst();
  const services = await prisma.service.findMany({ orderBy: { id: 'asc' } });

  return <ProjectClient project={project} siteSettings={siteSettings ?? undefined} services={services} />;
};

export default ProjectDetailPage;