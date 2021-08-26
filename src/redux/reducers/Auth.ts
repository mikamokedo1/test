import { AppActions } from '../../types';
import { SET_AUTH_TOKEN, SIGNOUT_AUTH_SUCCESS, UPDATE_AUTH_USER } from '../../types/actions/Auth.actions';
import { AuthUser } from '../../types/models/AuthUser';

type ActionType = 'login';

interface INIT_AUTH {
  user: AuthUser | null;
  token: string | null;
  errors: {
    [k in ActionType]: null | string;
  };
}

const INIT_STATE: INIT_AUTH = {
  user: null,
  token: null,
  errors: {
    login: null,
  },
};

const Auth = (state = INIT_STATE, action: AppActions) => {
  switch (action.type) {
    case UPDATE_AUTH_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case SIGNOUT_AUTH_SUCCESS: {
      return {
        ...state,
        user: null,
      };
    }
    case SET_AUTH_TOKEN: {
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.userName,
      };
    }
    default:
      return state;
  }
};
export default Auth;
