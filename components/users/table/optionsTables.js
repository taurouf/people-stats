const optionsManagement = {
  section: 'users',
  header: {
    searchName: 'users',
    button: {
      actived: false,
      left: {
        title: 'users',
        activated: false
      },
      right: {
        title: 'users',
        activated: false
      }
    }
  },
  sort: {
    activated: true, // true = authrized sort filter
    names: ['Id']
  },
  link: {
    // For not use link redirect you don't need to set this
    // For example: url :  "/users/:email"
    pathName: 'users',
    fieldName: 'login.uuid' // Select field in data table for example: row.original.email
    // rowHoverColor: null, //add tailwinds colors, for default is bg-gray-100
  },
  csv: {
    actived: false,
    name: 'users'
  }
};
export default optionsManagement;
