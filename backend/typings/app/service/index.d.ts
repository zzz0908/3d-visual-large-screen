// This file is created by egg-ts-helper@1.30.4
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportTest from '../../../app/service/Test';
import ExportBase from '../../../app/service/base';
import ExportList from '../../../app/service/list';

declare module 'egg' {
  interface IService {
    test: AutoInstanceType<typeof ExportTest>;
    base: AutoInstanceType<typeof ExportBase>;
    list: AutoInstanceType<typeof ExportList>;
  }
}
