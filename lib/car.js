/**
 *
 * @namespace faker.cars
 */
function cars (faker) {
  var f = faker.fake,
      Helpers = faker.helpers;

  /**
   * Generates random zipcode from format. If format is not specified, the
   * locale's zip format is used.
   *
   * @method faker.address.zipCode
   * @param {String} format
   */
  this.zipCode = function(format) {
    // if zip format is not specified, use the zip format defined for the locale
    if (typeof format === 'undefined') {
      var localeFormat = faker.definitions.address.postcode;
      if (typeof localeFormat === 'string') {
        format = localeFormat;
      } else {
        format = faker.random.arrayElement(localeFormat);
      }
    }
    return Helpers.replaceSymbols(format);
  }

  /**
   * Generates a random localized city name. The format string can contain any
   * method provided by faker wrapped in `{{}}`, e.g. `{{name.firstName}}` in
   * order to build the city name.
   *
   * If no format string is provided one of the following is randomly used:
   *
   * * `{{address.cityPrefix}} {{name.firstName}}{{address.citySuffix}}`
   * * `{{address.cityPrefix}} {{name.firstName}}`
   * * `{{name.firstName}}{{address.citySuffix}}`
   * * `{{name.lastName}}{{address.citySuffix}}`
   *
   * @method faker.address.city
   * @param {String} format

