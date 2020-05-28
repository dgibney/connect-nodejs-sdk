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
 * The RetrieveLoyaltyRewardRequest model module.
 * Note: This model is in beta.
 * @module model/RetrieveLoyaltyRewardRequest
 */

/**
 * Constructs a new <code>RetrieveLoyaltyRewardRequest</code>.
 * A request to retrieve a loyalty reward.
 * @alias module:model/RetrieveLoyaltyRewardRequest
 * @class
 */
var exports = function() {
  var _this = this;

};

/**
 * Constructs a <code>RetrieveLoyaltyRewardRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/RetrieveLoyaltyRewardRequest} obj Optional instance to populate.
 * @return {module:model/RetrieveLoyaltyRewardRequest} The populated <code>RetrieveLoyaltyRewardRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    }
  return obj;
}




module.exports = exports;


