import { Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, Input, ContentChildren, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeTemplate } from 'primeng/api';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function Timeline_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Timeline_div_1_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
function Timeline_div_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, Timeline_div_1_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const event_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r4.markerTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c0, event_r1));
} }
function Timeline_div_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 10);
} }
function Timeline_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 11);
} }
function Timeline_div_1_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function Timeline_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵelementStart(1, "div", 3);
    ɵngcc0.ɵɵtemplate(2, Timeline_div_1_ng_container_2_Template, 1, 0, "ng-container", 4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "div", 5);
    ɵngcc0.ɵɵtemplate(4, Timeline_div_1_ng_container_4_Template, 2, 4, "ng-container", 6);
    ɵngcc0.ɵɵtemplate(5, Timeline_div_1_ng_template_5_Template, 1, 0, "ng-template", null, 7, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵtemplate(7, Timeline_div_1_div_7_Template, 1, 0, "div", 8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(8, "div", 9);
    ɵngcc0.ɵɵtemplate(9, Timeline_div_1_ng_container_9_Template, 1, 0, "ng-container", 4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const event_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    const _r5 = ɵngcc0.ɵɵreference(6);
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.oppositeTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(7, _c0, event_r1));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.markerTemplate)("ngIfElse", _r5);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵproperty("ngIf", !last_r2);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.contentTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(9, _c0, event_r1));
} }
const _c1 = function (a1, a2, a3, a4, a5, a6, a7) { return { "p-timeline p-component": true, "p-timeline-left": a1, "p-timeline-right": a2, "p-timeline-top": a3, "p-timeline-bottom": a4, "p-timeline-alternate": a5, "p-timeline-vertical": a6, "p-timeline-horizontal": a7 }; };
class Timeline {
    constructor(el) {
        this.el = el;
        this.align = 'left';
        this.layout = 'vertical';
    }
    getBlockableElement() {
        return this.el.nativeElement.children[0];
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'content':
                    this.contentTemplate = item.template;
                    break;
                case 'opposite':
                    this.oppositeTemplate = item.template;
                    break;
                case 'marker':
                    this.markerTemplate = item.template;
                    break;
            }
        });
    }
}
Timeline.ɵfac = function Timeline_Factory(t) { return new (t || Timeline)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
Timeline.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Timeline, selectors: [["p-timeline"]], contentQueries: function Timeline_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, PrimeTemplate, false);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.templates = _t);
    } }, inputs: { align: "align", layout: "layout", value: "value", style: "style", styleClass: "styleClass" }, decls: 2, vars: 13, consts: [[3, "ngStyle", "ngClass"], ["class", "p-timeline-event", 4, "ngFor", "ngForOf"], [1, "p-timeline-event"], [1, "p-timeline-event-opposite"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-timeline-event-separator"], [4, "ngIf", "ngIfElse"], ["marker", ""], ["class", "p-timeline-event-connector", 4, "ngIf"], [1, "p-timeline-event-content"], [1, "p-timeline-event-marker"], [1, "p-timeline-event-connector"]], template: function Timeline_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, Timeline_div_1_Template, 10, 11, "div", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.style)("ngClass", ɵngcc0.ɵɵpureFunction7(5, _c1, ctx.align === "left", ctx.align === "right", ctx.align === "top", ctx.align === "bottom", ctx.align === "alternate", ctx.layout === "vertical", ctx.layout === "horizontal"));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.value);
    } }, directives: [ɵngcc1.NgStyle, ɵngcc1.NgClass, ɵngcc1.NgForOf, ɵngcc1.NgTemplateOutlet, ɵngcc1.NgIf], styles: [".p-timeline{display:flex;flex-direction:column;flex-grow:1}.p-timeline-left .p-timeline-event-opposite{text-align:right}.p-timeline-left .p-timeline-event-content{text-align:left}.p-timeline-right .p-timeline-event{flex-direction:row-reverse}.p-timeline-right .p-timeline-event-opposite{text-align:left}.p-timeline-right .p-timeline-event-content{text-align:right}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(2n){flex-direction:row-reverse}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite{text-align:right}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(2n) .p-timeline-event-opposite,.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content{text-align:left}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(2n) .p-timeline-event-content{text-align:right}.p-timeline-event{display:flex;min-height:70px;position:relative}.p-timeline-event:last-child{min-height:0}.p-timeline-event-content,.p-timeline-event-opposite{flex:1;padding:0 1rem}.p-timeline-event-separator{align-items:center;display:flex;flex:0;flex-direction:column}.p-timeline-event-marker{align-self:baseline;display:flex}.p-timeline-event-connector{flex-grow:1}.p-timeline-horizontal{flex-direction:row}.p-timeline-horizontal .p-timeline-event{flex:1;flex-direction:column}.p-timeline-horizontal .p-timeline-event:last-child{flex:0}.p-timeline-horizontal .p-timeline-event-separator{flex-direction:row}.p-timeline-horizontal .p-timeline-event-connector{width:100%}.p-timeline-bottom .p-timeline-event,.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(2n){flex-direction:column-reverse}"], encapsulation: 2, changeDetection: 0 });
Timeline.ctorParameters = () => [
    { type: ElementRef }
];
Timeline.propDecorators = {
    value: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    align: [{ type: Input }],
    layout: [{ type: Input }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Timeline, [{
        type: Component,
        args: [{
                selector: 'p-timeline',
                template: `
        <div [class]="styleClass" [ngStyle]="style" [ngClass]="{'p-timeline p-component': true, 
                'p-timeline-left': align === 'left',
                'p-timeline-right': align === 'right',
                'p-timeline-top': align === 'top',
                'p-timeline-bottom': align === 'bottom',
                'p-timeline-alternate': align === 'alternate',
                'p-timeline-vertical': layout === 'vertical',
                'p-timeline-horizontal': layout === 'horizontal'}">
            <div *ngFor="let event of value; let last=last" class="p-timeline-event">
                <div class="p-timeline-event-opposite">
                    <ng-container *ngTemplateOutlet="oppositeTemplate; context: {$implicit: event}"></ng-container>
                </div>
                <div class="p-timeline-event-separator">
                    <ng-container *ngIf="markerTemplate; else marker">
                        <ng-container *ngTemplateOutlet="markerTemplate; context: {$implicit: event}"></ng-container>
                    </ng-container>
                    <ng-template #marker>
                        <div class="p-timeline-event-marker"></div>
                    </ng-template>
                    <div *ngIf="!last" class="p-timeline-event-connector"></div>
                </div>
                <div class="p-timeline-event-content">
                    <ng-container *ngTemplateOutlet="contentTemplate; context: {$implicit: event}"></ng-container>
                </div>
            </div>
        </div>
    `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".p-timeline{display:flex;flex-direction:column;flex-grow:1}.p-timeline-left .p-timeline-event-opposite{text-align:right}.p-timeline-left .p-timeline-event-content{text-align:left}.p-timeline-right .p-timeline-event{flex-direction:row-reverse}.p-timeline-right .p-timeline-event-opposite{text-align:left}.p-timeline-right .p-timeline-event-content{text-align:right}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(2n){flex-direction:row-reverse}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite{text-align:right}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(2n) .p-timeline-event-opposite,.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content{text-align:left}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(2n) .p-timeline-event-content{text-align:right}.p-timeline-event{display:flex;min-height:70px;position:relative}.p-timeline-event:last-child{min-height:0}.p-timeline-event-content,.p-timeline-event-opposite{flex:1;padding:0 1rem}.p-timeline-event-separator{align-items:center;display:flex;flex:0;flex-direction:column}.p-timeline-event-marker{align-self:baseline;display:flex}.p-timeline-event-connector{flex-grow:1}.p-timeline-horizontal{flex-direction:row}.p-timeline-horizontal .p-timeline-event{flex:1;flex-direction:column}.p-timeline-horizontal .p-timeline-event:last-child{flex:0}.p-timeline-horizontal .p-timeline-event-separator{flex-direction:row}.p-timeline-horizontal .p-timeline-event-connector{width:100%}.p-timeline-bottom .p-timeline-event,.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(2n){flex-direction:column-reverse}"]
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { align: [{
            type: Input
        }], layout: [{
            type: Input
        }], value: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], templates: [{
            type: ContentChildren,
            args: [PrimeTemplate]
        }] }); })();
class TimelineModule {
}
TimelineModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TimelineModule });
TimelineModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TimelineModule_Factory(t) { return new (t || TimelineModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TimelineModule, { declarations: function () { return [Timeline]; }, imports: function () { return [CommonModule]; }, exports: function () { return [Timeline]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TimelineModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [Timeline],
                declarations: [Timeline]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { Timeline, TimelineModule };

//# sourceMappingURL=primeng-timeline.js.map