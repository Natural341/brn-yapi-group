/*
  Warnings:

  - You are about to drop the column `description` on the `portfolioitem` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `portfolioitem` table. All the data in the column will be lost.
  - Added the required column `descriptionEn` to the `PortfolioItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descriptionTr` to the `PortfolioItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titleEn` to the `PortfolioItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titleTr` to the `PortfolioItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `portfolioitem` DROP COLUMN `description`,
    DROP COLUMN `title`,
    ADD COLUMN `descriptionEn` TEXT NOT NULL,
    ADD COLUMN `descriptionTr` TEXT NOT NULL,
    ADD COLUMN `titleEn` VARCHAR(191) NOT NULL,
    ADD COLUMN `titleTr` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `sitesettings` ADD COLUMN `ogImage` VARCHAR(191) NULL,
    ADD COLUMN `seoDescription` TEXT NULL,
    ADD COLUMN `seoKeywords` TEXT NULL,
    ADD COLUMN `seoTitle` VARCHAR(191) NULL;
