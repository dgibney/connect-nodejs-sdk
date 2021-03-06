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


/**
 * Enum class TerminalCheckoutCancelReason.
 * @enum {}
 * @readonly
 */
var exports = {
  /**
   * value: "BUYER_CANCELED"
   * @const
   */
  "BUYER_CANCELED": "BUYER_CANCELED",
  /**
   * value: "SELLER_CANCELED"
   * @const
   */
  "SELLER_CANCELED": "SELLER_CANCELED",
  /**
   * value: "TIMED_OUT"
   * @const
   */
  "TIMED_OUT": "TIMED_OUT"};

/**
 * Returns a <code>TerminalCheckoutCancelReason</code> enum value from a Javascript object name.
 * @param {Object} data The plain JavaScript object containing the name of the enum value.
 * @return {module:model/TerminalCheckoutCancelReason} The enum <code>TerminalCheckoutCancelReason</code> value.
 */
exports.constructFromObject = function(object) {
  return object;
}

module.exports = exports;


