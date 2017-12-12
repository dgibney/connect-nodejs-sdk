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
 * The V1CreateRefundRequest model module.
 * @module model/V1CreateRefundRequest
 * @version 2.5.2
 */

/**
 * Constructs a new <code>V1CreateRefundRequest</code>.
 * @alias module:model/V1CreateRefundRequest
 * @class
 * @param paymentId {String} The ID of the payment to refund. If you're creating a PARTIAL refund for a split tender payment, instead provide the id of the particular tender you want to refund. See Split Tender Payments for details.
 * @param type {module:model/V1CreateRefundRequest.TypeEnum} TThe type of refund (FULL or PARTIAL).
 * @param reason {String} The reason for the refund.
 */
var exports = function(paymentId, type, reason) {
  var _this = this;

  _this['payment_id'] = paymentId;
  _this['type'] = type;
  _this['reason'] = reason;


};

/**
 * Constructs a <code>V1CreateRefundRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1CreateRefundRequest} obj Optional instance to populate.
 * @return {module:model/V1CreateRefundRequest} The populated <code>V1CreateRefundRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('payment_id')) {
      obj['payment_id'] = ApiClient.convertToType(data['payment_id'], 'String');
    }
      if (data.hasOwnProperty('type')) {
      obj['type'] = ApiClient.convertToType(data['type'], 'String');
    }
      if (data.hasOwnProperty('reason')) {
      obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
    }
      if (data.hasOwnProperty('refunded_money')) {
      obj['refunded_money'] = V1Money.constructFromObject(data['refunded_money']);
    }
      if (data.hasOwnProperty('request_idempotence_key')) {
      obj['request_idempotence_key'] = ApiClient.convertToType(data['request_idempotence_key'], 'String');
    }
    }
  return obj;
}

/**
 * The ID of the payment to refund. If you're creating a PARTIAL refund for a split tender payment, instead provide the id of the particular tender you want to refund. See Split Tender Payments for details.
 * @member {String} payment_id
 */
exports.prototype['payment_id'] = undefined;
/**
 * TThe type of refund (FULL or PARTIAL).
 * @member {module:model/V1CreateRefundRequest.TypeEnum} type
 */
exports.prototype['type'] = undefined;
/**
 * The reason for the refund.
 * @member {String} reason
 */
exports.prototype['reason'] = undefined;
/**
 * The amount of money to refund. Required only for PARTIAL refunds.
 * @member {module:model/V1Money} refunded_money
 */
exports.prototype['refunded_money'] = undefined;
/**
 * An optional key to ensure idempotence if you issue the same PARTIAL refund request more than once.
 * @member {String} request_idempotence_key
 */
exports.prototype['request_idempotence_key'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "FULL"
     * @const
     */
    "FULL": "FULL",
    /**
     * value: "PARTIAL"
     * @const
     */
    "PARTIAL": "PARTIAL"  };


module.exports = exports;



