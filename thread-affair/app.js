class NewsLetterForm extends React.Component {
  render() {
    return <h1>Hello, World!</h1>;
  }
}

const NewsLetterContainer = document.querySelector(
  '.home-newsletter',
);

ReactDOM.render(
  <NewsLetterForm></NewsLetterForm>,
  NewsLetterContainer,
);
