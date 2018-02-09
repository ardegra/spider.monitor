const entryDateParserTestPage = (state ={
  isTesting: false,
  parserName: "",
  entryDate: "",
  parserList: [
    {value: "TestingParser", label:"TestingParser"},
    {value: "AntaraOtoEntryDateParser", label:"AntaraOtoEntryDateParser"},
    {value: "ArrowEntryDateParser", label:"ArrowEntryDateParser"},
    {value: "AjnnEntryDateParser", label: "AjnnEntryDateParser"},
    {value: "DetikOtoEntryDateParser", label: "DetikOtoEntryDateParser"},
    {value: "KoranJakartaEntryDateParser", label: "KoranJakartaEntryDateParser"},
    {value: "MedcomEntryDateParser", label: "MedcomEntryDateParser"},
    {value: "TempoEntryDateParser", label: "TempoEntryDateParser"}
  ],
  result: {}
}, action) => {
  switch(action.type){
    case "ENTRY_DATE_PARSER_TEST_PAGE/ON_PARSER_NAME_CHANGE":
      return Object.assign({}, state, {parserName: action.value, isTesting: false})
    case "ENTRY_DATE_PARSER_TEST_PAGE/ON_ENTRY_DATE_CHANGE":
      return Object.assign({}, state, {entryDate: action.value, isTesting: false})
    case "ENTRY_DATE_PARSER_TEST_PAGE/TESTING":
      return Object.assign({}, state, {isTesting: true})
    case "ENTRY_DATE_PARSER_TEST_PAGE/TESTED":
      return Object.assign({}, state, {isTesting: false, result: action.response})
    default:
      return state
  }
}
export default entryDateParserTestPage