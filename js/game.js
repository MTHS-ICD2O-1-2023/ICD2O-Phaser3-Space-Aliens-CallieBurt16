  /* global Phaser */

  // Copyright (c) 2024 Callie All rights reserved
  //
  // Created by: Callie
  // Created on: Apr 2024
  // This is the Phaser3 game of configuration file

  /**
   * Start Phaer Game.
   */
  const config = {
    type: Phaser.AUTO,
    Width: 1920,
    height: 1080,
    pysics: {
      default: "arcade",
      arcade: {
        debug: true,
      },
    },
    // set background color
    backgroundColor: 0x5f6e7a,
    scale: {
      mode: Phaser.Scale.FIT,
      // we place it in the middle of the page.
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
  }

  const game = new Phaser.Game(config)
  console.log(game)
  