import {get} from './http';
// get格式
export const homeData = g => get('/api/home.json', g); //获取home列表数据
export const moreData = g => get('/api/more.json', g); //获取more列表数据
export const loginIn = g => get('/api/login.json', g); //获取more列表数据


