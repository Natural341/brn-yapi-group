/*
  Warnings:

  - You are about to drop the `comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `Comment_postId_fkey`;

-- AlterTable
ALTER TABLE `portfolioitem` ADD COLUMN `client` VARCHAR(191) NULL,
    ADD COLUMN `location` VARCHAR(191) NULL,
    ADD COLUMN `year` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `comment`;

-- DropTable
DROP TABLE `post`;

-- CreateTable
CREATE TABLE `Newsletter` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Newsletter_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Service` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `slug` VARCHAR(191) NOT NULL,
    `icon` VARCHAR(191) NOT NULL,
    `titleTr` VARCHAR(191) NOT NULL,
    `titleEn` VARCHAR(191) NOT NULL,
    `descriptionTr` TEXT NOT NULL,
    `descriptionEn` TEXT NOT NULL,
    `contentTr` TEXT NOT NULL,
    `contentEn` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Service_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SiteSettings` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `contactTitleTr` VARCHAR(191) NOT NULL,
    `contactTitleEn` VARCHAR(191) NOT NULL,
    `contactDescTr` TEXT NOT NULL,
    `contactDescEn` TEXT NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
