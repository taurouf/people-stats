export const optionsManagement = {
  section: "country",
  header: {
    searchName: "country",
    button: {
      actived: false,
      left: {
        title: "country",
        activated: false,
      },
      right: {
        title: "country",
        activated: false,
      },
    },
  },
  sort: {
    activated: true, //true = authrized sort filter
    names: ["Id"],
  },
  link: {
    //For not use link redirect you don't need to set this
    //For example: url :  "/country/:email"
    //pathName: "country",
    //fieldName: "id", // Select field in data table for example: row.original.email
    //rowHoverColor: null, //add tailwinds colors, for default is bg-gray-100
  },
  csv: {
    actived: false,
    name: "country",
  },
};
