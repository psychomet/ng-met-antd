<p align="center">
  <a href="http://ng.ant.design">
    <img width="230" src="https://img.alicdn.com/tfs/TB1TFFaHAvoK1RjSZFwXXciCFXa-106-120.svg">
  </a>
</p>

<h1 align="center">
NG-MET-ANTD <br>
Jalali Date Adapter
</h1>

<div align="center">

Angular DatePicker component library based on Ant Design.

[![npm package](https://img.shields.io/npm/v/ng-zorro-antd.svg?style=flat-square)](https://www.npmjs.com/package/nz-date-picker-jalali)
[![extension-for-VSCode](https://img.shields.io/badge/extension%20for-VSCode-blue.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-zorro-vscode)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

</div>

## [Demo](https://stackblitz.com/edit/angular-teef7v)

View DatePickerJalali in action at [https://stackblitz.com/edit/angular-teef7v](https://stackblitz.com/edit/angular-teef7v)

<img src="https://user-images.githubusercontent.com/42533472/171279996-75478af5-7977-4845-bf56-846c448308ae.gif" alt="jalali-date-picker" style="max-width: 100%; display: inline-block;" data-target="animated-image.originalImage">

## 🖥 Environment Support

- Angular `^15.0.0` [![npm package](https://img.shields.io/npm/v/ng-zorro-antd.svg?style=flat-square)](https://www.npmjs.org/package/ng-zorro-antd)
- Server-side Rendering
- Modern browsers including the following [specific versions](https://angular.io/guide/browser-support)
- [Electron](http://electron.atom.io/)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Electron |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Edge                                                                                                                                                                                                            | last 2 versions                                                                                                                                                                                                   | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                           | last 2 versions                                                                                                                                                                                                       |

## 📦 Installation

**We recommend using `@angular/cli` to install**. It not only makes development easier, but also allows you to take advantage of the rich ecosystem of angular packages and tooling.

```bash
$ ng new PROJECT_NAME
$ cd PROJECT_NAME
$ ng add ng-zorro-antd
```

> More information about `@angular/cli` [here](https://github.com/angular/angular-cli).

You can also install `ng-zorro-antd` with npm or yarn,
Then install `ng-met-antd/components` with npm or yarn for Jalali

```bash
$ npm install ng-zorro-antd
$ npm install ng-met-antd
```

## Provide custom DateAdapter

If you need to present another calendar like [Jalali](https://en.wikipedia.org/wiki/Jalali_calendar) or [Hijri](https://en.wikipedia.org/wiki/Islamic_calendar), you can provide a custom NzDateAdapter which implements required methods to deal with native date object.

### Example

```ts
import { NzDateAdapter } from 'ng-met-antd/core';

export class CustomDateAdapter extends NzDateAdapter<any> {
  // implementation of abstract methods
}

@NgModule({
  providers: [{ provide: NzDateAdapter, useClass: CustomDateAdapter }],
})
export class AppModule {}
```

#### Sample

[Jalali-Moment date adapter](https://gist.github.com/psychomet/22798ab7552b38751ac44a665fe1c512)
