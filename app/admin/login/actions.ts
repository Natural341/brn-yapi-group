'use server';

import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import bcrypt from 'bcryptjs';

export async function login(prevState: any, formData: FormData) {
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;

  try {
    const settings = await prisma.siteSettings.findFirst();

    if (!settings) {
      return { message: 'System not initialized.' };
    }

    const isPasswordCorrect = await bcrypt.compare(password, settings.adminPassword);

    if (username === settings.adminUsername && isPasswordCorrect) {
      // Set cookie
      const cookieStore = await cookies();
      cookieStore.set('admin_session', 'true', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
      });
      
      redirect('/admin');
    } else {
      return { message: 'Invalid credentials.' };
    }
  } catch (error) {
    if ((error as any).message === 'NEXT_REDIRECT') {
      throw error;
    }
    console.error('Login error:', error);
    return { message: 'An error occurred during login.' };
  }
}
