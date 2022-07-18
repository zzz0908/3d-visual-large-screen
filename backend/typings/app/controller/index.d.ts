// This file is created by egg-ts-helper@1.30.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBase from '../../../app/controller/base';
import ExportHome from '../../../app/controller/home';
import ExportList from '../../../app/controller/list';

declare module 'egg' {
  interface IController {
    base: ExportBase;
    home: ExportHome;
    list: ExportList;
  }
}
