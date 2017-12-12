/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * OpenAPI spec version: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 */
var ApiClient = require('../ApiClient');
var V1Category = require('./V1Category');
var V1Fee = require('./V1Fee');
var V1ItemImage = require('./V1ItemImage');
var V1Variation = require('./V1Variation');




/**
 * The V1Item model module.
 * @module model/V1Item
 * @version 2.5.2
 */

/**
 * Constructs a new <code>V1Item</code>.
 * @alias module:model/V1Item
 * @class
 */
var exports = function() {
  var _this = this;















};

/**
 * Constructs a <code>V1Item</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1Item} obj Optional instance to populate.
 * @return {module:model/V1Item} The populated <code>V1Item</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
      if (data.hasOwnProperty('description')) {
      obj['description'] = ApiClient.convertToType(data['description'], 'String');
    }
      if (data.hasOwnProperty('type')) {
      obj['type'] = ApiClient.convertToType(data['type'], 'String');
    }
      if (data.hasOwnProperty('color')) {
      obj['color'] = ApiClient.convertToType(data['color'], 'String');
    }
      if (data.hasOwnProperty('abbreviation')) {
      obj['abbreviation'] = ApiClient.convertToType(data['abbreviation'], 'String');
    }
      if (data.hasOwnProperty('visibility')) {
      obj['visibility'] = ApiClient.convertToType(data['visibility'], 'String');
    }
      if (data.hasOwnProperty('available_online')) {
      obj['available_online'] = ApiClient.convertToType(data['available_online'], 'Boolean');
    }
      if (data.hasOwnProperty('master_image')) {
      obj['master_image'] = V1ItemImage.constructFromObject(data['master_image']);
    }
      if (data.hasOwnProperty('category')) {
      obj['category'] = V1Category.constructFromObject(data['category']);
    }
      if (data.hasOwnProperty('variations')) {
      obj['variations'] = ApiClient.convertToType(data['variations'], [V1Variation]);
    }
      if (data.hasOwnProperty('modifier_lists')) {
      obj['modifier_lists'] = ApiClient.convertToType(data['modifier_lists'], [V1Variation]);
    }
      if (data.hasOwnProperty('fees')) {
      obj['fees'] = ApiClient.convertToType(data['fees'], [V1Fee]);
    }
      if (data.hasOwnProperty('taxable')) {
      obj['taxable'] = ApiClient.convertToType(data['taxable'], 'Boolean');
    }
    }
  return obj;
}

/**
 * The item's ID. Must be unique among all entity IDs ever provided on behalf of the merchant. You can never reuse an ID. This value can include alphanumeric characters, dashes (-), and underscores (_).
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * The item's name.
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * The item's description.
 * @member {String} description
 */
exports.prototype['description'] = undefined;
/**
 * The item's type. This value is NORMAL for almost all items.
 * @member {module:model/V1Item.TypeEnum} type
 */
exports.prototype['type'] = undefined;
/**
 * The color of the discount's display label in Square Register, if not the default color. The default color is 9da2a6.
 * @member {module:model/V1Item.ColorEnum} color
 */
exports.prototype['color'] = undefined;
/**
 * The text of the item's display label in Square Register. Only up to the first five characters of the string are used.
 * @member {String} abbreviation
 */
exports.prototype['abbreviation'] = undefined;
/**
 * Indicates whether the item is viewable from the merchant's online store (PUBLIC) or PRIVATE.
 * @member {module:model/V1Item.VisibilityEnum} visibility
 */
exports.prototype['visibility'] = undefined;
/**
 * If true, the item can be added to shipping orders from the merchant's online store.
 * @member {Boolean} available_online
 */
exports.prototype['available_online'] = undefined;
/**
 * The item's master image, if any.
 * @member {module:model/V1ItemImage} master_image
 */
exports.prototype['master_image'] = undefined;
/**
 * The category the item belongs to, if any.
 * @member {module:model/V1Category} category
 */
exports.prototype['category'] = undefined;
/**
 * The item's variations. You must specify at least one variation.
 * @member {Array.<module:model/V1Variation>} variations
 */
exports.prototype['variations'] = undefined;
/**
 * The modifier lists that apply to the item, if any.
 * @member {Array.<module:model/V1Variation>} modifier_lists
 */
exports.prototype['modifier_lists'] = undefined;
/**
 * The fees that apply to the item, if any.
 * @member {Array.<module:model/V1Fee>} fees
 */
exports.prototype['fees'] = undefined;
/**
 * Deprecated. This field is not used.
 * @member {Boolean} taxable
 */
exports.prototype['taxable'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "NORMAL"
     * @const
     */
    "NORMAL": "NORMAL",
    /**
     * value: "GIFT_CARD"
     * @const
     */
    "GIFT_CARD": "GIFT_CARD",
    /**
     * value: "OTHER"
     * @const
     */
    "OTHER": "OTHER"  };

  /**
   * Allowed values for the <code>color</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ColorEnum = {
    /**
     * value: "9da2a6"
     * @const
     */
    "9da2a6": "9da2a6",
    /**
     * value: "4ab200"
     * @const
     */
    "4ab200": "4ab200",
    /**
     * value: "0b8000"
     * @const
     */
    "0b8000": "0b8000",
    /**
     * value: "2952cc"
     * @const
     */
    "2952cc": "2952cc",
    /**
     * value: "a82ee5"
     * @const
     */
    "a82ee5": "a82ee5",
    /**
     * value: "e5457a"
     * @const
     */
    "e5457a": "e5457a",
    /**
     * value: "b21212"
     * @const
     */
    "b21212": "b21212",
    /**
     * value: "593c00"
     * @const
     */
    "593c00": "593c00",
    /**
     * value: "e5BF00"
     * @const
     */
    "e5BF00": "e5BF00"  };

  /**
   * Allowed values for the <code>visibility</code> property.
   * @enum {String}
   * @readonly
   */
  exports.VisibilityEnum = {
    /**
     * value: "PUBLIC"
     * @const
     */
    "PUBLIC": "PUBLIC",
    /**
     * value: "PRIVATE"
     * @const
     */
    "PRIVATE": "PRIVATE"  };


module.exports = exports;



