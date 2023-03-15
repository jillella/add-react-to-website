// import './style.css';
// import axios from 'axios';
// const axios = require('./node_modules/axios/dist/axios.min.js');
// const {initialize} = require('./node_modules/@bloomreach/spa-sdk/lib/index.js');
console.log(axios);
console.log(window);

function generateMenuCollection(collection) {
  if (collection)
    return collection.map((item) => {
      return {
        name: item.getName(),
        link: item.getLink(),
        depth: item.getDepth(),
        selected: item.isSelected(),
        children: generateMenuCollection(item.getChildren()),
      };
    });

  return [];
}

function generateNavItem(item) {
  let li = document.createElement('li');

  // Generate Link if one exists, otherwise LI with text
  if (item.link) {
    let a = document.createElement('a');
    a.setAttribute('href', item.link.href);
    if (item.link.type === 'external') {
      a.setAttribute('target', '_blank');
    }
    a.innerText = item.name;
    li.appendChild(a);
  } else {
    li.innerText = item.name;
  }

  // Generate Submenus if Exists
  if (item.children.length > 0) {
    console.log('yes');
    let ul = document.createElement('ul');
    item.children.forEach((i) => {
      let li = generateNavItem(i);
      ul.appendChild(li);
    });
    li.appendChild(ul);
  }

  return li;
}

function renderExample(collection) {
  let list = document.getElementById('HeaderSection');

  collection.forEach((item) => {
    let li = generateNavItem(item);
    list.appendChild(li);
  });
}

async function showPage(path) {
  const page = await initialize({
    // The path to request from the Page Model API, should include query
    // parameters if those are present in the url
    path,
    // The location of the Page Model API of the brX channel
    endpoint:
      'https://strongtie.bloomreach.io/delivery/site/v1/channels/sst-site/pages',
    // The httpClient used to make requests
    httpClient: axios,
  });
  // Get Main Menu
  const { menu: menuRef } = page.getComponent('header', 'menu').getModels();
  // Recieve Content from Menu
  const menu = page.getContent(menuRef);
  const _menuItems = menu.getItems();
  // console.log({ menuItems, selected });

  const menuItems = await generateMenuCollection(_menuItems);

  console.log(menuItems);

  // document.querySelector('#counter').innerText = page.getTitle();
  renderExample(menuItems);
}

/**
 * Render Data from Bloomreach
 */
showPage(`https://www.strongtie.com`);
