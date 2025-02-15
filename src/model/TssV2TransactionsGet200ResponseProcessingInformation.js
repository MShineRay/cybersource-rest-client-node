/**
 * CyberSource Merged Spec
 * All CyberSource API specs merged together. These are available at https://developer.cybersource.com/api/reference/api-reference.html
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions', 'model/TssV2TransactionsGet200ResponseProcessingInformationBankTransferOptions', 'model/TssV2TransactionsGet200ResponseProcessingInformationJapanPaymentOptions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions'), require('./TssV2TransactionsGet200ResponseProcessingInformationBankTransferOptions'), require('./TssV2TransactionsGet200ResponseProcessingInformationJapanPaymentOptions'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.TssV2TransactionsGet200ResponseProcessingInformation = factory(root.CyberSource.ApiClient, root.CyberSource.TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions, root.CyberSource.TssV2TransactionsGet200ResponseProcessingInformationBankTransferOptions, root.CyberSource.TssV2TransactionsGet200ResponseProcessingInformationJapanPaymentOptions);
  }
}(this, function(ApiClient, TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions, TssV2TransactionsGet200ResponseProcessingInformationBankTransferOptions, TssV2TransactionsGet200ResponseProcessingInformationJapanPaymentOptions) {
  'use strict';




  /**
   * The TssV2TransactionsGet200ResponseProcessingInformation model module.
   * @module model/TssV2TransactionsGet200ResponseProcessingInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TssV2TransactionsGet200ResponseProcessingInformation</code>.
   * @alias module:model/TssV2TransactionsGet200ResponseProcessingInformation
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>TssV2TransactionsGet200ResponseProcessingInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TssV2TransactionsGet200ResponseProcessingInformation} obj Optional instance to populate.
   * @return {module:model/TssV2TransactionsGet200ResponseProcessingInformation} The populated <code>TssV2TransactionsGet200ResponseProcessingInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('industryDataType')) {
        obj['industryDataType'] = ApiClient.convertToType(data['industryDataType'], 'String');
      }
      if (data.hasOwnProperty('paymentSolution')) {
        obj['paymentSolution'] = ApiClient.convertToType(data['paymentSolution'], 'String');
      }
      if (data.hasOwnProperty('commerceIndicator')) {
        obj['commerceIndicator'] = ApiClient.convertToType(data['commerceIndicator'], 'String');
      }
      if (data.hasOwnProperty('businessApplicationId')) {
        obj['businessApplicationId'] = ApiClient.convertToType(data['businessApplicationId'], 'String');
      }
      if (data.hasOwnProperty('authorizationOptions')) {
        obj['authorizationOptions'] = TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions.constructFromObject(data['authorizationOptions']);
      }
      if (data.hasOwnProperty('bankTransferOptions')) {
        obj['bankTransferOptions'] = TssV2TransactionsGet200ResponseProcessingInformationBankTransferOptions.constructFromObject(data['bankTransferOptions']);
      }
      if (data.hasOwnProperty('japanPaymentOptions')) {
        obj['japanPaymentOptions'] = TssV2TransactionsGet200ResponseProcessingInformationJapanPaymentOptions.constructFromObject(data['japanPaymentOptions']);
      }
    }
    return obj;
  }

  /**
   * Indicates that the transaction includes industry-specific data.  Possible Values: - `airline` - `restaurant` - `lodging` - `auto_rental` - `transit` - `healthcare_medical` - `healthcare_transit` - `transit`  #### Card Present, Airlines and Auto Rental You must set this field to `airline` in order for airline data to be sent to the processor. For example, if this field is not set to `airline` or is not included in the request, no airline data is sent to the processor.  You must set this field to `restaurant` in order for restaurant data to be sent to the processor. When this field is not set to `restaurant` or is not included in the request, no restaurant data is sent to the processor.  You must set this field to `auto_rental` in order for auto rental data to be sent to the processor. For example, if this field is not set to `auto_rental` or is not included in the request, no auto rental data is sent to the processor.  Restaurant data is supported only on CyberSource through VisaNet. 
   * @member {String} industryDataType
   */
  exports.prototype['industryDataType'] = undefined;
  /**
   * Type of digital payment solution for the transaction. 
   * @member {String} paymentSolution
   */
  exports.prototype['paymentSolution'] = undefined;
  /**
   * Type of transaction. Some payment card companies use this information when determining discount rates.  #### Used by **Authorization** Required payer authentication transactions; otherwise, optional. **Credit** Required for standalone credits on Chase Paymentech solutions; otherwise, optional.  The list of valid values in this field depends on your processor. See Appendix I, \"Commerce Indicators,\" on page 441 of the Cybersource Credit Card Guide.  #### Ingenico ePayments When you omit this field for Ingenico ePayments, the processor uses the default transaction type they have on file for you instead of the default value (listed in Appendix I, \"Commerce Indicators,\" on page 441.)  #### Payer Authentication Transactions For the possible values and requirements, see \"Payer Authentication,\" page 195.  #### Card Present You must set this field to `retail`. This field is required for a card-present transaction. Note that this should ONLY be used when the cardholder and card are present at the time of the transaction. For all keyed transactions originated from a POS terminal where the cardholder and card are not present, commerceIndicator should be submitted as “moto\" 
   * @member {String} commerceIndicator
   */
  exports.prototype['commerceIndicator'] = undefined;
  /**
   * Payouts transaction type. Required for OCT transactions. This field is a pass-through, which means that CyberSource does not verify the value or modify it in any way before sending it to the processor. **Note** When the request includes this field, this value overrides the information in your CyberSource account.  For valid values, see the `invoiceHeader_businessApplicationID` field description in [Payouts Using the Simple Order API.](http://apps.cybersource.com/library/documentation/dev_guides/payouts_SO/Payouts_SO_API.pdf) 
   * @member {String} businessApplicationId
   */
  exports.prototype['businessApplicationId'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions} authorizationOptions
   */
  exports.prototype['authorizationOptions'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsGet200ResponseProcessingInformationBankTransferOptions} bankTransferOptions
   */
  exports.prototype['bankTransferOptions'] = undefined;
  /**
   * @member {module:model/TssV2TransactionsGet200ResponseProcessingInformationJapanPaymentOptions} japanPaymentOptions
   */
  exports.prototype['japanPaymentOptions'] = undefined;



  return exports;
}));


