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
var Address = require('./Address');
var V1MerchantLocationDetails = require('./V1MerchantLocationDetails');
var V1PhoneNumber = require('./V1PhoneNumber');




/**
 * The V1Merchant model module.
 * @module model/V1Merchant
 * @version 2.5.2
 */

/**
 * Constructs a new <code>V1Merchant</code>.
 * Defines the fields that are included in the response body of a request to the **RetrieveBusiness** endpoint.
 * @alias module:model/V1Merchant
 * @class
 */
var exports = function() {
  var _this = this;
















};

/**
 * Constructs a <code>V1Merchant</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1Merchant} obj Optional instance to populate.
 * @return {module:model/V1Merchant} The populated <code>V1Merchant</code> instance.
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
      if (data.hasOwnProperty('email')) {
      obj['email'] = ApiClient.convertToType(data['email'], 'String');
    }
      if (data.hasOwnProperty('account_type')) {
      obj['account_type'] = ApiClient.convertToType(data['account_type'], 'String');
    }
      if (data.hasOwnProperty('account_capabilities')) {
      obj['account_capabilities'] = ApiClient.convertToType(data['account_capabilities'], ['String']);
    }
      if (data.hasOwnProperty('country_code')) {
      obj['country_code'] = ApiClient.convertToType(data['country_code'], 'String');
    }
      if (data.hasOwnProperty('language_code')) {
      obj['language_code'] = ApiClient.convertToType(data['language_code'], 'String');
    }
      if (data.hasOwnProperty('currency_code')) {
      obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
    }
      if (data.hasOwnProperty('business_name')) {
      obj['business_name'] = ApiClient.convertToType(data['business_name'], 'String');
    }
      if (data.hasOwnProperty('business_address')) {
      obj['business_address'] = Address.constructFromObject(data['business_address']);
    }
      if (data.hasOwnProperty('business_phone')) {
      obj['business_phone'] = V1PhoneNumber.constructFromObject(data['business_phone']);
    }
      if (data.hasOwnProperty('business_type')) {
      obj['business_type'] = ApiClient.convertToType(data['business_type'], 'String');
    }
      if (data.hasOwnProperty('shipping_address ')) {
      obj['shipping_address '] = Address.constructFromObject(data['shipping_address ']);
    }
      if (data.hasOwnProperty('location_details')) {
      obj['location_details'] = V1MerchantLocationDetails.constructFromObject(data['location_details']);
    }
      if (data.hasOwnProperty('market_url')) {
      obj['market_url'] = ApiClient.convertToType(data['market_url'], 'String');
    }
    }
  return obj;
}

/**
 * The merchant account's unique identifier.
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * The name associated with the merchant account.
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * The email address associated with the merchant account.
 * @member {String} email
 */
exports.prototype['email'] = undefined;
/**
 * Indicates whether the merchant account corresponds to a single-location account (LOCATION) or a business account (BUSINESS). This value is almost always LOCATION.
 * @member {module:model/V1Merchant.AccountTypeEnum} account_type
 */
exports.prototype['account_type'] = undefined;
/**
 * Capabilities that are enabled for the merchant's Square account. Capabilities that are not listed in this array are not enabled for the account.
 * @member {Array.<String>} account_capabilities
 */
exports.prototype['account_capabilities'] = undefined;
/**
 * The country associated with the merchant account, in ISO 3166-1-alpha-2 format.
 * @member {String} country_code
 */
exports.prototype['country_code'] = undefined;
/**
 * The language associated with the merchant account, in BCP 47 format.
 * @member {String} language_code
 */
exports.prototype['language_code'] = undefined;
/**
 * The currency associated with the merchant account, in ISO 4217 format. For example, the currency code for US dollars is USD.
 * @member {String} currency_code
 */
exports.prototype['currency_code'] = undefined;
/**
 * The name of the merchant's business.
 * @member {String} business_name
 */
exports.prototype['business_name'] = undefined;
/**
 * The address of the merchant's business.
 * @member {module:model/Address} business_address
 */
exports.prototype['business_address'] = undefined;
/**
 * The phone number of the merchant's business.
 * @member {module:model/V1PhoneNumber} business_phone
 */
exports.prototype['business_phone'] = undefined;
/**
 * The type of business operated by the merchant.
 * @member {module:model/V1Merchant.BusinessTypeEnum} business_type
 */
exports.prototype['business_type'] = undefined;
/**
 * The merchant's shipping address.
 * @member {module:model/Address} shipping_address 
 */
exports.prototype['shipping_address '] = undefined;
/**
 * @member {module:model/V1MerchantLocationDetails} location_details
 */
exports.prototype['location_details'] = undefined;
/**
 * The URL of the merchant's online store.
 * @member {String} market_url
 */
exports.prototype['market_url'] = undefined;


  /**
   * Allowed values for the <code>account_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AccountTypeEnum = {
    /**
     * value: "LOCATION"
     * @const
     */
    "LOCATION": "LOCATION",
    /**
     * value: "BUSINESS"
     * @const
     */
    "BUSINESS": "BUSINESS"  };

  /**
   * Allowed values for the <code>business_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.BusinessTypeEnum = {
    /**
     * value: "ACCOUNTING"
     * @const
     */
    "ACCOUNTING": "ACCOUNTING",
    /**
     * value: "APPAREL_AND_ACCESSORY_SHOPS"
     * @const
     */
    "APPAREL_AND_ACCESSORY_SHOPS": "APPAREL_AND_ACCESSORY_SHOPS",
    /**
     * value: "ART_DEALERS_GALLERIES"
     * @const
     */
    "ART_DEALERS_GALLERIES": "ART_DEALERS_GALLERIES",
    /**
     * value: "ART_DESIGN_AND_PHOTOGRAPHY"
     * @const
     */
    "ART_DESIGN_AND_PHOTOGRAPHY": "ART_DESIGN_AND_PHOTOGRAPHY",
    /**
     * value: "BAR_CLUB_LOUNGE"
     * @const
     */
    "BAR_CLUB_LOUNGE": "BAR_CLUB_LOUNGE",
    /**
     * value: "BEAUTY_AND_BARBER_SHOPS"
     * @const
     */
    "BEAUTY_AND_BARBER_SHOPS": "BEAUTY_AND_BARBER_SHOPS",
    /**
     * value: "BOOK_STORES"
     * @const
     */
    "BOOK_STORES": "BOOK_STORES",
    /**
     * value: "BUSINESS_SERVICES"
     * @const
     */
    "BUSINESS_SERVICES": "BUSINESS_SERVICES",
    /**
     * value: "CATERING"
     * @const
     */
    "CATERING": "CATERING",
    /**
     * value: "CHARITABLE_SOCIAL_SERVICE_ORGANIZATIONS"
     * @const
     */
    "CHARITABLE_SOCIAL_SERVICE_ORGANIZATIONS": "CHARITABLE_SOCIAL_SERVICE_ORGANIZATIONS",
    /**
     * value: "CHARITIBLE_ORGS"
     * @const
     */
    "CHARITIBLE_ORGS": "CHARITIBLE_ORGS",
    /**
     * value: "CLEANING_SERVICES"
     * @const
     */
    "CLEANING_SERVICES": "CLEANING_SERVICES",
    /**
     * value: "COMPUTER_EQUIPMENT_SOFTWARE_MAINTENANCE_REPAIR_SERVICES"
     * @const
     */
    "COMPUTER_EQUIPMENT_SOFTWARE_MAINTENANCE_REPAIR_SERVICES": "COMPUTER_EQUIPMENT_SOFTWARE_MAINTENANCE_REPAIR_SERVICES",
    /**
     * value: "CONSULTANT"
     * @const
     */
    "CONSULTANT": "CONSULTANT",
    /**
     * value: "CONTRACTORS"
     * @const
     */
    "CONTRACTORS": "CONTRACTORS",
    /**
     * value: "DELIVERY_SERVICES"
     * @const
     */
    "DELIVERY_SERVICES": "DELIVERY_SERVICES",
    /**
     * value: "DENTISTRY"
     * @const
     */
    "DENTISTRY": "DENTISTRY",
    /**
     * value: "EDUCATION"
     * @const
     */
    "EDUCATION": "EDUCATION",
    /**
     * value: "FOOD_STORES_CONVENIENCE_STORES_AND_SPECIALTY_MARKETS"
     * @const
     */
    "FOOD_STORES_CONVENIENCE_STORES_AND_SPECIALTY_MARKETS": "FOOD_STORES_CONVENIENCE_STORES_AND_SPECIALTY_MARKETS",
    /**
     * value: "FOOD_TRUCK_CART"
     * @const
     */
    "FOOD_TRUCK_CART": "FOOD_TRUCK_CART",
    /**
     * value: "FURNITURE_HOME_AND_OFFICE_EQUIPMENT"
     * @const
     */
    "FURNITURE_HOME_AND_OFFICE_EQUIPMENT": "FURNITURE_HOME_AND_OFFICE_EQUIPMENT",
    /**
     * value: "FURNITURE_HOME_GOODS"
     * @const
     */
    "FURNITURE_HOME_GOODS": "FURNITURE_HOME_GOODS",
    /**
     * value: "HOTELS_AND_LODGING"
     * @const
     */
    "HOTELS_AND_LODGING": "HOTELS_AND_LODGING",
    /**
     * value: "INDIVIDUAL_USE"
     * @const
     */
    "INDIVIDUAL_USE": "INDIVIDUAL_USE",
    /**
     * value: "JEWELRY_AND_WATCHES"
     * @const
     */
    "JEWELRY_AND_WATCHES": "JEWELRY_AND_WATCHES",
    /**
     * value: "LANDSCAPING_AND_HORTICULTURAL_SERVICES"
     * @const
     */
    "LANDSCAPING_AND_HORTICULTURAL_SERVICES": "LANDSCAPING_AND_HORTICULTURAL_SERVICES",
    /**
     * value: "LANGUAGE_SCHOOLS"
     * @const
     */
    "LANGUAGE_SCHOOLS": "LANGUAGE_SCHOOLS",
    /**
     * value: "LEGAL_SERVICES"
     * @const
     */
    "LEGAL_SERVICES": "LEGAL_SERVICES",
    /**
     * value: "MEDICAL_PRACTITIONERS"
     * @const
     */
    "MEDICAL_PRACTITIONERS": "MEDICAL_PRACTITIONERS",
    /**
     * value: "MEDICAL_SERVICES_AND_HEALTH_PRACTITIONERS"
     * @const
     */
    "MEDICAL_SERVICES_AND_HEALTH_PRACTITIONERS": "MEDICAL_SERVICES_AND_HEALTH_PRACTITIONERS",
    /**
     * value: "MEMBERSHIP_ORGANIZATIONS"
     * @const
     */
    "MEMBERSHIP_ORGANIZATIONS": "MEMBERSHIP_ORGANIZATIONS",
    /**
     * value: "MUSIC_AND_ENTERTAINMENT"
     * @const
     */
    "MUSIC_AND_ENTERTAINMENT": "MUSIC_AND_ENTERTAINMENT",
    /**
     * value: "OTHER"
     * @const
     */
    "OTHER": "OTHER",
    /**
     * value: "OUTDOOR_MARKETS"
     * @const
     */
    "OUTDOOR_MARKETS": "OUTDOOR_MARKETS",
    /**
     * value: "PERSONAL_SERVICES"
     * @const
     */
    "PERSONAL_SERVICES": "PERSONAL_SERVICES",
    /**
     * value: "POLITICAL_ORGANIZATIONS"
     * @const
     */
    "POLITICAL_ORGANIZATIONS": "POLITICAL_ORGANIZATIONS",
    /**
     * value: "PROFESSIONAL_SERVICES"
     * @const
     */
    "PROFESSIONAL_SERVICES": "PROFESSIONAL_SERVICES",
    /**
     * value: "REAL_ESTATE"
     * @const
     */
    "REAL_ESTATE": "REAL_ESTATE",
    /**
     * value: "RECREATION_SERVICES"
     * @const
     */
    "RECREATION_SERVICES": "RECREATION_SERVICES",
    /**
     * value: "REPAIR_SHOPS_AND_RELATED_SERVICES"
     * @const
     */
    "REPAIR_SHOPS_AND_RELATED_SERVICES": "REPAIR_SHOPS_AND_RELATED_SERVICES",
    /**
     * value: "RESTAURANTS"
     * @const
     */
    "RESTAURANTS": "RESTAURANTS",
    /**
     * value: "RETAIL_SHOPS"
     * @const
     */
    "RETAIL_SHOPS": "RETAIL_SHOPS",
    /**
     * value: "SCHOOLS_AND_EDUCATIONAL_SERVICES"
     * @const
     */
    "SCHOOLS_AND_EDUCATIONAL_SERVICES": "SCHOOLS_AND_EDUCATIONAL_SERVICES",
    /**
     * value: "SPORTING_GOODS"
     * @const
     */
    "SPORTING_GOODS": "SPORTING_GOODS",
    /**
     * value: "TAXICABS_AND_LIMOUSINES"
     * @const
     */
    "TAXICABS_AND_LIMOUSINES": "TAXICABS_AND_LIMOUSINES",
    /**
     * value: "TICKET_SALES"
     * @const
     */
    "TICKET_SALES": "TICKET_SALES",
    /**
     * value: "TOURISM"
     * @const
     */
    "TOURISM": "TOURISM",
    /**
     * value: "TRAVEL_TOURISM"
     * @const
     */
    "TRAVEL_TOURISM": "TRAVEL_TOURISM",
    /**
     * value: "VETERINARY_SERVICES"
     * @const
     */
    "VETERINARY_SERVICES": "VETERINARY_SERVICES",
    /**
     * value: "WEB_DEV_DESIGN"
     * @const
     */
    "WEB_DEV_DESIGN": "WEB_DEV_DESIGN"  };


module.exports = exports;



