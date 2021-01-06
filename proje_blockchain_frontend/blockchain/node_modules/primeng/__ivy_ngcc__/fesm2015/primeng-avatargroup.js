import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["*"];
class AvatarGroup {
}
AvatarGroup.ɵfac = function AvatarGroup_Factory(t) { return new (t || AvatarGroup)(); };
AvatarGroup.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: AvatarGroup, selectors: [["p-avatarGroup"]], inputs: { styleClass: "styleClass", style: "style" }, ngContentSelectors: _c0, decls: 2, vars: 4, consts: [[3, "ngClass", "ngStyle"]], template: function AvatarGroup_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", "p-avatar-group p-component")("ngStyle", ctx.style);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle], styles: [".p-avatar-group p-avatar+p-avatar{margin-left:-1rem}.p-avatar-group{align-items:center;display:flex}"], encapsulation: 2, changeDetection: 0 });
AvatarGroup.propDecorators = {
    styleClass: [{ type: Input }],
    style: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AvatarGroup, [{
        type: Component,
        args: [{
                selector: 'p-avatarGroup',
                template: `
        <div [ngClass]="'p-avatar-group p-component'" [class]="styleClass" [ngStyle]="style">
            <ng-content></ng-content>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-avatar-group p-avatar+p-avatar{margin-left:-1rem}.p-avatar-group{align-items:center;display:flex}"]
            }]
    }], null, { styleClass: [{
            type: Input
        }], style: [{
            type: Input
        }] }); })();
class AvatarGroupModule {
}
AvatarGroupModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: AvatarGroupModule });
AvatarGroupModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function AvatarGroupModule_Factory(t) { return new (t || AvatarGroupModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(AvatarGroupModule, { declarations: function () { return [AvatarGroup]; }, imports: function () { return [CommonModule]; }, exports: function () { return [AvatarGroup]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AvatarGroupModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [AvatarGroup],
                declarations: [AvatarGroup]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { AvatarGroup, AvatarGroupModule };

//# sourceMappingURL=primeng-avatargroup.js.map