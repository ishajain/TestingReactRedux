import React from "react";
import Headline from "../Headline";
import SharedButton from "../SharedButton";
import PostItem from "../PostItem";
import { fetchPosts } from "../../actions";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    const { posts, fetchPosts } = this.props;
    return (
      <div data-test="AppComponent">
        <Headline
          data-test="HeadlineComponent"
          header="First React Testing Project"
          desc="I am really enjoying writting my test."
        />
        <SharedButton
          data-test="HeadlineComponent"
          buttonText="Get Posts"
          clickEvent={() => fetchPosts()}
        />
        {posts.length > 0 && (
          <div>
            {posts.map((post, index) => {
              const { title, body } = post;

              const item = {
                title,
                desc: body
              };

              return <PostItem key={index} {...item} />;
            })}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => ({ posts });

export default connect(
  mapStateToProps,
  { fetchPosts }
)(App);

//export default App;
