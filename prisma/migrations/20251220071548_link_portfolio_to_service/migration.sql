-- AlterTable
ALTER TABLE `portfolioitem` ADD COLUMN `serviceId` INTEGER NULL;

-- AlterTable
ALTER TABLE `service` ADD COLUMN `servicePortfolioDescEn` TEXT NULL,
    ADD COLUMN `servicePortfolioDescTr` TEXT NULL,
    ADD COLUMN `servicePortfolioTitleEn` VARCHAR(191) NULL,
    ADD COLUMN `servicePortfolioTitleTr` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `sitesettings` ADD COLUMN `aboutSectionTitleEn` VARCHAR(191) NULL,
    ADD COLUMN `aboutSectionTitleTr` VARCHAR(191) NULL,
    ADD COLUMN `contactMainTitleEn` TEXT NULL,
    ADD COLUMN `contactMainTitleTr` TEXT NULL,
    ADD COLUMN `heroImageUrl` VARCHAR(191) NULL,
    ADD COLUMN `portfolioDescEn` TEXT NULL,
    ADD COLUMN `portfolioDescTr` TEXT NULL,
    ADD COLUMN `portfolioSubtitleEn` VARCHAR(191) NULL,
    ADD COLUMN `portfolioSubtitleTr` VARCHAR(191) NULL,
    ADD COLUMN `portfolioTitleEn` VARCHAR(191) NULL,
    ADD COLUMN `portfolioTitleTr` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `PortfolioItem` ADD CONSTRAINT `PortfolioItem_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `Service`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
