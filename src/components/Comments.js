import React, { Component } from "react";
import { Button, Form, Comment } from "semantic-ui-react";
import { addCommentAnimal, addCommentPlant } from "../actions/commentActions";
import { connect } from "react-redux";

class Comments extends Component {
  constructor(props) {
    super();
    this.state = {
      clicked: false,
      animal: {
        name: "",
        comment: "",
        animal_id: (props.animal && props.animal.id) || ""
      },
      plant: {
        name: "",
        comment: "",
        plant_id: (props.plant && props.plant.id) || ""
      }
    };
  }

  clickHandler = () => {
    let click = this.state.clicked;
    this.setState({ clicked: !click });
  };

  animalChangeHandler = e => {
    let animalState = { ...this.state.animal };
    animalState[e.target.name] = e.target.value;
    this.setState({ animal: animalState });
  };

  plantChangeHandler = e => {
    let plantState = { ...this.state.plant };
    plantState[e.target.name] = e.target.value;
    this.setState({ plant: plantState });
  };

  animalSubmitHandler = e => {
    e.preventDefault();
    this.props.addCommentAnimal(this.state.animal);
    let animalState = { ...this.state.animal };
    animalState["name"] = "";
    animalState["comment"] = "";
    this.setState({ animal: animalState });
  };

  plantSubmitHandler = e => {
    e.preventDefault();
    this.props.addCommentPlant(this.state.plant);
    let plantState = { ...this.state.plant };
    plantState["name"] = "";
    plantState["comment"] = "";
    this.setState({ plant: plantState });
  };

  showComments = () => {
    if (this.props.parent === "animal") {
      let commentArr = this.props.comments.filter(
        comment => comment.animal_id === this.props.animal.id
      );
      if (commentArr === []) {
        return (
          <div>
            <h5>No Comments Yet!</h5>
          </div>
        );
      } else {
        return commentArr.map(comment => {
          let regex = /\d+-\d+-\d+/g;
          let date = comment.created_at.match(regex);
          return (
            <Comment.Group size="large">
              <Comment>
                <Comment.Avatar
                  as="a"
                  src={comment.animal_img}
                  className="avatar"
                />
                <Comment.Content>
                  <Comment.Author as="a">{comment.name}</Comment.Author>
                  <Comment.Metadata>
                    <span>{date}</span>
                  </Comment.Metadata>
                  <Comment.Text>{comment.comment}</Comment.Text>
                </Comment.Content>
              </Comment>
            </Comment.Group>
          );
        });
      }
    } else if (this.props.parent === "plant") {
      let commentArr = this.props.comments.filter(
        comment => comment.plant_id === this.props.plant.id
      );
      if (commentArr === []) {
        return (
          <div>
            <h5>No Comments Yet!</h5>
          </div>
        );
      } else {
        return commentArr.map(comment => {
          let regex = /\d+-\d+-\d+/g;
          let date = comment.created_at.match(regex);
          return (
            <Comment.Group size="large">
              <Comment>
                <Comment.Avatar
                  as="a"
                  src={comment.animal_img}
                  className="avatar"
                />
                <Comment.Content>
                  <Comment.Author as="a">{comment.name}</Comment.Author>
                  <Comment.Metadata>
                    <span>{date}</span>
                  </Comment.Metadata>
                  <Comment.Text>{comment.comment}</Comment.Text>
                </Comment.Content>
              </Comment>
            </Comment.Group>
          );
        });
      }
    }
  };

  form = () => {
    if (this.props.parent === "animal") {
      return this.state.clicked ? (
        <Form onSubmit={this.animalSubmitHandler} className="commentForm">
          <Form.Field>
            <input
              name="name"
              placeholder="Name"
              value={this.state.animal.name}
              onChange={this.animalChangeHandler}
            />
          </Form.Field>
          <Form.Field>
            <textarea
              name="comment"
              placeholder="Comments"
              value={this.state.animal.comment}
              onChange={this.animalChangeHandler}
            />
          </Form.Field>
          <Button type="submit">Post</Button>
        </Form>
      ) : null;
    } else if (this.props.parent === "plant") {
      return this.state.clicked ? (
        <Form onSubmit={this.plantSubmitHandler} className="commentForm">
          <Form.Field>
            <input
              name="name"
              placeholder="Name"
              value={this.state.plant.name}
              onChange={this.plantChangeHandler}
            />
          </Form.Field>
          <Form.Field>
            <textarea
              name="comment"
              placeholder="Comments"
              value={this.state.plant.comment}
              onChange={this.plantChangeHandler}
            />
          </Form.Field>
          <Button type="submit">Post</Button>
        </Form>
      ) : null;
    }
  };

  render() {
    return (
      <div>
        {this.showComments()}
        <Button onClick={this.clickHandler}>Add a Comment</Button>
        <br />
        <br />
        {this.form()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};
export default connect(mapStateToProps,{ addCommentAnimal, addCommentPlant })(Comments);