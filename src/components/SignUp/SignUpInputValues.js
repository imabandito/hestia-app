export const initialValues = {
  name: {
    value: '',
    regex: /^[a-zA-Z ]{3,}$/
  },
  surname: {
    value: '',
    regex: /^[a-zA-Z ]{3,}$/
  },
  email: {
    value: '',
    regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/
  },
  experience: {
    value: '',
    regex: /^.{4,50}$/
  },
  password: {
    value: '',
    regex: /^[a-zA-Z ]{8,30}$/
  }
};
