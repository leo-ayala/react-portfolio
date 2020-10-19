import React, {Component} from "react";
import Pdf from '../../leoayala_resume.pdf'

class Download extends Component {

  render() {

    return (
      <div className = "App">
        <a href = {Pdf} target = "_blank">Click here for my resume!</a>
      </div>
    );
  }
}

export default Download;
