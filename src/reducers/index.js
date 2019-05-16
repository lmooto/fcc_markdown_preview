import { ENTER_TEXT, TOGGLE_HELP } from '../actions/types';

const help = `Hello
=======

This is a subheading
-----------

### And this is another one

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
 line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * samsung
  * macbook
  * lenovo

Numbered list:

  1. macbook pro
  2. hp notebook
  3. samsung galaxy

  ![pragmatic-programmer](http://res.cloudinary.com/dz5ppacuo/image/upload/v1457998345/the-pragmatic-programmer-review-min_tulprt.png)


[Lloyd Nzenze](https://www.freecodecamp.org/lloyd)`;

const INIT_STATE = {
  textCurrent: '',
  textUser: '',
  textHelp: help,
  isShowingHelp: false,
};

const rootReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ENTER_TEXT:
      return {
        ...state,
        textCurrent: action.payload,
        textUser: action.payload,
      };
    case TOGGLE_HELP: {
      // if help is already activated, hide it and show user input
      if (state.isShowingHelp) {
        return {
          ...state,
          textCurrent: state.textUser,
          isShowingHelp: false,
        }
      }
      // if help is not activated, hide user input and show help
      return {
        ...state,
        textCurrent: state.textHelp,
        isShowingHelp: true,
      }
    }
    default:
      return state;
  }
};

export default rootReducer;
