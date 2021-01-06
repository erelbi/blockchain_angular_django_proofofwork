import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function Tag_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 3);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngClass", ctx_r0.icon);
} }
const _c0 = ["*"];
class Tag {
    containerClass() {
        return {
            'p-tag p-component': true,
            'p-tag-info': this.severity === 'info',
            'p-tag-success': this.severity === 'success',
            'p-tag-warning': this.severity === 'warning',
            'p-tag-danger': this.severity === 'danger',
            'p-tag-rounded': this.rounded
        };
    }
}
Tag.ɵfac = function Tag_Factory(t) { return new (t || Tag)(); };
Tag.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Tag, selectors: [["p-tag"]], inputs: { styleClass: "styleClass", style: "style", severity: "severity", value: "value", icon: "icon", rounded: "rounded" }, ngContentSelectors: _c0, decls: 5, vars: 6, consts: [[3, "ngClass", "ngStyle"], ["class", "p-tag-icon", 3, "ngClass", 4, "ngIf"], [1, "p-tag-value"], [1, "p-tag-icon", 3, "ngClass"]], template: function Tag_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "span", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵtemplate(2, Tag_span_2_Template, 1, 1, "span", 1);
        ɵngcc0.ɵɵelementStart(3, "span", 2);
        ɵngcc0.ɵɵtext(4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", ctx.containerClass())("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.icon);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.value);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgIf], styles: [".p-tag{align-items:center;display:inline-flex;justify-content:center}.p-tag-icon,.p-tag-icon.pi,.p-tag-value{line-height:1.5}.p-tag.p-tag-rounded{border-radius:10rem}"], encapsulation: 2, changeDetection: 0 });
Tag.propDecorators = {
    styleClass: [{ type: Input }],
    style: [{ type: Input }],
    severity: [{ type: Input }],
    value: [{ type: Input }],
    icon: [{ type: Input }],
    rounded: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Tag, [{
        type: Component,
        args: [{
                selector: 'p-tag',
                template: `
        <span [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="style">
            <ng-content></ng-content>
            <span class="p-tag-icon" [ngClass]="icon" *ngIf="icon"></span>
            <span class="p-tag-value">{{value}}</span>
        </span>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-tag{align-items:center;display:inline-flex;justify-content:center}.p-tag-icon,.p-tag-icon.pi,.p-tag-value{line-height:1.5}.p-tag.p-tag-rounded{border-radius:10rem}"]
            }]
    }], null, { styleClass: [{
            type: Input
        }], style: [{
            type: Input
        }], severity: [{
            type: Input
        }], value: [{
            type: Input
        }], icon: [{
            type: Input
        }], rounded: [{
            type: Input
        }] }); })();
class TagModule {
}
TagModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TagModule });
TagModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TagModule_Factory(t) { return new (t || TagModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TagModule, { declarations: function () { return [Tag]; }, imports: function () { return [CommonModule]; }, exports: function () { return [Tag]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TagModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [Tag],
                declarations: [Tag]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { Tag, TagModule };

//# sourceMappingURL=primeng-tag.js.map