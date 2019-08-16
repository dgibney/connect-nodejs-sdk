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
 * The CancelPaymentByIdempotencyKeyRequest model module.
 * @module model/CancelPaymentByIdempotencyKeyRequest
 */

/**
 * Constructs a new <code>CancelPaymentByIdempotencyKeyRequest</code>.
 * Specifies idempotency key of a payment to cancel.
 * @alias module:model/CancelPaymentByIdempotencyKeyRequest
 * @class
 * @param idempotencyKey {String} `idempotency_key` identifying the payment to be canceled.
 */
var exports = function(idempotencyKey) {
  var _this = this;

  _this['idempotency_key'] = idempotencyKey;
};

/**
 * Constructs a <code>CancelPaymentByIdempotencyKeyRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CancelPaymentByIdempotencyKeyRequest} obj Optional instance to populate.
 * @return {module:model/CancelPaymentByIdempotencyKeyRequest} The populated <code>CancelPaymentByIdempotencyKeyRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('idempotency_key')) {
      obj['idempotency_key'] = ApiClient.convertToType(data['idempotency_key'], 'String');
    }
    }
  return obj;
}

/**
 * `idempotency_key` identifying the payment to be canceled.
 * @member {String} idempotency_key
 */
exports.prototype['idempotency_key'] = undefined;



module.exports = exports;


