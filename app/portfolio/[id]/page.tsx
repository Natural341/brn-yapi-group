import React from 'react';
import { notFound } from 'next/navigation';
import ProjectClient from './ProjectClient';
import { MOCK_SERVICES, MOCK_SITE_SETTINGS } from '@/lib/mock-data';

interface PageProps {
  params: Promise<{ id: string }>;
}

// No portfolio items in mock data, so this page will always show notFound
// This is intentional as portfolio feature is not currently active
const ProjectDetailPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const projectId = parseInt(id, 10);

  if (isNaN(projectId)) {
    notFound();
  }

  // No mock portfolio items, always show not found
  notFound();
};

export default ProjectDetailPage;