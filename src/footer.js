function Footer() {
    return (
      <footer>
        <nav>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">User Agreement</a></li>
            <li><a href="#">Limited Warranties</a></li>
          </ul>
        </nav>
      </footer>
    );
  }
  
  let domContainer = document.querySelector('#footer');
  ReactDOM.render(<Footer />, domContainer);
  