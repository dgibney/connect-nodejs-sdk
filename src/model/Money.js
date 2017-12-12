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
 * The Money model module.
 * @module model/Money
 * @version 2.5.2
 */

/**
 * Constructs a new <code>Money</code>.
 * Represents an amount of money.  __Important:__ Unlike version 1 of the Connect API, __all monetary amounts returned by v2 endpoints are positive.__ (In v1, monetary amounts are negative if they represent money being paid _by_ a merchant, instead of money being paid _to_ a merchant.)
 * @alias module:model/Money
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>Money</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Money} obj Optional instance to populate.
 * @return {module:model/Money} The populated <code>Money</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('amount')) {
      obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
    }
      if (data.hasOwnProperty('currency')) {
      obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
    }
    }
  return obj;
}

/**
 * The amount of money, in the smallest denomination of the currency indicated by `currency`. For example, when `currency` is `USD`, `amount` is in cents.
 * @member {Number} amount
 */
exports.prototype['amount'] = undefined;
/**
 * The type of currency, in __ISO 4217 format__. For example, the currency code for US dollars is `USD`.  See [Currency](#type-currency) for possible values.
 * @member {module:model/Money.CurrencyEnum} currency
 */
exports.prototype['currency'] = undefined;


  /**
   * Allowed values for the <code>currency</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CurrencyEnum = {
    /**
     * value: "UNKNOWN_CURRENCY"
     * @const
     */
    "UNKNOWN_CURRENCY": "UNKNOWN_CURRENCY",
    /**
     * value: "AED"
     * @const
     */
    "AED": "AED",
    /**
     * value: "AFN"
     * @const
     */
    "AFN": "AFN",
    /**
     * value: "ALL"
     * @const
     */
    "ALL": "ALL",
    /**
     * value: "AMD"
     * @const
     */
    "AMD": "AMD",
    /**
     * value: "ANG"
     * @const
     */
    "ANG": "ANG",
    /**
     * value: "AOA"
     * @const
     */
    "AOA": "AOA",
    /**
     * value: "ARS"
     * @const
     */
    "ARS": "ARS",
    /**
     * value: "AUD"
     * @const
     */
    "AUD": "AUD",
    /**
     * value: "AWG"
     * @const
     */
    "AWG": "AWG",
    /**
     * value: "AZN"
     * @const
     */
    "AZN": "AZN",
    /**
     * value: "BAM"
     * @const
     */
    "BAM": "BAM",
    /**
     * value: "BBD"
     * @const
     */
    "BBD": "BBD",
    /**
     * value: "BDT"
     * @const
     */
    "BDT": "BDT",
    /**
     * value: "BGN"
     * @const
     */
    "BGN": "BGN",
    /**
     * value: "BHD"
     * @const
     */
    "BHD": "BHD",
    /**
     * value: "BIF"
     * @const
     */
    "BIF": "BIF",
    /**
     * value: "BMD"
     * @const
     */
    "BMD": "BMD",
    /**
     * value: "BND"
     * @const
     */
    "BND": "BND",
    /**
     * value: "BOB"
     * @const
     */
    "BOB": "BOB",
    /**
     * value: "BOV"
     * @const
     */
    "BOV": "BOV",
    /**
     * value: "BRL"
     * @const
     */
    "BRL": "BRL",
    /**
     * value: "BSD"
     * @const
     */
    "BSD": "BSD",
    /**
     * value: "BTN"
     * @const
     */
    "BTN": "BTN",
    /**
     * value: "BWP"
     * @const
     */
    "BWP": "BWP",
    /**
     * value: "BYR"
     * @const
     */
    "BYR": "BYR",
    /**
     * value: "BZD"
     * @const
     */
    "BZD": "BZD",
    /**
     * value: "CAD"
     * @const
     */
    "CAD": "CAD",
    /**
     * value: "CDF"
     * @const
     */
    "CDF": "CDF",
    /**
     * value: "CHE"
     * @const
     */
    "CHE": "CHE",
    /**
     * value: "CHF"
     * @const
     */
    "CHF": "CHF",
    /**
     * value: "CHW"
     * @const
     */
    "CHW": "CHW",
    /**
     * value: "CLF"
     * @const
     */
    "CLF": "CLF",
    /**
     * value: "CLP"
     * @const
     */
    "CLP": "CLP",
    /**
     * value: "CNY"
     * @const
     */
    "CNY": "CNY",
    /**
     * value: "COP"
     * @const
     */
    "COP": "COP",
    /**
     * value: "COU"
     * @const
     */
    "COU": "COU",
    /**
     * value: "CRC"
     * @const
     */
    "CRC": "CRC",
    /**
     * value: "CUC"
     * @const
     */
    "CUC": "CUC",
    /**
     * value: "CUP"
     * @const
     */
    "CUP": "CUP",
    /**
     * value: "CVE"
     * @const
     */
    "CVE": "CVE",
    /**
     * value: "CZK"
     * @const
     */
    "CZK": "CZK",
    /**
     * value: "DJF"
     * @const
     */
    "DJF": "DJF",
    /**
     * value: "DKK"
     * @const
     */
    "DKK": "DKK",
    /**
     * value: "DOP"
     * @const
     */
    "DOP": "DOP",
    /**
     * value: "DZD"
     * @const
     */
    "DZD": "DZD",
    /**
     * value: "EGP"
     * @const
     */
    "EGP": "EGP",
    /**
     * value: "ERN"
     * @const
     */
    "ERN": "ERN",
    /**
     * value: "ETB"
     * @const
     */
    "ETB": "ETB",
    /**
     * value: "EUR"
     * @const
     */
    "EUR": "EUR",
    /**
     * value: "FJD"
     * @const
     */
    "FJD": "FJD",
    /**
     * value: "FKP"
     * @const
     */
    "FKP": "FKP",
    /**
     * value: "GBP"
     * @const
     */
    "GBP": "GBP",
    /**
     * value: "GEL"
     * @const
     */
    "GEL": "GEL",
    /**
     * value: "GHS"
     * @const
     */
    "GHS": "GHS",
    /**
     * value: "GIP"
     * @const
     */
    "GIP": "GIP",
    /**
     * value: "GMD"
     * @const
     */
    "GMD": "GMD",
    /**
     * value: "GNF"
     * @const
     */
    "GNF": "GNF",
    /**
     * value: "GTQ"
     * @const
     */
    "GTQ": "GTQ",
    /**
     * value: "GYD"
     * @const
     */
    "GYD": "GYD",
    /**
     * value: "HKD"
     * @const
     */
    "HKD": "HKD",
    /**
     * value: "HNL"
     * @const
     */
    "HNL": "HNL",
    /**
     * value: "HRK"
     * @const
     */
    "HRK": "HRK",
    /**
     * value: "HTG"
     * @const
     */
    "HTG": "HTG",
    /**
     * value: "HUF"
     * @const
     */
    "HUF": "HUF",
    /**
     * value: "IDR"
     * @const
     */
    "IDR": "IDR",
    /**
     * value: "ILS"
     * @const
     */
    "ILS": "ILS",
    /**
     * value: "INR"
     * @const
     */
    "INR": "INR",
    /**
     * value: "IQD"
     * @const
     */
    "IQD": "IQD",
    /**
     * value: "IRR"
     * @const
     */
    "IRR": "IRR",
    /**
     * value: "ISK"
     * @const
     */
    "ISK": "ISK",
    /**
     * value: "JMD"
     * @const
     */
    "JMD": "JMD",
    /**
     * value: "JOD"
     * @const
     */
    "JOD": "JOD",
    /**
     * value: "JPY"
     * @const
     */
    "JPY": "JPY",
    /**
     * value: "KES"
     * @const
     */
    "KES": "KES",
    /**
     * value: "KGS"
     * @const
     */
    "KGS": "KGS",
    /**
     * value: "KHR"
     * @const
     */
    "KHR": "KHR",
    /**
     * value: "KMF"
     * @const
     */
    "KMF": "KMF",
    /**
     * value: "KPW"
     * @const
     */
    "KPW": "KPW",
    /**
     * value: "KRW"
     * @const
     */
    "KRW": "KRW",
    /**
     * value: "KWD"
     * @const
     */
    "KWD": "KWD",
    /**
     * value: "KYD"
     * @const
     */
    "KYD": "KYD",
    /**
     * value: "KZT"
     * @const
     */
    "KZT": "KZT",
    /**
     * value: "LAK"
     * @const
     */
    "LAK": "LAK",
    /**
     * value: "LBP"
     * @const
     */
    "LBP": "LBP",
    /**
     * value: "LKR"
     * @const
     */
    "LKR": "LKR",
    /**
     * value: "LRD"
     * @const
     */
    "LRD": "LRD",
    /**
     * value: "LSL"
     * @const
     */
    "LSL": "LSL",
    /**
     * value: "LTL"
     * @const
     */
    "LTL": "LTL",
    /**
     * value: "LVL"
     * @const
     */
    "LVL": "LVL",
    /**
     * value: "LYD"
     * @const
     */
    "LYD": "LYD",
    /**
     * value: "MAD"
     * @const
     */
    "MAD": "MAD",
    /**
     * value: "MDL"
     * @const
     */
    "MDL": "MDL",
    /**
     * value: "MGA"
     * @const
     */
    "MGA": "MGA",
    /**
     * value: "MKD"
     * @const
     */
    "MKD": "MKD",
    /**
     * value: "MMK"
     * @const
     */
    "MMK": "MMK",
    /**
     * value: "MNT"
     * @const
     */
    "MNT": "MNT",
    /**
     * value: "MOP"
     * @const
     */
    "MOP": "MOP",
    /**
     * value: "MRO"
     * @const
     */
    "MRO": "MRO",
    /**
     * value: "MUR"
     * @const
     */
    "MUR": "MUR",
    /**
     * value: "MVR"
     * @const
     */
    "MVR": "MVR",
    /**
     * value: "MWK"
     * @const
     */
    "MWK": "MWK",
    /**
     * value: "MXN"
     * @const
     */
    "MXN": "MXN",
    /**
     * value: "MXV"
     * @const
     */
    "MXV": "MXV",
    /**
     * value: "MYR"
     * @const
     */
    "MYR": "MYR",
    /**
     * value: "MZN"
     * @const
     */
    "MZN": "MZN",
    /**
     * value: "NAD"
     * @const
     */
    "NAD": "NAD",
    /**
     * value: "NGN"
     * @const
     */
    "NGN": "NGN",
    /**
     * value: "NIO"
     * @const
     */
    "NIO": "NIO",
    /**
     * value: "NOK"
     * @const
     */
    "NOK": "NOK",
    /**
     * value: "NPR"
     * @const
     */
    "NPR": "NPR",
    /**
     * value: "NZD"
     * @const
     */
    "NZD": "NZD",
    /**
     * value: "OMR"
     * @const
     */
    "OMR": "OMR",
    /**
     * value: "PAB"
     * @const
     */
    "PAB": "PAB",
    /**
     * value: "PEN"
     * @const
     */
    "PEN": "PEN",
    /**
     * value: "PGK"
     * @const
     */
    "PGK": "PGK",
    /**
     * value: "PHP"
     * @const
     */
    "PHP": "PHP",
    /**
     * value: "PKR"
     * @const
     */
    "PKR": "PKR",
    /**
     * value: "PLN"
     * @const
     */
    "PLN": "PLN",
    /**
     * value: "PYG"
     * @const
     */
    "PYG": "PYG",
    /**
     * value: "QAR"
     * @const
     */
    "QAR": "QAR",
    /**
     * value: "RON"
     * @const
     */
    "RON": "RON",
    /**
     * value: "RSD"
     * @const
     */
    "RSD": "RSD",
    /**
     * value: "RUB"
     * @const
     */
    "RUB": "RUB",
    /**
     * value: "RWF"
     * @const
     */
    "RWF": "RWF",
    /**
     * value: "SAR"
     * @const
     */
    "SAR": "SAR",
    /**
     * value: "SBD"
     * @const
     */
    "SBD": "SBD",
    /**
     * value: "SCR"
     * @const
     */
    "SCR": "SCR",
    /**
     * value: "SDG"
     * @const
     */
    "SDG": "SDG",
    /**
     * value: "SEK"
     * @const
     */
    "SEK": "SEK",
    /**
     * value: "SGD"
     * @const
     */
    "SGD": "SGD",
    /**
     * value: "SHP"
     * @const
     */
    "SHP": "SHP",
    /**
     * value: "SLL"
     * @const
     */
    "SLL": "SLL",
    /**
     * value: "SOS"
     * @const
     */
    "SOS": "SOS",
    /**
     * value: "SRD"
     * @const
     */
    "SRD": "SRD",
    /**
     * value: "SSP"
     * @const
     */
    "SSP": "SSP",
    /**
     * value: "STD"
     * @const
     */
    "STD": "STD",
    /**
     * value: "SVC"
     * @const
     */
    "SVC": "SVC",
    /**
     * value: "SYP"
     * @const
     */
    "SYP": "SYP",
    /**
     * value: "SZL"
     * @const
     */
    "SZL": "SZL",
    /**
     * value: "THB"
     * @const
     */
    "THB": "THB",
    /**
     * value: "TJS"
     * @const
     */
    "TJS": "TJS",
    /**
     * value: "TMT"
     * @const
     */
    "TMT": "TMT",
    /**
     * value: "TND"
     * @const
     */
    "TND": "TND",
    /**
     * value: "TOP"
     * @const
     */
    "TOP": "TOP",
    /**
     * value: "TRY"
     * @const
     */
    "TRY": "TRY",
    /**
     * value: "TTD"
     * @const
     */
    "TTD": "TTD",
    /**
     * value: "TWD"
     * @const
     */
    "TWD": "TWD",
    /**
     * value: "TZS"
     * @const
     */
    "TZS": "TZS",
    /**
     * value: "UAH"
     * @const
     */
    "UAH": "UAH",
    /**
     * value: "UGX"
     * @const
     */
    "UGX": "UGX",
    /**
     * value: "USD"
     * @const
     */
    "USD": "USD",
    /**
     * value: "USN"
     * @const
     */
    "USN": "USN",
    /**
     * value: "USS"
     * @const
     */
    "USS": "USS",
    /**
     * value: "UYI"
     * @const
     */
    "UYI": "UYI",
    /**
     * value: "UYU"
     * @const
     */
    "UYU": "UYU",
    /**
     * value: "UZS"
     * @const
     */
    "UZS": "UZS",
    /**
     * value: "VEF"
     * @const
     */
    "VEF": "VEF",
    /**
     * value: "VND"
     * @const
     */
    "VND": "VND",
    /**
     * value: "VUV"
     * @const
     */
    "VUV": "VUV",
    /**
     * value: "WST"
     * @const
     */
    "WST": "WST",
    /**
     * value: "XAF"
     * @const
     */
    "XAF": "XAF",
    /**
     * value: "XAG"
     * @const
     */
    "XAG": "XAG",
    /**
     * value: "XAU"
     * @const
     */
    "XAU": "XAU",
    /**
     * value: "XBA"
     * @const
     */
    "XBA": "XBA",
    /**
     * value: "XBB"
     * @const
     */
    "XBB": "XBB",
    /**
     * value: "XBC"
     * @const
     */
    "XBC": "XBC",
    /**
     * value: "XBD"
     * @const
     */
    "XBD": "XBD",
    /**
     * value: "XCD"
     * @const
     */
    "XCD": "XCD",
    /**
     * value: "XDR"
     * @const
     */
    "XDR": "XDR",
    /**
     * value: "XOF"
     * @const
     */
    "XOF": "XOF",
    /**
     * value: "XPD"
     * @const
     */
    "XPD": "XPD",
    /**
     * value: "XPF"
     * @const
     */
    "XPF": "XPF",
    /**
     * value: "XPT"
     * @const
     */
    "XPT": "XPT",
    /**
     * value: "XTS"
     * @const
     */
    "XTS": "XTS",
    /**
     * value: "XXX"
     * @const
     */
    "XXX": "XXX",
    /**
     * value: "YER"
     * @const
     */
    "YER": "YER",
    /**
     * value: "ZAR"
     * @const
     */
    "ZAR": "ZAR",
    /**
     * value: "ZMK"
     * @const
     */
    "ZMK": "ZMK",
    /**
     * value: "ZMW"
     * @const
     */
    "ZMW": "ZMW",
    /**
     * value: "BTC"
     * @const
     */
    "BTC": "BTC"  };


module.exports = exports;



