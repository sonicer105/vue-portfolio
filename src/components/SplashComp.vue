<script setup>
"use strict";
import InfoComp from './InfoComp.vue'
import CBWrapComp from './CBWrapComp.vue';

//#region Code Samples
const code1 = `-- Languages

USE [Portfolio];

SET ANSI_NULLS ON;
SET QUOTED_IDENTIFIER ON;

INSERT INTO [dbo].[Languages] (id, language_name) VALUES
(1, 'JavaScript'), (2, 'NodeJS'), (3, 'TypeScript'), (4, 'HTML'),
(5, 'PHP'), (6, 'C#'), (7, 'CSS'), (8, 'SCSS'), (9, 'Java'),
(10, 'Swift'), (11, 'Objective-C'), (12, 'Lua'), (13, 'Python');

GO;

SELECT * FROM [dbo].[Languages];`;
const code2 = `// Frameworks

$portfolio_data = [
  'frameworks' => ['jQuery', 'AngularJS', 'Angular', 'Vue',
    'Twitter Bootstrap', 'MEAN', 'Ionic', 'WordPress', 'Material',
    'Metro UI']
];

$portfolio = new Portfolio($portfolio_data);

echo '<pre>' . print_r($portfolio, true) . '</pre>';

die();`;
const code3 = `"use strict";

// Software

let software = ['Visual Studio', 'Visual Studio Code', 'Android Studio',
'PhpStorm/WebStorm', 'SQL Management Studio', 'MySQL Workbench', 'Nano',
'Sublime Text', 'InkScape', 'Gimp'];

for (let i in software) {
  if (software.hasOwnProperty(i)){
    console.log(software[i]);
  }
}

console.log('DONE!');`;
const code4 = `// Databases
.database-container {
  padding: 1rem;
  margin: 0 auto;
  width: 1280px;
  background: lighten(#000, 20%);

  .ms-sql-server, .mysql-mariadb, .sqlite, .mongo-db, .firebase {
    content: '^^^ The database list, in case you missed it ^^^';
    color: #fff;
    background: #000;
  }
}`;
const code5 = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE platform_list SYSTEM "platform-list.dtd">
<platform_list>
  <platform
    name="Microsoft Azure" />
  <platform
    name="Amazon Web Services" />
  <platform
    name="Digital Ocean" />
  <platform
    name="Cloudflare" />
  <platform
    name="Android/iOS" />
  <platform
    name="Windows/Mac/Linux" />
</platform_list>`;
  //#endregion
</script>

<template>
  <div class="wrapper">
    <div class="code-container">
      <CBWrapComp class="block-1" title="Known Languages" :code="code1" lang="sql" />
      <CBWrapComp class="block-2" title="Leaned Frameworks" :code="code2" lang="php" />
      <CBWrapComp class="block-3" title="Utilized Software" :code="code3" lang="javascript" />
      <CBWrapComp class="block-4" title="Familiar Databases" :code="code4" lang="scss" />
      <CBWrapComp class="block-5" title="Used Platforms" :code="code5" lang="xml" />
      <InfoComp infoClass="mobile" />
    </div>
    <InfoComp infoClass="desktop" />
  </div>
</template>

<style lang="scss" scoped>
@keyframes circularMotion {
  from {
    transform: rotate(0deg) translateX(50px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(50px) rotate(-360deg);
  }
}

.wrapper {
  position: relative;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;

  @media (max-width: 1280px) {
    flex-direction: column;
  }

  .code-container {
    position: relative;
    width: 61rem;
    height: 49rem;
    flex-shrink: 0;

    @media (max-width: 1280px) {
      height: 40rem;
      width: 80%;
    }

    & > * {
      width: 45rem;
      position: absolute;

      @media (max-width: 1280px) {
        width: 100%;
      }
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: -25%;
    left: -25%;
    width: 150%;
    height: 150%;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
    animation: circularMotion 60s infinite linear;
  }

  .no-webp &::before {
    background-image: url('/images/bg.jpg');
  }

  .webp &::before {
    background-image: url('/images/bg.webp');
  }
}
</style>