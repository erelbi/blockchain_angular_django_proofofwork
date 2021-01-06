import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["*"];
class Divider {
    constructor() {
        this.layout = "horizontal";
        this.type = "solid";
    }
    containerClass() {
        return {
            'p-divider p-component': true,
            'p-divider-horizontal': this.layout === "horizontal",
            'p-divider-vertical': this.layout === "vertical",
            'p-divider-solid': this.type === "solid",
            'p-divider-dashed': this.type === "dashed",
            'p-divider-dotted': this.type === "dotted",
            'p-divider-left': this.layout === 'horizontal' && (!this.align || this.align === 'left'),
            'p-divider-center': (this.layout === 'horizontal' && this.align === 'center') || (this.layout === 'vertical' && (!this.align || this.align === 'center')),
            'p-divider-right': this.layout === 'horizontal' && this.align === 'right',
            'p-divider-top': this.layout === 'vertical' && (this.align === 'top'),
            'p-divider-bottom': this.layout === 'vertical' && this.align === 'bottom'
        };
    }
}
Divider.ɵfac = function Divider_Factory(t) { return new (t || Divider)(); };
Divider.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Divider, selectors: [["p-divider"]], inputs: { layout: "layout", type: "type", styleClass: "styleClass", style: "style", align: "align" }, ngContentSelectors: _c0, decls: 3, vars: 4, consts: [["role", "separator", 3, "ngClass", "ngStyle"], [1, "p-divider-content"]], template: function Divider_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ctx.containerClass())("ngStyle", ctx.style);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle], styles: [".p-divider-horizontal{align-items:center;display:flex;position:relative;width:100%}.p-divider-horizontal:before{content:\"\";display:block;left:0;position:absolute;top:50%;width:100%}.p-divider-horizontal.p-divider-left{justify-content:flex-start}.p-divider-horizontal.p-divider-right{justify-content:flex-end}.p-divider-horizontal.p-divider-center{justify-content:center}.p-divider-content{z-index:1}.p-divider-vertical{display:flex;justify-content:center;margin:0 1rem;min-height:100%;position:relative}.p-divider-vertical:before{content:\"\";display:block;height:100%;left:50%;position:absolute;top:0}.p-divider-vertical.p-divider-top{align-items:flex-start}.p-divider-vertical.p-divider-center{align-items:center}.p-divider-vertical.p-divider-bottom{align-items:flex-end}.p-divider-solid.p-divider-horizontal:before{border-top-style:solid}.p-divider-solid.p-divider-vertical:before{border-left-style:solid}.p-divider-dashed.p-divider-horizontal:before{border-top-style:dashed}.p-divider-dashed.p-divider-vertical:before{border-left-style:dashed}.p-divider-dotted.p-divider-horizontal:before{border-left-style:dotted;border-top-style:dotted}"], encapsulation: 2, changeDetection: 0 });
Divider.propDecorators = {
    styleClass: [{ type: Input }],
    style: [{ type: Input }],
    layout: [{ type: Input }],
    type: [{ type: Input }],
    align: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Divider, [{
        type: Component,
        args: [{
                selector: 'p-divider',
                template: `
        <div [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="style" role="separator">
            <div class="p-divider-content">
                <ng-content></ng-content>
            </div>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-divider-horizontal{align-items:center;display:flex;position:relative;width:100%}.p-divider-horizontal:before{content:\"\";display:block;left:0;position:absolute;top:50%;width:100%}.p-divider-horizontal.p-divider-left{justify-content:flex-start}.p-divider-horizontal.p-divider-right{justify-content:flex-end}.p-divider-horizontal.p-divider-center{justify-content:center}.p-divider-content{z-index:1}.p-divider-vertical{display:flex;justify-content:center;margin:0 1rem;min-height:100%;position:relative}.p-divider-vertical:before{content:\"\";display:block;height:100%;left:50%;position:absolute;top:0}.p-divider-vertical.p-divider-top{align-items:flex-start}.p-divider-vertical.p-divider-center{align-items:center}.p-divider-vertical.p-divider-bottom{align-items:flex-end}.p-divider-solid.p-divider-horizontal:before{border-top-style:solid}.p-divider-solid.p-divider-vertical:before{border-left-style:solid}.p-divider-dashed.p-divider-horizontal:before{border-top-style:dashed}.p-divider-dashed.p-divider-vertical:before{border-left-style:dashed}.p-divider-dotted.p-divider-horizontal:before{border-left-style:dotted;border-top-style:dotted}"]
            }]
    }], function () { return []; }, { layout: [{
            type: Input
        }], type: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], style: [{
            type: Input
        }], align: [{
            type: Input
        }] }); })();
class DividerModule {
}
DividerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: DividerModule });
DividerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function DividerModule_Factory(t) { return new (t || DividerModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(DividerModule, { declarations: function () { return [Divider]; }, imports: function () { return [CommonModule]; }, exports: function () { return [Divider]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DividerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [Divider],
                declarations: [Divider]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { Divider, DividerModule };

//# sourceMappingURL=primeng-divider.js.map