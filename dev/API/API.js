const setLoadingTip = ModAPI.requireGlobal("MCSystem.setLoadingTip");
setLoadingTip("GTAPI: loading API");

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

Object.defineProperty(Array.prototype, 'includes', {
    value: function(searchElement, fromIndex) {

      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      // 1. Let O be ? ToObject(this value).
      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If len is 0, return false.
      if (len === 0) {
        return false;
      }

      // 4. Let n be ? ToInteger(fromIndex).
      //    (If fromIndex is undefined, this step produces the value 0.)
      var n = fromIndex | 0;

      // 5. If n ≥ 0, then
      //  a. Let k be n.
      // 6. Else n < 0,
      //  a. Let k be len + n.
      //  b. If k < 0, let k be 0.
      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
      }

      // 7. Repeat, while k < len
      while (k < len) {
        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
        // b. If SameValueZero(searchElement, elementK) is true, return true.
        if (sameValueZero(o[k], searchElement)) {
          return true;
        }
        // c. Increase k by 1.
        k++;
      }

      // 8. Return false
      return false;
    }
  });
  
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
   invalidateModel: function (coords, texture, rotatedtexture, puts) {
     Logger.Log(texture.textures[rotatedtexture[0]], "ast");
     Logger.Log(texture.textures[rotatedtexture[1]], "Astartes");
     Logger.Log(texture.textures[rotatedtexture[2]], "ast");
     Logger.Log(texture.textures[rotatedtexture[3]], "Astartes");
     Logger.Log(texture.textures[rotatedtexture[4]], "ast");
     Logger.Log(texture.textures[rotatedtexture[5]], "Astartes");
     
     let array = [texture.textures[rotatedtexture[0]], texture.textures[rotatedtexture[1]], texture.textures[rotatedtexture[2]], texture.textures[rotatedtexture[3]], texture.textures[rotatedtexture[4]], texture.textures[rotatedtexture[5]]];
     //Logger.Log(World.getTileEntity(coords.x, coords.y, coords.z).data.put.length, "xenaft");
      /*for(let put in puts) {
        Logger.Log(puts[put], "xen");
      if(puts[put] === null || puts[put] === undefined) continue;
	    puts[put] = [array[puts[put]][0] + "_put", array[puts[put]][1]];
      }*/
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
		let pitch = this.getEntityPitch(player);

		if(isFull){
			if(pitch < -45) return 0;
			if(pitch > 45) return 1;
		}
		let rotation = Math.floor((this.getEntityYaw(player)-45)%360 / 90);
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