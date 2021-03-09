/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 16
*/



// file: import.js

IMPORT("ToolLib");
IMPORT("SoundAPI");




// file: API/API.js

let invertedIDs = {
    itemID: {},
    blockID: {},
    invertIDs: function() {
        for(let item in ItemID) {
            this.itemID[ItemID[item]] = item;
        }
        for(let item in BlockID) {
            this.blockID[BlockID[item]] = item;
        }
    },
    isNumericIDisItemID: function(id) {
        if(this.itemID[id] != null) {
            return true;
        }
        return false;
    },
    isNumericIDisBlockID: function(id) {
        if(this.blockID[id] != null) {
            return true;
        }
        return false;
    },
};
let IconTransformator = {
  ARGBtoRGBA: function (colour) {
    r = (colour >> 16) & 0xFF
    g = (colour >> 8) & 0xFF
    b = colour & 0xFF
    a = (colour >> 24) & 0xFF;
        
    return (r & 0xFF) << 24 | (g & 0xFF) << 16 | (b & 0xFF) << 8 | (a & 0xFF);
  },
  RGBAtoARGB: function (colour) {
    r = (colour >> 24) & 0xFF
    g = (colour >> 16) & 0xFF
    b = (colour >> 8) & 0xFF
    a = colour & 0xFF;
        
    return  (a & 0xFF) << 24 | (r & 0xFF) << 16 | (g & 0xFF) << 8 | (b & 0xFF);
  },
  UV: {
    METALLIC: {
      name: "METALLIC",
      ORE: [{u: 4, v: 2}, {u: 12, v: 2}, {u: 13, v: 2}, {u: 7, v: 3}, {u: 8, v: 3}, {u: 5, v: 5}, {u: 6, v: 5}, {u: 10, v: 5}, {u: 11, v: 5}, {u: 3, v: 6}, {u: 4, v: 6}, {u: 5, v: 6}, {u: 6, v: 6}, {u: 7, v: 6}, {u: 10, v: 6}, {u: 11, v: 6}, {u: 1, v: 8}, {u: 2, v: 8}, {u: 8, v: 8}, {u: 9, v: 8}, {u: 7, v: 9}, {u: 8, v: 9}, {u: 9, v: 9}, {u: 10, v: 9}, {u: 4, v: 10}, {u: 11, v: 11}, {u: 12, v: 11}, {u: 8, v: 12}, {u: 9, v: 12}, {u: 10, v: 12}, {u: 11, v: 12}, {u: 12, v: 12}, {u: 13, v: 12}, {u: 3, v: 13}, {u: 4, v: 13}, {u: 9, v: 13}, {u: 10, v: 13}],
      SMALL_ORE: [{u: 7, v: 2}, {u: 8, v: 2}, {u: 3, v: 3}, {u: 4, v: 3}, {u: 5, v: 3}, {u: 6, v: 3}, {u: 7, v: 3}, {u: 11, v: 3}, {u: 12, v: 3}, {u: 13, v: 3}, {u: 10, v: 6}, {u: 11, v: 6}, {u: 12, v: 6}, {u: 13, v: 6}, {u: 1, v: 7}, {u: 2, v: 7}, {u: 3, v: 7}, {u: 4, v: 7}, {u: 8, v: 7}, {u: 9, v: 7}, {u: 10, v: 7}, {u: 13, v: 7}, {u: 14, v: 7}, {u: 4, v: 8}, {u: 5, v: 8}, {u: 10, v: 10}, {u: 11, v: 10}, {u: 12, v: 10}, {u: 13, v: 10}, {u: 13, v: 11},  {u: 14, v: 11}, {u: 2, v: 12}, {u: 3, v: 12},  {u: 4, v: 12}, {u: 4, v: 13}, {u: 5, v: 13}, {u: 6, v: 13},  {u: 7, v: 13}, {u: 8, v: 13}, {u: 9, v: 13}, {u: 7, v: 14},  {u: 8, v: 14}]
    },
    SHINY: {
      name: "SHINY",
      ORE: [{u: 4, v: 2}, {u: 12, v: 2}, {u: 13, v: 2}, {u: 7, v: 3}, {u: 8, v: 3}, {u: 5, v: 5}, {u: 6, v: 5}, {u: 10, v: 5}, {u: 11, v: 5}, {u: 3, v: 6}, {u: 4, v: 6}, {u: 5, v: 6}, {u: 6, v: 6}, {u: 7, v: 6}, {u: 10, v: 6}, {u: 11, v: 6}, {u: 1, v: 8}, {u: 2, v: 8}, {u: 8, v: 8}, {u: 9, v: 8}, {u: 7, v: 9}, {u: 8, v: 9}, {u: 9, v: 9}, {u: 10, v: 9}, {u: 4, v: 10}, {u: 11, v: 11}, {u: 12, v: 11}, {u: 8, v: 12}, {u: 9, v: 12}, {u: 10, v: 12}, {u: 11, v: 12}, {u: 12, v: 12}, {u: 13, v: 12}, {u: 3, v: 13}, {u: 4, v: 13}, {u: 9, v: 13}, {u: 10, v: 13}],
      SMALL_ORE: [{u: 7, v: 2}, {u: 8, v: 2}, {u: 3, v: 3}, {u: 4, v: 3}, {u: 5, v: 3}, {u: 6, v: 3}, {u: 7, v: 3}, {u: 11, v: 3}, {u: 12, v: 3}, {u: 13, v: 3}, {u: 10, v: 6}, {u: 11, v: 6}, {u: 12, v: 6}, {u: 13, v: 6}, {u: 1, v: 7}, {u: 2, v: 7}, {u: 3, v: 7}, {u: 4, v: 7}, {u: 8, v: 7}, {u: 9, v: 7}, {u: 10, v: 7}, {u: 13, v: 7}, {u: 14, v: 7}, {u: 4, v: 8}, {u: 5, v: 8}, {u: 10, v: 10}, {u: 11, v: 10}, {u: 12, v: 10}, {u: 13, v: 10}, {u: 13, v: 11},  {u: 14, v: 11}, {u: 2, v: 12}, {u: 3, v: 12},  {u: 4, v: 12}, {u: 4, v: 13}, {u: 5, v: 13}, {u: 6, v: 13},  {u: 7, v: 13}, {u: 8, v: 13}, {u: 9, v: 13}, {u: 7, v: 14},  {u: 8, v: 14}]
    },
    ROUGH: {
      name: "ROUGH",
      ORE: [{u: 4, v: 2}, {u: 12, v: 2}, {u: 13, v: 2}, {u: 7, v: 3}, {u: 8, v: 3}, {u: 5, v: 5}, {u: 6, v: 5}, {u: 10, v: 5}, {u: 11, v: 5}, {u: 3, v: 6}, {u: 4, v: 6}, {u: 5, v: 6}, {u: 6, v: 6}, {u: 7, v: 6}, {u: 10, v: 6}, {u: 11, v: 6}, {u: 1, v: 8}, {u: 2, v: 8}, {u: 8, v: 8}, {u: 9, v: 8}, {u: 7, v: 9}, {u: 8, v: 9}, {u: 9, v: 9}, {u: 10, v: 9}, {u: 4, v: 10}, {u: 11, v: 11}, {u: 12, v: 11}, {u: 8, v: 12}, {u: 9, v: 12}, {u: 10, v: 12}, {u: 11, v: 12}, {u: 12, v: 12}, {u: 13, v: 12}, {u: 3, v: 13}, {u: 4, v: 13}, {u: 9, v: 13}, {u: 10, v: 13}],
      SMALL_ORE: [{u: 7, v: 2}, {u: 8, v: 2}, {u: 3, v: 3}, {u: 4, v: 3}, {u: 5, v: 3}, {u: 6, v: 3}, {u: 7, v: 3}, {u: 11, v: 3}, {u: 12, v: 3}, {u: 13, v: 3}, {u: 10, v: 6}, {u: 11, v: 6}, {u: 12, v: 6}, {u: 13, v: 6}, {u: 1, v: 7}, {u: 2, v: 7}, {u: 3, v: 7}, {u: 4, v: 7}, {u: 8, v: 7}, {u: 9, v: 7}, {u: 10, v: 7}, {u: 13, v: 7}, {u: 14, v: 7}, {u: 4, v: 8}, {u: 5, v: 8}, {u: 10, v: 10}, {u: 11, v: 10}, {u: 12, v: 10}, {u: 13, v: 10}, {u: 13, v: 11},  {u: 14, v: 11}, {u: 2, v: 12}, {u: 3, v: 12},  {u: 4, v: 12}, {u: 4, v: 13}, {u: 5, v: 13}, {u: 6, v: 13},  {u: 7, v: 13}, {u: 8, v: 13}, {u: 9, v: 13}, {u: 7, v: 14},  {u: 8, v: 14}]
    },
    DULL: {
      name: "DULL",
      ORE: [{u: 4, v: 2}, {u: 12, v: 2}, {u: 13, v: 2}, {u: 7, v: 3}, {u: 8, v: 3}, {u: 5, v: 5}, {u: 6, v: 5}, {u: 10, v: 5}, {u: 11, v: 5}, {u: 3, v: 6}, {u: 4, v: 6}, {u: 5, v: 6}, {u: 6, v: 6}, {u: 7, v: 6}, {u: 10, v: 6}, {u: 11, v: 6}, {u: 1, v: 8}, {u: 2, v: 8}, {u: 8, v: 8}, {u: 9, v: 8}, {u: 7, v: 9}, {u: 8, v: 9}, {u: 9, v: 9}, {u: 10, v: 9}, {u: 4, v: 10}, {u: 11, v: 11}, {u: 12, v: 11}, {u: 8, v: 12}, {u: 9, v: 12}, {u: 10, v: 12}, {u: 11, v: 12}, {u: 12, v: 12}, {u: 13, v: 12}, {u: 3, v: 13}, {u: 4, v: 13}, {u: 9, v: 13}, {u: 10, v: 13}],
      SMALL_ORE: [{u: 7, v: 2}, {u: 8, v: 2}, {u: 3, v: 3}, {u: 4, v: 3}, {u: 5, v: 3}, {u: 6, v: 3}, {u: 7, v: 3}, {u: 11, v: 3}, {u: 12, v: 3}, {u: 13, v: 3}, {u: 10, v: 6}, {u: 11, v: 6}, {u: 12, v: 6}, {u: 13, v: 6}, {u: 1, v: 7}, {u: 2, v: 7}, {u: 3, v: 7}, {u: 4, v: 7}, {u: 8, v: 7}, {u: 9, v: 7}, {u: 10, v: 7}, {u: 13, v: 7}, {u: 14, v: 7}, {u: 4, v: 8}, {u: 5, v: 8}, {u: 10, v: 10}, {u: 11, v: 10}, {u: 12, v: 10}, {u: 13, v: 10}, {u: 13, v: 11},  {u: 14, v: 11}, {u: 2, v: 12}, {u: 3, v: 12},  {u: 4, v: 12}, {u: 4, v: 13}, {u: 5, v: 13}, {u: 6, v: 13},  {u: 7, v: 13}, {u: 8, v: 13}, {u: 9, v: 13}, {u: 7, v: 14},  {u: 8, v: 14}]
    },
    
    
    
FINE: {
      name: "FINE",
      ORE: [{u: 0, v: 0}, {u: 1, v: 0}, {u: 14, v: 0}, {u: 15, v: 0}, {u: 0, v: 1}, {u: 8, v: 1}, {u: 9, v: 1}, {u: 14, v: 1}, {u: 15, v: 1}, {u: 6, v: 2}, {u: 7, v: 2}, {u: 8, v: 2}, {u: 9, v: 2}, {u: 14, v: 2}, {u: 5, v: 3}, {u: 6, v: 3}, {u: 7, v: 3}, {u: 8, v: 3}, {u: 4, v: 4}, {u: 5, v: 4}, {u: 6, v: 4}, {u: 10, v: 4}, {u: 11, v: 4}, {u: 2, v: 5}, {u: 3, v: 5}, {u: 4, v: 5}, {u: 8, v: 5}, {u: 9, v: 5}, {u: 10, v: 5}, {u: 11, v: 5}, {u: 2, v: 6}, {u: 3, v: 6}, {u: 7, v: 6}, {u: 8, v: 6}, {u: 9, v: 6}, {u: 10, v: 6}, {u: 14, v: 6}, {u: 2, v: 7}, {u: 5, v: 7}, {u: 6, v: 7}, {u: 7, v: 7}, {u: 8, v: 7}, {u: 13, v: 7}, {u: 14, v: 7}, {u: 5, v: 8}, {u: 6, v: 8}, {u: 7, v: 8}, {u: 12, v: 8}, {u: 13, v: 8}, {u: 14, v: 8}, {u: 4, v: 9}, {u: 5, v: 9}, {u: 6, v: 9}, {u: 11, v: 9}, {u: 12, v: 9}, {u: 13, v: 9}, {u: 3, v: 10}, {u: 4, v: 10}, {u: 9, v: 10}, {u: 12, v: 10}, {u: 2, v: 11}, {u: 3, v: 11}, {u: 4, v: 11}, {u: 8, v: 11}, {u: 9, v: 11}, {u: 7, v: 12}, {u: 8, v: 12}, {u: 12, v: 12}, {u: 13, v: 12}, {u: 6, v: 13}, {u: 7, v: 13}, {u: 11, v: 13}, {u: 12, v: 13}, {u: 1, v: 14}, {u: 0, v: 15}, {u: 1, v: 15}, {u: 15, v: 15}],
      SMALL_ORE: [{u: 7, v: 2}, {u: 8, v: 2}, {u: 3, v: 3}, {u: 4, v: 3}, {u: 5, v: 3}, {u: 6, v: 3}, {u: 7, v: 3}, {u: 11, v: 3}, {u: 12, v: 3}, {u: 13, v: 3}, {u: 10, v: 6}, {u: 11, v: 6}, {u: 12, v: 6}, {u: 13, v: 6}, {u: 1, v: 7}, {u: 2, v: 7}, {u: 3, v: 7}, {u: 4, v: 7}, {u: 8, v: 7}, {u: 9, v: 7}, {u: 10, v: 7}, {u: 13, v: 7}, {u: 14, v: 7}, {u: 4, v: 8}, {u: 5, v: 8}, {u: 10, v: 10}, {u: 11, v: 10}, {u: 12, v: 10}, {u: 13, v: 10}, {u: 13, v: 11},  {u: 14, v: 11}, {u: 2, v: 12}, {u: 3, v: 12},  {u: 4, v: 12}, {u: 4, v: 13}, {u: 5, v: 13}, {u: 6, v: 13},  {u: 7, v: 13}, {u: 8, v: 13}, {u: 9, v: 13}, {u: 7, v: 14},  {u: 8, v: 14}]
    },
LIGNITE: {
      name: "LIGNITE",
      ORE: [{u: 0, v: 0}, {u: 1, v: 0}, {u: 14, v: 0}, {u: 15, v: 0}, {u: 0, v: 1}, {u: 8, v: 1}, {u: 9, v: 1}, {u: 14, v: 1}, {u: 15, v: 1}, {u: 6, v: 2}, {u: 7, v: 2}, {u: 8, v: 2}, {u: 9, v: 2}, {u: 14, v: 2}, {u: 5, v: 3}, {u: 6, v: 3}, {u: 7, v: 3}, {u: 8, v: 3}, {u: 4, v: 4}, {u: 5, v: 4}, {u: 6, v: 4}, {u: 10, v: 4}, {u: 11, v: 4}, {u: 2, v: 5}, {u: 3, v: 5}, {u: 4, v: 5}, {u: 8, v: 5}, {u: 9, v: 5}, {u: 10, v: 5}, {u: 11, v: 5}, {u: 2, v: 6}, {u: 3, v: 6}, {u: 7, v: 6}, {u: 8, v: 6}, {u: 9, v: 6}, {u: 10, v: 6}, {u: 14, v: 6}, {u: 2, v: 7}, {u: 5, v: 7}, {u: 6, v: 7}, {u: 7, v: 7}, {u: 8, v: 7}, {u: 13, v: 7}, {u: 14, v: 7}, {u: 5, v: 8}, {u: 6, v: 8}, {u: 7, v: 8}, {u: 12, v: 8}, {u: 13, v: 8}, {u: 14, v: 8}, {u: 4, v: 9}, {u: 5, v: 9}, {u: 6, v: 9}, {u: 11, v: 9}, {u: 12, v: 9}, {u: 13, v: 9}, {u: 3, v: 10}, {u: 4, v: 10}, {u: 9, v: 10}, {u: 12, v: 10}, {u: 2, v: 11}, {u: 3, v: 11}, {u: 4, v: 11}, {u: 8, v: 11}, {u: 9, v: 11}, {u: 7, v: 12}, {u: 8, v: 12}, {u: 12, v: 12}, {u: 13, v: 12}, {u: 6, v: 13}, {u: 7, v: 13}, {u: 11, v: 13}, {u: 12, v: 13}, {u: 1, v: 14}, {u: 0, v: 15}, {u: 1, v: 15}, {u: 15, v: 15}],
      SMALL_ORE: [{u: 7, v: 2}, {u: 8, v: 2}, {u: 3, v: 3}, {u: 4, v: 3}, {u: 5, v: 3}, {u: 6, v: 3}, {u: 7, v: 3}, {u: 11, v: 3}, {u: 12, v: 3}, {u: 13, v: 3}, {u: 10, v: 6}, {u: 11, v: 6}, {u: 12, v: 6}, {u: 13, v: 6}, {u: 1, v: 7}, {u: 2, v: 7}, {u: 3, v: 7}, {u: 4, v: 7}, {u: 8, v: 7}, {u: 9, v: 7}, {u: 10, v: 7}, {u: 13, v: 7}, {u: 14, v: 7}, {u: 4, v: 8}, {u: 5, v: 8}, {u: 10, v: 10}, {u: 11, v: 10}, {u: 12, v: 10}, {u: 13, v: 10}, {u: 13, v: 11},  {u: 14, v: 11}, {u: 2, v: 12}, {u: 3, v: 12},  {u: 4, v: 12}, {u: 4, v: 13}, {u: 5, v: 13}, {u: 6, v: 13},  {u: 7, v: 13}, {u: 8, v: 13}, {u: 9, v: 13}, {u: 7, v: 14},  {u: 8, v: 14}]
    },
    QUARTZ: {
      name: "QUARTZ",
      ORE: [{u: 0, v: 0}, {u: 1, v: 0}, {u: 14, v: 0}, {u: 15, v: 0}, {u: 0, v: 1}, {u: 8, v: 1}, {u: 9, v: 1}, {u: 14, v: 1}, {u: 15, v: 1}, {u: 6, v: 2}, {u: 7, v: 2}, {u: 8, v: 2}, {u: 9, v: 2}, {u: 14, v: 2}, {u: 5, v: 3}, {u: 6, v: 3}, {u: 7, v: 3}, {u: 8, v: 3}, {u: 4, v: 4}, {u: 5, v: 4}, {u: 6, v: 4}, {u: 10, v: 4}, {u: 11, v: 4}, {u: 2, v: 5}, {u: 3, v: 5}, {u: 4, v: 5}, {u: 8, v: 5}, {u: 9, v: 5}, {u: 10, v: 5}, {u: 11, v: 5}, {u: 2, v: 6}, {u: 3, v: 6}, {u: 7, v: 6}, {u: 8, v: 6}, {u: 9, v: 6}, {u: 10, v: 6}, {u: 14, v: 6}, {u: 2, v: 7}, {u: 5, v: 7}, {u: 6, v: 7}, {u: 7, v: 7}, {u: 8, v: 7}, {u: 13, v: 7}, {u: 14, v: 7}, {u: 5, v: 8}, {u: 6, v: 8}, {u: 7, v: 8}, {u: 12, v: 8}, {u: 13, v: 8}, {u: 14, v: 8}, {u: 4, v: 9}, {u: 5, v: 9}, {u: 6, v: 9}, {u: 11, v: 9}, {u: 12, v: 9}, {u: 13, v: 9}, {u: 3, v: 10}, {u: 4, v: 10}, {u: 9, v: 10}, {u: 12, v: 10}, {u: 2, v: 11}, {u: 3, v: 11}, {u: 4, v: 11}, {u: 8, v: 11}, {u: 9, v: 11}, {u: 7, v: 12}, {u: 8, v: 12}, {u: 12, v: 12}, {u: 13, v: 12}, {u: 6, v: 13}, {u: 7, v: 13}, {u: 11, v: 13}, {u: 12, v: 13}, {u: 1, v: 14}, {u: 0, v: 15}, {u: 1, v: 15}, {u: 15, v: 15}],
      SMALL_ORE: [{u: 7, v: 2}, {u: 8, v: 2}, {u: 3, v: 3}, {u: 4, v: 3}, {u: 5, v: 3}, {u: 6, v: 3}, {u: 7, v: 3}, {u: 11, v: 3}, {u: 12, v: 3}, {u: 13, v: 3}, {u: 10, v: 6}, {u: 11, v: 6}, {u: 12, v: 6}, {u: 13, v: 6}, {u: 1, v: 7}, {u: 2, v: 7}, {u: 3, v: 7}, {u: 4, v: 7}, {u: 8, v: 7}, {u: 9, v: 7}, {u: 10, v: 7}, {u: 13, v: 7}, {u: 14, v: 7}, {u: 4, v: 8}, {u: 5, v: 8}, {u: 10, v: 10}, {u: 11, v: 10}, {u: 12, v: 10}, {u: 13, v: 10}, {u: 13, v: 11},  {u: 14, v: 11}, {u: 2, v: 12}, {u: 3, v: 12},  {u: 4, v: 12}, {u: 4, v: 13}, {u: 5, v: 13}, {u: 6, v: 13},  {u: 7, v: 13}, {u: 8, v: 13}, {u: 9, v: 13}, {u: 7, v: 14},  {u: 8, v: 14}]
    },
    
    
    
    LAPIS: {
      name: "LAPIS",
      ORE: [{u: 2, v: 2}, {u:5, v: 2}, {u:12, v: 2}, {u: 13, v: 2}, {u: 5, v: 3}, {u: 7, v: 3}, {u: 8, v: 3}, {u: 6, v: 5}, {u: 10, v: 5}, {u: 3, v: 6}, {u: 4, v: 6}, {u: 6, v: 6}, {u: 7, v: 6}, {u: 10, v: 6}, {u: 11, v: 6}, {u: 1, v: 7}, {u: 2, v: 7}, {u: 1, v: 8}, {u: 2, v: 8}, {u: 7, v: 8}, {u: 9, v: 8}, {u: 10, v: 8}, {u: 11, v: 8},  {u: 7, v: 9}, {u: 8, v: 9}, {u: 9, v: 9}, {u: 10, v: 9}, {u: 11, v: 9}, {u: 13, v: 9}, {u: 4, v: 10}, {u: 8, v: 10}, {u: 9, v: 10} , {u: 10, v: 10}, {u: 13, v: 10}, {u: 2, v: 11}, {u: 3, v: 11}, {u: 4, v: 11}, {u: 2, v: 7}, {u: 13, v: 11}, {u: 8, v: 12}, {u: 9, v: 12}, {u: 10, v: 12}, {u: 13, v: 12}, {u: 4, v: 13}, {u: 1, v: 7}, {u: 2, v: 7}, {u: 9, v: 13}, {u: 10, v: 13}, {u: 4, v: 14}, {u: 5, v: 14}, {u: 6, v: 14}],
      SMALL_ORE: [{u: 7, v: 2}, {u: 8, v: 2}, {u: 3, v: 3}, {u: 4, v: 3}, {u: 5, v: 3}, {u: 6, v: 3}, {u: 7, v: 3}, {u: 11, v: 3}, {u: 12, v: 3}, {u: 13, v: 3}, {u: 10, v: 6}, {u: 11, v: 6}, {u: 12, v: 6}, {u: 13, v: 6}, {u: 1, v: 7}, {u: 2, v: 7}, {u: 3, v: 7}, {u: 4, v: 7}, {u: 8, v: 7}, {u: 9, v: 7}, {u: 10, v: 7}, {u: 13, v: 7}, {u: 14, v: 7}, {u: 4, v: 8}, {u: 5, v: 8}, {u: 10, v: 10}, {u: 11, v: 10}, {u: 12, v: 10}, {u: 13, v: 10}, {u: 13, v: 11},  {u: 14, v: 11}, {u: 2, v: 12}, {u: 3, v: 12},  {u: 4, v: 12}, {u: 4, v: 13}, {u: 5, v: 13}, {u: 6, v: 13},  {u: 7, v: 13}, {u: 8, v: 13}, {u: 9, v: 13}, {u: 7, v: 14},  {u: 8, v: 14}]
    },
    FLINT: {
      name: "FLINT",
      ORE: [{u: 2, v: 2}, {u:5, v: 2}, {u:12, v: 2}, {u: 13, v: 2}, {u: 5, v: 3}, {u: 7, v: 3}, {u: 8, v: 3}, {u: 6, v: 5}, {u: 10, v: 5}, {u: 3, v: 6}, {u: 4, v: 6}, {u: 6, v: 6}, {u: 7, v: 6}, {u: 10, v: 6}, {u: 11, v: 6}, {u: 1, v: 7}, {u: 2, v: 7}, {u: 1, v: 8}, {u: 2, v: 8}, {u: 7, v: 8}, {u: 9, v: 8}, {u: 10, v: 8}, {u: 11, v: 8},  {u: 7, v: 9}, {u: 8, v: 9}, {u: 9, v: 9}, {u: 10, v: 9}, {u: 11, v: 9}, {u: 13, v: 9}, {u: 4, v: 10}, {u: 8, v: 10}, {u: 9, v: 10} , {u: 10, v: 10}, {u: 13, v: 10}, {u: 2, v: 11}, {u: 3, v: 11}, {u: 4, v: 11}, {u: 2, v: 7}, {u: 13, v: 11}, {u: 8, v: 12}, {u: 9, v: 12}, {u: 10, v: 12}, {u: 13, v: 12}, {u: 4, v: 13}, {u: 1, v: 7}, {u: 2, v: 7}, {u: 9, v: 13}, {u: 10, v: 13}, {u: 4, v: 14}, {u: 5, v: 14}, {u: 6, v: 14}],
      SMALL_ORE: [{u: 7, v: 2}, {u: 8, v: 2}, {u: 3, v: 3}, {u: 4, v: 3}, {u: 5, v: 3}, {u: 6, v: 3}, {u: 7, v: 3}, {u: 11, v: 3}, {u: 12, v: 3}, {u: 13, v: 3}, {u: 10, v: 6}, {u: 11, v: 6}, {u: 12, v: 6}, {u: 13, v: 6}, {u: 1, v: 7}, {u: 2, v: 7}, {u: 3, v: 7}, {u: 4, v: 7}, {u: 8, v: 7}, {u: 9, v: 7}, {u: 10, v: 7}, {u: 13, v: 7}, {u: 14, v: 7}, {u: 4, v: 8}, {u: 5, v: 8}, {u: 10, v: 10}, {u: 11, v: 10}, {u: 12, v: 10}, {u: 13, v: 10}, {u: 13, v: 11},  {u: 14, v: 11}, {u: 2, v: 12}, {u: 3, v: 12},  {u: 4, v: 12}, {u: 4, v: 13}, {u: 5, v: 13}, {u: 6, v: 13},  {u: 7, v: 13}, {u: 8, v: 13}, {u: 9, v: 13}, {u: 7, v: 14},  {u: 8, v: 14}]
    },
    
    
    
    GEM_HORIZONTAL: {
      name: "GEM_HORIZONTAL",
      ORE: [{u: 6, v: 1}, {u: 7, v: 1}, {u: 6, v: 2}, {u: 7, v: 2}, {u: 12, v: 3}, {u: 13, v: 3}, {u: 4, v: 4}, {u: 5, v: 4}, {u: 12, v: 4}, {u: 13, v: 4}, {u: 4, v: 5}, {u: 5, v: 5}, {u: 6, v: 5}, {u: 7, v: 5}, {u: 6, v: 6}, {u: 7, v: 6}, {u: 6, v: 8}, {u: 7, v: 8}, {u: 6, v: 9}, {u: 7, v: 9}, {u: 10, v: 9}, {u: 11, v: 9}, {u: 10, v: 10}, {u: 11, v: 10}, {u: 13, v: 10}, {u: 14, v: 10}, {u: 7, v: 11}, {u: 8, v: 11}, {u: 13, v: 11}, {u: 14, v: 11}, {u: 7, v: 12}, {u: 8, v: 12}, {u: 1, v: 13}, {u: 2, v: 13}, {u: 1, v: 14}, {u: 2, v: 14}],
      SMALL_ORE: [{u: 7, v: 2}, {u: 8, v: 2}, {u: 3, v: 3}, {u: 4, v: 3}, {u: 5, v: 3}, {u: 6, v: 3}, {u: 7, v: 3}, {u: 11, v: 3}, {u: 12, v: 3}, {u: 13, v: 3}, {u: 10, v: 6}, {u: 11, v: 6}, {u: 12, v: 6}, {u: 13, v: 6}, {u: 1, v: 7}, {u: 2, v: 7}, {u: 3, v: 7}, {u: 4, v: 7}, {u: 8, v: 7}, {u: 9, v: 7}, {u: 10, v: 7}, {u: 13, v: 7}, {u: 14, v: 7}, {u: 4, v: 8}, {u: 5, v: 8}, {u: 10, v: 10}, {u: 11, v: 10}, {u: 12, v: 10}, {u: 13, v: 10}, {u: 13, v: 11},  {u: 14, v: 11}, {u: 2, v: 12}, {u: 3, v: 12},  {u: 4, v: 12}, {u: 4, v: 13}, {u: 5, v: 13}, {u: 6, v: 13},  {u: 7, v: 13}, {u: 8, v: 13}, {u: 9, v: 13}, {u: 7, v: 14},  {u: 8, v: 14}]
    },
    GEM_VERTICAL: {
      name: "GEM_VERTICAL",
      ORE: [{u: 6, v: 1}, {u: 7, v: 1}, {u: 6, v: 2}, {u: 7, v: 2}, {u: 12, v: 3}, {u: 13, v: 3}, {u: 4, v: 4}, {u: 5, v: 4}, {u: 12, v: 4}, {u: 13, v: 4}, {u: 4, v: 5}, {u: 5, v: 5}, {u: 6, v: 5}, {u: 7, v: 5}, {u: 6, v: 6}, {u: 7, v: 6}, {u: 6, v: 8}, {u: 7, v: 8}, {u: 6, v: 9}, {u: 7, v: 9}, {u: 10, v: 9}, {u: 11, v: 9}, {u: 10, v: 10}, {u: 11, v: 10}, {u: 13, v: 10}, {u: 14, v: 10}, {u: 7, v: 11}, {u: 8, v: 11}, {u: 13, v: 11}, {u: 14, v: 11}, {u: 7, v: 12}, {u: 8, v: 12}, {u: 1, v: 13}, {u: 2, v: 13}, {u: 1, v: 14}, {u: 2, v: 14}],
      SMALL_ORE: [{u: 7, v: 2}, {u: 8, v: 2}, {u: 3, v: 3}, {u: 4, v: 3}, {u: 5, v: 3}, {u: 6, v: 3}, {u: 7, v: 3}, {u: 11, v: 3}, {u: 12, v: 3}, {u: 13, v: 3}, {u: 10, v: 6}, {u: 11, v: 6}, {u: 12, v: 6}, {u: 13, v: 6}, {u: 1, v: 7}, {u: 2, v: 7}, {u: 3, v: 7}, {u: 4, v: 7}, {u: 8, v: 7}, {u: 9, v: 7}, {u: 10, v: 7}, {u: 13, v: 7}, {u: 14, v: 7}, {u: 4, v: 8}, {u: 5, v: 8}, {u: 10, v: 10}, {u: 11, v: 10}, {u: 12, v: 10}, {u: 13, v: 10}, {u: 13, v: 11},  {u: 14, v: 11}, {u: 2, v: 12}, {u: 3, v: 12},  {u: 4, v: 12}, {u: 4, v: 13}, {u: 5, v: 13}, {u: 6, v: 13},  {u: 7, v: 13}, {u: 8, v: 13}, {u: 9, v: 13}, {u: 7, v: 14},  {u: 8, v: 14}]
    },
    DIAMOND: {
      name: "DIAMOND",
      ORE: [{u: 6, v: 1}, {u: 7, v: 1}, {u: 6, v: 2}, {u: 7, v: 2}, {u: 12, v: 3}, {u: 13, v: 3}, {u: 4, v: 4}, {u: 5, v: 4}, {u: 12, v: 4}, {u: 13, v: 4}, {u: 4, v: 5}, {u: 5, v: 5}, {u: 6, v: 5}, {u: 7, v: 5}, {u: 6, v: 6}, {u: 7, v: 6}, {u: 6, v: 8}, {u: 7, v: 8}, {u: 6, v: 9}, {u: 7, v: 9}, {u: 10, v: 9}, {u: 11, v: 9}, {u: 10, v: 10}, {u: 11, v: 10}, {u: 13, v: 10}, {u: 14, v: 10}, {u: 7, v: 11}, {u: 8, v: 11}, {u: 13, v: 11}, {u: 14, v: 11}, {u: 7, v: 12}, {u: 8, v: 12}, {u: 1, v: 13}, {u: 2, v: 13}, {u: 1, v: 14}, {u: 2, v: 14}],
      SMALL_ORE: [{u: 7, v: 2}, {u: 8, v: 2}, {u: 3, v: 3}, {u: 4, v: 3}, {u: 5, v: 3}, {u: 6, v: 3}, {u: 7, v: 3}, {u: 11, v: 3}, {u: 12, v: 3}, {u: 13, v: 3}, {u: 10, v: 6}, {u: 11, v: 6}, {u: 12, v: 6}, {u: 13, v: 6}, {u: 1, v: 7}, {u: 2, v: 7}, {u: 3, v: 7}, {u: 4, v: 7}, {u: 8, v: 7}, {u: 9, v: 7}, {u: 10, v: 7}, {u: 13, v: 7}, {u: 14, v: 7}, {u: 4, v: 8}, {u: 5, v: 8}, {u: 10, v: 10}, {u: 11, v: 10}, {u: 12, v: 10}, {u: 13, v: 10}, {u: 13, v: 11},  {u: 14, v: 11}, {u: 2, v: 12}, {u: 3, v: 12},  {u: 4, v: 12}, {u: 4, v: 13}, {u: 5, v: 13}, {u: 6, v: 13},  {u: 7, v: 13}, {u: 8, v: 13}, {u: 9, v: 13}, {u: 7, v: 14},  {u: 8, v: 14}]
    },
    EMERALD: {
      name: "EMERALD",
      ORE: [{u: 6, v: 1}, {u: 7, v: 1}, {u: 6, v: 2}, {u: 7, v: 2}, {u: 12, v: 3}, {u: 13, v: 3}, {u: 4, v: 4}, {u: 5, v: 4}, {u: 12, v: 4}, {u: 13, v: 4}, {u: 4, v: 5}, {u: 5, v: 5}, {u: 6, v: 5}, {u: 7, v: 5}, {u: 6, v: 6}, {u: 7, v: 6}, {u: 6, v: 8}, {u: 7, v: 8}, {u: 6, v: 9}, {u: 7, v: 9}, {u: 10, v: 9}, {u: 11, v: 9}, {u: 10, v: 10}, {u: 11, v: 10}, {u: 13, v: 10}, {u: 14, v: 10}, {u: 7, v: 11}, {u: 8, v: 11}, {u: 13, v: 11}, {u: 14, v: 11}, {u: 7, v: 12}, {u: 8, v: 12}, {u: 1, v: 13}, {u: 2, v: 13}, {u: 1, v: 14}, {u: 2, v: 14}],
      SMALL_ORE: [{u: 7, v: 2}, {u: 8, v: 2}, {u: 3, v: 3}, {u: 4, v: 3}, {u: 5, v: 3}, {u: 6, v: 3}, {u: 7, v: 3}, {u: 11, v: 3}, {u: 12, v: 3}, {u: 13, v: 3}, {u: 10, v: 6}, {u: 11, v: 6}, {u: 12, v: 6}, {u: 13, v: 6}, {u: 1, v: 7}, {u: 2, v: 7}, {u: 3, v: 7}, {u: 4, v: 7}, {u: 8, v: 7}, {u: 9, v: 7}, {u: 10, v: 7}, {u: 13, v: 7}, {u: 14, v: 7}, {u: 4, v: 8}, {u: 5, v: 8}, {u: 10, v: 10}, {u: 11, v: 10}, {u: 12, v: 10}, {u: 13, v: 10}, {u: 13, v: 11},  {u: 14, v: 11}, {u: 2, v: 12}, {u: 3, v: 12},  {u: 4, v: 12}, {u: 4, v: 13}, {u: 5, v: 13}, {u: 6, v: 13},  {u: 7, v: 13}, {u: 8, v: 13}, {u: 9, v: 13}, {u: 7, v: 14},  {u: 8, v: 14}]
    },
    RUBY: {
      name: "RUBY",
      ORE: [{u: 6, v: 1}, {u: 7, v: 1}, {u: 6, v: 2}, {u: 7, v: 2}, {u: 12, v: 3}, {u: 13, v: 3}, {u: 4, v: 4}, {u: 5, v: 4}, {u: 12, v: 4}, {u: 13, v: 4}, {u: 4, v: 5}, {u: 5, v: 5}, {u: 6, v: 5}, {u: 7, v: 5}, {u: 6, v: 6}, {u: 7, v: 6}, {u: 6, v: 8}, {u: 7, v: 8}, {u: 6, v: 9}, {u: 7, v: 9}, {u: 10, v: 9}, {u: 11, v: 9}, {u: 10, v: 10}, {u: 11, v: 10}, {u: 13, v: 10}, {u: 14, v: 10}, {u: 7, v: 11}, {u: 8, v: 11}, {u: 13, v: 11}, {u: 14, v: 11}, {u: 7, v: 12}, {u: 8, v: 12}, {u: 1, v: 13}, {u: 2, v: 13}, {u: 1, v: 14}, {u: 2, v: 14}],
      SMALL_ORE: [{u: 7, v: 2}, {u: 8, v: 2}, {u: 3, v: 3}, {u: 4, v: 3}, {u: 5, v: 3}, {u: 6, v: 3}, {u: 7, v: 3}, {u: 11, v: 3}, {u: 12, v: 3}, {u: 13, v: 3}, {u: 10, v: 6}, {u: 11, v: 6}, {u: 12, v: 6}, {u: 13, v: 6}, {u: 1, v: 7}, {u: 2, v: 7}, {u: 3, v: 7}, {u: 4, v: 7}, {u: 8, v: 7}, {u: 9, v: 7}, {u: 10, v: 7}, {u: 13, v: 7}, {u: 14, v: 7}, {u: 4, v: 8}, {u: 5, v: 8}, {u: 10, v: 10}, {u: 11, v: 10}, {u: 12, v: 10}, {u: 13, v: 10}, {u: 13, v: 11},  {u: 14, v: 11}, {u: 2, v: 12}, {u: 3, v: 12},  {u: 4, v: 12}, {u: 4, v: 13}, {u: 5, v: 13}, {u: 6, v: 13},  {u: 7, v: 13}, {u: 8, v: 13}, {u: 9, v: 13}, {u: 7, v: 14},  {u: 8, v: 14}]
    },
    OPAL: {
      name: "OPAL",
      ORE: [{u: 6, v: 1}, {u: 7, v: 1}, {u: 6, v: 2}, {u: 7, v: 2}, {u: 12, v: 3}, {u: 13, v: 3}, {u: 4, v: 4}, {u: 5, v: 4}, {u: 12, v: 4}, {u: 13, v: 4}, {u: 4, v: 5}, {u: 5, v: 5}, {u: 6, v: 5}, {u: 7, v: 5}, {u: 6, v: 6}, {u: 7, v: 6}, {u: 6, v: 8}, {u: 7, v: 8}, {u: 6, v: 9}, {u: 7, v: 9}, {u: 10, v: 9}, {u: 11, v: 9}, {u: 10, v: 10}, {u: 11, v: 10}, {u: 13, v: 10}, {u: 14, v: 10}, {u: 7, v: 11}, {u: 8, v: 11}, {u: 13, v: 11}, {u: 14, v: 11}, {u: 7, v: 12}, {u: 8, v: 12}, {u: 1, v: 13}, {u: 2, v: 13}, {u: 1, v: 14}, {u: 2, v: 14}],
      SMALL_ORE: [{u: 7, v: 2}, {u: 8, v: 2}, {u: 3, v: 3}, {u: 4, v: 3}, {u: 5, v: 3}, {u: 6, v: 3}, {u: 7, v: 3}, {u: 11, v: 3}, {u: 12, v: 3}, {u: 13, v: 3}, {u: 10, v: 6}, {u: 11, v: 6}, {u: 12, v: 6}, {u: 13, v: 6}, {u: 1, v: 7}, {u: 2, v: 7}, {u: 3, v: 7}, {u: 4, v: 7}, {u: 8, v: 7}, {u: 9, v: 7}, {u: 10, v: 7}, {u: 13, v: 7}, {u: 14, v: 7}, {u: 4, v: 8}, {u: 5, v: 8}, {u: 10, v: 10}, {u: 11, v: 10}, {u: 12, v: 10}, {u: 13, v: 10}, {u: 13, v: 11},  {u: 14, v: 11}, {u: 2, v: 12}, {u: 3, v: 12},  {u: 4, v: 12}, {u: 4, v: 13}, {u: 5, v: 13}, {u: 6, v: 13},  {u: 7, v: 13}, {u: 8, v: 13}, {u: 9, v: 13}, {u: 7, v: 14},  {u: 8, v: 14}]
    }
  },
  Action : {
    ColourMultiply: function (colour) {
      this.name = "colour_transform";
      this.colour = colour;
      this.act = function (ccolour) {
        let A1 = ((this.colour >> 24) & 0xff);
        let R1 = ((this.colour >> 16) & 0xff);
        let G1 = ((this.colour >>  8) & 0xff);
        let B1 = ((this.colour      ) & 0xff);
        
        let A2 = ((ccolour >> 24) & 0xff);
        let R2 = ((ccolour >> 16) & 0xff);
        let G2 = ((ccolour >>  8) & 0xff);
        let B2 = ((ccolour      ) & 0xff);
        
        let A1n = A1 / 255.0;
        let R1n = R1 / 255.0;
        let G1n = G1 / 255.0;
        let B1n = B1 / 255.0;
        
        let A2n = A2 / 255.0;
        let R2n = R2 / 255.0;
        let G2n = G2 / 255.0;
        let B2n = B2 / 255.0;
        
        let Amn = 1;
        //A2n;
        let Rmn = R1n * R2n;
        let Gmn = G1n * G2n;
        let Bmn = B1n * B2n;
        
        let Am = Amn * 255;
        let Rm = Rmn * 255;
        let Gm = Gmn * 255;
        let Bm = Bmn * 255;
        
        return (Am & 0xff) << 24 | (Rm & 0xff) << 16 | (Gm & 0xff) << 8 | (Bm & 0xff);
      };
    },
    SizeMultiply: function (size) {
      this.name = "size_transform";
      this.size = size;
    },
    Layering: function (layer) {
      this.name = "layering_transform";
      this.layer = layer;
      //this.act = function (ctexture) {}
    }
  },
  //Bitmap android Bitmap
  transformIcon: function(bitmap, uvs, action) {
    let copyed = bitmap.copy(android.graphics.Bitmap.Config.ARGB_8888, true)
    if(action.name == "colour_transform") {
    for(let uv in uvs) {
      /*"copyed.setPixel(uvs[uv].u, uvs[uv].v, this.RGBAtoARGB(action.act(this.ARGBtoRGBA(copyed.getPixel(uvs[uv].u, uvs[uv].v)))));*/
      copyed.setPixel(uvs[uv].u, uvs[uv].v, action.act(copyed.getPixel(uvs[uv].u, uvs[uv].v)));
    }
    } else if(action.name == "layering_transform") {
      for(let uv in uvs) {
        copyed.setPixel(uvs[uv].u, uvs[uv].v, action.layer.getPixel(uvs[uv].u, uvs[uv].v));
      }
    }
    return copyed;
  }
}

/*;*/

let coords = {
  ALLOY_SMELTER:  [{u: 8, v: 2}, {u: 9, v: 2}, {u: 10, v: 2}, {u: 11, v: 2}, {u: 12, v: 2}, {u: 7, v: 3}, {u: 8, v: 3}, {u: 9, v: 3}, {u: 10, v: 3},
{u: 11, v: 3}, {u: 12, v: 3}, {u: 13, v: 3}, {u: 2, v: 4}, {u: 3, v: 4}, {u: 4, v: 4}, {u: 5, v: 4}, {u: 6, v: 4}, {u: 7, v: 4}, {u: 8, v: 4}, {u: 9, v: 4}, {u: 10, v: 4},
{u: 11, v: 4}, {u: 12, v: 4}, {u: 13, v: 4}, {u: 2, v: 5}, {u: 3, v: 5}, {u: 4, v: 5}, {u: 5, v: 5}, {u: 6, v: 5}, {u: 7, v: 5}, {u: 8, v: 5}, {u: 9, v: 5}, {u: 10, v: 5},
{u: 11, v: 5}, {u: 12, v: 5}, {u: 13, v: 5}, {u: 2, v: 6}, {u: 3, v: 6}, {u: 4, v: 6}, {u: 5, v: 6}, {u: 6, v: 6}, {u: 7, v: 6}, {u: 8, v: 6}, {u: 9, v: 6}, {u: 10, v: 6},
{u: 11, v: 6}, {u: 12, v: 6}, {u: 13, v: 6}, {u: 2, v: 7}, {u: 3, v: 7}, {u: 4, v: 7}, {u: 5, v: 7}, {u: 6, v: 7}, {u: 7, v: 7}, {u: 8, v: 7}, {u: 9, v: 7}, {u: 10, v: 7}, {u: 11, v: 7}, {u: 12, v: 7}, {u: 13, v: 7}
], 
FURNACE:  [{u: 3, v: 2}, {u: 4, v: 2}, {u: 5, v: 2}, {u: 6, v: 2}, {u: 7, v: 2}, {u: 8, v: 2}, {u: 9, v: 2}, {u: 10, v: 2}, {u: 11, v: 2}, {u: 12, v: 2}, 
{u: 2, v: 3}, {u: 3, v: 3}, {u: 4, v: 3}, {u: 5, v: 3}, {u: 6, v: 3}, {u: 7, v: 3}, {u: 8, v: 3}, {u: 9, v: 3}, {u: 10, v: 3}, {u: 11, v: 3}, {u: 12, v: 3}, {u: 13, v: 3},
{u: 2, v: 4}, {u: 3, v: 4}, {u: 4, v: 4}, {u: 5, v: 4}, {u: 6, v: 4}, {u: 7, v: 4}, {u: 8, v: 4}, {u: 9, v: 4}, {u: 10, v: 4}, {u: 11, v: 4}, {u: 12, v: 4}, {u: 13, v: 4},
{u: 2, v: 5}, {u: 3, v: 5}, {u: 4, v: 5}, {u: 5, v: 5}, {u: 6, v: 5}, {u: 7, v: 5}, {u: 8, v: 5}, {u: 9, v: 5}, {u: 10, v: 5}, {u: 11, v: 5}, {u: 12, v: 5}, {u: 13, v: 5}, 
{u: 2, v: 6}, {u: 3, v: 6}, {u: 4, v: 6}, {u: 5, v: 6}, {u: 6, v: 6}, {u: 7, v: 6}, {u: 8, v: 6}, {u: 9, v: 6}, {u: 10, v: 6}, {u: 11, v: 6}, {u: 12, v: 6}, {u: 13, v: 6}, 
{u: 2, v: 7}, {u: 3, v: 7}, {u: 4, v: 7}, {u: 5, v: 7}, {u: 6, v: 7}, {u: 7, v: 7}, {u: 8, v: 7}, {u: 9, v: 7}, {u: 10, v: 7}, {u: 11, v: 7}, {u: 12, v: 7}, {u: 13, v: 7}],
MACERATOR: [{u: 2, v: 4}, {u: 3, v: 4}, {u: 4, v: 4}, {u: 5, v: 4}, {u: 6, v: 4}, {u: 7, v: 4}, {u: 8, v: 4}, {u: 9, v: 4}, {u: 10, v: 4}, {u: 11, v: 4}, {u: 12, v: 4}, {u: 13, v: 4},
{u: 2, v: 5}, {u: 3, v: 5}, {u: 4, v: 5}, {u: 5, v: 5}, {u: 6, v: 5}, {u: 7, v: 5}, {u: 8, v: 5}, {u: 9, v: 5}, {u: 10, v: 5}, {u: 11, v: 5}, {u: 12, v: 5}, {u: 13, v: 5},
{u: 2, v: 6}, {u: 3, v: 6}, {u: 4, v: 6}, {u: 5, v: 6}, {u: 6, v: 6}, {u: 7, v: 6}, {u: 8, v: 6}, {u: 9, v: 6}, {u: 10, v: 6}, {u: 11, v: 6}, {u: 12, v: 6}, {u: 13, v: 6},
{u: 2, v: 7}, {u: 3, v: 7}, {u: 4, v: 7}, {u: 5, v: 7}, {u: 6, v: 7}, {u: 7, v: 7}, {u: 8, v: 7}, {u: 9, v: 7}, {u: 10, v: 7}, {u: 11, v: 7}, {u: 12, v: 7}, {u: 13, v: 7},
{u: 2, v: 8}, {u: 3, v: 8}, {u: 4, v: 8}, {u: 5, v: 8}, {u: 6, v: 8}, {u: 7, v: 8}, {u: 8, v: 8}, {u: 9, v: 8}, {u: 10, v: 8}, {u: 11, v: 8}, {u: 12, v: 8}, {u: 13, v: 8},
{u: 2, v: 9}, {u: 3, v: 9}, {u: 4, v: 9}, {u: 5, v: 9}, {u: 6, v: 9}, {u: 7, v: 9}, {u: 8, v: 9}, {u: 9, v: 9}, {u: 10, v: 9}, {u: 11, v: 9}, {u: 12, v: 9}, {u: 13, v: 9},
  {u: 2, v: 10}, {u: 3, v: 10}, {u: 4, v: 10}, {u: 5, v: 10}, {u: 6, v: 10}, {u: 7, v: 10}, {u: 8, v: 10}, {u: 9, v: 10}, {u: 10, v: 10}, {u: 11, v: 10}, {u: 12, v: 10}, {u: 13, v: 10},
  {u: 2, v: 11}, {u: 3, v: 11}, {u: 4, v: 11}, {u: 5, v: 11}, {u: 6, v: 11}, {u: 7, v: 11}, {u: 8, v: 11}, {u: 9, v: 11}, {u: 10, v: 11}, {u: 11, v: 11}, {u: 12, v: 11}, {u: 13, v: 11},
  {u: 2, v: 12}, {u: 3, v: 12}, {u: 4, v: 12}, {u: 5, v: 12}, {u: 6, v: 12}, {u: 7, v: 12}, {u: 8, v: 12}, {u: 9, v: 12}, {u: 10, v: 12}, {u: 11, v: 12}, {u: 12, v: 12}, {u: 13, v: 12},
  {u: 2, v: 13}, {u: 3, v: 13}, {u: 4, v: 13}, {u: 5, v: 13}, {u: 6, v: 13}, {u: 7, v: 13}, {u: 8, v: 13}, {u: 9, v: 13}, {u: 10, v: 13}, {u: 11, v: 13}, {u: 12, v: 13}, {u: 13, v: 13},
],
COMPRESSOR:  [{u: 2, v: 4}, {u: 3, v: 4}, {u: 4, v: 4}, {u: 5, v: 4}, {u: 6, v: 4}, {u: 7, v: 4}, {u: 8, v: 4}, {u: 9, v: 4}, {u: 10, v: 4}, {u: 11, v: 4}, {u: 12, v: 4}, {u: 13, v: 4},
{u: 2, v: 5}, {u: 3, v: 5}, {u: 4, v: 5}, {u: 5, v: 5}, {u: 6, v: 5}, {u: 7, v: 5}, {u: 8, v: 5}, {u: 9, v: 5}, {u: 10, v: 5}, {u: 11, v: 5}, {u: 12, v: 5}, {u: 13, v: 5},
{u: 2, v: 6}, {u: 3, v: 6}, {u: 4, v: 6}, {u: 5, v: 6}, {u: 6, v: 6}, {u: 7, v: 6}, {u: 8, v: 6}, {u: 9, v: 6}, {u: 10, v: 6}, {u: 11, v: 6}, {u: 12, v: 6}, {u: 13, v: 6},
{u: 2, v: 7}, {u: 3, v: 7}, {u: 4, v: 7}, {u: 5, v: 7}, {u: 6, v: 7}, {u: 7, v: 7}, {u: 8, v: 7}, {u: 9, v: 7}, {u: 10, v: 7}, {u: 11, v: 7}, {u: 12, v: 7}, {u: 13, v: 7},
{u: 2, v: 8}, {u: 3, v: 8}, {u: 4, v: 8}, {u: 5, v: 8}, {u: 6, v: 8}, {u: 7, v: 8}, {u: 8, v: 8}, {u: 9, v: 8}, {u: 10, v: 8}, {u: 11, v: 8}, {u: 12, v: 8}, {u: 13, v: 8},
{u: 2, v: 9}, {u: 3, v: 9}, {u: 4, v: 9}, {u: 5, v: 9}, {u: 6, v: 9}, {u: 7, v: 9}, {u: 8, v: 9}, {u: 9, v: 9}, {u: 10, v: 9}, {u: 11, v: 9}, {u: 12, v: 9}, {u: 13, v: 9},
  {u: 2, v: 10}, {u: 3, v: 10}, {u: 4, v: 10}, {u: 5, v: 10}, {u: 6, v: 10}, {u: 7, v: 10}, {u: 8, v: 10}, {u: 9, v: 10}, {u: 10, v: 10}, {u: 11, v: 10}, {u: 12, v: 10}, {u: 13, v: 10},
  {u: 2, v: 11}, {u: 3, v: 11}, {u: 4, v: 11}, {u: 5, v: 11}, {u: 6, v: 11}, {u: 7, v: 11}, {u: 8, v: 11}, {u: 9, v: 11}, {u: 10, v: 11}, {u: 11, v: 11}, {u: 12, v: 11}, {u: 13, v: 11},
  {u: 2, v: 12}, {u: 3, v: 12}, {u: 4, v: 12}, {u: 5, v: 12}, {u: 6, v: 12}, {u: 7, v: 12}, {u: 8, v: 12}, {u: 9, v: 12}, {u: 10, v: 12}, {u: 11, v: 12}, {u: 12, v: 12}, {u: 13, v: 12},
  {u: 2, v: 13}, {u: 3, v: 13}, {u: 4, v: 13}, {u: 5, v: 13}, {u: 6, v: 13}, {u: 7, v: 13}, {u: 8, v: 13}, {u: 9, v: 13}, {u: 10, v: 13}, {u: 11, v: 13}, {u: 12, v: 13}, {u: 13, v: 13},
],
HAMMER:  [{u: 2, v: 4}, {u: 3, v: 4}, {u: 4, v: 4}, {u: 5, v: 4}, {u: 6, v: 4}, {u: 7, v: 4}, {u: 8, v: 4}, {u: 9, v: 4}, {u: 10, v: 4}, {u: 11, v: 4}, {u: 12, v: 4}, {u: 13, v: 4},
{u: 2, v: 5}, {u: 3, v: 5}, {u: 4, v: 5}, {u: 5, v: 5}, {u: 6, v: 5}, {u: 7, v: 5}, {u: 8, v: 5}, {u: 9, v: 5}, {u: 10, v: 5}, {u: 11, v: 5}, {u: 12, v: 5}, {u: 13, v: 5},
{u: 2, v: 6}, {u: 3, v: 6}, {u: 4, v: 6}, {u: 5, v: 6}, {u: 6, v: 6}, {u: 7, v: 6}, {u: 8, v: 6}, {u: 9, v: 6}, {u: 10, v: 6}, {u: 11, v: 6}, {u: 12, v: 6}, {u: 13, v: 6},
{u: 2, v: 7}, {u: 3, v: 7}, {u: 4, v: 7}, {u: 5, v: 7}, {u: 6, v: 7}, {u: 7, v: 7}, {u: 8, v: 7}, {u: 9, v: 7}, {u: 10, v: 7}, {u: 11, v: 7}, {u: 12, v: 7}, {u: 13, v: 7},
{u: 2, v: 8}, {u: 3, v: 8}, {u: 4, v: 8}, {u: 5, v: 8}, {u: 6, v: 8}, {u: 7, v: 8}, {u: 8, v: 8}, {u: 9, v: 8}, {u: 10, v: 8}, {u: 11, v: 8}, {u: 12, v: 8}, {u: 13, v: 8},
{u: 2, v: 9}, {u: 3, v: 9}, {u: 4, v: 9}, {u: 5, v: 9}, {u: 6, v: 9}, {u: 7, v: 9}, {u: 8, v: 9}, {u: 9, v: 9}, {u: 10, v: 9}, {u: 11, v: 9}, {u: 12, v: 9}, {u: 13, v: 9},
  {u: 2, v: 10}, {u: 3, v: 10}, {u: 4, v: 10}, {u: 5, v: 10}, {u: 6, v: 10}, {u: 7, v: 10}, {u: 8, v: 10}, {u: 9, v: 10}, {u: 10, v: 10}, {u: 11, v: 10}, {u: 12, v: 10}, {u: 13, v: 10},
  {u: 2, v: 11}, {u: 3, v: 11}, {u: 4, v: 11}, {u: 5, v: 11}, {u: 6, v: 11}, {u: 7, v: 11}, {u: 8, v: 11}, {u: 9, v: 11}, {u: 10, v: 11}, {u: 11, v: 11}, {u: 12, v: 11}, {u: 13, v: 11},
  {u: 2, v: 12}, {u: 3, v: 12}, {u: 4, v: 12}, {u: 5, v: 12}, {u: 6, v: 12}, {u: 7, v: 12}, {u: 8, v: 12}, {u: 9, v: 12}, {u: 10, v: 12}, {u: 11, v: 12}, {u: 12, v: 12}, {u: 13, v: 12},
  {u: 2, v: 13}, {u: 3, v: 13}, {u: 4, v: 13}, {u: 5, v: 13}, {u: 6, v: 13}, {u: 7, v: 13}, {u: 8, v: 13}, {u: 9, v: 13}, {u: 10, v: 13}, {u: 11, v: 13}, {u: 12, v: 13}, {u: 13, v: 13},
],
 EXTRACTOR: [{u: 3, v: 1}, {u: 4, v: 1}, {u: 5, v: 1}, {u: 10, v: 1}, {u: 11, v: 1}, {u: 12, v: 1},
{u: 3, v: 2}, {u: 4, v: 2}, {u: 5, v: 2}, {u: 10, v: 2}, {u: 11, v: 2}, {u: 12, v: 2},
{u: 3, v: 3}, {u: 4, v: 3}, {u: 5, v: 3}, {u: 10, v: 3}, {u: 11, v: 3}, {u: 12, v: 3},
{u: 3, v: 4}, {u: 4, v: 4}, {u: 5, v: 4}, {u: 10, v: 4}, {u: 11, v: 4}, {u: 12, v: 4},
{u: 3, v: 5}, {u: 4, v: 5}, {u: 5, v: 5}, {u: 10, v: 5}, {u: 11, v: 5}, {u: 12, v: 5},
{u: 3, v: 6}, {u: 4, v: 6}, {u: 5, v: 6}, {u: 10, v: 6}, {u: 11, v: 6}, {u: 12, v: 6},
{u: 3, v: 7}, {u: 4, v: 7}, {u: 5, v: 7}, {u: 10, v: 7}, {u: 11, v: 7}, {u: 12, v: 7},
{u: 3, v: 8}, {u: 4, v: 8}, {u: 5, v: 8}, {u: 10, v: 8}, {u: 11, v: 8}, {u: 12, v: 8},
{u: 3, v: 9}, {u: 4, v: 9}, {u: 5, v: 9}, {u: 10, v: 9}, {u: 11, v: 9}, {u: 12, v: 9},
  {u: 3, v: 10}, {u: 4, v: 10}, {u: 5, v: 10}, {u: 10, v: 10}, {u: 11, v: 10}, {u: 12, v: 10},
  {u: 3, v: 11}, {u: 4, v: 11}, {u: 5, v: 11}, {u: 6, v: 11}, {u: 7, v: 11}, {u: 8, v: 11}, {u: 9, v: 11}, {u: 10, v: 11}, {u: 11, v: 11}, {u: 12, v: 11},
  {u: 3, v: 12}, {u: 4, v: 12}, {u: 5, v: 12}, {u: 6, v: 12}, {u: 7, v: 12}, {u: 8, v: 12}, {u: 9, v: 12}, {u: 10, v: 12}, {u: 11, v: 12}, {u: 12, v: 12},
  {u: 3, v: 13}, {u: 4, v: 13}, {u: 5, v: 13}, {u: 6, v: 13}, {u: 7, v: 13}, {u: 8, v: 13}, {u: 9, v: 13}, {u: 10, v: 13}, {u: 11, v: 13}, {u: 12, v: 13},
  {u: 3, v: 14}, {u: 4, v: 14}, {u: 5, v: 14}, {u: 6, v: 14}, {u: 7, v: 14}, {u: 8, v: 14}, {u: 9, v: 14}, {u: 10, v: 14}, {u: 11, v: 14}, {u: 12, v: 14}],
  BOILER: [
    {u: 4, v: 10}, {u: 5, v: 10}, {u: 6, v: 10}, {u: 7, v: 10}, {u: 8, v: 10},
{u: 9, v: 10}, {u: 10, v: 10}, {u: 11, v: 10}, 
{u: 3, v: 11}, {u: 4, v: 11}, {u: 5, v: 11},
{u: 6, v: 11}, {u: 7, v: 11}, {u: 8, v: 11}, {u: 9, v: 11}, {u: 10, v: 11}, {u: 11, v: 11}, {u: 12, v: 11}, 
{u: 2, v: 12}, {u: 3, v: 12}, {u: 4, v: 12}, {u: 5, v: 12}, {u: 6, v: 12}, {u: 7, v: 12}, {u: 8, v: 12}, {u: 9, v: 12}, {u: 10, v: 12}, {u: 11, v: 12}, {u: 12, v: 12}, {u: 13, v: 12}, 
{u: 2, v: 13}, {u: 3, v: 13}, {u: 4, v: 13}, {u: 5, v: 13}, {u: 6, v: 13}, {u: 7, v: 13}, {u: 8, v: 13}, {u: 9, v: 13}, {u: 10, v: 13}, {u: 11, v: 13}, {u: 12, v: 13}, {u: 13, v: 13}, 
{u: 2, v: 14}, {u: 3, v: 14}, {u: 4, v: 14}, {u: 5, v: 14}, {u: 6, v: 14}, {u: 7, v: 14}, {u: 8, v: 14}, {u: 9, v: 14}, {u: 10, v: 14}, {u: 11, v: 14}, {u: 12, v: 14}, {u: 13, v: 14},
{u: 2, v: 15}, {u: 3, v: 15}, {u: 4, v: 15}, {u: 5, v: 15}, {u: 6, v: 15}, {u: 7, v: 15}, {u: 8, v: 15}, {u: 9, v: 15}, {u: 10, v: 15}, {u: 11, v: 15}, {u: 12, v: 15}, {u: 13, v: 15}, 
  ],
  PIPE_PUT: [
    {u: 4, v: 4}, {u: 5, v: 4}, {u: 6, v: 4}, {u: 7, v: 4}, {u: 8, v: 4}, {u: 9, v: 4}, {u: 10, v: 4}, {u: 11, v: 4},
     {u: 4, v: 5}, {u: 5, v: 5}, {u: 6, v: 5}, {u: 7, v: 5}, {u: 8, v: 5}, {u: 9, v: 5}, {u: 10, v: 5}, {u: 11, v: 5},
 {u: 4, v: 6}, {u: 5, v: 6}, {u: 6, v: 6}, {u: 7, v: 6}, {u: 8, v: 6}, {u: 9, v: 6}, {u: 10, v: 6}, {u: 11, v: 6},
{u: 4, v: 7}, {u: 5, v: 7}, {u: 6, v: 7}, {u: 7, v: 7}, {u: 8, v: 7}, {u: 9, v: 7}, {u: 10, v: 7}, {u: 11, v: 7},
 {u: 4, v: 8}, {u: 5, v: 8}, {u: 6, v: 8}, {u: 7, v: 8}, {u: 8, v: 8}, {u: 9, v: 8}, {u: 10, v: 8}, {u: 11, v: 8},
{u: 4, v: 9}, {u: 5, v: 9}, {u: 6, v: 9}, {u: 7, v: 9}, {u: 8, v: 9}, {u: 9, v: 9}, {u: 10, v: 9}, {u: 11, v: 9},
 {u: 4, v: 10}, {u: 5, v: 10}, {u: 6, v: 10}, {u: 7, v: 10}, {u: 8, v: 10}, {u: 9, v: 10}, {u: 10, v: 10}, {u: 11, v: 10},
{u: 4, v: 11}, {u: 5, v: 11}, {u: 6, v: 11}, {u: 7, v: 11}, {u: 8, v: 11}, {u: 9, v: 11}, {u: 10, v: 11}, {u: 11, v: 11}
  ]
}

let layer = new IconTransformator.Action.Layering();
layer.layer = android.graphics.BitmapFactory.decodeFile(__dir__ + "res/terrain-atlas/iconsets/OVERLAY_PIPE.png");

let alloy_smelterbitma = IconTransformator.transformIcon(android.graphics.BitmapFactory.decodeFile(__dir__ + "res/terrain-atlas/bronze_hull.png"), coords.PIPE_PUT, layer);
let fil = new java.io.File(__dir__ + "res/terrain-atlas/generated/bronze_hull_put.png");
let fOu = new java.io.FileOutputStream(fil);
alloy_smelterbitma.compress(android.graphics.Bitmap.CompressFormat.PNG, 85, fOu);
fOu.flush();
fOu.close();

let alloy_smeltema = IconTransformator.transformIcon(android.graphics.BitmapFactory.decodeFile(__dir__ + "res/terrain-atlas/bronzebrick_hull.png"), coords.PIPE_PUT, layer);
let filq = new java.io.File(__dir__ + "res/terrain-atlas/generated/bronzebrick_hull_put.png");
let fOuq = new java.io.FileOutputStream(filq);
alloy_smeltema.compress(android.graphics.Bitmap.CompressFormat.PNG, 85, fOuq);
fOuq.flush();
fOuq.close();

let tileToUpdate = null;
let MetaRenderer = {
  rotationMap: [
    		[3, 2, 0, 1, 4, 5],
				[2, 3, 1, 0, 5, 4],
				[0, 1, 3, 2, 5, 4],
				[0, 1, 2, 3, 4, 5],
				[0, 1, 4, 5, 3, 2],
				[0, 1, 5, 4, 2, 3],
    ],
  getEntityYaw: ModAPI.requireGlobal("Entity.getYaw"),
  getEntityPitch: ModAPI.requireGlobal("Entity.getPitch"),
   invalidateModel: function (coords, block, texture, rotatedtexture, puts) {
     Logger.Log(coords.side, "ast");
     let array = [texture.arr[rotatedtexture[0]], texture.arr[rotatedtexture[1]], texture.arr[rotatedtexture[2]], texture.arr[rotatedtexture[3]], texture.arr[rotatedtexture[4]], texture.arr[rotatedtexture[5]]];
     //Logger.Log(World.getTileEntity(coords.x, coords.y, coords.z).data.put.length, "xenaft");
      for(let put in puts) {
        Logger.Log(puts[put], "xen");
      if(puts[put] === null || puts[put] === undefined) continue;
	    puts[put] = [array[puts[put]][0] + "_put", array[puts[put]][1]];
      }
     Logger.Log(array[coords.side], "ds");
    let model = BlockRenderer.createTexturedBlock(array);
    let ic = new ICRender.Model();
    ic.addEntry(model);
    
    BlockRenderer.mapAtCoords(coords.x, coords.y, coords.z, ic);
  },
  rotateBlockWithRotation: function (coords, block, rotation, isFull) {
    this.rotateBlock1WithRotation(coords, block, MachineDictionary.textures[block.id][block.data].arr, rotation, isFull);
  },
  rotateBlock: function (coords, block, isFull) {
    let rotation = this.getBlockRotation(isFull);
    this.rotateBlockWithRotation(coords, block, rotation, isFull);
  },
  rotateBlock1: function (coords, block, texture, isFull) {
    let rotation = this.getBlockRotation(isFull);
    this.rotateBlock1WithRotation(coords, block, texture, rotation, isFull);
  },
  rotateBlock1WithRotation: function (coords, block, texture, rotation, isFull) {
    //sharik
    /*for(let xx = -1; xx < 2; xx += 2) {
            for(let yy = -1; yy < 2; yy += 2) {
            for(let zz = -1; zz < 2; zz += 2) {
            if((xx != 0 & yy != 0) | (xx != 0 & zz != 0) | (yy != 0 & zz != 0) | (xx != 0 & yy != 0 & zz != 0)) {
           continue;
            }
            if(World.getBlock(coords.x + xx, coords.y + yy, coords.z + zz).id == BlockID.gtblockpipe) {
              BlockRenderer.mapAtCoords(coords.x + xx, coords.y + yy, coords.z + zz, model);
            }
          }
       }
    }*/
    //sharik
    Logger.Log(rotation, "xex");
    let array = [texture[this.rotationMap[rotation][0]], texture[this.rotationMap[rotation][1]], texture[this.rotationMap[rotation][2]], texture[this.rotationMap[rotation][3]], texture[this.rotationMap[rotation][4]], texture[this.rotationMap[rotation][5]]];
    Logger.Log(texture[this.rotationMap[rotation][3]], "hexyllithium");
    Logger.Log(World.getTileEntity(coords.x, coords.y, coords.z).data.put.length, "xenoift");
    if(World.getTileEntity(coords.x, coords.y, coords.z).data.inited) {
      for(let i = 0; i < 6; i++) {
        if(World.getTileEntity(coords.x, coords.y, coords.z).data["put" + i] === null || World.getTileEntity(coords.x, coords.y, coords.z).data["put" + i] === undefined) continue;
      let side = World.getTileEntity(coords.x, coords.y, coords.z).blockRotationToWorldRotation(World.getTileEntity(coords.x, coords.y, coords.z).data["put" + i]);
      Logger.Log(side, "xen");
	    array[side] = [array[side][0] + "_put", array[side][1]];
      }
    } else {
      //tileToUpdate = {coords: coords, rotation: rotation};
    }
    
    let model = BlockRenderer.createTexturedBlock(array);
    let ic = new ICRender.Model();
    ic.addEntry(model);
    Logger.Log("xeb");
    BlockRenderer.mapAtCoords(coords.x, coords.y, coords.z, ic);
  },
  getBlockRotation: function(player, isFull) {
		var pitch = this.getEntityPitch(player);

		if(isFull){
			if(pitch < -45) return 0;
			if(pitch > 45) return 1;
		}
		var rotation = Math.floor((this.getEntityYaw(player)-45)%360 / 90);
		if(rotation < 0) rotation += 4;
		rotation = [3, 1, 2, 0][rotation];
		return rotation + 2;
	},
}

/*Block.registerPlaceFunction("gtblockmechanism", function(coords, item, block){
    Logger.Log("шизики-хуизики∆");
    World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, item.id, item.data);
      MetaRenderer.rotateBlock(coords.relative, World.getBlock(coords.relative.x, coords.relative.y, coords.relative.z), false);
      
      let rotation = this.getBlockRotation(isFull);
      if(World.getTileEntity(coords.x, coords.y, coords.z) != null) {
	    this.data.rotation = rotation;
    } else {
      tileToUpdate = {coords: coords, rotation: rotation};
    }
});*/

Callback.addCallback("DestroyBlock", function(coords, block, player) {
    if(block.id == BlockID.gtblockmechanism) {
      BlockRenderer.unmapAtCoords(coords.x, coords.y, coords.z);
    }
});
Callback.addCallback("LevelLoaded", function() {
    PipeNetBuilder.pipeNets = [];
});

Callback.addCallback("tick", function() {
    PipeNetBuilder.tickPipeNets();
});




// file: API/meta.js

IDRegistry.genBlockID("gtblockpipe");
IDRegistry.genBlockID("gttree");
Block.createBlock("gttree", [
     {name: "_", texture: [["bedrock", 0], ["bedrock", 0], ["bedrock", 0], ["bedrock", 0], ["bedrock", 0], ["bedrock", 0]], inCreative: true}], Block.createSpecialType({explosionres: 20000}));
IDRegistry.genItemID("gtmetatool01");
Item.createItem("gtmetatool01", "_",  {name: "stick", meta: 0}, {stack: 1, isTech: true});
Item.setToolRender(ItemID.gtmetatool01, true);

Callback.addCallback("tick", function() {
	if(World.getThreadTime() % 20 == 0) {
	  var entities = Entity.getAll();
		for(var i in entities){
			var ent = entities[i];
			if(Entity.getHealth(ent) > 0) {
				var coords = Entity.getPosition(ent);
				damageEntityInR(ent, coords.x, coords.y, coords.z);
			}
		}
	}
});

function damageEntityInR(entity, x, y, z) {
	for(var yy = y-2; yy <= y+1; yy++)
	for(var xx = x-1; xx <= x+1; xx++)
	for(var zz = z-1; zz <= z+1; zz++){
		var blockID = World.getBlockID(Math.floor(xx), Math.floor(yy), Math.floor(zz));
		if(blockID == BlockID.gtblockpipe | blockID == BlockID.gtblockmechanism) {
		  let tile = TileEntity.getTileEntity(Math.floor(xx), Math.floor(yy), Math.floor(zz));
		  if(tile == null) {
		    continue;
		  }
		  if(tile.data.temperature > 60) {
		    let damage = Math.ceil((tile.data.temperature - 60) / 20);
		    
		    Logger.Log("temperature", tile.data.temperature);
		    Logger.Log("damag", damage);
		    Entity.damageEntity(entity, damage);
		    return damage;
		  }
		}
	}
	return 0;
}
//APIs
var MaterialDictionary = {
    types: {},
    dict: {},
    data: [],
    invdata: {},
    lastdata: 0,
    firsted: true,
    firsts: [],
    //string
    registerForm: function(id, flag, form) {
      if(!this.types[id]) this.types[id] = {};
      //this.startData[form] = Object.keys(this.types[id]).length * 1000;
      this.types[id][form] = flag;
      this.invdata[form] = [];
    },
    registerMaterial: function(material) {
        this.dict[material.name] = material;
    },
    //Material
    addMaterials: function() {
	for(let preid in this.types) {
	        Logger.Log("****", preid);
        	let type = preid;
        	let id;
        	let limit;
        	if(type == "block") {
        	    id = "gtmetablock";
        	    limit = 16;
        	    
        	} else if(type == "item") {
        	    id = "gtmetaitem";
        	    limit = 32000;
        	    
        	}
        	let count = 1;
        	let bigdata = 0;
		let data = 0;
		let limited = false;
		
		for(let i = 0; i < Object.keys(this.types[type]).length; i++) {
            		let form = Object.keys(this.types[type])[i];
            if(type == "item") {
                data = 1000 * i;
                this.firsts[form] = {id: ItemID[id + count], data: data};
            } else if(type == "block") {
                //data = data;
                this.firsts[form] = {id: BlockID[id + count], data: data};
            }
			for(let e = 0; e < Object.keys(this.dict).length; e++) {
				let material = this.dict[Object.keys(this.dict)[e]];
				//Logger.Log(material.name, "dsd,");
				if(material.type == "MARKER") continue;
				if(!(material.type == "DUST" || material.type == "SOLID" || material.type == "INGOT" || material.type == "GEM")) {
					if(form == "dust" || form == "smallpiledust" || form == "tinypiledust") {
						continue;
					}
				}
				if(!(material.type == "SOLID" || material.type == "INGOT" || material.type == "GEM")) {
					if(form == "block") {
						continue;
					}
				}
				if(material.type != "INGOT") {
					if(form == "ingot" || form == "nugget") {
						continue;
					}	
				}
				if(material.type != "GEM") {
					if(form == "gem") {
						continue;
					}	
				}
				if(material.hasFlag(this.types[type][form])) {
				    Logger.Log(e, "zoom");
				    /*if(i == Object.keys(this.types[type]).length - 1 && e == Object.keys(this.dict).length - 1) {
				        Logger.Log(e, "zoosia");
					    limited = true;
					    }*/
		                let arr = this.limit(data, id, count, limit, bigdata, limited, material, form, type);
		                count = arr[0];
		                data = arr[1];
		                limited = false;
                		}
			}
		}
		if(id == "gtmetaitem") {
		    Item.createItem(id + (count), "_",  ["_", 0],  {isTech: true});
		}
	}
    },
    addToCreative: function() {
    for(let id in this.data) {
        if(invertedIDs.isNumericIDisItemID(id)) {
	        for(let data in this.data[id]) {
	            Logger.Log(data, "7890");
	            Logger.Log(this.data[id][data].material.name, "1234567890");
	            Logger.Log(this.data[id][data].form, "1234567890_");
	            Logger.Log(invertedIDs.itemID[id], "err_");
		        Item.addToCreative(invertedIDs.itemID[id], 1, data);
	        }
        } else {
            Logger.Log("startblock", this.getBlockIDbyNumberID(id));
            this.blockvariables = [];
            
            for(let i in this.data[id]) {
	            this.blockvariables[i] = this.data[id][i];
	            Logger.Log(this.data[id][i].material.name);
                Logger.Log(this.data[id][i].form);
            }
			Block.createBlock(invertedIDs.blockID[id], this.createvariables(this.blockvariables));
			Logger.Log("endblock");
			//this.blockvariables = [];
        }
    }
    },
    isNumericIDisItemID: function(id) {
        let is = false;
        for(let item in ItemID) {
            if(id == ItemID[item]) {
                is = true;
            }
        }
        return is;
    },
    getBlockIDbyNumberID: function(id) {
        let is = null;
        for(let item in BlockID) {
            if(id == BlockID[item]) {
                is = item;
            }
        }
        return is;
    },
    getItemIDbyNumberID: function(id) {
        let is = null;
        for(let item in ItemID) {
            if(id == ItemID[item]) {
                is = item;
            }
        }
        return is;
    },
    blockvariables: [],
    limit: function(data, id, count, limit, bigdata, limited, material, form, type) {
        Logger.Log(data, "zuked");
        if(data == 0) {
            Logger.Log("lss", id + (count));
            if(type == "block") {
                IDRegistry.genBlockID(id + count);
            this.data[BlockID[id + count]] = [];
			Logger.Log(BlockID[id + count], "_rtrt");
                //this.blockvariables = [];
            } else if(type == "item") {
			IDRegistry.genItemID(id + count);
			this.data[ItemID[id + count]] = [];
		    Logger.Log(ItemID[id + count], "_rtrtas");
            }
        } 
        if(data == limit) {
            Logger.Log("l", id + (count));
			    if(type == "block") {
				    //Block.createBlock(id + (count), this.createvariables(this.blockvariables));
				//this.blockvariables = [];
			    } else if(type == "item") {
				    Item.createItem(id + (count), material.name + form,  [material.name + form, 0], {isTech: true});
				}
			count++;
			data = 0;
		} else {
		    Logger.Log(material.name, "ssx");
		           Logger.Log(form, "zzs");
		    if(type == "block") {
		            this.data[BlockID[id + count]][data] = {material: material, form: form};
		            this.invdata[form][material.name] = {id: BlockID[id + count], data: data};
		            
		        //this.blockvariables[data] = {material: material, form: form};
		    } else if(type == "item") {
		            this.data[ItemID[id + count]][data] = {material: material, form: form};
		            this.invdata[form][material.name] = {id: ItemID[id + count], data: data};
		    }
            data++;
            bigdata++;
            if(limited) {
                Logger.Log("dopped", id + (count));
				if(type == "block") {
				    //Block.createBlock(id + (count), this.createvariables(this.blockvariables));
				    //Logger.Log("endblock");
				    //this.blockvariables = [];
			    } else if(type == "item") {
				    Item.createItem(id + (count), material.name + form,  [material.name + form, 0],  {isTech: true});
			    }
			    data = 0;
            }
		}
		Logger.Log(data, "zuled");
		return [count, data];
    },
    createvariables: function(blockvariables) {
        let variables = [];
        for(let variable in blockvariables) {
            variables[variable] = {name: blockvariables[variable].material.name + " " + blockvariables[variable].form, texture: [[blockvariables[variable].material.name + "_" + blockvariables[variable].form, 0]],     inCreative: true};
        }
        return variables;
    },
    preOverriding : function() {
/*Item.registerNameOverrideFunction("gtmetaitem01", function(item, name){
			return MaterialDictionary.types[type][item.data];
    });*/ 
  },
  genItem: function(material, form, count) {
    let data;
    for(let i = 0; i < Object.keys(MaterialDictionary.types.length); i++) {
      let iobj = MaterialDictionary.types[Object.keys(MaterialDictionary.types)[i]];
      
      for(let i = 0; i < data[iobj].length; i++) {
        if(data[id][i].material == material & data[id][i].form == form) {
          data = i;
        }
      }
    }
    
    var xtra = new ItemExtraData();
xtra.putString("name", material.name);
    return {
      id: id,
      count: count,
      data: data,
      extra: xtra
    };
  },
  
genItemWithId: function(id, material, form, count) {
  let data;
  for(let i = 0; i < data[id].length; i++) {
    if(data[id][i].material == material & data[id][i].form == form) {
      data = i;
    }
  }
  
    var xtra = new ItemExtraData();
xtra.putString("name", material.name);
    return {
      id: id,
      count: count,
      data: data,
      extra: xtra
    };
  },
  
  upgradeItem: function(material, item) {
    var xtra = new ItemExtraData();
 xtra.putString("name", material.name);
Logger.Log("_", "$$");
    item.extra = xtra;
    return item;
},
};


function Isotope(protons, neutrons, halfLife, decayTo) {
	this.protons = protons;
    this.neutrons = neutrons;
    this.halfLifeSeconds = halfLife;
    this.decayTo = decayTo;
};
function Element(formula, name, protons, isotopes) {
	this.formula = formula;
    this.name = name;
    this.protons = protons;
	this.isotopes = isotopes;
	for(let i in isotopes) {
	    this[i] = isotopes[i];
	}
};
let Elements = {
	H: new Element("H", "Hydrogen", 1, [new Isotope(-1, 1, 0, null), new Isotope(-1, 1, 1, null), new Isotope(-1, 1, 2, null)]),
	He: new Element("He", "Helium", 2, [new Isotope(2, 1, -1, null), new Isotope(2, 2, -1, null)]),
	Li: new Element("Li", "Lithium", 3, [new Isotope(3, 4, -1, null)]),
	Be: new Element("Be", "Beryllium", 4, [new Isotope(4, 5, -1, null)]),
	B: new Element("B", "Boron", 5, [new Isotope(5, 5, -1, null)]),
	C: new Element("C", "Carbon", 3, [new Isotope(6, 6, -1, null)]),
	N: new Element("N", "Nitrogen", 4, [new Isotope(7, 7, -1, null)]),
	O: new Element("O", "Oxygen", 5, [new Isotope(8, 8, -1, null)]),
	F: new Element("F", "Fluorine", 9, [new Isotope(9, 9, -1, null)]),
	Ne: new Element("Ne", "Neon", 10, [new Isotope(10, 10, -1, null)]),
	Na: new Element("Na", "Sodium", 11, [new Isotope(11, 11, -1, null)]),
	Mg: new Element("Mg", "Magnesium", 12, [new Isotope(12, 12, -1, null)]),
	Al: new Element("Al", "Aluminium", 13, [new Isotope(13, 13, -1, null)]),
	Si: new Element("Si", "Silicon", 14, [new Isotope(14, 14, -1, null)]),
	P: new Element("P", "Phosphor", 15, [new Isotope(15, 15, -1, null)]),
    	S: new Element("S", "Sulfur", 16, [new Isotope(16, 16, -1, null)]),
	Cl: new Element("Cl", "Chlorine", 17, [new Isotope(17, 18, -1, null)]),
	Ar: new Element("Ar", "Argon", 18, [new Isotope(18, 22, -1, null)]),
	K: new Element("K", "Potassium", 19, [new Isotope(19, 20, -1, null)]),
	Ca: new Element("Ca", "Calcium", 20, [new Isotope(20, 20, -1, null)]),
	Sc: new Element("Sc", "Scadium", 21, [new Isotope(21, 24, -1, null)]),
    	Ti: new Element("Ti", "Titanium", 22, [new Isotope(22, 26, -1, null)]),
	V: new Element("V", "Vanadium", 23, [new Isotope(23, 28, -1, null)]),
    	Cr: new Element("Cr", "Chrome", 24, [new Isotope(24, 28, -1, null)]),
	Mn: new Element("Mn", "Manganese", 25, [new Isotope(25, 30, -1, null)]),
	Fe: new Element("Fe", "Iron", 26, [new Isotope(26, 30, -1, null)]),
	Ni: new Element("Ni", "Nickel", 27, [new Isotope(27, 32, -1, null)]),
	Co: new Element("Co", "Cobalt", 28, [new Isotope(28, 30, -1, null)]),
	Cu: new Element("Cu", "Copper", 29, [new Isotope(29, 34, -1, null)]),
    	Zn: new Element("Zn", "Zinc", 30, [new Isotope(30, 35, -1, null)]),
	Ga: new Element("Ga", "Gallium", 31, [new Isotope(31, 39, -1, null)]),
	Ge: new Element("Ge", "Germanium", 32, [new Isotope(32, 40, -1, null)]),
	As: new Element("As", "Arsenic", 33, [new Isotope(33, 42, -1, null)]),
	Se: new Element("Se", "Selenium", 34, [new Isotope(34, 45, -1, null)]),
	Br: new Element("Br", "Bromine", 35, [new Isotope(35, 48, -1, null)]),
	Kr: new Element("Kr", "Krypton", 36, [new Isotope(36, 48, -1, null)]),
	Rb: new Element("Rb", "Rubidium", 37, [new Isotope(37, 48, -1, null)]),
	Sr: new Element("Sr", "Strontium", 38, [new Isotope(38, 49, -1, null)]),
	Y: new Element("Y", "Yttrium", 39, [new Isotope(39, 50, -1, null)]),
    	Zr: new Element("Nb", "Zirconium", 40, [new Isotope(40, 51, -1, null)]),
	Nb: new Element("Nb", "Niobium", 41, [new Isotope(41, 53, -1, null)]),
    	Mo: new Element("Mo", "Molybdenum", 42, [new Isotope(42, 53, -1, null)]),
	Tc: new Element("Tc", "Technetium", 43, [new Isotope(43, 55, -1, null)]),
	Ru: new Element("Ru", "Ruthenium", 44, [new Isotope(44, 57, -1, null)]),
	Rh: new Element("Rh", "Rhodium", 45, [new Isotope(45, 58, -1, null)]),
	Pd: new Element("Pd", "Palladium", 46, [new Isotope(46, 60, -1, null)]),
	Ag: new Element("Ag", "Silver", 47, [new Isotope(47, 60, -1, null)]),
    	Cd: new Element("Cd", "Cadmium", 48, [new Isotope(48, 64, -1, null)]),
	In: new Element("In", "Indium", 49, [new Isotope(49, 65, -1, null)]),
	Sn: new Element("Sn", "Tin", 50, [new Isotope(50, 68, -1, null)]),
	Sb: new Element("Sb", "Antimony", 51, [new Isotope(51, 70, -1, null)]),
	Te: new Element("Te", "Tellurium", 52, [new Isotope(52, 75, -1, null)]),
	I: new Element("I", "Iodine", 53, [new Isotope(53, 74, -1, null)]),
	Xe: new Element("Xe", "Xenon", 54, [new Isotope(54, 77, -1, null)]),
  
	Cs: new Element("Cs", "Caesium", 55, [new Isotope(55, 77, -1, null)]),
	Ba: new Element("Ba", "Barium", 56, [new Isotope(56, 81, -1, null)]),
	La: new Element("La", "Lantanium", 57, [new Isotope(57, 81, -1, null)]),
    	Ce: new Element("Ce", "Cerium", 58, [new Isotope(58, 82, -1, null)]),
	Pr: new Element("Pr", "Praseodium", 59, [new Isotope(59, 81, -1, null)]),
    	Nd: new Element("Nd", "Neodymium", 60, [new Isotope(60, 84, -1, null)]),
	Pm: new Element("Pm", "Promethium", 61, [new Isotope(61, 83, -1, null)]),
	Sm: new Element("Sm", "Samarium", 62, [new Isotope(62, 88, -1, null)]),
	Eu: new Element("Eu", "Europium", 63, [new Isotope(63, 88, -1, null)]),
	Gd: new Element("Gd", "Gadolinium", 64, [new Isotope(64, 93, -1, null)]),
	Tb: new Element("Tb", "Terbium", 65, [new Isotope(65, 93, -1, null)]),
    	Dy: new Element("Dy", "Dysprosium", 66, [new Isotope(66, 96, -1, null)]),
	Ho: new Element("Ho", "Holmium", 67, [new Isotope(67, 97, -1, null)]),
	Er: new Element("Er", "Erbium", 68, [new Isotope(68, 99, -1, null)]),
	Tm: new Element("Tm", "Thulium", 69, [new Isotope(69, 99, -1, null)]),
	Yb: new Element("Yb", "Ytterbium", 70, [new Isotope(70, 103, -1, null)]),
	Lu: new Element("Lu", "Lutetium", 71, [new Isotope(71, 103, -1, null)]),
	Hf: new Element("Hf", "Hafnium", 72, [new Isotope(72, 106, -1, null)]),
	Ta: new Element("Ta", "Tantalum", 73, [new Isotope(73, 93, -1, null)]),
    	W: new Element("W", "Wolframium", 74, [new Isotope(74, 96, -1, null)]),
	Re: new Element("Rh", "Rhenium", 75, [new Isotope(75, 97, -1, null)]),
	Os: new Element("Os", "Osmium", 76, [new Isotope(76, 99, -1, null)]),
	Ir: new Element("Ir", "Iridium", 77, [new Isotope(77, 99, -1, null)]),
	Pt: new Element("Pt", "Platinum", 78, [new Isotope(78, 103, -1, null)]),
	Au: new Element("Au", "Gold", 79, [new Isotope(79, 103, -1, null)]),
	Hg: new Element("Hg", "Mercury", 80,[new Isotope(80, 106, -1, null)]),
	Tl: new Element("Tl", "Thallium", 81, [new Isotope(81, 123, -1, null)]),
	Pb: new Element("Pb", "Lead", 82, [new Isotope(82, 125, null)]),
	Bi: new Element("Bi", "Bismuth", 83, [new Isotope(83, 125, -1, null)]),
	Po: new Element("Po", "Polonium", 84, [new Isotope(84, 124, -1, null)]),
	At: new Element("At", "Astatine", 85, [new Isotope(85, 124, -1, null)]),
	Rn: new Element("Rn", "Radon", 86, [new Isotope(86, 134, -1, null)]),
	Fr: new Element("Fr", "Francium", 87, [new Isotope(87, 134, -1, null)]),
	Ra: new Element("Ra", "Radium", 88, [new Isotope(88, 136, -1, null)]),
	Ac: new Element("Ac", "Actinium", 89, [new Isotope(89, 136, -1, null)]),
    	Th: new Element("Th", "Thorium", 90, [new Isotope(90, 140, -1, null)]),
	Pa: new Element("Pa", "Pratactinium", 91, [new Isotope(91, 138, -1, null)]),
    	U: new Element("U", "Uranium", 92, {238: new Isotope(92, 146, -1, null), 235: new Isotope(92, 143, -1, null)}),
	Np: new Element("Np", "Neptunium", 93, [new Isotope(93, 144, -1, null)]),
	Pu: new Element("Pu", "Pltonium", 94, [new Isotope(94, 152, -1, null)]),
	Am: new Element("Am", "Americium", 95, [new Isotope(95, 149, -1, null)]),
	Cm: new Element("Cm", "Curium", 96, [new Isotope(96, 153, -1, null)]),
	Bk: new Element("Bk", "Berkelium", 97, [new Isotope(97, 152, -1, null)]),
    	Cf: new Element("Cf", "Californium", 98, [new Isotope(98, 153, -1, null)]),
	Es: new Element("Es", "Ensteinium", 99, [new Isotope(99, 153, -1, null)]),
	Fm: new Element("Fm", "Fermium", 100, [new Isotope(100, 157, -1, null)]),
	Md: new Element("Md", "Mendeleevium", 101, [new Isotope(101, 157, -1, null)]),
	No: new Element("No", "Nobelium", 102, [new Isotope(102, 157, -1, null)]),
	Lr: new Element("Lr", "Loyrencium", 103, [new Isotope(103, 159, -1, null)]),
	Rf: new Element("Rf", "Rutherfordium", 104, [new Isotope(104, 161, -1, null)]),
	Db: new Element("Db", "Dubnium", 105, [new Isotope(105, 163, -1, null)]),
	Sg: new Element("Sg", "Seaborgium", 106, [new Isotope(106, 165, -1, null)]),
	Bh: new Element("Bh", "Bohrium", 107, [new Isotope(107, 163, -1, null)]),
	Hs: new Element("Hs", "Hassium", 108, [new Isotope(108, 169, -1, null)]),
	Mt: new Element("Mt", "Meitnerium", 109, [new Isotope(109, 167, -1, null)]),
	Ds: new Element("Ds", "Darmstadtium", 110, [new Isotope(110, 171, -1, null)]),
	Rg: new Element("Rg", "Roentgenium", 111, [new Isotope(111, 169, -1, null)]),
	Cn: new Element("Cn", "Copernicium", 112, [new Isotope(112, 173, -1, null)]),
	Nh: new Element("Nh", "Nihonium", 113, [new Isotope(113, 171, -1, null)]),
	Fl: new Element("Fl", "Flerovium", 114, [new Isotope(114, 175, -1, null)]),
	Mc: new Element("Mc", "Moscovium", 115, [new Isotope(115, 173, -1, null)]),
	Lv: new Element("Lv", "Livermorium", 116, [new Isotope(116, 177, -1, null)]),
	Ts: new Element("Ts", "Tennessine", 117, [new Isotope(117, 177, -1, null)]),
	Og: new Element("Og", "Oganesson", 118, [new Isotope(118, 176, -1, null)]),
    	//stargate
	Tr: new Element("Tr", "Tritanium", 119, [new Isotope(119, 178, -1, null)]),
	Dr: new Element("Dr", "Duranium", 120, [new Isotope(120, 180, -1, null)]),
	Nq: new Element("Nq", "Naquadah", 121, [new Isotope(121, 172, -1, null)]),
};
function MaterialStack(material, count) {
	this.material = material;
	this.count = count;
};
function of() {
    let stacks = []; 
    for(let i in arguments) {
      Logger.Log(arguments[i].material.name, "catsia");
        stacks[i] == arguments[i];
    }
	return stacks;
}

let createFlag = function(id) {
	return 1 << id;
};

let DECOMPOSITION_BY_ELECTROLYZING = createFlag(40);

        /**
         * Enables centrifuge decomposition recipe generation
         */
let DECOMPOSITION_BY_CENTRIFUGING = createFlag(41);

        /**
         * Add to material if it has constantly burning aura
         */
let BURNING = createFlag(7);

        /**
         * Add to material if it is some kind of flammable
         */
let FLAMMABLE = createFlag(42);

        /**
         * Add to material if it is some kind of explosive
         */
let EXPLOSIVE = createFlag(4);

        /**
         * Add to material to disable it's unification fully
         */
let NO_UNIFICATION = createFlag(5);

        /**
         * Add to material if any of it's items cannot be recycled to get scrub
         */
let NO_RECYCLING = createFlag(6);

        /**
         * Disables decomposition recipe generation for this material and all materials that has it as component
         */
let DISABLE_DECOMPOSITION = createFlag(43);

        /**
         * Decomposition recipe requires hydrogen as additional input. Amount is equal to input amount
         */
let DECOMPOSITION_REQUIRES_HYDROGEN = createFlag(8);

let GENERATE_FLUID_BLOCK = createFlag(44);

        /**
         * Add this flag to enable plasma generation for this material
         */
let GENERATE_PLASMA = createFlag(9);

        /**
         * Marks material state as gas
         * Examples: Air, Argon, Refinery Gas, Oxygen, Hydrogen
         */
let STATE_GAS = createFlag(10);
//dust
let GENERATE_ORE = createFlag(11);

        /**
         * Generate a plate for this material
         * If it's dust material, dust compressor recipe into plate will be generated
         * If it's metal material, bending machine recipes will be generated
         * If block is found, cutting machine recipe will be also generated
         */
let GENERATE_PLATE = createFlag(12);

        /**
         * Add to material if it cannot be worked by any other means, than smashing or smelting. This is used for coated Materials.
         */
let NO_WORKING = createFlag(13);
        /**
         * Add to material if it cannot be used for regular Metal working techniques since it is not possible to bend it.
         */
let NO_SMASHING = createFlag(14);

        /**
         * Add to material if it's impossible to smelt it
         */
let NO_SMELTING = createFlag(15);

        /**
         * Add to material if it is outputting less in an Induction Smelter.
         */
let INDUCTION_SMELTING_LOW_OUTPUT = createFlag(16);

        /**
         * Add to material if it melts into fluid (and it will also generate fluid for this material)
         */
let SMELT_INTO_FLUID = createFlag(17);

        /**
         * This will prevent material from creating Shapeless recipes for dust to block and vice versa
         * Also preventing extruding and alloy smelting recipes via SHAPE_EXTRUDING/MOLD_BLOCK
         */
let EXCLUDE_BLOCK_CRAFTING_RECIPES = createFlag(18);

        /**
         * This will prevent material from creating Shapeless recipes for dust to block and vice versa
         */
let EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES = createFlag(46);

let EXCLUDE_PLATE_COMPRESSOR_RECIPE = createFlag(19);

//solid
let GENERATE_ROD = createFlag(20);
let GENERATE_GEAR = createFlag(21);
let GENERATE_LONG_ROD = createFlag(22);
let MORTAR_GRINDABLE = createFlag(24);
let GENERATE_FRAME = createFlag(45);
//ingot
let GENERATE_FOIL = createFlag(25);
let GENERATE_BOLT_SCREW = createFlag(26);
let GENERATE_RING = createFlag(27);
let GENERATE_SPRING = createFlag(28);
let GENERATE_FINE_WIRE = createFlag(29);
let GENERATE_ROTOR = createFlag(30);
let GENERATE_SMALL_GEAR = createFlag(31);
let GENERATE_DENSE = createFlag(32);
let GENERATE_SPRING_SMALL = createFlag(33);

        /**
         * Add this to your Material if you want to have its Ore Calcite heated in a Blast Furnace for more output. Already listed are:
         * Iron, Pyrite, PigIron, WroughtIron.
         */
let BLAST_FURNACE_CALCITE_DOUBLE = createFlag(35);
let BLAST_FURNACE_CALCITE_TRIPLE = createFlag(36);

//gem
let CRYSTALLISABLE = createFlag(34);
let GENERATE_LENSE = createFlag(37);
let HIGH_SIFTER_OUTPUT = createFlag(38);

//all
let STD_SOLID = GENERATE_PLATE | GENERATE_ROD | GENERATE_BOLT_SCREW | GENERATE_LONG_ROD;
let STD_GEM = GENERATE_ORE | STD_SOLID | GENERATE_LENSE;
let STD_METAL = GENERATE_PLATE;
let EXT_METAL = STD_METAL | GENERATE_ROD | GENERATE_BOLT_SCREW | GENERATE_LONG_ROD;
let EXT2_METAL = EXT_METAL | GENERATE_GEAR | GENERATE_FOIL | GENERATE_FINE_WIRE;

function Material(name, formula, type, materialGenerationFlags, level, durability, attackdamage, miningspeed, turbineefficiency, optimalgasflow, colourRGB, icon_set) {
  this.name = name;
  this.formula = formula;
  this.type = type;
	this.durability = durability;
	this.level = level;
	this.attackdamage = attackdamage;
	this.miningspeed = miningspeed; 
	this.turbineefficiency = turbineefficiency;
	this.optimalgasflow = optimalgasflow;
	this.colourRGB = colourRGB;
	this.icon_set = icon_set;
	this.verifyMaterialBits = function(materialBits) {
		return materialBits;
	};
	this.materialGenerationFlags = this.verifyMaterialBits(materialGenerationFlags);
	this.addFlag = function(materialGenerationFlags) {
		let combined = 0;
		for (let materialGenerationFlag in materialGenerationFlags) {
            		combined |= materialGenerationFlag;
        	}
		this.materialGenerationFlags |= verifyMaterialBits(combined);
	};
	this.hasFlag = function(generationFlag) {
        	return (materialGenerationFlags & generationFlag) >= generationFlag;
	};
	this.genItem = function(form, count) {
		MaterialDictionary.genItem(this, form, count);
	};
  
	this.upgradeItem = function(item, form) {
		MaterialDictionary.upgradeItem(this, item, form);
	};
  
}




// file: API/tool.js

Callback.addCallback('DestroyBlockStart', function (coords, block, player) {
    var item = Player.getCarriedItem();
	  if (item.id == ItemID.gtmetatool01) {
Logger.Log(typeof String(item.extra.getString("name")).valueOf());
var t = false;
/*for(var p in ToolType) {
  Logger.Log
}*/
for(var e in ToolType) {
  Logger.Log(ToolType[e], "dy");
    if(ToolDictionary.getTypeByData(item.data) == ToolType[e]) t = true;

}

if(t) {
  Logger.Log(ToolDictionary.getTypeByData(item.data), "dy");
ToolLib.setTool(ItemID.gtmetatool01, String(item.extra.getString("name")).valueOf(), ToolDictionary.getTypeByData(item.data));
	  } else {
Logger.Log(ToolDictionary.getTypeByData(item.data), "dy");
ToolLib.setTool(ItemID.gtmetatool01, String(item.extra.getString("name")).valueOf(), "gt" + ToolDictionary.getTypeByData(item.data));
	  }
}
let i = -1;
for(let c = 0; c < 38; c++) {
  if(block.id == BlockID["gtblockores" + c]) i = c;
}
  if(i >= 0 & i % 2 == 0) {
    for(let l = 0; l < OreDictionary.stones.length; l++) {
    if(block.data == l) {
      ToolAPI.registerBlockMaterial(block.id, "stone", OreDictionary.invdata[block.id].level + 1, false);
      Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 3,
	explosionres: 15,
	lightopacity: 15,
	renderlayer: 2,
	translucency: 0
}, "gtore");

    }
    }
  } else if(i >= 0) {
    for(let l = 0; l < OreDictionary.blocks.length; l++) {
    if(block.data == l) {
      ToolAPI.registerBlockMaterial(block.id, "stone", OreDictionary.invdat[block.id].level + 1, false);
      Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 3,
	explosionres: 15,
	lightopacity: 15,
	renderlayer: 2,
	translucency: 0
}, "gtore");

    }
    }
  }
});
/*
type:  type {
	name:
	blocktype:
}
material: function Material
*/
let ToolDictionary = {
  WHITELIST: {
    MATERIAL: function (materials) {
      return materials;
    },
    TYPE: function (type) {
      
    },
  },
    types: [],
    materials: {},
    rods: {},
    invdata: {},
    registerType: function(type) {
    this.invdata[type.name] = {id: ItemID.gtmetatool01, data: this.types.length};
    type.toolDamage = 0;
    type.onDestroy = function(item, coords, block){
      ToolDictionary.damageTool(item);
      return true;
    },
type.onBroke = function(item){return true;},
type.onAttack = function(item, mob){
ToolDictionary.damageTool(item);
		return true;
	},
ToolType["gt" + type.name] = type;
this.types[this.types.length] = ToolType["gt" + type];
    },
    //after registertype
    registerMaterial: function(tool) {
        if(tool.material.type == "MARKER" || tool.material.type == "FLUID" || tool.material.type == "DUST") return;
        //this.materials[material.name] = material;
        this.materials[tool.material.name] = tool;
        tool.name = tool.material.name;
        tool.name2 = tool.material.name2;
        tool.level = tool.level + 1;
        tool.efficiency = tool.miningspeed;
        tool.damage = tool.attackdamage,
//this.rods[material.name] = rod;
ToolAPI.addToolMaterial(tool.name, tool);
    },
    getTypeByData: function(data) {
      return ToolDictionary.types[data];
    },
upgradeTool: function(material, tool) {
    var xtra = new ItemExtraData();
    /*xtra.setCustomName("§R" +
    material.name[0].toUpperCase() + material.name.substring(1) + " " + form + "\n" + material.formula);*/
 xtra.putString("name", material.name);
Logger.Log(xtra.getString("name"), "fuk");
  xtra.putInt("damage", 0);
    tool.extra = xtra;
    return tool;
},
damageTool: function(tool, slot) {
    Logger.Log(tool.extra.getInt("damage"), "damaged");
    let name;
  if(tool.extra != null) {
  if(tool.extra.getInt("damage") != null) {
    tool.extra.putInt("damage", tool.extra.getInt("damage") + 50);
} else {
tool.extra.putInt("damage", 0 + 50);
}
} else {
  tool.extra = new ItemExtraData();
  tool.extra.putInt("damage", 0 + 50);
}
name = tool.extra.getString("name");
if(name == null) name = "_NULL";
Logger.Log(name, "naming");
Logger.Log(tool.extra.getInt("damage"), "дамаг");
if(tool.extra.getInt("damage") > MaterialDictionary.dict[name].durability) {
tool.id = tool.count = tool.data = 0;
}
},
addToCreative: function() {
    for(let i in this.types) {
        Item.addToCreative(ItemID.gtmetatool01, 1, i);
    }
}
};




// file: API/ore.js

/*
smallgen
name
isgen
minimalheight int	
maximalheight int
rarity int
vein {
name
primary
secondary
inbetween
sporadic
minimalheight int	
maximalheight int	
rarity int
density 	int
Size int
}
*/
//API for GregTech ore generation
var OreDictionary = {
    blocks: [],
    ores: [],
    data: [],
    dat: [],
    invdata: [],
    invdat: [],
    smallgens : [],
    veins: [],
    grids: {},
    sumOfRarites: 0,
    posDara: 0,
    countByID: 0,
    counter: 300,
    //stone block for changing to ore
    registerChangeableBlock: function(block) {
        block.number = Object.keys(this.blocks).length;
        this.blocks[block.id + "_" + block.data] = block;
        //this.countByID = Math.floor(16 / this.blocks.length);
    //this.IDBycount = Math.floor(this.stones.length / 16);
    },
    registerOre: function (material, smallgen) {
        let variation = [];
        let variationbig = [];
        if(!material.hasFlag(GENERATE_ORE)) {
            return;
        }
    this.ores[this.ores.length] = material;
  this.smallgens[this.smallgens.length] = smallgen;
  Logger.Log("****5", Object.keys(this.data).length);
  Logger.Log("****5", this.ores.length);
    this.counter = 0;
    let id = (Math.floor(this.ores.length - 1) * 2) + "";
    let smallid = (Math.floor(this.ores.length - 1) * 2 + 1) + "";
    
       
       
       
  //!!!!!
  this.data[material.name] = {id: BlockID["gtblockores" + (Math.floor(this.ores.length - 1) * 2)]};
  this.dat[material.name] = {id: BlockID["gtblockores" + (Math.floor(this.ores.length - 1) * 2 + 1)]};
  
  this.invdata[BlockID["gtblockores" + (Math.floor(this.ores.length - 1) * 2)]] = material;
  this.invdat[BlockID["gtblockores" + (Math.floor(this.ores.length - 1) * 2 + 1)]] = material;
  
  for(let i = 0; i < Object.keys(this.blocks).length; i++) {
  Logger.Log(__dir__ + "res/terrain-atlas/material_sets/" + material.icon_set.name + "/ore.png", "$$()");
  let copperlayer = new IconTransformator.Action.ColourMultiply(material.colourRGB);
  
    let copperbitmap = IconTransformator.transformIcon(android.graphics.BitmapFactory.decodeFile(__dir__ + "res/terrain-atlas/material_sets/" + material.icon_set.name + "/ore.png"), material.icon_set.ORE, copperlayer);
    let file = new java.io.File(__dir__ + "res/terrain-atlas/generated/" + material.name + "_ore.png");
    
    let copperbitmaps = IconTransformator.transformIcon(android.graphics.BitmapFactory.decodeFile(__dir__ + "res/terrain-atlas/material_sets/" + material.icon_set.name + "/oreSmall.png"), material.icon_set.SMALL_ORE, copperlayer);
    let files = new java.io.File(__dir__ + "res/terrain-atlas/generated/" + material.name + "_oreSmall.png");
    
  let cOut = new java.io.FileOutputStream(file);
  copperbitmap.compress(android.graphics.Bitmap.CompressFormat.PNG, 85, cOut);
  cOut.flush();
  cOut.close();
  
  let cOu = new java.io.FileOutputStream(files);
  copperbitmaps.compress(android.graphics.Bitmap.CompressFormat.PNG, 85, cOu);
  cOu.flush();
  cOu.close();
  
  let alloy_smelterlayer = new IconTransformator.Action.Layering();
  alloy_smelterlayer.layer = android.graphics.BitmapFactory.decodeFile(__dir__ + "res/terrain-atlas/generated/" + material.name + "_ore.png");
  let alloy_smelterbitmap = IconTransformator.transformIcon(android.graphics.BitmapFactory.decodeFile(__dir__ + "res/terrain-atlas/" + this.blocks[Object.keys(this.blocks)[i]].texture + ".png"), material.icon_set.ORE, alloy_smelterlayer);
  
  let ffile = new java.io.File(__dir__ + "res/terrain-atlas/generated/" + this.blocks[Object.keys(this.blocks)[i]].texture + "_" + material.name + "_ore.png");
  let ffOut = new java.io.FileOutputStream(ffile);
  alloy_smelterbitmap.compress(android.graphics.Bitmap.CompressFormat.PNG, 85, ffOut);
  ffOut.flush();
  ffOut.close();
  
  /*let oremodel = new BlockRenderer.Model();
  oremodel.addBox(0, 0, 0, 1, 1, 1, this.stones[i].texture + "_" + material.name + "_ore", 0);
  let icRenderModel = new ICRender.Model(); 
  icRenderModel.addEntry(oremodel);
  BlockRenderer.setStaticICRender(BlockID["gtblockores" + (Math.floor((this.ores.length - 1) / this.countByID) * 2)], this.counter * this.stones.length + i, icRenderModel);*/
  Logger.Log(this.blocks[Object.keys(this.blocks)[i]].texture, "shirinkium");
  variationbig[i] = {texture: this.blocks[Object.keys(this.blocks)[i]].texture + "_" + material.name + "_ore"};
  Logger.Log("big", "shirinkium");
  Logger.Log("big", "shirinkium");
  
  let alloy_smelterlayers = new IconTransformator.Action.Layering();
    alloy_smelterlayers.layer = android.graphics.BitmapFactory.decodeFile(__dir__ + "res/terrain-atlas/generated/" + material.name + "_oreSmall.png");
  let alloy_smelterbitmaps = IconTransformator.transformIcon(android.graphics.BitmapFactory.decodeFile(__dir__ + "res/terrain-atlas/" + this.blocks[Object.keys(this.blocks)[i]].texture + ".png"), material.icon_set.SMALL_ORE, alloy_smelterlayers);
  
  let ffiles = new java.io.File(__dir__ + "res/terrain-atlas/generated/" + this.blocks[Object.keys(this.blocks)[i]].texture + "_" + material.name + "_oreSmall.png");
  let ffOuts = new java.io.FileOutputStream(ffiles);
  alloy_smelterbitmaps.compress(android.graphics.Bitmap.CompressFormat.PNG, 85, ffOuts);
  ffOuts.flush();
  ffOuts.close();
  
  /*let oremodels = new BlockRenderer.Model();
  oremodels.addBox(0, 0, 0, 1, 1, 1, this.stones[i].texture + "_" + material.name + "_oreSmall", 0);
  let icRenderModels = new ICRender.Model(); 
  icRenderModels.addEntry(oremodels);
  BlockRenderer.setStaticICRender(BlockID["gtblockores" + (Math.floor((this.ores.length - 1) / this.countByID) * 2 + 1)], this.counter * this.stones.length + i, icRenderModels);*/
variation[i] = {texture: this.blocks[Object.keys(this.blocks)[i]].texture + "_" + material.name + "_oreSmall"};
  Logger.Log("small", "shirinkium");
  }
    Logger.Log("gtblockores" + id);
    Logger.Log("gtblockores" + smallid);
    IDRegistry.genBlockID("gtblockores" + id);
    Block.createBlock("gtblockores" + id, this.createvariables(material, variationbig), "gtore");
    IDRegistry.genBlockID("gtblockores" + smallid);
    Block.createBlock("gtblockores" + smallid, this.createvariables(material, variation), "gtore");
  
  Logger.Log(Math.floor(this.ores.length - 1) * 2 + 1, "shirinkiumSmall");
  Logger.Log(Math.floor(this.ores.length - 1) * 2, "shirinkiumBig");
  
  Logger.Log(smallid, "shirinkiumSmall");
  Logger.Log(id, "shirinkiumBig");
  
  Logger.Log(i, "shirinkium");
    },
    createvariables: function(material, variation) {
        let variables = [];
        for(let i in variation) {
            variables[i] = {name: material.name + "ore", texture: [[variation[i].texture, 0]], inCreative: true};
        }
        return variables;
    },
    registerVein: function (vein) {
  this.veins[this.veins.length] = vein;
  this.sumOfRarites += vein.rarity;
    },
  strongIf: function(coords){
          var b = {
          1: true,
          7:true,
          8: true,
          9: true,
          10: true,
          11: true,
          199: true,
          200: true};
          return b[World.getBlockID(coords.x, coords.y, coords.z)];
      },
  round: function(num, x){
      var multiplier = Math.pow(10, x);
      return Math.floor(num * multiplier) / multiplier;
  },
  rollPercentage: function(pr, random){
      if(random){
          return pr>=random.nextInt(100);
      }
      return pr>=round(Math.random()*100, 2);
  },
  isInnerDiapozone: function(checkInt, start, end) {
    if(checkInt > start & checkInt < end) {
      return true;
    }
    return false;
  },
  randomInInner: function(random, start, end) {
    return start + random.nextInt(end - start);
  },
  findChunkHighSurface: function (chunkX, chunkZ) {
    let highs = 0;
    for(let x = 0; x < 16; x++) {
      for(let z = 0; z < 16; z++) {
        let high = GenerationUtils.findHighSurface(chunkX * 16 + x, chunkZ * 16 + z);
      if(high.y > highs) {
        highs = high.y;
      }
      }}
      return highs;
  },
  addToCreative() {
    for(let i in this.invdata) {
      for(let j in this.invdata[i]) {
        Item.addToCreative(i, 1, j);
      }
    }
  }
  };
  
  
  //code vein
  function OreMixVein(name, dimensions, primary, secondary, inbetween, sporadic, minimalheight, maximalheight, rarity, density, size) {
    this.name = name;
    this.dimensions= dimensions;
    this.primary = primary;
  this.secondary = secondary;
    this.inbetween = inbetween;
  this.sporadic = sporadic;
    this.minimalheight = minimalheight;
  this.maximalheight = maximalheight;
    this.rarity = rarity;
  this.density = density;
    this.size = size;
  }




// file: API/machine.js

/*tier { (())
	number: integer,
	material: object Material,
	casing: integer
}*/
/*type {
	name: string,
}*/
/*recipe {
	name: string,
	input,
	output
}*/
/* multiblockmachine
shape {
    shape: enum Box, Elipsoid, Custom
    w: number
    h: number
    d: number
    casing: 
    "x_y_z": tile {id, data}
    getByCoords: function coords
}
checkBlocks function
hatchs []
requireFromHatch function type, whitelist
addToHatch function type, whitelist
*/
/*storage
maxCount:
*/
/*function Machine(name, type, hull, recipes) {
    this.name = name;
    this.type = type;
    this.hull = hull;
    this.recipes = recipes;
}*/
function FluidStack(id, amount, tag) {
    this.id = id; //string
    this.amount = amount;
    this.tag = tag;
}
function ArrayContainer(arr) {
    this.arr = arr;
};
function Recipe(inputs, outputs, duration, EUt, postHandler) {
    this.type = "normal";
    this.inputs = inputs;
    this.outputs = outputs;
    this.duration = duration;
    this.EUt = EUt;
    this.isSteam = function() {
        return this.EUt <= 16;
    }
}
function FuelRecipe(inputs, outputs, duration, EUt, postHandler) {
    this.type = "fuel";
    this.inputs = inputs;
    this.outputs = outputs;
    this.duration = duration;
    this.EUt = EUt;
    this.isSteam = function() {
        return this.EUt <= 16;
    }
}
function RecipeMap(minInputs, maxInputs, minOutputs, maxOutputs, minFluidInputs, maxFluidInputs, minFluidOutputs, maxFluidOutputs) {
    this.minInputs = minInputs;
    this.maxInputs = maxInputs;
    this.minOutputs = minOutputs;
    this.maxOutputs = maxOutputs;
    this.length = 0;
    this.addRecipe = function(recipe) {
        this[this.length] = recipe;
        this.length++;
    }
    this.deleteRecipe = function(recipe) {
        for(let i in this) {
            if(this[i] == recipe) { 
                delete this[i];
                break;
            }
        }
    }
};
function FuelMap(minInputs, maxInputs) {
    this.minInputs = minInputs;
    this.maxInputs = maxInputs;
    /*this.minInputs = minInputs;
    this.maxInputs = maxInputs;*/
    this.addRecipe = function(recipe) {
        this[this.length] = recipe;
        this.length++;
    }
    this.deleteRecipe = function(recipe) {
        for(let i in this) {
            if(this[i] == recipe) { 
                delete this[i];
                break;
            }
        }
    }
}
String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}
let RecipeDictionary = {
    RECIPE_FURNACE_MAP: false,
    recipemaps: {},
    addFurnace: function(input, output) {
        let iddatainput = MaterialDictionary.invdata[input.form][input.material.name];
        let iddataoutput = MaterialDictionary.invdata[output.form][output.material.name];
        Recipes.addFurnace(iddatainput.id, iddatainput.data, iddataoutput.id, iddataoutput.data);
    },
    addShaped: function(mask, input, output, prefix, func) {
        let iddatainput = [];
        let f = 0;
        for(let i in input) {
            if(i%2 == 0) {
                iddatainput[f] = input[i];
                f++;
            } else {
                let preiddatainput = MaterialDictionary.invdata[input[i].form][input[i].material.name];
                iddatainput[f] = preiddatainput.id;
                f++;
                iddatainput[f] = preiddatainput.data;
                f++;
            }
        }
        let iddataoutput = {id: MaterialDictionary.invdata[output.form][output.material.name].id, count: output.count, data: MaterialDictionary.invdata[output.form][output.material.name].data};
        Recipes.addShaped(iddataoutput, mask, iddatainput, func, prefix);
    },
    addShapedForTool: function(mask, input, output, prefix, func) {
        let iddatainput = [];
        let f = 0;
        for(let i in input) {
            if(i%2 == 0) {
                iddatainput[f] = input[i];
                f++;
            } else {
                let preiddatainput = MaterialDictionary.invdata[input[i].form][input[i].material.name];
                iddatainput[f] = preiddatainput.id;
                f++;
                iddatainput[f] = preiddatainput.data;
                f++;
            }
        }
        function fun(api, field, result) {
           ToolDictionary.upgradeTool(result);
           func(api, field, result);
        }
        //let iddataoutput = ToolDictionary.invdata[output.type];
        let iddataoutput = {id: ToolDictionary.invdata[output].id, count: 1, data: ToolDictionary.invdata[output].data};
            Recipes.addShaped(iddataoutput, mask, iddatainput, fun, prefix);
    },
    addShapeless: function(input, output, prefix, func) {
        let iddatainput = [];
        let f = 0;
        for(let i in input) {
                let preiddatainput = MaterialDictionary.invdata[input[i].form][input[i].material.name];
                iddatainput[f] = preiddatainput.id;
                f++;
                iddatainput[f] = preiddatainput.data;
                f++;
        }
        //let iddataoutput = MaterialDictionary.invdata[output.form][output.material.name];
        let iddataoutput = {id: MaterialDictionary.invdata[output.form][output.material.name].id, count: output.count, data: MaterialDictionary.invdata[output.form][output.material.name].data};
        Recipes.addShapeless(iddataoutput, iddatainput, func, prefix);
    },
    arr_en: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    addToolShaped: function(tools, mask, input, output, prefix, func) {
        let newmask = [];
        let pos = [];
        let j = 0;
        for(let i in mask) {
            newmask[i] = mask[i];
            pos[i] = [];
            let index = 0;
            while(true) {
            if(mask[i].indexOf("_", index) != -1) {
                pos[i][mask[i].indexOf("_", index)] = mask[i].indexOf("_", index);
                newmask[i] = newmask[i].replaceAt(mask[i].indexOf("_"), this.arr_en[this.arr_en.length - 1 - j]);
                Logger.Log(this.arr_en[this.arr_en.length - 1 - j], "TRex __");
                index = mask[i].indexOf("_", index) + 1;
                j++;
            } else {
                break;
            }
            }
        }
        let iddatainput = [];
        let f = 0;
        for(let i in tools) {
            Logger.Log(this.arr_en[this.arr_en.length - 1 - i], "TRex __");
            iddatainput[f] = this.arr_en[this.arr_en.length - 1 - i];
            f++;
            iddatainput[f] = ToolDictionary.invdata[tools[i]].id;
            f++;
            iddatainput[f] = ToolDictionary.invdata[tools[i]].data;
            f++;
        }
        for(let i in input) {
            if(i%2 == 0) {
                iddatainput[f] = input[i];
                f++;
            } else {
                let preiddatainput = MaterialDictionary.invdata[input[i].form][input[i].material.name];
                iddatainput[f] = preiddatainput.id;
                f++;
                iddatainput[f] = preiddatainput.data;
                f++;
            }
        }
        //let iddataoutput = MaterialDictionary.invdata[output.form][output.material.name];
        let iddataoutput = {id: MaterialDictionary.invdata[output.form][output.material.name].id, count: output.count, data: MaterialDictionary.invdata[output.form][output.material.name].data};
            function fun(api, field, result) {
              Logger.Log(e, "zips");
               for (let y in field) {
				    if (field[y].id ==                             ItemID.gtmetatool01 & field[y].data == hammerindex) {
                        ToolDictionary.damageTool(field[y]);
				        
				    } else {
                      field[y].count -= 1;
                    }
                }
                func(api, field, result);
            }
        Recipes.addShaped(iddataoutput, newmask, iddatainput, fun, prefix);
    },
    addToolShapedForTool: function(tools, mask, input, output, prefix, func) {
        let newmask = [];
        let pos = [];
        let j = 0;
        for(let i in mask) {
            newmask[i] = mask[i];
            pos[i] = [];
            let index = 0;
            while(true) {
            if(mask[i].indexOf("_", index) != -1) {
                pos[i][mask[i].indexOf("_", index)] = mask[i].indexOf("_", index);
                newmask[i] = newmask[i].replaceAt(mask[i].indexOf("_"), this.arr_en[this.arr_en.length - 1 - j]);
                Logger.Log(this.arr_en[this.arr_en.length - 1 - j], "TRex __");
                index = mask[i].indexOf("_", index) + 1;
                j++;
            } else {
                break;
            }
            }
        }
        let iddatainput = [];
        let f = 0;
        for(let i in tools) {
            iddatainput[f] = this.arr_en[this.arr_en.length - 1 - i];
            f++;
            iddatainput[f] = ToolDictionary.invdata[tools[i]].id;
            f++;
            iddatainput[f] = ToolDictionary.invdata[tools[i]].data;
            f++;
        }
        for(let i in input) {
            if(i%2 == 0) {
                iddatainput[f] = input[i];
                f++;
            } else {
                let preiddatainput = MaterialDictionary.invdata[input[i].form][input[i].material.name];
                iddatainput[f] = preiddatainput.id;
                f++;
                iddatainput[f] = preiddatainput.data;
                f++;
            }
        }
        //let iddataoutput = ToolDictionary.invdata[output.type];
        let iddataoutput = {id: ToolDictionary.invdata[output].id, count: 1, data: ToolDictionary.invdata[output].data};
            function fun(api, field, result) {
              Logger.Log(e, "zips");
               for (let y in field) {
				    if (field[y].id ==                             ItemID.gtmetatool01 & field[y].data == hammerindex) {
                        ToolDictionary.damageTool(field[y]);
				        
				    } else {
                      field[y].count -= 1;
                    }
                }
                ToolDictionary.upgradeTool(result);
                func(api, field, result);
            }
        Recipes.addShaped(iddataoutput, newmask, iddatainput, fun, prefix);
    },
    provideFurnaceRecipe: function(container, prefix) {
      Logger.Log(container, "dero");
      Logger.Log(container.getSlot("input0"), "derrekpro");
        return Recipes.getFurnaceRecipeResult(container.getSlot("input0").id, container.getSlot("input0").data, prefix);
    },
    provideFurnaceFuel: function(inputs) {
        let iddata = MaterialDictionary.invdata[inputs[0].material][inputs[0].form];
        if(Recipes.getFuelBurnDuration(iddata.id, iddata.data) > 0) {
            return true;
        }
        return false;
    },
    registerFormHandlingRecipes: function(input, EUt) {
        if(input.type == "MARKER" || input.type == "FLUID") return;
        if(input.type == "INGOT") RecipeDictionary.addFurnace({material: input, form: "dust"}, {material: input, form: "ingot"});
        if(input.type == "INGOT" && input.hasFlag(GENERATE_ORE)) RecipeDictionary.addFurnace({material: input, form: "impuredust"}, {material: input, form: "ingot"});
if(input.type == "INGOT" && input.hasFlag(GENERATE_ORE)) RecipeDictionary.addFurnace({material: input, form: "purifieddust"}, {material: input, form: "ingot"});
        
        
        if(input.type == "INGOT") RecipeDictionary.addToolShaped(["mortar"], ["_", "i"], ['i', {material: input, form: "ingot"}], {material: input, form: "dust", count: 1});
            if(input.type == "GEM") RecipeDictionary.addToolShaped(["mortar"], ["_", "i"], ['i', {material: input, form: "gem"}], {material: input, form: "dust", count: 1});
        if(input.hasFlag(GENERATE_PLATE)) RecipeDictionary.addToolShaped(["mortar"],  ["_", "i"], ['i', {material: input, form: "plate"}], {material: input, form: "dust", count: 1});
        if(input.type == "INGOT" && input.hasFlag(GENERATE_PLATE)) RecipeDictionary.addToolShaped(["hammer"], ["_", "i", "i"],  ['i', {material: input, form: "ingot"}], {material: input, form: "plate", count: 1});
        if(input.type == "GEM" && input.hasFlag(GENERATE_PLATE)) RecipeDictionary.addToolShaped(["hammer"], ["_", "i"],  ['i', {material: input, form: "gem"}], {material: input, form: "plate", count: 1});
        if(input.type == "INGOT" && input.hasFlag(GENERATE_ROD)) RecipeDictionary.addToolShaped(["file"], ["_", "i"],  ['i', {material: input, form: "ingot"}], {material: input, form: "rod", count: 1});
        RecipeDictionary.addShaped(["ddd", "ddd", "ddd"], ['d', {material: input, form: "tinypiledust"}], {material: input, form: "dust", count: 1});
        RecipeDictionary.addShaped(["dd", "dd"], ['d', {material: input, form: "smallpiledust"}], {material: input, form: "dust", count: 1});
        RecipeDictionary.addShaped(["d  ", "  ", "   "], ['d', {material: input, form: "dust"}], {material: input, form: "tinypiledust", count: 9});
        RecipeDictionary.addShaped([" d ", "   ", "   "], ['d', {material: input, form: "dust"}], {material: input, form: "smallpiledust", count: 4});
        if(input.hasFlag(GENERATE_PLATE) && input.hasFlag(GENERATE_FOIL)) RecipeDictionary.addToolShaped(["hammer"], ["_p"], ['p', {material: input, form: "plate"}], {material: input, form: "foil", count: 1});
        if(input.hasFlag(GENERATE_FOIL) && input.hasFlag(GENERATE_FINE_WIRE)) RecipeDictionary.addToolShaped(["wirecutter"], ["_p"], ['p', {material: input, form: "foil"}], {material: input, form: "fine_wire", count: 1});
        if(input.hasFlag(GENERATE_BOLT_SCREW)) RecipeDictionary.addToolShaped(["file"], ["_p", "p "], ['p', {material: input, form: "bolt"}], {material: input, form: "screw", count: 1});
        if(input.hasFlag(GENERATE_PLATE) && input.hasFlag(GENERATE_GEAR) && input.hasFlag(GENERATE_ROD)) RecipeDictionary.addToolShaped(["screwdriver"], ["rpr", "p_p", "rpr"], ['p', {material: input, form: "plate"}, 'r', {material: input, form: "rod"}], {material: input, form: "gear", count: 1});
if(input.hasFlag(GENERATE_PLATE) && input.hasFlag(GENERATE_SMALL_GEAR)) RecipeDictionary.addToolShaped(["hammer"], ["_ ", " p"], ['p', {material: input, form: "plate"}], {material: input, form: "small_gear", count: 1});
if(input.hasFlag(GENERATE_ROD) && input.hasFlag(GENERATE_FRAME)) RecipeDictionary.addToolShaped(["wrench"], ["ppp", "p_p", "ppp"], ['p', {material: input, form: "rod"}], {material: input, form: "frame_box", count: 1});
if(input.hasFlag(GENERATE_ROD) && input.hasFlag(GENERATE_RING)) RecipeDictionary.addToolShaped(["hammer"], ["_ ", " p"], ['p', {material: input, form: "rod"}], {material: input, form: "ring", count: 1});
        if(input.hasFlag(GENERATE_ORE)) RecipeDictionary.addToolShaped(["hammer"], ["_ ", " p"], ['p', {material: input, form: "crushedore"}], {material: input, form: "impuredust", count: 1});
        if(input.hasFlag(GENERATE_ORE)) RecipeDictionary.addToolShaped(["hammer"], ["_ ", " p"], ['p', {material: input, form: "purifiedore"}], {material: input, form: "purifieddust", count: 1});
        if(input.hasFlag(GENERATE_ORE)) RecipeDictionary.addToolShaped(["hammer"], ["_ ", " p"], ['p', {material: input, form: "centrifugedore"}], {material: input, form: "dust", count: 1});
        
        
        
        if(input.hasFlag(GENERATE_PLATE)) MachineDictionary.steammachines["macerator"].recipes.addRecipe(new Recipe([{material: input, form: "plate", count: 1}], [{material: input, form: "dust", count: 1}]));
        if(input.type == "INGOT") MachineDictionary.steammachines["macerator"].recipes.addRecipe(new Recipe([{material: input, form: "ingot", count: 1}], [{material: input, form: "dust", count: 1}]));
        if(input.type == "GEM") MachineDictionary.steammachines["macerator"].recipes.addRecipe(new Recipe([{material: input, form: "gem", count: 1}], [{material: input, form: "dust", count: 1}]));
        if(input.type == "INGOT") MachineDictionary.steammachines["macerator"].recipes.addRecipe(new Recipe([{material: input, form: "nugget", count: 1}], [{material: input, form: "tinypiledust", count: 1}]));
        if(input.type == "INGOT") MachineDictionary.steammachines["compressor"].recipes.addRecipe(new Recipe([{material: input, form: "ingot", count: 9}], [{material: input, form: "block", count: 1}]));
        if(input.type == "GEM") MachineDictionary.steammachines["compressor"].recipes.addRecipe(new Recipe([{material: input, form: "gem", count: 9}], [{material: input, form: "block", count: 1}]));
        if(input.type == "INGOT" || input.type == "GEM") MachineDictionary.steammachines["compressor"].recipes.addRecipe(new Recipe([{material: input, form: "dust", count: 9}], [{material: input, form: "block", count: 1}]));
        if(input.type == "INGOT" && input.hasFlag(GENERATE_PLATE)) MachineDictionary.steammachines["hammer"].recipes.addRecipe(new Recipe([{material: input, form: "ingot", count: 3}], [{material: input, form: "plate", count: 2}]));
        if(input.hasFlag(GENERATE_ROD) && input.hasFlag(GENERATE_LONG_ROD)) MachineDictionary.steammachines["hammer"].recipes.addRecipe(new Recipe([{material: input, form: "rod", count: 2}], [{material: input, form: "long_rod", count: 1}]));
        
    },
    registerBoilerFuel: function(input, output) {
      MachineDictionary.steammachines["boiler"].recipes.addRecipe(new FuelRecipe([{material: input, form: "gem", count: 1}], [{material: output, form: "dust", count: 1}]));
    },
    registerAlloy: function(output, EUt) {
      let inputs = output.formula;
        //if(inputs[0].material.type != "INGOT") return;
        if(inputs.length == 0) return;
        //if(output.length == 0) return;
       for(let i in inputs) {
         //ifinputs[i].type != "ingot") {}
       }
        if(inputs.length == 2) MachineDictionary.steammachines["alloy_smelter"].recipes.addRecipe(new Recipe([{material: inputs[0].material, form: "ingot", count: inputs[0].count}, {material: inputs[1].material, form: "ingot", count: inputs[1].count}], [{material: output, form: "ingot", count: 1}]));
        
        let mask = [];
        for(let i in inputs) {
            mask.push({material: inputs[i].material, form: "dust"});
        }
        RecipeDictionary.addShapeless(mask,  {material: output, form: "dust", count: 1});
        
        let omask = [];
        for(let i in inputs) {
            omask.push({material: inputs[i].material, form: "tinypiledust"});
        }
        RecipeDictionary.addShapeless(omask,  {material: output, form: "tinypiledust", count: 1});
        
        let kmask = [];
        for(let i in inputs) {
            kmask.push({material: inputs[i].material, form: "smallpiledust"});
        }
        RecipeDictionary.addShapeless(kmask,  {material: output, form: "smallpiledust", count: 1});
    },
    registerToolRecipe: function(input) {
        if(ToolDictionary.invdata[input.name]) return;
        if(!input.material2.hasFlag(GENERATE_ROD)) return;
        if(!input.material.hasFlag(GENERATE_PLATE)) return;
        Logger.Log(input.material.name, "rexium");
        let material = ToolDictionary.materials[input.name].material;
        let material2 = ToolDictionary.materials[input.name].material2;
        if(input.material.type == "INGOT") RecipeDictionary.addToolShapedForTool(["hammer", "file"], ["pii", "_s_", " s "], ['p', {material: input, form: "plate"}, 'i', {material: material, form: "ingot"}, 's', {material: material2, form: "rod"}], "pickaxe");
      if(input.material.type == "GEM") RecipeDictionary.addToolShapedForTool(["hammer", "file"], ["pii", "_s_", " s "], ['p', {material: input, form: "plate"}, 'i', {material: input, form: "gem"}, 's', {material: material2, form: "rod"}], "pickaxe");
if(input.material.hasFlag(GENERATE_PLATE)) RecipeDictionary.addToolShapedForTool(["hammer", "file"], ["_p_", " s ", " s "], ['p', {material: input, form: "plate"}, 's', {material: material2, form: "rod"}], "shovel");
if(input.material.type == "INGOT" && input.material.hasFlag(GENERATE_PLATE)) RecipeDictionary.addToolShapedForTool(["hammer"], ["pi", "ps", "_s"], ['p', {material: input, form: "plate"}, 'i', {material: input, form: "ingot"}, 's', {material: material2, form: "rod"}], "axe");
if(input.material.type == "GEM" && input.material.hasFlag(GENERATE_PLATE)) RecipeDictionary.addToolShapedForTool(["hammer"], ["pi", "ps", "_s"], ['p', {material: input, form: "plate"}, 'i', {material: input, form: "gem"}, 's', {material: material2, form: "rod"}], "axe");
if(input.material.type == "INGOT" && input.material.hasFlag(GENERATE_PLATE)) RecipeDictionary.addToolShapedForTool(["hammer"], ["pi", "_s", " s"], ['p', {material: input, form: "plate"}, 'i', {material: input, form: "ingot"}, 's', {material: material2, form: "rod"}], "hoe");
if(input.material.type == "GEM" && input.material.hasFlag(GENERATE_PLATE)) RecipeDictionary.addToolShapedForTool(["hammer"], ["pi", "_s", " s"], ['p', {material: input, form: "plate"}, 'i', {material: input, form: "gem"}, 's', {material: material2, form: "rod"}], "hoe");
if(input.material.type == "INGOT" && input.material.hasFlag(GENERATE_PLATE)) RecipeDictionary.addShapedForTool(["xx ", "xxs", "xx "], ['x', {material: material, form: "ingot"}, 's', {material: material2, form: "rod"}], "hammer");
if(material.type == "GEM" && material.hasFlag(GENERATE_PLATE)) RecipeDictionary.addShapedForTool(["xx ", "xxs", "xx "], ['x', {material: material, form: "gem"}, 's', {material: material2, form: "rod"}], "hammer");
if(material.hasFlag(GENERATE_PLATE)) RecipeDictionary.addShapedForTool(["x", "x", "s"], ['x', {material: material, form: "plate"}, 's', {material: material2, form: "rod"}], "file");
if(material.type == "INGOT") RecipeDictionary.addToolShapedForTool(["hammer"], ["i_i", "iii", " i "], ['i', {material: material, form: "ingot"}], "wrench");
if(material.type == "GEM") RecipeDictionary.addToolShapedForTool(["hammer"], ["i_i", "iii", " i "], ['i', {material: material, form: "gem"}], "wrench");

if(material.hasFlag(GENERATE_PLATE)) RecipeDictionary.addToolShapedForTool(["hammer"], [" p ", "_p_", " s "], ['p', {material: material, form: "plate"}, 's', {material: material2, form: "rod"}], "sword");

if(material.hasFlag(GENERATE_PLATE) && material.hasFlag(GENERATE_ROD)) RecipeDictionary.addToolShapedForTool(["file", "hammer", "screwdriver"], ["p_p", "_p_", "rsr"], ['p', {material: material, form: "plate"}, 'r', {material: material, form: "rod"}, 's', {material: material, form: "screw"}], "wirecutter");

if(material.hasFlag(GENERATE_ROD)) RecipeDictionary.addToolShapedForTool(["file", "hammer"], [" _r", " r_", "s  "], ['r', {material: material, form: "rod"}, 's', {material: material2, form: "rod"}], "screwdriver");


if(material.type == "INGOT") RecipeDictionary.addShapedForTool(["x x", "xxх"], ['x', {material: material, form: "ingot"}], "mortar");
if(material.type == "GEM") RecipeDictionary.addShapedForTool(["x x", "xxх"], ['x', {material: material, form: "gem"}, 's', {material: material, form: "plate"}], "mortar");
    },
    toNotConsumable: function(input) {
        return {id: input.id, data: input.data, count: 0};
    },
    Builder: function() {
        this.inputs = [];
        this.outputs = [];
        this.duration = 0;
        this.EUt = 0;
        this.recipes = null;
        
        this.setRecipeMap = function(recipes) {
            this.recipes = recipes;
            return this;
        }
        this.input = function(input) {
            this.inputs.push(input);
            return this;
        }
        this.notConsumable = function(input) {
            this.input(RecipeDictionary.toNotConsumable(input));
            return this;
        }
        this.inputs = function(inputs) {
	        [].push.apply(this.inputs, inputs);
            return this;
        }
        this.output = function(output) {
            this.outputs.push(output);
            return this;
        }
        this.outputs = function(outputs) {
            [].push.apply(this.inputs, inputs);
            return this;
        }
        this.duration = function(duration) {
            this.duration = duration;
            return this;
        }
        this.EUt = function(EUt) {
            this.EUt = EUt;
            return this;
        }
        this.build = function() {
            return new Recipe(inputs, outputs, duration, EUt);
        }
        this.buildAndRegister = function() {
            let builded = this.build();
            recipeMap.addRecipe(builded);
        
            return builded;
        }
    },
};
let MachineDictionary = {
    GENERATOR: true,
    PROCESSING: false,
    casings: {},
    textures: {},
    steammachines: {},
      tiers: [],
      types: [],
      count: 0,
      //steam
      genMachineRendererPipelines: function(isrotated, isFullRotated, ismisks) {
        
      },
      renderMachinePipeline: function(enable, rotation, misc) {
        
      },
      
      registerCasings: function() {
          IDRegistry.genBlockID("gtcasing");
          let variants = [];
          variants[0] = this.registerCasing("bronze_hull");
          variants[1] = this.registerCasing("bronze_bricks_hull");
          Block.createBlock("gtcasing", variants);
      },
      registerCasing: function(name) {
          let variant = {name: name, texture: [[name, 0]]};
          this.casings[name] = name;
          return variant;
      },
      registerMetalCasing: function(name) {
          let variant = {name: name, texture: [[name, 0]]};
          this.metalcasings[name] = name;
          return variant;
      },
      registerMultiblockCasing: function(name) {
          let variant = {name: name, texture: [[name, 0]]};
          this.multiblockcasings[name] = name;
          return variant;
      },
      registerSteamMachine: function(type, ui) {
        if(BlockID.gtblockmachine == undefined) {
            IDRegistry.genBlockID("gtblockmachine");
        }
        //type.recipes = new RecipeMap(type.minInputs, type.maxInputs, type.minOutputs, type.maxOutputs);
        /*type.errorSlot = {type: "image", x: число, y: число, bitmap: "bronze_error", scale: 1}*/
        if(this.steammachines[type.name] == null) {
         
          this.steammachines[type.name] = type;
        }
        //this.steammachines[name][tier] = type;
        for(let tier in type.tier) {
            type.ui0 = new UI.StandartWindow(ui);
            type.ui1 = new UI.StandartWindow(ui);
            let casing = null;
            if(type.tier[tier] == 0) casing = "bronze";
            if(type.tier[tier] == 1) casing = "steel";
        if(false) {
        let alloy_smelterlayer = new IconTransformator.Action.Layering();
        if(type.name == "boiler" || type.name == "solar_boiler" || type.name == "lava_boiler") {
          alloy_smelterlayer.layer = android.graphics.BitmapFactory.decodeFile(__dir__ + "res/terrain-atlas/iconsets/BOILER_FRONT.png");
        } else {
  alloy_smelterlayer.layer = android.graphics.BitmapFactory.decodeFile(__dir__ + "res/terrain-atlas/iconsets/OVERLAY_FRONT_STEAM_" + String.toUpperCase(type.name) + ".png");
  }
  let hull = type.hull;
  let alloy_smelterbitmap = IconTransformator.transformIcon(android.graphics.BitmapFactory.decodeFile(__dir__ + "res/terrain-atlas/" + casing + "_" + hull + ".png"), coords[String.toUpperCase(type.name)], alloy_smelterlayer);
  
  let file = new java.io.File(__dir__ + "res/terrain-atlas/generated/" + casing + "_" + type.name + ".png");
  let fOut = new java.io.FileOutputStream(file);
  alloy_smelterbitmap.compress(android.graphics.Bitmap.CompressFormat.PNG, 85, fOut);
  fOut.flush();
  fOut.close();
  
        let alloy_smelterlaye = new IconTransformator.Action.Layering();
  if(type.name == "boiler" || type.name == "solar_boiler" || type.name == "lava_boiler") {
          alloy_smelterlaye.layer = android.graphics.BitmapFactory.decodeFile(__dir__ + "res/terrain-atlas/iconsets/BOILER_FRONT.png");
        } else {
          alloy_smelterlaye.layer
  alloy_smelterlaye.layer = android.graphics.BitmapFactory.decodeFile(__dir__ + "res/terrain-atlas/iconsets/OVERLAY_FRONT_STEAM_" + String.toUpperCase(type.name) + "_ACTIVE.png");
  }
  //Logger.Log(String.toUpperCase(name), "zuih");
  let alloy_smelterbitma = IconTransformator.transformIcon(android.graphics.BitmapFactory.decodeFile(__dir__ + "res/terrain-atlas/" + casing + "_" + hull + ".png"), coords[String.toUpperCase(type.name)], alloy_smelterlaye);
  let fil = new java.io.File(__dir__ + "res/terrain-atlas/generated/" + casing + "_" + type.name + "_active.png");
  let fOu = new java.io.FileOutputStream(fil);
  alloy_smelterbitma.compress(android.graphics.Bitmap.CompressFormat.PNG, 85, fOu);
  fOu.flush();
  fOu.close();
  
    let moel = new ICRender.Model();
    if(hull == "brick_hull") {
        moel.addEntry(new BlockRenderer.Model(0, 0, 0, 1, 1, 1, [["brick" + casing + "bottom_hull", 0], [casing + "_hull", 0], [casing + "brick_hull", 0], [casing + "_" + type.name, 0], [casing + "brick_hull", 0], [casing + "brick_hull", 0]]));
        type.textures = new ArrayContainer([["brick" + casing + "bottom_hull", 0], [casing + "_hull", 0], [casing + "brick_hull", 0], [casing + "_" + type.name, 0], [casing + "brick_hull", 0], [casing + "brick_hull", 0]]);
        type["variable" + type.tier[tier]] = {name: type.name, textures: type.textures.arr, inCreative: true};
        } else if(hull == "hull") {
          moel.addEntry(new BlockRenderer.Model(0, 0, 0, 1, 1, 1, [[casing + "_hull", 0], [casing + "_hull", 0], [casing + "_hull", 0], [casing + "_" + type.name, 0], [casing + "_hull", 0], [casing + "_hull", 0]]));
          type["variable" + type.tier[tier]] = new ArrayContainer([[casing + "_hull", 0], [casing + "_hull", 0], [casing + "_hull", 0], [casing + "_" + type.name, 0], [casing + "_hull", 0], [casing + "_hull", 0]]);
          type.variable = {name: type.name, textures: type.textures.arr, inCreative: true};
        }
        //Logger.Log("Molybdocene dichloride", (Object.keys(this.steammachines).length - 1) * 2 + tier + 2);
        BlockRenderer.enableCoordMapping(BlockID.gtblockmachine, count, moel);
        count++;
        
        }
        if(type.tier[tier] == 0) type.variable = {name: type.name, textures: [[casing + "_" + type.hull, 0]], inCreative: true};
        if(type.tier[tier] == 1) type.variable1 = {name: type.name, textures: [[casing + "_" + type.hull, 0]], inCreative: true};
        }
      },
      addToCreative: function() {
          let variables = [];
          for(let i in this.steammachines) {
              for(let tier in this.steammachines[i].tier) {
                  //Logger.Log(this.steammachines[i].variable.name, "her");
                  if(this.steammachines[i].tier[tier] == 0) variables.push(this.steammachines[i].variable);
                  if(this.steammachines[i].tier[tier] == 1) variables.push(this.steammachines[i].variable1);
              }
          };
          Block.createBlock("gtblockmachine", variables, Block.createSpecialType({explosionres: 10}));
      },
      //electric
      registerMachine: function(tier) { 
          this.tiers[this.tiers.length] = tier;
      },
      registerMachineType: function(type) { //{}
  this.recipies[type] = [];
          this.types[this.types.length] = type;
      },
  };
  MachineDictionary.textures[BlockID.gtblockmachine] = [];

  let PipeDictionary = {
  sizes: [],
  materials: {},
  registerSize: function(size) {
    this.sizes[this.sizes.length] = size;
  },
  registerMaterial: function(material, rate, temperature) {
    this.materials[material.name] = {material: material, rate: rate, temperature: temperature, type: "liquid"};
  },
  getPipeType: function () {
    if(blockID == BlockID.gtblockpipe) {
      for(let i in Object.keys(this.materials)) {
        if(OreDictionary.isInnerDiapozone(blockData, i * this.sizes.length, (i + 1) * this.sizes.length)) {
          return this.materials[Object.keys(this.materials)[i]].type;
        }
      }
    }
    return null;
  },
  addToCreative: function () {
    let variables = [];
    for(let m = 0; m < Object.keys(PipeDictionary.materials).length; m++) {
      for(let s = 0; s < PipeDictionary.sizes.length; s++) {
        variables[m * PipeDictionary.sizes.length + s] = {name: "Pipe", texture: [["bedrock"], 0], inCreative: true};
      }
    }
    Block.createBlock("gtblockpipe", variables, Block.createSpecialType({explosionres: 20000}));
  },
  isPipe: function (blockID, blockData, type) {
    if(blockID == BlockID.gtblockpipe) {
      for(let i in Object.keys(this.materials)) {
        if(OreDictionary.isInnerDiapozone(blockData, i * this.sizes.length, (i + 1) * this.sizes.length)) {
          return this.materials[Object.keys(this.materials)[i]].type == type;
        }
      }
    }
    return false;
  }
};

function Wire(material) {
	this.x;
	this.y;
	this.z;
	this.material = material;
	this.findNearestWires = function() {
		wireslocal = [];
		wires.forEach(new function(wire, i, arr) {
			if(wire.x == machine.x - 1) {
				wireslocal[wirelocal.length] = wire;
			}
			if(wire.x == machine.x + 1) {
				wireslocal[wirelocal.length] = wire;
			}
			if(wire.x == machine.y - 1) {
				wireslocal[wirelocal.length] = wire;
			}
			if(wire.x == machine.y + 1) {
				wireslocal[wirelocal.length] = wire;
			}
			if(wire.x == machine.z - 1) {
				wireslocal[wirelocal.length] = wire;
			}
			if(wire.x == machine.z + 1) {
				wireslocal[wirelocal.length] = wire;
			}
		});
		return wires;
	};
	this.update = new function(previous, energy) {
		wiress = this.findNearestWires();
		wiress.remove(previous);
		wiress.forEach(new function(wire, i, arr) {
			if(wire.energy >= wire.buffer & this.energy < this.energyMax) {
    			this.energy -= this.energyconsumption;
				wire.update();
    		 }
		});
	};
}

Callback.addCallback('ItemUseNoTarget', function (item, player) {
    if(item.id == 1) {
        let compoundTag = new NBT.CompoundTag();
        compoundTag.putString("red", "red");
        item.extra.setCompoundTag(0, compoundTag);
        Logger.Log(item.extra.getCompoundTag(0).getString("red"), "dersa");
    }
});




// file: API/net.js

var TileEntityRegistry = {

	// adds energy type for tile entity prototype

	addEnergyType: function(Prototype, energyType) {
		/*if (!Prototype.__energyLibInit) {
			this.setupInitialParams(Prototype);
		}*/
        Logger.Log(Prototype.__Types, "xeror");
		Prototype.__Types[energyType] = energyType;
	},

	//same as addEnergyType, but works on already created prototypes, accessing them by id
	addEnergyTypeForId: function(id, energyType) {
		let Prototype = TileEntity.getPrototype(id);
		if (Prototype) {
			this.addEnergyType(Prototype, energyType);
		}
		else {
			Logger.Log("cannot add energy type no prototype defined for id " + id, "ERROR");
		}
	},

	setupInitialParams: function(Prototype) {
		Prototype.__energyLibInit = true;
		
		Prototype.__Types = {};
		Prototype.__Nets = {};
		//Prototype.__connectedNets = {};

		Prototype.__init = Prototype.init || function() {};
		Prototype.__tick = Prototype.tick || function() {};
		Prototype.__destroy = Prototype.destroy || function() {};
		
		if (!Prototype.energyTick) {
			Prototype.energyTick = function(type, src) {
				// called for each energy type
			}
		}
		
		Prototype.receive = Prototype.receive || function() {
			return 0;
		}
		
		Prototype.canReceive = Prototype.canReceive || function() {
			return true;
		}
		
		if (Prototype.isSource) {
		  Prototype.isGenerator = Prototype.isGenerator || function() {
				return false;
			}
			Prototype.canExtract = Prototype.canExtract || function() {
				return true;
			}
		}
		else {
		  Prototype.isGenerator = function() {
				return false;
			}
			Prototype.canExtract = function() {
				return false;
			}
		}
		
		Prototype.init = function() {
		  this.__init();
		  this.data.pipeEncounter = 0;
			this.__Nets = {};
			TileEntityRegistry.addMacineAccessAtCoords(this.x, this.y, this.z, this);
			for(let name in this.__Types) {
			  PipeNetBuilder.rebuild();
			}
		}
		
		Prototype.destroy = function() {
			TileEntityRegistry.removeMachineAccessAtCoords(this.x, this.y, this.z);
			
			PipeNetBuilder.rebuild();
			this.__destroy();
		}
			
		Prototype.tick = function() {
			this.__tick();
			if(this.data.pipeEncounter == 4) {
			  this.data.pipeEncounter = 0;
			for(let name in this.__Types) {
				if(this.isSource(name)) {
					let net = this.__Nets[name];
					if(net) {
					  let src = net.source;
					  //if(canExtract(side, type)
					  this.Еtick(name, src);
					}
				} else {
				}
			}
			} else {
			  this.data.pipeEncounter++;
			}
		}
	},



	/* machine is tile entity, that uses energy */
	machineIDs: {},

	isMachine: function(id) {
		return this.machineIDs[id];
	},

	quickCoordAccess: {},
	addMacineAccessAtCoords: function(x, y, z, machine) {
	    Logger.Log(machine, "fuOS _");
		this.quickCoordAccess[x + ":" + y + ":" + z] = machine;
	},

	removeMachineAccessAtCoords: function(x, y, z) {
		delete this.quickCoordAccess[x + ":" + y + ":" + z];
	},

	accessMachineAtCoords: function(x, y, z) {
		return this.quickCoordAccess[x + ":" + y + ":" + z];
	},

	executeForAllInNet: function(net, func) {
		for (var i in net.tileEntities) {
			var mech = net.tileEntities[i];
			func(mech);
		}
	},
};


var PipeNetBuilder = {

	pipeNets: [],

	addPipeNet: function(net) {
		this.pipeNets.push(net);
	},

	removeNet: function(net) {
		TileEntityRegistry.executeForAllInNet(net, function(tileEntity) {
			delete tileEntity.__connectedNets[net.netId];
		});
		
		for (var i in net.connectedNets) {
			net.connectedNets[i].removeConnection(net);
		}
		net.removed = true;
		for (var i in this.pipeNets) {
			if (this.pipeNets[i] == net) {
				this.pipeNets.splice(i, 1);
				break;
			}
		}
	},

	removeNetOnCoords: function(x, y, z) {
		var net = this.getNetOnCoords(x, y, z);
		if (net) {
			this.removeNet(net);
		}
	},

	removeNetByBlock: function(x, y, z, pipeId) {
		if (World.getBlockID(x, y, z) == pipeId) {
			PipeNetBuilder.removeNetOnCoords(x, y, z);
		}
	},
	
	mergeNets: function(net1, net2) {
		for (let key in net2.pipeMap) {
			net1.pipeMap[key] = true;
		}
		for (let i in net2.tileEntities) {
			net1.addUnit(net2.tileEntities[i]);
		}
		for (let i in net2.connectedNets) {
			var otherNet = net2.connectedNets[i];
			net1.addConnection(otherNet);
			otherNet.addConnection(net1);
		}
		this.removeNet(net2);
	},
	
	getForTile: function(tile) {
	  let isnet = true;
	  let net = null;
		for (let i in this.pipeNets) {
		  let pipes = this.pipeNets[i].getUnits();
		  for(let e in pipes) {
		    if(pipes[e].x == tile.x & pipes[e].y == tile.y & pipes[e].z == tile.z) {
		      isnet = false;
		      net = nett;
		      break;
		    }
		  }
		  if(!isnet) {
		    break;
		  }
		}
		return net;
	},
	buildForTile: function(tile, type) {
	  let isnet = true;
	  let net = null;
		for(let i in this.pipeNets) {
		  Logger.Log("net", i);
		  let pipes = this.pipeNets[i].getUnits();
		  for(let e in pipes) {
		    Logger.Log("pipe", e);
		    if(pipes[e].x == tile.x & pipes[e].y == tile.y & pipes[e].z == tile.z) {
		      isnet = false;
		      //net = nett;
		      break;
		    }
		  }
		  if(!isnet) {
		    break;
		  }
		}
		if(isnet) {
		  net = new PipeNet(type);
		  net.sourceTile = tile;
		  net.sourceCoords = {x : tile.x, y: tile.y, z: tile.z};
		  this.addPipeNet(net);
		
		  for (let side = 0; side < 6; side++) {
				var c = this.getRelativeCoords(tile.x, tile.y, tile.z, side);
				this.buildTileNet(net, c.x, c.y, c.z, side ^ 1);
		  }
		}
		
		return net;
	},
	
	buildTileNet: function(net, x, y, z, side) {
		var type = net.Name;
		var tile = TileEntityRegistry.accessMachineAtCoords(x, y, z);
		if (tile && tile.__Types[type]) {
				net.enabledSide[side] = true;
		}
	},
	rebuild: function() {
      PipeNetBuilder.pipeNets = [];
			  //priority
			  let machinesource = [];
			  let machinestorage = [];
			  let others = [];
			  Logger.Log("zub");
			  Logger.Log("zza");
			  for(let i in TileEntityRegistry.quickCoordAccess) {
			      Logger.Log("z");
			    let tile = TileEntityRegistry.quickCoordAccess[i];
			    Logger.Log(tile, "zoli");
			    if(tile.isSource() && tile.isGenerator()) {
			        Logger.Log(tile.isGenerator(), "zopers");
			      machinesource.push(tile);
			    } else if(tile.isSource()) {
			      machinestorage.push(tile);
			    } else {
			      others.push(tile);
			    }
			    Logger.Log("neaters");
			  }
			  Logger.Log("ppm");
			  for(let i in machinesource) {
			    Logger.Log("push");
			    let created = PipeNetBuilder.buildForTile(machinesource[i], "liquid");
			    Logger.Log("pusher");
			    if(created != null) {
			      //is tileentity is not connected
			      machinesource[i].__Nets["liquid"] = created;
			    }
			    Logger.Log("pushnio");
			  }
			  for(let i in machinestorage) {
			    let created = PipeNetBuilder.buildForTile(machinestorage[i], "liquid");
			    if(created != null) {
			      //is tileentity is not connected
			      machinestorage[i].__Nets["liquid"] = created;
			    }
			  }
			  for(let i in others) {
			      Logger.Log("zzLogger.Log(zza)la");
			    let created = PipeNetBuilder.buildForTile(others[i], "liquid");
			    if(created != null) {
			      //is tileentity is not connected
			      others[i].__Nets["liquid"] = created;
			    }
			  }
			  Logger.Log("founder's ___f");
},
	/*rebuildForPipe: function(x, y, z, id) {
		var blockID = World.getBlock(x, y, z);
		if (blockID == id && ! PipeNetBuilder.getNetOnCoords(x, y, z)) {
			this.buildForPipe(x, y, z, blockID);
		}
	},*/
	
	buildRecursive: function(net, pipeId, x, y, z, side) {
		if (net.removed) return;
		
		var coordKey = x + ":" + y + ":" + z;
		if (net.pipeMap[coordKey]) {
			return;
		}
		
		var type = net.Name;
		var tileEntity = TileEntityRegistry.accessMachineAtCoords(x, y, z);
		if (tileEntity && tileEntity.__pipeTypes[type]) {
			if (tileEntity.isSource(type)) {
				var tnet = tileEntity.__Nets[type];
				if (tnet) {
					tnet.addConnection(net);
					net.addConnection(tnet);
				}
			}
			/*if (tileEntity.can*/
				net.addUnit(tileEntity);
		}
		else {
			var otherNet = this.getNetOnCoords(x, y, z);
			if (otherNet == net) {
				return;
			}
			
			var block = World.getBlock(x, y, z);
			if (pipeId == block.id) {
				if (otherNet) {
					this.mergeNets(net, otherNet);
				}
				else {
					net.pipeMap[coordKey] = true;
					this.rebuildFor6Sides(net, block, x, y, z);
				}
			}
			else if (otherNet) {
				if (otherNet.Name == type) {
					net.addConnection(otherNet);
					otherNet.addConnection(net);
				}
			}
			else if (PipeDictionary.isPipe(block.id, block.data, type)) {
				this.buildForPipe(x, y, z, block.id);
			}
		}
	},

	rebuildFor6Sides: function(net, pipeBlock, x, y, z) {
		/*var pipeData = PipeDictionary.getPipeData(pipeBlock.id);*/
		var coord1 = {x: x, y: y, z: z};
		for(var side = 0; side < 6; side++) {
			var coord2 = this.getRelativeCoords(x, y, z, side);
			if(TileEntity.getTileEntity(x, y, z).canConnect(pipeBlock, coord2, side)) {
				this.buildRecursive(net, pipeBlock.id, coord2.x, coord2.y, coord2.z, side ^ 1);
			}
		}
	},
	
	
	rebuildTileNet: function(tile) {
		var nets = tile.__Nets;
		for (var i in nets) {
			PipeNetBuilder.removeNet(nets[i]);
			delete nets[i];
		}
		PipeNetBuilder.rebuildTileConnections(tile.x, tile.y, tile.z, tile);
	},
	
	rebuildTileConnections: function(x, y, z, tile) {
		for (var name in tile.__Types) {
			for (var side = 0; side < 6; side++) {
				//if (tile.canReceive(side, name)) {
					var c = this.getRelativeCoords(x, y, z, side);
					var tileSource = TileEntityRegistry.accessMachineAtCoords(c.x, c.y, c.z);
					if (tileSource && tileSource.__Types[name]) {
						//if (tileSource.canExtract(side ^ 1, name)) {
							var net = tileSource.__Nets[name];
							if (net) net.addUnit(tile);
						//}
					}
					else {
						var net = this.getNetOnCoords(c.x, c.y, c.z);
						if (net && net.Name == name) {
							net.addUnit(tile);
						}
					//}
				}
			}
		}
	},

	getNetOnCoords: function(x, y, z) {
		for (var i in this.Nets) {
			var net = this.Nets[i];
			var key = x + ":" + y + ":" + z;
			if (net.pipeMap[key]) return net;
		}
		return null;
	},
	
	getNetByBlock: function(x, y, z, pipeId) {
		if (World.getBlockID(x, y, z) == pipeId) {
			return this.getNetOnCoords(x, y, z);
		}
		return null;
	},

	tickPipeNets: function() {
		for (var i in this.pipeNets) {
		  
			this.pipeNets[i].tick();
		}
	},
	directions: [
			{x: 0, y: -1, z: 0}, // down
			{x: 0, y: 1, z: 0}, // up
			{x: 0, y: 0, z: -1}, // east
			{x: 0, y: 0, z: 1}, // west
			{x: -1, y: 0, z: 0}, // south
			{x: 1, y: 0, z: 0} // north
		],
	getSide: function(relative) {
	  for(let i = 0; i < this.directions.length; i++) {
	    if(this.directions[i].x == relative.x & this.directions[i].y == relative.y & this.directions[i].z == relative.z) {
	      return i;
	    }
	  }
	  return null;
	},
	getRelativeSide: function(coords1/*main side*/, coords2) {
	  let relative = {x: coords2.x - coords1.x, y: coords2.y - coords1.y, z: coords2.z - coords1.z};
	  return this.getSide(relative);
	},
	getRelativeCoords: function(x, y, z, side) {
		var dir = this.directions[side];
		return {x: x + dir.x, y: y + dir.y, z: z + dir.z};
	},
	sideToNeighboring: function(side) {
	  if(side % 2 == 0) {
	    return side + 1;
	  } else {
	    return side - 1;
	  }
	}
}

var GLOBAL_WEB_ID = 0;
function PipeNet(Type, overloadFunc) {

	this.Type = Type; //item, liquid

	this.Name = Type.name;
	
	this.netId = GLOBAL_WEB_ID++;
	//this.onOverload = overloadFunc || function() {};
	this.sourceTile = null;
	this.sourceCoords = null;
	this.enabledSide = [];
	let self = this;
	this.source = {
		parent: function() {
			return self;
		},
		
		add: function(pretile, amount, type, coords, sidepre) {
		  
		  Logger.Log(amount, "io");
		  
			var add = self.add(pretile, amount, type, coords, sidepre);
			Logger.Log(add, "io's");
			return amount - add;
		},
	}
	this.connectedNets = {};
	this.connectionsCount = 0;
	this.addConnection = function(net) {
		if(!this.connectedNets[net.netId]) {
			this.connectedNets[net.netId] = net;
			this.connectionsCount++;
		}
	}

	this.removeConnection = function(net) {
		delete this.connectedNets[net.netId];
		this.connectionsCount--;
	}
  
  this.getUnits = function() {
    let units = [];
    if(this.sourceTile && this.sourceTile.__Types && this.sourceTile.__Types[this.Type]) {
    units[units.length] = this.sourceTile;
    if(this.sourceTile.canConnect() && this.sourceTile.isSource()) {
      Logger.Log("sup", "*")
    for (let side = 0; side < 6; side++) {
      if(this.enabledSide[side]) {
				let c = PipeNetBuilder.getRelativeCoords(sourceCoords.x, sourceCoords.y, sourceCoords.z, side);
				let tile = World.getTileEntity(c.x, c.y, c.z);
				Logger.Log("supernio", "*")
				if(tile && tile.__Types && tile.__Types[this.Type] && tile.canConnect() && !tile.isGenerator()) {
				  units[units.length] = tile;
				  if(tile.isSource()) {
				    this.getUnits1(units, c, sourceCoords);
				  }
				}
      }
		  }
    }
    Logger.Log("superfuck", "*")
		  return units;
    }
    Logger.Log("error!");
    return null;
  }
  this.getUnits1 = function(units, coords, coordspre) {
    for (let side = 0; side < 6; side++) {
				let c = PipeNetBuilder.getRelativeCoords(coords.x, coords.y, soords.z, side);
				if(!(c == coordspre)) {
				  let tile = World.getTileEntity(c.x, c.y, c.z);
				if(tile && tile.__Types && tile.__Types[this.Type] && tile.canConnect() && !tile.isGenerator()) {
				  units[units.length] = tile;
				  if(tile.isSource()) {
				    this.getUnits1(units, c, coords);
				  }
				}
      }
		  }
  }
	this.tileEntities = [];
	this.addUnit = function(tileEntity) {
		if (!tileEntity.__connectedNets[this.netId]) {
			this.tileEntities.push(tileEntity);
			tileEntity.__connectedNets[this.netId] = this;
		}
	}

	this.add = function(pretile, amount, type, coords, sidepre) {
	  Logger.Log("oop", "zoop");
		var inAmount = amount;
		/*var n = this.tileEntities.length;
		for (var i in this.tileEntities) {
			if (amount <= 0) break;
			var tile = this.tileEntities[i];
			if(tile != source) {
			  if(pretile.canExtract(PipeNetBuilder.getSide({x: tile.x - pretile.x, y: tile.y - pretile.y, z: tile.z - pretile.z}), "liquid", tile.x, tile.y, tile.z)) {
			  if(tile.canReceive(PipeNetBuilder.getSide({x: tile.x - pretile.x, y: tile.y - pretile.y, z: tile.z - pretile.z}), "liquid", xPrev, yPrev, zPrev, x, y, z)) {
				amount -= tile.receive(type, amount/n, x, y, z);
			  }
			}
			}
		}
		
		for (var i in this.connectedNets) {
			if (amount <= 0) break;
			var net = this.connectedNets[i];
			if (!net.sourceTile) {
				amount -= net.add(amount, source, explored);
			}
		}*/
		Logger.Log(amount, "zub");
		let divider = 2;
		for(let side = 0; side < 6; side++) {
		    Logger.Log(pretile, "zeaser");
				if(pretile.canExtract(side, type)) {
				let c = PipeNetBuilder.getRelativeCoords(pretile.x, pretile.y, pretile.z, side);
				let tile = World.getTileEntity(c.x, c.y, c.z);
				Logger.Log(sidepre, "zoop");
				if(side !== sidepre) {
				  if(tile) Logger.Log(tile.data.type, "zaeanoloiuhytrreueueuueueiewuueiwuwe8e8eeieieieueiiewuueeiieieie");
				  if(tile) Logger.Log(tile.isGenerator(), "zaeanoloiuhytrreueueuueueiewuueiwuwe8e8eeieieieueiiewuueeiieieie");
				if(tile && tile.__Types && tile.__Types[this.Type] && tile.canConnect() && !tile.isGenerator()) {
				  Logger.Log("fuccc");
				  if(tile != this.sourceTile) {
			      Logger.Log("fuccewytc");
			      if(tile.canReceive(side, type)) {
			        Logger.Log("fucc");
			        let amont = Math.min(inAmount / divider, amount);
				      amount -= tile.receive(type, amont, side);
				      divider = divider * 2;
				      Logger.Log(inAmount / divider, "zub");
			      }
      }
		  }}
        }}
		if (inAmount > amount) {
				//this.onOverload(inVoltage);
			  //this.transfered += inAmount - amount;
		}
		return inAmount - amount;
	}

	this.toString = function() {
		var r = function(x) {return Math.round(x * 100) / 100};
		return "[PipeNet id=" + this.netId + " type=" + this.Name + "| stored =" +"]";
	}
	this.tick = function() {
		
	}
}




// file: sound.js

let sounds = {
wrench: new Sound(),
interrupt: new Sound(),
alloy_smelter_sound: new Sound(),
furnace_sound: new Sound(),
macerator_sound: new Sound(),
compressor_sound: new Sound(),
extractor_sound: new Sound()
}

sounds.wrench.setSource("res/sound/Wrench.ogg");
sounds.interrupt.setSource("res/sound/InterruptOne.ogg");
sounds.alloy_smelter_sound.setSource("res/sound/ElectroFurnaceLoop.ogg");
sounds.furnace_sound.setSource("res/sound/ElectroFurnaceLoop.ogg");
sounds.macerator_sound.setSource("res/sound/MaceratorOp.ogg");
sounds.compressor_sound.setSource("res/sound/CompressorOp.ogg");
sounds.extractor_sound.setSource("res/sound/ExtractorOp.ogg");




// file: block/stone.js

StoneDictionary = {
	stones: {},
	registerStone: function(id, variants) {
		this.stones[id] = variants;
		let inverted = null
		let inverted2 = null
		if(variants.name.includes("granite")) {
        		inverted = variants.name.substring(variants.name.indexOf("_") + 1, variants.name.length) + "_" + variants.name.substring(0, variants.name.indexOf("_"));
        		inverted = inverted.toUpperCase();
        		inverted2 = variants.name2.substring(variants.name2.indexOf("_") + 1, variants.name2.length) + "_" + variants.name2.substring(0, variants.name2.indexOf("_"));
        		inverted2 = inverted2.toUpperCase();
		} else {
		    inverted = variants.name.toUpperCase();
		    inverted2 = variants.name2.toUpperCase();
		}
		Logger.Log("$*", inverted);
		Logger.Log(inverted2);
            	IDRegistry.genBlockID(id);
    		Block.createBlock(id, [{name: variants.name, texture: [[inverted + "_STONE", 0]], inCreative: true}, {name: variants.name, texture: [[inverted + "_COBBLE", 0]], inCreative: true}, {name: variants.name, texture: [[inverted + "_COBBLE_MOSSY", 0]], inCreative: true}, {name: variants.name, texture: [[inverted + "_BRICKS", 0]], inCreative: true}, {name: variants.name, texture: [[inverted + "_BRICKS_CRACKED", 0]], inCreative: true}, {name: variants.name, texture: [[inverted + "_BRICKS_MOSSY", 0]], inCreative: true}, {name: variants.name, texture: [[inverted + "_BRICKS_CHISELED", 0]], inCreative: true}, {name: variants.name, texture: [[inverted + "_SMOOTH", 0]], inCreative: true}, {name: variants.name2, texture: [[inverted2 + "_STONE", 0]], inCreative: true}, {name: variants.name2, texture: [[inverted2 + "_COBBLE", 0]], inCreative: true}, {name: variants.name2, texture: [[inverted2 + "_COBBLE_MOSSY", 0]], inCreative: true}, {name: variants.name2, texture: [[inverted2 + "_BRICKS", 0]], inCreative: true}, {name: variants.name2, texture: [[inverted2 + "_BRICKS_CRACKED", 0]], inCreative: true}, {name: variants.name2, texture: [[inverted2 + "_BRICKS_MOSSY", 0]], inCreative: true}, {name: variants.name2, texture: [[inverted2 + "_BRICKS_CHISELED", 0]], inCreative: true}, {name: variants.name2, texture: [[inverted2 + "_SMOOTH", 0]], inCreative: true}], "stone");
    	ToolAPI.registerBlockMaterial(id, "stone", variants.level, true);
		Block.registerDropFunction(id, function(blockCoords, blockID, blockData, diggingLevel, region) {
			if(blockData == 0 || blockData == 8) {
				return [[blockID, 1, blockData + 1]];
			}
			return [[blockID, 1, blockData]];
		});
	},
	generateStone: function(coords, id, variant, random) {
    		let sizze = random.nextInt(5);
    		let size = sizze + 2
		for(let x = -size; x < size; x++) {
    			for(let y = -size; y < size; y++) {
      				for(let z = -size; z < size; z++) {
					if(x * x + y * y + z * z < size * size) {
						World.setBlock(coords.x + x, coords.y + y, coords.z + z, id, variant);
					}
				}
    		}
		}
	},
	addToCreative: function() {
		for(let i in this.stones) {
			for(let j = 0; j < 16; j++) {
				Item.addToCreative(i, 1, j);
			}
		}
	}
}
StoneDictionary.registerStone("granite", {
	hardness: 7.0,
	resistance: 12.0,
	level: 3,
	name: "black_granite",
	dimension: 0,
	name2: "red_granite",
	dimension2: 0
});
StoneDictionary.registerStone("mineral", {
	hardness: 3.0,
	resistance: 6.0,
	level: 1,
	name: "marble",
	dimension: 0,
	name2: "basalt",
	dimension2: 0
});
//StoneDictionary.addToCreative();




// file: item/meta.js

MaterialDictionary.registerForm("item", 0, "ingot");
MaterialDictionary.registerForm("item", 0, "dust");
MaterialDictionary.registerForm("item", GENERATE_PLATE, "plate");
MaterialDictionary.registerForm("item", GENERATE_DENSE, "dense_plate");
MaterialDictionary.registerForm("item", GENERATE_ROD, "rod");
MaterialDictionary.registerForm("item", GENERATE_LONG_ROD, "long_rod");
MaterialDictionary.registerForm("item", 0, "smallpiledust");
MaterialDictionary.registerForm("item", 0, "tinypiledust");
MaterialDictionary.registerForm("item", GENERATE_FOIL, "foil");
MaterialDictionary.registerForm("item", GENERATE_FINE_WIRE, "fine_wire");
MaterialDictionary.registerForm("item", GENERATE_SMALL_GEAR, "small_gear");
MaterialDictionary.registerForm("item", GENERATE_GEAR, "gear");
MaterialDictionary.registerForm("item", GENERATE_RING, "ring");
MaterialDictionary.registerForm("item", GENERATE_BOLT_SCREW, "bolt");
MaterialDictionary.registerForm("item", GENERATE_BOLT_SCREW, "screw");
//MaterialDictionary.registerForm(ItemID.gtmetaitem01, GENERATE_TURBINE_BLADE, "gear");
MaterialDictionary.registerForm("item", 0, "nugget");

MaterialDictionary.registerForm("item", 0, "gem");
MaterialDictionary.registerForm("item", GENERATE_LENSE, "lens");

MaterialDictionary.registerForm("item", GENERATE_ORE, "crushedore");
MaterialDictionary.registerForm("item", GENERATE_ORE, "purifiedore");
MaterialDictionary.registerForm("item", GENERATE_ORE, "centrifugedore");
MaterialDictionary.registerForm("item", GENERATE_ORE, "impuredust");
MaterialDictionary.registerForm("item", GENERATE_ORE, "purifieddust");

MaterialDictionary.registerForm("block", 0, "block");
MaterialDictionary.registerForm("block", GENERATE_FRAME, "frame_box");

MaterialDictionary.registerMaterial(new Material("_NULL", of(), "MARKER", 0, 2, 38400, 6, 6, 70, 300, 0x80C8F0, IconTransformator.UV.DULL));

MaterialDictionary.registerMaterial(new Material("aluminium", Elements.Al, "INGOT", EXT2_METAL | GENERATE_SMALL_GEAR | GENERATE_ORE | GENERATE_RING | GENERATE_FRAME, 2, 38400, 6, 6, 70, 300, 0x80C8F0, IconTransformator.UV.DULL));
MaterialDictionary.registerMaterial(new Material("americium", Elements.Am, "INGOT", STD_METAL | GENERATE_ROD | GENERATE_LONG_ROD, 2, 38400, 6, 6, 70, 300, 0xC8C8C8, IconTransformator.UV.METALLIC));
MaterialDictionary.registerMaterial(new Material("antimony", Elements.Sb, "INGOT", EXT_METAL | MORTAR_GRINDABLE, 2, 38400, 6, 6, 70, 300, 0xDCDCC8, IconTransformator.UV.SHINY));
MaterialDictionary.registerMaterial(new Material("arsenic", Elements.As, "DUST", 0, 2, 38400, 6, 6, 70, 300, 0xDDDDDD, IconTransformator.UV.SAND));
MaterialDictionary.registerMaterial(new Material("barium", Elements.Ba, "INGOT", STD_METAL, 2, 19200, 6, 6, 70, 300, 0x64B464, IconTransformator.UV.METALLIC));
MaterialDictionary.registerMaterial(new Material("beryllium", Elements.Be, "INGOT", STD_METAL | GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0x64B464, IconTransformator.UV.METALLIC));
MaterialDictionary.registerMaterial(new Material("bismuth", Elements.Bi, "INGOT", GENERATE_ORE, 1, 19200, 6, 6, 70, 300, 0x64A0A0, IconTransformator.UV.METALLIC));
MaterialDictionary.registerMaterial(new Material("boron", Elements.B, "DUST", 0, 2, 38400, 6, 6, 70, 300, 0xD2F0D2, IconTransformator.UV.SAND));
MaterialDictionary.registerMaterial(new Material("cadmium", Elements.Cd, "INGOT", 0, 1, 25600, 6, 6, 70, 300, 0x505060, IconTransformator.UV.SHINY));
MaterialDictionary.registerMaterial(new Material("calcium", Elements.Ca, "INGOT", 0, 2, 38400, 6, 6, 70, 300, 0xDDDDAA, IconTransformator.UV.METALLIC));
MaterialDictionary.registerMaterial(new Material("carbon", Elements.C, "INGOT", 0, 2, 38400, 6, 6, 70, 300, 0x333333, IconTransformator.UV.DULL));
MaterialDictionary.registerMaterial(new Material("cerium", Elements.Ce, "INGOT", 0, 1, 25600, 6, 6, 70, 300, 0xEEEEEE, IconTransformator.UV.METALLIC));
MaterialDictionary.registerMaterial(new Material("cobalt", Elements.Co, "INGOT", GENERATE_ORE | STD_METAL, 1, 25600, 6, 6, 70, 300, 0x2929BC, IconTransformator.UV.METALLIC));
MaterialDictionary.registerMaterial(new Material("copper", Elements.Cu, "INGOT", EXT2_METAL | GENERATE_ORE | MORTAR_GRINDABLE | GENERATE_DENSE, 1, 25600, 6, 6, 70, 300, 0xFFAAAB, IconTransformator.UV.SHINY));
MaterialDictionary.registerMaterial(new Material("chlorine", Elements.Cl, "FLUID",  STATE_GAS, 1, 25600, 6, 6, 70, 300, 0xFF8000, IconTransformator.UV.GAS));
MaterialDictionary.registerMaterial(new Material("chrome", Elements.Cr, "INGOT",  EXT2_METAL | GENERATE_RING | GENERATE_ROTOR, 1, 25600, 6, 6, 70, 300, 0xFF8000, IconTransformator.UV.GAS));
MaterialDictionary.registerMaterial(new Material("gallium", Elements.Ga, "INGOT", GENERATE_PLATE, 2, 25600, 6, 6, 70, 300, 0xFFFF00, IconTransformator.UV.SHINY));
MaterialDictionary.registerMaterial(new Material("gold", Elements.Au, "INGOT", EXT2_METAL | GENERATE_ORE | MORTAR_GRINDABLE | EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES, 2, 25600, 6, 6, 70, 300, 0xFFFF00, IconTransformator.UV.SHINY));
MaterialDictionary.registerMaterial(new Material("fluorine", Elements.F, "FLUID", STATE_GAS, 2, 25600, 6, 6, 70, 300, 0xFFFFAA, IconTransformator.UV.GAS));
MaterialDictionary.registerMaterial(new Material("iridium", Elements.Ir, "INGOT", GENERATE_ORE | EXT2_METAL | GENERATE_ORE | GENERATE_RING | GENERATE_ROTOR, 3, 19200, 6, 6, 70, 300, 0xFFFFFF, IconTransformator.UV.DULL));
MaterialDictionary.registerMaterial(new Material("iron", Elements.Fe, "INGOT", EXT2_METAL | GENERATE_ORE | MORTAR_GRINDABLE | GENERATE_RING | GENERATE_DENSE | GENERATE_FRAME | GENERATE_LONG_ROD | GENERATE_PLASMA | EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES, 2, 25600, 6, 6, 70, 300, 0xAAAAAA, IconTransformator.UV.METALLIC));
MaterialDictionary.registerMaterial(new Material("lead", Elements.Pb, "INGOT", EXT2_METAL | GENERATE_ORE | MORTAR_GRINDABLE | GENERATE_DENSE, 1, 25600, 6, 6, 70, 300, 0x8C648C, IconTransformator.UV.DULL));
MaterialDictionary.registerMaterial(new Material("magnesium", Elements.Mg, "INGOT", STD_METAL | GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0xFFBBBB, IconTransformator.UV.METALLIC));
MaterialDictionary.registerMaterial(new Material("manganese", Elements.Mn, "INGOT", GENERATE_FOIL, 2, 19200, 6, 6, 70, 300, 0xEEEEEE, IconTransformator.UV.DULL));
MaterialDictionary.registerMaterial(new Material("lithium", Elements.Li, "INGOT", STD_METAL | GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0xCBCBCB, IconTransformator.UV.DULL));
MaterialDictionary.registerMaterial(new Material("mercury", Elements.Hg, "FLUID", SMELT_INTO_FLUID, 2, 19200, 6, 6, 70, 300, 0xFFDDDD, IconTransformator.UV.FLUID));
MaterialDictionary.registerMaterial(new Material("molybdenum", Elements.Mo, "INGOT", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0xAAAADD, IconTransformator.UV.SHINY));
MaterialDictionary.registerMaterial(new Material("neodymium", Elements.Nd, "INGOT", STD_METAL | GENERATE_ROD | GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0x777777, IconTransformator.UV.METALLIC));
MaterialDictionary.registerMaterial(new Material("nickel", Elements.Ni, "INGOT", STD_METAL | GENERATE_ORE | MORTAR_GRINDABLE | GENERATE_PLASMA, 2, 19200, 6, 6, 70, 300, 0xAAAAFF, IconTransformator.UV.METALLIC));
MaterialDictionary.registerMaterial(new Material("niobium", Elements.Nb, "INGOT", STD_METAL, 2, 19200, 6, 6, 70, 300, 0xAAAAFF, IconTransformator.UV.METALLIC));
MaterialDictionary.registerMaterial(new Material("nitrogen", Elements.N, "FLUID", STATE_GAS | GENERATE_PLASMA, 2, 19200, 6, 6, 70, 300, 0x90AAEE, IconTransformator.UV.FLUID));
MaterialDictionary.registerMaterial(new Material("oxygen", Elements.O, "FLUID", STATE_GAS | GENERATE_PLASMA, 2, 19200, 6, 6, 70, 300, 0x90AAEE, IconTransformator.UV.FLUID));
MaterialDictionary.registerMaterial(new Material("hydrogen", Elements.H, "FLUID", STATE_GAS, 2, 19200, 6, 6, 70, 300, 0x00FFAA, IconTransformator.UV.GAS));
MaterialDictionary.registerMaterial(new Material("palladium", Elements.Pd, "INGOT", EXT2_METAL | GENERATE_ORE | GENERATE_FLUID_BLOCK, 2, 19200, 6, 6, 70, 300, 0xCED0DD, IconTransformator.UV.METALLIC));
MaterialDictionary.registerMaterial(new Material("phosphorus", Elements.P, "DUST", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0xC8C800, IconTransformator.UV.DULL));
MaterialDictionary.registerMaterial(new Material("platinum", Elements.Pt, "INGOT", EXT2_METAL | GENERATE_ORE | GENERATE_FLUID_BLOCK, 2, 19200, 6, 6, 70, 300, 0xFFFF99, IconTransformator.UV.SHINY));
MaterialDictionary.registerMaterial(new Material("potassium", Elements.K, "INGOT", EXT_METAL, 2, 19200, 6, 6, 70, 300, 0xFFFF99, IconTransformator.UV.METALLIC));
MaterialDictionary.registerMaterial(new Material("titanium", Elements.Ti, "INGOT", EXT2_METAL | MORTAR_GRINDABLE, 2, 38400, 6, 6, 70, 300, 0xDCDCFF, IconTransformator.UV.SHINY)
);
MaterialDictionary.registerMaterial(new Material("silver", Elements.Ag, "INGOT", EXT2_METAL | GENERATE_ORE | MORTAR_GRINDABLE, 2, 38400, 6, 6, 70, 300, 0xDCDCFF, IconTransformator.UV.SHINY)
);
MaterialDictionary.registerMaterial(new Material("silicon", Elements.Si, "INGOT", EXT2_METAL | GENERATE_ORE | MORTAR_GRINDABLE, 2, 38400, 6, 6, 70, 300, 0xDCDCFF, IconTransformator.UV.SHINY)
);
MaterialDictionary.registerMaterial(new Material("sodium", Elements.Na, "INGOT", STD_METAL, 2, 38400, 6, 6, 70, 300, 0x000096, IconTransformator.UV.METALLIC)
);
MaterialDictionary.registerMaterial(new Material("sulfur", Elements.S, "DUST", NO_SMASHING | NO_SMELTING | FLAMMABLE | GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0xC8C800, IconTransformator.UV.DULL));
MaterialDictionary.registerMaterial(new Material("tantalum", Elements.Ta, "INGOT", EXT2_METAL | MORTAR_GRINDABLE | GENERATE_RING, 1, 25600, 6, 6, 70, 300, 0xDCDCDC, IconTransformator.UV.DULL));
MaterialDictionary.registerMaterial(new Material("tin", Elements.Sn, "INGOT", EXT2_METAL | MORTAR_GRINDABLE | GENERATE_RING | GENERATE_ROTOR | GENERATE_ORE, 1, 25600, 6, 6, 70, 300, 0xDCDCDC, IconTransformator.UV.DULL));
MaterialDictionary.registerMaterial(new Material("thorium", Elements.Th, "INGOT", STD_METAL | GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0x001E00, IconTransformator.UV.SHINY));
MaterialDictionary.registerMaterial(new Material("tungsten", Elements.W, "INGOT", EXT2_METAL, 2, 19200, 6, 6, 70, 300, 0x001E00, IconTransformator.UV.METALLIC));
MaterialDictionary.registerMaterial(new Material("uranium", Elements.U[238], "INGOT", STD_METAL | GENERATE_ORE, 3, 19200, 6, 6, 70, 300, 0x32F032, IconTransformator.UV.METALLIC));
MaterialDictionary.registerMaterial(new Material("uranium235", Elements.U[235], "INGOT", STD_METAL | GENERATE_ORE | GENERATE_ROD, 3, 19200, 6, 6, 70, 300, 0x32F032, IconTransformator.UV.METALLIC));
MaterialDictionary.registerMaterial(new Material("vanadium", Elements.V, "INGOT", STD_METAL, 2, 19200, 6, 6, 70, 300, 0x323232, IconTransformator.UV.METALLIC));
MaterialDictionary.registerMaterial(new Material("zinc", Elements.Zn, "INGOT", STD_METAL | GENERATE_ORE | MORTAR_GRINDABLE | GENERATE_FOIL, 1, 19200, 6, 6, 70, 300, 0xFAF0F0, IconTransformator.UV.METALLIC));








MaterialDictionary.registerMaterial(new Material("almandine", of(new MaterialStack(MaterialDictionary.dict["aluminium"], 2), new MaterialStack(MaterialDictionary.dict["iron"], 3), new MaterialStack(MaterialDictionary.dict["silicon"], 3), new MaterialStack(MaterialDictionary.dict["oxygen"], 12)), "DUST", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0xFF0000, IconTransformator.UV.ROUGH));
MaterialDictionary.registerMaterial(new Material("amber", of(), "GEM", STD_GEM | NO_SMASHING | NO_SMELTING | HIGH_SIFTER_OUTPUT, 2, 25600, 6, 6, 70, 300, 0xBD4949, IconTransformator.UV.RUBY));
MaterialDictionary.registerMaterial(new Material("banded_iron", of(new MaterialStack(MaterialDictionary.dict["iron"], 2), new MaterialStack(MaterialDictionary.dict["oxygen"], 3)), "DUST", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0x915A5A, IconTransformator.UV.DULL));
MaterialDictionary.registerMaterial(new Material("barite", of(new MaterialStack(MaterialDictionary.dict["barium"], 1), new MaterialStack(MaterialDictionary.dict["sulfur"], 1), new MaterialStack(MaterialDictionary.dict["oxygen"], 4)), "DUST", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0xE6EBFF, IconTransformator.UV.DULL));
MaterialDictionary.registerMaterial(new Material("bastnasite",  of(new MaterialStack(MaterialDictionary.dict["cerium"], 1), new MaterialStack(MaterialDictionary.dict["carbon"], 1), new MaterialStack(MaterialDictionary.dict["fluorine"], 1), new MaterialStack(MaterialDictionary.dict["oxygen"], 3)), "DUST", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0xC86E2D, IconTransformator.UV.FINE));
MaterialDictionary.registerMaterial(new Material("battery_alloy", of(new MaterialStack(MaterialDictionary.dict["lead"], 4), new MaterialStack(MaterialDictionary.dict["antimony"], 1)), "INGOT", EXT_METAL, 2, 25600, 6, 6, 70, 300, 0x9C7CA0, IconTransformator.UV.DULL));
MaterialDictionary.registerMaterial(new Material("blue_topaz", of(new MaterialStack(MaterialDictionary.dict["aluminium"], 2), new MaterialStack(MaterialDictionary.dict["silicon"], 1), new MaterialStack(MaterialDictionary.dict["fluorine"], 2), new MaterialStack(MaterialDictionary.dict["hydrogen"], 2), new MaterialStack(MaterialDictionary.dict["oxygen"], 6)), "GEM", STD_GEM | NO_SMASHING | NO_SMELTING | HIGH_SIFTER_OUTPUT, 3, 25600, 6, 6, 70, 300, 0x0000FF, IconTransformator.UV.GEM_HORIZONTAL));
MaterialDictionary.registerMaterial(new Material("bronze", of(new MaterialStack(MaterialDictionary.dict["tin"], 1), new MaterialStack(MaterialDictionary.dict["copper"], 3)), "INGOT", EXT2_METAL | MORTAR_GRINDABLE | GENERATE_RING | GENERATE_ROTOR | GENERATE_FRAME | GENERATE_LONG_ROD, 2, 19200, 6, 6, 70, 300, 0xFF8000, IconTransformator.UV.METALLIC));
MaterialDictionary.registerMaterial(new Material("brown_limonite", of(new MaterialStack(MaterialDictionary.dict["iron"], 1), new MaterialStack(MaterialDictionary.dict["hydrogen"], 1), new MaterialStack(MaterialDictionary.dict["oxygen"], 2)), "DUST", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0xC86400, IconTransformator.UV.METALLIC));
MaterialDictionary.registerMaterial(new Material("certus_quartz", of(), "GEM", STD_SOLID | NO_SMELTING | CRYSTALLISABLE | GENERATE_ORE, 2, 25600, 6, 6, 70, 300, 0xD2D2E6, IconTransformator.UV.QUARTZ));
MaterialDictionary.registerMaterial(new Material("coal", of(new MaterialStack(MaterialDictionary.dict["carbon"], 1)), "GEM", GENERATE_ORE | FLAMMABLE | NO_SMELTING | NO_SMASHING | MORTAR_GRINDABLE | EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES, 2, 19200, 1, 6, 70, 300, 0x464646, IconTransformator.UV.ROUGH));
MaterialDictionary.registerMaterial(new Material("calcite", of(new MaterialStack(MaterialDictionary.dict["calcium"], 1), new MaterialStack(MaterialDictionary.dict["carbon"], 1), new MaterialStack(MaterialDictionary.dict["oxygen"], 3)), "DUST", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0xFAE6DC, IconTransformator.UV.DULL));
MaterialDictionary.registerMaterial(new Material("cassiterite", of(new MaterialStack(MaterialDictionary.dict["tin"], 1), new MaterialStack(MaterialDictionary.dict["oxygen"], 2)), "DUST", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0xDCDCDC, IconTransformator.UV.METALLIC));
MaterialDictionary.registerMaterial(new Material("chalcopyrite", of(new MaterialStack(MaterialDictionary.dict["copper"], 1), new MaterialStack(MaterialDictionary.dict["iron"], 1), new MaterialStack(MaterialDictionary.dict["sulfur"], 2)), "DIST", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0xA07828, IconTransformator.UV.DULL));
MaterialDictionary.registerMaterial(new Material("cinnabar", of(new MaterialStack(MaterialDictionary.dict["mercury"], 1), new MaterialStack(MaterialDictionary.dict["sulfur"], 1)), "DUST", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0x960000, IconTransformator.UV.ROUGH));
MaterialDictionary.registerMaterial(new Material("cobaltite", of(new MaterialStack(MaterialDictionary.dict["cobalt"], 1), new MaterialStack(MaterialDictionary.dict["arsenic"], 1), new MaterialStack(MaterialDictionary.dict["sulfur"], 1)), "DUST", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0x5050FA, IconTransformator.UV.METALLIC));
MaterialDictionary.registerMaterial(new Material("cooperite", of(new MaterialStack(MaterialDictionary.dict["platinum"], 3), new MaterialStack(MaterialDictionary.dict["nickel"], 1), new MaterialStack(MaterialDictionary.dict["sulfur"], 1), new MaterialStack(MaterialDictionary.dict["palladium"], 1)), "DUST", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0xFFFFC8, IconTransformator.UV.METALLIC));
MaterialDictionary.registerMaterial(new Material("dark_ash", of(new MaterialStack(MaterialDictionary.dict["carbon"], 1)), "DUST", DISABLE_DECOMPOSITION, 2, 19200, 6, 6, 70, 300, 0xFF0000, IconTransformator.UV.SAND));
MaterialDictionary.registerMaterial(new Material("ash", of(new MaterialStack(MaterialDictionary.dict["carbon"], 1)), "DUST", DISABLE_DECOMPOSITION, 2, 19200, 6, 6, 70, 300, 0x969696, IconTransformator.UV.SAND));
MaterialDictionary.registerMaterial(new Material("diamond", of(new MaterialStack(MaterialDictionary.dict["carbon"], 1)), "GEM", GENERATE_ROD | GENERATE_BOLT_SCREW | GENERATE_LENSE | GENERATE_GEAR | NO_SMASHING | NO_SMELTING | FLAMMABLE | HIGH_SIFTER_OUTPUT | GENERATE_ORE | DISABLE_DECOMPOSITION | EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES, 3, 128000, 7, 8, 0, 0, 0xC8FFFF, IconTransformator.UV.DIAMOND));
MaterialDictionary.registerMaterial(new Material("emerald", of(new MaterialStack(MaterialDictionary.dict["beryllium"], 3), new MaterialStack(MaterialDictionary.dict["aluminium"], 2), new MaterialStack(MaterialDictionary.dict["silicon"], 6), new MaterialStack(MaterialDictionary.dict["oxygen"], 18)), "GEM", STD_GEM | NO_SMASHING | NO_SMELTING | HIGH_SIFTER_OUTPUT | EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES, 0, 25600, 6, 6, 70, 300, 0x50FF50, IconTransformator.UV.EMERALD));
MaterialDictionary.registerMaterial(new Material("ender_pearl", of(new MaterialStack(MaterialDictionary.dict["beryllium"], 3), new MaterialStack(MaterialDictionary.dict["potassium"], 4), new MaterialStack(MaterialDictionary.dict["nitrogen"], 5)), "GEM", GENERATE_PLATE | GENERATE_LENSE | NO_SMASHING | NO_SMELTING, 0, 25600, 6, 6, 70, 300, 0x50FF50, IconTransformator.UV.GEM_VERTICAL));
MaterialDictionary.registerMaterial(new Material("galena", of(new MaterialStack(MaterialDictionary.dict["lead"], 3), new MaterialStack(MaterialDictionary.dict["silver"], 3), new MaterialStack(MaterialDictionary.dict["sulfur"], 2)), "DUST", GENERATE_ORE, 3, 19200, 6, 6, 70, 300, 0x643C64, IconTransformator.UV.DULL));
MaterialDictionary.registerMaterial(new Material("garnierite", of(new MaterialStack(MaterialDictionary.dict["nickel"], 1), new MaterialStack(MaterialDictionary.dict["oxygen"], 1)), "DUST", GENERATE_ORE, 3, 19200, 6, 6, 70, 300, 0x32C846, IconTransformator.UV.METALLIC));
MaterialDictionary.registerMaterial(new Material("glauconite", of(new MaterialStack(MaterialDictionary.dict["potassium"], 1), new MaterialStack(MaterialDictionary.dict["magnesium"], 2), new MaterialStack(MaterialDictionary.dict["aluminium"], 4), new MaterialStack(MaterialDictionary.dict["hydrogen"], 2), new MaterialStack(MaterialDictionary.dict["oxygen"], 12)), "DUST", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0x82B43C, IconTransformator.UV.DULL));
MaterialDictionary.registerMaterial(new Material("glowstone", of(), "DUST", NO_SMASHING | SMELT_INTO_FLUID | GENERATE_PLATE | EXCLUDE_PLATE_COMPRESSOR_RECIPE, 2, 19200, 6, 6, 70, 300, 0xFFFF00, IconTransformator.UV.SHINY));
MaterialDictionary.registerMaterial(new Material("graphite", of(), "INGOT", GENERATE_PLATE | GENERATE_ORE | NO_SMELTING | FLAMMABLE, 2, 19200, 6, 6, 70, 300, 0x808080, IconTransformator.UV.DULL));
MaterialDictionary.registerMaterial(new Material("green_sapphire", of(new MaterialStack(MaterialDictionary.dict["aluminium"], 2), new MaterialStack(MaterialDictionary.dict["oxygen"], 3)), "GEM", GENERATE_ORE | NO_SMASHING | NO_SMELTING | HIGH_SIFTER_OUTPUT | GENERATE_LENSE, 2, 19200, 6, 6, 70, 300, 0x64C882, IconTransformator.UV.GEM_VERTICAL));
MaterialDictionary.registerMaterial(new Material("andradite", of(new MaterialStack(MaterialDictionary.dict["calcium"], 3), new MaterialStack(MaterialDictionary.dict["aluminium"], 2), new MaterialStack(MaterialDictionary.dict["silicon"], 3), new MaterialStack(MaterialDictionary.dict["oxygen"], 12)), "DUST", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0xC86400, IconTransformator.UV.ROUGH));
MaterialDictionary.registerMaterial(new Material("grossular", of(new MaterialStack(MaterialDictionary.dict["calcium"], 3), new MaterialStack(MaterialDictionary.dict["aluminium"], 2), new MaterialStack(MaterialDictionary.dict["silicon"], 3), new MaterialStack(MaterialDictionary.dict["oxygen"], 12)), "DUST", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0xC86400, IconTransformator.UV.ROUGH));
MaterialDictionary.registerMaterial(new Material("gunpowder", of(), "DUST", FLAMMABLE | EXPLOSIVE | NO_SMELTING | NO_SMASHING, 2, 19200, 6, 6, 70, 300, 0x808080, IconTransformator.UV.SAND));
MaterialDictionary.registerMaterial(new Material("quartzite", of(), "GEM", NO_SMELTING | CRYSTALLISABLE | GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0xD2E6D2, IconTransformator.UV.QUARTZ));
MaterialDictionary.registerMaterial(new Material("ilmenite", of(new MaterialStack(MaterialDictionary.dict["iron"], 1), new MaterialStack(MaterialDictionary.dict["titanium"], 1), new MaterialStack(MaterialDictionary.dict["oxygen"], 3)), "DUST", GENERATE_ORE, 3, 19200, 6, 6, 70, 300, 0x463732, IconTransformator.UV.METALLIC));
MaterialDictionary.registerMaterial(new Material("jasper", of(), "GEM", STD_GEM | NO_SMELTING | HIGH_SIFTER_OUTPUT, 2, 25600, 6, 6, 70, 300, 0xC85050, IconTransformator.UV.EMERALD));
MaterialDictionary.registerMaterial(new Material("lazurite", of(new MaterialStack(MaterialDictionary.dict["aluminium"], 6), new MaterialStack(MaterialDictionary.dict["silicon"], 6), new MaterialStack(MaterialDictionary.dict["calcium"], 8), new MaterialStack(MaterialDictionary.dict["sodium"], 8)), "GEM", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0x6478FF, IconTransformator.UV.LAPIS));
MaterialDictionary.registerMaterial(new Material("lepidolite", of(new MaterialStack(MaterialDictionary.dict["potassium"], 1), new MaterialStack(MaterialDictionary.dict["lithium"], 3), new MaterialStack(MaterialDictionary.dict["aluminium"], 4), new MaterialStack(MaterialDictionary.dict["fluorine"], 2), new MaterialStack(MaterialDictionary.dict["oxygen"], 10)), "DUST", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0xF0328C, IconTransformator.UV.FINE));
MaterialDictionary.registerMaterial(new Material("magnesite", of(new MaterialStack(MaterialDictionary.dict["magnesium"], 1), new MaterialStack(MaterialDictionary.dict["carbon"], 1), new MaterialStack(MaterialDictionary.dict["oxygen"], 3)), "DUST", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0xFAFAB4, IconTransformator.UV.METALLIC));
MaterialDictionary.registerMaterial(new Material("magnetite", of(new MaterialStack(MaterialDictionary.dict["iron"], 3), new MaterialStack(MaterialDictionary.dict["oxygen"], 4)), "DUST", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0x1E1E1E, IconTransformator.UV.METALLIC));
MaterialDictionary.registerMaterial(new Material("malachite", of(new MaterialStack(MaterialDictionary.dict["copper"], 2), new MaterialStack(MaterialDictionary.dict["carbon"], 1), new MaterialStack(MaterialDictionary.dict["hydrogen"], 2), new MaterialStack(MaterialDictionary.dict["oxygen"], 5)), "DUST", GENERATE_ORE | INDUCTION_SMELTING_LOW_OUTPUT, 2, 19200, 6, 6, 70, 300, 0x055F05, IconTransformator.UV.DULL));
MaterialDictionary.registerMaterial(new Material("molybdenite",  of(new MaterialStack(MaterialDictionary.dict["molybdenum"], 1), new MaterialStack(MaterialDictionary.dict["sulfur"], 2)), "DUST", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0x191919, IconTransformator.UV.METALLIC));
MaterialDictionary.registerMaterial(new Material("nether_quartz", of(), "GEM", STD_SOLID | NO_SMELTING | CRYSTALLISABLE | GENERATE_ORE | EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES, 2, 19200, 6, 6, 70, 300, 0xE6D2D2, IconTransformator.UV.QUARTZ));
MaterialDictionary.registerMaterial(new Material("nether_star", of(), "GEM", STD_SOLID | GENERATE_LENSE | NO_SMASHING | NO_SMELTING, 2, 19200, 6, 6, 70, 300, 0xFFFFFF, IconTransformator.UV.NETHERSTAR));
MaterialDictionary.registerMaterial(new Material("pentlandite", of(new MaterialStack(MaterialDictionary.dict["nickel"], 9), new MaterialStack(MaterialDictionary.dict["sulfur"], 8)), "DUST", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0xFFFF00, IconTransformator.UV.DULL));
MaterialDictionary.registerMaterial(new Material("phosphate", of(new MaterialStack(MaterialDictionary.dict["phosphorus"], 1), new MaterialStack(MaterialDictionary.dict["oxygen"], 4)),  "DUST", GENERATE_ORE | NO_SMASHING | NO_SMELTING | FLAMMABLE | EXPLOSIVE, 2, 19200, 6, 6, 70, 300, 0xA59605, IconTransformator.UV.DULL));
MaterialDictionary.registerMaterial(new Material("powellite",  of(new MaterialStack(MaterialDictionary.dict["calcium"], 1), new MaterialStack(MaterialDictionary.dict["molybdenum"], 1), new MaterialStack(MaterialDictionary.dict["oxygen"], 4)), "DUST", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0xFFFF00, IconTransformator.UV.DULL));
MaterialDictionary.registerMaterial(new Material("pyrite", of(new MaterialStack(MaterialDictionary.dict["iron"], 1), new MaterialStack(MaterialDictionary.dict["sulfur"], 2)), "DUST", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0x967828, IconTransformator.UV.ROUGH));
MaterialDictionary.registerMaterial(new Material("pyrochlore", of(new MaterialStack(MaterialDictionary.dict["calcium"], 2), new MaterialStack(MaterialDictionary.dict["niobium"], 2), new MaterialStack(MaterialDictionary.dict["oxygen"], 7)), "DUST", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0x783264, IconTransformator.UV.METALLIC));
MaterialDictionary.registerMaterial(new Material("pyrolusite", of(new MaterialStack(MaterialDictionary.dict["manganese"], 1), new MaterialStack(MaterialDictionary.dict["oxygen"], 2)), "DUST", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0x9696AA, IconTransformator.UV.DULL));
MaterialDictionary.registerMaterial(new Material("pyrope", of(new MaterialStack(MaterialDictionary.dict["aluminium"], 2), new MaterialStack(MaterialDictionary.dict["magnesium"], 3), new MaterialStack(MaterialDictionary.dict["silicon"], 3), new MaterialStack(MaterialDictionary.dict["oxygen"], 12)), "DUST", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0x783264, IconTransformator.UV.METALLIC));
MaterialDictionary.registerMaterial(new Material("salt",  of(new MaterialStack(MaterialDictionary.dict["sodium"], 1), new MaterialStack(MaterialDictionary.dict["chlorine"], 1)), "DUST", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0xFFFFFF, IconTransformator.UV.FINE));
MaterialDictionary.registerMaterial(new Material("silicon_dioxide", of(new MaterialStack(MaterialDictionary.dict["silicon"], 1), new MaterialStack(MaterialDictionary.dict["oxygen"], 2)), "DUST", NO_SMASHING | NO_SMELTING | CRYSTALLISABLE, 2, 25600, 6, 6, 70, 300, 0x9C7CA0, IconTransformator.UV.DULL));
MaterialDictionary.registerMaterial(new Material("soapstone", of(new MaterialStack(MaterialDictionary.dict["magnesium"], 3), new MaterialStack(MaterialDictionary.dict["silicon"], 4), new MaterialStack(MaterialDictionary.dict["hydrogen"], 2), new MaterialStack(MaterialDictionary.dict["oxygen"], 12)), "DUST", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0x5F915F, IconTransformator.UV.DULL));
MaterialDictionary.registerMaterial(new Material("spessartine", of(new MaterialStack(MaterialDictionary.dict["aluminium"], 2), new MaterialStack(MaterialDictionary.dict["manganese"], 3), new MaterialStack(MaterialDictionary.dict["silicon"], 3), new MaterialStack(MaterialDictionary.dict["oxygen"], 12)), "DUST", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0xFF6464, IconTransformator.UV.DULL));
MaterialDictionary.registerMaterial(new Material("spodumene", of(new MaterialStack(MaterialDictionary.dict["lithium"], 1), new MaterialStack(MaterialDictionary.dict["aluminium"], 1), new MaterialStack(MaterialDictionary.dict["silicon"], 2), new MaterialStack(MaterialDictionary.dict["oxygen"], 6)), "DUST", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0xBEAAAA, IconTransformator.UV.DULL));
MaterialDictionary.registerMaterial(new Material("rare_earth", of(), "DUST", 0, 2, 19200, 6, 6, 70, 300, 0x808064, IconTransformator.UV.ROUGH));
MaterialDictionary.registerMaterial(new Material("rock_salt",  of(new MaterialStack(MaterialDictionary.dict["potassium"], 1), new MaterialStack(MaterialDictionary.dict["chlorine"], 1)), "DUST", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0xF0C8C8, IconTransformator.UV.FINE));
MaterialDictionary.registerMaterial(new Material("ruby", of(new MaterialStack(MaterialDictionary.dict["chrome"], 1), new MaterialStack(MaterialDictionary.dict["aluminium"], 2), new MaterialStack(MaterialDictionary.dict["oxygen"], 3)), "GEM", STD_GEM | NO_SMASHING | NO_SMELTING | HIGH_SIFTER_OUTPUT, 2, 25600, 6, 6, 70, 300, 0xBD4949, IconTransformator.UV.RUBY));
MaterialDictionary.registerMaterial(new Material("fools_ruby", of(new MaterialStack(MaterialDictionary.dict["magnesium"], 1), new MaterialStack(MaterialDictionary.dict["aluminium"], 2), new MaterialStack(MaterialDictionary.dict["oxygen"], 4)), "GEM", STD_GEM | NO_SMASHING | NO_SMELTING | HIGH_SIFTER_OUTPUT, 2, 25600, 6, 6, 70, 300, 0xBD4949, IconTransformator.UV.RUBY));
MaterialDictionary.registerMaterial(new Material("rutile", of(new MaterialStack(MaterialDictionary.dict["titanium"], 1), new MaterialStack(MaterialDictionary.dict["oxygen"], 2)), "GEM",  STD_GEM | DISABLE_DECOMPOSITION, 2, 25600, 6, 6, 70, 300, 0xD40D5C, IconTransformator.UV.GEM_HORIZONTAL));
MaterialDictionary.registerMaterial(new Material("sapphire", of(new MaterialStack(MaterialDictionary.dict["aluminium"], 2), new MaterialStack(MaterialDictionary.dict["oxygen"], 3)), "GEM", STD_GEM | NO_SMASHING | NO_SMELTING | HIGH_SIFTER_OUTPUT, 2, 25600, 6, 7, 0, 0, 0x6464C8, IconTransformator.UV.GEM_HORIZONTAL));
MaterialDictionary.registerMaterial(new Material("sodalite", of(new MaterialStack(MaterialDictionary.dict["aluminium"], 3), new MaterialStack(MaterialDictionary.dict["silicon"], 3), new MaterialStack(MaterialDictionary.dict["sodium"], 4), new MaterialStack(MaterialDictionary.dict["chlorine"], 1)), "GEM", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0x1414FF, IconTransformator.UV.LAPIS));
MaterialDictionary.registerMaterial(new Material("tanzanite", of(new MaterialStack(MaterialDictionary.dict["calcium"], 2), new MaterialStack(MaterialDictionary.dict["aluminium"], 3), new MaterialStack(MaterialDictionary.dict["silicon"], 3), new MaterialStack(MaterialDictionary.dict["hydrogen"], 1), new MaterialStack(MaterialDictionary.dict["oxygen"], 13)), "GEM", EXT_METAL | GENERATE_ORE | NO_SMASHING | NO_SMELTING | HIGH_SIFTER_OUTPUT, 2, 25600, 6, 6, 70, 300, 0x4000C8, IconTransformator.UV.GEM_VERTICAL));
MaterialDictionary.registerMaterial(new Material("topaz", of(new MaterialStack(MaterialDictionary.dict["aluminium"], 2), new MaterialStack(MaterialDictionary.dict["silicon"], 1), new MaterialStack(MaterialDictionary.dict["fluorine"], 2), new MaterialStack(MaterialDictionary.dict["hydrogen"], 2), new MaterialStack(MaterialDictionary.dict["oxygen"], 6)), "GEM", STD_GEM | NO_SMASHING | NO_SMELTING | HIGH_SIFTER_OUTPUT, 3, 19200, 6, 6, 70, 300, 0xFF8000, IconTransformator.UV.GEM_HORIZONTAL));
MaterialDictionary.registerMaterial(new Material("steel", of(new MaterialStack(MaterialDictionary.dict["iron"], 1)), "INGOT", EXT2_METAL | MORTAR_GRINDABLE | GENERATE_RING | GENERATE_ROTOR | GENERATE_SMALL_GEAR | GENERATE_DENSE | DISABLE_DECOMPOSITION | GENERATE_FRAME | GENERATE_LONG_ROD, 2, 51200, 6, 6, 70, 300, 0x505050, IconTransformator.UV.METALLIC));
MaterialDictionary.registerMaterial(new Material("stibnite", of(new MaterialStack(MaterialDictionary.dict["antimony"], 2), new MaterialStack(MaterialDictionary.dict["sulfur"], 3)), "DUST", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0x464646, IconTransformator.UV.METALLIC));
MaterialDictionary.registerMaterial(new Material("scheelite", of(new MaterialStack(MaterialDictionary.dict["tungsten"], 1), new MaterialStack(MaterialDictionary.dict["calcium"], 2), new MaterialStack(MaterialDictionary.dict["oxygen"], 4)), "DUST", GENERATE_ORE, 3, 19200, 6, 6, 70, 300, 0xC88C14, IconTransformator.UV.DULL));
MaterialDictionary.registerMaterial(new Material("talc", of(new MaterialStack(MaterialDictionary.dict["magnesium"], 3), new MaterialStack(MaterialDictionary.dict["silicon"], 4), new MaterialStack(MaterialDictionary.dict["hydrogen"],2), new MaterialStack(MaterialDictionary.dict["oxygen"], 12)), "DUST", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0x5AB45A, IconTransformator.UV.DULL));
MaterialDictionary.registerMaterial(new Material("tantalite", of(new MaterialStack(MaterialDictionary.dict["manganese"], 1), new MaterialStack(MaterialDictionary.dict["tantalum"], 2), new MaterialStack(MaterialDictionary.dict["oxygen"], 6)), "DUST", GENERATE_ORE, 3, 19200, 6, 6, 70, 300, 0x915028, IconTransformator.UV.METALLIC));
MaterialDictionary.registerMaterial(new Material("tungstate", of(new MaterialStack(MaterialDictionary.dict["tungsten"], 1), new MaterialStack(MaterialDictionary.dict["lithium"], 2), new MaterialStack(MaterialDictionary.dict["oxygen"], 4)), "DUST", GENERATE_ORE, 3, 19200, 6, 6, 70, 300, 0x373223, IconTransformator.UV.DULL));
MaterialDictionary.registerMaterial(new Material("tetrahedrite", of(new MaterialStack(MaterialDictionary.dict["copper"], 3), new MaterialStack(MaterialDictionary.dict["antimony"], 1), new MaterialStack(MaterialDictionary.dict["sulfur"], 3), new MaterialStack(MaterialDictionary.dict["iron"], 1)), "DUST", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0xC82000, IconTransformator.UV.DULL));
MaterialDictionary.registerMaterial(new Material("wroughtiron", of(new MaterialStack(MaterialDictionary.dict["iron"], 1)), "INGOT", EXT2_METAL | MORTAR_GRINDABLE | GENERATE_RING | GENERATE_LONG_ROD | DISABLE_DECOMPOSITION, 2, 38400, 6, 6, 70, 300, 0xC8B4B4, IconTransformator.UV.METALLIC));
MaterialDictionary.registerMaterial(new Material("wulfenite", of(new MaterialStack(MaterialDictionary.dict["lead"], 1), new MaterialStack(MaterialDictionary.dict["molybdenum"], 1), new MaterialStack(MaterialDictionary.dict["oxygen"], 4)), "DUST", GENERATE_ORE, 3, 19200, 6, 6, 70, 300, 0xFF8000, IconTransformator.UV.DULL));
MaterialDictionary.registerMaterial(new Material("water", of(new MaterialStack(MaterialDictionary.dict["hydrogen"], 2), new MaterialStack(MaterialDictionary.dict["oxygen"], 1)), "FLUID", NO_RECYCLING | DISABLE_DECOMPOSITION, 3, 19200, 6, 6, 70, 300, 0xFF8000, IconTransformator.UV.FLUID));
MaterialDictionary.registerMaterial(new Material("yellow_limonite", of(new MaterialStack(MaterialDictionary.dict["iron"], 1), new MaterialStack(MaterialDictionary.dict["hydrogen"], 1), new MaterialStack(MaterialDictionary.dict["oxygen"], 2)), "DUST", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0xC8C800, IconTransformator.UV.METALLIC));
MaterialDictionary.registerMaterial(new Material("uraninite", of(new MaterialStack(MaterialDictionary.dict["uranium"], 1), new MaterialStack(MaterialDictionary.dict["oxygen"], 2)), "DUST", GENERATE_ORE, 3, 19200, 6, 6, 70, 300, 0x232323, IconTransformator.UV.METALLIC));
MaterialDictionary.registerMaterial(new Material("uvarovite", of(new MaterialStack(MaterialDictionary.dict["calcium"], 3), new MaterialStack(MaterialDictionary.dict["chrome"], 2), new MaterialStack(MaterialDictionary.dict["silicon"], 3), new MaterialStack(MaterialDictionary.dict["oxygen"], 12)), "DUST", 0, 3, 19200, 6, 6, 70, 300, 0xB4FFB4, IconTransformator.UV.GEM_VERTICAL));

MaterialDictionary.registerMaterial(new Material("andesite", of(), "DUST", NO_SMASHING, 2, 19200, 6, 6, 70, 300, 0xC8C800, IconTransformator.UV.ROUGH));
MaterialDictionary.registerMaterial(new Material("basalt", of(), "DUST", NO_SMASHING, 2, 19200, 6, 6, 70, 300, 0xC8C800, IconTransformator.UV.ROUGH));
MaterialDictionary.registerMaterial(new Material("black_granite", of(), "DUST", NO_SMASHING, 2, 19200, 6, 6, 70, 300, 0xC8C800, IconTransformator.UV.ROUGH));
MaterialDictionary.registerMaterial(new Material("diorite", of(), "DUST", NO_SMASHING, 2, 19200, 6, 6, 70, 300, 0xC8C800, IconTransformator.UV.ROUGH));
MaterialDictionary.registerMaterial(new Material("endstone", of(), "DUST", NO_SMASHING, 2, 19200, 6, 6, 70, 300, 0xC8C800, IconTransformator.UV.DULL));
MaterialDictionary.registerMaterial(new Material("granite", of(), "DUST", NO_SMASHING, 2, 19200, 6, 6, 70, 300, 0xC8C800, IconTransformator.UV.ROUGH));
MaterialDictionary.registerMaterial(new Material("gravel", of(), "DUST", NO_SMASHING, 2, 19200, 6, 6, 70, 300, 0xC8C800, IconTransformator.UV.METALLIC));
MaterialDictionary.registerMaterial(new Material("marble", of(), "DUST", NO_SMASHING, 2, 19200, 6, 6, 70, 300, 0xC8C800, IconTransformator.UV.FINE));
MaterialDictionary.registerMaterial(new Material("netherrack", of(), "DUST", NO_SMASHING, 3, 19200, 6, 6, 70, 300, 0x232323, IconTransformator.UV.ROUGH));
MaterialDictionary.registerMaterial(new Material("sandstone", of(), "DUST", NO_SMASHING, 2, 19200, 6, 6, 70, 300, 0xC8C800, IconTransformator.UV.ROUGH));
MaterialDictionary.registerMaterial(new Material("stone", of(), "DUST", MORTAR_GRINDABLE | GENERATE_GEAR | GENERATE_PLATE | NO_SMASHING | NO_RECYCLING, 3, 19200, 6, 6, 70, 300, 0xB4FFB4, IconTransformator.UV.ROUGH));
MaterialDictionary.registerMaterial(new Material("red_granite", of(), "DUST", NO_SMASHING, 2, 19200, 6, 6, 70, 300, 0xC8C800, IconTransformator.UV.ROUGH));
MaterialDictionary.registerMaterial(new Material("red_sandstone", of(), "DUST", NO_SMASHING, 2, 19200, 6, 6, 70, 300, 0xC8C800, IconTransformator.UV.ROUGH));
MaterialDictionary.registerMaterial(new Material("red_granite", of(), "DUST", NO_SMASHING, 2, 19200, 6, 6, 70, 300, 0xC8C800, IconTransformator.UV.ROUGH));
MaterialDictionary.registerMaterial(new Material("red_sandstone", of(), "DUST", NO_SMASHING, 2, 19200, 6, 6, 70, 300, 0xC8C800, IconTransformator.UV.ROUGH));


MaterialDictionary.registerMaterial(new Material("lava", of(), "FLUID", 0, 2, 19200, 6, 6, 70, 300, 0xC8C800, IconTransformator.UV.FLUID));
MaterialDictionary.registerMaterial(new Material("clay", of(new MaterialStack(MaterialDictionary.dict["sodium"], 2), new MaterialStack(MaterialDictionary.dict["lithium"], 1), new MaterialStack(MaterialDictionary.dict["aluminium"], 2), new MaterialStack(MaterialDictionary.dict["silicon"], 2), new MaterialStack(MaterialDictionary.dict["water"], 6)), "DUST", MORTAR_GRINDABLE, 2, 19200, 6, 6, 70, 300, 0xC8C800, IconTransformator.UV.ROUGH));
MaterialDictionary.registerMaterial(new Material("charcoal", of(new MaterialStack(MaterialDictionary.dict["carbon"], 1)), "GEM", FLAMMABLE | NO_SMELTING | NO_SMASHING | MORTAR_GRINDABLE, 2, 19200, 6, 6, 70, 300, 0xC8C800, IconTransformator.UV.LIGNITE));
MaterialDictionary.registerMaterial(new Material("glass", of(new MaterialStack(MaterialDictionary.dict["silicon_dioxide"], 1)), "GEM", GENERATE_PLATE | GENERATE_LENSE | NO_SMASHING | NO_RECYCLING | SMELT_INTO_FLUID | EXCLUDE_BLOCK_CRAFTING_RECIPES, 2, 19200, 6, 6, 70, 300, 0xC8C800, IconTransformator.UV.GLASS));
MaterialDictionary.registerMaterial(new Material("wheat", of(), "DUST", 0, 2, 19200, 6, 6, 70, 300, 0xC8C800, IconTransformator.UV.FINE));
MaterialDictionary.registerMaterial(new Material("brick", of(new MaterialStack(MaterialDictionary.dict["clay"], 1)), "DUST", EXCLUDE_BLOCK_CRAFTING_RECIPES | DECOMPOSITION_BY_CENTRIFUGING, 2, 19200, 6, 6, 70, 300, 0xC8C800, IconTransformator.UV.GLASS));
MaterialDictionary.registerMaterial(new Material("steam", of(new MaterialStack(MaterialDictionary.dict["hydrogen"], 2), new MaterialStack(MaterialDictionary.dict["oxygen"], 1)), "FLUID", NO_RECYCLING | GENERATE_FLUID_BLOCK | DISABLE_DECOMPOSITION, 2, 19200, 6, 6, 70, 300, 0xC8C800, IconTransformator.UV.GAS));




MaterialDictionary.registerMaterial(new Material("amethyst", of(new MaterialStack(MaterialDictionary.dict["silicon_dioxide"], 4), new MaterialStack(MaterialDictionary.dict["iron"], 1)), "GEM", STD_GEM | NO_SMASHING | NO_SMELTING | HIGH_SIFTER_OUTPUT, 3, 19200, 6, 6, 70, 300, 0xD232D2, IconTransformator.UV.FLINT));
MaterialDictionary.registerMaterial(new Material("apatite", of(new MaterialStack(MaterialDictionary.dict["calcium"], 5), new MaterialStack(MaterialDictionary.dict["phosphate"], 3), new MaterialStack(MaterialDictionary.dict["chlorine"], 1)), "GEM", GENERATE_ORE | NO_SMASHING | NO_SMELTING | CRYSTALLISABLE, 2, 25600, 6, 6, 70, 300, 0xC8C8FF, IconTransformator.UV.DIAMOND));
MaterialDictionary.registerMaterial(new Material("bauxite", of(new MaterialStack(MaterialDictionary.dict["rutile"], 2), new MaterialStack(MaterialDictionary.dict["aluminium"], 16), new MaterialStack(MaterialDictionary.dict["hydrogen"], 10), new MaterialStack(MaterialDictionary.dict["oxygen"], 11)), "DUST", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0xC86400, IconTransformator.UV.DULL));
MaterialDictionary.registerMaterial(new Material("bentonite", of(new MaterialStack(MaterialDictionary.dict["sodium"], 1), new MaterialStack(MaterialDictionary.dict["magnesium"], 6), new MaterialStack(MaterialDictionary.dict["silicon"], 12), new MaterialStack(MaterialDictionary.dict["hydrogen"], 4), new MaterialStack(MaterialDictionary.dict["water"], 5), new MaterialStack(MaterialDictionary.dict["oxygen"], 36)), "DUST", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0xF5D7D2, IconTransformator.UV.ROUGH));
MaterialDictionary.registerMaterial(new Material("blaze", of(new MaterialStack(MaterialDictionary.dict["dark_ash"], 1), new MaterialStack(MaterialDictionary.dict["sulfur"], 1)), "DUST", NO_SMELTING | SMELT_INTO_FLUID | MORTAR_GRINDABLE | BURNING, 2, 19200, 6, 6, 70, 300, 0xFFC800, IconTransformator.UV.DULL));
MaterialDictionary.registerMaterial(new Material("ender_eye", of(new MaterialStack(MaterialDictionary.dict["ender_pearl"], 1), new MaterialStack(MaterialDictionary.dict["blaze"], 1)), "GEM", GENERATE_PLATE | GENERATE_LENSE | NO_SMASHING | NO_SMELTING, 0, 25600, 6, 6, 70, 300, 0x50FF50, IconTransformator.UV.GEM_VERTICAL));
MaterialDictionary.registerMaterial(new Material("monazite", of(new MaterialStack(MaterialDictionary.dict["rare_earth"], 1), new MaterialStack(MaterialDictionary.dict["phosphate"], 1)), "GEM", GENERATE_ORE | NO_SMASHING | NO_SMELTING | CRYSTALLISABLE, 2, 19200, 6, 6, 70, 300, 0x324632, IconTransformator.UV.DIAMOND)); // ? - lantanoids rateearh
MaterialDictionary.registerMaterial(new Material("olivine", of(new MaterialStack(MaterialDictionary.dict["magnesium"], 2), new MaterialStack(MaterialDictionary.dict["iron"], 1), new MaterialStack(MaterialDictionary.dict["silicon_dioxide"], 2)), "GEM", STD_GEM | NO_SMASHING | NO_SMELTING | HIGH_SIFTER_OUTPUT, 2, 25600, 6, 6, 70, 300, 0x66FF66, IconTransformator.UV.RUBY));
MaterialDictionary.registerMaterial(new Material("opal", of(new MaterialStack(MaterialDictionary.dict["silicon_dioxide"], 1)), "GEM", STD_GEM | NO_SMASHING | NO_SMELTING | HIGH_SIFTER_OUTPUT, 2, 19200, 6, 6, 70, 300, 0x0000FF, IconTransformator.UV.OPAL));
MaterialDictionary.registerMaterial(new Material("lapis",  of(new MaterialStack(MaterialDictionary.dict["lazurite"], 12), new MaterialStack(MaterialDictionary.dict["sodalite"], 2), new MaterialStack(MaterialDictionary.dict["pyrite"], 1), new MaterialStack(MaterialDictionary.dict["calcite"], 1)), "GEM", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0x4646DC, IconTransformator.UV.LAPIS));
MaterialDictionary.registerMaterial(new Material("lignite", of(new MaterialStack(MaterialDictionary.dict["carbon"], 2), new MaterialStack(MaterialDictionary.dict["water"], 4), new MaterialStack(MaterialDictionary.dict["dark_ash"], 1)), "GEM", GENERATE_ORE | FLAMMABLE | NO_SMELTING | NO_SMASHING | MORTAR_GRINDABLE, 0, 19200, 6, 6, 70, 300, 0x644646, IconTransformator.UV.LIGNITE));
MaterialDictionary.registerMaterial(new Material("pitchblende", of(new MaterialStack(MaterialDictionary.dict["uraninite"], 3), new MaterialStack(MaterialDictionary.dict["thorium"], 1), new MaterialStack(MaterialDictionary.dict["lead"], 1)), "DUST", GENERATE_ORE, 3, 19200, 6, 6, 70, 300, 0xC8D200, IconTransformator.UV.DULL));


MaterialDictionary.registerMaterial(new Material("red_garnet", of(new MaterialStack(MaterialDictionary.dict["pyrope"], 3), new MaterialStack(MaterialDictionary.dict["almandine"], 5), new MaterialStack(MaterialDictionary.dict["spessartine"], 8)), "GEM", STD_SOLID | GENERATE_LENSE | NO_SMASHING | NO_SMELTING | HIGH_SIFTER_OUTPUT | GENERATE_ORE, 2, 25600, 6, 6, 70, 300, 0xC85050, IconTransformator.UV.RUBY));
MaterialDictionary.registerMaterial(new Material("redstone", of(new MaterialStack(MaterialDictionary.dict["silicon"], 1), new MaterialStack(MaterialDictionary.dict["pyrite"], 5), new MaterialStack(MaterialDictionary.dict["ruby"], 1), new MaterialStack(MaterialDictionary.dict["mercury"], 3)), "DUST", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0xC80000, IconTransformator.UV.ROUGH));

MaterialDictionary.registerMaterial(new Material("yellow_garnet", of(new MaterialStack(MaterialDictionary.dict["andradite"], 5), new MaterialStack(MaterialDictionary.dict["grossular"], 8), new MaterialStack(MaterialDictionary.dict["uvarovite"], 3)), "GEM", STD_SOLID | GENERATE_LENSE | NO_SMASHING | NO_SMELTING | HIGH_SIFTER_OUTPUT | GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0xC8C850, IconTransformator.UV.RUBY));
MaterialDictionary.registerMaterial(new Material("flint",  of(new MaterialStack(MaterialDictionary.dict["silicon_dioxide"], 1)), "GEM", NO_SMASHING | MORTAR_GRINDABLE, 1, 19200, 6, 6, 70, 300, 0x001E00, IconTransformator.UV.FLINT));
MaterialDictionary.registerMaterial(new Material("vanadium_magnetite",  of(new MaterialStack(MaterialDictionary.dict["magnetite"], 1), new MaterialStack(MaterialDictionary.dict["vanadium"], 1)), "DUST", GENERATE_ORE, 2, 19200, 6, 6, 70, 300, 0x23233C, IconTransformator.UV.METALLIC));




MaterialDictionary.registerMaterial(new Material("red_alloy", of(new MaterialStack(MaterialDictionary.dict["copper"], 1), new MaterialStack(MaterialDictionary.dict["redstone"], 4)), "INGOT", GENERATE_PLATE | GENERATE_FINE_WIRE, 2, 38400, 6, 6, 70, 300, IconTransformator.UV.DULL));

MaterialDictionary.addMaterials();
//MaterialDictionary.registerMaterial(new Material("amber", "Al2O3", "gem", "", 2, 19200, 6, 6, 70, 300, 0x0000FF, IconTransformator.UV.RUBY));
//MaterialDictionary.registerMaterial(new Material("fake_ruby", "Al2O3", "gem", "ored", 2, 25600, 6, 6, 70, 300, 0xBD4949, IconTransformator.UV.SHINY));
//MaterialDictionary.registerMaterial(new Material("pyrochlore", "Al2O3", "DUST", GENERATE_ORE, 0, 19200, 6, 6, 70, 300, 0xE6D2D2, IconTransformator.UV.METALLIC));


invertedIDs.invertIDs();
MaterialDictionary.addToCreative();

OreDictionary.registerChangeableBlock({id: 1, data: 0, texture: "stone"});
OreDictionary.registerChangeableBlock({id: 1, data: 1, texture: "granite"});
OreDictionary.registerChangeableBlock({id: 1, data: 3, texture: "diorite"});
OreDictionary.registerChangeableBlock({id: 1, data: 5, texture: "andesite"});
OreDictionary.registerChangeableBlock({id: 13, data: 0, texture: "gravel"});
OreDictionary.registerChangeableBlock({id: 7, data: 0, texture: "bedrock"});
OreDictionary.registerChangeableBlock({id: 87, data: 0, texture: "netherrack"});
OreDictionary.registerChangeableBlock({id: 121, data: 0, texture: "endstone"});
OreDictionary.registerChangeableBlock({id: 24, data: 0, texture: "sandstone"});
OreDictionary.registerChangeableBlock({id: 179, data: 0, texture: "red_sandstone"});
for(let stone in StoneDictionary.stones) {
    Logger.Log(stone, "Pentium");
    OreDictionary.registerChangeableBlock({id: stone, data: 0, texture: StoneDictionary.stones[stone].name});
    Logger.Log(StoneDictionary.stones[stone].name, "Pentium III");
    OreDictionary.registerChangeableBlock({id: stone, data: 8, texture: StoneDictionary.stones[stone].name2});
    Logger.Log(StoneDictionary.stones[stone].name2, "Pentium IV");
}


OreDictionary.registerOre(MaterialDictionary.dict.copper, {level: 1, isgen: true, minimalheight: 60, maximalheight: 120, rarity: 32});
OreDictionary.registerOre(MaterialDictionary.dict.tin, {level: 1, isgen: true, minimalheight: 60, maximalheight: 120, rarity: 32});
OreDictionary.registerOre(MaterialDictionary.dict.iron, {level: 2, isgen: true, minimalheight: 40, maximalheight: 80, rarity: 16});
OreDictionary.registerOre(MaterialDictionary.dict.coal, {level: 1, isgen: true, minimalheight: 60, maximalheight: 100, rarity: 24});
OreDictionary.registerOre(MaterialDictionary.dict.lignite, {level: 0, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.magnetite, {level: 1, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.vanadium_magnetite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.redstone, {level: 2, isgen: true, minimalheight: 5, maximalheight: 20, rarity: 8});
OreDictionary.registerOre(MaterialDictionary.dict.gold, {level: 2, isgen: true, minimalheight: 20, maximalheight: 40, rarity: 8});
OreDictionary.registerOre(MaterialDictionary.dict.graphite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.diamond, {level: 3, isgen: true, minimalheight: 5, maximalheight: 10, rarity: 2});
OreDictionary.registerOre(MaterialDictionary.dict.bismuth, {level: 1, isgen: true, minimalheight: 80, maximalheight: 120, rarity: 8});
OreDictionary.registerOre(MaterialDictionary.dict.lead, {level: 1, isgen: true, minimalheight: 40, maximalheight: 80, rarity: 16});
OreDictionary.registerOre(MaterialDictionary.dict.zinc, {level: 1, isgen: true, minimalheight: 30, maximalheight: 60, rarity: 12});
OreDictionary.registerOre(MaterialDictionary.dict.silver, {level: 2, isgen: true, minimalheight: 20, maximalheight: 40, rarity: 8});
OreDictionary.registerOre(MaterialDictionary.dict.nickel, {level: 2, isgen: true, minimalheight: 20, maximalheight: 40, rarity: 8});
OreDictionary.registerOre(MaterialDictionary.dict.lapis, {level: 2, isgen: true, minimalheight: 20, maximalheight: 40, rarity: 4});
OreDictionary.registerOre(MaterialDictionary.dict.emerald, {level: 2, isgen: true, minimalheight: 5, maximalheight: 250, rarity: 1});
OreDictionary.registerOre(MaterialDictionary.dict.ruby, {level: 2, isgen: true, minimalheight: 5, maximalheight: 250, rarity: 1});
OreDictionary.registerOre(MaterialDictionary.dict.sapphire, {level: 2, isgen: true, minimalheight: 5, maximalheight: 250, rarity: 1});
OreDictionary.registerOre(MaterialDictionary.dict.green_sapphire, {level: 2, isgen: true, minimalheight: 5, maximalheight: 250, rarity: 1});
OreDictionary.registerOre(MaterialDictionary.dict.olivine, {level: 2, isgen: true, minimalheight: 5, maximalheight: 250, rarity: 1});
OreDictionary.registerOre(MaterialDictionary.dict.topaz, {level: 3, isgen: true, minimalheight: 5, maximalheight: 250, rarity: 1});
OreDictionary.registerOre(MaterialDictionary.dict.tanzanite, {level: 2, isgen: true, minimalheight: 5, maximalheight: 250, rarity: 1});
OreDictionary.registerOre(MaterialDictionary.dict.amethyst, {level: 3, isgen: true, minimalheight: 5, maximalheight: 250, rarity: 1});
OreDictionary.registerOre(MaterialDictionary.dict.opal, {level: 2, isgen: true, minimalheight: 5, maximalheight: 250, rarity: 1});
OreDictionary.registerOre(MaterialDictionary.dict.blue_topaz, {level: 3, isgen: true, minimalheight: 5, maximalheight: 250, rarity: 1});
OreDictionary.registerOre(MaterialDictionary.dict.amber, {level: 2, isgen: true, minimalheight: 5, maximalheight: 250, rarity: 1});
OreDictionary.registerOre(MaterialDictionary.dict.fools_ruby, {level: 2, isgen: true, minimalheight: 5, maximalheight: 250, rarity: 1});
OreDictionary.registerOre(MaterialDictionary.dict.red_garnet, {level: 2, isgen: true, minimalheight: 5, maximalheight: 250, rarity: 1});
OreDictionary.registerOre(MaterialDictionary.dict.yellow_garnet, {level: 2, isgen: true, minimalheight: 5, maximalheight: 250, rarity: 1});
OreDictionary.registerOre(MaterialDictionary.dict.sulfur, {level: 2, isgen: true, minimalheight: 5, maximalheight: 15, rarity: 8});
OreDictionary.registerOre(MaterialDictionary.dict.brown_limonite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.yellow_limonite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.banded_iron, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.malachite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.cassiterite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.tetrahedrite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.stibnite, {level: 2, sgenn: false});
OreDictionary.registerOre(MaterialDictionary.dict.chalcopyrite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.pyrite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.bauxite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.aluminium, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.ilmenite, {level: 3, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.salt, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.rock_salt, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.lepidolite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.spodumene, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.cinnabar, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.soapstone, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.talc, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.glauconite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.pentlandite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.garnierite, {level: 3, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.cobaltite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.cooperite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.palladium, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.iridium, {level: 3, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.platinum, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.pitchblende, {level: 3, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.uraninite, {level: 3, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.uranium, {level: 3, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.bastnasite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.monazite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.neodymium, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.wulfenite, {level: 3, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.molybdenite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.molybdenum, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.powellite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.scheelite, {level: 3, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.tungstate, {level: 3, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.lithium, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.almandine, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.pyrope, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.grossular, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.spessartine, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.pyrolusite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.tantalite, {level: 3, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.quartzite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.certus_quartz, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.barite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.bentonite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.magnesite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.apatite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.phosphorus, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.pyrochlore, {level: 0, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.galena, {level: 3, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.sodalite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.lazurite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.calcite, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.beryllium, {level: 2, isgen: false});
OreDictionary.registerOre(MaterialDictionary.dict.thorium, {level: 2, isgen: false});
//OreDictionary.addToCreative();

//Logger.Log(Object.keys(OreDictionary.invdata[BlockID.gtblockores0]).length, "sharovar");

/*Item.registerNameOverrideFunction(BlockID["gtblockores" + id], function(item){
  if(item.data == OreDictionary.counter * OreDictionary.stones.length + i) {
    return OreDictionary.ores[i].name + " ore";
  }
});
Item.registerNameOverrideFunction(BlockID["gtblockores" + smallid], function(item){
  if(item.data == OreDictionary.counter * OreDictionary.stones.length + i) {
    return "Small" + OreDictionary.ores[i].name + " ore";
  }
});*/

OreDictionary.registerVein(new OreMixVein("lignite", [0], MaterialDictionary.dict.lignite, MaterialDictionary.dict.lignite, MaterialDictionary.dict.lignite, MaterialDictionary.dict.coal, 50, 130, 160, 8, 32));
for(let i = 0; i < Object.keys(OreDictionary.veins[0]).length; i++) {
  Logger.Log(OreDictionary.veins[0][Object.keys(OreDictionary.veins[0])[i]], Object.keys(OreDictionary.veins[0])[i]);
}
OreDictionary.registerVein(new OreMixVein("coal", [0], MaterialDictionary.dict.coal, MaterialDictionary.dict.coal, MaterialDictionary.dict.coal, MaterialDictionary.dict.lignite, 50, 80, 80, 6, 32));

OreDictionary.registerVein(new OreMixVein( "magnetite",  [0], MaterialDictionary.dict.magnetite, MaterialDictionary.dict.magnetite, MaterialDictionary.dict.iron, MaterialDictionary.dict.vanadium_magnetite, 50, 120, 160, 3, 32));

OreDictionary.registerVein(new OreMixVein("gold", [0], MaterialDictionary.dict.magnetite, MaterialDictionary.dict.magnetite, MaterialDictionary.dict.vanadium_magnetite, MaterialDictionary.dict.gold, 60, 80, 160, 3, 32));

OreDictionary.registerVein(new OreMixVein( "iron", [0], MaterialDictionary.dict.brown_limonite, MaterialDictionary.dict.yellow_limonite, MaterialDictionary.dict.banded_iron, MaterialDictionary.dict.malachite, 10, 40, 120, 4, 24));

OreDictionary.registerVein(new OreMixVein( "cassiterite", [0], MaterialDictionary.dict.tin, MaterialDictionary.dict.tin, MaterialDictionary.dict.cassiterite, MaterialDictionary.dict.tin, 40, 120, 50, 5, 24));

OreDictionary.registerVein(new OreMixVein( "tetrahedrite", [0], MaterialDictionary.dict.tetrahedrite, MaterialDictionary.dict.tetrahedrite, MaterialDictionary.dict.copper, MaterialDictionary.dict.stibnite, 80, 120, 70, 4, 24));

OreDictionary.registerVein(new OreMixVein( "copper", [0], MaterialDictionary.dict.chalcopyrite, MaterialDictionary.dict.iron, MaterialDictionary.dict.pyrite, MaterialDictionary.dict.copper, 10, 30, 80, 4, 24));

OreDictionary.registerVein(new OreMixVein( "bauxite", [0], MaterialDictionary.dict.bauxite, MaterialDictionary.dict.bauxite, MaterialDictionary.dict.aluminium, MaterialDictionary.dict.ilmenite, 50, 90, 80, 4, 24));

OreDictionary.registerVein(new OreMixVein( "salts", [0], MaterialDictionary.dict.rock_salt, MaterialDictionary.dict.salt, MaterialDictionary.dict.lepidolite, MaterialDictionary.dict.spodumene, 50, 60, 50, 3, 24));

OreDictionary.registerVein(new OreMixVein( "redstone", [0], MaterialDictionary.dict.redstone, MaterialDictionary.dict.redstone, MaterialDictionary.dict.ruby, MaterialDictionary.dict.cinnabar, 10, 40, 60, 3, 24));

OreDictionary.registerVein(new OreMixVein( "soapstone", [0], MaterialDictionary.dict.soapstone, MaterialDictionary.dict.talc, MaterialDictionary.dict.glauconite, MaterialDictionary.dict.pentlandite, 10, 40, 40, 3, 16));

OreDictionary.registerVein(new OreMixVein( "nickel", [0], MaterialDictionary.dict.garnierite, MaterialDictionary.dict.nickel, MaterialDictionary.dict.cobaltite, "pentlandite", 10, 40, 40, 3, 16));

OreDictionary.registerVein(new OreMixVein( "platinum", [0], MaterialDictionary.dict.cooperite, MaterialDictionary.dict.palladium, MaterialDictionary.dict.platinum, MaterialDictionary.dict.iridium, 40, 50, 5, 3, 16));

OreDictionary.registerVein(new OreMixVein("pitchblende", [0], MaterialDictionary.dict.pitchblende, MaterialDictionary.dict.pitchblende, MaterialDictionary.dict.uraninite, MaterialDictionary.dict.uraninite, 10, 40, 40, 3, 16));

OreDictionary.registerVein(new OreMixVein( "uranium", [0], MaterialDictionary.dict.uraninite, MaterialDictionary.dict.uraninite, MaterialDictionary.dict.uranium, MaterialDictionary.dict.uranium, 20, 30, 20, 3, 16));

OreDictionary.registerVein(new OreMixVein( "monazite", [0], MaterialDictionary.dict.bastnasite, MaterialDictionary.dict.bastnasite, MaterialDictionary.dict.monazite, MaterialDictionary.dict.neodymium, 20, 40, 30, 3, 16));

OreDictionary.registerVein(new OreMixVein( "molybdenum", [0], MaterialDictionary.dict.wulfenite, MaterialDictionary.dict.molybdenite, MaterialDictionary.dict.molybdenum, MaterialDictionary.dict.powellite, 20, 50, 5, 3, 16));

OreDictionary.registerVein(new OreMixVein( "tungstate", [0], MaterialDictionary.dict.scheelite, MaterialDictionary.dict.scheelite, MaterialDictionary.dict.tungstate, MaterialDictionary.dict.lithium, 20, 50, 10, 3, 16));

OreDictionary.registerVein(new OreMixVein( "sapphire", [0], MaterialDictionary.dict.almandine, MaterialDictionary.dict.pyrope, MaterialDictionary.dict.sapphire, MaterialDictionary.dict.green_sapphire, 10, 40, 60, 3, 16));

OreDictionary.registerVein(new OreMixVein( "manganese", [0], MaterialDictionary.dict.grossular, MaterialDictionary.dict.spessartine, MaterialDictionary.dict.pyrolusite, MaterialDictionary.dict.tantalite, 20, 30, 20, 3, 16));

OreDictionary.registerVein(new OreMixVein( "quartz", [0], MaterialDictionary.dict.quartzite, MaterialDictionary.dict.barite, MaterialDictionary.dict.certus_quartz, MaterialDictionary.dict.certus_quartz, 40, 80, 60, 3, 16));

OreDictionary.registerVein(new OreMixVein( "diamond", [0], MaterialDictionary.dict.graphite, MaterialDictionary.dict.graphite, MaterialDictionary.dict.diamond, MaterialDictionary.dict.coal, 5, 20, 40, 2, 16));

OreDictionary.registerVein(new OreMixVein( "olivine", [0], MaterialDictionary.dict.bentonite, MaterialDictionary.dict.magnesite, MaterialDictionary.dict.olivine, MaterialDictionary.dict.glauconite, 10, 40, 60, 3, 16));

OreDictionary.registerVein(new OreMixVein( "apatite", [0], MaterialDictionary.dict.apatite, MaterialDictionary.dict.apatite, MaterialDictionary.dict.phosphorus, MaterialDictionary.dict.pyrochlore, 40, 60, 60, 3, 16));

OreDictionary.registerVein(new OreMixVein( "galena", [0], MaterialDictionary.dict.galena, MaterialDictionary.dict.galena, MaterialDictionary.dict.silver, MaterialDictionary.dict.lead, 30, 60, 40, 5, 16));

OreDictionary.registerVein(new OreMixVein( "lapis", [0], MaterialDictionary.dict.lazurite, MaterialDictionary.dict.sodalite, MaterialDictionary.dict.lapis, MaterialDictionary.dict.calcite, 20, 50, 40, 5, 16));

OreDictionary.registerVein(new OreMixVein( "beryllium", [0], MaterialDictionary.dict.beryllium, MaterialDictionary.dict.beryllium, MaterialDictionary.dict.emerald, MaterialDictionary.dict.thorium, 5, 30, 30, 3, 16));

ToolDictionary.registerType({name: "hammer", blockTypes: ["stone"], damage: 3, flag: 0});
ToolDictionary.registerType({name: "file", blockTypes: ["stone"], damage: 2, flag: 0});
ToolDictionary.registerType({name: "axe", blockTypes: ["wood"], damage: 3, flag: 0});
ToolDictionary.registerType({name: "hoe", blockTypes: ["stone"], damage: 1, flag: 0});
ToolDictionary.registerType({name: "pickaxe", blockTypes: ["stone"], damage: 2, flag: 0});
ToolDictionary.registerType({name: "shovel", blockTypes: ["dirt"], damage: 2, flag: 0});
ToolDictionary.registerType({name: "sword", blockTypes: ["fibre", "plant"], damage: 3, flag: 0});
ToolDictionary.registerType({name: "mortar", blockTypes: ["fibre", "plant"], damage: 0, flag: 0});
ToolDictionary.registerType({name: "screwdriver", blockTypes: ["stone"], damage: 2, flag: 0});
ToolDictionary.registerType({name: "wirecutter", blockTypes: ["stone"], damage: 3, flag: 0});
ToolDictionary.registerType({name: "wrench", blockTypes: ["stone"], damage: 1, flag: 0});


/*ToolDictionary.registerType("file");
ToolDictionary.registerType("axe", ["wood"]);
ToolDictionary.registerType("hoe");
ToolDictionary.registerType("pickaxe", ["stone"]);
ToolDictionary.registerType("shovel", ["dirt"]);
ToolDictionary.registerType("sword");
ToolDictionary.registerType("mortar", null, ToolDictionary.WHITELIST.MATERIAL([MaterialDictionary.dict["bronze"], MaterialDictionary.dict["iron"], MaterialDictionary.dict["steel"], MaterialDictionary.dict["wroughtiron"]]));
ToolDictionary.registerType("screwdriver");
ToolDictionary.registerType("wirecutter", ["wire"]);
ToolDictionary.registerType("wrench");*/

ToolDictionary.registerMaterial({material: MaterialDictionary.dict["flint"], material2: MaterialDictionary.dict["copper"], durability: 6400, 
    level: 1,
    miningspeed: 2.5,
    attackdamage: 5,
    enchantability: 0, flag: 0});
    ToolDictionary.registerMaterial({material: MaterialDictionary.dict["iron"], material2: MaterialDictionary.dict["copper"], durability: 25600, 
    level: 2,
    miningspeed: 6,
    attackdamage: 6,
    enchantability: 0, flag: 0});
    ToolDictionary.registerMaterial({material: MaterialDictionary.dict["steel"], material2: MaterialDictionary.dict["copper"], durability: 51200, 
    level: 2,
    miningspeed: 6,
    attackdamage: 6,
    enchantability: 0, flag: 0});
    ToolDictionary.registerMaterial({material: MaterialDictionary.dict["bronze"], material2: MaterialDictionary.dict["copper"], durability: 19200, 
    level: 2,
    miningspeed: 6,
    attackdamage: 6,
    enchantability: 0, flag: 0});
    ToolDictionary.registerMaterial({material: MaterialDictionary.dict["wroughtiron"], material2: MaterialDictionary.dict["copper"], durability: 38400, 
    level: 2,
    miningspeed: 6,
    attackdamage: 6,
    enchantability: 0, flag: 0});
    ToolDictionary.registerMaterial({material: MaterialDictionary.dict["diamond"], material2: MaterialDictionary.dict["copper"], durability: 128000, 
    level: 3,
    miningspeed: 8,
    attackdamage: 7,
    enchantability: 0, flag: 0});
    
    
    
/*ToolDictionary.registerMaterial(MaterialDictionary.dict["flint"], "stick");
ToolDictionary.registerMaterial(MaterialDictionary.dict["steel"], "stick");
ToolDictionary.registerMaterial(MaterialDictionary.dict["iron"], "stick");
ToolDictionary.registerMaterial(MaterialDictionary.dict["bronze"], "stick");
ToolDictionary.registerMaterial(MaterialDictionary.dict["wroughtiron"], "stick");
ToolDictionary.registerMaterial(MaterialDictionary.dict["diamond"], "stick");*/
ToolDictionary.addToCreative();

invertedIDs.invertIDs();

let concater = function(formulareal, material) {
    Logger.Log("@sas", material.name);
	if(!material.formula.protons) {
		for(let i in material.formula) {
			concater(formulareal, material.formula[i].material);
			formulareal = formulareal.concat(material.formula[i].count);
		}
	} else if(!material.formula.neutrons) {
		formulareal = formulareal.concat(material.formula.formula);
	} else if(material.formula.neutrons) {
		formula = formulareal.concat(material.formula.formula);
	}
	return formulareal;
}

for(let id in MaterialDictionary.data) {
        //Logger.Log(item.data, "zaer");
        if(invertedIDs.isNumericIDisItemID(id)) {
Item.registerIconOverrideFunction(invertedIDs.itemID[id], function(item){
  Logger.Log(item.data, "zaiier");
  let material = MaterialDictionary.data[item.id][item.data].material;
  Logger.Log(material.name, "er");
 let form = MaterialDictionary.data[item.id][item.data].form;
  
if(form == undefined) return {name: "unknown"};
   if(material == undefined) return {name: "unknown_" + form};
    return {name: material.name + "_" + form};
});
Item.registerNameOverrideFunction(invertedIDs.itemID[id], function(item){
    Logger.Log(item.data, "zaiiper"); 
    let material = MaterialDictionary.data[item.id][item.data].material;
  Logger.Log(material.name, "yer");
  let form = MaterialDictionary.data[item.id][item.data].form;
  
   if(form == undefined) return "unknown";
   if(material == undefined) return "unknown " + form;
	let formulareal = "";
	formulareal = concater(formulareal, material);
   return material.name[0].toUpperCase() + material.name.substring(1) + " " + form + "\n" + formulareal;
});
}}

Item.registerIconOverrideFunction(ItemID.gtmetatool01, function(item){
if(ToolDictionary.getTypeByData(item.data) == null) {
  return "unknown";
}
var w = ToolDictionary.getTypeByData(item.data).name;

  if(item.extra != undefined) {
    if(item.extra.getString("name") != undefined) {
       //if(item.extra.getNumber("damage") < MaterialDictionary.durability & item.extra.getNumber("damage") > MaterialDictionary.durability / 5 * 4)
      //android.view.Bitmap
      
      //if(item.extra.getNumber("damage") < MaterialDictionary.durability / 5 * 4 & item.extra.getNumber("damage") > MaterialDictionary.durability / 5 * 3)
      //android.view.Bitmap
      
      //if(item.extra.getNumber("damage") < MaterialDictionary.durability / 5 * 3 & item.extra.getNumber("damage") > MaterialDictionary.durability / 5 * 2)
      //android.view.Bitmap
      
      //if(item.extra.getNumber("damage") < MaterialDictionary.durability / 5 * 2 & item.extra.getNumber("damage") > MaterialDictionary.durability / 5)
      //android.view.Bitmap
      
      //if(item.extra.getNumber("damage") < MaterialDictionary.durability / 5 & item.extra.getNumber("damage") > 0)
      //android.view.Bitmap
      
return {name: item.extra.getString("name") + "_" + w};
        
      } else {
return {name: "unknown_" + w};
    }
  } else {
    return {name: "unknown_" + w};
  }
});
Item.registerNameOverrideFunction(ItemID.gtmetatool01, function(item) {
  if(ToolDictionary.getTypeByData(item.data) == null) {
    return "unknown";
  }
  if(item.extra != undefined) {
    if(item.extra.getString("name") != undefined) {
      return ToolDictionary.getTypeByData(item.data).name;    
    } else {
return "Unknown " + ToolDictionary.getTypeByData(item.data).name;    
  }
  } else {
    return "Unknown " + ToolDictionary.getTypeByData(item.data).name;  
  }
});

IDRegistry.genItemID("gtdebug");
Item.createItem("gtdebug", "Debug Scanner",  {name: "debug_scanner", meta: 0}, {});
//for debugging
Item.registerUseFunction(ItemID.gtdebug, function (coords, item, block, isExternal) {
  if(TileEntity.isTileEntityBlock(block.id)) {
    if(TileEntity.getTileEntity(coords.x, coords.y, coords.z).data.pipe != null) {
      let type = null;
      if(TileEntity.getTileEntity(coords.x, coords.y, coords.z).data.pipe == true) {
        type = "pipe"
      } else {
        type = "machine"
      }
      Game.message("id:" + block.id + "\n" + "data:" + block.data + "\n" + "GT_Machine" + "\n" + type + "\n temperature: " + TileEntity.getTileEntity(coords.x, coords.y, coords.z).data.temperature + "\n progress: " + TileEntity.getTileEntity(coords.x, coords.y, coords.z).data.progress);
      if(type == "pipe") Game.message("steam: " + TileEntity.getTileEntity(coords.x, coords.y, coords.z).data.amount + "\n type:" + TileEntity.getTileEntity(coords.x, coords.y, coords.z).data.typeLiquid);
      if(type == "machine") Game.message("steam: " + TileEntity.getTileEntity(coords.x, coords.y, coords.z).liquidStorage.getAmount("steam"));
    }
  }
});

var testUiScreen = new UI.Window({
     location: {
          x: 0, 
          y: 0,
          width: UI.getScreenHeight(), 
          height: UI.getScreenHeight(), 
          scrollWidth:UI.getScreenHeight(),
          scrollHeight:UI.getScreenHeight()
     },
     params: {
          // стилизация (изменение стандартных текстур)
     },
     drawing: [/* элементы отрисовки фона */],
     elements: {
    "give": {type: "button", x: 32, y: 32, bitmap: "diamond", bitmap2: "diamond", scale: 2, clicker: {
			onClick: function() {
			  for(let i = 0; i < OreDictionary.countByID; i++) {
          for(let j = 0; j < OreDictionary.stones.length; j++) {
              World.setBlock(coords.x + j, coords.y + i, coords.z, BlockID.gtblockores0, i * OreDictionary.stones.length + j);
          }
        }
     }
}}}});




// file: block/tree.js

var BiomeHelper = {
  TAIGA_BIOMES: [5, 19, 32, 33]
};
TreeDictionary = {
  NARROWED: 1,
  QUAD: 2,
  trees: {},
  data: [],
  lengt: 0,
  registerTree: function (tree) {
    this.trees[tree.name] = tree;
    this.data[this.lengt] =  {name: tree.name, type: "wood"};
    
    var moel = new ICRender.Model();
      moel.addEntry(new BlockRenderer.Model(0, 0, 0, 1, 1, 1, [[tree.name + "_wood", 1], [tree.name + "_wood", 1], [tree.name + "_wood", 0], [tree.name + "_wood", 0], [tree.name + "_wood", 0], [tree.name + "_wood", 0]]));

      BlockRenderer.setStaticICRender(BlockID.gttree, this.lengt, moel);
    
    this.lengt++;
    
    this.data[this.lengt] =  {name: tree.name, type: "leave"};
    
    var model = new ICRender.Model();
      model.addEntry(new BlockRenderer.Model(0, 0, 0, 1, 1, 1, [[tree.name + "_leaves", 0], [tree.name + "_leaves", 0], [tree.name + "_leaves", 0], [tree.name + "_leaves", 0], [tree.name + "_leaves", 0], [tree.name + "_leaves", 0]]));

      BlockRenderer.setStaticICRender(BlockID.gttree, this.lengt, model);
    
    this.lengt++;
    
    this.data[this.lengt] =  {name: tree.name, type: "func_wood"};
    
    var odel = new ICRender.Model();
      odel.addEntry(new BlockRenderer.Model(0, 0, 0, 1, 1, 1, [[tree.name + "_funcwood", 1], [tree.name + "_funcwood", 1], [tree.name + "_funcwood", 0], [tree.name + "_funcwood", 0], [tree.name + "_funcwood", 0], [tree.name + "_funcwood", 0]]));

      BlockRenderer.setStaticICRender(BlockID.gttree, this.lengt, odel);
    
    this.lengt++;
    
    this.data[this.lengt] =  {name: tree.name, type: "sapling"};
    
    var mol = new ICRender.Model();
      mol.addEntry(new BlockRenderer.Model(0, 0, 0, 1, 1, 1, [["rubber_tree_sapling", 0], ["rubber_tree_sapling", 0], ["rubber_tree_sapling", 0], ["rubber_tree_sapling", 0], ["rubber_tree_sapling", 0], ["rubber_tree_sapling", 0]]));

      BlockRenderer.setStaticICRender(BlockID.gttree, this.lengt, mol);
    
    this.lengt++;
    
    this.data[this.lengt] =  {name: tree.name, type: "planks"};
    
    var moele = new ICRender.Model();
      moele.addEntry(new BlockRenderer.Model(0, 0, 0, 1, 1, 1, [["rubbertree_leaves", 0], ["rubbertree_leaves", 0], ["rubberwooe_leaves", 0], ["rubbertree_leaves", 0], ["rubber_tree_leaves", 0], ["rubbertree_leaves", 0]]));

      BlockRenderer.setStaticICRender(BlockID.gttree, this.lengt, moele);
    this.lengt++;
  },
  generateTree: function (x, y, z, random, tree) {
   let data;
    for(let i = 0; i < this.lengt; i++) {
      if(TreeDictionary.data[i].name == tree.name) {
        data = i;
        break;
      }
    }
    
    let height = OreDictionary.randomInInner(random, tree.minimalheight, tree.maximalheight);
    for(let ys = y; ys < y + height; ys++) {
      if(Math.random() > 1 / height) {
        World.setBlock(x, ys, z, BlockID.gttree, data);
      } else {
        World.setBlock(x, ys, z, BlockID.gttree, data + 2);
      }
    }
    let leavesheight = height / tree.shape.minimalleaveheightdevisor;
    if(tree.shape.shape == TreeDictionary.QUAD) {
      for(let yy = y + leavesheight; yy < y + height; yy++) {
        for(let xa = x - tree.width / 2; xa < x + tree.width / 2; xa++) {
          for(let za = z - tree.width / 2; za < z + tree.width / 2; za++) {
            World.setBlock(xx, ys, zz, BlockID.gttree, data + 1);
          }
        }
      }
    } else if(tree.shape.shape == TreeDictionary.NARROWED) {
      for(let yy = y + leavesheight; yy < y + height; yy++) {
        Logger.Log("shifts", leavesheight);
        for(let xa = x - Math.floor(tree.shape.width / 2); xa < x + Math.floor(tree.shape.width / 2) + 1; xa++) {
          for(let za = z - Math.floor(tree.shape.width / 2); za < z + Math.floor(tree.shape.width / 2) + 1; za++) {
            if(yy - y - leavesheight == 1 || yy - y - leavesheight > 1 & xa - x + Math.floor(tree.shape.width / 2) != 1 & za - z + Math.floor(tree.shape.width / 2) != 1 & xa - x + Math.floor(tree.shape.width / 2) != x + Math.floor(tree.shape.width / 2) & za - z + Math.floor(tree.shape.width / 2) != x + Math.floor(tree.shape.width / 2)) {
            World.setBlock(xa, yy, za, BlockID.gttree, data + 1);
            }
          }
        }
      }
    }
  }
};

TreeDictionary.registerTree({
  name: "rubberwood",
  minimalheight: 5,
  maximalheight: 11,
  shape: {
    width: 5,
    minimalleaveheightdevisor: 2,
    shape: TreeDictionary.NARROWED,
    peak: 2
  },
  generation: {
    biomes: BiomeHelper.TAIGA_BIOMES,
    rarity: 0.2,
    count: 1  
  }
});

World.addGenerationCallback("GenerateChunk", function(chunkX, chunkZ, random){
	var biome = World.getBiome((chunkX + 0.5) * 16, (chunkZ + 0.5) * 16);
	for(let biom in TreeDictionary.trees["rubberwood"].generation.biomes) {
  if(biome == biom) {
	if(Math.random() < TreeDictionary.trees["rubberwood"].generation.rarity){
			var coords = GenerationUtils.findSurface(chunkX*16 + random.nextInt(16), 96, chunkZ*16 + random.nextInt(16));
			if(World.getBlockID(coords.x, coords.y, coords.z) == 2){
			  Logger.Log();
				TreeDictionary.generateTree(coords.x, coords.y + 1, coords.z, random, TreeDictionary.trees["rubberwood"])
			}
	}
  }
	}
}, "gt_tree");




// file: ore/ore.js

var isore={};
Saver.addSavesScope("isOreGenerated",
	function read(scope){
		isore = scope;
	},
	
	function save(){
		return isore;
	}
);
Callback.addCallback("GenerateChunkUniversal", function (chunkX, chunkZ, random, dimension) {
  if(!isore[chunkX + "_" + chunkZ]) {
    
  Logger.Log(chunkX + "_" + chunkZ, "zoppo");
  //granites
  let highbl = OreDictionary.findChunkHighSurface(chunkX, chunkZ);

     if(Math.random() < 0.5) {
	let randomStone = random.nextInt(Object.keys(StoneDictionary.stones).length);
	let randomSubStone = random.nextInt(2);
	let coords = GenerationUtils.randomXZ(chunkX, chunkZ);
    	let highest = Math.min(GenerationUtils.findHighSurface(coords.x, coords.z), 120);
    	highest = Math.max(highest, 10);
    	coords = {x: coords.x, y: highest, z: coords.z}
    	StoneDictionary.generateStone(coords, BlockID[Object.keys(StoneDictionary.stones)[randomStone]],  randomSubStone * 8, random);
   }
   
  // ore vein
  //coords of 3x3 chunk grid
  let mixX = Math.floor(chunkX / 3);
  let mixZ = Math.floor(chunkZ / 3);
  if(OreDictionary.grids[mixX + "_" + mixZ] == undefined) {
 OreDictionary.grids[mixX + "_" + mixZ] = {};
if(Math.random() < 0.5) {
    let rand = Math.random();
    let rarity = 0;
for(let i = 0; i < OreDictionary.veins.length; i++) {
    if(!(dimension in OreDictionary.veins[i].dimensions)) continue;
  let prerarity = rarity;
      rarity += OreDictionary.veins[i].rarity / OreDictionary.sumOfRarites;
      if(OreDictionary.isInnerDiapozone(rand, prerarity, rarity)) {
OreDictionary.grids[mixX + "_" + mixZ].vein = OreDictionary.veins[i];
break;
      }
    }
    let isgen = true;
    for(let x = 0; x < 16; x++) {
    for(let z = 0; z < 16; z++) {
      if(OreDictionary.grids[mixX + "_" + mixZ].vein.minimalheight > GenerationUtils.findHighSurface(chunkX * 16 + x, chunkZ * 16 + z)) {
        isgen = false;
        }}}
    OreDictionary.grids[mixX + "_" + mixZ].enabled = isgen;
    let height = OreDictionary.grids[mixX + "_" + mixZ].vein.maximalheight;
    for(let x = 0; x < 16; x++) {
    for(let z = 0; z < 16; z++) {
      if(height > GenerationUtils.findHighSurface(chunkX * 16 + x, chunkZ * 16 + z)) {
        height = GenerationUtils.findHighSurface(chunkX * 16 + x, chunkZ * 16 + z);
        }}}
    
    OreDictionary.grids[mixX + "_" + mixZ].ys = OreDictionary.randomInInner(random, OreDictionary.grids[mixX + "_" + mixZ].vein.minimalheight, height);
}
  }
  
  if(OreDictionary.grids[mixX + "_" + mixZ].enabled) {
  let main = 3;
  let inbetween = 2;
  for(let x = 0; x < 16; x++) {
    for(let y = 0; y < 3; y++) {
      for(let z = 0; z < 16; z++) {
          let tile = World.getBlock(chunkX * 16 + x, OreDictionary.grids[mixX + "_" + mixZ].ys + 2 + y, chunkZ * 16 + z);
        if(OreDictionary.rollPercentage(OreDictionary.grids[mixX + "_" + mixZ].vein.density * 10, random)) {
        if(tile.id + "_" + tile.data in OreDictionary.blocks) {
		if(Math.random < 0.2) {
  			World.setBlock(chunkX * 16 + x, OreDictionary.grids[mixX + "_" + mixZ].ys + 2 + y, chunkZ * 16 + z, OreDictionary.data[OreDictionary.grids[mixX + "_" + mixZ].vein.sporadic.name].id, OreDictionary.blocks[tile.id + "_" + tile.data].number);
		} else {
			World.setBlock(chunkX * 16 + x, OreDictionary.grids[mixX + "_" + mixZ].ys + 2 + y, chunkZ * 16 + z, OreDictionary.data[OreDictionary.grids[mixX + "_" + mixZ].vein.primary.name].id, OreDictionary.blocks[tile.id + "_" + tile.data].number);
	}
	}
}
      }}}
for(let x = 0; x < 16; x++) {
    for(let y = 0; y < 2; y++) {
      for(let z = 0; z < 16; z++) {
          let tile = World.getBlock(chunkX * 16 + x, OreDictionary.grids[mixX + "_" + mixZ].ys + 2 + y, chunkZ * 16 + z);
if(OreDictionary.rollPercentage(OreDictionary.grids[mixX + "_" + mixZ].vein.density * 10, random)) {
       if(tile.id + "_" + tile.data in OreDictionary.blocks) {
  	if(Math.random < 0.2) {
		World.setBlock(chunkX * 16 + x, OreDictionary.grids[mixX + "_" + mixZ].ys + y, chunkZ * 16 + z, OreDictionary.data[OreDictionary.grids[mixX + "_" + mixZ].vein.sporadic.name].id, OreDictionary.blocks[tile.id + "_" + tile.data].number);
	} else {	
		World.setBlock(chunkX * 16 + x, OreDictionary.grids[mixX + "_" + mixZ].ys + y, chunkZ * 16 + z, OreDictionary.data[OreDictionary.grids[mixX + "_" + mixZ].vein.inbetween.name].id, OreDictionary.blocks[tile.id + "_" + tile.data].number);
	}
}}
      }}}
  for(let x = 0; x < 16; x++) {
    for(let y = 0; y < 3; y++) {
      for(let z = 0; z < 16; z++) {
          let tile = World.getBlock(chunkX * 16 + x, OreDictionary.grids[mixX + "_" + mixZ].ys + 2 + y, chunkZ * 16 + z);
if(OreDictionary.rollPercentage(OreDictionary.grids[mixX + "_" + mixZ].vein.density * 10, random)) {
       if(tile.id + "_" + tile.data in OreDictionary.blocks) {
  	if(Math.random < 0.2) {
		World.setBlock(chunkX * 16 + x, OreDictionary.grids[mixX + "_" + mixZ].ys - 3 + y, chunkZ * 16 + z, OreDictionary.data[OreDictionary.grids[mixX + "_" + mixZ].vein.sporadic.name].id, OreDictionary.blocks[tile.id + "_" + tile.data].number);
	} else {
		World.setBlock(chunkX * 16 + x, OreDictionary.grids[mixX + "_" + mixZ].ys - 3 + y, chunkZ * 16 + z, OreDictionary.data[OreDictionary.grids[mixX + "_" + mixZ].vein.secondary.name].id, OreDictionary.blocks[tile.id + "_" + tile.data].number);
	}
}}
      }}}
  }
  
  
  //smallores
  for(let i = 0; i < OreDictionary.ores.length; i++) {
    if(OreDictionary.smallgens[i].isgen & highbl > OreDictionary.smallgens[i].minimalheight) {
      for(let d = 0; d < OreDictionary.smallgens[i].rarity; d++){
let coords;
        if(highbl > OreDictionary.smallgens[i].maximallheight) {
coords = GenerationUtils.randomCoords(chunkX, chunkZ, OreDictionary.smallgens[i].minimalheight, OreDictionary.smallgens[i].maximalheight);
} else {
coords = GenerationUtils.randomCoords(chunkX, chunkZ, OreDictionary.smallgens[i].minimalheight, highbl);
}
        let tile = World.getBlock(coords.x, coords.y, coords.z);
       if(tile.id + "_" + tile.data in OreDictionary.blocks) {
          World.setBlock(coords.x, coords.y, coords.z, OreDictionary.dat[OreDictionary.ores[i].name].id, OreDictionary.blocks[tile.id + "_" + tile.data].number);
        }
        }
    }
  }
  
  isore[chunkX + "_" + chunkZ] = true;
  }
});




// file: machine/particle.js

Particles.registerParticleType({
    texture: "steam",
    size: [1, 1],
    lifetime: [15, 65],
});




// file: machine/pipe.js

PipeDictionary.registerSize({type: "tiny", multiplier: 1});
PipeDictionary.registerSize({type: "small", multiplier: 2});
PipeDictionary.registerSize({type: "normal", multiplier: 4});
PipeDictionary.registerSize({type: "large", multiplier: 8});
PipeDictionary.registerSize({type: "huge", multiplier: 16});

PipeDictionary.registerMaterial(MaterialDictionary.dict["copper"], 10);
PipeDictionary.registerMaterial(MaterialDictionary.dict["bronze"], 20);
PipeDictionary.registerMaterial(MaterialDictionary.dict["steel"], 40);

PipeDictionary.addToCreative();

TileEntity.registerPrototype(BlockID.gtblockpipe, {
    defaultValues: {
         pipe: true,
         typePipe: "",
         sizePipe: 0,
         temperature: 20,
         typeLiquid: null,
         rate: 0,
         limit: 0,
         amount: 0,
         x: 0,
         y: 0,
         z: 0,
         tickEncouter: 0,
    },
    init: function() {
      this.data.typePipe = "copper";
      this.data.sizePipe = 0;
      this.liquidStorage.setLimit("lava", PipeDictionary.materials[this.data.typePipe].rate * PipeDictionary.sizes[this.data.sizePipe]. multiplier);
      this.liquidStorage.setLimit("milk", PipeDictionary.materials[this.data.typePipe].rate * PipeDictionary.sizes[this.data.sizePipe]. multiplier);
       this.liquidStorage.setLimit("water", PipeDictionary.materials[this.data.typePipe].rate * PipeDictionary.sizes[this.data.sizePipe]. multiplier);
       this.liquidStorage.setLimit("steam", PipeDictionary.materials[this.data.typePipe].rate * PipeDictionary.sizes[this.data.sizePipe]. multiplier);
       
       this.data.rate = PipeDictionary.materials[this.data.typePipe].rate * PipeDictionary.sizes[this.data.sizePipe].multiplier;
       this.data.limit = this.data.rate * 20;
    
      Logger.Log(this, "fui");
    this.data.pipeEncounter = 0;
			this.__Nets = {};
			TileEntityRegistry.addMacineAccessAtCoords(this.x, this.y, this.z, this);
			for(let name in this.__Types) {
			  PipeNetBuilder.rebuild();
			}
    },
    tick: function() {
      if(this.data.pipeEncounter == 4) {
			  this.data.pipeEncounter = 0;
			for(let name in this.__Types) {
				if(this.isSource(name)) {
					let net = this.__Nets[name];
					if(net) {
					  let src = net.source;
					  //if(canExtract(side, type)
					  this.Еtick(name, src);
					}
				} else {
				}
			}
			} else {
			  this.data.pipeEncounter++;
			}
    },
    click: function(id, count, data, coords) {},
   returnLiquid: function(x, y, z, type, amount) {
      if(this.data.type == type) {
       return this.liquidStorage.addLiquid(type, amount);
      } else if(this.data.type == "") {
       this.data.type = type;
       
       return this.liquidStorage.addLiquid(type, amount);
      } else {
        return amount;
      }
    },
    requestLiquid: function(x, y, z, type, amount) {
      if(this.data.typeLiquid == type) {
       let tr = this.liquidStorage.getLiquid(type, amount);
       Logger.Log(tr, "мудачки™");
       return tr;
      }
      return 0;
    },
    checkLiquidAmount: function(type, amount) {
      if(this.data.typeLiquid == null) Logger.Log("this liquid 'null' invalid!");
      if(type == null) Logger.Log("this liquid 'null' invalid!");
      if(this.data.typeLiquid != type) Logger.Log("this liquid not exists!");
      if(amount > this.liquidStorage.getAmount(type)) {
       return this.liquidStorage.getAmount(type);
      } else {
        return amount;
      }
    },
    checkLiquid: function(type) {
      if(this.data.typeLiquid == null) Logger.Log("this liquid 'null' invalid!");
      if(type == null) Logger.Log("this liquid 'null' invalid!");
      if(this.data.typeLiquid != type) Logger.Log("this liquid not exists!");
       return this.liquidStorage.getAmount(type);
    },
    checkLiquid: function() {
       return {type: this.data.typeLiquid, amount: this.liquidStorage.getAmount(this.data.typeLiquid)};
    },
    
    
    
   canConnect: function () {
      return true;
   },
   isSource: function() {
       return true; // блок может отдавать энергию
   },
   isGenerator: function() {
       return false; // блок может отдавать энергию
   },
   canReceive: function(side, type) {
       return true;// side != 0 выведет true, если сторона любая, кроме нижней.
   },
   canExtract: function(side, type) {
     /*Logger.Log(this.x, "pei");
     Logger.Log(this.y, "pei");
       Logger.Log(this.z, "extract");
       return side != this.data.sidePrev;*/
       return true;
       // выведет true при подключении блока для выхода энергии с нижней стороны.
   },
   getCapacity: function(){
       return this.data.limit; // установим лимит хранилища энергии в 2 миллиона (2e6 - это способ записи числа 2000000)
   },
   receive: function(type, amount, sidepre) {
     Logger.Log(amount, "zirconocene dichloride");
       amount = Math.min(amount, this.data.rate); // устанавлимаем максимальное количество энергии, которое может принять механизм равным 1000.
       Logger.Log(amount, "tantalocene dichloride");
       let add = Math.min(amount, this.getCapacity() - this.data.amount); // уменьшаем количество энергии, так, чтобы хранилище не переполнялось;
       Logger.Log(this.getCapacity(), "tantalocene diiodide");
       Logger.Log(this.data.amount, "niobocene dichloride");
       Logger.Log(add, "zirconocene difluoride");
       this.data.sidepre = PipeNetBuilder.sideToNeighboring(sidepre);
       this.data.amount += add; // добавляем энергию в хранилище
       Logger.Log(this.data.amount, "zirconocene dibromide");

       if(add > 0 & this.data.type == null) {
         Logger.Log(type, "hexacarbonylmolybdenum");
         this.data.typeLiquid = type;
       } else if (add == 0 & this.data.amount == 0) {
         this.data.typeLiquid = null;
       }
       return add; // и возвращаем сколько забрали энергии
   },
   Еtick: function(type, src){
     Logger.Log(this.data.amount, "manganocene");
       let output = Math.min(this.data.rate, this.data.amount / 2); // определяем, сколько энергии блок может отдать
       Logger.Log(output, "osmoce");
       this.data.amount += src.add(this, output, this.data.typeLiquid, {x: this.x, y: this.y, z: this.z}, this.data.sidepre) - output; // прибавляем к хранилищу количество энергии, которое осталось после отправки пакета, и вычитаем сколько отправляли.
       Logger.Log(this.data.amount, "titanocene dichloride");
       //this.data.sidepre = null;
       /*this.data.x = null;
       this.data.y = null;
       this.data.z = null;*/
        if (this.data.amount == 0) {
         this.data.typeLiquid = null;
       }
   },
});

TileEntity.getPrototype(BlockID.gtblockpipe).__energyLibInit = true;
TileEntity.getPrototype(BlockID.gtblockpipe).__Types = {};
TileEntity.getPrototype(BlockID.gtblockpipe).__Nets = {};

TileEntityRegistry.addEnergyTypeForId(BlockID.gtblockpipe, "liquid");

var id = BlockID.gtblockpipe// id блока провода 
var group = ICRender.getGroup("GTpipe"); // группа блоков 
group.add(id, -1); // добавим сам провод в группу
group.add(BlockID.gtblockmachine, -1);

for(let m = 0; m < Object.keys(PipeDictionary.materials).length; m++) {
    for(let s = 0; s < PipeDictionary.sizes.length; s++) {
      let width = 0.25 + s * 2;
      var model = new ICRender.Model();
      var collmodel = new ICRender.CollisionShape();
      
  model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0)); 
  
  var boxes = [
      {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
      {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]},
      {side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]},
      {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]},
      {side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]},
      {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]}
  ];
  
  for(var i in boxes) {
      var box = boxes[i].box; 
      var side = boxes[i].side;
      model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0))
          .setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false));
  }
      var entry = collmodel.addEntry();
      entry.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2);
      for(var i in boxes) {
      var box = boxes[i].box; 
      var side = boxes[i].side;
      let entri = collmodel.addEntry();
      entri.addBox(box[0], box[1], box[2], box[3], box[4], box[5])
          .setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false));
  }
      BlockRenderer.setCustomCollisionShape(id, m * PipeDictionary.sizes.length + s, collmodel);
      BlockRenderer.setCustomRaycastShape(id, m * PipeDictionary.sizes.length + s, collmodel);
      BlockRenderer.setStaticICRender(id, m * PipeDictionary.sizes.length + s, model);
    }
  }




// file: machine/machine.js

MachineDictionary.registerCasings();
//1234
let bitmap = android.graphics.BitmapFactory.decodeFile(__dir__ + "gui/BronzeAlloySmelterPocket.png");
MachineDictionary.registerSteamMachine({ name: "alloy_smelter", 
type: MachineDictionary.PROCESSING, 
hull: "brick_hull",
tier: [0, 1],
recipes: new RecipeMap(1, 2, 1, 1)
}, {
     standart: {
          header: {
               text: {
                    text: "Alloy Smelter"
               },
               color: android.graphics.Color.rgb(225, 119, 6)
          },
          inventory: {
               standart: true
          },
          background: {
               color: android.graphics.Color.rgb(225, 119, 6)
          },
          minHeight: 600
     },
     params: {
          textures: {
               /*slot: "thaum_slot",
               invSlot: "thaum_inv_slot",
               selection: "thaum_selection",
               closeButton: "thaum_close_button_up",
               closeButton2: "thaum_close_button_down",
               frame: "thaum_frame_default"*/
          }
     },
     drawing: [
         {type: "bitmap", bitmap: "BronzeAlloySmelterPocket", x: 1000 / 2 - bitmap.getWidth(), y: 40, width: bitmap.getWidth() * 3, height: bitmap.getHeight() * 3}
     ],
     elements: {
       "energySlot": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 237, y: 226, size: 54, bitmap: "slot", needClean: true, isTransparentBackground: true},
       "input0": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 102, y: 112, size: 54, bitmap: "slot", needClean: true, isTransparentBackground: true},
       "input1": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 156, y: 
112, size: 54, bitmap: "slot", needClean: true, isTransparentBackground: true},
    "scale": {type: "scale", x: 1000 / 2 - bitmap.getWidth() + 225, y: 112, direction: 0, bitmap: "furnace_process", scale: 2, value: 0},
        "output0": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 318, y: 112, size: 54, bitmap: "slot", needClean: true, isTransparentBackground: true, isValid: function(){return false;}},
     },
});
MachineDictionary.registerSteamMachine({
    name: "furnace",
    type: MachineDictionary.PROCESSING,
    hull: "brick_hull",
    tier: [0, 1],
    recipes: RecipeDictionary.RECIPE_FURNACE_MAP
}, {
     standart: {
          header: {
               text: {
                    text: "Furnace"
               },
               color: android.graphics.Color.rgb(225, 119, 6)
          },
          inventory: {
               standart: true
          },
          background: {
               color: android.graphics.Color.rgb(225, 119, 6)
          },
          minHeight: 600
     },
     params: {
          textures: {
               /*slot: "thaum_slot",
               invSlot: "thaum_inv_slot",
               selection: "thaum_selection",
               closeButton: "thaum_close_button_up",
               closeButton2: "thaum_close_button_down",
               frame: "thaum_frame_default"*/
          }
     },
     drawing: [
         {type: "bitmap", bitmap: "BronzeFurnacePocket", x: 1000 / 2 - bitmap.getWidth(), y: 40, width: bitmap.getWidth() * 3, height: bitmap.getHeight() * 3}
     ],
     elements: {
       "energySlot": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 237, y: 226, size: 54, bitmap: "slot", needClean: true, isTransparentBackground: true},
       "input0": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 156, y: 112, size: 54, bitmap: "slot", needClean: true, isTransparentBackground: true},
    "scale": {type: "scale", x: 1000 / 2 - bitmap.getWidth() + 225, y: 112, direction: 0, bitmap: "furnace_process", scale: 2, value: 0},
        "output0": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 318, y: 112, size: 54, bitmap: "slot", needClean: true, isTransparentBackground: true, isValid: function(){return false;}},
     },
});
MachineDictionary.registerSteamMachine({
    name: "macerator",
    type: MachineDictionary.PROCESSING,
    hull: "bronze_hull",
    tier: [0, 1],
    recipes: new RecipeMap(1, 1, 1, 1)
}, {
     standart: {
          header: {
               text: {
                    text: "Macerator"
               },
               color: android.graphics.Color.rgb(225, 119, 6)
          },
          inventory: {
               standart: true
          },
          background: {
               color: android.graphics.Color.rgb(225, 119, 6)
          },
          minHeight: 600
     },
     params: {
          textures: {
               /*slot: "thaum_slot",
               invSlot: "thaum_inv_slot",
               selection: "thaum_selection",
               closeButton: "thaum_close_button_up",
               closeButton2: "thaum_close_button_down",
               frame: "thaum_frame_default"*/
          }
     },
     drawing: [
         {type: "bitmap", bitmap: "BronzeMaceratorPocket", x: 1000 / 2 - bitmap.getWidth(), y: 40, width: bitmap.getWidth() * 3, height: bitmap.getHeight() * 3}
     ],
     elements: {
       "energySlot": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 237, y: 226, size: 54, bitmap: "slot", needClean: true, isTransparentBackground: true},
       "input0": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 156, y: 112, size: 54, bitmap: "slot", needClean: true, isTransparentBackground: true},
    "scale": {type: "scale", x: 1000 / 2 - bitmap.getWidth() + 225, y: 112, direction: 0, bitmap: "furnace_process", scale: 2, value: 0},
        "output0": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 318, y: 112, size: 54, bitmap: "slot", needClean: true, isTransparentBackground: true, isValid: function(){return false;}},
     },
});
MachineDictionary.registerSteamMachine({
    name: "extractor",
    type: MachineDictionary.PROCESSING,
    hull: "hull",
    tier: [0, 1],
    recipes: new RecipeMap(1, 1, 1, 1),
}, {
     standart: {
          header: {
               text: {
                    text: "Extractor"
               },
               color: android.graphics.Color.rgb(225, 119, 6)
          },
          inventory: {
               standart: true
          },
          background: {
               color: android.graphics.Color.rgb(225, 119, 6)
          },
          minHeight: 600
     },
     params: {
          textures: {
               /*slot: "thaum_slot",
               invSlot: "thaum_inv_slot",
               selection: "thaum_selection",
               closeButton: "thaum_close_button_up",
               closeButton2: "thaum_close_button_down",
               frame: "thaum_frame_default"*/
          }
     },
     drawing: [
         {type: "bitmap", bitmap: "BronzeExtractorPocket", x: 1000 / 2 - bitmap.getWidth(), y: 40, width: bitmap.getWidth() * 3, height: bitmap.getHeight() * 3}
     ],
     elements: {
       "energySlot": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 237, y: 226, size: 54, bitmap: "slot", needClean: true, isTransparentBackground: true},
       "input0": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 156, y: 112, size: 54, bitmap: "slot", needClean: true, isTransparentBackground: true},
    "scale": {type: "scale", x: 1000 / 2 - bitmap.getWidth() + 225, y: 112, direction: 0, bitmap: "furnace_process", scale: 2, value: 0},
        "output0": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 318, y: 112, size: 54, bitmap: "slot", needClean: true, isTransparentBackground: true, isValid: function(){return false;}},
     },
});
MachineDictionary.registerSteamMachine({
    name: "compressor",
    type: MachineDictionary.PROCESSING,
    hull: "hull",
    tier: [0, 1],
    recipes: new RecipeMap(1, 1, 1, 1)
}, { 
     standart: {
          header: {
               text: {
                    text: "Compressor"
               },
               color: android.graphics.Color.rgb(225, 119, 6)
          },
          inventory: {
               standart: true
          },
          background: {
               color: android.graphics.Color.rgb(225, 119, 6)
          },
          minHeight: 600
     },
     params: {
          textures: {
               /*slot: "thaum_slot",
               invSlot: "thaum_inv_slot",
               selection: "thaum_selection",
               closeButton: "thaum_close_button_up",
               closeButton2: "thaum_close_button_down",
               frame: "thaum_frame_default"*/
          }
     },
     drawing: [
         {type: "bitmap", bitmap: "BronzeCompressorPocket", x: 1000 / 2 - bitmap.getWidth(), y: 40, width: bitmap.getWidth() * 3, height: bitmap.getHeight() * 3}
     ],
     elements: {
       "energySlot": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 237, y: 226, size: 54, bitmap: "slot", needClean: true, isTransparentBackground: true},
       "input0": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 156, y: 112, size: 54, bitmap: "slot", needClean: true, isTransparentBackground: true},
    "scale": {type: "scale", x: 1000 / 2 - bitmap.getWidth() + 225, y: 112, direction: 0, bitmap: "furnace_process", scale: 2, value: 0},
        "output0": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 318, y: 112, size: 54, bitmap: "slot", needClean: true, isTransparentBackground: true, isValid: function(){return false;}},
     },
});
MachineDictionary.registerSteamMachine({
    name: "hammer",
    type: MachineDictionary.PROCESSING,
    hull: "hull",
    tier: [0, 1],
    recipes: new RecipeMap(1, 1, 1, 1),
}, {
     standart: {
          header: {
               text: {
                    text: "Forge hammer"
               },
               color: android.graphics.Color.rgb(225, 119, 6)
          },
          inventory: {
               standart: true
          },
          background: {
               color: android.graphics.Color.rgb(225, 119, 6)
          },
          minHeight: 600
     },
     params: {
          textures: {
               /*slot: "thaum_slot",
               invSlot: "thaum_inv_slot",
               selection: "thaum_selection",
               closeButton: "thaum_close_button_up",
               closeButton2: "thaum_close_button_down",
               frame: "thaum_frame_default"*/
          }
     },
     drawing: [
         {type: "bitmap", bitmap: "BronzeHammerPocket", x: 1000 / 2 - bitmap.getWidth(), y: 40, width: bitmap.getWidth() * 3, height: bitmap.getHeight() * 3}
     ],
     elements: {
       "energySlot": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 237, y: 226, size: 54, bitmap: "slot", needClean: true, isTransparentBackground: true},
       "input0": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 156, y: 112, size: 54, bitmap: "slot", needClean: true, isTransparentBackground: true},
    "scale": {type: "scale", x: 1000 / 2 - bitmap.getWidth() + 219, y: 112, direction: 0, bitmap: "furnace_process", scale: 2, value: 0},
        "output0": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 318, y: 112, size: 54, bitmap: "slot", needClean: true, isTransparentBackground: true, isValid: function(){return false;}},
     },
});

MachineDictionary.registerSteamMachine({
    name: "boiler",
    type: MachineDictionary.GENERATOR,
    hull: "brick_hull",
    tier: [0, 1],
    recipes: new FuelMap(1, 1),
}, {
     standart: {
          header: {
               text: {
                    text: "Bronze boiler"
               },
               color: android.graphics.Color.rgb(225, 119, 6)
          },
          inventory: {
               standart: true
          },
          background: {
               color: android.graphics.Color.rgb(225, 119, 6)
          },
          minHeight: 600
     },
     params: {
          textures: {
               /*slot: "thaum_slot",
               invSlot: "thaum_inv_slot",
               selection: "thaum_selection",
               closeButton: "thaum_close_button_up",
               closeButton2: "thaum_close_button_down",
               frame: "thaum_frame_default"*/
          }
     },
     drawing: [
         {type: "bitmap", bitmap: "BronzeBoilerPocket", x: 1000 / 2 - bitmap.getWidth(), y: 40, width: bitmap.getWidth() * 3, height: bitmap.getHeight() * 3}
     ],
     elements: {
        "inputCan0": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 129, y: 115, size: 54, bitmap: "slot", needClean: true,isTransparentBackground: true},
       "coal0": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 345, y: 223, size: 54, bitmap: "slot", needClean: true, isTransparentBackground: true},
    "scale": {type: "scale", x: 1000 / 2 - bitmap.getWidth() + 345, y: 169, direction: 1, bitmap: "bronze_boiler_process", scale: 3, value: 0},
        "ash0": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 345, y: 115, size: 54, bitmap: "slot", needClean: true, isTransparentBackground: true, isValid: function(){return false;}},
        "outputCan0": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 129, y: 223, size: 54, bitmap: "slot", needClean: true, isTransparentBackground: true, isValid: function(){return false;}},
        "waterScale": {type: "scale", x: 1000 / 2 - bitmap.getWidth() + 210, y: 115, direction: 1, bitmap: "water_scale", scale: 3, value: 0},
        "steamScale": {type: "scale", x: 1000 / 2 - bitmap.getWidth() + 249, y: 115, direction: 1, bitmap: "steam_scale", scale: 3, value: 0},
        "heatScale": {type: "scale", x: 1000 / 2 - bitmap.getWidth() + 288, y: 115, direction: 1, bitmap: "heat_scale", scale: 3, value: 0},
     },
});

MachineDictionary.registerSteamMachine({
    name: "solar_boiler",
    type: MachineDictionary.GENERATOR,
    hull: "brick_hull",
    tier: [0],
    recipes: new FuelMap(0, 0),
}, {
     standart: {
          header: {
               text: {
                    text: "Solar boiler"
               },
               color: android.graphics.Color.rgb(225, 119, 6)
          },
          inventory: {
               standart: true
          },
          background: {
               color: android.graphics.Color.rgb(225, 119, 6)
          },
          minHeight: 600
     },
     params: {
          textures: {
               /*slot: "thaum_slot",
               invSlot: "thaum_inv_slot",
               selection: "thaum_selection",
               closeButton: "thaum_close_button_up",
               closeButton2: "thaum_close_button_down",
               frame: "thaum_frame_default"*/
          }
     },
     drawing: [
         {type: "bitmap", bitmap: "SolarBoilerPocket", x: 1000 / 2 - bitmap.getWidth(), y: 40, width: bitmap.getWidth() * 3, height: bitmap.getHeight() * 3}
     ],
     elements: {
       "inputCan0": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 129, y: 115, size: 54, bitmap: "slot", needClean: true, isTransparentBackground: true},
    "scale": {type: "scale", x: 1000 / 2 - bitmap.getWidth() + 345, y: 169, direction: 0, bitmap: "furnace_process", scale: 2, value: 0},
        "outputCan0": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 129, y: 223, size: 54, bitmap: "slot", needClean: true, isTransparentBackground: true, isValid: function(){return false;}},
             "waterScale": {type: "scale", x: 1000 / 2 - bitmap.getWidth() + 210, y: 115, direction: 1, bitmap: "water_scale", scale: 3, value: 0},
        "steamScale": {type: "scale", x: 1000 / 2 - bitmap.getWidth() + 249, y: 115, direction: 1, bitmap: "steam_scale", scale: 3, value: 0},
        "heatScale": {type: "scale", x: 1000 / 2 - bitmap.getWidth() + 288, y: 115, direction: 1, bitmap: "heat_scale", scale: 3, value: 0},
     },
});


/*MachineDictionary.registerSteamMachine("alloy_smelter", 1, 2, 1, MachineDictionary.PROCESSING, {
    name: "alloy_smelter",
    type: MachineDictionary.PROCESSING,
    inputSlots: 2, 
    outputSlots: 1,
}, {
     standart: {
          header: {
               text: {
                    text: "Alloy Smelter"
               },
               color: android.graphics.Color.rgb(225, 119, 6)
          },
          inventory: {
               standart: true
          },
          background: {
               color: android.graphics.Color.rgb(225, 119, 6)
          },
          minHeight: 600
     },
     params: {
          textures: {
               /*slot: "thaum_slot",
               invSlot: "thaum_inv_slot",
               selection: "thaum_selection",
               closeButton: "thaum_close_button_up",
               closeButton2: "thaum_close_button_down",
               frame: "thaum_frame_default"
          }
     },
     drawing: [
         {type: "bitmap", bitmap: "SteelAlloySmelterPocket", x: 1000 / 2 - bitmap.getWidth(), y: 40, width: bitmap.getWidth() * 3, height: bitmap.getHeight() * 3}
     ],
     elements: {
       "energySlot": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 237, y: 226, size: 54, bitmap: "slot", needClean: true, isTransparentBackground: true},
       "input0": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 102, y: 112, size: 54, bitmap: "slot", needClean: true, isTransparentBackground: true},
       "input1": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 156, y: 
112, size: 54, bitmap: "slot", needClean: true, isTransparentBackground: true},
    "scale": {type: "scale", x: 1000 / 2 - bitmap.getWidth() + 225, y: 112, direction: 0, bitmap: "furnace_process", scale: 2, value: 0},
        "output0": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 318, y: 112, size: 54, bitmap: "slot", needClean: true, isTransparentBackground: true},
     },
});*/
MachineDictionary.registerSteamMachine({
    name: "lava_boiler",
    type: MachineDictionary.GENERATOR,
    hull: "brick_hull",
    tier: [1],
    recipes: new FuelMap(1, 1),
}, {
     standart: {
          header: {
               text: {
                    text: "Lava boiler"
               },
               color: android.graphics.Color.rgb(225, 119, 6)
          },
          inventory: {
               standart: true
          },
          background: {
               color: android.graphics.Color.rgb(225, 119, 6)
          },
          minHeight: 600
     },
     params: {
          textures: {
               /*slot: "thaum_slot",
               invSlot: "thaum_inv_slot",
               selection: "thaum_selection",
               closeButton: "thaum_close_button_up",
               closeButton2: "thaum_close_button_down",
               frame: "thaum_frame_default"*/
          }
     },
     drawing: [
         {type: "bitmap", bitmap: "LavaBoilerPocket", x: 1000 / 2 - bitmap.getWidth(), y: 40, width: bitmap.getWidth() * 3, height: bitmap.getHeight() * 3}
     ],
     elements: {
       "energySlot": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 237, y: 226, size: 54, bitmap: "slot", needClean: true, isTransparentBackground: true},
           "inputCan0": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 102, y: 112, size: 54, bitmap: "slot", needClean: true,isTransparentBackground: true},
       "coal0": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 102, y: 112, size: 54, bitmap: "slot", needClean: true, isTransparentBackground: true},
    "scale": {type: "scale", x: 1000 / 2 - bitmap.getWidth() + 225, y: 112, direction: 0, bitmap: "furnace_process", scale: 2, value: 0},
        "ash0": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 318, y: 112, size: 54, bitmap: "slot", needClean: true, isTransparentBackground: true},
        "output0": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 318, y: 112, size: 54, bitmap: "slot", needClean: true, isTransparentBackground: true, isValid: function(){return false;}},
     },
});
//MachineDictionary.addToCreative();

let ui = {
 alloy_smelter: null
};

LiquidRegistry.registerLiquid("steam", "Steam", ["steam"]);


let pos = null;
let protation = null;
Block.registerPlaceFunction(BlockID.gtblockmachine, function(coords, item, block, player, region){
    region.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, item.id, item.data);
    
    let playerobject = new PlayerActor(player);
    let rotation = MetaRenderer.getBlockRotation(player, false);
    let tileEntity = TileEntity.getTileEntity(coords.relative.x, coords.relative.y, coords.relative.z);
    if(tileEntity) {
        tileEntity.data.rotation = proration;
    } else {
        pos = coords.relative;
        protation = rotation;
    }
});

MachineDictionary.addToCreative();

Callback.addCallback("tick", function() {
// playerUid - сущность игрока
// isPlayerDead - дополнительный параметр - мертв ли данный игрок
        if(!pos) return;
        let tileEntity = TileEntity.getTileEntity(pos.x, pos.y, pos.z);
        if(tileEntity) {
            tileEntity.data.rotation = protation;
            pos = null;
            protation = null;
    }
});

TileEntity.registerPrototype(BlockID.gtblockmachine, {
    useNetworkItemContainer: true,
     defaultValues: {
          //is uses steam instead energy
        isSteam: true,
        rotation: 2,
        put0: null,
        put1: null,
        put2: null,
        put3: null,
        put4: null,
        put5: null,
        pipe: false,
        type: null,
        
        ui: null,
          
        amount: 0,
        steamcomsumption: 0,
          
        isProcess: false,
        original_work_time: 0,
        work_time: 0,
        progress: 0,
          
        /*energy: 0,
        energy_receive: 0,
		last_energy_receive: 0,
	    voltage: 0,
	    last_voltage: 0,*/
			    
		temperatureTickEncouter: 0,
		fuelTickEncounter: 0,
		steamTickEncounter: 0,
		temperature: 20,
	    fuel: 0,
     },
init: function() {
  //if(!this.data.inited) this.data.put = [];
  Logger.Log(this.data.rotation, "hyper");
    let dat = 0;
    for(let m in MachineDictionary.steammachines) {
      let uuu = false;
      let steamobj = MachineDictionary.steammachines[m];
      for(let i = 0; i < steamobj.tier.length; i++) {
      if(this.blockSource.getBlock(this.x, this.y, this.z).data == dat) {
        Logger.Log(dat, "soooli");
        this.data.type = steamobj;
        this.data.tier = steamobj.tier[i];
        Logger.Log(steamobj.name, "so9ooli");
Logger.Log(steamobj.type, "so8i");
		uuu = true;
        break;
    }
    Logger.Log(dat, "cerr");
    dat++;
      }
      if(uuu) break;
  }
  if(this.data.type != null) {
  Logger.Log(this.data.tier, "syyyk");
  Logger.Log(this.data.type, "sjk");
    Logger.Log(this.data.rotation, "sjk");
    if(this.data.type.type == MachineDictionary.GENERATOR) {
      this.liquidStorage.setLimit("water", 16000);
      this.liquidStorage.setLimit("steam", 16000);
      this.liquidStorage.setLimit("lava", 16000);
    } else {
      this.liquidStorage.setLimit("water", 0);
      this.liquidStorage.setLimit("lava", 0);
      this.liquidStorage.setLimit("steam", 16000);
    }
    //this.data.rotation = PipeNetBuilder.;
    Logger.Log(this.data.rotation, "lev");
    Logger.Log({x: this.x, y: this.y, z: this.z}, "levis");
    Logger.Log(this.data.put0, "lev");
    Logger.Log(this.data.put1, "lev");
    Logger.Log(this.data.put2, "lev");
    Logger.Log(this.data.put3, "lev");
    Logger.Log(this.data.put4, "lev");
    Logger.Log(this.data.put5, "levj");
    Logger.Log(this.data.type.textures, "levoiki");
    
this.sendPacket("gtmachine_rotate", {block: {x: this.x, y: this.y, z: this.z}, rotation: this.data.rotation, put0: this.data.put0, put1: this.data.put1, put2: this.data.put2, put3: this.data.put3, put4: this.data.put4, put5: this.data.put5, textures: this.data.type.textures, rotationOfBlock: this.data.rotation});
    //this.sendPacket("gtmachine_ui", {ui: this.data.type.ui});
    this.data.inited = true;
    }
    
    
    
    Logger.Log(this, "fui");
    this.data.pipeEncounter = 0;
			this.__Nets = {};
			TileEntityRegistry.addMacineAccessAtCoords(this.x, this.y, this.z, this);
			for(let name in this.__Types) {
			  PipeNetBuilder.rebuild();
			}
			
			
			let screenName = this.data.type.name + "_" + this.data.type.tier;
      Logger.Log(screenName.substring(0, screenName.indexOf("_"), "fear"));
Logger.Log(screenName.substring(0, screenName.indexOf("_") + 1, "fealui"));
    Logger.Log("inited", "hyper");
},
     tick: function(){
         Logger.Log("Ferrumhi");
       if(this.data.type != null) {
           Logger.Log(this.data.type.type , "Fumhi");
           Logger.Log(MachineDictionary.PROCESSING, "Fumhi");
         if(this.data.type.type == MachineDictionary.PROCESSING) {
             Logger.Log("Frumhi");
           /*for(let xx = -1; xx < 2; xx += 2) {
            for(let yy = -1; yy < 2; yy += 2) {
            ipe].rate * PipeDictionary.sizes[this.data.sizePipe]. multiplier) / 4));
            }}}}*/
          /*if(this.container.getGuiContent()) {
               if(this.data.errored) {
                    this.container.getGuiContent().elements["error"] = {type: "image", x: 1000 / 2 - bitmap.getWidth() / 2 + 150, y: UI.getScreenHeight() / 2 - bitmap.getHeight() / 2 + 101, bitmap: "bronze_error", scale: 3};
               } else {
                    this.container.getGuiContent().elements["error"] = null;
               }
          }*/
          if(!this.data.isProcess) {
              Logger.Log(this.data.type.recipes, "ss");
              if(this.data.type.recipes) {
         for(let i in this.data.type.recipes) {
             Logger.Log(i, "seas");
         }
         for(let i in this.data.type.recipes) {
             Logger.Log(i, "sease");
           if(isNaN(i)) continue;
           if(!this.data.i.isSteam()) continue;
           this.data.i = this.data.type.recipes[i];
             if(this.checkInput(this.data.i)) {
               Logger.Log("is", "is");
               if(this.checkOutput(this.data.i)) {
                 
                 if(this.data.tier == 0) {
              this.data.original_work_time = this.data.i.duration * 2;
              this.data.work_time = this.data.original_work_time;
              this.data.steamcomsumption = this.data.i.EUt * 2;
            } else if(this.data.tier == 1) {
              this.data.original_work_time = this.data.i.duration * 2 / 2;
              this.data.work_time = this.data.original_work_time;
              this.data.steamcomsumption = this.data.i.EUt * 2 * 3;
            }
            
            this.input(this.data.i);
            //this.outputSet(this.data.i);
            
            this.liquidStorage.getLiquid("steam", this.data.steamcomsumption);
            if(!this.check(true)) {
                this.data.i = null;
                 continue;
                 
            } else {
                 this.data.errored = false;
                 /*if(this.container.getGuiContent() != null) {
                    this.container.getGuiContent().elements["error"] = null;
                 }*/
            }
            this.data.isProcess = true;
            this.data.progress += 1/this.data.original_work_time;
            this.container.setScale("scale", this.data.progress);
	    //SoundApi
	    /*sounds[this.data.type.name + "_sound"].setInBlock(this.x, this.y, this.z, 10);
	        this.sendPacket("gtmachine_soundStart", {sound: sounds[this.data.type.name + "_sound"]});*/
            //sounds[this.data.type.name + "_sound"].play();
            break;
               }
             }
         }
         
              } else {
                  //if(this.checkInput(this.data.i)) {
                  Logger.Log(this.container, "seas");
                      if(RecipeDictionary.provideFurnaceRecipe(this.container, "GTFurnace")) {
                          Logger.Log("seal"); 
                          if(this.checkOutputF(RecipeDictionary.provideFurnaceRecipe(this.container, "GTFurnace"))) {
                    //this.data.isProcess = true;
                 if(this.data.tier == 0) {
              this.data.original_work_time = 256;
              this.data.work_time = this.data.original_work_time;
              this.data.steamcomsumption = 8;
            } else if(this.data.tier == 1) {
              this.data.original_work_time = 128;
              this.data.work_time = this.data.original_work_time;
              this.data.steamcomsumption = 24;
            }
            if(!this.check(true)) {
                 this.data.i = null;
                 return;
            } else {
                 this.data.errored = false;
                 /*if(this.container.getGuiContent() != null) {
                    this.container.getGuiContent().elements["error"] = null;
                 }*/
            }
            this.inputF(RecipeDictionary.provideFurnaceRecipe(this.container, "GTFurnace"));
            //this.outputSet(this.data.i);
            this.data.i = RecipeDictionary.provideFurnaceRecipe(this.container, "GTFurnace");//()
            this.liquidStorage.getLiquid("steam", this.data.steamcomsumption);
            this.data.isProcess = true;
            this.data.progress += 1/this.data.original_work_time;
            this.container.setScale("scale", this.data.progress);
	    //SoundApi
	    /*sounds[this.data.type.name + "_sound"].setInBlock(this.x, this.y, this.z, 10);
	        this.sendPacket("gtmachine_soundStart", {sound: sounds[this.data.type.name + "_sound"]});*/
            //sounds[this.data.type.name + "_sound"].play();
                        }
                      }
                      Logger.Log("zealser, zoob");
                  //}
              }
         } else {
           if(this.data.type.recipes) {
           if(this.data.work_time > 0) {
             this.liquidStorage.getLiquid("steam", this.data.steamcomsumption);
             if(!this.check()) return;
             this.data.progress += 1/this.data.original_work_time;
              this.data.work_time -= 1;
              this.container.setScale("scale", this.data.progress);
           } else {
               /*this.sendPacket("gtmachine_soundEnd", {sound: sounds[this.data.type.name + "_sound"]});*/
             this.output(this.data.i);
             this.data.progress = 0;
             this.container.setScale("scale", 0);
             
             this.data.isProcess = false;
             this.data.original_work_time = 0;
             //this.clearPut(this.data.i);
             this.data.steamcomsumption = 0;
             let yuki_onna = 0;
             for(let i = 1; i < 6; i++) {
                    if(this.data["put" + i] === null || this.data["put" + i] === undefined) continue;
                   yuki_onna = i;   
             }
             let relative = PipeNetBuilder.getRelativeCoords(this.x, this.y, this.z, this.data["put" + yuki_onna]);
                Particles.addParticle("steam", this.x + relative.x, this.y + relative.y, this.z + relative.z, 0, 0.5, 0);
                /*this.sendPacket("gtmachine_sound", {sound: sounds["interrupt"]});*/
           }
         } else {
             if(this.data.work_time > 0) {
             this.liquidStorage.getLiquid("steam", this.data.steamcomsumption);
             if(!this.check()) return;
             this.data.progress += 1/this.data.original_work_time;
              this.data.work_time -= 1;
              this.container.setScale("scale", this.data.progress);
           } else {
               /*this.sendPacket("gtmachine_soundEnd", {sound: sounds[this.data.type.name + "_sound"]});*/
             this.outputF(this.data.i);
             this.data.progress = 0;
             this.container.setScale("scale", 0);
             
             this.data.isProcess = false;
             this.data.original_work_time = 0;
             //this.clearPut(this.data.i);
             this.data.steamcomsumption = 0;
             let yuki_onna = 0;
             for(let i = 1; i < 6; i++) {
                    if(this.data["put" + i] === null || this.data["put" + i] === undefined) continue;
                   yuki_onna = i;
                   break;
             }
             if(yuki_onna > -1) {
                 //юки онна!
                 let relative = PipeNetBuilder.getRelativeCoords(this.x, this.y, this.z, this.data["put" + yuki_onna]);
                Particles.addParticle("steam", this.x + relative.x, this.y + relative.y, this.z + relative.z, 0, 0.5, 0);
             } else {
                /*this.sendPacket("gtmachine_sound", {sound: sounds["interrupt"]});*/
             }
           }
         }
             
         }
              } else if(this.data.type.type == MachineDictionary.GENERATOR) {
                  if(this.liquidStorage.getAmount("water") + 1000 <= this.liquidStorage.getLimit("water") & this.container.getSlot("inputCan0").id == 325 & this.container.getSlot("inputCan0").data == 8 & this.container.getSlot("inputCan0").count > 0) {
                    if(this.container.getSlot("outputCan0").id == 0 || (this.container.getSlot("outputCan0").id == 325 & this.container.getSlot("outputCan0").count < Item.getMaxStack(325))) {
                  this.container.setSlot("inputCan0", 325, this.container.getSlot("inputCan0").count - 1, 8);
                  if(this.data.temperature > 100) {
                    this.blockSource.explode(this.x, this.y, this.z, 5, false);
                    this.container.close();
                    return;
                  }
                  this.liquidStorage.addLiquid("water", 1000);
                  this.container.setScale("waterScale", this.liquidStorage.getRelativeAmount("water"));
                  if(this.container.getSlot("outputCan0").id == 0 || this.container.getSlot("outputCan0").id == 325) {
                  this.container.setSlot("outputCan0", 325, this.container.getSlot("outputCan0").count + 1, 0);
                  }
                }}
                this.container.validateSlot("inputCan0");
                if(this.data.type.name == "solar_boiler") {
                if(this.data.solarTickEncounter < 255) {
                  this.data.solarTickEncounter++;
                } else {
                  this.data.solarTickEncounter = 0;
                  if(this.dimension == Native.Dimension.NORMAL && this.blockSource.canSeeSky(this.x, this.y + 1, this.z) && OreDictionary.isInnerDiapozone(World.getWorldTime(), 0, 12000)) {
                  this.data.fuel += 8;
                  }
                }
                }
                if(this.data.fuelTickEncounter < 11) {
                  this.data.fuelTickEncounter++;
                } else {
                    if(this.data.fuel > 0) {
                      this.data.fuel--;
                      if(this.data.temperature < 500) {
                        this.data.temperature += 1;
                      }
                    } else if(this.data.type.name != "solar_boiler") {
                      
                      for(let i in this.data.type.recipes) {
                        Logger.Log(this.data.type.recipes[i], "heanol");
                      }
                      
                        for(let i in this.data.type.recipes) {
                        if(this.data.type.recipes[i].type == "fuel") {
                        let irdata = MaterialDictionary.invdata[this.data.type.recipes[i].inputs[0].form][this.data.type.recipes[i].inputs[0].material.name];
                        let irdata1 = MaterialDictionary.invdata[this.data.type.recipes[i].outputs[0].form][this.data.type.recipes[i].outputs[0].material.name];
                      if(this.container.getSlot("coal0").id == irdata.id && this.container.getSlot("coal0").data == irdata.data && this.container.getSlot("coal0").count > 0) {
                      this.container.setSlot("coal0", irdata.id, this.container.getSlot("coal0").count - 1, irdata.data);
    
                      this.data.fuel = 500;
                      if(Math.random() < 0.33) {
                        if(this.container.getSlot("ash0").id == 0 || this.container.getSlot("ash0").id == irdata1.id && this.container.getSlot("ash0").data == irdata1.data) {
                          this.container.setSlot("ash0", irdata.id, this.container.getSlot("ash0").count + 1, irdata.data);
                        }
                      }
                      this.data.temperature += 1;
                      }
                        }}
                      this.container.validateSlot("coal0");
                      this.container.validateSlot("ash0");
                  }
                  
                    this.container.setScale("heatScale", (this.data.temperature - 20) / 480);
                    this.container.setScale("scale", this.data.fuel / 500);
                this.data.fuelTickEncounter = 0;
                }
                
                if(this.data.temperatureTickEncounter < 44) {
                  this.data.temperatureTickEncounter++;
                } else {
                  if(this.data.temperature > 20) {
                  this.data.temperature -= 1;
                  this.container.setScale("heatScale", (this.data.temperature - 20) / 480);
                  }
                    this.data.temperatureTickEncounter = 0;
                  }
                  
                if(this.data.steamTickEncounter < 24) {
                  this.data.steamTickEncounter++;
                } else {
                  if(this.data.temperature > 100) {
                  if(this.liquidStorage.getAmount("steam") + 150 <= this.liquidStorage.getLimit("steam") & this.liquidStorage.getAmount("water") - 1 >= 0) {
                  this.liquidStorage.getLiquid("water", 1);
                  this.container.setScale("waterScale", this.liquidStorage.getRelativeAmount("water"));
                  
                  this.liquidStorage.addLiquid("steam", 150);
                  this.container.setScale("steamScale", this.liquidStorage.getRelativeAmount("steam"));

                  }}
                  this.data.steamTickEncounter = 0;
              }
          }}
        this.container.sendChanges();
        
        if(this.data.pipeEncounter == 4) {
			  this.data.pipeEncounter = 0;
			for(let name in this.__Types) {
				if(this.isSource(name)) {
					let net = this.__Nets[name];
					if(net) {
					  let src = net.source;
					  //if(canExtract(side, type)
					  this.Еtick(name, src);
					}
				} else {
				}
			}
			} else {
			  this.data.pipeEncounter++;
			}
     },
     
     click: function(id, count, data, coords, player){
        let playerobject = new PlayerActor(player);
       if(this.data.type != null) {
       if(id == 325 & data == 8) {
         playerobject.setCarriedItem(325, 1, 0);
         if(this.data.temperature > 100) {
           this.blockSource.explode(this.x, this.y, this.z, 5, false);
           return true;
         }
         this.liquidStorage.addLiquid("water", 1);
         this.container.setScale("waterScale", this.liquidStorage.getRelativeAmount("water"));
         this.container.invalidateUI();
         return true;
       } else if(id == ItemID.gtmetatool01 && ToolDictionary.types[data].name == "wrench") {
         let item = playerobject.getInventorySlot(playerobject.getSelectedSlot());
         ToolDictionary.damageTool(item);
    Logger.Log(coords.side, "zopp");
    Logger.Log(this.blockRotationToWorldRotation(3), "zoppexiwq");
    if(coords.side != this.blockRotationToWorldRotation(3)) {
      Logger.Log("sneak", Entity.getSneaking(player));
      if(Entity.getSneaking(player) && coords.side != 0 && coords.side != 1) {
      let rotation = MetaRenderer.getBlockRotation(player, false);
      this.data.rotation = rotation;
      
      this.sendPacket("gtmachine_rotate", {block: {x: this.x, y: this.y, z: this.z}, rotation: this.data.rotation, put0: this.data.put0, put1: this.data.put1, put2: this.data.put2, put3: this.data.put3, put4: this.data.put4, put5: this.data.put5, textures: this.data.type.textures, rotationOfBlock: this.data.rotation});
      
      } else {
        //Logger.Log(this.data.put.length);
        if(this.data["put" + this.worldRotationToBlockRotation(coords.side)] == this.worldRotationToBlockRotation(coords.side)) {
          this.data["put" + this.worldRotationToBlockRotation(coords.side)] = null;
        } else {
          this.data["put" + this.worldRotationToBlockRotation(coords.side)] = this.worldRotationToBlockRotation(coords.side);
        }
        //Logger.Log(this.data.put.length);
        
        this.sendPacket("gtmachine_rotate", {block: {x: this.x, y: this.y, z: this.z}, rotation: this.data.rotation, put0: this.data.put0, put1: this.data.put1, put2: this.data.put2, put3: this.data.put3, put4: this.data.put4, put5: this.data.put5, textures: this.data.type.textures, rotationOfBlock: this.data.rotation});
      }
    }
         return true;
       }
       }
    },
    
    events: {
        // события, принимающие пакеты на стороне сервера, в данном случае this -серверный экземпляр, получивший пакет
        
    },
containerEvents: {
// события контейнера на стороне сервера, в данном случае this - серверный экземпляр, получивший пакет
eventName: function(eventData, connectedClient) {
// доступный только здесь метод:
this.container.sendResponseEvent("eventName", someData)
}
},

    getScreenName: function(player, coords) {
      let screenName = this.data.type.name + "-" + this.data.type.tier;
      Logger.Log(screenName.substring(0, screenName.indexOf("-"), "fear"));
Logger.Log(screenName.substring(0, screenName.indexOf("-") + 1, "fealui"));
        return screenName;
    },
    // это событие вызывается на стороне клиента, this в данном случае не определен, по переданному имени, которое вернул метод getScreenName, возвращает окно, которое нужно открыть
    getScreenByName: function(screenName){
Logger.Log(screenName.substring(0, screenName.indexOf("-")), "fear");
Logger.Log(screenName.substring(screenName.indexOf("-") + 1), "fealui");
        if(!screenName.substring(screenName.indexOf("-") + 1)) return MachineDictionary.steammachines[screenName.substring(0, screenName.indexOf("-"))].ui0;
        if(screenName.substring(screenName.indexOf("-") + 1)) return MachineDictionary.steammachines[screenName.substring(0, screenName.indexOf("-"))].ui1;
    },


     check: function(error) {
       let checked = true;
       if(this.liquidStorage.getAmount("steam") < this.data.steamcomsumption) {
            checked = false;
          }
          if(!error && !checked) {
              this.data.errored = true;
          if(this.data.tier == 0) {
            /*if(this.container.getGuiContent() != null) {
               this.container.getGuiContent().elements["error"] = {type: "image", x: 1000 / 2 - bitmap.getWidth() / 2 + 150, y: UI.getScreenHeight() / 2 - bitmap.getHeight() / 2 + 101, bitmap: "bronze_error", scale: 3};
            }*/
          } else if(this.data.tier == 1) {
              //this.container.getGuiContent().elements["error"] = {type: "image", x: 1000 / 2 - bitmap.getWidth() + 150, y: UI.getScreenHeight() / 2 - bitmap.getHeight() + 101, bitmap: "steel_error", scale: 3};
                }
              /*sounds["interrupt"].setInBlock(this.x, this.y, this.z, 10);
              this.sendPacket("gtmachine_sound", {sound: sounds["interrupt"]});*/
              //sounds.interrupt.play();
              this.data.progress = 0;
              this.container.setScale("scale", 0);
             
              this.data.isProcess = false;
              this.data.original_work_time = 0;
              this.data.work_time = 0;
              //this.clearPut();
              this.data.steamcomsumption = 0;
            }
          return checked;
     },
     checkInput: function(j) {
       let checked = true;
         for(let i = 0; i < this.data.type.recipes.maxInputs; i++) {
           let iddata = MaterialDictionary.invdata[j.outputs[i].form][j.outputs[i].material];
              if(this.container.getSlot("input" + i).id == iddata.id & this.container.getSlot("input"+ i).data == iddata.data & this.container.getSlot("input"+ i).extra == iddata.extra & this.container.getSlot("input" + i).count >= iddata.count) {
              
                
              } else {
                checked = false;
              }
                   }
            return checked;
     },
     input: function(j) {
       for(let i = 0; i < this.data.type.recipes.maxInputs; i++) {
              //this.data["input" + i] = j[i];
              let iddata = MaterialDictionary.invdata[j.inputs[i].form][j.inputs[i].material];
              this.container.setSlot("input" + i, this.container.getSlot("input" + i).id, this.container.getSlot("input" + i).count - iddata.count, this.container.getSlot("input" + i).data /*this.container.getSlot("input" + i).extra*/);
              
              this.container.validateSlot("input" + i);
              
             //this.data["input" + i] = j[i]; 
       }
     },
     inputF: function(j) {
              this.data["input0"] = j;
              this.container.setSlot("input0", this.container.getSlot("input0").id, this.container.getSlot("input0").count - j.count, this.container.getSlot("input0").data /*this.container.getSlot("input0").extra*/);
              
              this.container.validateSlot("input0");
              
             this.data["input0"] = j; 
     },
     checkOutput: function(j) {
       let checked = true;
       for(let i = 0; i < this.data.type.recipes.maxOutputs; i++) {
           let iddata = MaterialDictionary.invdata[j.outputs[i].form][j.outputs[i].material];
            if(this.container.getSlot("output" + i).id == 0 || (this.container.getSlot("output" + i).id == iddata.id & this.container.getSlot("output" + i).data == iddata.data & this.container.getSlot("output" + i).count + iddata.count < Item.getMaxStack(this.container.getSlot("output" + i).id))) {
            } else {
              checked = false;
            }
       }
       return checked;
     },
    checkOutputF: function(j) {
       let checked = true;
            if(this.container.getSlot("output0").id == 0 || (this.container.getSlot("output0").id == j.id & this.container.getSlot("output0").data == j.data & this.container.getSlot("output0").count + j.count < Item.getMaxStack(this.container.getSlot("output0").id))) {
            } else {
              checked = false;
            }
       return checked;
     },
     output: function(j) {
         
       for(let i = 0; i < this.data.type.recipes.maxOutputs; i++) {
           let iddata = MaterialDictionary.invdata[j.outputs[i].form][j.outputs[i].material];
               this.container.setSlot("output" + i, iddata.id, this.container.getSlot("output" + i).count + iddata.count, iddata.data/*iddata.extra*/);
               this.container.validateSlot("output" + i);
              }
     },
     outputF: function(result) {
               this.container.setSlot("output0", result.id, this.container.getSlot("output0").count + result.count, result.data /*result.extra*/);
               this.container.validateSlot("output0");
     },
     canConnect: function () {
       return true;
     },
     isSource: function() {
        return this.data.type.type; // блок может отдавать энергию
    },
    isGenerator: function() {
        return this.data.type.type; // блок может отдавать энергию и не может принимать
    },
    canReceive: function(side, type) {
      Logger.Log(MachineDictionary.uses[this.data.type], "azas");
        if(MachineDictionary.uses[this.data.type] === MachineDictionary.GENERATOR) return false;
        Logger.Log(MachineDictionary.uses[this.data.type]);
        let rt = this.worldRotationToBlockRotation(side ^ 1);
        if(rt === this.data["put" + rt]) {
          return true; 
        }
        Logger.Log(this.data["put" + rt], "€!!");
      return false;
      // side != 0 выведет true, если сторона любая, кроме нижней.
    },
    canExtract: function(side, type) {
      if(this.data.type.type === MachineDictionary.PROCESSING) return false;
      let rt = this.worldRotationToBlockRotation(side);
      if(rt === this.data["put" + rt]) {
        return true; 
      }
      return false;
        // выведет true при подключении блока для выхода энергии с нижней стороны.
    },
    getCapacity: function(){
        return this.liquidStorage.getLimit("steam"); // установим лимит хранилища энергии в 2 миллиона (2e6 - это способ записи числа 2000000)
    },
    receive: function(type, amount, sidepre) {
        amount = Math.min(amount, this.getCapacity()); // устанавлимаем максимальное количество энергии, которое может принять механизм равным 1000.
        Logger.Log(amount, "zaebok");
        let add = Math.min(amount, this.getCapacity() - this.liquidStorage.getAmount("steam")); // уменьшаем количество энергии, так, чтобы хранилище не переполнялось;
        this.liquidStorage.addLiquid("steam", add); // добавляем энергию в хранилище
        this.data.sidepre = PipeNetBuilder.sideToNeighboring(sidepre);
        return add; // и возвращаем сколько забрали энергии
    },
    Еtick: function(type, src){
        let output = Math.min(this.getCapacity(), this.liquidStorage.getAmount("steam")); // определяем, сколько энергии блок может отдать
        Logger.Log(output, "osmocene");
        this.liquidStorage.addLiquid("steam", src.add(this, output, "steam", {x: this.x, y: this.y, z: this.z}) - output, this.data.sidepre); // прибавляем к хранилищу количество энергии, которое осталось после отправки пакета, и вычитаем сколько отправляли.
        Logger.Log(this.liquidStorage.getAmount("steam"), "ruthenocene");
        //this.data.sidepre = null;
    },
    
    worldRotationToBlockRotation: function (rotation) {
          Logger.Log(this.data.rotation, "@seao");
          if(this.data.rotation == 3) {
            return rotation;
          }
          let e;
          for(let i = 0; i < MetaRenderer.rotationMap[3].length; i++) {
            if(MetaRenderer.rotationMap[3][i] == rotation) e = i;
          }
          return MetaRenderer.rotationMap[this.data.rotation][e];
        },
        blockRotationToWorldRotation: function (rotation) {
          Logger.Log(this.data.rotation, "@sas");
          if(this.data.rotation == 3) {
            return rotation;
          }
      let e;
      for(let i = 0; i < MetaRenderer.rotationMap[this.data.rotation].length; i++) {
        if(MetaRenderer.rotationMap[this.data.rotation][i] == rotation) e = i;
      }
      Logger.Log(e, "@e");
      Logger.Log(MetaRenderer.rotationMap[3][e], "@sashok");
      return MetaRenderer.rotationMap[3][e];
    },
    destroy: function() {
			TileEntityRegistry.removeMachineAccessAtCoords(this.x, this.y, this.z);
			
			PipeNetBuilder.rebuild();
;
    },
    client: {
        load: function() {},
        worldRotationToBlockRotation: function (rotation, rotationOfBlock) {
          Logger.Log(rotationOfBlock, "@seao");
          if(rotationOfBlock == 3) {
            return rotation;
          }
          let e;
          for(let i = 0; i < MetaRenderer.rotationMap[3].length; i++) {
            if(MetaRenderer.rotationMap[3][i] == rotation) e = i;
          }
          return MetaRenderer.rotationMap[rotationOfBlock][e];
        },
        blockRotationToWorldRotation: function (rotation, rotationOfBlock) {
          Logger.Log(rotationOfBlock, "@sas");
          if(rotationOfBlock == 3) {
            return rotation;
          }
      let e;
      for(let i = 0; i < MetaRenderer.rotationMap[rotationOfBlock].length; i++) {
        if(MetaRenderer.rotationMap[rotationOfBlock][i] == rotation) e = i;
      }
      Logger.Log(e, "@e");
      Logger.Log(MetaRenderer.rotationMap[3][e], "@sashok");
      return MetaRenderer.rotationMap[3][e];
    },
        events: {
            // события, принимающие пакеты на стороне клиента, в данном случае this будет клиентским экземпляром, получившим этот пакет
            gtmachine_rotate: function(packetData, packetExtra, connectedClient) {
                // доступный только здесь метод, отправляет пакет конкретному клиенту:
                let rotationmap = [MetaRenderer.rotationMap[packetData.rotation][0], MetaRenderer.rotationMap[packetData.rotation][1], MetaRenderer.rotationMap[packetData.rotation][2], MetaRenderer.rotationMap[packetData.rotation][3], MetaRenderer.rotationMap[packetData.rotation][4], MetaRenderer.rotationMap[packetData.rotation][5]];
                let puts = [this.blockRotationToWorldRotation(packetData.put0, packetData.rotationOfBlock), this.blockRotationToWorldRotation(packetData.put1, packetData.rotationOfBlock), this.blockRotationToWorldRotation(packetData.put2, packetData.rotationOfBlock), this.blockRotationToWorldRotation(packetData.put3, packetData.rotationOfBlock), this.blockRotationToWorldRotation(packetData.put4, packetData.rotationOfBlock), this.blockRotationToWorldRotation(packetData.put5, packetData.rotationOfBlock)];
                MetaRenderer.invalidateModel({x: this.x, y: this.y, z: this.z}, packetData.block, packetData.textures, rotationmap, puts);
                sounds.wrench.setInBlock(this.x, this.y, this.z, 5);
                sounds.wrench.play();
            },
            gtmachine_put: function(packetData, packetExtra, connectedClient) {
                // доступный только здесь метод, отправляет пакет конкретному клиенту:
                //let texture = MachineDictionary.textures[block.id][block.data].arr;
                let rotationmap = [MetaRenderer.rotationMap[packetData.rotation][0], MetaRenderer.rotationMap[packetData.rotation][1], MetaRenderer.rotationMap[packetData.rotation][2], MetaRenderer.rotationMap[packetData.rotation][3], MetaRenderer.rotationMap[packetData.rotation][4], MetaRenderer.rotationMap[packetData.rotation][5]];
                let puts = [this.blockRotationToWorldRotation(packetData.put0), this.blockRotationToWorldRotation(packetData.put1), this.blockRotationToWorldRotation(packetData.put2), this.blockRotationToWorldRotation(packetData.put3), this.blockRotationToWorldRotation(packetData.put4), this.blockRotationToWorldRotation(packetData.put5)];
                MetaRenderer.invalidateModel({x: this.x, y: this.y, z: this.z}, packetData.block, packetData.textures, rotationmap, puts);
                sounds.wrench.setInBlock(this.x, this.y, this.z, 5);
                sounds.wrench.play();
            },
            gtmachine_sound: function(packetData, packetExtra, connectedClient) {
                packetData.sound.play();
            },
            gtmachine_soundStart: function(packetData, packetExtra, connectedClient) {
                packetData.sound.setLooping(true);
                packetData.sound.play();
            },
            gtmachine_soundEnd: function(packetData, packetExtra, connectedClient) {
                packetData.sound.stop();
            },
            gtmachine_discard: function(packetData, packetExtra, connectedClient) {
                let relative = PipeNetBuilder.getRelativeCoords(this.x, this.y, this.z, this.packetData.put);
                Particles.addParticle("steam", this.x + relative.x, this.y + relative.y, this.z + relative.z, 0, 0.5, 0);
                //packetData.sound.stop();
            },
            gtmachine_ui: function(packetData, packetExtra, connectedClient) {
                //this.ui = packetData.ui;
                //packetData.sound.stop();
            },
            gterror: function() {
                /*if(this.container.getGuiContent() != null) {
                    if(packetData) {
                       this.container.getGuiContent().elements["error"] = {type: "image", x: 1000 / 2 - bitmap.getWidth() / 2 + 150, y: UI.getScreenHeight() / 2 - bitmap.getHeight() / 2 + 101, bitmap: "bronze_error", scale: 3};
                    } else {
                        this.container.getGuiContent().elements["error"] = null;
                    }
                }*/
                let container = new UI.Container();
			    container.openAs(errorimage);
            }
            
        },
        containerEvents: {
            // события клиентского экземпляра контейнера, this не определен
            // эти события предназначены для редактирования содержимого окна
            eventName: function(container, window, windowContent, eventData) {
                // window и windowContent могут быть null
                // Чтобы отправить данные на сервер
                container.sendEvent("eventName", someData)
            }
        }
    }
});

TileEntity.getPrototype(BlockID.gtblockmachine).__energyLibInit = true;
TileEntity.getPrototype(BlockID.gtblockmachine).__Types = {};
TileEntity.getPrototype(BlockID.gtblockmachine).__Nets = {};

Logger.Log(TileEntity.getPrototype(BlockID.gtblockmachine).__Types, "xekror");
	
TileEntityRegistry.addEnergyTypeForId(BlockID.gtblockmachine, "liquid");
 





/*new UI.Window({
     location: {
          x: 0,
          y: 0,
          width: 1000,
          height: UI.getScreenHeight(),
      },
     params: {
          // стилизация (изменение стандартных текстур)
     },
     drawing: [{type: "bitmap", bitmap: "BronzeAlloySmelter", x: 1000 / 2 - bitmap.getWidth(), y: UI.getScreenHeight() / 2 - bitmap.getHeight(), width: bitmap.getWidth() * 2, height: bitmap.getHeight() * 2}],
     elements: {
       "close": {type: "closeButton", global: true, bitmap: "close", bitmap2: "slot", x: 1000 / 2 - bitmap.getWidth(), y: UI.getScreenHeight() / 2 - bitmap.getHeight(), scale: 2},
       "invSlot0": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 14, size: 36, index: 0, bitmap: "slot"},
   "invSlot1": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 36, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 14, size: 36, index: 1, bitmap: "slot"},
      "invSlot2": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 72, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 14, size: 36, index: 2, bitmap: "slot"},
     "invSlot3": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 108, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 14, size: 36, index: 3, bitmap: "slot"},
     "invSlot4": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 144, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 14, size: 36, index: 4, bitmap: "slot"},
     "invSlot5": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 180, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 14, size: 36, index: 5, bitmap: "slot"},
     "invSlot6": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 216, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 14, size: 36, index: 6, bitmap: "slot"},
     "invSlot7": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 252, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 14, size: 36, index: 7, bitmap: "slot"},
     "invSlot8": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 288, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 14, size: 36, index: 8, bitmap: "slot"},
     "invSlot9": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 20, size: 36, index: 9, bitmap: "slot"},
       "invSlot10": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 36, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 20, size: 36, index: 10, bitmap: "slot"},
   "invSlot11": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 72, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 20, size: 36, index: 11, bitmap: "slot"},
      "invSlot12": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 108, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 20, size: 36, index: 12, bitmap: "slot"},
     "invSlot13": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 144, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 20, size: 36, index: 13, bitmap: "slot"},
     "invSlot14": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 180, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 20, size: 36, index: 14, bitmap: "slot"},
     "invSlot15": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 216, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 20, size: 36, index: 15, bitmap: "slot"},
     "invSlot16": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 252, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 20, size: 36, index: 16, bitmap: "slot"},
     "invSlot17": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 288, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 20, size: 36, index: 17, bitmap: "slot"},
     "invSlot18": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 36 - 20, size: 36, index: 18, bitmap: "slot"},
    "invSlot19": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 36, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 36 - 20, size: 36, index: 19, bitmap: "slot"},
        "invSlot20": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 72, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 36 - 20, size: 36, index: 20, bitmap: "slot"},
   "invSlot21": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 108, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 36 - 20, size: 36, index: 21, bitmap: "slot"},
      "invSlot22": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 144, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 36 - 20, size: 36, index: 22, bitmap: "slot"},
     "invSlot23": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 180, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 36 - 20, size: 36, index: 23, bitmap: "slot"},
     "invSlot24": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 216, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 36 - 20, size: 36, index: 24, bitmap: "slot"},
     "invSlot25": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 252, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 36 - 20, size: 36, index: 25, bitmap: "slot"},
     "invSlot26": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 288, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 36 - 20, size: 36, index: 26, bitmap: "slot"},
     "invSlot27": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 36 - 36 - 20, size: 36, index: 27, bitmap: "slot"},
     "invSlot28": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 36, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 36 - 36 - 20, size: 36, index: 28, bitmap: "slot"},
    "invSlot29": {type: "invSlot", x:1000 / 2 - bitmap.getWidth() + 14 +
    72, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 36 - 36 - 20, size: 36, index: 29, bitmap: "slot"},
    "invSlot30": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 108, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 36 - 36 - 20, size: 36, index: 30, bitmap: "slot"},
   "invSlot31": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 144, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 36 - 36 - 20, size: 36, index: 31, bitmap: "slot"},
      "invSlot32": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 180, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 36 - 36 - 20, size: 36, index: 32, bitmap: "slot"},
     "invSlot33": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 216, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 36 - 36 - 20, size: 36, index: 33, bitmap: "slot"},
     "invSlot34": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 252, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 36 - 36 - 20, size: 36, index: 34, bitmap: "slot"},
     "invSlot35": {type: "invSlot", x: 1000 / 2 - bitmap.getWidth() + 14 + 288, y: UI.getScreenHeight() / 2 + bitmap.getHeight() - 36 - 36 - 36 - 36 - 20, size: 36, index: 35, bitmap: "slot"},
       "error": {type: "image", x: 890, y: 890, bitmap: "bronze_error", scale: 1},
       "input0": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 68, y: UI.getScreenHeight() / 2 - bitmap.getHeight() + 48, size: 36, bitmap: "slot", needClean: true, isTransparentBackground: true},
       "input1": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 104, y: 
UI.getScreenHeight() / 2 - bitmap.getHeight() + 48, size: 36, bitmap: "slot", needClean: true, isTransparentBackground: true},
    "scale": {type: "scale", x: 1000 / 2 - bitmap.getWidth() + 150, y: UI.getScreenHeight() / 2 - bitmap.getHeight() + 48, direction: 0, bitmap: "bronze_furnace_process", scale: 0 overlay: "текстура", overlayScale: число, overlayOffset: {x: число, y: число}},
        "output0": {type: "slot", x: 1000 / 2 - bitmap.getWidth() + 190, y: UI.getScreenHeight() / 2 - bitmap.getHeight() + 48, size: 36, bitmap: "slot", needClean: true, isTransparentBackground: true},
     },
}));*/




// file: recipe.js

RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["aluminium"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["americium"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["antimony"]);
//RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["arsenic"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["beryllium"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["bismuth"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["cadmium"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["calcium"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["cerium"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["cobalt"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["copper"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["chrome"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["gallium"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["gold"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["iridium"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["iron"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["lead"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["magnesium"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["manganese"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["chrome"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["gallium"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["gold"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["iridium"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["lithium"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["molybdenum"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["neodymium"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["nickel"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["niobium"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["palladium"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["platinum"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["potassium"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["silver"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["silicon"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["sodium"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["tin"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["thorium"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["tungsten"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["uranium"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["uranium235"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["vanadium"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["zinc"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["battery_alloy"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["bronze"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["wroughtiron"]);
RecipeDictionary.registerFormHandlingRecipes(MaterialDictionary.dict["red_alloy"]);

RecipeDictionary.registerAlloy(MaterialDictionary.dict["battery_alloy"]);
RecipeDictionary.registerAlloy(MaterialDictionary.dict["bronze"]);
RecipeDictionary.registerAlloy(MaterialDictionary.dict["red_alloy"]);

for(let i in ToolDictionary.materials) {
  RecipeDictionary.registerToolRecipe(ToolDictionary.materials[i]);
}

RecipeDictionary.registerBoilerFuel(MaterialDictionary.dict["coal"], MaterialDictionary.dict["dark_ash"]);
RecipeDictionary.registerBoilerFuel(MaterialDictionary.dict["lignite"], MaterialDictionary.dict["dark_ash"]);
/*varar copperdust, copperingot, tindust, tiningot, bronzedust, bronzeingot, irondust, ironingot, leaddust, leadingot, antimonydust, antimonyingot, batteryalloydust, batteryalloyingot, redalloyingot, redalloydust, copperplate, tinplate, bronzeplate, ironplate, leadplate, antimonyplate, batteryalloyplate, redalloyplate;
for(let i = 0; i < Object.keys(MaterialDictionary.dict).length; i++) {
    if(Object.keys(MaterialDictionary.dict)[i] == "copper") {
      copperingot = MaterialDictionary.firsts["ingot"] + i;
      copperdust = MaterialDictionary.firsts["dust"] + i;
      copperplate = MaterialDictionary.firsts["plate"] + i;
    }
    if(Object.keys(MaterialDictionary.dict)[i] == "iron") {
      ironingot = MaterialDictionary.firsts["ingot"] + i;
      irondust = MaterialDictionary.firsts["dust"] + i;
      ironplate = MaterialDictionary.firsts["plate"] + i;
    }
    if(Object.keys(MaterialDictionary.dict)[i] == "tin") {
       tiningot = MaterialDictionary.firsts["ingot"] + i;
       tindust = MaterialDictionary.firsts["dust"] + i;
       tinplate = MaterialDictionary.firsts["plate"] + i;
    }
    if(Object.keys(MaterialDictionary.dict)[i] == "bronze") {
       bronzeingot = MaterialDictionary.firsts["ingot"] + i;
       bronzedust = MaterialDictionary.firsts["dust"] + i;
       bronzeplate = MaterialDictionary.firsts["plate"] + i;
    }
    if(Object.keys(MaterialDictionary.dict)[i] == "lead") {
      leadingot = MaterialDictionary.firsts["ingot"] + i;
      leaddust = MaterialDictionary.firsts["dust"] + i;
      leadplate = MaterialDictionary.firsts["plate"] + i;
    }
    if(Object.keys(MaterialDictionary.dict)[i] == "antimony") {
       antimonyingot = MaterialDictionary.firsts["ingot"] + i;
       antimonydust = MaterialDictionary.firsts["dust"] + i;
       antimonyplate = MaterialDictionary.firsts["plate"] + i;
    }
    if(Object.keys(MaterialDictionary.dict)[i] == "redalloy") {
       redalloyingot = MaterialDictionary.firsts["ingot"] + i;
       redalloydust = MaterialDictionary.firsts["dust"] + i;
       redalloyplate = MaterialDictionary.firsts["plate"] + i;
    }
    if(Object.keys(MaterialDictionary.dict)[i] == "batteryalloy") {
       batteryalloyingot = MaterialDictionary.firsts["ingot"] + i;
       batteryalloydust = MaterialDictionary.firsts["dust"] + i;
       batteryalloyplate = MaterialDictionary.firsts["plate"] + i;
    }
}
    
RecipeDictionary.registerRecipe("alloy_smelter", {
  isSteam: true, //may is provided by steam machine
  tier: 1,
  recipe: {
   input0: {id: ItemID.gtmetaitem01, count: 1, data: antimonyingot},
   input1: {id: ItemID.gtmetaitem01, count: 4, data: leadingot},
output0: {id: ItemID.gtmetaitem01, count: 5, data: batteryalloyingot},
  },
  //in tick
  energy: 16,
  work_time: 256
});
RecipeDictionary.registerRecipe("alloy_smelter", {
  isSteam: true, //may is provided by steam machine
  tier: 1,
  recipe: {
   input0: {id: ItemID.gtmetaitem01, count: 3, data: copperingot},
   input1: {id: ItemID.gtmetaitem01, count: 1, data: tiningot},
output0: {id: ItemID.gtmetaitem01, count: 4, data: bronzeingot},
  },
  //in tick
  energy: 16,
  work_time: 256
});
RecipeDictionary.registerRecipe("alloy_smelter", {
  isSteam: true, //may is provided by steam machine
  tier: 1,
  recipe: {
   input0: {id: ItemID.gtmetaitem01, count: 1, data: copperingot},
   input1: {id: 331, count: 4, data: 0},
output0: {id: ItemID.gtmetaitem01, count: 4, data: redalloyingot},
  },
  //in tick
  energy: 16,
  work_time: 256
});

RecipeDictionary.registerRecipe("furnace", {
  isSteam: true, //may is provided by steam machine
  tier: 1,
  recipe: {
    input0: {id: ItemID.gtmetaitem01, count: 1, data: copperdust},
    output0: {id: ItemID.gtmetaitem01, count: 1, data: copperingot},
  },
  //in tick
  energy: 4,
  work_time: 256
});
RecipeDictionary.registerRecipe("furnace", {
  isSteam: true, //may is provided by steam machine
  tier: 1,
  recipe: {
    input0: {id: ItemID.gtmetaitem01, count: 1, data: bronzedust},
    output0: {id: ItemID.gtmetaitem01, count: 1, data: bronzeingot},
  },
  //in tick
  energy: 4,
  work_time: 256
});
RecipeDictionary.registerRecipe("furnace", {
  isSteam: true, //may is provided by steam machine
  tier: 1,
  recipe: {
    input0: {id: ItemID.gtmetaitem01, count: 1, data: tindust},
    output0: {id: ItemID.gtmetaitem01, count: 1, data: tiningot},
  },
  //in tick
  energy: 4,
  work_time: 256
});
RecipeDictionary.registerRecipe("furnace", {
  isSteam: true, //may is provided by steam machine
  tier: 1,
  recipe: {
    input0: {id: ItemID.gtmetaitem01, count: 1, data: irondust},
    output0: {id: ItemID.gtmetaitem01, count: 1, data: ironingot},
  },
   //in tick
  energy: 4,
  work_time: 256
});
RecipeDictionary.registerRecipe("furnace", {
  isSteam: true, //may is provided by steam machine
  tier: 1,
  recipe: {
    input0: {id: ItemID.gtmetaitem01, count: 1, data: antimonydust},
    output0: {id: ItemID.gtmetaitem01, count: 1, data: antimonyingot},
  },
  //in tick
  energy: 4,
  work_time: 256
});
RecipeDictionary.registerRecipe("furnace", {
  isSteam: true, //may is provided by steam machine
  tier: 1,
  recipe: {
    input0: {id: ItemID.gtmetaitem01, count: 1, data: leaddust},
    output0: {id: ItemID.gtmetaitem01, count: 1, data: leadingot},
  },
   //in tick
  energy: 4,
  work_time: 256
});
RecipeDictionary.registerRecipe("furnace", {
  isSteam: true, //may is provided by steam machine
  tier: 1,
  recipe: {
    input0: {id: ItemID.gtmetaitem01, count: 1, data: redalloydust},
    output0: {id: ItemID.gtmetaitem01, count: 1, data: redalloyingot},
  },
  //in tick
  energy: 4,
  work_time: 256
});
RecipeDictionary.registerRecipe("furnace", {
  isSteam: true, //may is provided by steam machine
  tier: 1,
  recipe: {
    input0: {id: ItemID.gtmetaitem01, count: 1, data: batteryalloydust},
    output0: {id: ItemID.gtmetaitem01, count: 1, data: batteryalloyingot},
  },
  //in tick
  energy: 4,
  work_time: 256
});

RecipeDictionary.registerRecipe("macerator", {
  isSteam: true, //may is provided by steam machine
  tier: 1,
  recipe: {
    input0: {id: ItemID.gtmetaitem01, count: 1, data: copperingot},
    output0: {id: ItemID.gtmetaitem01, count: 1, data: copperdust},
  },
  //in tick
  energy: 2,
  work_time: 800
});
RecipeDictionary.registerRecipe("macerator", {
  isSteam: true, //may is provided by steam machine
  tier: 1,
  recipe: {
    input0: {id: ItemID.gtmetaitem01, count: 1, data: bronzeingot},
    output0: {id: ItemID.gtmetaitem01, count: 1, data: bronzedust},
  },
  //in tick
  energy: 2,
  work_time: 800
});
RecipeDictionary.registerRecipe("macerator", {
  isSteam: true, //may is provided by steam machine
  tier: 1,
  recipe: {
    input0: {id: ItemID.gtmetaitem01, count: 1, data: copperingot},
    output0: {id: ItemID.gtmetaitem01, count: 1, data: copperdust},
  },
  //in tick
  energy: 2,
  work_time: 800
});
RecipeDictionary.registerRecipe("macerator", {
  isSteam: true, //may is provided by steam machine
  tier: 1,
  recipe: {
    input0: {id: ItemID.gtmetaitem01, count: 1, data: bronzeingot},
    output0: {id: ItemID.gtmetaitem01, count: 1, data: bronzedust},
  },
 //in tick
  energy: 2,
  work_time: 800
});
RecipeDictionary.registerRecipe("macerator", {
  isSteam: true, //may is provided by steam machine
  tier: 1,
  recipe: {
    input0: {id: ItemID.gtmetaitem01, count: 1, data: tiningot},
    output0: {id: ItemID.gtmetaitem01, count: 1, data: tindust},
  },
  //in tick
  energy: 2,
  work_time: 800
});
RecipeDictionary.registerRecipe("macerator", {
  isSteam: true, //may is provided by steam machine
  tier: 1,
  recipe: {
    input0: {id: ItemID.gtmetaitem01, count: 1, data: ironingot},
    output0: {id: ItemID.gtmetaitem01, count: 1, data: irondust},
  },
  //in tick
  energy: 2,
  work_time: 800
});
RecipeDictionary.registerRecipe("macerator", {
  isSteam: true, //may is provided by steam machine
  tier: 1,
  recipe: {
    input0: {id: ItemID.gtmetaitem01, count: 1, data: antimonyingot},
    output0: {id: ItemID.gtmetaitem01, count: 1, data: antimonydust},
  },
  //in tick
  energy: 2,
  work_time: 800
});
RecipeDictionary.registerRecipe("macerator", {
  isSteam: true, //may is provided by steam machine
  tier: 1,
  recipe: {
    input0: {id: ItemID.gtmetaitem01, count: 1, data: leadingot},
    output0: {id: ItemID.gtmetaitem01, count: 1, data: leaddust},
  },
  //in tick
  energy: 2,
  work_time: 800
});
RecipeDictionary.registerRecipe("macerator", {
  isSteam: true, //may is provided by steam machine
  tier: 1,
  recipe: {
    input0: {id: ItemID.gtmetaitem01, count: 1, data: redalloyingot},
    output0: {id: ItemID.gtmetaitem01, count: 1, data: redalloydust},
  },
  //in tick
  energy: 2,
  work_time: 800
});
RecipeDictionary.registerRecipe("macerator", {
  isSteam: true, //may is provided by steam machine
  tier: 1,
  recipe: {
    input0: {id: ItemID.gtmetaitem01, count: 1, data: batteryalloyingot},
    output0: {id: ItemID.gtmetaitem01, count: 1, data: batteryalloydust},
  },
  //in tick
  energy: 2,
  work_time: 800
});

RecipeDictionary.registerRecipe("hammer", {
  isSteam: true, //may is provided by steam machine
  tier: 1,
  recipe: {
    input0: {id: ItemID.gtmetaitem01, count: 1, data: copperingot},
    output0: {id: ItemID.gtmetaitem01, count: 1, data: copperplate},
  },
  steam: 1, //in tick
  energy: 1,
  work_time: 40
});
RecipeDictionary.registerRecipe("hammer", {
  isSteam: true, //may is provided by steam machine
  tier: 1,
  recipe: {
    input0: {id: ItemID.gtmetaitem01, count: 1, data: bronzeingot},
    output0: {id: ItemID.gtmetaitem01, count: 1, data: bronzeplate},
  },
  steam: 1, //in tick
  energy: 1,
  work_time: 40
});
RecipeDictionary.registerRecipe("hammer", {
  isSteam: true, //may is provided by steam machine
  tier: 1,
  recipe: {
    input0: {id: ItemID.gtmetaitem01, count: 1, data: tiningot},
    output0: {id: ItemID.gtmetaitem01, count: 1, data: tinplate},
  },
  steam: 1, //in tick
  energy: 1,
  work_time: 40
});
RecipeDictionary.registerRecipe("hammer", {
  isSteam: true, //may is provided by steam machine
  tier: 1,
  recipe: {
    input0: {id: ItemID.gtmetaitem01, count: 1, data: ironingot},
    output0: {id: ItemID.gtmetaitem01, count: 1, data: ironplate},
  },
  steam: 1, //in tick
  energy: 1,
  work_time: 40
});
RecipeDictionary.registerRecipe("hammer", {
  isSteam: true, //may is provided by steam machine
  tier: 1,
  recipe: {
    input0: {id: ItemID.gtmetaitem01, count: 1, data: antimonyingot},
    output0: {id: ItemID.gtmetaitem01, count: 1, data: antimonyplate},
  },
  steam: 1, //in tick
  energy: 1,
  work_time: 40
});
RecipeDictionary.registerRecipe("hammer", {
  isSteam: true, //may is provided by steam machine
  tier: 1,
  recipe: {
    input0: {id: ItemID.gtmetaitem01, count: 1, data: leadingot},
    output0: {id: ItemID.gtmetaitem01, count: 1, data: leadplate},
  },
  steam: 1, //in tick
  energy: 1,
  work_time: 40
});
RecipeDictionary.registerRecipe("hammer", {
  isSteam: true, //may is provided by steam machine
  tier: 1,
  recipe: {
    input0: {id: ItemID.gtmetaitem01, count: 1, data: redalloyingot},
    output0: {id: ItemID.gtmetaitem01, count: 1, data: redalloyplate},
  },
  steam: 1, //in tick
  energy: 1,
  work_time: 40
});
RecipeDictionary.registerRecipe("hammer", {
  isSteam: true, //may is provided by steam machine
  tier: 1,
  recipe: {
    input0: {id: ItemID.gtmetaitem01, count: 1, data: batteryalloyingot},
    output0: {id: ItemID.gtmetaitem01, count: 1, data: batteryalloyplate},
  },
  steam: 1, //in tick
  energy: 1,
  work_time: 40
});

var hammerindex;
var fileindex;
var axeindex;
var hoeindex;
var pickaxeindex;
var shovelindex;
var swordindex;
var mortarindex;
var screwdriverindex;
var wirecutterindex;
var wrenchindex;
for(let i = 0; i < ToolDictionary.types.length; i++) {
if(ToolDictionary.types[i].name == "axe") {
     axeindex = i;
  }
if(ToolDictionary.types[i].name == "hoe") {
   hoeindex = i;
}
if(ToolDictionary.types[i].name == "pickaxe") {
     pickaxeindex = i;
  }
if(ToolDictionary.types[i].name == "shovel") {
     shovelindex = i;
  }
if(ToolDictionary.types[i].name == "sword") {
    swordindex = i;
  }
if(ToolDictionary.types[i].name == "hammer") {
     hammerindex = i;
  }
if(ToolDictionary.types[i].name == "file") {
    fileindex = i;
  }
if(ToolDictionary.types[i].name == "mortar") {
    mortarindex = i;
  }
if(ToolDictionary.types[i].name == "screwdriver") {
     screwdriverindex = i;
  }
if(ToolDictionary.types[i].name == "wirecutter") {
    wirecutterindex = i;
  }
  if(ToolDictionary.types[i].name == "wrench") {
    wrenchindex = i;
  }
}

for(let i = 0; i < 38; i++) {
  if(i % 2 == 0) {
    let e = i;
  Item.registerNameOverrideFunction(BlockID["gtblockores" + e], function(item){
  for(let j = 0; j < Object.keys(OreDictionary.invdata[BlockID["gtblockores" + e]]).length; j++) {
    for(let l = 0; l < OreDictionary.stones.length; l++) {
    if(item.data == j * OreDictionary.stones.length + l) {
    return OreDictionary.invdata[BlockID["gtblockores" + e]][j].name + " ore";
  }
    }
  }
  });
  Block.registerDropFunction(BlockID["gtblockores" + e], function(coords, blockID, blockData, level){
  for(let j = 0; j < Object.keys(OreDictionary.invdata[BlockID["gtblockores" + e]]).length; j++) {
    if(level >= OreDictionary.invdata[BlockID["gtblockores" + e]][j].level) {
      for(let l = 0; l < OreDictionary.stones.length; l++) {
  if(blockData == j * OreDictionary.stones.length + l) {
    if(Player.getCarriedItem().id == ItemID.gtmetatool01 & Player.getCarriedItem().data == hammerindex) {
 
    for(let i = MaterialDictionary.firsts["crushedore"]; i < MaterialDictionary.data[ItemID.gtmetaitem01].length; i++) {
      if(MaterialDictionary.data[ItemID.gtmetaitem01][i].material.name == OreDictionary.invdata[BlockID["gtblockores" + e]][j].name) {
        return [[ItemID.gtmetaitem01, 1, i]];
      }
    }         
      
    } else {
          return [[blockID, 1, blockData]];
        }
  }
}
} else {
  
}
}
});
  } else {
    let e = i;
  Item.registerNameOverrideFunction(BlockID["gtblockores" + e], function(item){
    for(let j = 0; j < Object.keys(OreDictionary.invdat[BlockID["gtblockores" + e]]).length; j++) {
      for(let l = 0; l < OreDictionary.stones.length; l++) {
  if(item.data == j * OreDictionary.stones.length + l) {
    return "Small " + OreDictionary.invdat[BlockID["gtblockores" + e]][j].name + " ore";
    }
      }
    }
});
Block.registerDropFunction(BlockID["gtblockores" + e], function(coords, blockID, blockData, level){
  for(let j = 0; j < Object.keys(OreDictionary.invdat[BlockID["gtblockores" + e]]).length; j++) {
    if(level >= OreDictionary.invdat[BlockID["gtblockores" + e]][j].level) {
      for(let l = 0; l < OreDictionary.stones.length; l++) {
  if(blockData == j * OreDictionary.stones.length + l) {
    for(let i = MaterialDictionary.firsts["crushedore"]; i < MaterialDictionary.data[ItemID.gtmetaitem01].length; i++) {
      if(MaterialDictionary.data[ItemID.gtmetaitem01][i].material.name == OreDictionary.invdat[BlockID["gtblockores" + e]][j].name) {
        return [[ItemID.gtmetaitem01, 1, i]];
      }
    }
}
}
} else {
  
}
}
});
}
}

for(let i = 0; i < MaterialDictionary.data[ItemID.gtmetaitem01].length; i++) {
Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][i].material.name, "fucked");
Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][i].form, "gt");
}

let ioffset1 = 0;
let ioffset2 = 0;
for(let i = 0; i < Object.keys(MaterialDictionary.dict).length; i++) {
  let isoffset = false;
let isplateoffset = false;
  let plate = 0;
  for(let j = 0; j < MaterialDictionary.types[ItemID.gtmetaitem01]["plate"].length; j++) {
  if(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]].type == MaterialDictionary.types[ItemID.gtmetaitem01]["plate"][j]) {
    plate = MaterialDictionary.firsts["plate"] + i - ioffset1;
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][plate].material.name, "quake");
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][plate].form, "gregtech");
isplateoffset = true;
  } else {
  }
  }

let isingotoffset = false;
  let ingot = 0;
  for(let j = 0; j < MaterialDictionary.types[ItemID.gtmetaitem01]["ingot"].length; j++){
  if(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]].type == MaterialDictionary.types[ItemID.gtmetaitem01]["ingot"][j]) {
    ingot = MaterialDictionary.firsts["ingot"] + i - ioffset2;
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][ingot].material.name, "quake");
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][ingot].form, "gregtech");
isingotoffset = true;
  } else {
  }
  }
  if(!isplateoffset) {
    ioffset1 += 1;
  }
  if(!isingotoffset) {
    ioffset2 += 1;
  }
  
  if(isplateoffset & isingotoffset) {
    isoffset = true;
  }
  if(!isoffset) {
    continue;
  }else {
    Logger.Log("true", "gregtech");
  }
let e = i;
Logger.Log(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]].type, "gtx");
Logger.Log(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]].name, "rtx");
Recipes.addShaped({id: ItemID.gtmetaitem01, count: 1, data: plate}, ["h", "x", "x"], ['h', ItemID.gtmetatool01, hammerindex, 'x', ItemID.gtmetaitem01, ingot], function(api, field, result) {
  Logger.Log(e, "zips");
   for (let y in field) {
				if (field[y].id == ItemID.gtmetatool01 & field[y].data == hammerindex) {
ToolDictionary.damageTool(field[y]);} else {
  field[y].count -= 1;
}}
  });
}

Logger.Log(MaterialDictionary.firsts["plate"], "хуй у качков маленькие");
Logger.Log(MaterialDictionary.firsts["rod"], "хуй у качков маленькие");
Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][MaterialDictionary.firsts["rod"]].material.name, "quake");
Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][MaterialDictionary.firsts["rod"]].form, "gregtech");
Logger.Log(MaterialDictionary.firsts["longrod"], "хуй у качков маленькие");
iоffset1 = 0;
ioffset2 = 0;
for(let i = 0; i < Object.keys(MaterialDictionary.dict).length; i++) {
  let isoffset = false;
let isrodoffset = false;
  let rod = 0;
  for(let j = 0; j < MaterialDictionary.types[ItemID.gtmetaitem01]["rod"].length; j++){
  if(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]].type == MaterialDictionary.types[ItemID.gtmetaitem01]["rod"][j]) {
    rod = MaterialDictionary.firsts["rod"] + i - ioffset1;
    Logger.Log(rod);
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][rod].material.name, "q");
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][rod].form, "gregtech");
isrodoffset = true;
  } else {
  }
  }
  
let isingotoffset = false;
let ingot = 0;
  for(let j = 0; j < MaterialDictionary.types[ItemID.gtmetaitem01]["ingot"].length; j++){
  if(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]].type == MaterialDictionary.types[ItemID.gtmetaitem01]["ingot"][j]) {
    ingot = MaterialDictionary.firsts["ingot"] + i - ioffset2;
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][ingot].material.name, "quake");
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][ingot].form, "gregtech");
isingotoffset = true;
  } else {
  }
  }
  if(!isrodoffset) {
    ioffset1 += 1;
  }
  if(!isingotoffset) {
    ioffset2 += 1;
  }
  if(isrodoffset & isingotoffset) {
    isoffset = true;
  }
  if(!isoffset) {
    continue;
  }else {
    Logger.Log("true", "gregtech");
  }
  let e = i;
Recipes.addShaped({id: ItemID.gtmetaitem01, count: 1, data: rod}, ["f", "x"], ['f', ItemID.gtmetatool01, fileindex,'x', ItemID.gtmetaitem01, ingot], function(api, field, result) {
   for (let y in field){
  if(field[y].id == ItemID.gtmetatool01 & field[y].data == fileindex) {
ToolDictionary.damageTool(field[y]);
  } else {
field[y].count -= 1;
}
  }
});
}

ioffset1 = 0;
ioffset2 = 0;
for(let i = 0; i < Object.keys(MaterialDictionary.dict).length; i++) {
  let isoffset = false;
let isfoiloffset = false;
  let foil = 0;
  for(let j = 0; j < MaterialDictionary.types[ItemID.gtmetaitem01]["foil"].length; j++){
  if(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]].type == MaterialDictionary.types[ItemID.gtmetaitem01]["foil"][j]) {
    foil = MaterialDictionary.firsts["foil"] + i - ioffset1;
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][foil].material.name, "quake");
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][foil].form, "gregtech");
isfoiloffset = true;
  } else {
  }
  }
  
let isplateoffset = false;
let plate = 0;
  for(let j = 0; j < MaterialDictionary.types[ItemID.gtmetaitem01]["plate"].length; j++){
  if(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]].type == MaterialDictionary.types[ItemID.gtmetaitem01]["plate"][j]) {
    plate = MaterialDictionary.firsts["plate"] + i - ioffset2;
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][plate].material.name, "quake");
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][plate].form, "gregtech");
isplateoffset = true;
  } else {
  }
  }
  if(!isfoiloffset) {
    ioffset1 += 1;
  }
  if(!isplateoffset) {
    ioffset2 += 1;
  }
  if(isplateoffset & isfoiloffset) {
    isoffset = true;
  }
  if(!isoffset) {
    continue;
  }else {
    Logger.Log("true", "gregtech");
  }
  let e = i;
Recipes.addShaped({id: ItemID.gtmetaitem01, count: 2, data: foil}, ["hp"], ['h', ItemID.gtmetatool01, hammerindex, 'p', ItemID.gtmetaitem01, plate], function(api, field, result) {
   for (let y in field){
  if(field[y].id == ItemID.gtmetatool01 & field[y].data == hammerindex) {
ToolDictionary.damageTool(field[y]);
  } else {
field[y].count -= 1;
}
  }
});
}


ioffset1 = 0;
ioffset2 = 0;
for(let i = 0; i < Object.keys(MaterialDictionary.dict).length; i++) {
  let isoffset = false;
let isframeoffset = false;
  let framebox = 0;
  for(let j = 0; j < MaterialDictionary.types[BlockID.gtmetamaterial01]["framebox"].length; j++){
  if(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]].type == MaterialDictionary.types[BlockID.gtmetamaterial01]["framebox"][j]) {
    framebox = MaterialDictionary.firsts["framebox"] + i - ioffset1;
    Logger.Log(MaterialDictionary.data[BlockID.gtmetamaterial01][framebox].material.name, "quake");
    Logger.Log(MaterialDictionary.data[BlockID.gtmetamaterial01][framebox].form, "gregtech");
isframeoffset = true;
  } else {
  }
  }

let isrodoffset = false;
  let rod = 0;
  for(let j = 0; j < MaterialDictionary.types[ItemID.gtmetaitem01]["rod"].length; j++){
  if(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]].type == MaterialDictionary.types[ItemID.gtmetaitem01]["rod"][j]) {
    rod = MaterialDictionary.firsts["rod"] + i - ioffset2;
    Logger.Log(ioffset2, "tetramethyltin");
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][rod].material.name, "pentacarbonyliron");
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][rod].form, "gregtech");
    isrodoffset = true;
  } else {
  }
  }
  if(!isframeoffset) {
    ioffset1 += 1;
  }
  if(!isrodoffset) {
    ioffset2 += 1;
  }
  if(isframeoffset & isrodoffset) {
    isoffset = true;
  }
  if(!isoffset) {
    continue;
  }else {
    Logger.Log("true", "gregtech");
  }
let e = i;
Recipes.addShaped({id: BlockID.gtmetamaterial01, count: 2, data: framebox}, ["rrr","rwr", "rrr"], ['w', ItemID.gtmetatool01, wrenchindex, 'r', ItemID.gtmetaitem01, rod], function(api, field, result) {
  Logger.Log(e, "zips");
   for (let y in field) {
				if (field[y].id == ItemID.gtmetatool01 & field[y].data == wrenchindex) {
ToolDictionary.damageTool(field[y]);} else {
  field[y].count -= 1;
}}
  });
}


ioffset1 = 0;
ioffset2 = 0;
for(let i = 0; i < Object.keys(MaterialDictionary.dict).length; i++) {
  let isoffset = false;
let isfoiloffset = false;
  let foil = 0;
  for(let j = 0; j < MaterialDictionary.types[ItemID.gtmetaitem01]["foil"].length; j++){
  if(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]].type == MaterialDictionary.types[ItemID.gtmetaitem01]["foil"][j]) {
    foil = MaterialDictionary.firsts["foil"] + i - ioffset1;
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][foil].material.name, "quake");
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][foil].form, "gregtech");
isfoiloffset = true;
  } else {
  }
  }
  
let isfinewireoffset = false;
let finewire = 0;
  for(let j = 0; j < MaterialDictionary.types[ItemID.gtmetaitem01]["finewire"].length; j++){
  if(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]].type == MaterialDictionary.types[ItemID.gtmetaitem01]["finewire"][j]) {
    finewire = MaterialDictionary.firsts["finewire"] + i - ioffset2;
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][finewire].material.name, "quake");
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][finewire].form, "gregtech");
isfinewireoffset = true;
  } else {
  }
  }
  if(!isfoiloffset) {
    ioffset1 += 1;
  }
  if(!isfinewireoffset) {
    ioffset2 += 1;
  }
  if(isfoiloffset & isfinewireoffset) {
    isoffset = true;
  }
  if(!isoffset) {
    continue;
  }else {
    Logger.Log("true", "gregtech");
  }
  let e = i;
Recipes.addShaped({id: ItemID.gtmetaitem01, count: 1, data: finewire}, ["wp"], ['w', ItemID.gtmetatool01, wirecutterindex, 'p', ItemID.gtmetaitem01, foil], function(api, field, result) {
   for (let y in field){
  if(field[y].id == ItemID.gtmetatool01 & field[y].data == wirecutterindex) {
ToolDictionary.damageTool(field[y]);
  } else {
field[y].count -= 1;
}
  }
});
}

ioffset1 = 0;
ioffset2 = 0;
for(let i = 0; i < Object.keys(MaterialDictionary.dict).length; i++) {
let isoffset = false;
let isdustoffset = false;
let dust = 0;
  for(let j = 0; j < MaterialDictionary.types[ItemID.gtmetaitem01]["dust"].length; j++){
  if(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]].type == MaterialDictionary.types[ItemID.gtmetaitem01]["dust"][j]) {
    dust = MaterialDictionary.firsts["dust"] + i - ioffset1;
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][dust].material.name, "quake");
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][dust].form, "gregtech");
isdustoffset = true;
  } else {
  }
  }
  
  let issmallpiledustoffset = false;
  let smallpiledust = 0;
  for(let j = 0; j < MaterialDictionary.types[ItemID.gtmetaitem01]["smallpiledust"].length; j++){
  if(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]].type == MaterialDictionary.types[ItemID.gtmetaitem01]["smallpiledust"][j]) {
    smallpiledust = MaterialDictionary.firsts["smallpiledust"] + i - ioffset2;
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][smallpiledust].material.name, "quake");
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][smallpiledust].form, "gregtech");
issmallpiledustoffset = true;
  } else {
  }
  }
  if(!isdustoffset) {
    ioffset1 += 1;
  }
  if(!issmallpiledustoffset) {
    ioffset2 += 1;
  }
  if(isdustoffset & issmallpiledustoffset) {
   isoffset = true; 
  }
  if(!isoffset) {
    continue;
  } else {
    Logger.Log("true", "gregtech");
  }
  
let e = i;
Recipes.addShaped({id: ItemID.gtmetaitem01, count: 1, data: dust}, ["xx", "xx"], ['x', ItemID.gtmetaitem01, smallpiledust], function(api, field, result) {
for (let y in field){
field[y].count -= 1;
  }
  }
);
}

ioffset1 = 0;
ioffset2 = 0;
for(let i = 0; i < Object.keys(MaterialDictionary.dict).length; i++) {
  let isoffset = false;
let isdustoffset = false;
  let dust = 0;
  for(let j = 0; j < MaterialDictionary.types[ItemID.gtmetaitem01]["dust"].length; j++){
  if(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]].type == MaterialDictionary.types[ItemID.gtmetaitem01]["dust"][j]) {
    dust = MaterialDictionary.firsts["dust"] + i - ioffset1;
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][dust].material.name, "quake");
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][dust].form, "gregtech");
isdustoffset = true;
  } else {
  }
  }

let istinypiledustoffset = false;
let tinypiledust = 0;
  for(let j = 0; j < MaterialDictionary.types[ItemID.gtmetaitem01]["tinypiledust"].length; j++){
  if(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]].type == MaterialDictionary.types[ItemID.gtmetaitem01]["tinypiledust"][j]) {
    tinypiledust = MaterialDictionary.firsts["tinypiledust"] + i - ioffset2;
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][tinypiledust].material.name, "quake");
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][tinypiledust].form, "gregtech");
istinypiledustoffset = true;
  } else {
  }
  }
  if(!isdustoffset) {
    ioffset1 += 1;
  }
  if(!istinypiledustoffset) {
    ioffset2 += 1;
  }
  if(isdustoffset & istinypiledustoffset) {
    isoffset = true;
  }
  if(!isoffset) {
    continue;
  }else {
    Logger.Log("true", "gregtech");
  }
let e = i;
Recipes.addShaped({id: ItemID.gtmetaitem01, count: 1, data: dust}, ["xxx", "xxx", "xxx"], ['x', ItemID.gtmetaitem01, tinypiledust], function(api, field, result) {
   for (let y in field){
field[y].count -= 1;
  }
  });
}

ioffset1 = 0;
ioffset2 = 0;
for(let i = 0; i < Object.keys(MaterialDictionary.dict).length; i++) {
let isoffset = false;
let isdustoffset = false;
let dust = 0;
  for(let j = 0; j < MaterialDictionary.types[ItemID.gtmetaitem01]["dust"].length; j++){
  if(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]].type == MaterialDictionary.types[ItemID.gtmetaitem01]["dust"][j]) {
    dust = MaterialDictionary.firsts["dust"] + i - ioffset1;
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][dust].material.name, "quake");
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][dust].form, "gregtech");
isdustoffset = true;
  } else {
  }
  }
  
  let isingotoffset = false;
  let ingot = 0;
  for(let j = 0; j < MaterialDictionary.types[ItemID.gtmetaitem01]["ingot"].length; j++){
      if(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]].type == MaterialDictionary.types[ItemID.gtmetaitem01]["ingot"][j]) {
    ingot = MaterialDictionary.firsts["ingot"] + i - ioffset2;
   Logger.Log(MaterialDictionary.firsts["ingot"], "cathy");
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][ingot].material.name, "quake");
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][ingot].form, "gregtech");
isingotoffset = true;
  } else {
  }
  }
  if(!isdustoffset) {
    ioffset1 += 1;
  }
  if(!isingotoffset) {
    ioffset2 += 1;
  }
  if(isingotoffset & isdustoffset) {
    isoffset = true;
  }
  
  if(!isoffset) {
    continue;
  } else {
    Logger.Log("true", "gregtech");
  }
  
let e = i;
Recipes.addShapeless({id: ItemID.gtmetaitem01, count: 1, data: dust}, [{id: ItemID.gtmetatool01, data: mortarindex}, {id: ItemID.gtmetaitem01, data: ingot}], function(api, field, result){ 
for (let y in field){
if(field[y].id == ItemID.gtmetatool01 & field[y].data == mortarindex) {
ToolDictionary.damageTool(field[y]);
  } else {
field[y].count -= 1;
}
  }
});
}


/*for(let i = 0; i < Object.keys(ToolDictionary.material).length; i++) {
  let isoffset = false;
  let ingot = 0;
  for(let j = 0; j < MaterialDictionary.types[ItemID.gtmetaitem01]["ingot"].length; j++){
  if(ToolDictionary.materials[Object.keys(ToolDictionary.materials)[i]].type == MaterialDictionary.types[ItemID.gtmetaitem01]["ingot"][j]) {
    ingot = MaterialDictionary.firsts["ingot"] + i - ioffset;
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][ingot].material.name, "quake");
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][ingot].form, "gregtech");
isoffset = true;
  } else {
  }
  }
  if(!isoffset) {
    ioffset += 1;
    continue;
  } else {
    Logger.Log("true", "gregtech");
  }
  
let e = i;

  Recipes.addShaped({id: ItemID.gtmetatool01, count: 1, data: hammerindex}, ["xx ", "xxs", "xx "], ['x', ItemID.gtmetaitem01, ingot, 's', 280, -1], function(api, field, result) {
   ToolDictionary.upgradeTool(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[e]], result);
for (let y in field){
field[y].count -= 1;
  }
  });
}

ioffset1 = 0;
for(let i = 0; i < Object.keys(MaterialDictionary.dict).length; i++) {
  let is = false;
  for(let j = 0; j < Object.keys(ToolDictionary.materials).length; j++) {
    if(ToolDictionary.materials[Object.keys(ToolDictionary.materials)[j]] == MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]]) {
      is = true;
    }
  }
  if(!is) {
    continue;
  }
  
  let isoffset = false;
  let ingot = 0;
  for(let j = 0; j < MaterialDictionary.types[ItemID.gtmetaitem01]["ingot"].length; j++){
      if(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]].type == MaterialDictionary.types[ItemID.gtmetaitem01]["ingot"][j]) {
    ingot = MaterialDictionary.firsts["ingot"] + i - ioffset1;
    Logger.Log(MaterialDictionary.firsts["ingot"], "cathy"); 
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][ingot].material.name, "quake");
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][ingot].form, "gregtech");
isoffset = true;
  } else {
  }
  }
  
  if(!isoffset) {
    ioffset1 += 1;
    continue;
  } else {
    Logger.Log("true", "gregtech");
  }
  
let e = i;
Recipes.addShaped({id: ItemID.gtmetatool01, count: 1, data: hammerindex}, ["xx ", "xxs", "xx "], ['x', ItemID.gtmetaitem01, ingot, 's', 280, -1], function(api, field, result) {
   ToolDictionary.upgradeTool(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[e]], result);
for (let y in field){
field[y].count -= 1;
  }
  });
}

ioffset1 = 0;
for(let i = 0; i < Object.keys(MaterialDictionary.dict).length; i++) {
let is = false;
  for(let j = 0; j < Object.keys(ToolDictionary.materials).length; j++) {
    if(ToolDictionary.materials[Object.keys(ToolDictionary.materials)[j]] == MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]]) {
      is = true;
    }
  }
  if(!is) {
    continue;
  }
  
  let isoffset = false;
  let plate = 0;
for(let j = 0; j < MaterialDictionary.types[ItemID.gtmetaitem01]["plate"].length; j++){
      if(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]].type == MaterialDictionary.types[ItemID.gtmetaitem01]["plate"][j]) {
    plate = MaterialDictionary.firsts["plate"] + i - ioffset1;
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][plate].material.name, "quake");
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][plate].form, "gregtech");
isoffset = true;
  } else {
  }
  }
  if(!isoffset) {
    ioffset1 += 1;
    continue;
  } else {
    Logger.Log("true", "gregtech");
  }
  
let e = i;
Recipes.addShaped({id: ItemID.gtmetatool01, count: 1, data: fileindex}, ["x", "x", "s"], ['x', ItemID.gtmetaitem01, plate, 's', 280, -1], function(api, field, result) {
   ToolDictionary.upgradeTool(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[e]], result);
for (let y in field){
field[y].count -= 1;
  }
});
}

ioffset1 = 0;
for(let i = 0; i < Object.keys(MaterialDictionary.dict).length; i++) {
  let is = false;
  for(let j = 0; j < Object.keys(ToolDictionary.materials).length; j++) {
    if(ToolDictionary.materials[Object.keys(ToolDictionary.materials)[j]] == MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]]) {
      is = true;
    }
  }
  if(!is) {
    continue;
  }
  
  let isoffset = false;
  let ingot = 0;
for(let j = 0; j < MaterialDictionary.types[ItemID.gtmetaitem01]["ingot"].length; j++){
      if(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]].type == MaterialDictionary.types[ItemID.gtmetaitem01]["ingot"][j]) {
    ingot = MaterialDictionary.firsts["ingot"] + i - ioffset1;
    Logger.Log(MaterialDictionary.firsts["ingot"], "cathy"); 
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][ingot].material.name, "quake");
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][ingot].form, "gregtech");
isoffset = true;
  } else {
  }
  }
  if(!isoffset) {
    ioffset1 += 1;
    continue;
  } else {
    Logger.Log("true", "gregtech");
  }
  
let e = i;
Recipes.addShaped({id: ItemID.gtmetatool01, count: 1, data: mortarindex}, [" i ", "sis", "sss"], ['i', ItemID.gtmetaitem01, ingot, 's', 1, -1], function(api, field, result) {
   ToolDictionary.upgradeTool(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[e]], result);
for (let y in field){
field[y].count -= 1;
  }
});
}

ioffset1 = 0;
for(let i = 0; i < Object.keys(MaterialDictionary.dict).length; i++) {
  let is = false;
  for(let j = 0; j < Object.keys(ToolDictionary.materials).length; j++) {
    if(ToolDictionary.materials[Object.keys(ToolDictionary.materials)[j]] == MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]]) {
      is = true;
    }
  }
  if(!is) {
    continue;
  }
  
  let isoffset = false;
  let rod = 0;
  for(let j = 0; j < MaterialDictionary.types[ItemID.gtmetaitem01]["rod"].length; j++){
      if(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]].type == MaterialDictionary.types[ItemID.gtmetaitem01]["rod"][j]) {
    rod = MaterialDictionary.firsts["rod"] + i - ioffset1;
    Logger.Log(MaterialDictionary.firsts["rod"], "cathy"); 
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][rod].material.name, "quake");
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][rod].form, "gregtech");
isoffset = true;
  } else {
  }
  }
  if(!isoffset) {
    ioffset1 += 1;
    continue;
  } else {
    Logger.Log("true", "gregtech");
  }
  let e = i;
Recipes.addShaped({id: ItemID.gtmetatool01, count: 1, data: screwdriverindex}, [" fr", " rh", "s  "], ['f', ItemID.gtmetatool01, fileindex, 'h', ItemID.gtmetatool01, hammerindex, 'r', ItemID.gtmetaitem01, rod, 's', 280, -1], function(api, field, result) {
   ToolDictionary.upgradeTool(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[e]], result);
for (let y in field){
  if(field[y].id == ItemID.gtmetatool01 & field[y].data == fileindex) {
ToolDictionary.damageTool(field[y]);
  } else if(field[y].id == ItemID.gtmetatool01 & field[y].data == hammerindex) {
ToolDictionary.damageTool(field[y]);
  } else {
field[y].count -= 1;
}
  }
});
}

ioffset1 = 0;
for(let i = 0; i < Object.keys(MaterialDictionary.dict).length; i++) {
  let is = false;
  for(let j = 0; j < Object.keys(ToolDictionary.materials).length; j++) {
    if(ToolDictionary.materials[Object.keys(ToolDictionary.materials)[j]] == MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]]) {
      is = true;
    }
  }
  if(!is) {
    continue;
  }
  
  let isoffset = false;
  let ingot = 0;
  for(let j = 0; j < MaterialDictionary.types[ItemID.gtmetaitem01]["ingot"].length; j++){
      if(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]].type == MaterialDictionary.types[ItemID.gtmetaitem01]["ingot"][j]) {
    ingot = MaterialDictionary.firsts["ingot"] + i - ioffset1;
    Logger.Log(MaterialDictionary.firsts["ingot"], "cathy"); 
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][ingot].material.name, "quake");
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][ingot].form, "gregtech");
isoffset = true;
  } else {
  }
  }
  if(!isoffset) {
    ioffset1 += 1;
    continue;
  } else {
    Logger.Log("true", "gregtech");
  }
  let e = i;
Recipes.addShaped({id: ItemID.gtmetatool01, count: 1, data: wrenchindex}, ["ihi", "iii", " i "], ['h', ItemID.gtmetatool01, hammerindex, 'i', ItemID.gtmetaitem01, ingot], function(api, field, result) {
   ToolDictionary.upgradeTool(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[e]], result);
for (let y in field){
  if(field[y].id == ItemID.gtmetatool01 & field[y].data == fileindex) {
ToolDictionary.damageTool(field[y]);
  } else if(field[y].id == ItemID.gtmetatool01 & field[y].data == hammerindex) {
ToolDictionary.damageTool(field[y]);
  } else {
field[y].count -= 1;
}
  }
});
}

ioffset1 = 0;
ioffset2 = 0;
for(let i = 0; i < Object.keys(MaterialDictionary.dict).length; i++) {
let is = false;
  for(let j = 0; j < Object.keys(ToolDictionary.materials).length; j++) {
    if(ToolDictionary.materials[Object.keys(ToolDictionary.materials)[j]] == MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]]) {
      is = true;
    }
  }
  if(!is) {
    continue;
  }

let isoffset = false;
let isplateoffset = false;
let plate = 0;
for(let j = 0; j < MaterialDictionary.types[ItemID.gtmetaitem01]["plate"].length; j++){
      if(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]].type == MaterialDictionary.types[ItemID.gtmetaitem01]["plate"][j]) {
    plate = MaterialDictionary.firsts["plate"] + i - ioffset1;
    Logger.Log(MaterialDictionary.firsts["plate"], "cathy"); 
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][plate].material.name, "quake");
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][plate].form, "gregtech");
isplateoffset = true;
  } else {
  }
}

let isrodoffset = false;
let rod = 0;
for(let j = 0; j < MaterialDictionary.types[ItemID.gtmetaitem01]["rod"].length; j++){
      if(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]].type == MaterialDictionary.types[ItemID.gtmetaitem01]["rod"][j]) {
    rod = MaterialDictionary.firsts["rod"] + i - ioffset2;
    Logger.Log(MaterialDictionary.firsts["rod"], "cathy"); 
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][rod].material.name, "quake");
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][rod].form, "gregtech");
isrodoffset = true;
  } else {
  }
  }
  
  if(!isplateoffset) {
    ioffset1 += 1;
  }
  if(!isrodoffset) {
    ioffset2 += 1;
  }
  if(isplateoffset & isrodoffset){
    isoffset = true;
  }
  if(!isoffset) {
    continue;
  } else {
    Logger.Log("true", "gregtech");
  }
  let e = i;
Recipes.addShaped({id: ItemID.gtmetatool01, count: 1, data: wirecutterindex}, ["pfp", "hpd", "rsr"], ['f', ItemID.gtmetatool01, fileindex, 'h', ItemID.gtmetatool01, hammerindex, 'd', ItemID.gtmetatool01, screwdriverindex, 'p', ItemID.gtmetaitem01, plate, 'r', ItemID.gtmetaitem01, rod, 's', 280, -1], function(api, field, result) {
   ToolDictionary.upgradeTool(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[e]], result);
for (let y in field){
  if(field[y].id == ItemID.gtmetatool01 & field[y].data == fileindex) {
ToolDictionary.damageTool(field[y]);
  } else if(field[y].id == ItemID.gtmetatool01 & field[y].data == hammerindex) {
ToolDictionary.damageTool(field[y]);
  } else {
field[y].count -= 1;
}
  }
});
}

ioffset1 = 0;
ioffset2 = 0;
for(let i = 0; i < Object.keys(MaterialDictionary.dict).length; i++) {
  let is = false;
  for(let j = 0; j < Object.keys(ToolDictionary.materials).length; j++) {
    if(ToolDictionary.materials[Object.keys(ToolDictionary.materials)[j]] == MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]]) {
      is = true;
    }
  }
  if(!is) {
    continue;
  }

let isoffset = false;
let isplateoffset = false;
let plate = 0;
for(let j = 0; j < MaterialDictionary.types[ItemID.gtmetaitem01]["plate"].length; j++){
      if(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]].type == MaterialDictionary.types[ItemID.gtmetaitem01]["plate"][j]) {
    plate = MaterialDictionary.firsts["plate"] + i - ioffset1;
    Logger.Log(MaterialDictionary.firsts["plate"], "cathy"); 
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][plate].material.name, "quake");
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][plate].form, "gregtech");
isplateoffset = true;
  } else {
  }
  }

let isingotoffset = false;
let ingot = 0;
for(let j = 0; j < MaterialDictionary.types[ItemID.gtmetaitem01]["ingot"].length; j++){
      if(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]].type == MaterialDictionary.types[ItemID.gtmetaitem01]["ingot"][j]) {
    ingot = MaterialDictionary.firsts["ingot"] + i - ioffset2;
    Logger.Log(MaterialDictionary.firsts["ingot"], "cathy"); 
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][ingot].material.name, "quake");
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][ingot].form, "gregtech");
isingotoffset = true;
  } else {
  }
  }
    if(!isplateoffset) {
    ioffset1 += 1;
  }
  if(!isingotoffset) {
    ioffset2 += 1;
  }
  if(isplateoffset & isingotoffset){
    isoffset = true;
  }
  if(!isoffset) {
    continue;
  } else {
    Logger.Log("true", "gregtech");
  }
  let e = i;
Recipes.addShaped({id: ItemID.gtmetatool01, count: 1, data: pickaxeindex}, ["pii", "fsh", " s "], ['f', ItemID.gtmetatool01, fileindex, 'h', ItemID.gtmetatool01, hammerindex, 'p', ItemID.gtmetaitem01, plate, 'i', ItemID.gtmetaitem01, ingot, 's', 280, -1], function(api, field, result) {
   ToolDictionary.upgradeTool(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[e]], result);
for (let y in field){
  if(field[y].id == ItemID.gtmetatool01 & field[y].data == fileindex) {
ToolDictionary.damageTool(field[y]);
  } else if(field[y].id == ItemID.gtmetatool01 & field[y].data == hammerindex) {
ToolDictionary.damageTool(field[y]);
  } else {
field[y].count -= 1;
}
  }
});
}

ioffset1 = 0;
ioffset2 = 0;
for(let i = 0; i < Object.keys(MaterialDictionary.dict).length; i++) {
  let is = false;
  for(let j = 0; j < Object.keys(ToolDictionary.materials).length; j++) {
    if(ToolDictionary.materials[Object.keys(ToolDictionary.materials)[j]] == MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]]) {
      is = true;
    }
  }
  if(!is) {
    continue;
  }

let isoffset = false;
let isplateoffset = false;
let plate = 0;
for(let j = 0; j < MaterialDictionary.types[ItemID.gtmetaitem01]["plate"].length; j++){
      if(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]].type == MaterialDictionary.types[ItemID.gtmetaitem01]["plate"][j]) {
    plate = MaterialDictionary.firsts["plate"] + i - ioffset1;
    Logger.Log(MaterialDictionary.firsts["plate"], "cathy"); 
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][plate].material.name, "quake");
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][plate].form, "gregtech");
isplateoffset = true;
  } else {
  }
  }

let isingotoffset = false;
let ingot = 0;
for(let j = 0; j < MaterialDictionary.types[ItemID.gtmetaitem01]["gem"].length; j++){
      if(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]].type == MaterialDictionary.types[ItemID.gtmetaitem01]["gem"][j]) {
    ingot = MaterialDictionary.firsts["gem"] + i - ioffset2;
    Logger.Log(MaterialDictionary.firsts["gem"], "cathy"); 
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][ingot].material.name, "quake");
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][ingot].form, "gregtech");
isingotoffset = true;
  } else {
  }
  }
    if(!isplateoffset) {
    ioffset1 += 1;
  }
  if(!isingotoffset) {
    ioffset2 += 1;
  }
  if(isplateoffset & isingotoffset){
    isoffset = true;
  }
  if(!isoffset) {
    continue;
  } else {
    Logger.Log("true", "gregtech");
  }
  let e = i;
Recipes.addShaped({id: ItemID.gtmetatool01, count: 1, data: pickaxeindex}, ["pii", "fs ", " s "], ['f', ItemID.gtmetatool01, fileindex, 'p', ItemID.gtmetaitem01, plate, 'i', ItemID.gtmetaitem01, ingot, 's', 280, -1], function(api, field, result) {
   ToolDictionary.upgradeTool(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[e]], result);
for (let y in field){
  if(field[y].id == ItemID.gtmetatool01 & field[y].data == fileindex) {
ToolDictionary.damageTool(field[y]);
  } else if(field[y].id == ItemID.gtmetatool01 & field[y].data == hammerindex) {
ToolDictionary.damageTool(field[y]);
  } else {
field[y].count -= 1;
}
  }
});
}

ioffset1 = 0;
ioffset2 = 0;
for(let i = 0; i < Object.keys(MaterialDictionary.dict).length; i++) {
let is = false;
  for(let j = 0; j < Object.keys(ToolDictionary.materials).length; j++) {
    if(ToolDictionary.materials[Object.keys(ToolDictionary.materials)[j]] == MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]]) {
      is = true;
    }
  }
  if(!is) {
    continue;
  }

let isoffset = false;
let isplateoffset = false;
let plate = 0;
for(let j = 0; j < MaterialDictionary.types[ItemID.gtmetaitem01]["plate"].length; j++){
      if(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]].type == MaterialDictionary.types[ItemID.gtmetaitem01]["plate"][j]) {
    plate = MaterialDictionary.firsts["plate"] + i - ioffset1;
    Logger.Log(MaterialDictionary.firsts["plate"], "cathy"); 
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][plate].material.name, "quake");
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][plate].form, "gregtech");
isplateoffset = true;
  } else {
  }
  }

let isingotoffset = false;
let ingot = 0;
for(let j = 0; j < MaterialDictionary.types[ItemID.gtmetaitem01]["ingot"].length; j++){
      if(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]].type == MaterialDictionary.types[ItemID.gtmetaitem01]["ingot"][j]) {
    ingot = MaterialDictionary.firsts["ingot"] + i - ioffset2;
    Logger.Log(MaterialDictionary.firsts["ingot"], "cathy"); 
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][ingot].material.name, "quake");
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][ingot].form, "gregtech");
isingotoffset = true;
  } else {
  }
  }
  if(!isplateoffset) {
    ioffset1 += 1;
  }
  if(!isingotoffset) {
    ioffset2 += 1;
  }
  if(isplateoffset & isingotoffset){
    isoffset = true;
  }
  if(!isoffset) {
    continue;
  } else {
    Logger.Log("true", "gregtech");
  }
  let e = i;
Recipes.addShaped({id: ItemID.gtmetatool01, count: 1, data: hoeindex}, ["pih", "fs ", " s "], ['f', ItemID.gtmetatool01, fileindex, 'h', ItemID.gtmetatool01, hammerindex, 'p', ItemID.gtmetaitem01, plate, 'i', ItemID.gtmetaitem01, ingot, 's', 280, -1], function(api, field, result) {
   ToolDictionary.upgradeTool(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[e]], result);
for (let y in field){
  if(field[y].id == ItemID.gtmetatool01 & field[y].data == fileindex) {
ToolDictionary.damageTool(field[y]);
  } else if(field[y].id == ItemID.gtmetatool01 & field[y].data == hammerindex) {
ToolDictionary.damageTool(field[y]);
  } else {
field[y].count -= 1;
}
  }
});
}

ioffset1 = 0;
ioffset2 = 0;
for(let i = 0; i < Object.keys(MaterialDictionary.dict).length; i++) {
let is = false;
  for(let j = 0; j < Object.keys(ToolDictionary.materials).length; j++) {
    if(ToolDictionary.materials[Object.keys(ToolDictionary.materials)[j]] == MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]]) {
      is = true;
    }
  }
  if(!is) {
    continue;
  }

let isoffset = false;
let isplateoffset = false;
let plate = 0;
for(let j = 0; j < MaterialDictionary.types[ItemID.gtmetaitem01]["plate"].length; j++){
      if(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]].type == MaterialDictionary.types[ItemID.gtmetaitem01]["plate"][j]) {
    plate = MaterialDictionary.firsts["plate"] + i - ioffset1;
    Logger.Log(MaterialDictionary.firsts["plate"], "cathy"); 
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][plate].material.name, "quake");
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][plate].form, "gregtech");
isplateoffset = true;
  } else {
  }
  }

let isingotoffset = false;
let ingot = 0;
for(let j = 0; j < MaterialDictionary.types[ItemID.gtmetaitem01]["gem"].length; j++){
      if(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]].type == MaterialDictionary.types[ItemID.gtmetaitem01]["gem"][j]) {
    ingot = MaterialDictionary.firsts["gem"] + i - ioffset2;
    Logger.Log(MaterialDictionary.firsts["gem"], "cathy"); 
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][ingot].material.name, "quake");
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][ingot].form, "gregtech");
isingotoffset = true;
  } else {
  }
  }
  if(!isplateoffset) {
    ioffset1 += 1;
  }
  if(!isingotoffset) {
    ioffset2 += 1;
  }
  if(isplateoffset & isingotoffset){
    isoffset = true;
  }
  if(!isoffset) {
    continue;
  } else {
    Logger.Log("true", "gregtech");
  }
  let e = i;
Recipes.addShaped({id: ItemID.gtmetatool01, count: 1, data: hoeindex}, ["pi", "fs", " s"], ['f', ItemID.gtmetatool01, fileindex, 'h', ItemID.gtmetatool01, hammerindex, 'p', ItemID.gtmetaitem01, plate, 'i', ItemID.gtmetaitem01, ingot, 's', 280, -1], function(api, field, result) {
   ToolDictionary.upgradeTool(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[e]], result);
for (let y in field){
  if(field[y].id == ItemID.gtmetatool01 & field[y].data == fileindex) {
ToolDictionary.damageTool(field[y]);
  } else if(field[y].id == ItemID.gtmetatool01 & field[y].data == hammerindex) {
ToolDictionary.damageTool(field[y]);
  } else {
field[y].count -= 1;
}
  }
});
}

ioffset1 = 0;
for(let i = 0; i < Object.keys(MaterialDictionary.dict).length; i++) {
  let is = false;
  for(let j = 0; j < Object.keys(ToolDictionary.materials).length; j++) {
    if(ToolDictionary.materials[Object.keys(ToolDictionary.materials)[j]] == MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]]) {
      is = true;
    }
  }
  if(!is) {
    continue;
  }
  
  let isoffset = false;
  let plate = 0;
  for(let j = 0; j < MaterialDictionary.types[ItemID.gtmetaitem01]["plate"].length; j++){
      if(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]].type == MaterialDictionary.types[ItemID.gtmetaitem01]["plate"][j]) {
    plate = MaterialDictionary.firsts["plate"] + i - ioffset1;
    Logger.Log(MaterialDictionary.firsts["plate"], "cathy"); 
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][plate].material.name, "quake");
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][plate].form, "gregtech");
isoffset = true;
  } else {
  }
  }
  if(!isoffset) {
    ioffset1 += 1;
    continue;
  } else {
    Logger.Log("true", "gregtech");
  }
  let e = i;
Recipes.addShaped({id: ItemID.gtmetatool01, count: 1, data: shovelindex}, ["fph", " s ", " s "], ['f', ItemID.gtmetatool01, fileindex, 'h', ItemID.gtmetatool01, hammerindex, 'p', ItemID.gtmetaitem01, plate, 's', 280, -1], function(api, field, result) {
   ToolDictionary.upgradeTool(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[e]], result);
for (let y in field){
  if(field[y].id == ItemID.gtmetatool01 & field[y].data == fileindex) {
ToolDictionary.damageTool(field[y]);
  } else if(field[y].id == ItemID.gtmetatool01 & field[y].data == hammerindex) {
ToolDictionary.damageTool(field[y]);
  } else {
field[y].count -= 1;
}
  }
});
}

ioffset1 = 0;
for(let i = 0; i < Object.keys(MaterialDictionary.dict).length; i++) {
  let is = false;
  for(let j = 0; j < Object.keys(ToolDictionary.materials).length; j++) {
    if(ToolDictionary.materials[Object.keys(ToolDictionary.materials)[j]] == MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]]) {
      is = true;
    }
  }
  if(!is) {
    continue;
  }
  
  let isoffset = false;
  let plate = 0;
  for(let j = 0; j < MaterialDictionary.types[ItemID.gtmetaitem01]["plate"].length; j++){
      if(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]].type == MaterialDictionary.types[ItemID.gtmetaitem01]["plate"][j]) {
    plate = MaterialDictionary.firsts["plate"] + i - ioffset1;
    Logger.Log(MaterialDictionary.firsts["plate"], "cathy"); 
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][plate].material.name, "quake");
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][plate].form, "gregtech");
isoffset = true;
  } else {
  }
  }
  if(!isoffset) {
    ioffset1 += 1;
    continue;
  } else {
    Logger.Log("true", "gregtech");
  }
  let e = i;
Recipes.addShaped({id: ItemID.gtmetatool01, count: 1, data: swordindex}, [" p ", "fph", " s "], ['f', ItemID.gtmetatool01, fileindex, 'h', ItemID.gtmetatool01, hammerindex, 'p', ItemID.gtmetaitem01, plate, 's', 280, -1], function(api, field, result) {
   ToolDictionary.upgradeTool(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[e]], result);
for (let y in field){
  if(field[y].id == ItemID.gtmetatool01 & field[y].data == fileindex) {
ToolDictionary.damageTool(field[y]);
  } else if(field[y].id == ItemID.gtmetatool01 & field[y].data == hammerindex) {
ToolDictionary.damageTool(field[y]);
  } else {
field[y].count -= 1;
}
  }
});
}

ioffset1 = 0;
ioffset2 = 0;
for(let i = 0; i < Object.keys(MaterialDictionary.dict).length; i++) {
let is = false;
  for(let j = 0; j < Object.keys(ToolDictionary.materials).length; j++) {
    if(ToolDictionary.materials[Object.keys(ToolDictionary.materials)[j]] == MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]]) {
      is = true;
    }
  }
  if(!is) {
    continue;
  }

let isoffset = false;
let isplateoffset = false;
let plate = 0;
for(let j = 0; j < MaterialDictionary.types[ItemID.gtmetaitem01]["plate"].length; j++){
      if(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]].type == MaterialDictionary.types[ItemID.gtmetaitem01]["plate"][j]) {
    plate = MaterialDictionary.firsts["plate"] + i - ioffset1;
    Logger.Log(MaterialDictionary.firsts["plate"], "cathy"); 
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][plate].material.name, "quake");
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][plate].form, "gregtech");
isplateoffset = true;
  } else {
  }
  }

let isingotoffset = false;
let ingot = 0;
for(let j = 0; j < MaterialDictionary.types[ItemID.gtmetaitem01]["ingot"].length; j++){
      if(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]].type == MaterialDictionary.types[ItemID.gtmetaitem01]["ingot"][j]) {
    ingot = MaterialDictionary.firsts["ingot"] + i - ioffset2;
    Logger.Log(MaterialDictionary.firsts["ingot"], "cathy"); 
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][ingot].material.name, "quake");
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][ingot].form, "gregtech");
isingotoffset = true;
  } else {
  }
  }
    if(!isplateoffset) {
    ioffset1 += 1;
  }
  if(!isingotoffset) {
    ioffset2 += 1;
  }
  if(isplateoffset & isingotoffset){
    isoffset = true;
  }
  if(!isoffset) {
    continue;
  } else {
    Logger.Log("true", "gregtech");
  }
  let e = i;
Recipes.addShaped({id: ItemID.gtmetatool01, count: 1, data: axeindex}, ["pi", "ps", "fs"], ['f', ItemID.gtmetatool01, fileindex, 'h', ItemID.gtmetatool01, hammerindex, 'p', ItemID.gtmetaitem01, plate, 'i', ItemID.gtmetaitem01, ingot, 's', 280, -1], function(api, field, result) {
   ToolDictionary.upgradeTool(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[e]], result);
for (let y in field){
  if(field[y].id == ItemID.gtmetatool01 & field[y].data == fileindex) {
ToolDictionary.damageTool(field[y]);
  } else if(field[y].id == ItemID.gtmetatool01 & field[y].data == hammerindex) {
ToolDictionary.damageTool(field[y]);
  } else {
field[y].count -= 1;
}
  }
});
}

ioffset1 = 0;
ioffset2 = 0;
for(let i = 0; i < Object.keys(MaterialDictionary.dict).length; i++) {
let is = false;
  for(let j = 0; j < Object.keys(ToolDictionary.materials).length; j++) {
    if(ToolDictionary.materials[Object.keys(ToolDictionary.materials)[j]] == MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]]) {
      is = true;
    }
  }
  if(!is) {
    continue;
  }

let isoffset = false;
let isplateoffset = false;
let plate = 0;
for(let j = 0; j < MaterialDictionary.types[ItemID.gtmetaitem01]["plate"].length; j++){
      if(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]].type == MaterialDictionary.types[ItemID.gtmetaitem01]["plate"][j]) {
    plate = MaterialDictionary.firsts["plate"] + i - ioffset1;
    Logger.Log(MaterialDictionary.firsts["plate"], "cathy"); 
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][plate].material.name, "quake");
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][plate].form, "gregtech");
isplateoffset = true;
  } else {
  }
  }

let isingotoffset = false;
let ingot = 0;
for(let j = 0; j < MaterialDictionary.types[ItemID.gtmetaitem01]["gem"].length; j++){
      if(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[i]].type == MaterialDictionary.types[ItemID.gtmetaitem01]["gem"][j]) {
    ingot = MaterialDictionary.firsts["gem"] + i - ioffset2;
    Logger.Log(MaterialDictionary.firsts["gem"], "cathy"); 
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][ingot].material.name, "quake");
    Logger.Log(MaterialDictionary.data[ItemID.gtmetaitem01][ingot].form, "gregtech");
isingotoffset = true;
  } else {
  }
  }
    if(!isplateoffset) {
    ioffset1 += 1;
  }
  if(!isingotoffset) {
    ioffset2 += 1;
  }
  if(isplateoffset & isingotoffset){
    isoffset = true;
  }
  if(!isoffset) {
    continue;
  } else {
    Logger.Log("true", "gregtech");
  }
  let e = i;
Recipes.addShaped({id: ItemID.gtmetatool01, count: 1, data: axeindex}, ["pi", "ps", "fs"], ['f', ItemID.gtmetatool01, fileindex, 'p', ItemID.gtmetaitem01, plate, 'i', ItemID.gtmetaitem01, ingot, 's', 280, -1], function(api, field, result) {
   ToolDictionary.upgradeTool(MaterialDictionary.dict[Object.keys(MaterialDictionary.dict)[e]], result);
for (let y in field){
  if(field[y].id == ItemID.gtmetatool01 & field[y].data == fileindex) {
ToolDictionary.damageTool(field[y]);
  } else if(field[y].id == ItemID.gtmetatool01 & field[y].data == hammerindex) {
ToolDictionary.damageTool(field[y]);
  } else {
field[y].count -= 1;
}
  }
});
}

var copper, tin, bronze;
for(let i = 0; i < Object.keys(MaterialDictionary.dict).length; i++) {
    if(Object.keys(MaterialDictionary.dict)[i] == "copper") {
      copper = MaterialDictionary.firsts["dust"] + i;
    }
    if(Object.keys(MaterialDictionary.dict)[i] == "tin") {
       tin = MaterialDictionary.firsts["dust"] + i;
    }
    if(Object.keys(MaterialDictionary.dict)[i] == "bronze") {
       bronze = MaterialDictionary.firsts["dust"] + i;
    }
}
Recipes.addShapeless({id: ItemID.gtmetaitem01, count: 3, data: bronze}, [{id: ItemID.gtmetaitem01, data: copper}, {id: ItemID.gtmetaitem01, data: copper},
{id: ItemID.gtmetaitem01, data: copper},
{id: ItemID.gtmetaitem01, data: tin}], function(api, field, result){ 
for (let y in field){
field[y].count -= 1;
  }
});

let copperpipe;
for(let m = 0; m < Object.keys(PipeDictionary.materials).length; m++) {
  if(Object.keys(PipeDictionary.materials)[m] == "bronze") {
      copperpipe = m;
  }
}
copperpipe = copperpipe * PipeDictionary.sizes.length + 1;

let furnace;
for(let m = 0; m < Object.keys(RecipeDictionary.steammachines).length; m++) {
  if(Object.keys(RecipeDictionary.steammachines)[m] == "furnace") {
      furnace = m * 2 + 2;
  }
}

Recipes.addShaped({id: BlockID.gtblockmechanism, count: 1, data: furnace}, ["ppp", "pip", "pfp"], ['f', 61, 0, 'p', BlockID.gtblockpipe, copperpipe, 'i', BlockID.gtblockmechanism, 1]);

let macerator;
for(let m = 0; m < Object.keys(RecipeDictionary.steammachines).length; m++) {
  if(Object.keys(RecipeDictionary.steammachines)[m] == "macerator") {
      macerator = m * 2 + 2;
  }
}

Recipes.addShaped({id: BlockID.gtblockmechanism, count: 1, data: macerator}, ["dpd", "pip", "opo"], ['o', 33, 0, 'p', BlockID.gtblockpipe, copperpipe, 'i', BlockID.gtblockmechanism, 0, 'd', 264, 0]);

let forge_hammer;
for(let m = 0; m < Object.keys(RecipeDictionary.steammachines).length; m++) {
  if(Object.keys(RecipeDictionary.steammachines)[m] == "hammer") {
      forge_hammer = m * 2 + 2;
  }
}

Recipes.addShaped({id: BlockID.gtblockmechanism, count: 1, data: forge_hammer}, ["pop", "pip", "pap"], ['o', 33, 0, 'p', BlockID.gtblockpipe, copperpipe, 'a', 145, 0, 'i', BlockID.gtblockmechanism, 0]);

let compressor;
for(let m = 0; m < Object.keys(RecipeDictionary.steammachines).length; m++) {
  if(Object.keys(RecipeDictionary.steammachines)[m] == "compressor") {
      compressor = m * 2 + 2;
  }
}

Recipes.addShaped({id: BlockID.gtblockmechanism, count: 1, data: compressor}, ["ppp", "oio", "ppp"], ['o', 33, 0, 'p', BlockID.gtblockpipe, copperpipe, 'i', BlockID.gtblockmechanism, 0]);

let alloy_smelter;
for(let m = 0; m < Object.keys(RecipeDictionary.steammachines).length; m++) {
  if(Object.keys(RecipeDictionary.steammachines)[m] == "alloy_smelter") {
      alloy_smelter = m * 2 + 2;
  }
}

Recipes.addShaped({id: BlockID.gtblockmechanism, count: 1, data: alloy_smelter}, ["ppp", "fif", "ppp"], ['f', 61, 0, 'p', BlockID.gtblockpipe, copperpipe, 'i', BlockID.gtblockmechanism, 1]);

var bronzeplate;
for(let i = 0; i < Object.keys(MaterialDictionary.dict).length; i++) {
    if(Object.keys(MaterialDictionary.dict)[i] == "bronze") {
      bronzeplate = MaterialDictionary.firsts["plate"] + i;
    }
}
Recipes.addShaped({id: BlockID.gtblockmechanism, count: 1, data: 0}, ["ppp", "php", "ppp"], ['h', ItemID.gtmetatool01, hammerindex, 'p', ItemID.gtmetaitem01, bronzeplate]);

Recipes.addShaped({id: BlockID.gtblockmechanism, count: 1, data: 1}, ["ppp", "php", "bbb"], ['p', ItemID.gtmetaitem01, bronzeplate, 'b', 336, 0, 'h', ItemID.gtmetatool01, hammerindex]);

Recipes.removeWorkbenchRecipe(5, 4, 0);
Recipes.removeWorkbenchRecipe(5, 4, 1);
Recipes.removeWorkbenchRecipe(5, 4, 2);
Recipes.removeWorkbenchRecipe(5, 4, 3);

Recipes.addShaped({id: 5, count: 2, data: 0}, ["l"], ['l', 17, 0]);
Recipes.addShaped({id: 5, count: 2, data: 1}, ["l"], ['l', 17, 1]);
Recipes.addShaped({id: 5, count: 2, data: 2}, ["l"], ['l', 17, 2]);
Recipes.addShaped({id: 5, count: 2, data: 3}, ["l"], ['l', 17, 3]);

Recipes.removeWorkbenchRecipe(5, 4, 4);
Recipes.removeWorkbenchRecipe(5, 4, 5);

Recipes.addShaped({id: 5, count: 2, data: 4}, ["l"], ['l', 162, 0]);
Recipes.addShaped({id: 5, count: 2, data: 5}, ["l"], ['l', 162, 1]);

Recipes.removeWorkbenchRecipe(280, 4, 0);

Recipes.addShaped({id: 280, count: 2, data: 0}, ["l", "l"], ['l', 5, 0]);
Recipes.addShaped({id: 280, count: 2, data: 1}, ["l", "l"], ['l', 5, 1]);
Recipes.addShaped({id: 280, count: 2, data: 2}, ["l", "l"], ['l', 5, 2]);
Recipes.addShaped({id: 280, count: 2, data: 3}, ["l", "l"], ['l', 5, 3]);

Recipes.addShaped({id: 280, count: 2, data: 4}, ["l", "l"], ['l', 5, 4]);
Recipes.addShaped({id: 280, count: 2, data: 5}, ["l","l"], ['l', 5, 5]);
*/
Recipes.removeWorkbenchRecipe(256, 1, -1);
Recipes.removeWorkbenchRecipe(257, 1, -1);
Recipes.removeWorkbenchRecipe(258, 1, -1);
Recipes.removeWorkbenchRecipe(267, 1, -1);
Recipes.removeWorkbenchRecipe(276, 1, -1);
Recipes.removeWorkbenchRecipe(277, 1, -1);
Recipes.removeWorkbenchRecipe(278, 1, -1);
Recipes.removeWorkbenchRecipe(279, 1, -1);
Recipes.removeWorkbenchRecipe(283, 1, -1);
Recipes.removeWorkbenchRecipe(284, 1, -1);
Recipes.removeWorkbenchRecipe(285, 1, -1);
Recipes.removeWorkbenchRecipe(286, 1, -1);
Recipes.removeWorkbenchRecipe(292, 1, -1);
Recipes.removeWorkbenchRecipe(293, 1, -1);
Recipes.removeWorkbenchRecipe(294, 1, -1);




