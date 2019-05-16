import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import marked from 'marked';

import * as actions from '../actions';

class App extends Component {

  render() {
    const {
      textCurrent,
      isShowingHelp,
      enterText,
      showHelp,
    } = this.props;
    const parsedText = marked(textCurrent, { sanitize: true});
    const processedText = { __html: parsedText };

    return (
      <div>

        <div className="main-content">

          <header>
            <h1 className="app-title">Markdown Previewer</h1>
            <div
              onClick={showHelp}
              className={`help-button ${isShowingHelp && 'active'}`}>
              <i className="fa fa-question" aria-hidden="true"></i>
            </div>
          </header>

          <div className="text-panels">
            <textarea
               id = "editor"
              value={textCurrent}
              onChange={(event) => enterText(event.target.value)}
              className="text-panel-left"
              readOnly={isShowingHelp}></textarea>
            <div
              id="preview"
              dangerouslySetInnerHTML={processedText}
              className="text-panel-right"></div>
          </div>

          <footer>
            <div>2019, created by <a target="blank" href="https://github.com/lmooto">Lloyd Nzenze</a>
            </div>
          </footer>

        </div>

      </div>
    );
  }

}

App.propTypes = {
  textCurrent: PropTypes.string,
  isShowingHelp: PropTypes.bool,
  enterText: PropTypes.func,
  showHelp: PropTypes.func,
};


const mapStateToProps = (state) => ({
  textCurrent: state.textCurrent,
  isShowingHelp: state.isShowingHelp,
});

export default connect(mapStateToProps, actions)(App);
