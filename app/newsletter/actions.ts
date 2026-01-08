'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function subscribeNewsletter(formData: FormData) {
  const email = formData.get('email') as string;

  if (!email || !email.includes('@')) {
    throw new Error('Invalid email address.');
  }

  try {
    await prisma.newsletter.create({
      data: { email },
    });
    revalidatePath('/admin/newsletter');
    return { success: true, message: 'Başarıyla abone oldunuz!' };
  } catch (error) {
    // Unique constraint violation (P2002)
    return { success: false, message: 'Bu e-posta adresi zaten kayıtlı.' };
  }
}

export async function deleteSubscriber(id: number) {
  await prisma.newsletter.delete({
    where: { id },
  });
  revalidatePath('/admin/newsletter');
}
