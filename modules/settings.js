Hooks.on("ready", function() {
  
  console.log("Setting system settings for Dungeon World svenska kompendier");

  game.settings.set('dungeonworld', 'alignmentSingle', 'Drivkraft')
  game.settings.set('dungeonworld', 'alignmentPlural', 'Drivkrafter')
  game.settings.set('dungeonworld', 'raceSingle', 'Bakgrund')
  game.settings.set('dungeonworld', 'racePlural', 'Bakgrunder')
  game.settings.set('dungeonworld', 'bondSingle', 'Band')
  game.settings.set('dungeonworld', 'bondPlural', 'Band')
  
  game.settings.set('dungeonworld', 'noCompendiumAutoData', true)
  game.settings.set('dungeonworld', 'compendiumPrefix', 'SV')
  
  game.settings.set('dungeonworld', 'noAbilityScores', true)
  game.settings.set('dungeonworld', 'noAbilityIncrease', true)
  game.settings.set('dungeonworld', 'noConstitutionToHP', true)
  game.settings.set('dungeonworld', 'noSTRToMaxLoad', true)
  
  
});
