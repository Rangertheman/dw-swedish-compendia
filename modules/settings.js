Hooks.on("ready", function() {
  
  console.log("Setting system settings for Dungeon World svenska kompendier");

  game.settings.set('dungeonworld', 'noCompendiumAutoData', true)
  game.settings.set('dungeonworld', 'compendiumPrefix', 'SV')
    
});
