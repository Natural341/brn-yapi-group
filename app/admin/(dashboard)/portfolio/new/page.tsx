import React from 'react';
import { prisma } from '@/lib/prisma';
import NewProjectForm from './NewProjectForm';

export default async function NewProjectPage() {
  const services = await prisma.service.findMany();

  return <NewProjectForm services={services} />;
}