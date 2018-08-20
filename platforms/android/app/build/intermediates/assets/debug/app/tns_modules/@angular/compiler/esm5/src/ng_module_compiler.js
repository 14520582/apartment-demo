/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { identifierName } from './compile_metadata';
import { Identifiers } from './identifiers';
import * as o from './output/output_ast';
import { typeSourceSpan } from './parse_util';
import { NgModuleProviderAnalyzer } from './provider_analyzer';
import { componentFactoryResolverProviderDef, providerDef } from './view_compiler/provider_compiler';
var NgModuleCompileResult = /** @class */ (function () {
    function NgModuleCompileResult(ngModuleFactoryVar) {
        this.ngModuleFactoryVar = ngModuleFactoryVar;
    }
    return NgModuleCompileResult;
}());
export { NgModuleCompileResult };
var LOG_VAR = o.variable('_l');
var NgModuleCompiler = /** @class */ (function () {
    function NgModuleCompiler(reflector) {
        this.reflector = reflector;
    }
    NgModuleCompiler.prototype.compile = function (ctx, ngModuleMeta, extraProviders) {
        var sourceSpan = typeSourceSpan('NgModule', ngModuleMeta.type);
        var entryComponentFactories = ngModuleMeta.transitiveModule.entryComponents;
        var bootstrapComponents = ngModuleMeta.bootstrapComponents;
        var providerParser = new NgModuleProviderAnalyzer(this.reflector, ngModuleMeta, extraProviders, sourceSpan);
        var providerDefs = [componentFactoryResolverProviderDef(this.reflector, ctx, 0 /* None */, entryComponentFactories)]
            .concat(providerParser.parse().map(function (provider) { return providerDef(ctx, provider); }))
            .map(function (_a) {
            var providerExpr = _a.providerExpr, depsExpr = _a.depsExpr, flags = _a.flags, tokenExpr = _a.tokenExpr;
            return o.importExpr(Identifiers.moduleProviderDef).callFn([
                o.literal(flags), tokenExpr, providerExpr, depsExpr
            ]);
        });
        var ngModuleDef = o.importExpr(Identifiers.moduleDef).callFn([o.literalArr(providerDefs)]);
        var ngModuleDefFactory = o.fn([new o.FnParam(LOG_VAR.name)], [new o.ReturnStatement(ngModuleDef)], o.INFERRED_TYPE);
        var ngModuleFactoryVar = identifierName(ngModuleMeta.type) + "NgFactory";
        this._createNgModuleFactory(ctx, ngModuleMeta.type.reference, o.importExpr(Identifiers.createModuleFactory).callFn([
            ctx.importExpr(ngModuleMeta.type.reference),
            o.literalArr(bootstrapComponents.map(function (id) { return ctx.importExpr(id.reference); })),
            ngModuleDefFactory
        ]));
        if (ngModuleMeta.id) {
            var id = typeof ngModuleMeta.id === 'string' ? o.literal(ngModuleMeta.id) :
                ctx.importExpr(ngModuleMeta.id);
            var registerFactoryStmt = o.importExpr(Identifiers.RegisterModuleFactoryFn)
                .callFn([id, o.variable(ngModuleFactoryVar)])
                .toStmt();
            ctx.statements.push(registerFactoryStmt);
        }
        return new NgModuleCompileResult(ngModuleFactoryVar);
    };
    NgModuleCompiler.prototype.createStub = function (ctx, ngModuleReference) {
        this._createNgModuleFactory(ctx, ngModuleReference, o.NULL_EXPR);
    };
    NgModuleCompiler.prototype._createNgModuleFactory = function (ctx, reference, value) {
        var ngModuleFactoryVar = identifierName({ reference: reference }) + "NgFactory";
        var ngModuleFactoryStmt = o.variable(ngModuleFactoryVar)
            .set(value)
            .toDeclStmt(o.importType(Identifiers.NgModuleFactory, [o.expressionType(ctx.importExpr(reference))], [o.TypeModifier.Const]), [o.StmtModifier.Final, o.StmtModifier.Exported]);
        ctx.statements.push(ngModuleFactoryStmt);
    };
    return NgModuleCompiler;
}());
export { NgModuleCompiler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdfbW9kdWxlX2NvbXBpbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvc3JjL25nX21vZHVsZV9jb21waWxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQW1ELGNBQWMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBR3BHLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxLQUFLLENBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUN6QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQzVDLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBRTdELE9BQU8sRUFBQyxtQ0FBbUMsRUFBVSxXQUFXLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUUzRztJQUNFLCtCQUFtQixrQkFBMEI7UUFBMUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFRO0lBQUcsQ0FBQztJQUNuRCw0QkFBQztBQUFELENBQUMsQUFGRCxJQUVDOztBQUVELElBQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFakM7SUFDRSwwQkFBb0IsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFBRyxDQUFDO0lBQ25ELGtDQUFPLEdBQVAsVUFDSSxHQUFrQixFQUFFLFlBQXFDLEVBQ3pELGNBQXlDO1FBQzNDLElBQU0sVUFBVSxHQUFHLGNBQWMsQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pFLElBQU0sdUJBQXVCLEdBQUcsWUFBWSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQztRQUM5RSxJQUFNLG1CQUFtQixHQUFHLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQztRQUM3RCxJQUFNLGNBQWMsR0FDaEIs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QUMsc0JBQXNCLENBQUMsR0FBRyxFQUFFLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRU8saURBQXNCLEdBQTlCLFVBQStCLEdBQWtCLEVBQUUsU0FBYyxFQUFFLEtBQW1CO1FBQ3BGLElBQU0sa0JBQWtCLEdBQU0sY0FBYyxDQUFDLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBQyxDQUFDLGNBQVcsQ0FBQztRQUNoRixJQUFNLG1CQUFtQixHQUNyQixDQUFDLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDO2FBQ3pCLEdBQUcsQ0FBQyxLQUFLLENBQUM7YUFDVixVQUFVLENBQ1AsQ0FBQyxDQUFDLFVBQVUsQ0FDUixXQUFXLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFHLENBQUMsRUFDNUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQzNCLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBRTdELEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQTdERCxJQTZEQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtDb21waWxlTmdNb2R1bGVNZXRhZGF0YSwgQ29tcGlsZVByb3ZpZGVyTWV0YWRhdGEsIGlkZW50aWZpZXJOYW1lfSBmcm9tICcuL2NvbXBpbGVfbWV0YWRhdGEnO1xuaW1wb3J0IHtDb21waWxlUmVmbGVjdG9yfSBmcm9tICcuL2NvbXBpbGVfcmVmbGVjdG9yJztcbmltcG9ydCB7Tm9kZUZsYWdzfSBmcm9tICcuL2NvcmUnO1xuaW1wb3J0IHtJZGVudGlmaWVyc30gZnJvbSAnLi9pZGVudGlmaWVycyc7XG5pbXBvcnQgKiBhcyBvIGZyb20gJy4vb3V0cHV0L291dHB1dF9hc3QnO1xuaW1wb3J0IHt0eXBlU291cmNlU3Bhbn0gZnJvbSAnLi9wYXJzZV91dGlsJztcbmltcG9ydCB7TmdNb2R1bGVQcm92aWRlckFuYWx5emVyfSBmcm9tICcuL3Byb3ZpZGVyX2FuYWx5emVyJztcbmltcG9ydCB7T3V0cHV0Q29udGV4dH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7Y29tcG9uZW50RmFjdG9yeVJlc29sdmVyUHJvdmlkZXJEZWYsIGRlcERlZiwgcHJvdmlkZXJEZWZ9IGZyb20gJy4vdmlld19jb21waWxlci9wcm92aWRlcl9jb21waWxlcic7XG5cbmV4cG9ydCBjbGFzcyBOZ01vZHVsZUNvbXBpbGVSZXN1bHQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmdNb2R1bGVGYWN0b3J5VmFyOiBzdHJpbmcpIHt9XG59XG5cbmNvbnN0IExPR19WQVIgPSBvLnZhcmlhYmxlKCdfbCcpO1xuXG5leHBvcnQgY2xhc3MgTmdNb2R1bGVDb21waWxlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVmbGVjdG9yOiBDb21waWxlUmVmbGVjdG9yKSB7fVxuICBjb21waWxlKFxuICAgICAgY3R4OiBPdXRwdXRDb250ZXh0LCBuZ01vZHVsZU1ldGE6IENvbXBpbGVOZ01vZHVsZU1ldGFkYXRhLFxuICAgICAgZXh0cmFQcm92aWRlcnM6IENvbXBpbGVQcm92aWRlck1ldGFkYXRhW10pOiBOZ01vZHVsZUNvbXBpbGVSZXN1bHQge1xuICAgIGNvbnN0IHNvdXJjZVNwYW4gPSB0eXBlU291cmNlU3BhbignTmdNb2R1bGUnLCBuZ01vZHVsZU1ldGEudHlwZSk7XG4gICAgY29uc3QgZW50cnlDb21wb25lbnRGYWN0b3JpZXMgPSBuZ01vZHVsZU1ldGEudHJhbnNpdGl2ZU1vZHVsZS5lbnRyeUNvbXBvbmVudHM7XG4gICAgY29uc3QgYm9vdHN0cmFwQ29tcG9uZW50cyA9IG5nTW9kdWxlTWV0YS5ib290c3RyYXBDb21wb25lbnRzO1xuICAgIGNvbnN0IHByb3ZpZGVyUGFyc2VyID1cbiAgICAgICAgbmV3IE5nTW9kdWxlUHJvdmlkZXJBbmFseXplcih0aGlzLnJlZmxlY3RvciwgbmdNb2R1bGVNZXRhLCBleHRyYVByb3ZpZGVycywgc291cmNlU3Bhbik7XG4gICAgY29uc3QgcHJvdmlkZXJEZWZzID1cbiAgICAgICAgW2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlclByb3ZpZGVyRGVmKFxuICAgICAgICAgICAgIHRoaXMucmVmbGVjdG9yLCBjdHgsIE5vZGVGbGFncy5Ob25lLCBlbnRyeUNvbXBvbmVudEZhY3RvcmllcyldXG4gICAgICAgICAgICAuY29uY2F0KHByb3ZpZGVyUGFyc2VyLnBhcnNlKCkubWFwKChwcm92aWRlcikgPT4gcHJvdmlkZXJEZWYoY3R4LCBwcm92aWRlcikpKVxuICAgICAgICAgICAgLm1hcCgoe3Byb3ZpZGVyRXhwciwgZGVwc0V4cHIsIGZsYWdzLCB0b2tlbkV4cHJ9KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBvLmltcG9ydEV4cHIoSWRlbnRpZmllcnMubW9kdWxlUHJvdmlkZXJEZWYpLmNhbGxGbihbXG4gICAgICAgICAgICAgICAgby5saXRlcmFsKGZsYWdzKSwgdG9rZW5FeHByLCBwcm92aWRlckV4cHIsIGRlcHNFeHByXG4gICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICBjb25zdCBuZ01vZHVsZURlZiA9IG8uaW1wb3J0RXhwcihJZGVudGlmaWVycy5tb2R1bGVEZWYpLmNhbGxGbihbby5saXRlcmFsQXJyKHByb3ZpZGVyRGVmcyldKTtcbiAgICBjb25zdCBuZ01vZHVsZURlZkZhY3RvcnkgPSBvLmZuKFxuICAgICAgICBbbmV3IG8uRm5QYXJhbShMT0dfVkFSLm5hbWUgISldLCBbbmV3IG8uUmV0dXJuU3RhdGVtZW50KG5nTW9kdWxlRGVmKV0sIG8uSU5GRVJSRURfVFlQRSk7XG5cbiAgICBjb25zdCBuZ01vZHVsZUZhY3RvcnlWYXIgPSBgJHtpZGVudGlmaWVyTmFtZShuZ01vZHVsZU1ldGEudHlwZSl9TmdGYWN0b3J5YDtcbiAgICB0aGlzLl9jcmVhdGVOZ01vZHVsZUZhY3RvcnkoXG4gICAgICAgIGN0eCwgbmdNb2R1bGVNZXRhLnR5cGUucmVmZXJlbmNlLCBvLmltcG9ydEV4cHIoSWRlbnRpZmllcnMuY3JlYXRlTW9kdWxlRmFjdG9yeSkuY2FsbEZuKFtcbiAgICAgICAgICBjdHguaW1wb3J0RXhwcihuZ01vZHVsZU1ldGEudHlwZS5yZWZlcmVuY2UpLFxuICAgICAgICAgIG8ubGl0ZXJhbEFycihib290c3RyYXBDb21wb25lbnRzLm1hcChpZCA9PiBjdHguaW1wb3J0RXhwcihpZC5yZWZlcmVuY2UpKSksXG4gICAgICAgICAgbmdNb2R1bGVEZWZGYWN0b3J5XG4gICAgICAgIF0pKTtcblxuICAgIGlmIChuZ01vZHVsZU1ldGEuaWQpIHtcbiAgICAgIGNvbnN0IGlkID0gdHlwZW9mIG5nTW9kdWxlTWV0YS5pZCA9PT0gJ3N0cmluZycgPyBvLmxpdGVyYWwobmdNb2R1bGVNZXRhLmlkKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmltcG9ydEV4cHIobmdNb2R1bGVNZXRhLmlkKTtcbiAgICAgIGNvbnN0IHJlZ2lzdGVyRmFjdG9yeVN0bXQgPSBvLmltcG9ydEV4cHIoSWRlbnRpZmllcnMuUmVnaXN0ZXJNb2R1bGVGYWN0b3J5Rm4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsRm4oW2lkLCBvLnZhcmlhYmxlKG5nTW9kdWxlRmFjdG9yeVZhcildKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9TdG10KCk7XG4gICAgICBjdHguc3RhdGVtZW50cy5wdXNoKHJlZ2lzdGVyRmFjdG9yeVN0bXQpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgTmdNb2R1bGVDb21waWxlUmVzdWx0KG5nTW9kdWxlRmFjdG9yeVZhcik7XG4gIH1cblxuICBjcmVhdGVTdHViKGN0eDogT3V0cHV0Q29udGV4dCwgbmdNb2R1bGVSZWZlcmVuY2U6IGFueSkge1xuICAgIHRoaXMuX2NyZWF0ZU5nTW9kdWxlRmFjdG9yeShjdHgsIG5nTW9kdWxlUmVmZXJlbmNlLCBvLk5VTExfRVhQUik7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVOZ01vZHVsZUZhY3RvcnkoY3R4OiBPdXRwdXRDb250ZXh0LCByZWZlcmVuY2U6IGFueSwgdmFsdWU6IG8uRXhwcmVzc2lvbikge1xuICAgIGNvbnN0IG5nTW9kdWxlRmFjdG9yeVZhciA9IGAke2lkZW50aWZpZXJOYW1lKHtyZWZlcmVuY2U6IHJlZmVyZW5jZX0pfU5nRmFjdG9yeWA7XG4gICAgY29uc3QgbmdNb2R1bGVGYWN0b3J5U3RtdCA9XG4gICAgICAgIG8udmFyaWFibGUobmdNb2R1bGVGYWN0b3J5VmFyKVxuICAgICAgICAgICAgLnNldCh2YWx1ZSlcbiAgICAgICAgICAgIC50b0RlY2xTdG10KFxuICAgICAgICAgICAgICAgIG8uaW1wb3J0VHlwZShcbiAgICAgICAgICAgICAgICAgICAgSWRlbnRpZmllcnMuTmdNb2R1bGVGYWN0b3J5LCBbby5leHByZXNzaW9uVHlwZShjdHguaW1wb3J0RXhwcihyZWZlcmVuY2UpKSAhXSxcbiAgICAgICAgICAgICAgICAgICAgW28uVHlwZU1vZGlmaWVyLkNvbnN0XSksXG4gICAgICAgICAgICAgICAgW28uU3RtdE1vZGlmaWVyLkZpbmFsLCBvLlN0bXRNb2RpZmllci5FeHBvcnRlZF0pO1xuXG4gICAgY3R4LnN0YXRlbWVudHMucHVzaChuZ01vZHVsZUZhY3RvcnlTdG10KTtcbiAgfVxufVxuIl19