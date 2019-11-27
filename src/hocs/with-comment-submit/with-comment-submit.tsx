import * as React from "react";
import {CommentData} from "../../types";

interface Props {
  id: number,
  onReviewSubmit: (id: number, commentData: CommentData, formResetCb: () => void) => void
}

interface State {
  rating?: string,
  review?: string,
  isValid?: boolean
}

const withCommentSubmit = (Component) => {
  class WithCommentSubmit extends React.PureComponent<Props, State> {
    _formRef: React.RefObject<HTMLFormElement>;

    constructor(props) {
      super(props);

      this._formRef = React.createRef();

      this.state = {
        rating: ``,
        review: ``,
        isValid: false
      };

      this._onUserInput = this._onUserInput.bind(this);
      this._reviewSubmitHandler = this._reviewSubmitHandler.bind(this);
      this._resetForm = this._resetForm.bind(this);
    }

    render() {
      return (
        <Component
          {...this.props}
          onFormSubmit={this._reviewSubmitHandler}
          onUserInput={this._onUserInput}
          formRef={this._formRef}
          isValid={this.state.isValid}
        />
      );
    }

    _onUserInput(evt) {
      const name = evt.currentTarget.name;
      const value = evt.currentTarget.value;

      this.setState(
          {[name]: value},
          () => this._validateForm(this.state)
      );
    }

    _reviewSubmitHandler(evt) {
      evt.preventDefault();

      const {id, onReviewSubmit} = this.props;
      const commentData = {
        rating: this.state.rating,
        comment: this.state.review
      };

      onReviewSubmit(id, commentData, this._resetForm);
    }

    _validateForm(state) {
      if (state.rating !== `` && state.review.length >= 50) {
        this.setState({isValid: true});
      } else {
        this.setState({isValid: false});
      }
    }

    _resetForm() {
      this.setState({
        rating: ``,
        review: ``,
        isValid: false
      });

      this._formRef.current.reset();
    }
  }

  return WithCommentSubmit;
};

export default withCommentSubmit;
