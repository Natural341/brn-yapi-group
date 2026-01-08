/*
  Warnings:

  - Added the required column `aboutDescEn` to the `SiteSettings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `aboutDescTr` to the `SiteSettings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `aboutTitleEn` to the `SiteSettings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `aboutTitleTr` to the `SiteSettings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `footerRightsEn` to the `SiteSettings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `footerRightsTr` to the `SiteSettings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `heroSubtitleEn` to the `SiteSettings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `heroSubtitleTr` to the `SiteSettings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `heroTitleEn` to the `SiteSettings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `heroTitleTr` to the `SiteSettings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `sitesettings` ADD COLUMN `aboutDescEn` TEXT NOT NULL,
    ADD COLUMN `aboutDescTr` TEXT NOT NULL,
    ADD COLUMN `aboutTitleEn` VARCHAR(191) NOT NULL,
    ADD COLUMN `aboutTitleTr` VARCHAR(191) NOT NULL,
    ADD COLUMN `facebook` VARCHAR(191) NULL,
    ADD COLUMN `footerRightsEn` VARCHAR(191) NOT NULL,
    ADD COLUMN `footerRightsTr` VARCHAR(191) NOT NULL,
    ADD COLUMN `heroSubtitleEn` VARCHAR(191) NOT NULL,
    ADD COLUMN `heroSubtitleTr` VARCHAR(191) NOT NULL,
    ADD COLUMN `heroTitleEn` VARCHAR(191) NOT NULL,
    ADD COLUMN `heroTitleTr` VARCHAR(191) NOT NULL,
    ADD COLUMN `instagram` VARCHAR(191) NULL,
    ADD COLUMN `linkedin` VARCHAR(191) NULL,
    ADD COLUMN `twitter` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `PortfolioImage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(191) NOT NULL,
    `portfolioId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PortfolioImage` ADD CONSTRAINT `PortfolioImage_portfolioId_fkey` FOREIGN KEY (`portfolioId`) REFERENCES `PortfolioItem`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
