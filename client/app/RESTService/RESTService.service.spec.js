'use strict';

describe('Service: LibraryService', function () {

  // load the service's module
  beforeEach(module('eplBooksApp'));

  // instantiate service
  var LibraryService;
  beforeEach(inject(function (_LibraryService_) {
    LibraryService = _LibraryService_;
  }));

  it('should do something', function () {
    !!LibraryService.should.be.true;
  });

});
