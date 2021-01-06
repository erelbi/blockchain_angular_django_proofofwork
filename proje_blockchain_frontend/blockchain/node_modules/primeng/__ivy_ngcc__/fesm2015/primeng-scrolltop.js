import { Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, ChangeDetectorRef, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { DomHandler } from 'primeng/dom';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = function (a0, a1) { return { showTransitionParams: a0, hideTransitionParams: a1 }; };
const _c1 = function (a1) { return { value: "open", params: a1 }; };
function ScrollTop_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 1);
    ɵngcc0.ɵɵlistener("@animation.start", function ScrollTop_button_0_Template_button_animation_animation_start_0_listener() { ɵngcc0.ɵɵrestoreView(_r2); const ctx_r1 = ɵngcc0.ɵɵnextContext(); return ctx_r1.onEnter(); })("click", function ScrollTop_button_0_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r2); const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.onClick(); });
    ɵngcc0.ɵɵelement(1, "span", 2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r0.styleClass);
    ɵngcc0.ɵɵproperty("@animation", ɵngcc0.ɵɵpureFunction1(11, _c1, ɵngcc0.ɵɵpureFunction2(8, _c0, ctx_r0.showTransitionOptions, ctx_r0.hideTransitionOptions)))("ngClass", ctx_r0.containerClass())("ngStyle", ctx_r0.style);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassMap(ctx_r0.icon);
    ɵngcc0.ɵɵproperty("ngClass", "p-scrolltop-icon");
} }
class ScrollTop {
    constructor(el, cd) {
        this.el = el;
        this.cd = cd;
        this.target = "window";
        this.threshold = 400;
        this.icon = "pi pi-chevron-up";
        this.behavior = "smooth";
        this.showTransitionOptions = '.15s';
        this.hideTransitionOptions = '.15s';
        this.visible = false;
    }
    ngOnInit() {
        if (this.target === 'window')
            this.bindDocumentScrollListener();
        else if (this.target === 'parent')
            this.bindParentScrollListener();
    }
    onClick() {
        let scrollElement = this.target === 'window' ? window : this.el.nativeElement.parentElement;
        scrollElement.scroll({
            top: 0,
            behavior: this.behavior
        });
    }
    onEnter() {
        this.el.nativeElement.children[0].style.zIndex = DomHandler.generateZIndex();
    }
    checkVisibility(scrollY) {
        if (scrollY > this.threshold)
            this.visible = true;
        else
            this.visible = false;
        this.cd.markForCheck();
    }
    bindParentScrollListener() {
        this.scrollListener = () => {
            this.checkVisibility(this.el.nativeElement.parentElement.scrollTop);
        };
        this.el.nativeElement.parentElement.addEventListener('scroll', this.scrollListener);
    }
    bindDocumentScrollListener() {
        this.scrollListener = () => {
            this.checkVisibility(DomHandler.getWindowScrollTop());
        };
        window.addEventListener('scroll', this.scrollListener);
    }
    unbindParentScrollListener() {
        if (this.scrollListener) {
            this.el.nativeElement.parentElement.removeEventListener('scroll', this.scrollListener);
            this.scrollListener = null;
        }
    }
    unbindDocumentScrollListener() {
        if (this.scrollListener) {
            window.removeEventListener('scroll', this.scrollListener);
            this.scrollListener = null;
        }
    }
    containerClass() {
        return {
            'p-scrolltop p-link p-component': true,
            'p-scrolltop-sticky': this.target !== 'window'
        };
    }
    ngOnDestroy() {
        if (this.target === 'window')
            this.unbindDocumentScrollListener();
        else if (this.target === 'parent')
            this.unbindParentScrollListener();
    }
}
ScrollTop.ɵfac = function ScrollTop_Factory(t) { return new (t || ScrollTop)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
ScrollTop.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ScrollTop, selectors: [["p-scrollTop"]], inputs: { target: "target", threshold: "threshold", icon: "icon", behavior: "behavior", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", styleClass: "styleClass", style: "style" }, decls: 1, vars: 1, consts: [["type", "button", 3, "ngClass", "class", "ngStyle", "click", 4, "ngIf"], ["type", "button", 3, "ngClass", "ngStyle", "click"], [3, "ngClass"]], template: function ScrollTop_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, ScrollTop_button_0_Template, 2, 13, "button", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.visible);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgClass, ɵngcc1.NgStyle], styles: [".p-scrolltop{align-items:center;bottom:20px;display:flex;justify-content:center;position:fixed;right:20px}.p-scrolltop-sticky{position:sticky}.p-scrolltop-sticky.p-link{margin-left:auto}"], encapsulation: 2, data: { animation: [
            trigger('animation', [
                state('void', style({
                    opacity: 0
                })),
                state('open', style({
                    opacity: 1
                })),
                transition('void => open', animate('{{showTransitionParams}}')),
                transition('open => void', animate('{{hideTransitionParams}}')),
            ])
        ] }, changeDetection: 0 });
ScrollTop.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
ScrollTop.propDecorators = {
    styleClass: [{ type: Input }],
    style: [{ type: Input }],
    target: [{ type: Input }],
    threshold: [{ type: Input }],
    icon: [{ type: Input }],
    behavior: [{ type: Input }],
    showTransitionOptions: [{ type: Input }],
    hideTransitionOptions: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ScrollTop, [{
        type: Component,
        args: [{
                selector: 'p-scrollTop',
                template: `
        <button  *ngIf="visible" [@animation]="{value: 'open', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}" (@animation.start)="onEnter()"
            [ngClass]="containerClass()" (click)="onClick()" [class]="styleClass" [ngStyle]="style" type="button">
            <span [class]="icon" [ngClass]="'p-scrolltop-icon'"></span>
        </button>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                animations: [
                    trigger('animation', [
                        state('void', style({
                            opacity: 0
                        })),
                        state('open', style({
                            opacity: 1
                        })),
                        transition('void => open', animate('{{showTransitionParams}}')),
                        transition('open => void', animate('{{hideTransitionParams}}')),
                    ])
                ],
                styles: [".p-scrolltop{align-items:center;bottom:20px;display:flex;justify-content:center;position:fixed;right:20px}.p-scrolltop-sticky{position:sticky}.p-scrolltop-sticky.p-link{margin-left:auto}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { target: [{
            type: Input
        }], threshold: [{
            type: Input
        }], icon: [{
            type: Input
        }], behavior: [{
            type: Input
        }], showTransitionOptions: [{
            type: Input
        }], hideTransitionOptions: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], style: [{
            type: Input
        }] }); })();
class ScrollTopModule {
}
ScrollTopModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ScrollTopModule });
ScrollTopModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ScrollTopModule_Factory(t) { return new (t || ScrollTopModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ScrollTopModule, { declarations: function () { return [ScrollTop]; }, imports: function () { return [CommonModule]; }, exports: function () { return [ScrollTop]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ScrollTopModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [ScrollTop],
                declarations: [ScrollTop]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ScrollTop, ScrollTopModule };

//# sourceMappingURL=primeng-scrolltop.js.map