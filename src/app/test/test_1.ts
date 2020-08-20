// import { Input, Output } from '@angular/core';
//
// export interface UserInterface {
//   name: string;
//   id: string;
// }
//
// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'name',
//   templateUrl: 'name.component.html'
// })
//
// export class DocViewComponent extends Doc {
//   constructor() {
//   }
// }
//
//
// export enum DocTypeEnum {
//   img = 'img',
//   xls = 'xls',
//   word = 'word'
// }
//
// export enum DocFuncEnum {
//
// }
//
// class Doc {
//   private type: DocTypeEnum;
//   private size: number;
//   private name: string;
//   private path: string;
//   private createdBy: UserInterface;
//
//   constructor() {
//   }
//
// }
//
// class Dir {
//   private content: Doc[];
//
//   constructor() {
//   }
//
//   getContent(): Doc[] {
//     return this.content;
//   }
//
//   getContentInfo(): any {
//   }
//
// }
//
//
// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-content-list',
//   template: `
//     <ng-container class="listContainer">
//       <ul>
//
//       </ul>
//     </ng-container>
//   `,
//   styles: [``]
// })
//
// export class ContentList implements OnInit {
//   selectedDirInnerContent: any;
//   selectedDir: Dir;
//   @Input() content: Dir[];
//   @Output() selectDirClick;
//
//   constructor() {
//   }
//
//   selectDir(dir: Dir): void {
//     this.selectedDir = dir;
//   }
//
//   ngOnInit() {
//   }
// }
