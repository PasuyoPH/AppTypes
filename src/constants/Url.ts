const BaseUrl = 'http://192.168.68.107:8080/api',
  Routes = {
    ADDRESS: (uid: string) => BaseUrl + '/addresses/' + uid,
    ADDRESSES: BaseUrl + '/addresses',

    ADMIN_RIDER_CREDITS: BaseUrl + '/admin/rider/credits',
    ADMIN_APPROVE_LOAD: BaseUrl + '/admin/rider/load',
    ADMIN_VERIFY_RIDER: BaseUrl + '/admin/rider/verify',
    ADMIN_ME: BaseUrl + '/admin/@me',
    ADMIN_ME_TOKEN: BaseUrl + '/admin/@me/token',
    ADMIN_RIDERS: BaseUrl + '/admin/riders',

    AUTH: BaseUrl + '/auth',
    AUTH_TOKEN: BaseUrl + '/auth/token',

    DEFAULT: BaseUrl,

    DISTANCE_RIDER: BaseUrl + '/distance/rider',
    DISTANCE_USER: BaseUrl + '/distance/user',

    EXPO_TOKEN: BaseUrl + '/expo-token',
    
    FETCH_RIDERS: BaseUrl + '/fetch-riders',

    JOB: (uid: string) => BaseUrl + '/jobs/' + uid,
    JOB_ACCEPT: (uid: string) => BaseUrl + '/jobs/' + uid + '/accept',
    JOB_ADDRESS_USED: (uid: string) => BaseUrl + '/jobs/' + uid + '/addresses_used',
    JOB_ADDRESS_USED_RIDER: (uid: string) => BaseUrl + '/jobs/' + uid + '/addresses_used/rider',
    JOB_ADDRESSES: (uid: string) => BaseUrl + '/jobs/' + uid + '/addresses',
    JOB_AUTHOR: (uid: string) => BaseUrl + '/jobs/' + uid + '/author',
    JOB_COMPLETE: (uid: string) => BaseUrl + '/jobs/' + uid + '/complete',
    JOB_FEE: (uid: string) => BaseUrl + '/jobs/' + uid + '/fee',
    JOB_RIDER: (uid: string) => BaseUrl + '/jobs/' + uid + '/rider',
    JOB_STATUS: (uid: string) => BaseUrl + '/jobs/' + uid + '/status',
    JOBS: BaseUrl + '/jobs',

    ITEM: (uid: string) => BaseUrl + '/items/' + uid,
    ITEMS_NEW: BaseUrl + '/items/new',
    ITEMS: BaseUrl + '/items',
    ITEMS_IDS: (uids: string[]) => BaseUrl + '/items?ids=' + uids.join(','),

    MERCHANT_ITEMS: (uid: string) => BaseUrl + '/merchant/' + uid + '/items',
    MERCHANTS: BaseUrl + '/merchants',
    MERCHANT: (uid: string) => BaseUrl + '/merchant/' + uid,
    MERCHANT_IDS: (uids: string[]) => BaseUrl + '/merchants?ids=' + uids.join(','),

    NOTIFICATIONS: BaseUrl + '/notifications',

    PROMOS: BaseUrl + '/promos',

    RIDER: BaseUrl + '/rider',
    RIDER_CURRENT_JOB: BaseUrl + '/riders/@me/jobs/current',
    RIDER_HISTORY: BaseUrl + '/riders/@me/history',
    RIDER_JOBS: BaseUrl + '/riders/@me/jobs',
    RIDER_LOAD: BaseUrl + '/riders/@me/load', 
    RIDER_OPT_IN: BaseUrl + '/riders/@me/opt-in',
    RIDER_PROFILE: BaseUrl + '/riders/@me/profile',

    SERVICES: BaseUrl + '/services',

    USER: BaseUrl + '/user',
    USER_DRAFTS: BaseUrl + '/users/@me/drafts',
    USER_HISTORY: BaseUrl + '/users/@me/history',
    USER_JOBS: BaseUrl + '/users/@me/jobs',
    USER_MERCHANT_RECOMMENDED: BaseUrl + '/users/@me/merchants',
    USER_PROFILE: BaseUrl + '/users/@me/profile'
  },
  Gateway = 'ws://192.168.68.107:3030'

export {
  BaseUrl,
  Routes,
  Gateway
}