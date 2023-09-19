/**
 * Function to convert Tags array retrieved from DB into an object, keeping only the tag name and id.
 * @param {array} arr Tag array retrieved from DB.
 * Example: [{id: 1, tag: 'Looking', createdAt: '2023-08-04T12:44:51.754Z', updatedAt: '2023-08-04T12:44:51.754Z'}]
 * @returns {object} An object with name of tag as the key and tag id as the value
 * Example: {Looking: 1, Speaking: 2}
 */
const convertArrayToObject = (arr) => {
  const obj = {};

  arr.forEach((item) => {
    obj[item.tag] = item.id;
  });

  return obj;
};

/**
 * Function to generate the final Tag id required.
 * Returned data will be used to passed into FindAll function to get the games tagged with these ID.
 * @param {object} queryData Data sent from frontend
 * Example: {Looking: 'true', Speaking: 'true'}
 * @param {object} tags Tags' ID information retrieved from DB
 * Example: {Looking: 1, Speaking: 2}
 * @returns {array} An array of tag ID
 */
const generateRequiredTagId = (queryData, tags) => {
  const requiredTagsId = [];

  console.log(queryData);

  for (const key in queryData) {
    if (queryData[key] === "true") {
      requiredTagsId.push(tags[key]);
    }
  }
  return requiredTagsId;
};

/**
 * Function to generate the final Tag id required.
 * Returned data will be used to passed into FindAll function to get the games tagged with these ID.
 * @param {object} queryData Data sent from frontend
 * Example: {Looking: 'true', Speaking: 'true'}
 * @param {object} tags Tags' ID information retrieved from DB
 * Example: {Looking: 1, Speaking: 2}
 * @returns {array} An array of tag ID
 */
const generateExcludedTagId = (queryData, tags) => {
  const excludedTagsId = [];

  for (const key in queryData) {
    if (queryData[key] === "false") {
      excludedTagsId.push(tags[key]);
    }
  }
  return excludedTagsId;
};

/**
 * Function to set selection of data for SQL query
 * @param {object} queryData
 * @returns {object} Revised query data and selection type
 */
const revertSelection = (queryData) => {
  let selectionType = "playStyle";

  // If no tags are selected, return selection type as all so that SQL query can get all games
  if (
    queryData["Looking"] === "true" &&
    queryData["Speaking"] === "true" &&
    queryData["Arms"] === "true" &&
    queryData["Legs"] === "true" &&
    queryData["Voice only"] === "false" &&
    queryData["Sensitive"] === "false" &&
    queryData["Finger-play"] === "false"
  ) {
    selectionType = "all";
    return { queryData, selectionType };
  } else if (
    // If no playstyle is selected, set all play style to true. So that SQL query can get all games with all playstyle
    queryData["Voice only"] === "false" &&
    queryData["Sensitive"] === "false" &&
    queryData["Finger-play"] === "false"
  ) {
    console.log(true);
    queryData["Voice only"] = "true";
    queryData["Sensitive"] = "true";
    queryData["Finger-play"] = "true";
    selectionType = "playWithout";
  }

  return { queryData, selectionType };
};

module.exports = {
  convertArrayToObject,
  generateRequiredTagId,
  generateExcludedTagId,
  revertSelection,
};
