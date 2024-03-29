import * as constants from '../static/constants';


/*
 * Auth actions
 */

export const saveIsSignedIn = isSignedIn => ({
  type: constants.ACTION_SAVE_IS_SIGNED_IN,
  isSignedIn,
});

export const saveAuthUserFirstName = firstName => ({
  type: constants.ACTION_SAVE_AUTH_USER_FIRST_NAME,
  firstName,
});

/*
 * Home and navbar management actions
 */

export const saveCurrentProductCode = currentProductCode => ({
  type: constants.ACTION_SAVE_CURRENT_PRODUCT_CODE,
  currentProductCode,
});

export const saveWindowWidth = windowWidth => ({
  type: constants.ACTION_SAVE_WINDOW_WIDTH,
  windowWidth,
});

/*
 * Group management actions
 */

export const saveIsAuthUserInGroup = isAuthUserInGroup => ({
  type: constants.ACTION_SAVE_IS_AUTH_USER_IN_GROUP,
  isAuthUserInGroup,
});

export const saveAuthUserGroupInfo = (groupId, groupName) => ({
  type: constants.ACTION_SAVE_AUTH_USER_GROUP_INFO,
  groupId,
  groupName,
});

export const saveAuthUserActiveGroupInfo = (groupId, groupName) => ({
  type: constants.ACTION_SAVE_AUTH_USER_ACTIVE_GROUP_INFO,
  groupId,
  groupName,
});

export const switchGroup = groupId => ({
  type: constants.ACTION_SWITCH_GROUP,
  groupId,
});

export const saveGroupFirstNameFieldValue = groupFirstNameFieldValue => ({
  type: constants.ACTION_SAVE_GROUP_FIRST_NAME_FIELD_VALUE,
  groupFirstNameFieldValue,
});

export const saveGroupLastNameFieldValue = groupLastNameFieldValue => ({
  type: constants.ACTION_SAVE_GROUP_LAST_NAME_FIELD_VALUE,
  groupLastNameFieldValue,
});

export const saveGroupIdFieldValue = groupIdFieldValue => ({
  type: constants.ACTION_SAVE_GROUP_ID_FIELD_VALUE,
  groupIdFieldValue,
});

export const saveGroupAddState = groupAddState => ({
  type: constants.ACTION_SAVE_GROUP_ADD_STATE,
  groupAddState,
});

export const saveGroupJoinValidationState = groupJoinValidationState => ({
  type: constants.ACTION_SAVE_GROUP_JOIN_VALIDATION_STATE,
  groupJoinValidationState,
});

/*
 * Care profile Actions
 */

export const saveFetchedCareRecipient = () => ({
  type: constants.ACTION_SAVE_FETCHED_CARE_RECIPIENT,
});

export const saveCareRecipientUid = careRecipientUid => ({
  type: constants.ACTION_SAVE_CARE_RECIPIENT_UID,
  careRecipientUid,
});

export const updateCareRecipient = careRecipient => ({
  type: constants.ACTION_UPDATE_CARE_RECIPIENT,
  careRecipient,
});

export const saveCareProfileFieldValueLocally = (fieldId, fieldValue) => ({
  type: constants.ACTION_SAVE_CARE_PROFILE_FIELD_VALUE_LOCALLY,
  fieldId,
  fieldValue,
});

export const saveCareProfileIsInEditMode = (infoTypeId, isInEditMode) => ({
  type: constants.ACTION_SAVE_CARE_PROFILE_IS_IN_EDIT_MODE,
  infoTypeId,
  isInEditMode,
});

export const unmountCareProfileNewMemberForm = () => ({
  type: constants.ACTION_UNMOUNT_CARE_PROFILE_NEW_MEMBER_FORM,
});

// selectedMember is a member ID
export const updateSelectCrSelectedMember = selectedMember => ({
  type: constants.ACTION_UPDATE_SELECT_CR_SELECTED_MEMBER,
  selectedMember,
});

export const toggleSelectCrUserClickedSelect = () => ({
  type: constants.ACTION_TOGGLE_SELECT_CR_USER_CLICKED_SELECT,
});

export const updateSelectCrGroupMembers = members => ({
  type: constants.ACTION_UPDATE_SELECT_CR_GROUP_MEMBERS,
  members,
});

/*
 * Timeline Actions
 */

export const saveNumMessages = numMessages => ({
  type: constants.ACTION_SAVE_NUM_MESSAGES,
  numMessages,
});

export const clearTimelineMessages = () => ({
  type: constants.ACTION_CLEAR_TIMELINE_MESSAGES,
});

export const saveTimelineMessage = message => ({
  type: constants.ACTION_SAVE_TIMELINE_MESSAGE,
  message,
});

export const deleteTimelineMessage = message => ({
  type: constants.ACTION_DELETE_TIMELINE_MESSAGE,
  message,
});

export const saveTimelineFilterCategories = filterCategories => ({
  type: constants.ACTION_SAVE_TIMELINE_FILTER_CATEGORIES,
  filterCategories,
});

export const toggleTimelineFilterButtons = showFilters => ({
  type: constants.ACTION_TOGGLE_TIMELINE_FILTER_BUTTONS,
  showFilters,
});
