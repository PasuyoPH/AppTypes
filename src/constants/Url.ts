const BaseUrl = 'http://194.233.83.27:8080/api',
  Routes = {
    ADDRESS: (uid: string) => BaseUrl + '/addresses/' + uid,
    ADDRESSES: BaseUrl + '/addresses',

    ADMIN_RIDER_CREDITS: BaseUrl + '/admin/rider/credits',
    ADMIN_APPROVE_LOAD: BaseUrl + '/admin/rider/load',
    ADMIN_VERIFY_RIDER: BaseUrl + '/admin/rider/verify',
    ADMIN_ME: BaseUrl + '/admin/@me',
    ADMIN_ME_TOKEN: BaseUrl + '/admin/@me/token',
    ADMIN_RIDERS: BaseUrl + '/admin/riders',

    // new admin routes
    ADMIN_MERCHANTS: BaseUrl +  '/admin/merchants',
    ADMIN_LOAD_REQUESTS: BaseUrl + '/admin/loads',
    ADMIN_LOAD_REQUEST: (uid: string) => BaseUrl + '/admin/loads/' + uid,
    ADMIN_TRANSACTIONS: BaseUrl + '/admin/transactions',
    ADMIN_STATS: BaseUrl + '/admin/stats',
    ADMIN_APPROVE_GCASH: (uid: string) => '/admin/transaction/' + uid,

    AUTH: BaseUrl + '/auth',
    AUTH_TOKEN: BaseUrl + '/auth/token',

    DEFAULT: BaseUrl,

    DELIVERIES: BaseUrl + '/deliveries',
    DELIVERY: (uid: string) => BaseUrl + '/delivery/' + uid,

    DISTANCE_RIDER: BaseUrl + '/distance/rider',
    DISTANCE_USER: BaseUrl + '/distance/user',

    EXPO_TOKEN: BaseUrl + '/expo-token',
    
    FETCH_RIDERS: BaseUrl + '/fetch-riders',
    
    FILTERS: BaseUrl + '/filters',

    GEOCODE: BaseUrl + '/geo',

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

    JOBS2: BaseUrl + '/jobs2',
    JOBS2_DATA: (uid: string) => BaseUrl + '/jobs2/' + uid + '/data',
    JOBS2_MAP: BaseUrl + '/jobs2/map',
    JOBS2_TAKE: (uid: string) =>  BaseUrl + '/jobs2/' + uid,
    JOBS2_PICKUP: (uid: string) =>  BaseUrl + '/jobs2/' + uid + '/pickedup',
    JOBS2_DONE: (uid: string) =>  BaseUrl + '/jobs2/' + uid + '/done',

    ITEM: (uid: string) => BaseUrl + '/items/' + uid,
    ITEMS_NEW: BaseUrl + '/items/new',
    ITEMS: BaseUrl + '/items',
    ITEMS_IDS: (uids: string[]) => BaseUrl + '/items?ids=' + uids.join(','),
    ITEM_LIKE: (uid: string) => BaseUrl + '/items/' + uid + '/like',

    MERCHANT_ITEMS: (uid: string) => BaseUrl + '/merchant/' + uid + '/items',
    MERCHANTS: BaseUrl + '/merchants',
    MERCHANT: (uid: string) => BaseUrl + '/merchant/' + uid,
    MERCHANT_IDS: (uids: string[]) => BaseUrl + '/merchants?ids=' + uids.join(','),
    MERCHANT_DATA: (uid: string) => BaseUrl + '/merchant/' + uid + '/data',
    MERCHANT_SEARCH: (query: string) => BaseUrl + '/search?query=' + query,
    MERCHANT_TYPE: (type: number) => BaseUrl + '/merchants-type/' + type,

    // NEW MERCHANTS
    MERCHANT_ME_TOKEN: BaseUrl + '/merchants/@me/token',
    MERCHANT_ME_ITEM: (uid: string) => BaseUrl + '/merchants/@me/items/' + uid,
    MERCHANT_ME_ADDRESSES: BaseUrl + '/merchants/@me/addresses',
    MERCHANT_ME_ITEMS: BaseUrl + '/merchants/@me/items',
    MERCHANT_ME: BaseUrl + '/merchants/@me',
    MERCHANT_ME_ORDERS: BaseUrl + '/merchants/@me/orders',
    MERCHANT_ME_ADDRESS: (uid: string) => BaseUrl + '/merchants/@me/addresses/' + uid,
    MERCHANT_ME_STATS: BaseUrl + '/merchants/@me/stats',
    MERCHANT_ME_SELF: BaseUrl + '/merchants/@me/self',
    MERCHANT_ME_APPROVE_ORDER: (uid: string) => BaseUrl + '/merchants/@me/approve/' + uid,
    MERCHANT_ME_DISAPPROVE_ORDER: (uid: string) => BaseUrl + '/merchants/@me/disapprove/' + uid,

    NOTIFICATIONS: BaseUrl + '/notifications',

    ORDERS: BaseUrl + '/orders',

    PAYMENT: BaseUrl + '/payment',
    PAYMENT_RIDER: BaseUrl + '/payment/rider',
    PAYMENT_CASH: BaseUrl + '/payment/cash',
    PAYMENT_PAYPAL_CREATE: BaseUrl + '/payment/paypal',
    PAYMENT_PAYPAL_COMPLETE: (uid: string) => BaseUrl + '/payment/paypal/' + uid,

    PAYMENTMETHODS: BaseUrl + '/methods',

    PROFILE: BaseUrl + '/profile',

    PROMOS: BaseUrl + '/promos',

    RIDER: BaseUrl + '/rider',
    RIDER_CURRENT_JOB: BaseUrl + '/riders/@me/jobs/current',
    RIDER_HISTORY: BaseUrl + '/riders/@me/history',
    RIDER_JOBS: BaseUrl + '/riders/@me/jobs',
    RIDER_LOAD: BaseUrl + '/riders/@me/load', 
    RIDER_OPT_IN: BaseUrl + '/riders/@me/opt-in',
    RIDER_PROFILE: BaseUrl + '/riders/@me/profile',
    RIDER_STATS: BaseUrl + '/riders/@me/stats',
    RIDER_GET_OTHER_RIDER: (uid: string) => '/rider/' + uid,

    SERVICES: BaseUrl + '/services',

    USER: BaseUrl + '/user',
    USER_ACTIVE_DELIVERIES: BaseUrl + '/users/@me/active-deliveries',
    USER_ACTIVE_JOBS: BaseUrl + '/users/@me/active',
    USER_DRAFTS: BaseUrl + '/users/@me/drafts',
    USER_HISTORY: BaseUrl + '/users/@me/history',
    USER_JOBS: BaseUrl + '/users/@me/jobs',
    USER_JOB_ADDRESSES: (uid: string) => BaseUrl + '/users/@me/job-addresses/' + uid,
    USER_LIKES: BaseUrl + '/users/@me/likes',
    USER_MERCHANT_RECOMMENDED: BaseUrl + '/users/@me/merchants',
    USER_PROFILE: BaseUrl + '/users/@me/profile'
  },
  Gateway = 'ws://194.233.83.27:3030'
  //Gateway = 'ws://192.168.0.104:3030'

export {
  BaseUrl,
  Routes,
  Gateway
}