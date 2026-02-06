-- 1. TABLOLARI OLUŞTUR (Eğer yoksa)
CREATE TABLE IF NOT EXISTS `PortfolioItem` (
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
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `PortfolioImage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` VARCHAR(191) NOT NULL,
    `portfolioId` INTEGER NOT NULL,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `Message` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `service` VARCHAR(191) NOT NULL,
    `message` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `Newsletter` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    UNIQUE INDEX `Newsletter_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `Service` (
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
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
    UNIQUE INDEX `Service_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `SiteSettings` (
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
    `seoDescription` VARCHAR(191) NULL,
    `seoKeywords` VARCHAR(191) NULL,
    `ogImage` VARCHAR(191) NULL,
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `Sponsor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL DEFAULT 'TEXT',
    `content` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 2. VERİLERİ YÜKLE (Demo İçerikler ve Admin)
INSERT IGNORE INTO `Service` (`id`, `slug`, `icon`, `imageUrl`, `titleTr`, `titleEn`, `descriptionTr`, `descriptionEn`, `contentTr`, `contentEn`, `createdAt`, `updatedAt`) VALUES
(1, 'anahtar-teslim-insaat', 'Building', 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5', 'Anahtar Teslim İnşaat', 'Turnkey Construction', 'Projelendirmeden iskana kadar tüm süreç.', 'Complete construction solutions.', '<p>Detaylı içerik...</p>', '<p>Detailed content...</p>', NOW(), NOW()),
(2, 'mimari-tasarim', 'DraftingCompass', 'https://images.unsplash.com/photo-1497366216548-37526070297c', 'Mimari Tasarım & Proje', 'Architectural Design', 'Fonksiyonel ve estetik tasarımlar.', 'Innovative designs.', '<p>Detaylı içerik...</p>', '<p>Detailed content...</p>', NOW(), NOW()),
(3, 'insaat-muhendisligi-statik', 'Layers', '/kırım/524-342-projelendirme-ve-uygulamasi.webp', 'İnşaat Mühendisliği & Statik', 'Structural Engineering', 'Güvenli statik çözümler.', 'Safe structural solutions.', '<p>Detaylı içerik...</p>', '<p>Detailed content...</p>', NOW(), NOW()),
(4, 'kaba-ince-insaat', 'HardHat', '/kırım/kaba-ince-insaat.avif', 'Kaba ve İnce İnşaat', 'Rough & Fine Construction', 'Titiz işçilik.', 'Precision work.', '<p>Detaylı içerik...</p>', '<p>Detailed content...</p>', NOW(), NOW()),
(5, 'altin-varak', 'Sparkle', '/varak/indownloader.app_picture_0314695001767781435.jpg', 'Altın Varak', 'Gold Leaf', 'Eşsiz altın varak uygulamaları.', 'Exquisite gold leaf applications.', '<p>Detaylı içerik...</p>', '<p>Detailed content...</p>', NOW(), NOW()),
(6, 'kirim-yikim-isleri', 'Hammer', '/kırım/krıım2.jpeg', 'Kırım & Yıkım İşleri', 'Demolition Works', 'Kontrollü yıkım hizmetleri.', 'Professional demolition.', '<p>Detaylı içerik...</p>', '<p>Detailed content...</p>', NOW(), NOW());

INSERT IGNORE INTO `SiteSettings` (`id`, `email`, `phone`, `address`, `contactTitleTr`, `contactTitleEn`, `contactDescTr`, `contactDescEn`, `heroTitleTr`, `heroTitleEn`, `heroSubtitleTr`, `heroSubtitleEn`, `aboutTitleTr`, `aboutTitleEn`, `aboutDescTr`, `aboutDescEn`, `adminUsername`, `adminPassword`, `footerRightsTr`, `footerRightsEn`, `updatedAt`) VALUES
(1, 'info@brnyapigroup.com', '+90 212 000 00 00', 'İstanbul, Türkiye', 'İletişime Geçin', 'Get in Touch', 'Bize ulaşın.', 'Reach us.', 'Geleceği İnşa Ediyoruz.', 'Building the Future.', 'İnşaat Grubu.', 'Construction Group.', 'Hakkımızda', 'About Us', 'Lider inşaat firması.', 'Leading construction firm.', 'admin', '$2b$10$zGvs0RGjpSgIgGd0z31Ao.TZyv0YLnqv5BYD7gejc1QzAfO3/hQT', 'Tüm hakları saklıdır.', 'All rights reserved.', NOW());
