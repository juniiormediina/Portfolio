import ChatReact from '../images/ChatReact.svg';
import Delilah from '../images/Delilah.svg';
import Gifos from '../images/Gifos.svg';
import Podcast from '../images/Podcast.svg';
import { Warehouse } from 'lucide-react';
// import Warehouse from './/frontend/src/assets/images/Warehouse.svg';

const ProjectsData = [
  {
    id: 1,
    title: 'Podcast Channel',
    image: Podcast,
    deployed_url: 'https://juniiormediina.github.io/PodcastChannel/',
    github_url: 'https://github.com/juniiormediina/PodcastChannel',
    category: 'react.js',
  },
  {
    id: 2,
    title: 'Gifos',
    image: Gifos,
    deployed_url: 'https://juniiormediina.github.io/Gifos/',
    github_url: 'https://github.com/juniiormediina/Gifos',
    category: 'web',
  },
  {
    id: 3,
    title: 'Delilah Restó',
    image: Delilah,
    deployed_url: 'https://github.com/juniiormediina/DelilahResto',
    github_url: 'https://github.com/juniiormediina/DelilahResto',
    category: 'app',
  },
  {
    id: 4,
    title: 'Data Warehouse',
    image: Warehouse,
    deployed_url: 'https://github.com/juniiormediina/DataWarehouse',
    github_url: 'https://github.com/juniiormediina/DataWarehouse',
    category: 'web',
  },
  {
    id: 5,
    title: 'Chat React',
    image: ChatReact,
    deployed_url: 'https://react-chat-jm.herokuapp.com/',
    github_url: 'https://github.com/juniiormediina/Chat-React',
    category: 'web',
  },
];

const ProjectsNav = [{name: 'all'}, {name: 'web'}, {name: 'app'}, {name: 'desing'}];

export { ProjectsData, ProjectsNav };
