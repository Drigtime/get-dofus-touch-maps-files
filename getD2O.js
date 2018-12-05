const fs = require('graceful-fs');
const request = require('request')

const classes = [
  "AbuseReasons",
  "AchievementCategories",
  "AchievementObjectives",
  "AchievementRewards",
  "Achievements",
  "ActionDescriptions",
  "AlignmentBalance",
  "AlignmentEffect",
  "AlignmentGift",
  "AlignmentOrder",
  "AlignmentRank",
  "AlignmentRankJntGift",
  "AlignmentSides",
  "AlignmentTitles",
  "AlmanaxCalendars",
  "Appearances",
  "Areas",
  "BidHouseCategories",
  "Breeds",
  "CensoredContents",
  "CensoredWords",
  "Challenge",
  "ChatChannels",
  "CompanionCharacteristics",
  "CompanionSpells",
  "Companions",
  "CreatureBonesOverrides",
  "CreatureBonesTypes",
  "Documents",
  "Dungeons",
  "Effects",
  "EmblemBackgrounds",
  "EmblemSymbolCategories",
  "EmblemSymbols",
  "Emoticons",
  "ExternalNotifications",
  "Heads",
  "HintCategory",
  "Hints",
  "Houses",
  "Incarnation",
  "IncarnationLevels",
  "InfoMessages",
  "Interactives",
  "ItemSets",
  "ItemTypes",
  "Items",
  "Jobs",
  "LegendaryTreasureHunts",
  "LivingObjectSkinJntMood",
  "MapCoordinates",
  "MapPositions",
  "MapReferences",
  "MapScrollActions",
  "MonsterMiniBoss",
  "MonsterRaces",
  "MonsterSuperRaces",
  "Monsters",
  "Months",
  "MountBehaviors",
  "MountBones",
  "Mounts",
  "Notifications",
  "NpcActions",
  "NpcMessages",
  "Npcs",
  "OptionalFeatures",
  "Ornaments",
  "Pack",
  "Pets",
  "Phoenixes",
  "PointOfInterest",
  "PointOfInterestCategory",
  "PresetIcons",
  "QuestCategory",
  "QuestObjectiveTypes",
  "QuestObjectives",
  "QuestStepRewards",
  "QuestSteps",
  "Quests",
  "RankNames",
  "Recipes",
  "RideFood",
  "ServerCommunities",
  "ServerGameTypes",
  "ServerPopulations",
  "Servers",
  "SkillNames",
  "Skills",
  "SkinMappings",
  "SkinPositions",
  "Smileys",
  "SoundBones",
  "SoundUi",
  "SoundUiHook",
  "SpeakingItemsText",
  "SpeakingItemsTriggers",
  "SpellBombs",
  "SpellLevels",
  "SpellPairs",
  "SpellStates",
  "SpellTypes",
  "Spells",
  "StealthBones",
  "SubAreaIdPerCoordinate",
  "SubAreas",
  "SubAreasWorldMapData",
  "SuperAreas",
  "TaxCollectorFirstnames",
  "TaxCollectorNames",
  "Tips",
  "TitleCategories",
  "Titles",
  "TypeActions",
  "Url",
  "Waypoints",
  "WorldMaps",
  "isCacheComplete"
];

classes.forEach((cls) => {
  request({
    method: 'POST',
    url: 'https://proxyconnection.touch.dofus.com/data/map?lang=fr&v=1.35.2',
    Headers: {
      "Content-Type": "application/json"
    },
    form: {
      class: cls
    }
  }, (err, response, body) => {
    if (!err && response.statusCode == 200) {
      fs.writeFileSync(`./D2O/${cls}.json`, body);
    }
  })
})