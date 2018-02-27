export const BOOTSTRAP_CSS_URL =
  'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css';
export const BOOTSTRAP_CSS_HASH =
  'sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u';

// Use the US date format to be consistent with Facebook
export const DATE_FORMAT = 'MM/DD/YYYY';

export const DB_EVENT_NAME_CHILD_ADDED = 'child_added';
export const DB_EVENT_NAME_CHILD_CHANGED = 'child_changed';
export const DB_EVENT_NAME_CHILD_REMOVED = 'child_removed';
export const DB_EVENT_NAME_VALUE = 'value';

export const DB_PATH_LUMI_GROUPS = 'lumi-groups';
export const DB_PATH_LUMI_MESSAGES = 'lumi-messages';
export const DB_PATH_LUMI_MESSAGES_GROUP = 'lumi-messages-group';
export const DB_PATH_LUMI_MESSAGES_USER = 'lumi-messages-user';
export const DB_PATH_USER_PSID_TO_UID = 'user-psid-to-uid';
export const DB_PATH_USERS = 'users';

export const CARE_CARD_BUTTON_TEXT_EDIT = 'Edit';
export const CARE_CARD_BUTTON_TEXT_SAVE = 'Save';

export const CARE_CARD_CATEGORY_CODE_BASIC = 'basic';
export const CARE_CARD_CATEGORY_CODE_MEDICAL = 'medical';
export const CARE_CARD_CATEGORY_CODE_CARE = 'care';

export const CARE_CARD_CATEGORY_NAME_BASIC = 'Basic';
export const CARE_CARD_CATEGORY_NAME_MEDICAL = 'Medical';
export const CARE_CARD_CATEGORY_NAME_CARE = 'Care';

// Field IDs correspond to user properties in the DB
// Basic
export const CARE_CARD_FIELD_ID_FIRST_NAME = 'firstName';
export const CARE_CARD_FIELD_ID_LAST_NAME = 'lastName';
export const CARE_CARD_FIELD_ID_BIRTHDAY = 'birthday';
export const CARE_CARD_FIELD_ID_GENDER = 'gender';
export const CARE_CARD_FIELD_ID_EMAIL = 'email';
export const CARE_CARD_FIELD_ID_ADDRESS = 'address';
// Medical
export const CARE_CARD_FIELD_ID_TYPE_OF_DEMENTIA = 'typeOfDementia';
export const CARE_CARD_FIELD_ID_DATE_OF_DIAGNOSIS = 'dateOfDiagnosis';
export const CARE_CARD_FIELD_ID_MEDICATIONS = 'medications';
export const CARE_CARD_FIELD_ID_PROVIDERS = 'providers';
// Care
export const CARE_CARD_FIELD_ID_NEEDS_AND_PREFERENCES = 'needsAndPreferences';
export const CARE_CARD_FIELD_ID_THINGS_THAT_DELIGHT = 'thingsThatDelight';
export const CARE_CARD_FIELD_ID_PLACES_OF_INTEREST = 'placesOfInterest';


// Basic
export const CARE_CARD_FIELD_PLACEHOLDER_FIRST_NAME = 'Enter first name';
export const CARE_CARD_FIELD_PLACEHOLDER_LAST_NAME = 'Enter last name';
export const CARE_CARD_FIELD_PLACEHOLDER_GENDER = 'Select gender';
export const CARE_CARD_FIELD_PLACEHOLDER_EMAIL = 'Enter email';
export const CARE_CARD_FIELD_PLACEHOLDER_ADDRESS = 'Enter address';
// Medical
export const CARE_CARD_FIELD_PLACEHOLDER_TYPE_OF_DEMENTIA = 'Select type of dementia';
export const CARE_CARD_FIELD_PLACEHOLDER_MEDICATIONS = 'Enter medications';
export const CARE_CARD_FIELD_PLACEHOLDER_PROVIDERS = 'Enter providers';
// Care
export const CARE_CARD_FIELD_PLACEHOLDER_NEEDS_AND_PREFERENCES = 'Enter needs and preferences';
export const CARE_CARD_FIELD_PLACEHOLDER_THINGS_THAT_DELIGHT =
  'Enter activities or objects that delight';
export const CARE_CARD_FIELD_PLACEHOLDER_PLACES_OF_INTEREST = 'Enter places of interest';

// Basic
export const CARE_CARD_FIELD_TITLE_FIRST_NAME = 'First Name';
export const CARE_CARD_FIELD_TITLE_LAST_NAME = 'Last Name';
export const CARE_CARD_FIELD_TITLE_BIRTHDAY = 'Birthday';
export const CARE_CARD_FIELD_TITLE_GENDER = 'Gender';
export const CARE_CARD_FIELD_TITLE_EMAIL = 'Email';
export const CARE_CARD_FIELD_TITLE_ADDRESS = 'Address';
// Medical
export const CARE_CARD_FIELD_TITLE_TYPE_OF_DEMENTIA = 'Type of Dementia';
export const CARE_CARD_FIELD_TITLE_DATE_OF_DIAGNOSIS = 'Date of Diagnosis';
export const CARE_CARD_FIELD_TITLE_MEDICATIONS = 'Medications';
export const CARE_CARD_FIELD_TITLE_PROVIDERS = 'Providers';
// Care
export const CARE_CARD_FIELD_TITLE_NEEDS_AND_PREFERENCES = 'Needs and Preferences';
export const CARE_CARD_FIELD_TITLE_THINGS_THAT_DELIGHT = 'Things that Delight';
export const CARE_CARD_FIELD_TITLE_PLACES_OF_INTEREST = 'Places of Interest';

export const CARE_CARD_GENDER_CODE_MALE = 'male';
export const CARE_CARD_GENDER_CODE_FEMALE = 'female';
export const CARE_CARD_GENDER_NAME_MALE = 'Male';
export const CARE_CARD_GENDER_NAME_FEMALE = 'Female';

// Codes
export const CARE_CARD_DEMENTIA_CODE_ALZHEIMERS = 'alzheimers';
export const CARE_CARD_DEMENTIA_CODE_VASCULAR = 'vascular';
export const CARE_CARD_DEMENTIA_CODE_LEWY = 'lewy';
export const CARE_CARD_DEMENTIA_CODE_FRONTOTEMPORAL = 'frontotemporal';
export const CARE_CARD_DEMENTIA_CODE_CREUTZFELDT_JAKOB = 'creutzfeldt-jakob';
export const CARE_CARD_DEMENTIA_CODE_WERNICKE_KORSAKOFF = 'wernicke-korsakoff';
export const CARE_CARD_DEMENTIA_CODE_MIXED = 'mixed';
export const CARE_CARD_DEMENTIA_CODE_OTHER = 'other';
export const CARE_CARD_DEMENTIA_CODE_UNKNOWN = 'unknown';
// Names
export const CARE_CARD_DEMENTIA_NAME_ALZHEIMERS = 'Alzheimer\'s disease';
export const CARE_CARD_DEMENTIA_NAME_VASCULAR = 'Vascular dementia';
export const CARE_CARD_DEMENTIA_NAME_LEWY = 'Dementia with Lewy bodies';
export const CARE_CARD_DEMENTIA_NAME_FRONTOTEMPORAL = 'Frontotemporal dementia';
export const CARE_CARD_DEMENTIA_NAME_CREUTZFELDT_JAKOB = 'Creutzfeldt-Jakob disease';
export const CARE_CARD_DEMENTIA_NAME_WERNICKE_KORSAKOFF = 'Wernicke-Korsakoff syndrome';
export const CARE_CARD_DEMENTIA_NAME_MIXED = 'Mixed dementia';
export const CARE_CARD_DEMENTIA_NAME_OTHER = 'Other';
export const CARE_CARD_DEMENTIA_NAME_UNKNOWN = 'Unknown';

export const CARE_CARD_TABLE_HEADER_FIELD = 'Field';
export const CARE_CARD_TABLE_HEADER_VALUE = 'Value';
export const CARE_CARD_TABLE_HEADER_OPTIONS = 'Options';

export const FIREBASE_API_KEY = 'AIzaSyAbxVPlyTTq2AITU-fakTFU7ZiGUQRmG00';
export const FIREBASE_AUTH_DOMAIN = 'lumi-cares.firebaseapp.com';
export const FIREBASE_DATABASE_URL = 'https://lumi-cares.firebaseio.com';
export const FIREBASE_STORAGE_BUCKET = 'lumi-cares.appspot.com';

export const NAVBAR_HEADER_TITLE = 'Lumi';
export const NAVBAR_ITEM_TIMELINE = 'Timeline';
export const NAVBAR_ITEM_CARE_CARD = 'Care Card';
export const NAVBAR_ITEM_GROUP_ID = 'Group ID: ';
export const NAVBAR_ITEM_SIGN_OUT = 'Sign Out';

export const PRODUCT_CODE_SIGN_OUT = 'sign-out';
export const PRODUCT_CODE_TIMELINE = 'timeline';
export const PRODUCT_CODE_CARE_CARD = 'care-card';

export const TIMELINE_CATEGORY_CODE_ALL = 'all';
export const TIMELINE_CATEGORY_CODE_ACTIVITY = 'activity';
export const TIMELINE_CATEGORY_CODE_BEHAVIOUR = 'behaviour';
export const TIMELINE_CATEGORY_CODE_MOOD = 'mood';
export const TIMELINE_CATEGORY_CODE_MEMORY = 'memory';
export const TIMELINE_CATEGORY_CODE_MEDICAL = 'medical';
export const TIMELINE_CATEGORY_CODE_CAREGIVER = 'caregiver';
export const TIMELINE_CATEGORY_CODE_OTHER = 'other';

export const TIMELINE_CATEGORY_NAME_ALL = 'All';
export const TIMELINE_CATEGORY_NAME_ACTIVITY = 'Activity';
export const TIMELINE_CATEGORY_NAME_BEHAVIOUR = 'Behaviour';
export const TIMELINE_CATEGORY_NAME_MOOD = 'Mood';
export const TIMELINE_CATEGORY_NAME_MEMORY = 'Memory';
export const TIMELINE_CATEGORY_NAME_MEDICAL = 'Medical';
export const TIMELINE_CATEGORY_NAME_CAREGIVER = 'Caregiver';
export const TIMELINE_CATEGORY_NAME_OTHER = 'Other';

export const TIMELINE_TABLE_HEADER_TIME = 'Time';
export const TIMELINE_TABLE_HEADER_USER = 'User';
export const TIMELINE_TABLE_HEADER_CATEGORY = 'Category';
export const TIMELINE_TABLE_HEADER_NOTE = 'Note';

export const URL_FACEBOOK_GRAPH_API = 'https://graph.facebook.com/v2.6';
export const URL_FACEBOOK_GRAPH_API_ME = `${URL_FACEBOOK_GRAPH_API}/me`;
export const URL_LUMI_PSID = 'https://us-central1-lumi-cares.cloudfunctions.net/webhook/lumi/psid';

export const WEBSITE_TITLE = 'Lumi';
