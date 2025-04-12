const OrgLoginPage = require('./organization/orgLoginPage');

module.exports = {
    createPages(page) {
      return {
        orgLoginPage: new OrgLoginPage(page)
      };
    }
  };