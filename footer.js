function Footer() {
  return React.createElement(
    "footer",
    null,
    React.createElement(
      "nav",
      null,
      React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "#" },
            "Privacy Policy"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "#" },
            "User Agreement"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "#" },
            "Limited Warranties"
          )
        )
      )
    )
  );
}

var domContainer = document.querySelector('#footer');
ReactDOM.render(React.createElement(Footer, null), domContainer);