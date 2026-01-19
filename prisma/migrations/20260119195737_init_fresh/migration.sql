-- CreateTable
CREATE TABLE `PortfolioItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titleEn` VARCHAR(191) NOT NULL,
    `titleTr` VARCHAR(191) NOT NULL,
    `descriptionEn` TEXT NOT NULL,
    `descriptionTr` TEXT NOT NULL,
    `imageUrl` VARCHAR(191) NULL,
    `category` VARCHAR(191) NULL,
    `serviceId` INTEGER NULL,
    `location` VARCHAR(191) NULL,
    `year` VARCHAR(191) NULL,
    `client` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PortfolioImage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(191) NOT NULL,
    `portfolioId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Message` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `service` VARCHAR(191) NOT NULL,
    `message` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
    `imageUrl` VARCHAR(191) NULL,
    `titleTr` VARCHAR(191) NOT NULL,
    `titleEn` VARCHAR(191) NOT NULL,
    `descriptionTr` TEXT NOT NULL,
    `descriptionEn` TEXT NOT NULL,
    `contentTr` TEXT NOT NULL,
    `contentEn` TEXT NOT NULL,
    `servicePortfolioTitleEn` VARCHAR(191) NULL,
    `servicePortfolioTitleTr` VARCHAR(191) NULL,
    `servicePortfolioDescEn` TEXT NULL,
    `servicePortfolioDescTr` TEXT NULL,
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
    `phone2` VARCHAR(191) NULL,
    `address` VARCHAR(191) NOT NULL,
    `contactTitleTr` VARCHAR(191) NOT NULL,
    `contactTitleEn` VARCHAR(191) NOT NULL,
    `contactDescTr` TEXT NOT NULL,
    `contactDescEn` TEXT NOT NULL,
    `heroTitleTr` VARCHAR(191) NOT NULL,
    `heroTitleEn` VARCHAR(191) NOT NULL,
    `heroSubtitleTr` VARCHAR(191) NOT NULL,
    `heroSubtitleEn` VARCHAR(191) NOT NULL,
    `aboutTitleTr` VARCHAR(191) NOT NULL,
    `aboutTitleEn` VARCHAR(191) NOT NULL,
    `aboutDescTr` TEXT NOT NULL,
    `aboutDescEn` TEXT NOT NULL,
    `aboutSectionTitleEn` VARCHAR(191) NULL,
    `aboutSectionTitleTr` VARCHAR(191) NULL,
    `contactMainTitleEn` TEXT NULL,
    `contactMainTitleTr` TEXT NULL,
    `portfolioTitleEn` VARCHAR(191) NULL,
    `portfolioTitleTr` VARCHAR(191) NULL,
    `portfolioSubtitleEn` VARCHAR(191) NULL,
    `portfolioSubtitleTr` VARCHAR(191) NULL,
    `portfolioDescEn` TEXT NULL,
    `portfolioDescTr` TEXT NULL,
    `footerRightsTr` VARCHAR(191) NOT NULL,
    `footerRightsEn` VARCHAR(191) NOT NULL,
    `instagram` VARCHAR(191) NULL,
    `linkedin` VARCHAR(191) NULL,
    `twitter` VARCHAR(191) NULL,
    `facebook` VARCHAR(191) NULL,
    `heroImageUrl` VARCHAR(191) NULL,
    `adminUsername` VARCHAR(191) NOT NULL DEFAULT 'admin',
    `adminPassword` VARCHAR(191) NOT NULL DEFAULT '123',
    `seoTitle` VARCHAR(191) NULL,
    `seoDescription` TEXT NULL,
    `seoKeywords` TEXT NULL,
    `ogImage` VARCHAR(191) NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sponsor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL DEFAULT 'TEXT',
    `content` TEXT NOT NULL,
    `url` VARCHAR(191) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PortfolioItem` ADD CONSTRAINT `PortfolioItem_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `Service`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PortfolioImage` ADD CONSTRAINT `PortfolioImage_portfolioId_fkey` FOREIGN KEY (`portfolioId`) REFERENCES `PortfolioItem`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
