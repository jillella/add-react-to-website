function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#">Products</a></li>
          <li><a href="#">Solutions</a></li>
          <li><a href="#">Resources</a></li>
          <li><a href="#">Technology</a></li>
          <li><a href="#">Customer Service</a></li>
          <li><a href="#">For Homeowners</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
    </header>
  );
}

let domContainer = document.querySelector('#HeaderSection');
ReactDOM.render(<Header />, domContainer);
