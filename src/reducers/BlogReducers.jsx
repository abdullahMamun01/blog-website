export const initialState = {
  editModal: {
    isOpen: false,
    selectedBlog: null,
  },
  deleteConfirmModal: {
    isOpen: false,
    blogToDelete: null,
  },
  updateProfileModal: {
    isOpen: false,
    userProfile: null,
  },
};

export const blogReducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_EDIT_MODAL':
      return {
        ...state,
        editModal: { isOpen: true, selectedBlog: action.payload },
      };
    case 'CLOSE_EDIT_MODAL':
      return {
        ...state,
        editModal: { isOpen: false, selectedBlog: null },
      };
    case 'OPEN_DELETE_CONFIRM_MODAL':
      return {
        ...state,
        deleteConfirmModal: { isOpen: true, blogToDelete: action.payload },
      };
    case 'CLOSE_DELETE_CONFIRM_MODAL':
      return {
        ...state,
        deleteConfirmModal: { isOpen: false, blogToDelete: null },
      };
    case 'OPEN_UPDATE_PROFILE_MODAL':
      return {
        ...state,
        updateProfileModal: { isOpen: true, userProfile: action.payload },
      };
    case 'CLOSE_UPDATE_PROFILE_MODAL':
      return {
        ...state,
        updateProfileModal: { isOpen: false, userProfile: null },
      };
    default:
      return state;
  }
};
