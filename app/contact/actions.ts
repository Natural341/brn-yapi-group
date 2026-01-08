'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const service = formData.get('service') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    throw new Error('Please fill in all required fields.');
  }

  await prisma.message.create({
    data: {
      name,
      email,
      phone,
      service: service || 'Not specified',
      message,
    },
  });

  revalidatePath('/admin/messages');
}
