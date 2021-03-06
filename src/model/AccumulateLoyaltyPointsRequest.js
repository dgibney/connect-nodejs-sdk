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
var LoyaltyEventAccumulatePoints = require('./LoyaltyEventAccumulatePoints');




/**
 * The AccumulateLoyaltyPointsRequest model module.
 * Note: This model is in beta.
 * @module model/AccumulateLoyaltyPointsRequest
 */

/**
 * Constructs a new <code>AccumulateLoyaltyPointsRequest</code>.
 * A request to accumulate points for a purchase.
 * @alias module:model/AccumulateLoyaltyPointsRequest
 * @class
 * @param accumulatePoints {module:model/LoyaltyEventAccumulatePoints} The points to add to the account.  If you are using the Orders API to manage orders, you   specify the order ID. Otherwise, specify the  points to add.
 * @param idempotencyKey {String} A unique string that identifies the `AccumulateLoyaltyPoints` request.  Keys can be any valid string but must be unique for every request.
 * @param locationId {String} The `location` where the purchase was made.
 */
var exports = function(accumulatePoints, idempotencyKey, locationId) {
  var _this = this;

  _this['accumulate_points'] = accumulatePoints;
  _this['idempotency_key'] = idempotencyKey;
  _this['location_id'] = locationId;
};

/**
 * Constructs a <code>AccumulateLoyaltyPointsRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/AccumulateLoyaltyPointsRequest} obj Optional instance to populate.
 * @return {module:model/AccumulateLoyaltyPointsRequest} The populated <code>AccumulateLoyaltyPointsRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('accumulate_points')) {
      obj['accumulate_points'] = LoyaltyEventAccumulatePoints.constructFromObject(data['accumulate_points']);
    }
      if (data.hasOwnProperty('idempotency_key')) {
      obj['idempotency_key'] = ApiClient.convertToType(data['idempotency_key'], 'String');
    }
      if (data.hasOwnProperty('location_id')) {
      obj['location_id'] = ApiClient.convertToType(data['location_id'], 'String');
    }
    }
  return obj;
}

/**
 * The points to add to the account.  If you are using the Orders API to manage orders, you   specify the order ID. Otherwise, specify the  points to add.
 * @member {module:model/LoyaltyEventAccumulatePoints} accumulate_points
 */
exports.prototype['accumulate_points'] = undefined;
/**
 * A unique string that identifies the `AccumulateLoyaltyPoints` request.  Keys can be any valid string but must be unique for every request.
 * @member {String} idempotency_key
 */
exports.prototype['idempotency_key'] = undefined;
/**
 * The `location` where the purchase was made.
 * @member {String} location_id
 */
exports.prototype['location_id'] = undefined;



module.exports = exports;



