import logo from './resources/images/sungjin.gif';
import githublogo from './resources/images/github.png';
import instalogo from './resources/images/insta.png';
import twitchlogo from './resources/images/twitch.png';
import deviantartlogo from './resources/images/deviantart.png';
import './App.css';

function App() {
  setTimeout(() => {
    const main = document.querySelector('main');
    main.style.opacity = 1
    main.style.filter = 'blur(0px)'
  }, 1000);
  return (
    <main className="App">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <h1>@erased_zetsubo</h1>
      </header>
      <ul>
        <li>
          <a href="https://github.com/SenshiCrow">
            <img src={githublogo} className="githublogo" alt="githublogo" width="20" />
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.twitch.tv/lonelycrow_">
            <img src={twitchlogo} className="twitchlogo" alt="twitchlogo" width="20" />
            Twitch
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/erased_zetsubo/?hl=fr">
            <img src={instalogo} className="instalogo" alt="instalogo" width="20" />
            Instagram
          </a>
        </li>
        <li>
          <a href="https://www.deviantart.com/lonelycrow51">
            <img src={deviantartlogo} className="deviantartlogo" alt="deviantartlogo" width="20" />
            DeviantArt
          </a>
        </li>
      </ul>
      <footer className="footer">
        <p> Thank you for your interest ! </p>
      </footer>
    </main>
  );
}

export default App;
