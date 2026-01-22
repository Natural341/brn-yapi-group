import React from 'react';
import { notFound } from 'next/navigation';
import { getPortfolioItem, getSiteSettings, getServices } from '@/lib/data-provider';
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

  const project = await getPortfolioItem(projectId);

  if (!project) {
    notFound();
  }

  const siteSettings = await getSiteSettings();
  const services = await getServices();

  return <ProjectClient project={project as any} siteSettings={siteSettings ?? undefined} services={services as any} />;
};

export default ProjectDetailPage;