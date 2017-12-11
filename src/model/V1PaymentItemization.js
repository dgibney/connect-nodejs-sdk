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
var V1Money = require('./V1Money');
var V1PaymentDiscount = require('./V1PaymentDiscount');
var V1PaymentItemDetail = require('./V1PaymentItemDetail');
var V1PaymentModifier = require('./V1PaymentModifier');
var V1PaymentTax = require('./V1PaymentTax');




/**
 * The V1PaymentItemization model module.
 * @module model/V1PaymentItemization
 * @version 2.5.1
 */

/**
 * Constructs a new <code>V1PaymentItemization</code>.
 * @alias module:model/V1PaymentItemization
 * @class
 */
var exports = function() {
  var _this = this;















};

/**
 * Constructs a <code>V1PaymentItemization</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1PaymentItemization} obj Optional instance to populate.
 * @return {module:model/V1PaymentItemization} The populated <code>V1PaymentItemization</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
      if (data.hasOwnProperty('quantity')) {
      obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
    }
      if (data.hasOwnProperty('itemization_type')) {
      obj['itemization_type'] = ApiClient.convertToType(data['itemization_type'], 'String');
    }
      if (data.hasOwnProperty('item_detail')) {
      obj['item_detail'] = V1PaymentItemDetail.constructFromObject(data['item_detail']);
    }
      if (data.hasOwnProperty('notes')) {
      obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
    }
      if (data.hasOwnProperty('item_variation_name')) {
      obj['item_variation_name'] = ApiClient.convertToType(data['item_variation_name'], 'String');
    }
      if (data.hasOwnProperty('total_money')) {
      obj['total_money'] = V1Money.constructFromObject(data['total_money']);
    }
      if (data.hasOwnProperty('single_quantity_money')) {
      obj['single_quantity_money'] = V1Money.constructFromObject(data['single_quantity_money']);
    }
      if (data.hasOwnProperty('gross_sales_money')) {
      obj['gross_sales_money'] = V1Money.constructFromObject(data['gross_sales_money']);
    }
      if (data.hasOwnProperty('discount_money')) {
      obj['discount_money'] = V1Money.constructFromObject(data['discount_money']);
    }
      if (data.hasOwnProperty('net_sales_money')) {
      obj['net_sales_money'] = V1Money.constructFromObject(data['net_sales_money']);
    }
      if (data.hasOwnProperty('taxes')) {
      obj['taxes'] = ApiClient.convertToType(data['taxes'], [V1PaymentTax]);
    }
      if (data.hasOwnProperty('discounts')) {
      obj['discounts'] = ApiClient.convertToType(data['discounts'], [V1PaymentDiscount]);
    }
      if (data.hasOwnProperty('modifiers')) {
      obj['modifiers'] = ApiClient.convertToType(data['modifiers'], [V1PaymentModifier]);
    }
    }
  return obj;
}

/**
 * The item's name.
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * The quantity of the item purchased. This can be a decimal value.
 * @member {Number} quantity
 */
exports.prototype['quantity'] = undefined;
/**
 * The type of purchase that the itemization represents, such as an ITEM or CUSTOM_AMOUNT
 * @member {module:model/V1PaymentItemization.ItemizationTypeEnum} itemization_type
 */
exports.prototype['itemization_type'] = undefined;
/**
 * Details of the item, including its unique identifier and the identifier of the item variation purchased.
 * @member {module:model/V1PaymentItemDetail} item_detail
 */
exports.prototype['item_detail'] = undefined;
/**
 * Notes entered by the merchant about the item at the time of payment, if any.
 * @member {String} notes
 */
exports.prototype['notes'] = undefined;
/**
 * The name of the item variation purchased, if any.
 * @member {String} item_variation_name
 */
exports.prototype['item_variation_name'] = undefined;
/**
 * The total cost of the item, including all taxes and discounts.
 * @member {module:model/V1Money} total_money
 */
exports.prototype['total_money'] = undefined;
/**
 * The cost of a single unit of this item.
 * @member {module:model/V1Money} single_quantity_money
 */
exports.prototype['single_quantity_money'] = undefined;
/**
 * The total cost of the itemization and its modifiers, not including taxes or discounts.
 * @member {module:model/V1Money} gross_sales_money
 */
exports.prototype['gross_sales_money'] = undefined;
/**
 * The total of all discounts applied to the itemization. This value is always negative or zero.
 * @member {module:model/V1Money} discount_money
 */
exports.prototype['discount_money'] = undefined;
/**
 * The sum of gross_sales_money and discount_money.
 * @member {module:model/V1Money} net_sales_money
 */
exports.prototype['net_sales_money'] = undefined;
/**
 * All taxes applied to this itemization.
 * @member {Array.<module:model/V1PaymentTax>} taxes
 */
exports.prototype['taxes'] = undefined;
/**
 * All discounts applied to this itemization.
 * @member {Array.<module:model/V1PaymentDiscount>} discounts
 */
exports.prototype['discounts'] = undefined;
/**
 * All modifier options applied to this itemization.
 * @member {Array.<module:model/V1PaymentModifier>} modifiers
 */
exports.prototype['modifiers'] = undefined;


  /**
   * Allowed values for the <code>itemization_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ItemizationTypeEnum = {
    /**
     * value: "ITEM"
     * @const
     */
    "ITEM": "ITEM",
    /**
     * value: "CUSTOM_AMOUNT"
     * @const
     */
    "CUSTOM_AMOUNT": "CUSTOM_AMOUNT",
    /**
     * value: "GIFT_CARD_ACTIVATION"
     * @const
     */
    "GIFT_CARD_ACTIVATION": "GIFT_CARD_ACTIVATION",
    /**
     * value: "GIFT_CARD_RELOAD"
     * @const
     */
    "GIFT_CARD_RELOAD": "GIFT_CARD_RELOAD",
    /**
     * value: "GIFT_CARD_UNKNOWN"
     * @const
     */
    "GIFT_CARD_UNKNOWN": "GIFT_CARD_UNKNOWN",
    /**
     * value: "OTHER"
     * @const
     */
    "OTHER": "OTHER"  };


module.exports = exports;


