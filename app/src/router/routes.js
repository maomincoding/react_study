import loadable from '../util/loadable';

export const Home = loadable(()=> import('../views/Home/'));
export const About = loadable(()=> import('../views/About/'));
export const More = loadable(()=> import('../views/More/'));