'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import bcrypt from 'bcryptjs';

// Portfolio Actions
import { writeFile } from 'fs/promises';
import { join } from 'path';

// Service Actions
export async function createService(formData: FormData) {
  const titleEn = formData.get('titleEn') as string;
  const titleTr = formData.get('titleTr') as string;
  const slug = formData.get('slug') as string;
  const icon = formData.get('icon') as string;
  const descriptionEn = formData.get('descriptionEn') as string;
  const descriptionTr = formData.get('descriptionTr') as string;
  const contentEn = formData.get('contentEn') as string;
  const contentTr = formData.get('contentTr') as string;
  const file = formData.get('image') as File;

  let imageUrl: string | undefined;

  if (file && file.size > 0) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const filename = file.name.replace(/\.[^/.]+$/, "") + '-' + uniqueSuffix + '.' + file.name.split('.').pop();
    const uploadDir = join(process.cwd(), 'public', 'uploads');
    const filePath = join(uploadDir, filename);
    await writeFile(filePath, buffer);
    imageUrl = `/uploads/${filename}`;
  }

  await prisma.service.create({
    data: {
      slug,
      icon,
      titleEn,
      titleTr,
      descriptionEn,
      descriptionTr,
      contentEn,
      contentTr,
      imageUrl,
    },
  });

  revalidatePath('/');
  revalidatePath('/admin/services');
  redirect('/admin/services');
}

export async function deleteService(id: number) {
  await prisma.service.delete({
    where: { id },
  });
  revalidatePath('/');
  revalidatePath('/admin/services');
}

export async function updateService(id: number, formData: FormData) {
  const titleEn = formData.get('titleEn') as string;
  const titleTr = formData.get('titleTr') as string;
  const descriptionEn = formData.get('descriptionEn') as string;
  const descriptionTr = formData.get('descriptionTr') as string;
  const contentEn = formData.get('contentEn') as string;
  const contentTr = formData.get('contentTr') as string;

  const servicePortfolioTitleEn = formData.get('servicePortfolioTitleEn') as string;
  const servicePortfolioTitleTr = formData.get('servicePortfolioTitleTr') as string;
  const servicePortfolioDescEn = formData.get('servicePortfolioDescEn') as string;
  const servicePortfolioDescTr = formData.get('servicePortfolioDescTr') as string;

  const file = formData.get('image') as File;

  let imageUrl: string | undefined;

  if (file && file.size > 0) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const filename = file.name.replace(/\.[^/.]+$/, "") + '-' + uniqueSuffix + '.' + file.name.split('.').pop();
    const uploadDir = join(process.cwd(), 'public', 'uploads');
    const filePath = join(uploadDir, filename);
    await writeFile(filePath, buffer);
    imageUrl = `/uploads/${filename}`;
  }

  await prisma.service.update({
    where: { id },
    data: {
      titleEn,
      titleTr,
      descriptionEn,
      descriptionTr,
      contentEn,
      contentTr,
      servicePortfolioTitleEn,
      servicePortfolioTitleTr,
      servicePortfolioDescEn,
      servicePortfolioDescTr,
      ...(imageUrl && { imageUrl }),
    },
  });

  revalidatePath('/');
  revalidatePath('/admin/services');
}

export async function createPortfolioItem(formData: FormData) {
  const titleEn = formData.get('titleEn') as string;
  const titleTr = formData.get('titleTr') as string;
  const descriptionEn = formData.get('descriptionEn') as string;
  const descriptionTr = formData.get('descriptionTr') as string;
  const category = formData.get('category') as string;
  const client = formData.get('client') as string;
  const location = formData.get('location') as string;
  const year = formData.get('year') as string;
  const serviceId = formData.get('serviceId') ? parseInt(formData.get('serviceId') as string) : null;
  const mainFile = formData.get('image') as File;
  const galleryFiles = formData.getAll('gallery') as File[];

  let imageUrl: string | null = null;

  if (mainFile && mainFile.size > 0) {
    const bytes = await mainFile.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const filename = mainFile.name.replace(/\.[^/.]+$/, "") + '-' + uniqueSuffix + '.' + mainFile.name.split('.').pop();
    const uploadDir = join(process.cwd(), 'public', 'uploads');
    const filePath = join(uploadDir, filename);
    await writeFile(filePath, buffer);
    imageUrl = `/uploads/${filename}`;
  }

  const portfolio = await prisma.portfolioItem.create({
    data: {
      titleEn,
      titleTr,
      descriptionEn,
      descriptionTr,
      category,
      client,
      location,
      year,
      serviceId,
      imageUrl,
    },
  });

  if (galleryFiles && galleryFiles.length > 0) {
    for (const file of galleryFiles) {
      if (file.size > 0) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const filename = file.name.replace(/\.[^/.]+$/, "") + '-' + uniqueSuffix + '.' + file.name.split('.').pop();
        const uploadDir = join(process.cwd(), 'public', 'uploads');
        const filePath = join(uploadDir, filename);
        await writeFile(filePath, buffer);

        await prisma.portfolioImage.create({
          data: {
            url: `/uploads/${filename}`,
            portfolioId: portfolio.id
          }
        });
      }
    }
  }

  revalidatePath('/portfolio');
  revalidatePath('/admin/portfolio');
  redirect('/admin/portfolio');
}

export async function updatePortfolioItem(id: number, formData: FormData) {
  const titleEn = formData.get('titleEn') as string;
  const titleTr = formData.get('titleTr') as string;
  const descriptionEn = formData.get('descriptionEn') as string;
  const descriptionTr = formData.get('descriptionTr') as string;
  const category = formData.get('category') as string;
  const client = formData.get('client') as string;
  const location = formData.get('location') as string;
  const year = formData.get('year') as string;
  const serviceId = formData.get('serviceId') ? parseInt(formData.get('serviceId') as string) : null;
  const mainFile = formData.get('image') as File;
  const galleryFiles = formData.getAll('gallery') as File[];

  let imageUrl: string | undefined;

  if (mainFile && mainFile.size > 0) {
    const bytes = await mainFile.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const filename = mainFile.name.replace(/\.[^/.]+$/, "") + '-' + uniqueSuffix + '.' + mainFile.name.split('.').pop();
    const uploadDir = join(process.cwd(), 'public', 'uploads');
    const filePath = join(uploadDir, filename);
    await writeFile(filePath, buffer);
    imageUrl = `/uploads/${filename}`;
  }

  await prisma.portfolioItem.update({
    where: { id },
    data: {
      titleEn,
      titleTr,
      descriptionEn,
      descriptionTr,
      category,
      client,
      location,
      year,
      serviceId,
      ...(imageUrl && { imageUrl }),
    },
  });

  if (galleryFiles && galleryFiles.length > 0) {
    for (const file of galleryFiles) {
      if (file.size > 0) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const filename = file.name.replace(/\.[^/.]+$/, "") + '-' + uniqueSuffix + '.' + file.name.split('.').pop();
        const uploadDir = join(process.cwd(), 'public', 'uploads');
        const filePath = join(uploadDir, filename);
        await writeFile(filePath, buffer);

        await prisma.portfolioImage.create({
          data: {
            url: `/uploads/${filename}`,
            portfolioId: id
          }
        });
      }
    }
  }

  revalidatePath('/portfolio');
  revalidatePath('/admin/portfolio');
  redirect('/admin/portfolio');
}

export async function deletePortfolioItem(id: number) {
  await prisma.portfolioItem.delete({
    where: { id },
  });
  revalidatePath('/portfolio');
  revalidatePath('/admin/portfolio');
}

export async function deletePortfolioImage(imageId: number) {
  await prisma.portfolioImage.delete({
    where: { id: imageId },
  });
  revalidatePath('/portfolio');
  revalidatePath('/admin/portfolio');
}

// Site Settings Actions
export async function updateSiteSettings(formData: FormData) {
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const phone2 = formData.get('phone2') as string; // Added phone2
  const address = formData.get('address') as string;

  const contactTitleEn = formData.get('contactTitleEn') as string;
  const contactTitleTr = formData.get('contactTitleTr') as string;
  const contactDescEn = formData.get('contactDescEn') as string;
  const contactDescTr = formData.get('contactDescTr') as string;

  const heroTitleEn = formData.get('heroTitleEn') as string;
  const heroTitleTr = formData.get('heroTitleTr') as string;
  const heroSubtitleEn = formData.get('heroSubtitleEn') as string;
  const heroSubtitleTr = formData.get('heroSubtitleTr') as string;

  const aboutTitleEn = formData.get('aboutTitleEn') as string;
  const aboutTitleTr = formData.get('aboutTitleTr') as string;
  const aboutDescEn = formData.get('aboutDescEn') as string;
  const aboutDescTr = formData.get('aboutDescTr') as string;

  const footerRightsEn = formData.get('footerRightsEn') as string;
  const footerRightsTr = formData.get('footerRightsTr') as string;

  const instagram = formData.get('instagram') as string;
  const linkedin = formData.get('linkedin') as string;
  const twitter = formData.get('twitter') as string;
  const facebook = formData.get('facebook') as string;

  const aboutSectionTitleEn = formData.get('aboutSectionTitleEn') as string;
  const aboutSectionTitleTr = formData.get('aboutSectionTitleTr') as string;

  const contactMainTitleEn = formData.get('contactMainTitleEn') as string;
  const contactMainTitleTr = formData.get('contactMainTitleTr') as string;

  const portfolioTitleEn = formData.get('portfolioTitleEn') as string;
  const portfolioTitleTr = formData.get('portfolioTitleTr') as string;
  const portfolioSubtitleEn = formData.get('portfolioSubtitleEn') as string;
  const portfolioSubtitleTr = formData.get('portfolioSubtitleTr') as string;
  const portfolioDescEn = formData.get('portfolioDescEn') as string;
  const portfolioDescTr = formData.get('portfolioDescTr') as string;

  const adminUsername = formData.get('adminUsername') as string;
  const adminPassword = formData.get('adminPassword') as string;

  const currentSettings = await prisma.siteSettings.findFirst();
  let hashedPassword = adminPassword;

  // Only hash if password field is provided and different from current one
  // In a real settings page, you might want to only update if not empty
  if (adminPassword && adminPassword !== currentSettings?.adminPassword) {
    hashedPassword = await bcrypt.hash(adminPassword, 10);
  }

  const heroImageFile = formData.get('heroImage') as File;
  let heroImageUrl: string | undefined;

  if (heroImageFile && heroImageFile.size > 0) {
    const bytes = await heroImageFile.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const filename = heroImageFile.name.replace(/\.[^/.]+$/, "") + '-' + uniqueSuffix + '.' + heroImageFile.name.split('.').pop();
    const uploadDir = join(process.cwd(), 'public', 'uploads');
    const filePath = join(uploadDir, filename);
    await writeFile(filePath, buffer);
    heroImageUrl = `/uploads/${filename}`;
  }

  // We assume there is only one settings row, id=1
  await prisma.siteSettings.update({
    where: { id: 1 },
    data: {
      email,
      phone,
      phone2, // Added phone2
      address,
      contactTitleEn,
      contactTitleTr,
      contactDescEn,
      contactDescTr,
      heroTitleEn,
      heroTitleTr,
      heroSubtitleEn,
      heroSubtitleTr,
      aboutTitleEn,
      aboutTitleTr,
      aboutDescEn,
      aboutDescTr,
      footerRightsEn,
      footerRightsTr,
      instagram,
      linkedin,
      twitter,
      facebook,
      aboutSectionTitleEn,
      aboutSectionTitleTr,
      contactMainTitleEn,
      contactMainTitleTr,
      portfolioTitleEn,
      portfolioTitleTr,
      portfolioSubtitleEn,
      portfolioSubtitleTr,
      portfolioDescEn,
      portfolioDescTr,
      adminUsername,
      adminPassword: hashedPassword,
      ...(heroImageUrl && { heroImageUrl }),
    },
  });

  revalidatePath('/');
  revalidatePath('/admin/settings');
}

export async function deleteMessage(id: number) {
  await prisma.message.delete({
    where: { id },
  });
  revalidatePath('/admin/messages');
}
