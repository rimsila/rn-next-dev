/**
 * all @route will be use for path name, route and permission
 * please test and inform before change any value of it
 */

const auth = '/auth';

export const ROUTE = {
  //* ----------- auth --------------
  auth: {
    index: auth,
    register: {
      index: `${auth}/register`,
    },
    login: {
      index: `${auth}/login`,
    },
    forgotPassword: {
      index: `${auth}/forgot-password`,
    },
  },
  home: '/',
};

type INewRoute = Partial<typeof ROUTE>;
const newRoute: INewRoute = { ...ROUTE };
/**
 *
 * @param exclude
 * getPermissions with exclude props not used
 */
export const getPermissions = (exclude = true) => {
  if (exclude) {
    delete newRoute.home;
    delete newRoute.auth;
  }
  return newRoute || {};
};

export const PERMISSIONS = getPermissions();

export const getActiveRoute = (exclude = true) => {
  const activeRoute: INewRoute = { ...ROUTE };

  if (exclude) {
    delete activeRoute.home;
    delete activeRoute.auth;
  }
  return activeRoute || {};
};
