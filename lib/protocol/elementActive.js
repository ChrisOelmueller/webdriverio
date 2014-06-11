/**
 *
 * Get the element on the page that currently has focus. The element will be returned as a WebElement JSON object.
 *
 * @returns {String} A WebElement JSON object for the active element.
 *
 * @see  https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/element/active
 *
 */

module.exports = function elementActive () {

    var requestOptions = {
        path: '/session/:sessionId/element/active',
        method: 'POST'
    };

    this.requestHandler.create(
        requestOptions,
        arguments[arguments.length - 1]
    );

};