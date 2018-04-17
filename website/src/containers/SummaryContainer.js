// NB: Private functions are underscore-prefixed and exported for tests
import * as firebase from 'firebase';
import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import SummaryComponent from '../components/SummaryComponent';
import SummaryBasicInfoComponent from '../components/SummaryBasicInfoComponent';
import SummaryMedicalInfoComponent from '../components/SummaryMedicalInfoComponent';
import SummaryCareInfoComponent from '../components/SummaryCareInfoComponent';
import * as constants from '../static/constants';


const mapStateToProps = (state) => {
  let contentComponent;
  switch (state.summary.infoCategory) {
    case constants.SUMMARY_CATEGORY_CODE_BASIC:
      contentComponent = <SummaryBasicInfoComponent />;
      break;
    case constants.SUMMARY_CATEGORY_CODE_MEDICAL:
      contentComponent = <SummaryMedicalInfoComponent />;
      break;
    case constants.SUMMARY_CATEGORY_CODE_CARE:
      contentComponent = <SummaryCareInfoComponent />;
      break;
    default:
      contentComponent = <SummaryBasicInfoComponent />;
  }
  return {
    infoCategory: state.summary.infoCategory,
    fetched: state.summary.fetched,
    uid: state.summary.uid,
    firstName: state.summary.firstName,
    lastName: state.summary.lastName,
    profilePic: state.summary.profilePic,
    contentComponent,
  };
};


/**
 * Handle care recipient
 * Separated from _getCareRecipient for testing
 */
export const _handleCareRecipient = (dispatch, careRecipientUidRef, careRecipientUidSnapshot) => {
  // Tell the component it is ok to render the new care recipient page if the group has no
  // care recipient. Otherwise, render the Summary. Do not render anything if Lumi
  // has not finished fetching the active care recipient of this group.
  dispatch(actions.toggleFetchedCareRecipient());
  const careRecipientUid = careRecipientUidSnapshot.val();
  if (!careRecipientUid) {
    return;
  }
  // Update state with UID here so that if there is an active care recipient, render()
  // knows not to render the select care recipient component.
  dispatch(actions.saveCareRecipientUid(careRecipientUid));
  careRecipientUidRef.off();
  // Listen for changes in the active care recipient record and update state accordingly
  // TODO(kai): Remember to turn off this listener when we change care recipients
  const db = firebase.database();
  const careRecipientRef = db.ref(`${constants.DB_PATH_USERS}/${careRecipientUid}`);
  careRecipientRef.on(constants.DB_EVENT_NAME_VALUE, (careRecipientSnapshot) => {
    // Copy all fields to local state for brevity, even though we don't need all of them
    dispatch(actions.updateCareRecipient(careRecipientSnapshot.val()));
  });
};


/**
 * Get care recipient info from DB
 */
export const _getCareRecipient = async (dispatch) => {
  const db = firebase.database();
  const authUid = firebase.auth().currentUser.uid;
  const activeGroupRef = db.ref(`${constants.DB_PATH_USERS}/${authUid}/activeGroup`);
  const activeGroupSnapshot = await activeGroupRef.once(constants.DB_EVENT_NAME_VALUE);
  // activeCareRecipient field in DB stores the UID of the currently active care recipient
  const careRecipientUidRef =
    db.ref(`${constants.DB_PATH_LUMI_GROUPS}/${activeGroupSnapshot.val()}/activeCareRecipient`);
  careRecipientUidRef.on(constants.DB_EVENT_NAME_VALUE, (careRecipientUidSnapshot) => {
    _handleCareRecipient(dispatch, careRecipientUidRef, careRecipientUidSnapshot);
  });
};


const mapDispatchToProps = dispatch => ({
  getCareRecipient: () => _getCareRecipient(dispatch),
  saveSummaryInfoCategory: category => dispatch(actions.saveSummaryInfoCategory(category)),
});


const SummaryContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
)(SummaryComponent);

export default SummaryContainer;