---
layout: project
title: 'PandoraPvP'
caption: Optimizied Spigot plugins for a designated modded public Minecraft server.
description: >
  Pandora PvP is a collection of Spigot Minecraft plugins for a designated modded Minecraft public server. The plugins ranged from economy, to utility, and moderation. My personal work was on the development side, where I worked on server optimizations regarding instant block placement, world border creation, staff command logs, and moderator utility commands. Although my time on the project only spanned a couple months, I enjoyed the time I worked on the project.
date: 13 Jul 2022
image: 
  path: /assets/img/projects/PandoraPvPLogo.webp
  srcset: 
    1920w: /assets/img/projects/PandoraPvPLogo.webp
    960w:  /assets/img/projects/PandoraPvPLogo.webp
    480w:  /assets/img/projects/PandoraPvPLogo.webp
links:
  - title: Link
    url: https://github.com/PandoraPlugins
accent_color: '#4fb1ba'
accent_image:
  background: '#3b1012'
theme_color: '#3b1012'
sitemap: false
---

<script src="https://unpkg.com/vanilla-back-to-top@7.2.1/dist/vanilla-back-to-top.min.js"></script>
<script>
addBackToTop({
  diameter: 56,
  backgroundColor: '#3d6f75',
  textColor: 'rgb(225, 221, 214)'
})
</script> 

*What is Spigot?*: Minecraft is a video game made in Java (for non-console systems). Spigot is one of many server-hosting options for Minecraft, like Bukkit, Paper, Yatopia, and more. Spigot allows for programmers to create plugins that are loaded with the server as enhancements. Using Spigot’s API, more optimizations and customizability are available for developers.

This project helped me learn how to organize many tasks into smaller projects, and taught me how to work with more complicated programming systems, like APIs, documentation, and Maven.

The below gif shows some functionality for the server that I created personally:

<img src="/assets/img/projects/Pandora.gif" style="width: 80%; display: block; margin: 0 auto;" alt="Pandora plugins gif." />

Pandora functionalities I created, including world borders, staff gamemode commands, and instant sand placing.
{:.figcaption}

In the gif, I show three plugins:
1. Instant sand - Sand is placed instantly instead of gravity slowly acting on the sand as normal. This is optimized such that the calculation load is reduced on the server when a lot of gravity-based blocks are falling or placed.
2. Customized world border commands - Unlike the standard world border commands, these world border commands allow for more flexibility in placement, dynamic size updating, and removal. 
3. Staff gamemode "S" command - This allows staff to quickly toggle their gamemode between survival (player gamemode), creative (free gamemode), and spectator gamemode. They can also toggle if they're visible to others or not. When exiting the command, the staff member's inventory is returned to them, placing them back in their default game mode. 

There are many more commands and functionalities created for the server, found on the [Github](https://github.com/PandoraPlugins), some by myself, some by others.
