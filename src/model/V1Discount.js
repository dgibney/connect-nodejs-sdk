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




/**
 * The V1Discount model module.
 * @module model/V1Discount
 * @version 2.5.2
 */

/**
 * Constructs a new <code>V1Discount</code>.
 * @alias module:model/V1Discount
 * @class
 */
var exports = function() {
  var _this = this;








};

/**
 * Constructs a <code>V1Discount</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1Discount} obj Optional instance to populate.
 * @return {module:model/V1Discount} The populated <code>V1Discount</code> instance.
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
      if (data.hasOwnProperty('rate')) {
      obj['rate'] = ApiClient.convertToType(data['rate'], 'String');
    }
      if (data.hasOwnProperty('amount_money')) {
      obj['amount_money'] = V1Money.constructFromObject(data['amount_money']);
    }
      if (data.hasOwnProperty('discount_type')) {
      obj['discount_type'] = ApiClient.convertToType(data['discount_type'], 'String');
    }
      if (data.hasOwnProperty('pin_required')) {
      obj['pin_required'] = ApiClient.convertToType(data['pin_required'], 'Boolean');
    }
      if (data.hasOwnProperty('color')) {
      obj['color'] = ApiClient.convertToType(data['color'], 'String');
    }
    }
  return obj;
}

/**
 * The discount's unique ID.
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * The discount's name.
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * The rate of the discount, as a string representation of a decimal number. A value of 0.07 corresponds to a rate of 7%. This rate is 0 if discount_type is VARIABLE_PERCENTAGE.
 * @member {String} rate
 */
exports.prototype['rate'] = undefined;
/**
 * The amount of the discount. This amount is 0 if discount_type is VARIABLE_AMOUNT. This field is not included for rate-based discounts.
 * @member {module:model/V1Money} amount_money
 */
exports.prototype['amount_money'] = undefined;
/**
 * Indicates whether the discount is a FIXED value or entered at the time of sale.
 * @member {module:model/V1Discount.DiscountTypeEnum} discount_type
 */
exports.prototype['discount_type'] = undefined;
/**
 * Indicates whether a mobile staff member needs to enter their PIN to apply the discount to a payment.
 * @member {Boolean} pin_required
 */
exports.prototype['pin_required'] = undefined;
/**
 * The color of the discount's display label in Square Register, if not the default color. The default color is 9da2a6.
 * @member {module:model/V1Discount.ColorEnum} color
 */
exports.prototype['color'] = undefined;


  /**
   * Allowed values for the <code>discount_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DiscountTypeEnum = {
    /**
     * value: "FIXED"
     * @const
     */
    "FIXED": "FIXED",
    /**
     * value: "VARIABLE_PERCENTAGE"
     * @const
     */
    "VARIABLE_PERCENTAGE": "VARIABLE_PERCENTAGE",
    /**
     * value: "VARIABLE_AMOUNT"
     * @const
     */
    "VARIABLE_AMOUNT": "VARIABLE_AMOUNT"  };

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


module.exports = exports;



