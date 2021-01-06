import { NgModule, Component, ElementRef, Input, Output, EventEmitter, ContentChild, forwardRef, ChangeDetectionStrategy, ViewEncapsulation, ContentChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule, Header, PrimeTemplate } from 'primeng/api';
import { DomHandler } from 'primeng/dom';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as Quill from "quill";
export const EDITOR_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => Editor),
    multi: true
};
export class Editor {
    constructor(el) {
        this.el = el;
        this.onTextChange = new EventEmitter();
        this.onSelectionChange = new EventEmitter();
        this.onInit = new EventEmitter();
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
    }
    ngAfterViewInit() {
        let editorElement = DomHandler.findSingle(this.el.nativeElement, 'div.p-editor-content');
        let toolbarElement = DomHandler.findSingle(this.el.nativeElement, 'div.p-editor-toolbar');
        let defaultModule = { toolbar: toolbarElement };
        let modules = this.modules ? Object.assign(Object.assign({}, defaultModule), this.modules) : defaultModule;
        this.quill = new Quill(editorElement, {
            modules: modules,
            placeholder: this.placeholder,
            readOnly: this.readonly,
            theme: 'snow',
            formats: this.formats,
            bounds: this.bounds,
            debug: this.debug,
            scrollingContainer: this.scrollingContainer
        });
        if (this.value) {
            this.quill.pasteHTML(this.value);
        }
        this.quill.on('text-change', (delta, oldContents, source) => {
            if (source === 'user') {
                let html = editorElement.children[0].innerHTML;
                let text = this.quill.getText().trim();
                if (html === '<p><br></p>') {
                    html = null;
                }
                this.onTextChange.emit({
                    htmlValue: html,
                    textValue: text,
                    delta: delta,
                    source: source
                });
                this.onModelChange(html);
                this.onModelTouched();
            }
        });
        this.quill.on('selection-change', (range, oldRange, source) => {
            this.onSelectionChange.emit({
                range: range,
                oldRange: oldRange,
                source: source
            });
        });
        this.onInit.emit({
            editor: this.quill
        });
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'toolbar':
                    this.toolbarTemplate = item.template;
                    break;
                case 'header':
                    this.headerTemplate = item.template;
                    break;
            }
        });
    }
    writeValue(value) {
        this.value = value;
        if (this.quill) {
            if (value)
                this.quill.pasteHTML(value);
            else
                this.quill.setText('');
        }
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    getQuill() {
        return this.quill;
    }
    get readonly() {
        return this._readonly;
    }
    set readonly(val) {
        this._readonly = val;
        if (this.quill) {
            if (this._readonly)
                this.quill.disable();
            else
                this.quill.enable();
        }
    }
}
Editor.decorators = [
    { type: Component, args: [{
                selector: 'p-editor',
                template: `
        <div [ngClass]="'p-editor-container'" [class]="styleClass">
            <div class="p-editor-toolbar" *ngIf="toolbar || toolbarTemplate">
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
            </div>
            <div class="p-editor-toolbar" *ngIf="!toolbar && !toolbarTemplate">
                <span class="ql-formats">
                    <select class="ql-header">
                      <option value="1">Heading</option>
                      <option value="2">Subheading</option>
                      <option selected>Normal</option>
                    </select>
                    <select class="ql-font">
                      <option selected>Sans Serif</option>
                      <option value="serif">Serif</option>
                      <option value="monospace">Monospace</option>
                    </select>
                </span>
                <span class="ql-formats">
                    <button class="ql-bold" aria-label="Bold" type="button"></button>
                    <button class="ql-italic" aria-label="Italic" type="button"></button>
                    <button class="ql-underline" aria-label="Underline" type="button"></button>
                </span>
                <span class="ql-formats">
                    <select class="ql-color"></select>
                    <select class="ql-background"></select>
                </span>
                <span class="ql-formats">
                    <button class="ql-list" value="ordered" aria-label="Ordered List" type="button"></button>
                    <button class="ql-list" value="bullet" aria-label="Unordered List" type="button"></button>
                    <select class="ql-align">
                        <option selected></option>
                        <option value="center"></option>
                        <option value="right"></option>
                        <option value="justify"></option>
                    </select>
                </span>
                <span class="ql-formats">
                    <button class="ql-link" aria-label="Insert Link" type="button"></button>
                    <button class="ql-image" aria-label="Insert Image" type="button"></button>
                    <button class="ql-code-block" aria-label="Insert Code Block" type="button"></button>
                </span>
                <span class="ql-formats">
                    <button class="ql-clean" aria-label="Remove Styles" type="button"></button>
                </span>
            </div>
            <div class="p-editor-content" [ngStyle]="style"></div>
        </div>
    `,
                providers: [EDITOR_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
Editor.ctorParameters = () => [
    { type: ElementRef }
];
Editor.propDecorators = {
    onTextChange: [{ type: Output }],
    onSelectionChange: [{ type: Output }],
    toolbar: [{ type: ContentChild, args: [Header,] }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    placeholder: [{ type: Input }],
    formats: [{ type: Input }],
    modules: [{ type: Input }],
    bounds: [{ type: Input }],
    scrollingContainer: [{ type: Input }],
    debug: [{ type: Input }],
    onInit: [{ type: Output }],
    templates: [{ type: ContentChildren, args: [PrimeTemplate,] }],
    readonly: [{ type: Input }]
};
export class EditorModule {
}
EditorModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [Editor, SharedModule],
                declarations: [Editor]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9lZGl0b3IvIiwic291cmNlcyI6WyJlZGl0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFlLEtBQUssRUFBQyxNQUFNLEVBQUMsWUFBWSxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUEyQyxNQUFNLGVBQWUsQ0FBQztBQUNsTyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLEVBQUUsYUFBYSxFQUFDLE1BQU0sYUFBYSxDQUFBO0FBQzlELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFDLGlCQUFpQixFQUF1QixNQUFNLGdCQUFnQixDQUFDO0FBQ3ZFLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBRS9CLE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUFRO0lBQ3hDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDckMsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBMERGLE1BQU0sT0FBTyxNQUFNO0lBMENmLFlBQW1CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBeEN2QixpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXJELHNCQUFpQixHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBb0IxRCxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFRekQsa0JBQWEsR0FBYSxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7UUFFbkMsbUJBQWMsR0FBYSxHQUFHLEVBQUUsR0FBRSxDQUFDLENB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VDtnQkFDRCxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztnQkFDbEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3hDOzs7WUFwRTBCLFVBQVU7OzsyQkF1RWhDLE1BQU07Z0NBRU4sTUFBTTtzQkFFTixZQUFZLFNBQUMsTUFBTTtvQkFFbkIsS0FBSzt5QkFFTCxLQUFLOzBCQUVMLEtBQUs7c0JBRUwsS0FBSztzQkFFTCxLQUFLO3FCQUVMLEtBQUs7aUNBRUwsS0FBSztvQkFFTCxLQUFLO3FCQUVMLE1BQU07d0JBRU4sZUFBZSxTQUFDLGFBQWE7dUJBNEc3QixLQUFLOztBQXFCVixNQUFNLE9BQU8sWUFBWTs7O1lBTHhCLFFBQVEsU0FBQztnQkFDTixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBQyxZQUFZLENBQUM7Z0JBQzlCLFlBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQzthQUN6QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsQ29tcG9uZW50LEVsZW1lbnRSZWYsQWZ0ZXJWaWV3SW5pdCxJbnB1dCxPdXRwdXQsRXZlbnRFbWl0dGVyLENvbnRlbnRDaGlsZCxmb3J3YXJkUmVmLENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBWaWV3RW5jYXBzdWxhdGlvbiwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIEFmdGVyQ29udGVudEluaXQsIFRlbXBsYXRlUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtTaGFyZWRNb2R1bGUsSGVhZGVyLCBQcmltZVRlbXBsYXRlfSBmcm9tICdwcmltZW5nL2FwaSdcbmltcG9ydCB7RG9tSGFuZGxlcn0gZnJvbSAncHJpbWVuZy9kb20nO1xuaW1wb3J0IHtOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCAqIGFzIFF1aWxsIGZyb20gXCJxdWlsbFwiO1xuXG5leHBvcnQgY29uc3QgRURJVE9SX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFZGl0b3IpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwLWVkaXRvcicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBbbmdDbGFzc109XCIncC1lZGl0b3ItY29udGFpbmVyJ1wiIFtjbGFzc109XCJzdHlsZUNsYXNzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1lZGl0b3ItdG9vbGJhclwiICpuZ0lmPVwidG9vbGJhciB8fCB0b29sYmFyVGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJwLWhlYWRlclwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaGVhZGVyVGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtZWRpdG9yLXRvb2xiYXJcIiAqbmdJZj1cIiF0b29sYmFyICYmICF0b29sYmFyVGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInFsLWZvcm1hdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cInFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+SGVhZGluZzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+U3ViaGVhZGluZzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ+Tm9ybWFsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwicWwtZm9udFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ+U2FucyBTZXJpZjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzZXJpZlwiPlNlcmlmPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1vbm9zcGFjZVwiPk1vbm9zcGFjZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJxbC1mb3JtYXRzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJxbC1ib2xkXCIgYXJpYS1sYWJlbD1cIkJvbGRcIiB0eXBlPVwiYnV0dG9uXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJxbC1pdGFsaWNcIiBhcmlhLWxhYmVsPVwiSXRhbGljXCIgdHlwZT1cImJ1dHRvblwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicWwtdW5kZXJsaW5lXCIgYXJpYS1sYWJlbD1cIlVuZGVybGluZVwiIHR5cGU9XCJidXR0b25cIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJxbC1mb3JtYXRzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJxbC1jb2xvclwiPjwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwicWwtYmFja2dyb3VuZFwiPjwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInFsLWZvcm1hdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInFsLWxpc3RcIiB2YWx1ZT1cIm9yZGVyZWRcIiBhcmlhLWxhYmVsPVwiT3JkZXJlZCBMaXN0XCIgdHlwZT1cImJ1dHRvblwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicWwtbGlzdFwiIHZhbHVlPVwiYnVsbGV0XCIgYXJpYS1sYWJlbD1cIlVub3JkZXJlZCBMaXN0XCIgdHlwZT1cImJ1dHRvblwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwicWwtYWxpZ25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ+PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY2VudGVyXCI+PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicmlnaHRcIj48L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJqdXN0aWZ5XCI+PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInFsLWZvcm1hdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInFsLWxpbmtcIiBhcmlhLWxhYmVsPVwiSW5zZXJ0IExpbmtcIiB0eXBlPVwiYnV0dG9uXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJxbC1pbWFnZVwiIGFyaWEtbGFiZWw9XCJJbnNlcnQgSW1hZ2VcIiB0eXBlPVwiYnV0dG9uXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJxbC1jb2RlLWJsb2NrXCIgYXJpYS1sYWJlbD1cIkluc2VydCBDb2RlIEJsb2NrXCIgdHlwZT1cImJ1dHRvblwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInFsLWZvcm1hdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInFsLWNsZWFuXCIgYXJpYS1sYWJlbD1cIlJlbW92ZSBTdHlsZXNcIiB0eXBlPVwiYnV0dG9uXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1lZGl0b3ItY29udGVudFwiIFtuZ1N0eWxlXT1cInN0eWxlXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgcHJvdmlkZXJzOiBbRURJVE9SX1ZBTFVFX0FDQ0VTU09SXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEVkaXRvciBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsQWZ0ZXJDb250ZW50SW5pdCxDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gICAgICAgIFxuICAgIEBPdXRwdXQoKSBvblRleHRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIFxuICAgIEBPdXRwdXQoKSBvblNlbGVjdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgXG4gICAgQENvbnRlbnRDaGlsZChIZWFkZXIpIHRvb2xiYXI7XG4gICAgXG4gICAgQElucHV0KCkgc3R5bGU6IGFueTtcbiAgICAgICAgXG4gICAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nO1xuICAgIFxuICAgIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gICAgXG4gICAgQElucHV0KCkgZm9ybWF0czogc3RyaW5nW107XG5cbiAgICBASW5wdXQoKSBtb2R1bGVzOiBhbnk7XG5cbiAgICBASW5wdXQoKSBib3VuZHM6IGFueTtcblxuICAgIEBJbnB1dCgpIHNjcm9sbGluZ0NvbnRhaW5lcjogYW55O1xuXG4gICAgQElucHV0KCkgZGVidWc6IHN0cmluZztcbiAgICBcbiAgICBAT3V0cHV0KCkgb25Jbml0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBDb250ZW50Q2hpbGRyZW4oUHJpbWVUZW1wbGF0ZSkgdGVtcGxhdGVzOiBRdWVyeUxpc3Q8YW55PjtcbiAgICBcbiAgICB2YWx1ZTogc3RyaW5nO1xuICAgIFxuICAgIF9yZWFkb25seTogYm9vbGVhbjtcbiAgICBcbiAgICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICAgIFxuICAgIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICAgIFxuICAgIHF1aWxsOiBhbnk7XG5cbiAgICB0b29sYmFyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBoZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGxldCBlZGl0b3JFbGVtZW50ID0gRG9tSGFuZGxlci5maW5kU2luZ2xlKHRoaXMuZWwubmF0aXZlRWxlbWVudCAsJ2Rpdi5wLWVkaXRvci1jb250ZW50Jyk7IFxuICAgICAgICBsZXQgdG9vbGJhckVsZW1lbnQgPSBEb21IYW5kbGVyLmZpbmRTaW5nbGUodGhpcy5lbC5uYXRpdmVFbGVtZW50ICwnZGl2LnAtZWRpdG9yLXRvb2xiYXInKTsgXG4gICAgICAgIGxldCBkZWZhdWx0TW9kdWxlICA9IHt0b29sYmFyOiB0b29sYmFyRWxlbWVudH07XG4gICAgICAgIGxldCBtb2R1bGVzID0gdGhpcy5tb2R1bGVzID8gey4uLmRlZmF1bHRNb2R1bGUsIC4uLnRoaXMubW9kdWxlc30gOiBkZWZhdWx0TW9kdWxlO1xuXG4gICAgICAgIHRoaXMucXVpbGwgPSBuZXcgUXVpbGwoZWRpdG9yRWxlbWVudCwge1xuICAgICAgICAgICAgbW9kdWxlczogbW9kdWxlcyxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgcmVhZE9ubHk6IHRoaXMucmVhZG9ubHksXG4gICAgICAgICAgICB0aGVtZTogJ3Nub3cnLFxuICAgICAgICAgICAgZm9ybWF0czogdGhpcy5mb3JtYXRzLFxuICAgICAgICAgICAgYm91bmRzOiB0aGlzLmJvdW5kcyxcbiAgICAgICAgICAgIGRlYnVnOiB0aGlzLmRlYnVnLFxuICAgICAgICAgICAgc2Nyb2xsaW5nQ29udGFpbmVyOiB0aGlzLnNjcm9sbGluZ0NvbnRhaW5lclxuICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMucXVpbGwucGFzdGVIVE1MKHRoaXMudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnF1aWxsLm9uKCd0ZXh0LWNoYW5nZScsIChkZWx0YSwgb2xkQ29udGVudHMsIHNvdXJjZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNvdXJjZSA9PT0gJ3VzZXInKSB7XG4gICAgICAgICAgICAgICAgbGV0IGh0bWwgPSBlZGl0b3JFbGVtZW50LmNoaWxkcmVuWzBdLmlubmVySFRNTDtcbiAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IHRoaXMucXVpbGwuZ2V0VGV4dCgpLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBpZiAoaHRtbCA9PT0gJzxwPjxicj48L3A+Jykge1xuICAgICAgICAgICAgICAgICAgICBodG1sID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLm9uVGV4dENoYW5nZS5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgaHRtbFZhbHVlOiBodG1sLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0VmFsdWU6IHRleHQsXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhOiBkZWx0YSxcbiAgICAgICAgICAgICAgICAgICAgc291cmNlOiBzb3VyY2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UoaHRtbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vbk1vZGVsVG91Y2hlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucXVpbGwub24oJ3NlbGVjdGlvbi1jaGFuZ2UnLCAocmFuZ2UsIG9sZFJhbmdlLCBzb3VyY2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25TZWxlY3Rpb25DaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgICAgICAgcmFuZ2U6IHJhbmdlLFxuICAgICAgICAgICAgICAgIG9sZFJhbmdlOiBvbGRSYW5nZSxcbiAgICAgICAgICAgICAgICBzb3VyY2U6IHNvdXJjZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5vbkluaXQuZW1pdCh7XG4gICAgICAgICAgICBlZGl0b3I6IHRoaXMucXVpbGxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2goaXRlbS5nZXRUeXBlKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICd0b29sYmFyJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b29sYmFyVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2hlYWRlcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyVGVtcGxhdGUgPSBpdGVtLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgICAgIFxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSkgOiB2b2lkIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICBpZiAodGhpcy5xdWlsbCkge1xuICAgICAgICAgICAgaWYgKHZhbHVlKVxuICAgICAgICAgICAgICAgIHRoaXMucXVpbGwucGFzdGVIVE1MKHZhbHVlKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLnF1aWxsLnNldFRleHQoJycpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLm9uTW9kZWxUb3VjaGVkID0gZm47XG4gICAgfVxuICAgIFxuICAgIGdldFF1aWxsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5xdWlsbDtcbiAgICB9XG4gICAgXG4gICAgQElucHV0KCkgZ2V0IHJlYWRvbmx5KCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVhZG9ubHk7XG4gICAgfVxuXG4gICAgc2V0IHJlYWRvbmx5KHZhbDpib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX3JlYWRvbmx5ID0gdmFsO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMucXVpbGwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yZWFkb25seSlcbiAgICAgICAgICAgICAgICB0aGlzLnF1aWxsLmRpc2FibGUoKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLnF1aWxsLmVuYWJsZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtFZGl0b3IsU2hhcmVkTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtFZGl0b3JdXG59KVxuZXhwb3J0IGNsYXNzIEVkaXRvck1vZHVsZSB7IH1cbiJdfQ==