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
 * The V1EmployeeRole model module.
 * @module model/V1EmployeeRole
 * @version 2.5.2
 */

/**
 * Constructs a new <code>V1EmployeeRole</code>.
 * @alias module:model/V1EmployeeRole
 * @class
 * @param name {String} The role's merchant-defined name.
 * @param permissions {Array.<module:model/V1EmployeeRole.PermissionsEnum>} The role's permissions.
 */
var exports = function(name, permissions) {
  var _this = this;


  _this['name'] = name;
  _this['permissions'] = permissions;



};

/**
 * Constructs a <code>V1EmployeeRole</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1EmployeeRole} obj Optional instance to populate.
 * @return {module:model/V1EmployeeRole} The populated <code>V1EmployeeRole</code> instance.
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
      if (data.hasOwnProperty('permissions')) {
      obj['permissions'] = ApiClient.convertToType(data['permissions'], ['String']);
    }
      if (data.hasOwnProperty('is_owner')) {
      obj['is_owner'] = ApiClient.convertToType(data['is_owner'], 'Boolean');
    }
      if (data.hasOwnProperty('created_at')) {
      obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
    }
      if (data.hasOwnProperty('updated_at')) {
      obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
    }
    }
  return obj;
}

/**
 * The role's unique ID, Can only be set by Square.
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * The role's merchant-defined name.
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * The role's permissions.
 * @member {Array.<module:model/V1EmployeeRole.PermissionsEnum>} permissions
 */
exports.prototype['permissions'] = undefined;
/**
 * If true, employees with this role have all permissions, regardless of the values indicated in permissions.
 * @member {Boolean} is_owner
 */
exports.prototype['is_owner'] = undefined;
/**
 * The time when the employee entity was created, in ISO 8601 format. Is set by Square when the Role is created.
 * @member {String} created_at
 */
exports.prototype['created_at'] = undefined;
/**
 * The time when the employee entity was most recently updated, in ISO 8601 format. Is set by Square when the Role updated.
 * @member {String} updated_at
 */
exports.prototype['updated_at'] = undefined;


  /**
   * Allowed values for the <code>permissions</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PermissionsEnum = {
    /**
     * value: "REGISTER_ACCESS_SALES_HISTORY"
     * @const
     */
    "ACCESS_SALES_HISTORY": "REGISTER_ACCESS_SALES_HISTORY",
    /**
     * value: "REGISTER_APPLY_RESTRICTED_DISCOUNTS"
     * @const
     */
    "APPLY_RESTRICTED_DISCOUNTS": "REGISTER_APPLY_RESTRICTED_DISCOUNTS",
    /**
     * value: "REGISTER_CHANGE_SETTINGS"
     * @const
     */
    "CHANGE_SETTINGS": "REGISTER_CHANGE_SETTINGS",
    /**
     * value: "REGISTER_EDIT_ITEM"
     * @const
     */
    "EDIT_ITEM": "REGISTER_EDIT_ITEM",
    /**
     * value: "REGISTER_ISSUE_REFUNDS"
     * @const
     */
    "ISSUE_REFUNDS": "REGISTER_ISSUE_REFUNDS",
    /**
     * value: "REGISTER_OPEN_CASH_DRAWER_OUTSIDE_SALE"
     * @const
     */
    "OPEN_CASH_DRAWER_OUTSIDE_SALE": "REGISTER_OPEN_CASH_DRAWER_OUTSIDE_SALE",
    /**
     * value: "REGISTER_VIEW_SUMMARY_REPORTS"
     * @const
     */
    "VIEW_SUMMARY_REPORTS": "REGISTER_VIEW_SUMMARY_REPORTS"  };


module.exports = exports;



