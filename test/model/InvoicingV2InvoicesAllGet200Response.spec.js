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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CyberSource);
  }
}(this, function(expect, CyberSource) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CyberSource.InvoicingV2InvoicesAllGet200Response();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InvoicingV2InvoicesAllGet200Response', function() {
    it('should create an instance of InvoicingV2InvoicesAllGet200Response', function() {
      // uncomment below and update the code to test InvoicingV2InvoicesAllGet200Response
      //var instane = new CyberSource.InvoicingV2InvoicesAllGet200Response();
      //expect(instance).to.be.a(CyberSource.InvoicingV2InvoicesAllGet200Response);
    });

    it('should have the property links (base name: "_links")', function() {
      // uncomment below and update the code to test the property links
      //var instane = new CyberSource.InvoicingV2InvoicesAllGet200Response();
      //expect(instance).to.be();
    });

    it('should have the property submitTimeUtc (base name: "submitTimeUtc")', function() {
      // uncomment below and update the code to test the property submitTimeUtc
      //var instane = new CyberSource.InvoicingV2InvoicesAllGet200Response();
      //expect(instance).to.be();
    });

    it('should have the property totalInvoices (base name: "totalInvoices")', function() {
      // uncomment below and update the code to test the property totalInvoices
      //var instane = new CyberSource.InvoicingV2InvoicesAllGet200Response();
      //expect(instance).to.be();
    });

    it('should have the property invoices (base name: "invoices")', function() {
      // uncomment below and update the code to test the property invoices
      //var instane = new CyberSource.InvoicingV2InvoicesAllGet200Response();
      //expect(instance).to.be();
    });

  });

}));