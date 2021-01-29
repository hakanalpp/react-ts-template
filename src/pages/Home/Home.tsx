import './Home.css';

const Home = (): JSX.Element => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          React template made with{' '}
          <a
            className="App-link"
            href="https://www.typescriptlang.org"
            target="_blank"
            rel="noopener noreferrer">
            Typescript
          </a>
          {', '}
          <a
            className="App-link"
            href="https://eslint.org"
            target="_blank"
            rel="noopener noreferrer">
            Eslint
          </a>
          {' and '}
          <a
            className="App-link"
            href="https://prettier.io/"
            target="_blank"
            rel="noopener noreferrer">
            Prettier
          </a>
          .
        </p>
        <p>
          Made by{' '}
          <a
            className="App-link"
            href="https://github.com/hakanalpp"
            target="_blank"
            rel="noopener noreferrer">
            Hakan Alp
          </a>
        </p>
      </header>
    </div>
  );
};

export default Home;
