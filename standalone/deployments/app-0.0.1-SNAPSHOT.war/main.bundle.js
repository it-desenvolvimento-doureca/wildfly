webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\n  body {\n    background: blue;\n  }\n</style>\n<div class=\"wrapper\" [hidden]=\"!isMaps('login')\">\n\n  <div class=\"sidebar\" data-color='red' data-image=\"\" [hidden]=\"!isMaps('login')\">\n    <app-menu></app-menu>\n    <div class=\"sidebar-background\" style=\"background-image: url(../assets/img/sidebar-4.jpg)\"></div>\n  </div>\n\n  <div class=\"main-panel\" *ngIf=\"isMaps('login')\">\n    <app-cabecalho></app-cabecalho>\n\n    <router-cmp></router-cmp>\n    <app-rodape></app-rodape>\n\n  </div>\n</div>\n<div class=\"scrollup\"></div>\n<p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\n<app-login *ngIf=\"!isMaps('login')\"></app-login>\n<script src=\"assets/js/initMenu.js\"></script>\n\n<div id=\"dialog_novo_componente_banho\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"ui-dialog-titlebar-close\" style=\"font-size: 23px;\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">AVISO</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Data fim do último resgisto não está preenchida!</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"ui-button\" data-dismiss=\"modal\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div id=\"aviso_datas\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"ui-dialog-titlebar-close\" style=\"font-size: 23px;\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">AVISO</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Atenção! Existe uma Data Fim superior ou igual à data inserida!</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"ui-button\" data-dismiss=\"modal\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div id=\"aviso_datafim\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"ui-dialog-titlebar-close\" style=\"font-size: 23px;\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">AVISO</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Data Fim é inferior à Data Início!</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"ui-button\" data-dismiss=\"modal\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div id=\"aviso_gravar\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\" style=\"width: 35%\">\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"ui-dialog-titlebar-close\" style=\"font-size: 23px;\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">AVISO</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>É necessário guardar primeiro!</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"ui-button\" data-dismiss=\"modal\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<!-- Modal sel. Linhas-->\n<div class=\"modal fade\" id=\"myModalSElLinhas\" role=\"dialog\">\n  <div class=\"modal-dialog\"  style=\"width: 35%\">\n    <div class=\"modal-content\">\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n                       <span aria-hidden=\"true\">&times;</span>\n                       <span class=\"sr-only\">Close</span>\n                </button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">\n          Selecionar Linha\n        </h4>\n      </div>\n      <form role=\"form\" ngNativeValidate (ngSubmit)=\"confirmar()\">\n        <!-- Modal Body -->\n        <div class=\"modal-body\">\n          <div class=\"form-group form-black label-floating\">\n            <label style=\"font-size: 14px;\">Linha</label>\n            <p-dropdown [style.background]=\"cor_linha\" [options]=\"linhas\" [style]=\"{'width':'100px'}\" [(ngModel)]=\"linha\" [ngModelOptions]=\"{standalone: true}\"\n               [required]=\"true\"></p-dropdown>\n          </div>\n        </div>\n        <!-- Modal Footer -->\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" #closedialog data-dismiss=\"modal\">Fechar</button>\n          <button type=\"submit\" class=\"btn btn-success \">Confirmar</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_servicos_ab_dic_linha_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-linha.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_menu_sidebar_metadata__ = __webpack_require__("../../../../../src/app/menu/sidebar.metadata.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(globalVar, ABDICLINHAService, renderer, location, router) {
        var _this = this;
        this.globalVar = globalVar;
        this.ABDICLINHAService = ABDICLINHAService;
        this.renderer = renderer;
        this.router = router;
        this.linha = this.globalVar.getlinha();
        this.location = location;
        //preenche combobox linhas
        this.ABDICLINHAService.getAll().subscribe(function (response) {
            _this.linhas = [];
            _this.linhas.push({ label: "Sel. Linha", value: "" });
            for (var x in response) {
                _this.linhas.push({ label: response[x].nome_LINHA, value: response[x].id_LINHA });
            }
            _this.linha = _this.globalVar.getlinha();
            _this.linhas = _this.linhas.slice();
        }, function (error) { return console.log(error); });
    }
    AppComponent.prototype.isMaps = function (path) {
        var titlee = this.router.routerState.snapshot.url;
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent.prototype.confirmar = function () {
        this.globalVar.setlinha(this.linha);
        this.simular(this.closedialog);
    };
    //simular click para mostrar mensagem
    AppComponent.prototype.simular = function (element) {
        var event = new MouseEvent('click', { bubbles: true });
        this.renderer.invokeElementMethod(element.nativeElement, 'dispatchEvent', [event]);
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closedialog'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], AppComponent.prototype, "closedialog", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_app_menu_sidebar_metadata__["a" /* AppGlobals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_menu_sidebar_metadata__["a" /* AppGlobals */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_servicos_ab_dic_linha_service__["a" /* ABDICLINHAService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_servicos_ab_dic_linha_service__["a" /* ABDICLINHAService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _f || Object])
], AppComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__paginas_login_login_component__ = __webpack_require__("../../../../../src/app/paginas/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rodape_rodape_component__ = __webpack_require__("../../../../../src/app/rodape/rodape.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cabecalho_cabecalho_component__ = __webpack_require__("../../../../../src/app/cabecalho/cabecalho.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__paginas_home_home_component__ = __webpack_require__("../../../../../src/app/paginas/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_router_component__ = __webpack_require__("../../../../../src/app/router.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__paginas_fornecedores_fornecedores_component__ = __webpack_require__("../../../../../src/app/paginas/fornecedores/fornecedores.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__paginas_tinas_tinas_component__ = __webpack_require__("../../../../../src/app/paginas/tinas/tinas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_menu_sidebar_metadata__ = __webpack_require__("../../../../../src/app/menu/sidebar.metadata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__paginas_fornecedores_form_form_component__ = __webpack_require__("../../../../../src/app/paginas/fornecedores/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__ = __webpack_require__("../../../../../src/app/servicos/LoginService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__paginas_tinas_tinasform_tinasform_component__ = __webpack_require__("../../../../../src/app/paginas/tinas/tinasform/tinasform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__paginas_componentes_componentes_component__ = __webpack_require__("../../../../../src/app/paginas/componentes/componentes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__paginas_componentes_compform_compform_component__ = __webpack_require__("../../../../../src/app/paginas/componentes/compform/compform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__paginas_utilizadores_utilizadores_component__ = __webpack_require__("../../../../../src/app/paginas/utilizadores/utilizadores.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__paginas_utilizadores_utlform_utlform_component__ = __webpack_require__("../../../../../src/app/paginas/utilizadores/utlform/utlform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__paginas_banhos_banhos_component__ = __webpack_require__("../../../../../src/app/paginas/banhos/banhos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__paginas_banhos_banhosform_banhosform_component__ = __webpack_require__("../../../../../src/app/paginas/banhos/banhosform/banhosform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_app_servicos_ger_fornecedor_service__ = __webpack_require__("../../../../../src/app/servicos/ger-fornecedor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_app_servicos_ger_utilizadores_service__ = __webpack_require__("../../../../../src/app/servicos/ger-utilizadores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_app_servicos_ab_dic_tina_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-tina.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__cabecalho_controlos_controlos_component__ = __webpack_require__("../../../../../src/app/cabecalho/controlos/controlos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_app_servicos_ab_dic_banho_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-banho.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_app_servicos_ab_dic_banho_componente_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-banho-componente.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_app_servicos_ab_dic_componente_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-componente.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ng2_mask__ = __webpack_require__("../../../../ng2-mask/build/ng2-mask.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_app_servicos_ab_dic_linha_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-linha.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__paginas_perfil_perfil_component__ = __webpack_require__("../../../../../src/app/paginas/perfil/perfil.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_app_servicos_ab_unidade_medida_service__ = __webpack_require__("../../../../../src/app/servicos/ab-unidade-medida.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__paginas_configuracoes_configuracoes_component__ = __webpack_require__("../../../../../src/app/paginas/configuracoes/configuracoes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__paginas_registoanalises_registoanalises_component__ = __webpack_require__("../../../../../src/app/paginas/registoanalises/registoanalises.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__paginas_registoanalises_registoform_registoform_component__ = __webpack_require__("../../../../../src/app/paginas/registoanalises/registoform/registoform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_app_servicos_ab_mov_analise_service__ = __webpack_require__("../../../../../src/app/servicos/ab-mov-analise.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_app_servicos_ab_mov_analise_linha_service__ = __webpack_require__("../../../../../src/app/servicos/ab-mov-analise-linha.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__paginas_manutencao_manutencao_component__ = __webpack_require__("../../../../../src/app/paginas/manutencao/manutencao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__paginas_manutencao_manutencaoform_manutencaoform_component__ = __webpack_require__("../../../../../src/app/paginas/manutencao/manutencaoform/manutencaoform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_app_servicos_ab_dic_banho_aditivo_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-banho-aditivo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_app_servicos_ab_dic_tipo_manutencao_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-tipo-manutencao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46_app_servicos_ab_dic_turno_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-turno.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47_app_servicos_ab_mov_manutencao_service__ = __webpack_require__("../../../../../src/app/servicos/ab-mov-manutencao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48_app_servicos_ab_dic_tipo_adicao_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-tipo-adicao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49_app_servicos_ab_dic_tipo_operacao_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-tipo-operacao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50_app_servicos_ab_mov_manutencao_cab_service__ = __webpack_require__("../../../../../src/app/servicos/ab-mov-manutencao-cab.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51_app_servicos_ab_mov_manutencao_linha_service__ = __webpack_require__("../../../../../src/app/servicos/ab-mov-manutencao-linha.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__paginas_parametrosanalisebanhos_linhas_linhas_component__ = __webpack_require__("../../../../../src/app/paginas/parametrosanalisebanhos/linhas/linhas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__paginas_parametrosanalisebanhos_unidadesmedida_unidadesmedida_component__ = __webpack_require__("../../../../../src/app/paginas/parametrosanalisebanhos/unidadesmedida/unidadesmedida.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__paginas_parametrosanalisebanhos_zonas_zonas_component__ = __webpack_require__("../../../../../src/app/paginas/parametrosanalisebanhos/zonas/zonas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__paginas_parametrosanalisebanhos_turnos_turnos_component__ = __webpack_require__("../../../../../src/app/paginas/parametrosanalisebanhos/turnos/turnos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__paginas_parametrosanalisebanhos_tipoadicao_tipoadicao_component__ = __webpack_require__("../../../../../src/app/paginas/parametrosanalisebanhos/tipoadicao/tipoadicao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__paginas_parametrosanalisebanhos_tipomanutenacao_tipomanutenacao_component__ = __webpack_require__("../../../../../src/app/paginas/parametrosanalisebanhos/tipomanutenacao/tipomanutenacao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__paginas_parametrosanalisebanhos_tipooperacao_tipooperacao_component__ = __webpack_require__("../../../../../src/app/paginas/parametrosanalisebanhos/tipooperacao/tipooperacao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59_app_servicos_ab_dic_zona_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-zona.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__paginas_registoparametros_registoparametros_component__ = __webpack_require__("../../../../../src/app/paginas/registoparametros/registoparametros.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__paginas_registoparametros_registoparaform_registoparaform_component__ = __webpack_require__("../../../../../src/app/paginas/registoparametros/registoparaform/registoparaform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62_app_servicos_ad_mov_reg_param_operacao_service__ = __webpack_require__("../../../../../src/app/servicos/ad-mov-reg-param-operacao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63_app_servicos_relatorios_service__ = __webpack_require__("../../../../../src/app/servicos/relatorios.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__paginas_relatorio_viewer_relatorio_viewer_component__ = __webpack_require__("../../../../../src/app/paginas/relatorio-viewer/relatorio-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65_app_servicos_email_service__ = __webpack_require__("../../../../../src/app/servicos/email.service.ts");
/* unused harmony export routing */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































































var routes = [
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_8__paginas_home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]] },
    {
        path: 'fornecedor', component: __WEBPACK_IMPORTED_MODULE_9_app_router_component__["a" /* RouterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Fornecedores" },
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_10__paginas_fornecedores_fornecedores_component__["a" /* FornecedoresComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "" } },
            { path: 'view', component: __WEBPACK_IMPORTED_MODULE_14__paginas_fornecedores_form_form_component__["a" /* FormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Fornecedor" } },
            { path: 'editar', component: __WEBPACK_IMPORTED_MODULE_14__paginas_fornecedores_form_form_component__["a" /* FormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Editar" } },
            { path: 'novo', component: __WEBPACK_IMPORTED_MODULE_14__paginas_fornecedores_form_form_component__["a" /* FormComponent */], data: { breadcrumb: "Novo" } }
        ]
    },
    {
        path: 'tinas', component: __WEBPACK_IMPORTED_MODULE_9_app_router_component__["a" /* RouterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Tinas" },
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_11__paginas_tinas_tinas_component__["a" /* TinasComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "" } },
            { path: 'view', component: __WEBPACK_IMPORTED_MODULE_17__paginas_tinas_tinasform_tinasform_component__["a" /* TinasformComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Tina" } },
            { path: 'editar', component: __WEBPACK_IMPORTED_MODULE_17__paginas_tinas_tinasform_tinasform_component__["a" /* TinasformComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Editar" } },
            { path: 'novo', component: __WEBPACK_IMPORTED_MODULE_17__paginas_tinas_tinasform_tinasform_component__["a" /* TinasformComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Novo" } }
        ]
    },
    {
        path: 'banhos', component: __WEBPACK_IMPORTED_MODULE_9_app_router_component__["a" /* RouterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Banhos" },
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_22__paginas_banhos_banhos_component__["a" /* BanhosComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "" } },
            { path: 'view', component: __WEBPACK_IMPORTED_MODULE_23__paginas_banhos_banhosform_banhosform_component__["a" /* BanhosformComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Banho" } },
            { path: 'editar', component: __WEBPACK_IMPORTED_MODULE_23__paginas_banhos_banhosform_banhosform_component__["a" /* BanhosformComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Editar" } },
            { path: 'novo', component: __WEBPACK_IMPORTED_MODULE_23__paginas_banhos_banhosform_banhosform_component__["a" /* BanhosformComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Novo" } }
        ]
    },
    {
        path: 'componentes', component: __WEBPACK_IMPORTED_MODULE_9_app_router_component__["a" /* RouterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Componentes/Aditivos" },
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_18__paginas_componentes_componentes_component__["a" /* ComponentesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "" } },
            { path: 'view', component: __WEBPACK_IMPORTED_MODULE_19__paginas_componentes_compform_compform_component__["a" /* CompformComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Componente/Aditivo" } },
            { path: 'editar', component: __WEBPACK_IMPORTED_MODULE_19__paginas_componentes_compform_compform_component__["a" /* CompformComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Editar" } },
            { path: 'novo', component: __WEBPACK_IMPORTED_MODULE_19__paginas_componentes_compform_compform_component__["a" /* CompformComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Novo" } }
        ]
    },
    {
        path: 'utilizadores', component: __WEBPACK_IMPORTED_MODULE_9_app_router_component__["a" /* RouterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Utilizadores" },
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_20__paginas_utilizadores_utilizadores_component__["a" /* UtilizadoresComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "" } },
            { path: 'view', component: __WEBPACK_IMPORTED_MODULE_21__paginas_utilizadores_utlform_utlform_component__["a" /* UtlformComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Utilizador" } },
            { path: 'editar', component: __WEBPACK_IMPORTED_MODULE_21__paginas_utilizadores_utlform_utlform_component__["a" /* UtlformComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Editar" } },
            { path: 'novo', component: __WEBPACK_IMPORTED_MODULE_21__paginas_utilizadores_utlform_utlform_component__["a" /* UtlformComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Novo" } }
        ]
    },
    {
        path: 'registo', component: __WEBPACK_IMPORTED_MODULE_9_app_router_component__["a" /* RouterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Registo Análises" },
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_38__paginas_registoanalises_registoanalises_component__["a" /* RegistoanalisesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "" } },
            { path: 'view', component: __WEBPACK_IMPORTED_MODULE_39__paginas_registoanalises_registoform_registoform_component__["a" /* RegistoformComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Análise" } },
            { path: 'editar', component: __WEBPACK_IMPORTED_MODULE_39__paginas_registoanalises_registoform_registoform_component__["a" /* RegistoformComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Editar" } },
            { path: 'novo', component: __WEBPACK_IMPORTED_MODULE_39__paginas_registoanalises_registoform_registoform_component__["a" /* RegistoformComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Novo" } }
        ]
    },
    {
        path: 'manutencao', component: __WEBPACK_IMPORTED_MODULE_9_app_router_component__["a" /* RouterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Manutenções" },
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_42__paginas_manutencao_manutencao_component__["a" /* ManutencaoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "" } },
            { path: 'view', component: __WEBPACK_IMPORTED_MODULE_43__paginas_manutencao_manutencaoform_manutencaoform_component__["a" /* ManutencaoformComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Manutenção" } },
            { path: 'editar', component: __WEBPACK_IMPORTED_MODULE_43__paginas_manutencao_manutencaoform_manutencaoform_component__["a" /* ManutencaoformComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Editar" } },
            { path: 'novo', component: __WEBPACK_IMPORTED_MODULE_43__paginas_manutencao_manutencaoform_manutencaoform_component__["a" /* ManutencaoformComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Novo" } }
        ]
    },
    {
        path: 'registopara', component: __WEBPACK_IMPORTED_MODULE_9_app_router_component__["a" /* RouterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Reg. Parâm. de Operações" },
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_60__paginas_registoparametros_registoparametros_component__["a" /* RegistoparametrosComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "" } },
            { path: 'view', component: __WEBPACK_IMPORTED_MODULE_61__paginas_registoparametros_registoparaform_registoparaform_component__["a" /* RegistoparaformComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Reg. Parâm. de Operação" } },
            { path: 'editar', component: __WEBPACK_IMPORTED_MODULE_61__paginas_registoparametros_registoparaform_registoparaform_component__["a" /* RegistoparaformComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Editar" } },
            { path: 'novo', component: __WEBPACK_IMPORTED_MODULE_61__paginas_registoparametros_registoparaform_registoparaform_component__["a" /* RegistoparaformComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Novo" } }
        ]
    },
    { path: 'perfil/view', component: __WEBPACK_IMPORTED_MODULE_35__paginas_perfil_perfil_component__["a" /* PerfilComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Perfil" } },
    { path: 'config', component: __WEBPACK_IMPORTED_MODULE_37__paginas_configuracoes_configuracoes_component__["a" /* ConfiguracoesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Configurações" } },
    { path: 'unidades', component: __WEBPACK_IMPORTED_MODULE_53__paginas_parametrosanalisebanhos_unidadesmedida_unidadesmedida_component__["a" /* UnidadesmedidaComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Unidade de Medida" } },
    { path: 'linhas', component: __WEBPACK_IMPORTED_MODULE_52__paginas_parametrosanalisebanhos_linhas_linhas_component__["a" /* LinhasComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Linhas" } },
    { path: 'zonas', component: __WEBPACK_IMPORTED_MODULE_54__paginas_parametrosanalisebanhos_zonas_zonas_component__["a" /* ZonasComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Zonas" } },
    { path: 'turnos', component: __WEBPACK_IMPORTED_MODULE_55__paginas_parametrosanalisebanhos_turnos_turnos_component__["a" /* TurnosComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Turnos" } },
    { path: 'adicoes', component: __WEBPACK_IMPORTED_MODULE_56__paginas_parametrosanalisebanhos_tipoadicao_tipoadicao_component__["a" /* TipoadicaoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Tipo Adição" } },
    { path: 'manutencoes', component: __WEBPACK_IMPORTED_MODULE_57__paginas_parametrosanalisebanhos_tipomanutenacao_tipomanutenacao_component__["a" /* TipomanutenacaoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Tipo Manutenção" } },
    { path: 'operacoes', component: __WEBPACK_IMPORTED_MODULE_58__paginas_parametrosanalisebanhos_tipooperacao_tipooperacao_component__["a" /* TipooperacaoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Tipo Operação" } },
    { path: 'perfil/editar', component: __WEBPACK_IMPORTED_MODULE_35__paginas_perfil_perfil_component__["a" /* PerfilComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Perfil" } },
    { path: 'relatorio', component: __WEBPACK_IMPORTED_MODULE_64__paginas_relatorio_viewer_relatorio_viewer_component__["a" /* RelatorioViewerComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */]], data: { breadcrumb: "Relatório" } },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__paginas_login_login_component__["a" /* LoginComponent */] },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forRoot(routes);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__paginas_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_5__rodape_rodape_component__["a" /* RodapeComponent */],
            __WEBPACK_IMPORTED_MODULE_6__cabecalho_cabecalho_component__["a" /* CabecalhoComponent */],
            __WEBPACK_IMPORTED_MODULE_7__menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_8__paginas_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9_app_router_component__["a" /* RouterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__paginas_fornecedores_fornecedores_component__["a" /* FornecedoresComponent */],
            __WEBPACK_IMPORTED_MODULE_11__paginas_tinas_tinas_component__["a" /* TinasComponent */],
            __WEBPACK_IMPORTED_MODULE_14__paginas_fornecedores_form_form_component__["a" /* FormComponent */],
            __WEBPACK_IMPORTED_MODULE_17__paginas_tinas_tinasform_tinasform_component__["a" /* TinasformComponent */],
            __WEBPACK_IMPORTED_MODULE_18__paginas_componentes_componentes_component__["a" /* ComponentesComponent */],
            __WEBPACK_IMPORTED_MODULE_19__paginas_componentes_compform_compform_component__["a" /* CompformComponent */],
            __WEBPACK_IMPORTED_MODULE_20__paginas_utilizadores_utilizadores_component__["a" /* UtilizadoresComponent */],
            __WEBPACK_IMPORTED_MODULE_21__paginas_utilizadores_utlform_utlform_component__["a" /* UtlformComponent */],
            __WEBPACK_IMPORTED_MODULE_22__paginas_banhos_banhos_component__["a" /* BanhosComponent */],
            __WEBPACK_IMPORTED_MODULE_23__paginas_banhos_banhosform_banhosform_component__["a" /* BanhosformComponent */],
            __WEBPACK_IMPORTED_MODULE_29__cabecalho_controlos_controlos_component__["a" /* ControlosComponent */],
            __WEBPACK_IMPORTED_MODULE_35__paginas_perfil_perfil_component__["a" /* PerfilComponent */],
            __WEBPACK_IMPORTED_MODULE_37__paginas_configuracoes_configuracoes_component__["a" /* ConfiguracoesComponent */],
            __WEBPACK_IMPORTED_MODULE_38__paginas_registoanalises_registoanalises_component__["a" /* RegistoanalisesComponent */],
            __WEBPACK_IMPORTED_MODULE_39__paginas_registoanalises_registoform_registoform_component__["a" /* RegistoformComponent */],
            __WEBPACK_IMPORTED_MODULE_42__paginas_manutencao_manutencao_component__["a" /* ManutencaoComponent */],
            __WEBPACK_IMPORTED_MODULE_43__paginas_manutencao_manutencaoform_manutencaoform_component__["a" /* ManutencaoformComponent */],
            __WEBPACK_IMPORTED_MODULE_52__paginas_parametrosanalisebanhos_linhas_linhas_component__["a" /* LinhasComponent */],
            __WEBPACK_IMPORTED_MODULE_53__paginas_parametrosanalisebanhos_unidadesmedida_unidadesmedida_component__["a" /* UnidadesmedidaComponent */],
            __WEBPACK_IMPORTED_MODULE_54__paginas_parametrosanalisebanhos_zonas_zonas_component__["a" /* ZonasComponent */],
            __WEBPACK_IMPORTED_MODULE_55__paginas_parametrosanalisebanhos_turnos_turnos_component__["a" /* TurnosComponent */],
            __WEBPACK_IMPORTED_MODULE_56__paginas_parametrosanalisebanhos_tipoadicao_tipoadicao_component__["a" /* TipoadicaoComponent */],
            __WEBPACK_IMPORTED_MODULE_57__paginas_parametrosanalisebanhos_tipomanutenacao_tipomanutenacao_component__["a" /* TipomanutenacaoComponent */],
            __WEBPACK_IMPORTED_MODULE_58__paginas_parametrosanalisebanhos_tipooperacao_tipooperacao_component__["a" /* TipooperacaoComponent */],
            __WEBPACK_IMPORTED_MODULE_60__paginas_registoparametros_registoparametros_component__["a" /* RegistoparametrosComponent */],
            __WEBPACK_IMPORTED_MODULE_61__paginas_registoparametros_registoparaform_registoparaform_component__["a" /* RegistoparaformComponent */],
            __WEBPACK_IMPORTED_MODULE_64__paginas_relatorio_viewer_relatorio_viewer_component__["a" /* RelatorioViewerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_26__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_12_primeng_primeng__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_33_ng2_mask__["a" /* Ng2MaskModule */],
            __WEBPACK_IMPORTED_MODULE_12_primeng_primeng__["SharedModule"],
            __WEBPACK_IMPORTED_MODULE_12_primeng_primeng__["DropdownModule"],
            __WEBPACK_IMPORTED_MODULE_15__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_12_primeng_primeng__["CalendarModule"],
            __WEBPACK_IMPORTED_MODULE_25__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_12_primeng_primeng__["DialogModule"],
            __WEBPACK_IMPORTED_MODULE_12_primeng_primeng__["RadioButtonModule"],
            __WEBPACK_IMPORTED_MODULE_12_primeng_primeng__["ColorPickerModule"],
            __WEBPACK_IMPORTED_MODULE_12_primeng_primeng__["TreeModule"],
            __WEBPACK_IMPORTED_MODULE_12_primeng_primeng__["ConfirmDialogModule"],
            __WEBPACK_IMPORTED_MODULE_12_primeng_primeng__["ChartModule"],
            routing
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_13_app_menu_sidebar_metadata__["a" /* AppGlobals */],
            __WEBPACK_IMPORTED_MODULE_16_app_servicos_LoginService__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_12_primeng_primeng__["ConfirmationService"],
            __WEBPACK_IMPORTED_MODULE_27_app_servicos_ger_utilizadores_service__["a" /* GERUTILIZADORESService */],
            __WEBPACK_IMPORTED_MODULE_28_app_servicos_ab_dic_tina_service__["a" /* ABDICTINAService */],
            __WEBPACK_IMPORTED_MODULE_28_app_servicos_ab_dic_tina_service__["a" /* ABDICTINAService */],
            __WEBPACK_IMPORTED_MODULE_46_app_servicos_ab_dic_turno_service__["a" /* ABDICTURNOService */],
            __WEBPACK_IMPORTED_MODULE_59_app_servicos_ab_dic_zona_service__["a" /* ABDICZONAService */],
            __WEBPACK_IMPORTED_MODULE_47_app_servicos_ab_mov_manutencao_service__["a" /* ABMOVMANUTENCAOService */],
            __WEBPACK_IMPORTED_MODULE_48_app_servicos_ab_dic_tipo_adicao_service__["a" /* ABDICTIPOADICAOService */],
            __WEBPACK_IMPORTED_MODULE_49_app_servicos_ab_dic_tipo_operacao_service__["a" /* ABDICTIPOOPERACAOService */],
            __WEBPACK_IMPORTED_MODULE_65_app_servicos_email_service__["a" /* EmailService */],
            __WEBPACK_IMPORTED_MODULE_45_app_servicos_ab_dic_tipo_manutencao_service__["a" /* ABDICTIPOMANUTENCAOService */],
            __WEBPACK_IMPORTED_MODULE_62_app_servicos_ad_mov_reg_param_operacao_service__["a" /* ADMOVREGPARAMOPERACAOService */],
            __WEBPACK_IMPORTED_MODULE_30_app_servicos_ab_dic_banho_service__["a" /* ABDICBANHOService */],
            __WEBPACK_IMPORTED_MODULE_31_app_servicos_ab_dic_banho_componente_service__["a" /* ABDICBANHOCOMPONENTEService */],
            __WEBPACK_IMPORTED_MODULE_50_app_servicos_ab_mov_manutencao_cab_service__["a" /* ABMOVMANUTENCAOCABService */],
            __WEBPACK_IMPORTED_MODULE_51_app_servicos_ab_mov_manutencao_linha_service__["a" /* ABMOVMANUTENCAOLINHAService */],
            __WEBPACK_IMPORTED_MODULE_32_app_servicos_ab_dic_componente_service__["a" /* ABDICCOMPONENTEService */],
            __WEBPACK_IMPORTED_MODULE_34_app_servicos_ab_dic_linha_service__["a" /* ABDICLINHAService */],
            __WEBPACK_IMPORTED_MODULE_40_app_servicos_ab_mov_analise_service__["a" /* ABMOVANALISEService */],
            __WEBPACK_IMPORTED_MODULE_44_app_servicos_ab_dic_banho_aditivo_service__["a" /* ABDICBANHOADITIVOService */],
            __WEBPACK_IMPORTED_MODULE_41_app_servicos_ab_mov_analise_linha_service__["a" /* ABMOVANALISELINHAService */],
            __WEBPACK_IMPORTED_MODULE_36_app_servicos_ab_unidade_medida_service__["a" /* ABUNIDADADEMEDIDAService */],
            __WEBPACK_IMPORTED_MODULE_63_app_servicos_relatorios_service__["a" /* RelatoriosService */],
            __WEBPACK_IMPORTED_MODULE_24_app_servicos_ger_fornecedor_service__["a" /* GERFORNECEDORService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/cabecalho/cabecalho.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cabecalho/cabecalho.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header col-md-12 col-sm-12 col-xs-12\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <ol class=\"breadcrumb\">\n                <li><a routerLink=\"\" class=\"breadcrumb\">Home</a></li>\n                <li *ngFor=\"let breadcrumb of breadcrumbs\">\n                    <a [routerLink]=\"[breadcrumb.url, breadcrumb.params]\">{{ breadcrumb.label }}</a>\n                </li>\n            </ol>\n            {{getTitle()}}\n        </div>\n        <div class=\"collapse navbar-collapse hidden hidden-sm hidden-xs\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li class=\"dropdown\" style=\"display: none\">\n\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <p class=\"hidden-sm hidden-xs\" style=\"float: left; margin: 1px 6px 2px;\">{{nome}}</p>\n                        <i class=\"material-icons\">person</i>\n                        <p class=\"hidden-lg hidden-md\">Perfil</p>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a  [routerLink]=\"['/perfil/view']\" >Perfil</a></li>\n                        <li><a (click)=\"logout()\">Sair</a></li>\n                    </ul>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/cabecalho/cabecalho.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_menu_sidebar_routes_config__ = __webpack_require__("../../../../../src/app/menu/sidebar-routes.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_menu_sidebar_metadata__ = __webpack_require__("../../../../../src/app/menu/sidebar.metadata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CabecalhoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CabecalhoComponent = (function () {
    function CabecalhoComponent(route, router, location, globalVar, changeDetectorRef) {
        this.route = route;
        this.router = router;
        this.globalVar = globalVar;
        this.changeDetectorRef = changeDetectorRef;
        this.currentpage = "";
        this.modo = '';
        this.location = location;
        this.breadcrumbs = [];
    }
    CabecalhoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1_app_menu_sidebar_routes_config__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        var ROUTE_DATA_BREADCRUMB = "breadcrumb";
        if (localStorage.getItem("userapp")) {
            this.nome = JSON.parse(localStorage.getItem('userapp'))["nome"];
        }
        //subscribe to the NavigationEnd event
        this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["NavigationEnd"]; }).subscribe(function (event) {
            //set breadcrumbs
            var root = _this.route.root;
            _this.breadcrumbs = _this.getBreadcrumbs(root);
        });
    };
    CabecalhoComponent.prototype.getTitle = function () {
        this.modo = "";
        var titlee = this.location.prepareExternalUrl(this.location.path());
        var pag = "";
        if (titlee.charAt(0) === '/') {
            titlee = titlee.slice(1);
            var titlearray = titlee.split("/");
            titlee = titlearray[0];
            this.currentpage = titlee;
            if (titlearray[1] != null) {
                if (titlearray[1].match("editar")) {
                    this.modo = "edit";
                    pag = " - Editar";
                }
                if (titlearray[1].match("novo")) {
                    this.modo = "novo";
                    pag = " - Novo";
                }
            }
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return '';
            }
        }
        return '';
    };
    CabecalhoComponent.prototype.ngAfterViewChecked = function () {
        this.changeDetectorRef.detectChanges();
    };
    CabecalhoComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['login']);
    };
    CabecalhoComponent.prototype.getBreadcrumbs = function (route, url, breadcrumbs) {
        if (url === void 0) { url = ""; }
        if (breadcrumbs === void 0) { breadcrumbs = []; }
        var ROUTE_DATA_BREADCRUMB = "breadcrumb";
        //get the child routes
        var children = route.children;
        //return if there are no more children
        if (children.length === 0) {
            return breadcrumbs;
        }
        //iterate over each children
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            //verify primary route
            if (child.outlet !== __WEBPACK_IMPORTED_MODULE_4__angular_router__["PRIMARY_OUTLET"]) {
                continue;
            }
            //verify the custom data property "breadcrumb" is specified on the route
            if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                return this.getBreadcrumbs(child, url, breadcrumbs);
            }
            //get the route's URL segment
            var routeURL = child.snapshot.url.map(function (segment) { return segment.path; }).join("/");
            //append route URL to URL
            url += "/" + routeURL;
            //add breadcrumb
            var breadcrumb = {
                label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
                params: child.snapshot.params,
                url: url
            };
            breadcrumbs.push(breadcrumb);
            //recursive
            return this.getBreadcrumbs(child, url, breadcrumbs);
        }
    };
    return CabecalhoComponent;
}());
CabecalhoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cabecalho',
        template: __webpack_require__("../../../../../src/app/cabecalho/cabecalho.component.html"),
        styles: [__webpack_require__("../../../../../src/app/cabecalho/cabecalho.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_menu_sidebar_metadata__["a" /* AppGlobals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_menu_sidebar_metadata__["a" /* AppGlobals */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _e || Object])
], CabecalhoComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=cabecalho.component.js.map

/***/ }),

/***/ "../../../../../src/app/cabecalho/controlos/controlos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cabecalho/controlos/controlos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12  hidden-xs\">\n        <div class=\"card-header\" data-background-color=\"orange\">\n            <div class=\"nav-tabs-navigation\">\n                <div class=\"nav-tabs-wrapper\">\n                    <ul [hidden]=\"showGreeting\" class=\"nav nav-tabs\" style=\"background:black\">\n                        <li [hidden]=\"!voltar\">\n                            <a (click)=\" backClicked()\">\n                                <i class=\"material-icons\">arrow_back</i>Voltar\n                                <div class=\"ripple-container\"></div>\n                            </a>\n                        </li>\n                        <li [hidden]=\"!criar\">\n                            <a (click)=\"novo()\" [ngClass]=\"modo == 'novo' ? 'cor_modo' : null\">\n                                <i class=\"material-icons\">create_new_folder</i>Novo\n                                <div class=\"ripple-container\"></div>\n                            </a>\n                        </li>\n                        <li [hidden]=\"!pesquisar\" style=\"float: right;\">\n                            <a>\n                                    <i class=\"material-icons\">search</i>Pesquisar\n                                    <div class=\"ripple-container\"></div>\n                            </a>\n                        </li>\n                        <li [hidden]=\"!editar\">\n                            <a (click)=\"edita()\" [ngClass]=\"modo == 'edit' ? 'cor_modo' : null\">\n                                <i class=\"material-icons\">mode_edit</i>Editar\n                                <div class=\"ripple-container\"></div>\n                            </a>\n                        </li>\n                        <li [hidden]=\"!duplica\">\n                            <a (click)=\"duplicar()\" >\n                                <i class=\"material-icons\">content_copy</i>Duplicar\n                                <div class=\"ripple-container\"></div>\n                            </a>\n                        </li>\n                        <li [hidden]=\"!apagar\" style=\"float: right;\">\n                            <a (click)=\"apagar_func()\">\n                                <i class=\"material-icons\">delete</i>Apagar\n                                <div class=\"ripple-container\"></div>\n                            </a>\n                        </li>\n                        <li [hidden]=\"!anterior\" style=\"left:20%\">\n                             <a (click)=\"anterior_func()\">\n                                <i class=\"material-icons\">keyboard_arrow_left</i>\n                                <div class=\"ripple-container\"></div>\n                            </a>\n                        </li>\n                        <li [hidden]=\"!seguinte\" style=\"left:20%\">\n                            <a (click)=\"seguinte_func()\">\n                                <i class=\"material-icons\">keyboard_arrow_right</i>\n                                <div class=\"ripple-container\"></div>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-12 hidden-lg hidden-md  hidden-sm\" style=\"margin-bottom: 20px;\">\n        <div class=\"card-header\" data-background-color=\"orange\">\n            <div class=\"nav-tabs-navigation\">\n                <div class=\"nav-tabs-wrapper\">\n                    <ul [hidden]=\"showGreeting\" class=\"nav nav-tabs \" style=\"background:black; padding:0px\">\n                        <li [hidden]=\"!voltar\">\n                            <a (click)=\" backClicked()\">\n                                <i class=\"material-icons\" style=\"margin: -1px -6px 0 0;\">arrow_back</i>\n                                <div class=\"ripple-container\"></div>\n                            </a>\n                        </li>\n                        <li [hidden]=\"!criar\">\n                            <a (click)=\"novo()\" [ngClass]=\"modo == 'novo' ? 'cor_modo' : null\">\n                                <i class=\"material-icons\" style=\"margin: -1px -6px 0 0;\">create_new_folder</i>\n                                <div class=\"ripple-container\"></div>\n                            </a>\n                        </li>\n                        <li [hidden]=\"!pesquisar\">\n                            <a>\n                                    <i class=\"material-icons\" style=\"margin: -1px -6px 0 0;\">search</i>\n                                    <div class=\"ripple-container\"></div>\n                            </a>\n                        </li>\n                        <li [hidden]=\"!editar\">\n                            <a (click)=\"edita()\" [ngClass]=\"modo == 'edit' ? 'cor_modo' : null\">\n                                <i class=\"material-icons\" style=\"margin: -1px -6px 0 0;\">mode_edit</i>\n                                <div class=\"ripple-container\"></div>\n                            </a>\n                        </li>\n                        <li [hidden]=\"!apagar\">\n                              <a (click)=\"apagar_func()\">\n                                <i class=\"material-icons\" style=\"margin: -1px -6px 0 0;\">delete</i>\n                                <div class=\"ripple-container\"></div>\n                            </a>\n                        </li>\n                        <li [hidden]=\"!anterior\">\n                              <a (click)=\"anterior_func()\">\n                                <i class=\"material-icons\" style=\"margin: -1px -6px 0 0;\">keyboard_arrow_left</i>\n                                <div class=\"ripple-container\"></div>\n                            </a>\n                        </li>\n                        <li [hidden]=\"!seguinte\">\n                            <a (click)=\"seguinte_func()\">\n                                <i class=\"material-icons\" style=\"margin: -1px -6px 0 0;\">keyboard_arrow_right</i>\n                                <div class=\"ripple-container\"></div>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/cabecalho/controlos/controlos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_menu_sidebar_metadata__ = __webpack_require__("../../../../../src/app/menu/sidebar.metadata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ControlosComponent = (function () {
    function ControlosComponent(route, router, globalVar, location) {
        this.route = route;
        this.router = router;
        this.globalVar = globalVar;
        this.anteriorbt = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.seguintebt = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.apagarbt = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.duplicarbt = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.location = location;
    }
    ControlosComponent.prototype.ngOnInit = function () {
        this.showGreeting = this.globalVar.getmenu_edi();
        this.criar = this.globalVar.getcriar();
        this.anterior = this.globalVar.getanterior();
        this.voltar = this.globalVar.getvoltar();
        this.editar = this.globalVar.getleditar();
        this.apagar = this.globalVar.getapagar();
        this.seguinte = this.globalVar.getseguinte();
        this.voltar = this.globalVar.getvoltar();
        this.pesquisar = this.globalVar.getpesquisar();
        this.duplica = this.globalVar.getduplicar();
        var titlee = this.router.routerState.snapshot.url;
        var pag = "";
        if (titlee.charAt(0) === '/') {
            titlee = titlee.slice(1);
            var titlearray = titlee.split("/");
            titlee = titlearray[0];
            this.currentpage = titlee;
            if (titlearray[1] != null) {
                if (titlearray[1].match("editar")) {
                    this.modo = "edit";
                    pag = " - Editar";
                }
                if (titlearray[1].match("novo")) {
                    this.modo = "novo";
                    pag = " - Novo";
                }
            }
        }
        if (titlee.charAt(0) === '/') {
            titlee = titlee.slice(1);
            var titlearray = titlee.split("/");
            titlee = titlearray[0];
            this.currentpage = titlee;
        }
    };
    ControlosComponent.prototype.getAcesso = function () {
        var acessos = this.router.routerState.snapshot.url;
        if (acessos.charAt(0) === '/' && acessos.slice(1) != "dashboard") {
            acessos = acessos.slice(1);
            var acessosarray = acessos.split("/");
            acessos = acessosarray[0];
            this.showGreeting = false;
        }
        else {
            this.showGreeting = true;
        }
        /*for (var item = 0; item < this.listTitles.length; item++) {
          if (this.listTitles[item].path === acessos) {
    
            if (this.globalVar.getleditar()) {
              this.editar = this.listTitles[item].acesso[0].alterar;
            } else {
              this.editar = false;
            }
            if (this.globalVar.getcriar()) {
              this.criar = this.listTitles[item].acesso[0].alterar;
            } else {
              this.criar = false;
            }
            if (this.globalVar.getapagar()) {
              this.apagar = this.listTitles[item].acesso[0].alterar;
            } else {
              this.apagar = false;
            }
    
          }
        }*/
    };
    ControlosComponent.prototype.novo = function () {
        this.router.navigate([this.currentpage + '/novo']);
    };
    ControlosComponent.prototype.edita = function () {
        var page;
        var sub = this.route
            .queryParams
            .subscribe(function (params) {
            // Defaults to 0 if no query param provided.
            page = params['id'] || 0;
        });
        this.router.navigate([this.currentpage + '/editar'], { queryParams: { id: page } });
    };
    ControlosComponent.prototype.backClicked = function () {
        //this.router.navigate([this.currentpage]);
        this.location.back();
    };
    ControlosComponent.prototype.anterior_func = function () {
        this.anteriorbt.emit();
    };
    ControlosComponent.prototype.seguinte_func = function () {
        this.seguintebt.emit();
    };
    ControlosComponent.prototype.apagar_func = function () {
        this.apagarbt.emit();
    };
    ControlosComponent.prototype.duplicar = function () {
        this.duplicarbt.emit();
    };
    return ControlosComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], ControlosComponent.prototype, "anteriorbt", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], ControlosComponent.prototype, "seguintebt", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], ControlosComponent.prototype, "apagarbt", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _d || Object)
], ControlosComponent.prototype, "duplicarbt", void 0);
ControlosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-controlos',
        template: __webpack_require__("../../../../../src/app/cabecalho/controlos/controlos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/cabecalho/controlos/controlos.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_app_menu_sidebar_metadata__["a" /* AppGlobals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_menu_sidebar_metadata__["a" /* AppGlobals */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _h || Object])
], ControlosComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=controlos.component.js.map

/***/ }),

/***/ "../../../../../src/app/entidades/AB_DIC_BANHO.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AB_DIC_BANHO; });
var AB_DIC_BANHO = (function () {
    function AB_DIC_BANHO() {
    }
    return AB_DIC_BANHO;
}());

//# sourceMappingURL=AB_DIC_BANHO.js.map

/***/ }),

/***/ "../../../../../src/app/entidades/AB_DIC_BANHO_ADITIVO.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AB_DIC_BANHO_ADITIVO; });
var AB_DIC_BANHO_ADITIVO = (function () {
    function AB_DIC_BANHO_ADITIVO() {
    }
    return AB_DIC_BANHO_ADITIVO;
}());

//# sourceMappingURL=AB_DIC_BANHO_ADITIVO.js.map

/***/ }),

/***/ "../../../../../src/app/entidades/AB_DIC_BANHO_COMPONENTE.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AB_DIC_BANHO_COMPONENTE; });
var AB_DIC_BANHO_COMPONENTE = (function () {
    function AB_DIC_BANHO_COMPONENTE() {
    }
    return AB_DIC_BANHO_COMPONENTE;
}());

//# sourceMappingURL=AB_DIC_BANHO_COMPONENTE.js.map

/***/ }),

/***/ "../../../../../src/app/entidades/AB_DIC_COMPONENTE.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AB_DIC_COMPONENTE; });
var AB_DIC_COMPONENTE = (function () {
    function AB_DIC_COMPONENTE() {
    }
    return AB_DIC_COMPONENTE;
}());

//# sourceMappingURL=AB_DIC_COMPONENTE.js.map

/***/ }),

/***/ "../../../../../src/app/entidades/AB_DIC_LINHA.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AB_DIC_LINHA; });
var AB_DIC_LINHA = (function () {
    function AB_DIC_LINHA() {
    }
    return AB_DIC_LINHA;
}());

//# sourceMappingURL=AB_DIC_LINHA.js.map

/***/ }),

/***/ "../../../../../src/app/entidades/AB_DIC_TINA.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AB_DIC_TINA; });
var AB_DIC_TINA = (function () {
    function AB_DIC_TINA() {
    }
    return AB_DIC_TINA;
}());

//# sourceMappingURL=AB_DIC_TINA.js.map

/***/ }),

/***/ "../../../../../src/app/entidades/AB_DIC_TIPO_ADICAO.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AB_DIC_TIPO_ADICAO; });
var AB_DIC_TIPO_ADICAO = (function () {
    function AB_DIC_TIPO_ADICAO() {
    }
    return AB_DIC_TIPO_ADICAO;
}());

//# sourceMappingURL=AB_DIC_TIPO_ADICAO.js.map

/***/ }),

/***/ "../../../../../src/app/entidades/AB_DIC_TIPO_MANUTENCAO.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AB_DIC_TIPO_MANUTENCAO; });
var AB_DIC_TIPO_MANUTENCAO = (function () {
    function AB_DIC_TIPO_MANUTENCAO() {
    }
    return AB_DIC_TIPO_MANUTENCAO;
}());

//# sourceMappingURL=AB_DIC_TIPO_MANUTENCAO.js.map

/***/ }),

/***/ "../../../../../src/app/entidades/AB_DIC_TIPO_OPERACAO.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AB_DIC_TIPO_OPERACAO; });
var AB_DIC_TIPO_OPERACAO = (function () {
    function AB_DIC_TIPO_OPERACAO() {
    }
    return AB_DIC_TIPO_OPERACAO;
}());

//# sourceMappingURL=AB_DIC_TIPO_OPERACAO.js.map

/***/ }),

/***/ "../../../../../src/app/entidades/AB_DIC_TURNO.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AB_DIC_TURNO; });
var AB_DIC_TURNO = (function () {
    function AB_DIC_TURNO() {
    }
    return AB_DIC_TURNO;
}());

//# sourceMappingURL=AB_DIC_TURNO.js.map

/***/ }),

/***/ "../../../../../src/app/entidades/AB_DIC_UNIDADE_MEDIDA.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AB_DIC_UNIDADE_MEDIDA; });
var AB_DIC_UNIDADE_MEDIDA = (function () {
    function AB_DIC_UNIDADE_MEDIDA() {
    }
    return AB_DIC_UNIDADE_MEDIDA;
}());

//# sourceMappingURL=AB_DIC_UNIDADE_MEDIDA.js.map

/***/ }),

/***/ "../../../../../src/app/entidades/AB_DIC_ZONA.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AB_DIC_ZONA; });
var AB_DIC_ZONA = (function () {
    function AB_DIC_ZONA() {
    }
    return AB_DIC_ZONA;
}());

//# sourceMappingURL=AB_DIC_ZONA.js.map

/***/ }),

/***/ "../../../../../src/app/entidades/AB_MOV_ANALISE.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AB_MOV_ANALISE; });
var AB_MOV_ANALISE = (function () {
    function AB_MOV_ANALISE() {
    }
    return AB_MOV_ANALISE;
}());

//# sourceMappingURL=AB_MOV_ANALISE.js.map

/***/ }),

/***/ "../../../../../src/app/entidades/AB_MOV_ANALISE_LINHA.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AB_MOV_ANALISE_LINHA; });
var AB_MOV_ANALISE_LINHA = (function () {
    function AB_MOV_ANALISE_LINHA() {
    }
    return AB_MOV_ANALISE_LINHA;
}());

//# sourceMappingURL=AB_MOV_ANALISE_LINHA.js.map

/***/ }),

/***/ "../../../../../src/app/entidades/AB_MOV_MANUTENCAO.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AB_MOV_MANUTENCAO; });
var AB_MOV_MANUTENCAO = (function () {
    function AB_MOV_MANUTENCAO() {
    }
    return AB_MOV_MANUTENCAO;
}());

//# sourceMappingURL=AB_MOV_MANUTENCAO.js.map

/***/ }),

/***/ "../../../../../src/app/entidades/AB_MOV_MANUTENCAO_CAB.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AB_MOV_MANUTENCAO_CAB; });
var AB_MOV_MANUTENCAO_CAB = (function () {
    function AB_MOV_MANUTENCAO_CAB() {
    }
    return AB_MOV_MANUTENCAO_CAB;
}());

//# sourceMappingURL=AB_MOV_MANUTENCAO_CAB.js.map

/***/ }),

/***/ "../../../../../src/app/entidades/AB_MOV_MANUTENCAO_LINHA.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AB_MOV_MANUTENCAO_LINHA; });
var AB_MOV_MANUTENCAO_LINHA = (function () {
    function AB_MOV_MANUTENCAO_LINHA() {
    }
    return AB_MOV_MANUTENCAO_LINHA;
}());

//# sourceMappingURL=AB_MOV_MANUTENCAO_LINHA.js.map

/***/ }),

/***/ "../../../../../src/app/entidades/AD_MOV_REG_PARAM_OPERACAO.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AD_MOV_REG_PARAM_OPERACAO; });
var AD_MOV_REG_PARAM_OPERACAO = (function () {
    function AD_MOV_REG_PARAM_OPERACAO() {
    }
    return AD_MOV_REG_PARAM_OPERACAO;
}());

//# sourceMappingURL=AD_MOV_REG_PARAM_OPERACAO.js.map

/***/ }),

/***/ "../../../../../src/app/entidades/EMAIL.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EMAIL; });
var EMAIL = (function () {
    function EMAIL() {
    }
    return EMAIL;
}());

//# sourceMappingURL=EMAIL.js.map

/***/ }),

/***/ "../../../../../src/app/entidades/GER_FORNECEDOR.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GER_FORNECEDOR; });
var GER_FORNECEDOR = (function () {
    function GER_FORNECEDOR() {
    }
    return GER_FORNECEDOR;
}());

//# sourceMappingURL=GER_FORNECEDOR.js.map

/***/ }),

/***/ "../../../../../src/app/entidades/GER_UTILIZADORES.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GER_UTILIZADORES; });
var GER_UTILIZADORES = (function () {
    function GER_UTILIZADORES() {
    }
    return GER_UTILIZADORES;
}());

//# sourceMappingURL=GER_UTILIZADORES.js.map

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-side-menu {\r\n  overflow: auto;\r\n  font-family: verdana;\r\n  font-size: 12px;\r\n  font-weight: 200;\r\n  top: 0px;\r\n    height: 100%;\r\n  color: #e1ffff;\r\n}\r\n\r\n.collapse a {\r\n    width: 100%;\r\n    display: inline ;\r\n }\r\n\r\ntd > ul > li{\r\n margin-left: 12px;\r\n}\r\ntd .brand {\r\n  \r\n  line-height: 50px;\r\n  display: block;\r\n  text-align: center;\r\n  font-size: 14px;\r\n}\r\ntd .toggle-btn {\r\n  display: none;\r\n}\r\n\r\ntd li:hover {\r\n  border-left: 1px solid #0b58ff;\r\n  transition: all 1s ease;\r\n}\r\ntd ul,\r\ntd li {\r\n  list-style: none;\r\n  padding: 0px;\r\n  margin: 0px;\r\n  line-height: 35px;\r\n  cursor: pointer;\r\n  /*    \r\n    .collapsed{\r\n       .arrow:before{\r\n                 font-family: FontAwesome;\r\n                 content: \"\\f053\";\r\n                 display: inline-block;\r\n                 padding-left:10px;\r\n                 padding-right: 10px;\r\n                 vertical-align: middle;\r\n                 float:right;\r\n            }\r\n     }\r\n*/\r\n}\r\ntd ul :not(collapsed) .arrow:before,\r\ntd li :not(collapsed) .arrow:before {\r\n  font-family: FontAwesome;\r\n  content: \"\\F078\";\r\n  display: inline-block;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  vertical-align: middle;\r\n  float: right;\r\n}\r\ntd ul .active,\r\ntd  .active {\r\n  border-left: 3px solid #0b58ff;\r\n}\r\n\r\ntd .active > a {\r\n  color: #0b58ff;\r\n}\r\ntd ul .sub-menu li.active,\r\ntd li .sub-menu li.active {\r\n  color: #0b58ff;\r\n}\r\ntd ul .sub-menu li.active a,\r\ntd li .sub-menu li.active a {\r\n  color: #0b58ff;\r\n}\r\ntd ul .sub-menu li,\r\ntd li .sub-menu li {\r\n  \r\n  border: none;\r\n  line-height: 28px;\r\n  border-bottom: 1px solid #dadada;\r\n  margin-left: 18px;\r\n}\r\ntd ul .sub-menu li:hover,\r\ntd li .sub-menu li:hover {\r\n \r\n}\r\ntd ul .sub-menu li:before,\r\ntd li .sub-menu li:before {\r\n  font-family: FontAwesome;\r\n  content: \"\\F105\";\r\n  display: inline-block;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  vertical-align: middle;\r\n}\r\n.sub-menu li:before,\r\n.sub-menu li:before {\r\n  font-family: FontAwesome;\r\n  content: \"\\F105\";\r\n  display: inline-block;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  vertical-align: middle;\r\n}\r\ntd li {\r\n  padding-left: 6px;\r\n;\r\n}\r\ntd li a {\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\ntd li a i {\r\n  padding-left: 10px;\r\n  width: 20px;\r\n  padding-right: 20px;\r\n}\r\n\r\n\r\n@media (max-width: 767px) {\r\n  td {\r\n    position: relative;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n  }\r\n  td .toggle-btn {\r\n    display: block;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 10px;\r\n    z-index: 10 !important;\r\n    padding: 3px;\r\n    background-color: #ffffff;\r\n    color: #000;\r\n    width: 40px;\r\n    text-align: center;\r\n  }\r\n  .brand {\r\n    text-align: left !important;\r\n    font-size: 22px;\r\n    padding-left: 20px;\r\n    line-height: 50px !important;\r\n  }\r\n}\r\n@media (min-width: 767px) {\r\n  td .menu-list .menu-content {\r\n    display: block;\r\n  }\r\n}\r\nbody {\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n    <a [routerLink]=\"['/home']\" class=\"simple-text\">\n        <div class=\"logo-img\">\n            <img src=\"assets/img/logo.png\" />\n        </div>\n    </a>\n</div>\n<div class=\"sidebar-wrapper\">\n    <div class=\"nav-container\">\n        <div style=\"margin-top:20px\">\n            <div class=\"panel-group\" id=\"accordion\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\" [class.active]=\"router.isActive('/manutencao') || router.isActive('/registo') ||router.isActive('/fornecedor') || router.isActive('/tinas')|| router.isActive('/componentes')|| router.isActive('/banhos')\n                    || router.isActive('/operacoes') || router.isActive('/linhas') || router.isActive('/unidades')|| router.isActive('/zonas')|| router.isActive('/turnos') || router.isActive('/adicoes') || router.isActive('/manutencoes')\">\n                        <h4 class=\"panel-title\">\n                            <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\"><span class=\"glyphicon glyphicon-list-alt \">\n                            </span>Análise de Banhos</a>\n                        </h4>\n                    </div>\n                    <div id=\"collapseOne\" class=\"panel-collapse collapse\">\n                        <div class=\"panel-body\">\n                            <table class=\"table\">\n                                <tr>\n                                    <td>\n                                        <li data-toggle=\"collapse\" data-target=\"#movi\" class=\"collapsed\" [class.active]=\"router.isActive('/manutencao') || router.isActive('/registo')\">\n                                            <a (click)=\"linha()\">Movimentos <span class=\"arrow\"></span></a>\n                                        </li>\n                                        <ul class=\"sub-menu collapse\" id=\"movi\">\n                                            <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/registo']\">Análises</a></li>\n                                            <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/manutencao']\" href=\"#\">Manutenções</a></li>\n                                            <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/registopara']\" href=\"#\">Reg. Parâm. de Operação</a></li>\n                                        </ul>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>\n                                        <li data-toggle=\"collapse\" data-target=\"#tabelas\" class=\"collapsed\" [class.active]=\"router.isActive('/fornecedor') || router.isActive('/tinas')|| router.isActive('/componentes')||router.isActive('/banhos')\">\n                                            <a (click)=\"linha()\">Tabelas <span class=\"arrow\"></span></a>\n                                        </li>\n                                        <ul class=\"sub-menu collapse\" id=\"tabelas\">\n                                            <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/tinas']\" href=\"#\">Tinas</a></li>\n                                            <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/componentes']\" href=\"#\">Componentes</a></li>\n                                            <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/banhos']\" href=\"#\">Banhos</a></li>\n                                            <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/utilizadores']\" href=\"#\">Utilizadores</a></li>\n                                            <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/fornecedor']\" href=\"#\">Fornecedores</a></li>\n                                        </ul>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>\n                                        <li data-toggle=\"collapse\" data-target=\"#parametros\" class=\"collapsed\" [class.active]=\"router.isActive('/operacoes') || router.isActive('/linhas') || router.isActive('/unidades')|| router.isActive('/zonas')|| router.isActive('/turnos') || router.isActive('/adicoes') || router.isActive('/manutencoes')\">\n                                            <a>Parâmetros <span class=\"arrow\"></span></a>\n                                        </li>\n                                        <ul class=\"sub-menu collapse\" id=\"parametros\">\n                                            <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/linhas']\" href=\"#\">Linhas</a></li>\n                                            <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/unidades']\" href=\"#\">Unidades de Medida</a></li>\n                                            <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/zonas']\" href=\"#\">Zonas</a></li>\n                                            <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/turnos']\" href=\"#\">Turnos</a></li>\n                                            <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/adicoes']\" href=\"#\">Tipo Adição</a></li>\n                                            <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/manutencoes']\" href=\"#\">Tipo Manutenção</a></li>\n                                            <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/operacoes']\" href=\"#\">Tipo Operação</a></li>\n                                        </ul>\n                                    </td>\n                                </tr>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\" [routerLinkActive]=\"['active']\">\n                        <h4 class=\"panel-title\">\n                            <a [routerLink]=\"['/config']\" href=\"#\"><span class=\"glyphicon glyphicon-cog\">\n                            </span>Configurações</a>\n                        </h4>\n                    </div>\n\n                </div>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\" [class.active]=\"router.isActive('/perfil')\">\n                        <h4 class=\"panel-title\">\n                            <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\"><span class=\"glyphicon glyphicon-user\">\n                            </span>Conta</a>\n                        </h4>\n                    </div>\n                    <div id=\"collapseThree\" class=\"panel-collapse collapse\">\n                        <div class=\"panel-body\">\n                            <table class=\"table\">\n                                <tr>\n                                    <td>\n                                        <li [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/perfil/view']\" href=\"#\">Perfil</a></li>\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <td>\n                                        <li><a (click)=\"logout()\">Sair</a></li>\n                                    </td>\n                                </tr>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<button class=\"btn btn-primary btn-lg\" #dialog data-toggle=\"modal\" [hidden]=\"true\" data-target=\"#myModalSElLinhas\" ></button>\n"

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_menu_sidebar_routes_config__ = __webpack_require__("../../../../../src/app/menu/sidebar-routes.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = (function () {
    function MenuComponent(router, renderer) {
        this.router = router;
        this.renderer = renderer;
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.menuItems = __WEBPACK_IMPORTED_MODULE_1_app_menu_sidebar_routes_config__["a" /* ROUTES */].filter(function (menuItem) { return menuItem; });
    };
    MenuComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['login']);
    };
    MenuComponent.prototype.linha = function () {
        this.simular(this.dialog);
    };
    //simular click para mostrar mensagem
    MenuComponent.prototype.simular = function (element) {
        var event = new MouseEvent('click', { bubbles: true });
        this.renderer.invokeElementMethod(element.nativeElement, 'dispatchEvent', [event]);
    };
    return MenuComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialog'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], MenuComponent.prototype, "dialog", void 0);
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _c || Object])
], MenuComponent);

var _a, _b, _c;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu/sidebar-routes.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
var ROUTES = [
    { path: 'dashboard', title: 'Home', icon: 'dashboard', class: '', acesso: [{ leitura: false, alterar: true, apagar: true }] },
    { path: 'fornecedor', title: 'Fornecedores', icon: 'person', class: '', acesso: [{ leitura: true, alterar: true, apagar: true }] },
    { path: 'tinas', title: 'Tinas', icon: 'content_paste', class: '', acesso: [{ leitura: true, alterar: true, apagar: true }] },
    { path: 'typography', title: 'Banhos', icon: 'library_books', class: '', acesso: [{ leitura: true, alterar: true, apagar: true }] },
    { path: 'icons', title: 'Icons', icon: 'bubble_chart', class: '', acesso: [{ leitura: true, alterar: true, apagar: true }] },
    { path: 'maps', title: 'Aditivos', icon: 'location_on', class: '', acesso: [{ leitura: true, alterar: true, apagar: true }] },
    { path: 'notifications', title: 'Notifications', icon: 'notifications', class: '', acesso: [{ leitura: true, alterar: true, apagar: true }] },
    { path: 'upgrade', title: 'Sair', icon: 'unarchive', class: 'active-pro', acesso: [{ leitura: true, alterar: true, apagar: true }] },
];
//# sourceMappingURL=sidebar-routes.config.js.map

/***/ }),

/***/ "../../../../../src/app/menu/sidebar.metadata.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* unused harmony export acessos */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppGlobals; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var acessos = (function () {
    function acessos() {
    }
    return acessos;
}());

var AppGlobals = (function () {
    function AppGlobals() {
        this.id_linha = 0;
        this.leitura = false;
        this.editar = false;
        this.apagar = false;
        this.criar = false;
        this.voltar = false;
        this.seguinte = false;
        this.anterior = false;
        this.menu_edi = false;
        this.pesquisar = false;
        this.duplicar = false;
    }
    AppGlobals.prototype.setlinha = function (var_linhar) {
        this.id_linha = var_linhar;
    };
    AppGlobals.prototype.getlinha = function () {
        return this.id_linha;
    };
    AppGlobals.prototype.setduplicar = function (var_duplicar) {
        this.duplicar = var_duplicar;
    };
    AppGlobals.prototype.getduplicar = function () {
        return this.duplicar;
    };
    AppGlobals.prototype.setpesquisar = function (var_pesquisar) {
        this.pesquisar = var_pesquisar;
    };
    AppGlobals.prototype.getpesquisar = function () {
        return this.pesquisar;
    };
    AppGlobals.prototype.setmenu_edi = function (var_menu_edi) {
        this.voltar = var_menu_edi;
    };
    AppGlobals.prototype.getmenu_edi = function () {
        return this.menu_edi;
    };
    AppGlobals.prototype.setseguinte = function (var_seguinte) {
        this.seguinte = var_seguinte;
    };
    AppGlobals.prototype.getseguinte = function () {
        return this.seguinte;
    };
    AppGlobals.prototype.setanterior = function (var_anterior) {
        this.anterior = var_anterior;
    };
    AppGlobals.prototype.getanterior = function () {
        return this.anterior;
    };
    AppGlobals.prototype.setvoltar = function (var_voltar) {
        this.voltar = var_voltar;
    };
    AppGlobals.prototype.getvoltar = function () {
        return this.voltar;
    };
    AppGlobals.prototype.setcriar = function (var_criar) {
        this.criar = var_criar;
    };
    AppGlobals.prototype.getcriar = function () {
        return this.criar;
    };
    AppGlobals.prototype.setleitura = function (var_leitura) {
        this.leitura = var_leitura;
    };
    AppGlobals.prototype.getleitura = function () {
        return this.leitura;
    };
    AppGlobals.prototype.seteditar = function (var_alterar) {
        this.editar = var_alterar;
    };
    AppGlobals.prototype.getleditar = function () {
        return this.editar;
    };
    AppGlobals.prototype.setapagar = function (var_apagar) {
        this.apagar = var_apagar;
    };
    AppGlobals.prototype.getapagar = function () {
        return this.apagar;
    };
    return AppGlobals;
}());
AppGlobals = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], AppGlobals);

//# sourceMappingURL=sidebar.metadata.js.map

/***/ }),

/***/ "../../../../../src/app/paginas/banhos/banhos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/paginas/banhos/banhos.component.html":
/***/ (function(module, exports) {

module.exports = "<app-controlos></app-controlos>\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"red\">\n            <h4 class=\"title\">Banhos</h4>\n            <p class=\"category\"></p>\n          </div>\n          <div class=\"card-content table-responsive\">\n\n            <p-dataTable [value]=\"cols\" dataKey=\"id\" [rows]=\"15\" [paginator]=\"true\" [pageLinks]=\"3\" [stacked]=\"stacked\" (onRowDblclick)=\"abrir($event)\"\n              [rowsPerPageOptions]=\"[15,20,30,'todos']\">\n              <p-column [filter]=\"true\" [sortable]=\"true\" styleclass=\"text-danger\" field=\"linha\" header=\"Linha\">\n                <ng-template let-car=\"rowData\" pTemplate=\"body\">\n                  <div [style.background]=\"car['cor']\">\n                    {{car['linha']}}\n                  </div>\n                </ng-template>\n              </p-column>\n              <p-column [sortable]=\"true\" [filter]=\"true\" styleclass=\"text-danger\" field=\"id\" header=\"Código do banho\"></p-column>\n              <p-column [sortable]=\"true\" [filter]=\"true\" styleclass=\"text-danger\" field=\"nome\" header=\"Nome do Banho\"></p-column>\n              <p-column [sortable]=\"true\" [filter]=\"true\" styleclass=\"text-danger\" field=\"tina\" header=\"Tina\"></p-column>\n              <p-column [sortable]=\"true\" styleclass=\"text-danger\" field=\"estado\" header=\"Estado\">\n                <ng-template let-car=\"rowData\" pTemplate=\"body\">\n                  <i *ngIf=\"car.estado == false\" class=\"material-icons\" style=\"color: red;\">close</i>\n                  <i *ngIf=\"car.estado == true\" class=\"material-icons\" style=\"color: green;\">check</i>\n                </ng-template>\n              </p-column>\n              <p-column styleClass=\"col-button\">\n                <ng-template pTemplate=\"header\">\n                </ng-template>\n                <ng-template let-car=\"rowData\" pTemplate=\"body\">\n                  <a style=\"color: black; cursor:pointer;\" title=\"Ver mais\" [routerLink]=\"['/banhos/view']\" [queryParams]=\"{ id: car.id }\">\n                  <i class=\"material-icons\">search</i>\n                  </a>\n                </ng-template>\n              </p-column>\n            </p-dataTable>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/paginas/banhos/banhos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_menu_sidebar_metadata__ = __webpack_require__("../../../../../src/app/menu/sidebar.metadata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_servicos_ab_dic_banho_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-banho.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BanhosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BanhosComponent = (function () {
    function BanhosComponent(router, globalVar, ABDICBANHOService) {
        this.router = router;
        this.globalVar = globalVar;
        this.ABDICBANHOService = ABDICBANHOService;
    }
    BanhosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cols = [];
        this.globalVar.setvoltar(false);
        this.globalVar.seteditar(false);
        this.globalVar.setapagar(false);
        this.globalVar.setseguinte(false);
        this.globalVar.setanterior(false);
        this.globalVar.setcriar(true);
        this.globalVar.setpesquisar(true);
        this.globalVar.setduplicar(false);
        this.ABDICBANHOService.getAllLINHA().subscribe(function (response) {
            for (var x in response) {
                _this.cols.push({ id: response[x][0].id_BANHO, linha: response[x][0].id_LINHA, nome: response[x][0].nome_BANHO, tina: response[x][2].cod_TINA, estado: response[x][0].estado, cor: response[x][1].cor });
            }
            _this.cols = _this.cols.slice();
        }, function (error) { return console.log(error); });
    };
    BanhosComponent.prototype.addNewEntry = function (event) {
        alert();
    };
    //clicar 2 vezes na tabela abre linha
    BanhosComponent.prototype.abrir = function (event) {
        this.router.navigate(['banhos/view'], { queryParams: { id: event.data.id } });
    };
    return BanhosComponent;
}());
BanhosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-banhos',
        template: __webpack_require__("../../../../../src/app/paginas/banhos/banhos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/paginas/banhos/banhos.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_menu_sidebar_metadata__["a" /* AppGlobals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_menu_sidebar_metadata__["a" /* AppGlobals */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_servicos_ab_dic_banho_service__["a" /* ABDICBANHOService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_servicos_ab_dic_banho_service__["a" /* ABDICBANHOService */]) === "function" && _c || Object])
], BanhosComponent);

var _a, _b, _c;
//# sourceMappingURL=banhos.component.js.map

/***/ }),

/***/ "../../../../../src/app/paginas/banhos/banhosform/banhosform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".material-switch > input[type=\"checkbox\"] {\r\n    display: none;   \r\n}\r\n\r\n.material-switch > label {\r\n    cursor: pointer;\r\n    height: 0px;\r\n    position: relative; \r\n    width: 40px;  \r\n}\r\n\r\n.material-switch > label::before {\r\n    background: rgb(0, 0, 0);\r\n    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.5);\r\n    border-radius: 8px;\r\n    content: '';\r\n    height: 16px;\r\n    margin-top: -8px;\r\n    position:absolute;\r\n    opacity: 0.3;\r\n    transition: all 0.4s ease-in-out;\r\n    width: 40px;\r\n}\r\n.material-switch > label::after {\r\n    background: rgb(255, 255, 255);\r\n    border-radius: 16px;\r\n    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);\r\n    content: '';\r\n    height: 24px;\r\n    left: -4px;\r\n    margin-top: -8px;\r\n    position: absolute;\r\n    top: -4px;\r\n    transition: all 0.3s ease-in-out;\r\n    width: 24px;\r\n}\r\n.material-switch > input[type=\"checkbox\"]:checked + label::before {\r\n    background: inherit;\r\n    opacity: 0.5;\r\n}\r\n.material-switch > input[type=\"checkbox\"]:checked + label::after {\r\n    background: inherit;\r\n    left: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/paginas/banhos/banhosform/banhosform.component.html":
/***/ (function(module, exports) {

module.exports = "<app-controlos (anteriorbt)=\"anterior()\" (seguintebt)=\"seguinte()\" (apagarbt)=\"apagar()\"></app-controlos>\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"red\">\n            <h4 class=\"title\">Ficha de Banho</h4>\n            <p class=\"category\">Complete os Dados</p>\n          </div>\n          <div class=\"card-content\">\n            <form id=\"formBanho\" (ngSubmit)=\"gravar()\" ngNativeValidate>\n              <div class=\"row\">\n                <div class=\"col-md-2\">\n                  <div [ngClass]=\"codigo == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating \">\n                    <label class=\"control-label\">Código Banho</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"codigo\" [ngModelOptions]=\"{standalone: true}\" disabled>\n                  </div>\n                </div>\n                <div class=\"col-md-2\">\n                  <div [ngClass]=\"data == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating\">\n                    <label class=\"control-label\">Data Última Alteração</label>\n                    <input type=\"text\" class=\"form-control\" value=\"{{data}}\" disabled>\n                  </div>\n                </div>\n                <div class=\"col-md-2\">\n                  <div class=\" form-black label-floating\" style=\"padding-top: 11px;\">\n                    <label class=\"pull-left\" style=\"font-size: 14px; color:black;\">Estado (Ativo?)</label>\n                    <div class=\"material-switch pull-left\">\n                      <input id=\"someSwitchOptionSuccess\" type=\"checkbox\" [(ngModel)]=\"estado\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"!modoedicao\">\n                      <label for=\"someSwitchOptionSuccess\" class=\"label-success\" style=\"margin-left: 24px;\"></label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group form-black label-floating\">\n                    <label style=\"font-size: 14px;\">Linha</label>\n                    <p-dropdown [style.background]=\"cor_linha\" [options]=\"linhas\" [style]=\"{'width':'150px'}\" [(ngModel)]=\"linha\" [ngModelOptions]=\"{standalone: true}\"\n                      [disabled]=\"!modoedicao\" [required]=\"true\"></p-dropdown>\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group form-black label-floating\">\n                    <label style=\"font-size: 14px;\">Zona</label>\n                    <p-dropdown [options]=\"zonas\" [style]=\"{'width':'150px'}\" [(ngModel)]=\"zona\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"!modoedicao\"></p-dropdown>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <div [ngClass]=\"nome == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating\">\n                    <label class=\"control-label\">Nome Banho</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"nome\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"!modoedicao\"\n                      required>\n                  </div>\n                </div>\n                <div class=\"col-md-7\">\n                  <div class=\"form-group form-black label-floating\">\n                    <label style=\"font-size: 14px;\">Nº da Tina</label>\n                    <p-dropdown [filter]=\"true\" [options]=\"tinas\" [style]=\"{'width':'150px'}\" [(ngModel)]=\"tinas_valor\" [ngModelOptions]=\"{standalone: true}\"\n                      (onChange)=\"num_tina($event)\" [disabled]=\"!modoedicao\" [required]=\"true\"></p-dropdown>\n                    <span style=\"font-size: 12px; padding-right: 20px;\"><b>CAP(LT):</b> {{capacidade_tina}}</span>\n                    <span style=\"font-size: 12px;\"><b>OBS. TINA:</b> {{obs_tina}}</span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <div [ngClass]=\"obs == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating\">\n                      <label class=\"control-label\">Observações</label>\n                      <textarea class=\"form-control\" rows=\"1\" [(ngModel)]=\"obs\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"!modoedicao\"></textarea>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"col-md-12\" style=\"text-align: center;\">\n                    <p-dropdown  [disabled]=\"novo\" (onChange)=\"atualizarcomp($event)\" [(ngModel)]=\"estado_comp\" [ngModelOptions]=\"{standalone: true}\"\n                      [options]=\"estados\" [autoWidth]=\"false\" [style]=\"{'width':'15%','float': 'left'}\" [required]=\"true\"></p-dropdown>\n                    <h3> Componentes do Banho </h3>\n                  </div>\n                  <p-dataTable [value]=\"banhos_comp\" class=\"componentes\">\n                    <p-column field=\"id_componente\" header=\"COMPONENTES\">\n                      <ng-template pTemplate=\"body\" let-col let-row=\"rowData \">\n                        <p-dropdown [filter]=\"true\" (onChange)=\"atualizardados(row['pos'],$event)\" [(ngModel)]=\"row[col.field]\" [ngModelOptions]=\"{standalone: true}\"\n                          [options]=\"componentes\" [autoWidth]=\"false\" [style]=\"{'width':'100%'}\" [hidden]=\"!modoedicao\" [required]=\"true\"></p-dropdown>\n                        <label class=\"ng-tns-c3-11 ui-dropdown-label ui-inputtext ui-corner-all\" [hidden]=\"modoedicao\">{{row['nome_comp']}}</label>\n                      </ng-template>\n                    </p-column>\n                    <p-column field=\"qtd\" header=\"QTD.\" [style]=\"{'width':'50px'}\">\n                      <ng-template pTemplate=\"body\" let-col let-row=\"rowData \">\n                        <input type=\"text\" style=\"height: 100%; text-align: center;\" class=\"form-control\" [(ngModel)]=\"row['qtd']\" [ngModelOptions]=\"{standalone: true}\"\n                          [disabled]=\"!modoedicao\">\n                      </ng-template>\n                    </p-column>\n                    <p-column field=\"id_unidade\" header=\"UNID.\" [style]=\"{'width':'60px'}\">\n                      <ng-template pTemplate=\"body\" let-col let-row=\"rowData \">\n                        <p-dropdown [filter]=\"true\" [(ngModel)]=\"row['id_unidade']\" [ngModelOptions]=\"{standalone: true}\" [options]=\"medidas\" [autoWidth]=\"false\"\n                          [style]=\"{'width':'100%'}\" [hidden]=\"!modoedicao\"></p-dropdown>\n                        <label class=\"ng-tns-c3-11 ui-dropdown-label ui-inputtext ui-corner-all\" [hidden]=\"modoedicao\">{{row['nome_unidade']}}</label>\n                      </ng-template>\n                    </p-column>\n                    <p-column field=\"id_FORNECEDOR\" header=\"FORNECEDOR\" [style]=\"{'width':'150px'}\">\n                      <ng-template pTemplate=\"body\" let-col let-row=\"rowData \">\n                        <p-dropdown [filter]=\"true\" [(ngModel)]=\"row[col.field]\" [ngModelOptions]=\"{standalone: true}\" [options]=\"fornecedores\" [autoWidth]=\"false\"\n                          [style]=\"{'width':'100%','height': '36px'}\" [hidden]=\"!modoedicao\"></p-dropdown>\n                        <label class=\"ng-tns-c3-11 ui-dropdown-label ui-corner-all\" [hidden]=\"modoedicao\">{{row['nome_FORNECEDOR']}}</label>\n                      </ng-template>\n                    </p-column>\n                    <p-column field=\"data_ini\" header=\"DATA ÍNICIO\" [style]=\"{'width':'154px'}\">\n                      <ng-template pTemplate=\"body\" let-col2 let-row2=\"rowData \">\n                        <p-calendar [style]=\"{'width':'120px','float': 'left'}\" (onInput)=\"verificadatas(row2[col2.field],row2['pos'])\" (onSelect)=\"verificadatas(row2[col2.field],row2['pos'])\"\n                          dateFormat=\"yy-mm-dd\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"2000:2030\" [(ngModel)]=\"row2['data_ini']\"\n                          [ngModelOptions]=\"{standalone: true}\" [showIcon]=\"true\" [hidden]=\"!modoedicao\"></p-calendar>\n                        <label class=\"ng-tns-c3-11 ui-dropdown-label ui-inputtext ui-corner-all\" [hidden]=\"modoedicao\">\n                          {{row2[col2.field] | date: 'yyyy-MM-dd'}}\n                          </label>\n                      </ng-template>\n                    </p-column>\n                    <p-column field=\"data_fim\" header=\"DATA FIM\" [style]=\"{'width':'154px'}\">\n                      <ng-template pTemplate=\"body\" let-col3 let-row3=\"rowData \">\n                        <p-calendar [style]=\"{'width':'120px','float': 'left'}\" (onInput)=\"verificadatafim(row3[col3.field],row3['data_ini'])\" (onSelect)=\"verificadatafim(row3[col3.field],row3['data_ini'])\"\n                          dateFormat=\"yy-mm-dd\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"2000:2030\" [(ngModel)]=\"row3['data_fim']\"\n                          [ngModelOptions]=\"{standalone: true}\" [showIcon]=\"true\" [hidden]=\"!modoedicao\"></p-calendar>\n                        <label class=\"ng-tns-c3-11 ui-dropdown-label ui-inputtext ui-corner-all\" [hidden]=\"modoedicao\">{{row3[col3.field] | date: 'yyyy-MM-dd'}}</label>\n                      </ng-template>\n                    </p-column>\n                    <p-column field=\"limite_VERDE_INF\" header=\"LIMI. INF\" [style]=\"{'background':'#c5e0b4','width':'81px'}\">\n                      <ng-template pTemplate=\"body\" let-col2 let-row2=\"rowData \">\n                        <input style=\"height: 100%;\" type=\"text\" class=\"form-control\" [(ngModel)]=\"row2['limite_VERDE_INF']\" [ngModelOptions]=\"{standalone: true}\"\n                          [disabled]=\"!modoedicao\">\n                      </ng-template>\n                    </p-column>\n                    <p-column field=\"limite_VERDE_SUP\" header=\"LIMI. SUP\" [style]=\"{'background':'#c5e0b4','width':'85px'}\">\n                      <ng-template pTemplate=\"body\" let-col2 let-row2=\"rowData \">\n                        <input style=\"height: 100%; text-align: center;\" type=\"text\" class=\"form-control\" [(ngModel)]=\"row2['limite_VERDE_SUP']\" [ngModelOptions]=\"{standalone: true}\"\n                          [disabled]=\"!modoedicao\">\n                      </ng-template>\n                    </p-column>\n                    <p-column field=\"limite_AMARELO_INF\" header=\"LIMI. INF\" [style]=\"{'background':'#ffe699','width':'81px'}\">\n                      <ng-template pTemplate=\"body\" let-col2 let-row2=\"rowData \">\n                        <input style=\"height: 100%; text-align: center;\" type=\"text\" class=\"form-control\" [(ngModel)]=\"row2['limite_AMARELO_INF']\" [ngModelOptions]=\"{standalone: true}\"\n                          [disabled]=\"!modoedicao\">\n                      </ng-template>\n                    </p-column>\n                    <p-column field=\"limite_AMARELO_SUP\" header=\"LIMI. SUP\" [style]=\"{'background':'#ffe699','width':'85px'}\">\n                      <ng-template pTemplate=\"body\" let-col2 let-row2=\"rowData \">\n                        <input style=\"height: 100%; text-align: center;\" type=\"text\" class=\"form-control\" [(ngModel)]=\"row2['limite_AMARELO_SUP']\" [ngModelOptions]=\"{standalone: true}\"\n                          [disabled]=\"!modoedicao\">\n                      </ng-template>\n                    </p-column>\n                    <p-column field=\"obs\" header=\"OBS\">\n                      <ng-template pTemplate=\"body\" let-col let-row=\"rowData \">\n                        <input style=\"height: 100%; text-align: center;\" type=\"text\" class=\"form-control\" [(ngModel)]=\"row['obs']\" [ngModelOptions]=\"{standalone: true}\"\n                          [disabled]=\"!modoedicao\">\n                      </ng-template>\n                    </p-column>\n                    <p-column styleClass=\"col-button\" [style]=\"{'width':'30px'}\">\n                      <ng-template pTemplate=\"header\">\n                      </ng-template>\n                      <ng-template let-car=\"rowData\" pTemplate=\"body\">\n                        <a (click)=\"apagarlinha(car['pos'],car['id_banho_comp'],car['id_banho'])\" [ngClass]=\"!modoedicao ? 'not-active' : null\" style=\"color: black; cursor:pointer;\"\n                          title=\"Eliminar\">\n                          <i class=\"material-icons\">delete</i>\n                        </a>\n                      </ng-template>\n                    </p-column>\n                    <p-footer>\n                      <a (click)=\"novalinha()\" [ngClass]=\"!modoedicao ? 'not-active' : null\" style=\"color: black; cursor:pointer; margin-left:10px;\"\n                        title=\"Adicionar nova linha\">\n                         <i class=\"material-icons\">playlist_add</i>\n                        </a>\n                    </p-footer>\n                  </p-dataTable>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"col-md-12\" style=\"text-align: center;\">\n                    <h3> Aditivos do Banho </h3>\n                  </div>\n                  <p-dataTable [value]=\"banhos_aditivos\">\n                    <p-column field=\"ID_ADITIVO\" header=\"ADITIVOS\">\n                      <ng-template pTemplate=\"body\" let-col let-row=\"rowData \">\n                        <p-dropdown (onChange)=\"preenche_unidades(row['pos'],row['ID_ADITIVO'])\" [filter]=\"true\" [(ngModel)]=\"row[col.field]\" [ngModelOptions]=\"{standalone: true}\"\n                          [options]=\"aditivos\" [autoWidth]=\"false\" [style]=\"{'width':'100%'}\" [hidden]=\"!modoedicao\"></p-dropdown>\n                        <label class=\"ng-tns-c3-11 ui-dropdown-label ui-inputtext ui-corner-all\" [hidden]=\"modoedicao\">{{row['nome_aditivo']}}</label>\n                      </ng-template>\n                    </p-column>\n                    <p-column field=\"ID_UNIDADE1\" header=\"UNIDADE 1\">\n                      <ng-template pTemplate=\"body\" let-col let-row=\"rowData \">\n                        <p-dropdown [filter]=\"true\" [(ngModel)]=\"row[col.field]\" [ngModelOptions]=\"{standalone: true}\" [options]=\"medidas\" [autoWidth]=\"false\"\n                          [style]=\"{'width':'100%'}\" [hidden]=\"!modoedicao\"></p-dropdown>\n                        <label class=\"ng-tns-c3-11 ui-dropdown-label ui-inputtext ui-corner-all\" [hidden]=\"modoedicao\">{{row['medida1']}}</label>\n                      </ng-template>\n                    </p-column>\n                    <p-column field=\"ID_UNIDADE2\" header=\"UNIDADE 2\">\n                      <ng-template pTemplate=\"body\" let-col let-row=\"rowData \">\n                        <p-dropdown [filter]=\"true\" [(ngModel)]=\"row[col.field]\" [ngModelOptions]=\"{standalone: true}\" [options]=\"medidas\" [autoWidth]=\"false\"\n                          [style]=\"{'width':'100%'}\" [hidden]=\"!modoedicao\"></p-dropdown>\n                        <label class=\"ng-tns-c3-11 ui-dropdown-label ui-inputtext ui-corner-all\" [hidden]=\"modoedicao\">{{row['medida2']}}</label>\n                      </ng-template>\n                    </p-column>\n                    <p-column styleClass=\"col-button\">\n                      <ng-template pTemplate=\"header\">\n                      </ng-template>\n                      <ng-template let-car=\"rowData\" pTemplate=\"body\">\n                        <a (click)=\"apagarlinha_aditivo(car['pos'],car['ID_BANHO_ADITIVO'],car['id_banho'])\" [ngClass]=\"!modoedicao ? 'not-active' : null\"\n                          style=\"color: black; cursor:pointer;\" title=\"Eliminar\">\n                          <i class=\"material-icons\">delete</i>\n                        </a>\n                      </ng-template>\n                    </p-column>\n                    <p-footer>\n                      <a (click)=\"novalinha_aditivo()\" [ngClass]=\"!modoedicao ? 'not-active' : null\" style=\"color: black; cursor:pointer; margin-left:10px;\"\n                        title=\"Adicionar nova linha\">\n                         <i class=\"material-icons\">playlist_add</i>\n                        </a>\n                    </p-footer>\n                  </p-dataTable>\n                </div>\n              </div>\n              <button type=\"reset\" (click)=\"backview()\" class=\"btn btn-danger pull-right\" [hidden]=\"!modoedicao\">Cancelar</button>\n              <button type=\"submit\" class=\"btn btn-success pull-right\" [hidden]=\"!modoedicao\">Gravar</button>\n              <div class=\"clearfix\"></div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<button class=\"btn btn-danger btn-block\" #inputnotifi [hidden]=\"true\" onclick=\"demo.showNotification('top','right','Inseriu com Sucesso!',2)\"></button>\n<button class=\"btn btn-danger btn-block\" #inputgravou [hidden]=\"true\" onclick=\"demo.showNotification('top','right','Alterado com Sucesso!',2)\"></button>\n<button class=\"btn btn-danger btn-block\" #inputapagar [hidden]=\"true\" onclick=\"demo.showNotification('top','right','Apagado com Sucesso!',2)\"></button>\n<button class=\"btn btn-danger btn-block\" #inputerro [hidden]=\"true\" onclick=\"demo.showNotification('top','right','ERRO!! Registo não foi Gravado!',4)\"></button>\n\n<button #dialog data-toggle=\"modal\" [hidden]=\"true\" data-target=\"#dialog_novo_componente_banho\"></button>\n<button #dialogavisodata data-toggle=\"modal\" [hidden]=\"true\" data-target=\"#aviso_datas\"></button>\n<button #dialogavisodatafim data-toggle=\"modal\" [hidden]=\"true\" data-target=\"#aviso_datafim\"></button>"

/***/ }),

/***/ "../../../../../src/app/paginas/banhos/banhosform/banhosform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_servicos_ab_dic_banho_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-banho.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_menu_sidebar_metadata__ = __webpack_require__("../../../../../src/app/menu/sidebar.metadata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_entidades_AB_DIC_BANHO__ = __webpack_require__("../../../../../src/app/entidades/AB_DIC_BANHO.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_servicos_ab_dic_tina_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-tina.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_servicos_ab_dic_banho_componente_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-banho-componente.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_servicos_ab_dic_componente_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-componente.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_servicos_ab_dic_linha_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-linha.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_entidades_AB_DIC_BANHO_COMPONENTE__ = __webpack_require__("../../../../../src/app/entidades/AB_DIC_BANHO_COMPONENTE.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_servicos_ab_unidade_medida_service__ = __webpack_require__("../../../../../src/app/servicos/ab-unidade-medida.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_servicos_ab_dic_banho_aditivo_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-banho-aditivo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_entidades_AB_DIC_BANHO_ADITIVO__ = __webpack_require__("../../../../../src/app/entidades/AB_DIC_BANHO_ADITIVO.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_servicos_ab_dic_zona_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-zona.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_app_servicos_ger_fornecedor_service__ = __webpack_require__("../../../../../src/app/servicos/ger-fornecedor.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BanhosformComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var BanhosformComponent = (function () {
    function BanhosformComponent(GERFORNECEDORService, ABDICZONAService, ABDICBANHOADITIVOService, ABUNIDADADEMEDIDAService, ABDICLINHAService, ABDICCOMPONENTEService, ABDICBANHOCOMPONENTEService, ABDICTINAService, confirmationService, router, ABDICBANHOService, renderer, route, globalVar, location) {
        this.GERFORNECEDORService = GERFORNECEDORService;
        this.ABDICZONAService = ABDICZONAService;
        this.ABDICBANHOADITIVOService = ABDICBANHOADITIVOService;
        this.ABUNIDADADEMEDIDAService = ABUNIDADADEMEDIDAService;
        this.ABDICLINHAService = ABDICLINHAService;
        this.ABDICCOMPONENTEService = ABDICCOMPONENTEService;
        this.ABDICBANHOCOMPONENTEService = ABDICBANHOCOMPONENTEService;
        this.ABDICTINAService = ABDICTINAService;
        this.confirmationService = confirmationService;
        this.router = router;
        this.ABDICBANHOService = ABDICBANHOService;
        this.renderer = renderer;
        this.route = route;
        this.globalVar = globalVar;
        this.location = location;
        this.estado_comp = 1;
        this.pos2 = 0;
        this.tinas_valor = 0;
        this.nome = "";
        this.estado = false;
        this.banhos_comp = [];
        this.banhos_aditivos = [];
        this.tinas = [];
        this.banho = [];
        this.modoedicao = false;
        this.novo = false;
        this.data = null;
        this.obs = "";
        this.pos = 0;
        this.display = true;
    }
    BanhosformComponent.prototype.ngOnInit = function () {
        //this.banhos_comp = [{ pos: 0, id_BANHO_COMP: null, id_componente: null, data_ini: null, data_fim: null }];
        var _this = this;
        this.globalVar.setapagar(true);
        this.globalVar.seteditar(true);
        this.globalVar.setvoltar(true);
        this.globalVar.seteditar(true);
        this.globalVar.setseguinte(true);
        this.globalVar.setanterior(true);
        this.globalVar.setpesquisar(true);
        this.user = JSON.parse(localStorage.getItem('userapp'))["id"];
        var url = this.router.routerState.snapshot.url;
        url = url.slice(1);
        var urlarray = url.split("/");
        if (urlarray[1].match("editar") || urlarray[1].match("view")) {
            this.novo = false;
            this.codigo = 0;
            this.data = 0;
            var id;
            var sub = this.route
                .queryParams
                .subscribe(function (params) {
                id = params['id'] || 0;
            });
            //preenche array para navegar nos banhoes 
            this.ABDICBANHOService.getAll().subscribe(function (response) {
                for (var x in response) {
                    _this.banho.push(response[x].id_BANHO);
                }
                _this.i = _this.banho.indexOf(+id);
                _this.inicia(_this.banho[_this.i]);
                //this.banhosComp(this.banho[this.i]);
                //this.banhosaditivos(this.banho[this.i]);
            }, function (error) { console.log(error); });
        }
        //preenche combobox tinas
        this.ABDICTINAService.getAll().subscribe(function (response) {
            _this.tinas = [];
            _this.tinas.push({ label: 'Seleccione Tina', value: "" });
            for (var x in response) {
                _this.tinas.push({ label: response[x].cod_TINA, value: { id: response[x].id_TINA, capacidade: response[x].capacidade, cod: response[x].cod_TINA, obs: response[x].obs } });
            }
            _this.tinas = _this.tinas.slice();
        }, function (error) { return console.log(error); });
        //preenche combobox linhas
        this.ABDICLINHAService.getAll().subscribe(function (response) {
            _this.linhas = [];
            _this.linhas.push({ label: 'Seleccione Linha', value: "" });
            for (var x in response) {
                _this.linhas.push({ label: response[x].nome_LINHA, value: response[x].id_LINHA });
            }
            _this.linha = _this.globalVar.getlinha();
            _this.linhas = _this.linhas.slice();
        }, function (error) { return console.log(error); });
        //preenche combobox componentes
        this.ABDICCOMPONENTEService.getAll("C").subscribe(function (response) {
            _this.componentes = [];
            _this.componentes.push({ label: 'Seleccione Componente', value: "" });
            for (var x in response) {
                _this.componentes.push({ label: response[x].nome_COMPONENTE, value: { id: response[x].id_COMPONENTE, id_unidade: response[x].id_UNIDADE_COMPONENTE, id_FORNECEDOR: response[x].id_FORNECEDOR } });
            }
            _this.componentes = _this.componentes.slice();
        }, function (error) { return console.log(error); });
        //preenche combobox aditivos
        this.ABDICCOMPONENTEService.getAll("A").subscribe(function (response) {
            _this.aditivos = [];
            _this.aditivos.push({ label: 'Seleccione Aditivo', value: "" });
            for (var x in response) {
                _this.aditivos.push({ label: response[x].nome_COMPONENTE, value: response[x].id_COMPONENTE });
            }
            _this.aditivos = _this.aditivos.slice();
        }, function (error) { return console.log(error); });
        //preenche combobox zonas
        this.zonas = [];
        this.zonas.push({ label: 'Seleccione Zona', value: "" });
        this.ABDICZONAService.getAll().subscribe(function (response) {
            for (var x in response) {
                _this.zonas.push({ value: response[x].id_ZONA, label: response[x].nome_ZONA });
            }
            _this.zonas = _this.zonas.slice();
        }, function (error) { return console.log(error); });
        //preenche combobox estados
        this.estados = [{ label: "Ativos", value: 1 }, { label: "Inativos", value: 2 }, { label: "Todos", value: 3 }];
        //preenche combobox UNIDADES MEDIDAS
        this.ABUNIDADADEMEDIDAService.getAll().subscribe(function (response) {
            _this.medidas = [];
            _this.medidas.push({ label: 'Seleccione Medida', value: "" });
            for (var x in response) {
                _this.medidas.push({ label: response[x].medida, value: response[x].id_MEDIDA });
            }
            _this.medidas = _this.medidas.slice();
        }, function (error) { return console.log(error); });
        //preenche combobox fornecedores
        this.GERFORNECEDORService.getAll().subscribe(function (response) {
            _this.fornecedores = [];
            _this.fornecedores.push({ label: 'Sel. Fornecedor', value: "" });
            for (var x in response) {
                _this.fornecedores.push({ label: response[x].nome_FORNECEDOR, value: response[x].id_FORNECEDOR });
            }
            _this.fornecedores = _this.fornecedores.slice();
        }, function (error) { return console.log(error); });
        if (urlarray[1] != null) {
            if (urlarray[1].match("editar")) {
                this.globalVar.setseguinte(false);
                this.globalVar.setanterior(false);
                this.globalVar.setapagar(false);
                this.globalVar.setcriar(true);
                this.modoedicao = true;
            }
            else if (urlarray[1].match("novo")) {
                this.globalVar.setseguinte(false);
                this.globalVar.setanterior(false);
                this.globalVar.setapagar(false);
                this.globalVar.setcriar(false);
                this.novo = true;
                this.globalVar.seteditar(false);
                this.modoedicao = true;
                var dirtyFormID = 'formBanho';
                var resetForm = document.getElementById(dirtyFormID);
                resetForm.reset();
            }
            else if (urlarray[1].match("view")) {
                this.globalVar.setcriar(true);
            }
        }
    };
    //ao alterar combobox aditivos preenche as unidades por defeito
    BanhosformComponent.prototype.preenche_unidades = function (pos, id) {
        var _this = this;
        this.ABDICCOMPONENTEService.getbyID(id).subscribe(function (response) {
            for (var x in response) {
                _this.banhos_aditivos.find(function (item) { return item.pos == pos; }).ID_UNIDADE1 = response[x].id_UNIDADE_ADITIVO;
                _this.banhos_aditivos.find(function (item) { return item.pos == pos; }).ID_UNIDADE2 = response[x].id_UNIDADE_ADITIVO;
            }
            _this.banhos_aditivos = _this.banhos_aditivos.slice();
        }, function (error) { return console.log(error); });
    };
    BanhosformComponent.prototype.banhosComp = function (id) {
        //preenche tabela banho Componente
        var _this = this;
        this.ABDICBANHOCOMPONENTEService.getbyid_banho(id).subscribe(function (response) {
            var count = Object.keys(response).length;
            //se existir banho Componente
            if (count > 0) {
                _this.banhos_comp = [];
                for (var x in response) {
                    var data_i = null;
                    var data_f = null;
                    if (response[x][0].data_INICIO != null)
                        data_i = new Date(response[x][0].data_INICIO);
                    if (response[x][0].data_FIM != null)
                        data_f = new Date(response[x][0].data_FIM);
                    var id_comp = null;
                    if (_this.componentes.find(function (item) { return item.value.id === response[x][0].id_COMPONENTE; }))
                        id_comp = _this.componentes.find(function (item) { return item.value.id === response[x][0].id_COMPONENTE; }).value;
                    if (_this.estado_comp == 1 && data_f == null) {
                        _this.banhos_comp.push({
                            pos: _this.pos, id_banho_comp: response[x][0].id_BANHO_COMP, id_banho: response[x][0].id_BANHO, nome_comp: response[x][1].nome_COMPONENTE, id_componente: id_comp, data_ini: data_i, data_fim: data_f,
                            id_FORNECEDOR: response[x][0].id_FORNECEDOR, limite_AMARELO_INF: response[x][0].limite_AMARELO_INF, limite_AMARELO_SUP: response[x][0].limite_AMARELO_SUP, id_unidade: response[x][0].id_UNIDADE_COMPONENTE, nome_unidade: response[x][3],
                            limite_VERDE_INF: response[x][0].limite_VERDE_INF, limite_VERDE_SUP: response[x][0].limite_VERDE_SUP, nome_FORNECEDOR: response[x][2], obs: response[x][0].obs, qtd: response[x][0].quantidade
                        });
                    }
                    else if (_this.estado_comp == 2 && data_f != null) {
                        _this.banhos_comp.push({
                            pos: _this.pos, id_banho_comp: response[x][0].id_BANHO_COMP, id_banho: response[x][0].id_BANHO, nome_comp: response[x][1].nome_COMPONENTE, id_componente: id_comp, data_ini: data_i, data_fim: data_f,
                            id_FORNECEDOR: response[x][0].id_FORNECEDOR, limite_AMARELO_INF: response[x][0].limite_AMARELO_INF, limite_AMARELO_SUP: response[x][0].limite_AMARELO_SUP, id_unidade: response[x][0].id_UNIDADE_COMPONENTE, nome_unidade: response[x][3],
                            limite_VERDE_INF: response[x][0].limite_VERDE_INF, limite_VERDE_SUP: response[x][0].limite_VERDE_SUP, nome_FORNECEDOR: response[x][2], obs: response[x][0].obs, qtd: response[x][0].quantidade
                        });
                    }
                    else if (_this.estado_comp == 3) {
                        _this.banhos_comp.push({
                            pos: _this.pos, id_banho_comp: response[x][0].id_BANHO_COMP, id_banho: response[x][0].id_BANHO, nome_comp: response[x][1].nome_COMPONENTE, id_componente: id_comp, data_ini: data_i, data_fim: data_f,
                            id_FORNECEDOR: response[x][0].id_FORNECEDOR, limite_AMARELO_INF: response[x][0].limite_AMARELO_INF, limite_AMARELO_SUP: response[x][0].limite_AMARELO_SUP, id_unidade: response[x][0].id_UNIDADE_COMPONENTE, nome_unidade: response[x][3],
                            limite_VERDE_INF: response[x][0].limite_VERDE_INF, limite_VERDE_SUP: response[x][0].limite_VERDE_SUP, nome_FORNECEDOR: response[x][2], obs: response[x][0].obs, qtd: response[x][0].quantidade
                        });
                    }
                    _this.banhos_comp = _this.banhos_comp.slice();
                    _this.pos++;
                }
            }
        }, function (error) { return console.log(error); });
    };
    BanhosformComponent.prototype.banhosaditivos = function (id) {
        //preenche tabela banho aditivos
        var _this = this;
        this.ABDICBANHOADITIVOService.getbyID_banho(id).subscribe(function (response) {
            var count = Object.keys(response).length;
            //se existir banho Componente
            if (count > 0) {
                _this.banhos_aditivos = [];
                for (var x in response) {
                    _this.banhos_aditivos.push({ id_banho: response[x][0].id_BANHO, pos: _this.pos2, ID_BANHO_ADITIVO: response[x][0].id_BANHO_ADITIVO, nome_aditivo: response[x][1].nome_COMPONENTE, ID_ADITIVO: response[x][0].id_ADITIVO, medida1: response[x][2], medida2: response[x][3], ID_UNIDADE1: response[x][0].id_UNIDADE1, ID_UNIDADE2: response[x][0].id_UNIDADE2 });
                    _this.pos2++;
                }
                _this.banhos_aditivos = _this.banhos_aditivos.slice();
            }
        }, function (error) { return console.log(error); });
    };
    //preenche dados com o id
    BanhosformComponent.prototype.inicia = function (id) {
        var _this = this;
        if (id != 0 && id != "undefined") {
            this.ABDICBANHOService.getbyID(id).subscribe(function (response) {
                var count = Object.keys(response).length;
                //se existir banhos com o id
                if (count > 0) {
                    _this.banhos_dados = response[0][0];
                    for (var x in response) {
                        _this.codigo = response[x][0].id_BANHO;
                        _this.data = new Date(response[x][0].data_ULT_MODIF).toLocaleDateString();
                        _this.estado = response[x][0].estado;
                        _this.nome = response[x][0].nome_BANHO;
                        _this.linha = response[x][0].id_LINHA;
                        _this.zona = response[x][0].id_ZONA;
                        _this.tinas_valor = _this.tinas.find(function (item) { return item.value.id === response[x][0].id_TINA; }).value;
                        _this.capacidade_tina = _this.tinas.find(function (item) { return item.value.id === response[x][0].id_TINA; }).value.capacidade;
                        _this.obs_tina = _this.tinas.find(function (item) { return item.value.id === response[x][0].id_TINA; }).value.obs;
                        _this.cor_linha = response[x][1].cor;
                        _this.obs = response[x][0].obs;
                    }
                    _this.banhosComp(id);
                    _this.banhosaditivos(id);
                }
                else {
                    _this.router.navigate(['banhos']);
                }
            }, function (error) { console.log(error); });
        }
        else {
            this.router.navigate(['banhos']);
        }
    };
    //bt cancelar
    BanhosformComponent.prototype.backview = function () {
        this.location.back();
    };
    //bt gravar
    BanhosformComponent.prototype.gravar = function () {
        var _this = this;
        var banho = new __WEBPACK_IMPORTED_MODULE_5_app_entidades_AB_DIC_BANHO__["a" /* AB_DIC_BANHO */];
        if (this.novo) {
            banho.obs = this.obs;
            banho.data_ULT_MODIF = new Date();
            banho.utz_CRIA = this.user;
            banho.data_CRIA = new Date();
            banho.estado = this.estado;
            banho.id_TINA = this.tinas_valor['id'];
            banho.nome_BANHO = this.nome;
            banho.id_LINHA = this.linha;
            banho.id_ZONA = this.zona;
            banho.inativo = false;
            this.ABDICBANHOService.create(banho).subscribe(function (res) {
                _this.inserir_linhas(res.id_BANHO);
            }, function (error) { console.log(error); _this.simular(_this.inputerro); });
        }
        else {
            var id;
            var sub = this.route
                .queryParams
                .subscribe(function (params) {
                id = params['id'] || 0;
            });
            banho = this.banhos_dados;
            banho.obs = this.obs;
            banho.id_TINA = this.tinas_valor['id'];
            banho.estado = this.estado;
            banho.nome_BANHO = this.nome;
            banho.id_LINHA = this.linha;
            banho.id_ZONA = this.zona;
            banho.data_ULT_MODIF = new Date();
            banho.utz_ULT_MODIF = this.user;
            this.ABDICBANHOService.update(banho).then(function () {
                _this.inserir_linhas(id);
            });
        }
    };
    //adicionar nova linha Componentes do Banho
    BanhosformComponent.prototype.novalinha = function () {
        //console.log(this.banhos_comp[this.banhos_comp.length - 1].data_fim)
        if (this.banhos_comp.length > 0) {
            if (this.banhos_comp[this.banhos_comp.length - 1].data_fim == null) {
                this.simular(this.dialog);
            }
            else {
                this.banhos_comp.push({
                    pos: this.pos, id_BANHO_COMP: "", nome_comp: "", id_componente: "", data_ini: null, data_fim: null,
                    id_FORNECEDOR: null, limite_AMARELO_INF: null, limite_AMARELO_SUP: null, limite_VERDE_INF: null, limite_VERDE_SUP: null, nome_FORNECEDOR: null, obs: null, qtd: null, id_unidade: null
                });
                this.banhos_comp = this.banhos_comp.slice();
                this.pos++;
            }
        }
        else {
            this.banhos_comp.push({
                pos: this.pos, id_BANHO_COMP: "", nome_comp: "", id_componente: "", data_ini: null, data_fim: null,
                id_FORNECEDOR: null, limite_AMARELO_INF: null, limite_AMARELO_SUP: null, limite_VERDE_INF: null, limite_VERDE_SUP: null, nome_FORNECEDOR: null, obs: null, qtd: null, id_unidade: null
            });
            this.banhos_comp = this.banhos_comp.slice();
            this.pos++;
        }
    };
    //adicionar nova linha aditivos do Banho
    BanhosformComponent.prototype.novalinha_aditivo = function () {
        this.banhos_aditivos.push({ pos: this.pos2, ID_BANHO_ADITIVO: "", nome_aditivo: "", ID_ADITIVO: "", medida1: "", medida2: "", ID_UNIDADE1: null, ID_UNIDADE2: null });
        this.banhos_aditivos = this.banhos_aditivos.slice();
        this.pos2++;
    };
    //inserir linhas na BD
    BanhosformComponent.prototype.inserir_linhas = function (id) {
        var _this = this;
        if (this.banhos_aditivos.length > 0) {
            for (var x in this.banhos_aditivos) {
                var banhos_aditivos = new __WEBPACK_IMPORTED_MODULE_14_app_entidades_AB_DIC_BANHO_ADITIVO__["a" /* AB_DIC_BANHO_ADITIVO */];
                if (this.banhos_aditivos[x].ID_ADITIVO != "" && this.banhos_aditivos[x].ID_ADITIVO != null) {
                    if (this.banhos_aditivos[x].ID_BANHO_ADITIVO == null || this.banhos_aditivos[x].ID_BANHO_ADITIVO == "") {
                        banhos_aditivos.id_BANHO = id;
                        banhos_aditivos.id_ADITIVO = this.banhos_aditivos[x].ID_ADITIVO;
                        banhos_aditivos.id_UNIDADE1 = this.banhos_aditivos[x].ID_UNIDADE1;
                        banhos_aditivos.id_UNIDADE2 = this.banhos_aditivos[x].ID_UNIDADE2;
                        banhos_aditivos.utz_CRIA = this.user;
                        banhos_aditivos.data_CRIA = new Date();
                        banhos_aditivos.data_ULT_MODIF = new Date();
                        this.ABDICBANHOADITIVOService.create(banhos_aditivos).subscribe(function (res) {
                            _this.banhosaditivos(id);
                        }, function (error) { console.log(error); _this.simular(_this.inputerro); });
                    }
                    else {
                        this.updateaditivos(id, x);
                    }
                }
            }
        }
        if (this.banhos_comp.length > 0) {
            for (var x in this.banhos_comp) {
                var banho_comp = new __WEBPACK_IMPORTED_MODULE_11_app_entidades_AB_DIC_BANHO_COMPONENTE__["a" /* AB_DIC_BANHO_COMPONENTE */];
                if (this.banhos_comp[x].id_componente != "" && this.banhos_comp[x].data_ini != "" && this.banhos_comp[x].id_componente != null && this.banhos_comp[x].data_ini != null) {
                    if (this.banhos_comp[x].id_banho_comp == null || this.banhos_comp[x].id_banho_comp == "") {
                        banho_comp.id_BANHO = id;
                        banho_comp.id_COMPONENTE = this.banhos_comp[x].id_componente['id'];
                        banho_comp.data_INICIO = this.banhos_comp[x].data_ini;
                        banho_comp.data_FIM = this.banhos_comp[x].data_fim;
                        banho_comp.utz_CRIA = this.user;
                        banho_comp.data_CRIA = new Date();
                        banho_comp.data_ULT_MODIF = new Date();
                        banho_comp.id_FORNECEDOR = this.banhos_comp[x].id_FORNECEDOR;
                        banho_comp.limite_AMARELO_INF = this.banhos_comp[x].limite_AMARELO_INF;
                        banho_comp.limite_AMARELO_SUP = this.banhos_comp[x].limite_AMARELO_SUP;
                        banho_comp.limite_VERDE_INF = this.banhos_comp[x].limite_VERDE_INF;
                        banho_comp.limite_VERDE_SUP = this.banhos_comp[x].limite_VERDE_SUP;
                        banho_comp.obs = this.banhos_comp[x].obs;
                        banho_comp.id_UNIDADE_COMPONENTE = this.banhos_comp[x].id_unidade;
                        banho_comp.quantidade = this.banhos_comp[x].qtd;
                        banho_comp.inativo = false;
                        this.ABDICBANHOCOMPONENTEService.create(banho_comp).subscribe(function (res) {
                            _this.banhosComp(id);
                        }, function (error) { console.log(error); _this.simular(_this.inputerro); });
                    }
                    else {
                        this.update(id, x);
                    }
                }
            }
        }
        if (this.novo) {
            this.simular(this.inputnotifi);
        }
        else {
            this.simular(this.inputgravou);
        }
        this.router.navigate(['banhos/view'], { queryParams: { id: id } });
    };
    BanhosformComponent.prototype.update = function (id, x) {
        var _this = this;
        this.ABDICBANHOCOMPONENTEService.getbyid_banho_comp(this.banhos_comp[x].id_banho_comp).subscribe(function (res) {
            var banho_comp = new __WEBPACK_IMPORTED_MODULE_11_app_entidades_AB_DIC_BANHO_COMPONENTE__["a" /* AB_DIC_BANHO_COMPONENTE */];
            banho_comp = res[0];
            banho_comp.id_BANHO = id;
            banho_comp.id_COMPONENTE = _this.banhos_comp[x].id_componente['id'];
            banho_comp.data_INICIO = _this.banhos_comp[x].data_ini;
            banho_comp.data_FIM = new Date(_this.banhos_comp[x].data_fim);
            if (_this.banhos_comp[x].data_fim == null || _this.banhos_comp[x].data_fim == "")
                banho_comp.data_FIM = null;
            banho_comp.utz_ULT_MODIF = _this.user;
            banho_comp.data_ULT_MODIF = new Date();
            banho_comp.id_FORNECEDOR = _this.banhos_comp[x].id_FORNECEDOR;
            banho_comp.limite_AMARELO_INF = _this.banhos_comp[x].limite_AMARELO_INF;
            banho_comp.limite_AMARELO_SUP = _this.banhos_comp[x].limite_AMARELO_SUP;
            banho_comp.limite_VERDE_INF = _this.banhos_comp[x].limite_VERDE_INF;
            banho_comp.limite_VERDE_SUP = _this.banhos_comp[x].limite_VERDE_SUP;
            banho_comp.obs = _this.banhos_comp[x].obs;
            banho_comp.id_UNIDADE_COMPONENTE = _this.banhos_comp[x].id_unidade;
            banho_comp.quantidade = _this.banhos_comp[x].qtd;
            _this.ABDICBANHOCOMPONENTEService.update(banho_comp).then(function () {
                _this.banhosComp(id);
            });
        }, function (error) { console.log(error); _this.simular(_this.inputerro); });
    };
    BanhosformComponent.prototype.updateaditivos = function (id, x) {
        var _this = this;
        this.ABDICBANHOADITIVOService.getbyID(this.banhos_aditivos[x].ID_BANHO_ADITIVO).subscribe(function (res) {
            var banhos_aditivos = new __WEBPACK_IMPORTED_MODULE_14_app_entidades_AB_DIC_BANHO_ADITIVO__["a" /* AB_DIC_BANHO_ADITIVO */];
            banhos_aditivos = res[0];
            banhos_aditivos.id_BANHO = id;
            banhos_aditivos.id_UNIDADE1 = _this.banhos_aditivos[x].ID_UNIDADE1;
            banhos_aditivos.id_UNIDADE2 = _this.banhos_aditivos[x].ID_UNIDADE2;
            banhos_aditivos.utz_ULT_MODIF = _this.user;
            banhos_aditivos.data_ULT_MODIF = new Date();
            _this.ABDICBANHOADITIVOService.update(banhos_aditivos).then(function () {
                _this.banhosaditivos(id);
            });
        }, function (error) { console.log(error); _this.simular(_this.inputerro); });
    };
    //apagar linha
    BanhosformComponent.prototype.apagarlinha = function (pos, id, id_banho) {
        this.confirmapagarlinha(pos, id, id_banho);
    };
    BanhosformComponent.prototype.apagarlinha_aditivo = function (pos, id, id_banho) {
        this.confirmapagarlinha_aditivo(pos, id, id_banho);
    };
    //ao alterar cod_Tina
    BanhosformComponent.prototype.num_tina = function (event) {
        this.capacidade_tina = event.value.capacidade;
        this.obs_tina = event.value.obs;
    };
    BanhosformComponent.prototype.apagar = function () {
        var id;
        var sub = this.route
            .queryParams
            .subscribe(function (params) {
            id = params['id'] || 0;
        });
        if (id != 0) {
            this.confirm(id);
        }
    };
    BanhosformComponent.prototype.seguinte = function () {
        this.i = this.i + 1;
        this.i = this.i % this.banho.length;
        if (this.banho.length > 0) {
            this.inicia(this.banho[this.i]);
            this.router.navigate(['banhos/view'], { queryParams: { id: this.banho[this.i] } });
        }
    };
    BanhosformComponent.prototype.anterior = function () {
        if (this.i === 0) {
            this.i = this.banho.length;
        }
        this.i = this.i - 1;
        this.router.navigate(['banhos/view'], { queryParams: { id: this.banho[this.i] } });
        if (this.banho.length > 0) {
            this.inicia(this.banho[this.i]);
        }
    };
    //popup apagar
    BanhosformComponent.prototype.confirm = function (id) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Tem a certeza que pretende apagar?',
            header: 'Apagar Confirmação',
            icon: 'fa fa-trash',
            accept: function () {
                var banho = new __WEBPACK_IMPORTED_MODULE_5_app_entidades_AB_DIC_BANHO__["a" /* AB_DIC_BANHO */];
                banho = _this.banhos_dados;
                banho.inativo = true;
                banho.utz_ANULACAO = _this.user;
                banho.data_ANULACAO = new Date();
                _this.ABDICBANHOService.update(banho).then(function () {
                    _this.simular(_this.inputapagar);
                    _this.router.navigate(['banhos']);
                });
            }
        });
    };
    //popup apagarlinha
    BanhosformComponent.prototype.confirmapagarlinha_aditivo = function (pos, id, id_banho) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Tem a certeza que pretende apagar?',
            header: 'Apagar Confirmação',
            icon: 'fa fa-trash',
            accept: function () {
                if (id != null && id != "") {
                    _this.ABDICBANHOADITIVOService.delete(id).then(function () {
                        _this.simular(_this.inputapagar);
                        _this.banhosaditivos(id_banho);
                    });
                }
                else {
                    var index = _this.banhos_aditivos.findIndex(function (item) { return item.pos2 === pos; });
                    _this.banhos_aditivos.splice(index, 1);
                    _this.banhos_aditivos = _this.banhos_aditivos.slice();
                }
            }
        });
    };
    //popup apagarlinha
    BanhosformComponent.prototype.confirmapagarlinha = function (pos, id, id_banho) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Tem a certeza que pretende apagar?',
            header: 'Apagar Confirmação',
            icon: 'fa fa-trash',
            accept: function () {
                if (id != null && id != "") {
                    _this.ABDICBANHOCOMPONENTEService.delete(id).then(function () {
                        _this.simular(_this.inputapagar);
                        _this.banhosComp(id_banho);
                    });
                }
                else {
                    var index = _this.banhos_comp.findIndex(function (item) { return item.pos === pos; });
                    _this.banhos_comp.splice(index, 1);
                    _this.banhos_comp = _this.banhos_comp.slice();
                }
            }
        });
    };
    //simular click para mostrar mensagem
    BanhosformComponent.prototype.simular = function (element) {
        var event = new MouseEvent('click', { bubbles: true });
        this.renderer.invokeElementMethod(element.nativeElement, 'dispatchEvent', [event]);
    };
    //ao inserir data inicio verifica se existe uma data fim superior
    BanhosformComponent.prototype.verificadatas = function (event, pos) {
        var existdata = false;
        if (event != null && this.banhos_comp.length > 1) {
            for (var x in this.banhos_comp) {
                if (new Date(this.banhos_comp[x].data_fim).getTime() >= new Date(event).getTime() && this.banhos_comp[x].pos != pos) {
                    existdata = true;
                }
            }
            if (existdata)
                this.simular(this.dialogavisodata);
        }
    };
    //ao inserir data fim verifica se existe a data inicio é infiro
    BanhosformComponent.prototype.verificadatafim = function (event, date) {
        if (event != null) {
            if (new Date(date).getTime() > new Date(event).getTime()) {
                this.simular(this.dialogavisodatafim);
            }
        }
    };
    //ao alterar componente atualiza fornecedor e unidade por defeito
    BanhosformComponent.prototype.atualizardados = function (pos, event) {
        this.banhos_comp.find(function (item) { return item.pos == pos; }).id_unidade = event.value.id_unidade;
        this.banhos_comp.find(function (item) { return item.pos == pos; }).id_FORNECEDOR = event.value.id_FORNECEDOR;
        this.banhos_comp = this.banhos_comp.slice();
    };
    //ao alterar estado atualiza componentes
    BanhosformComponent.prototype.atualizarcomp = function (event) {
        this.estado_comp = event.value;
        this.banhosComp(this.banho[this.i]);
    };
    return BanhosformComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputnotifi'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], BanhosformComponent.prototype, "inputnotifi", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputgravou'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], BanhosformComponent.prototype, "inputgravou", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputapagar'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object)
], BanhosformComponent.prototype, "inputapagar", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputerro'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object)
], BanhosformComponent.prototype, "inputerro", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialog'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _e || Object)
], BanhosformComponent.prototype, "dialog", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialogavisodata'),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _f || Object)
], BanhosformComponent.prototype, "dialogavisodata", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialogavisodatafim'),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _g || Object)
], BanhosformComponent.prototype, "dialogavisodatafim", void 0);
BanhosformComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-banhosform',
        template: __webpack_require__("../../../../../src/app/paginas/banhos/banhosform/banhosform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/paginas/banhos/banhosform/banhosform.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_16_app_servicos_ger_fornecedor_service__["a" /* GERFORNECEDORService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_16_app_servicos_ger_fornecedor_service__["a" /* GERFORNECEDORService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_15_app_servicos_ab_dic_zona_service__["a" /* ABDICZONAService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_15_app_servicos_ab_dic_zona_service__["a" /* ABDICZONAService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_13_app_servicos_ab_dic_banho_aditivo_service__["a" /* ABDICBANHOADITIVOService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13_app_servicos_ab_dic_banho_aditivo_service__["a" /* ABDICBANHOADITIVOService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_12_app_servicos_ab_unidade_medida_service__["a" /* ABUNIDADADEMEDIDAService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12_app_servicos_ab_unidade_medida_service__["a" /* ABUNIDADADEMEDIDAService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_10_app_servicos_ab_dic_linha_service__["a" /* ABDICLINHAService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10_app_servicos_ab_dic_linha_service__["a" /* ABDICLINHAService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_9_app_servicos_ab_dic_componente_service__["a" /* ABDICCOMPONENTEService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_app_servicos_ab_dic_componente_service__["a" /* ABDICCOMPONENTEService */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_8_app_servicos_ab_dic_banho_componente_service__["a" /* ABDICBANHOCOMPONENTEService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_app_servicos_ab_dic_banho_componente_service__["a" /* ABDICBANHOCOMPONENTEService */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_7_app_servicos_ab_dic_tina_service__["a" /* ABDICTINAService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_app_servicos_ab_dic_tina_service__["a" /* ABDICTINAService */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["ConfirmationService"]) === "function" && _r || Object, typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _s || Object, typeof (_t = typeof __WEBPACK_IMPORTED_MODULE_3_app_servicos_ab_dic_banho_service__["a" /* ABDICBANHOService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_servicos_ab_dic_banho_service__["a" /* ABDICBANHOService */]) === "function" && _t || Object, typeof (_u = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _u || Object, typeof (_v = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _v || Object, typeof (_w = typeof __WEBPACK_IMPORTED_MODULE_4_app_menu_sidebar_metadata__["a" /* AppGlobals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_menu_sidebar_metadata__["a" /* AppGlobals */]) === "function" && _w || Object, typeof (_x = typeof __WEBPACK_IMPORTED_MODULE_6__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_common__["Location"]) === "function" && _x || Object])
], BanhosformComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
//# sourceMappingURL=banhosform.component.js.map

/***/ }),

/***/ "../../../../../src/app/paginas/componentes/compform/compform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/paginas/componentes/compform/compform.component.html":
/***/ (function(module, exports) {

module.exports = "<app-controlos (anteriorbt)=\"anterior()\" (seguintebt)=\"seguinte()\" (apagarbt)=\"apagar()\"></app-controlos>\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"red\">\n            <h4 class=\"title\">Ficha do Componente/Aditivo</h4>\n          </div>\n          <div class=\"card-content\">\n            <form id=\"formComponente\" (ngSubmit)=\"gravar()\" ngNativeValidate>\n              <div class=\"row\">\n                <div class=\"col-md-2\">\n                  <div [ngClass]=\"codigo == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating \">\n                    <label class=\"control-label\">Código</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"codigo\" [ngModelOptions]=\"{standalone: true}\" disabled>\n                  </div>\n                </div>\n                <div class=\"col-md-2\">\n                  <div [ngClass]=\"data == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating\">\n                    <label class=\"control-label\">Data Última Alteração</label>\n                    <input type=\"text\" class=\"form-control\" value=\"{{data}}\" disabled>\n                  </div>\n                </div>\n                <div class=\"col-md-1\" style=\"padding: 0px; margin-left: 51px;\">\n                  <div class=\"checkbox\" style=\"float: none; margin-top: 0px;\">\n                    <input [disabled]=\"!modoedicao\" type=\"checkbox\" name=\"componete\" id=\"radio5\" [(ngModel)]=\"componente_check\">\n                    <label for=\"radio5\" style=\"color:black\">\n                                    Componente\n                        </label>\n                  </div>\n                  <div class=\"checkbox\" style=\"float: none; margin-left: 0px;\">\n                    <input [disabled]=\"!modoedicao\" type=\"checkbox\" name=\"distribuicao\" id=\"radio6\" [(ngModel)]=\"aditivo_check\">\n                    <label for=\"radio6\" style=\"color:black\">\n                                    Aditivo\n                        </label>\n                  </div>\n                </div>\n                <div class=\"col-md-6\" style=\"padding: 0px;\">\n                  <div class=\"col-md-6\" style=\"padding: 0px;\">\n                    <div class=\"form-group form-black label-floating\">\n                      <label style=\"font-size: 14px;\">Unidade Medição</label>\n                      <p-dropdown [filter]=\"true\" [options]=\"medidas\" [style]=\"{'width':'179px'}\" [(ngModel)]=\"medidas_valor\" [ngModelOptions]=\"{standalone: true}\"\n                        [disabled]=\"!modoedicao\" [required]=\"true\"></p-dropdown>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\" style=\"padding: 0px;\">\n                    <div class=\"form-group form-black label-floating\">\n                      <label style=\"font-size: 14px;\">Unidade Adição</label>\n                      <p-dropdown [filter]=\"true\" [options]=\"medidas\" [style]=\"{'width':'179px'}\" [(ngModel)]=\"medidas_valor_adicao\" [ngModelOptions]=\"{standalone: true}\"\n                        [disabled]=\"!modoedicao\" [required]=\"true\"></p-dropdown>\n                    </div>\n                  </div>\n                  <div class=\"col-md-12\" style=\"padding: 0px;\">\n                    <div class=\"form-group form-black label-floating\">\n                      <label style=\"font-size: 14px;\">Fornecedor Habitual</label>\n                      <p-dropdown [filter]=\"true\" [options]=\"fornecedores\" [style]=\"{'width':'65%'}\"  [(ngModel)]=\"id_fornecedor\" [ngModelOptions]=\"{standalone: true}\"\n                        [disabled]=\"!modoedicao\" ></p-dropdown>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"col-md-12\" style=\"padding: 0px;\">\n                    <div [ngClass]=\"nome == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating\">\n                      <label class=\"control-label\">Nome</label>\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"nome\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"!modoedicao\"\n                        required>\n                    </div>\n                  </div>\n                  <div class=\"col-md-12\" style=\"padding: 12px 0px 0px;\">\n                    <div class=\"col-md-6\" style=\"padding: 0px;\">\n                      <div [ngClass]=\"cod_ref == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating\">\n                        <div class=\"form-group form-black label-floating\">\n                          <label class=\"control-label\">Código Referência</label>\n                          <p-dropdown [filter]=\"true\" (onChange)=\"cod_refe($event)\" [options]=\"componentes_silver\" [style]=\"{'width':'300px'}\" [(ngModel)]=\"cod_ref\"\n                            [ngModelOptions]=\"{standalone: true}\" [disabled]=\"!modoedicao\"></p-dropdown>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\" style=\"padding: 0px;\">\n                      <div [ngClass]=\"nome_ref == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating\">\n                        <label class=\"control-label\">Nome Referência</label>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"nome_ref\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"true\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <div [ngClass]=\"obs == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating\">\n                      <label class=\"control-label\">Observações</label>\n                      <textarea class=\"form-control\" rows=\"4\" [(ngModel)]=\"obs\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"!modoedicao\"></textarea>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <button type=\"reset\" (click)=\"backview()\" class=\"btn btn-danger pull-right\" [hidden]=\"!modoedicao\">Cancelar</button>\n              <button type=\"submit\" class=\"btn btn-success pull-right\" [hidden]=\"!modoedicao\">Gravar</button>\n              <div class=\"clearfix\"></div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<button class=\"btn btn-danger btn-block\" #inputnotifi [hidden]=\"true\" onclick=\"demo.showNotification('top','right','Inseriu com Sucesso!',2)\"></button>\n<button class=\"btn btn-danger btn-block\" #inputgravou [hidden]=\"true\" onclick=\"demo.showNotification('top','right','Alterado com Sucesso!',2)\"></button>\n<button class=\"btn btn-danger btn-block\" #inputapagar [hidden]=\"true\" onclick=\"demo.showNotification('top','right','Apagado com Sucesso!',2)\"></button>\n<button class=\"btn btn-danger btn-block\" #inputerro [hidden]=\"true\" onclick=\"demo.showNotification('top','right','ERRO!! Registo não foi Gravado!',4)\"></button>"

/***/ }),

/***/ "../../../../../src/app/paginas/componentes/compform/compform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_menu_sidebar_metadata__ = __webpack_require__("../../../../../src/app/menu/sidebar.metadata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_servicos_ab_unidade_medida_service__ = __webpack_require__("../../../../../src/app/servicos/ab-unidade-medida.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_entidades_AB_DIC_COMPONENTE__ = __webpack_require__("../../../../../src/app/entidades/AB_DIC_COMPONENTE.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_servicos_ab_dic_componente_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-componente.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_servicos_ger_fornecedor_service__ = __webpack_require__("../../../../../src/app/servicos/ger-fornecedor.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompformComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CompformComponent = (function () {
    function CompformComponent(GERFORNECEDORService, ABUNIDADADEMEDIDAService, ABDICCOMPONENTEService, confirmationService, router, renderer, route, globalVar, location) {
        this.GERFORNECEDORService = GERFORNECEDORService;
        this.ABUNIDADADEMEDIDAService = ABUNIDADADEMEDIDAService;
        this.ABDICCOMPONENTEService = ABDICCOMPONENTEService;
        this.confirmationService = confirmationService;
        this.router = router;
        this.renderer = renderer;
        this.route = route;
        this.globalVar = globalVar;
        this.location = location;
        this.medidas_valor = "";
        this.nome = "";
        this.nome_ref = "";
        this.estado = false;
        this.medidas = [];
        this.componente = [];
        this.modoedicao = false;
        this.novo = false;
        this.data = null;
        this.obs = "";
        this.pos = 0;
        this.display = true;
    }
    CompformComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalVar.setapagar(true);
        this.globalVar.seteditar(true);
        this.globalVar.setvoltar(true);
        this.globalVar.seteditar(true);
        this.globalVar.setseguinte(true);
        this.globalVar.setanterior(true);
        this.globalVar.setpesquisar(true);
        this.user = JSON.parse(localStorage.getItem('userapp'))["id"];
        var url = this.router.routerState.snapshot.url;
        url = url.slice(1);
        var urlarray = url.split("/");
        if (urlarray[1].match("editar") || urlarray[1].match("view")) {
            this.novo = false;
            this.codigo = 0;
            this.data = 0;
            var id;
            var sub = this.route
                .queryParams
                .subscribe(function (params) {
                id = params['id'] || 0;
            });
            //preenche array para navegar nos componentees 
            this.ABDICCOMPONENTEService.getAll("T").subscribe(function (response) {
                for (var x in response) {
                    _this.componente.push(response[x].id_COMPONENTE);
                }
                _this.i = _this.componente.indexOf(+id);
                _this.inicia(_this.componente[_this.i]);
            }, function (error) { console.log(error); });
        }
        //preenche combobox fornecedores
        this.GERFORNECEDORService.getAll().subscribe(function (response) {
            _this.fornecedores = [];
            _this.fornecedores.push({ label: 'Sel. Fornecedor', value: "" });
            for (var x in response) {
                _this.fornecedores.push({ label: response[x].nome_FORNECEDOR, value: response[x].id_FORNECEDOR });
            }
            _this.fornecedores = _this.fornecedores.slice();
        }, function (error) { return console.log(error); });
        //preenche combobox unidades
        this.ABUNIDADADEMEDIDAService.getAll().subscribe(function (response) {
            _this.medidas = [];
            _this.medidas.push({ label: 'Sel. Unidade de Medida', value: "" });
            for (var x in response) {
                _this.medidas.push({ label: response[x].medida, value: response[x].id_MEDIDA });
            }
            _this.medidas = _this.medidas.slice();
        }, function (error) { return console.log(error); });
        //preenche combobox componentes_silver
        this.ABDICCOMPONENTEService.getComponentes().subscribe(function (response) {
            _this.componentes_silver = [];
            _this.componentes_silver.push({ label: 'Sel. Ref. Comp.', value: "" });
            for (var x in response) {
                _this.componentes_silver.push({ label: response[x].PROREF + ' - ' + response[x].PRODES1 + ' ' + response[x].PRODES2, value: response[x].PROREF });
            }
            _this.componentes_silver = _this.componentes_silver.slice();
        }, function (error) { return console.log(error); });
        if (urlarray[1] != null) {
            if (urlarray[1].match("editar")) {
                this.globalVar.setseguinte(false);
                this.globalVar.setanterior(false);
                this.globalVar.setapagar(false);
                this.globalVar.setcriar(true);
                this.modoedicao = true;
            }
            else if (urlarray[1].match("novo")) {
                this.globalVar.setseguinte(false);
                this.globalVar.setanterior(false);
                this.globalVar.setapagar(false);
                this.globalVar.setcriar(false);
                this.novo = true;
                this.globalVar.seteditar(false);
                this.modoedicao = true;
                var dirtyFormID = 'formComponente';
                var resetForm = document.getElementById(dirtyFormID);
                resetForm.reset();
            }
            else if (urlarray[1].match("view")) {
                this.globalVar.setcriar(true);
            }
        }
    };
    //preenche no ref
    CompformComponent.prototype.cod_refe = function (event) {
        this.nome_ref = "";
        this.nome_ref = this.componentes_silver.find(function (item) { return item.value == event.value; }).label.split(" - ")[1];
    };
    //preenche dados com o id
    CompformComponent.prototype.inicia = function (id) {
        var _this = this;
        if (id != 0 && id != "undefined") {
            this.ABDICCOMPONENTEService.getbyID(id).subscribe(function (response) {
                var count = Object.keys(response).length;
                //se existir componentes com o id
                if (count > 0) {
                    _this.componentes_dados = response[0];
                    for (var x in response) {
                        _this.codigo = response[x].id_COMPONENTE;
                        _this.data = new Date(response[x].data_ULT_MODIF).toLocaleDateString();
                        _this.nome = response[x].nome_COMPONENTE;
                        _this.medidas_valor = response[x].id_UNIDADE_COMPONENTE;
                        _this.obs = response[x].obs;
                        _this.cod_ref = response[x].cod_REF;
                        _this.nome_ref = response[x].nome_REF;
                        _this.id_fornecedor = response[x].id_FORNECEDOR;
                        _this.medidas_valor_adicao = response[x].id_UNIDADE_ADITIVO;
                        if (response[x].tipo == "T") {
                            _this.componente_check = true;
                            _this.aditivo_check = true;
                        }
                        else if (response[x].tipo == "A") {
                            _this.componente_check = false;
                            _this.aditivo_check = true;
                        }
                        else if (response[x].tipo == "C") {
                            _this.componente_check = true;
                            _this.aditivo_check = false;
                        }
                        else {
                            _this.componente_check = false;
                            _this.aditivo_check = false;
                        }
                    }
                }
                else {
                    _this.router.navigate(['componentes']);
                }
            }, function (error) { console.log(error); });
        }
        else {
            this.router.navigate(['componentes']);
        }
    };
    //bt cancelar
    CompformComponent.prototype.backview = function () {
        this.location.back();
    };
    //bt gravar
    CompformComponent.prototype.gravar = function () {
        var _this = this;
        var componente = new __WEBPACK_IMPORTED_MODULE_6_app_entidades_AB_DIC_COMPONENTE__["a" /* AB_DIC_COMPONENTE */];
        if (this.novo) {
            componente.nome_COMPONENTE = this.nome;
            componente.obs = this.obs;
            componente.data_ULT_MODIF = new Date();
            componente.utz_CRIA = this.user;
            componente.id_UNIDADE_COMPONENTE = this.medidas_valor;
            componente.data_CRIA = new Date();
            componente.inativo = false;
            componente.cod_REF = this.cod_ref;
            componente.nome_REF = this.nome_ref;
            componente.id_FORNECEDOR = this.id_fornecedor;
            componente.id_UNIDADE_ADITIVO = this.medidas_valor_adicao;
            if (this.componente_check && this.aditivo_check) {
                componente.tipo = "T";
            }
            else if (this.componente_check && !this.aditivo_check) {
                componente.tipo = "C";
            }
            else if (!this.componente_check && this.aditivo_check) {
                componente.tipo = "A";
            }
            else {
                componente.tipo = "";
            }
            this.ABDICCOMPONENTEService.create(componente).subscribe(function (res) {
                _this.simular(_this.inputnotifi);
                _this.router.navigate(['componentes/view'], { queryParams: { id: res.id_COMPONENTE } });
            }, function (error) { console.log(error); _this.simular(_this.inputerro); });
        }
        else {
            var id;
            var sub = this.route
                .queryParams
                .subscribe(function (params) {
                id = params['id'] || 0;
            });
            componente = this.componentes_dados;
            componente.obs = this.obs;
            componente.id_UNIDADE_COMPONENTE = this.medidas_valor;
            componente.nome_COMPONENTE = this.nome;
            componente.data_ULT_MODIF = new Date();
            componente.utz_ULT_MODIF = this.user;
            componente.cod_REF = this.cod_ref;
            componente.nome_REF = this.nome_ref;
            componente.id_FORNECEDOR = this.id_fornecedor;
            componente.id_UNIDADE_ADITIVO = this.medidas_valor_adicao;
            if (this.componente_check && this.aditivo_check) {
                componente.tipo = "T";
            }
            else if (this.componente_check && !this.aditivo_check) {
                componente.tipo = "C";
            }
            else if (!this.componente_check && this.aditivo_check) {
                componente.tipo = "A";
            }
            else {
                componente.tipo = "";
            }
            this.ABDICCOMPONENTEService.update(componente).then(function () {
                _this.simular(_this.inputgravou);
                _this.router.navigate(['componentes/view'], { queryParams: { id: id } });
            });
        }
    };
    CompformComponent.prototype.apagar = function () {
        var id;
        var sub = this.route
            .queryParams
            .subscribe(function (params) {
            id = params['id'] || 0;
        });
        if (id != 0) {
            this.confirm(id);
        }
    };
    CompformComponent.prototype.seguinte = function () {
        this.i = this.i + 1;
        this.i = this.i % this.componente.length;
        if (this.componente.length > 0) {
            this.inicia(this.componente[this.i]);
            this.router.navigate(['componentes/view'], { queryParams: { id: this.componente[this.i] } });
        }
    };
    CompformComponent.prototype.anterior = function () {
        if (this.i === 0) {
            this.i = this.componente.length;
        }
        this.i = this.i - 1;
        this.router.navigate(['componentes/view'], { queryParams: { id: this.componente[this.i] } });
        if (this.componente.length > 0) {
            this.inicia(this.componente[this.i]);
        }
    };
    //popup apagar
    CompformComponent.prototype.confirm = function (id) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Tem a certeza que pretende apagar?',
            header: 'Apagar Confirmação',
            icon: 'fa fa-trash',
            accept: function () {
                var componente = new __WEBPACK_IMPORTED_MODULE_6_app_entidades_AB_DIC_COMPONENTE__["a" /* AB_DIC_COMPONENTE */];
                componente = _this.componentes_dados;
                componente.utz_ANULACAO = _this.user;
                componente.data_ANULACAO = new Date();
                componente.inativo = true;
                _this.ABDICCOMPONENTEService.update(componente).then(function () {
                    _this.simular(_this.inputapagar);
                    _this.router.navigate(['componentes']);
                });
            }
        });
    };
    //simular click para mostrar mensagem
    CompformComponent.prototype.simular = function (element) {
        var event = new MouseEvent('click', { bubbles: true });
        this.renderer.invokeElementMethod(element.nativeElement, 'dispatchEvent', [event]);
    };
    return CompformComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputnotifi'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], CompformComponent.prototype, "inputnotifi", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputgravou'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], CompformComponent.prototype, "inputgravou", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputapagar'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object)
], CompformComponent.prototype, "inputapagar", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputerro'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object)
], CompformComponent.prototype, "inputerro", void 0);
CompformComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-compform',
        template: __webpack_require__("../../../../../src/app/paginas/componentes/compform/compform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/paginas/componentes/compform/compform.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8_app_servicos_ger_fornecedor_service__["a" /* GERFORNECEDORService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_app_servicos_ger_fornecedor_service__["a" /* GERFORNECEDORService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_app_servicos_ab_unidade_medida_service__["a" /* ABUNIDADADEMEDIDAService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_servicos_ab_unidade_medida_service__["a" /* ABUNIDADADEMEDIDAService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7_app_servicos_ab_dic_componente_service__["a" /* ABDICCOMPONENTEService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_app_servicos_ab_dic_componente_service__["a" /* ABDICCOMPONENTEService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["ConfirmationService"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_3_app_menu_sidebar_metadata__["a" /* AppGlobals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_menu_sidebar_metadata__["a" /* AppGlobals */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]) === "function" && _o || Object])
], CompformComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
//# sourceMappingURL=compform.component.js.map

/***/ }),

/***/ "../../../../../src/app/paginas/componentes/componentes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/paginas/componentes/componentes.component.html":
/***/ (function(module, exports) {

module.exports = "<app-controlos></app-controlos>\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"red\">\n            <h4 class=\"title\">Componentes e Aditivos de controlo</h4>\n            <p class=\"category\"></p>\n          </div>\n          <div class=\"card-content table-responsive\">\n\n            <p-dataTable [value]=\"cols\" dataKey=\"id\" [rows]=\"15\" [paginator]=\"true\" [pageLinks]=\"3\" [stacked]=\"stacked\" (onRowDblclick)=\"abrir($event)\" [rowsPerPageOptions]=\"[15,20,30,'todos']\">\n              <p-column [sortable]=\"true\" [filter]=\"true\" styleclass=\"text-danger\" field=\"id\" header=\"ID\"></p-column>\n              <p-column [sortable]=\"true\" [filter]=\"true\" styleclass=\"text-danger\" field=\"nome\" header=\"Nome\"></p-column>\n              <p-column [sortable]=\"true\" [filter]=\"true\" styleclass=\"text-danger\" field=\"tipo\" header=\"Tipo\"></p-column>\n               <p-column styleClass=\"col-button\">\n                <ng-template pTemplate=\"header\">\n                </ng-template>\n                <ng-template let-car=\"rowData\" pTemplate=\"body\">\n                  <a style=\"color: black; cursor:pointer;\" title=\"Ver mais\" [routerLink]=\"['/componentes/view']\" [queryParams]=\"{ id: car.id }\">\n                  <i class=\"material-icons\">search</i>\n                  </a>\n                </ng-template>\n              </p-column>\n            </p-dataTable>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/paginas/componentes/componentes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_menu_sidebar_metadata__ = __webpack_require__("../../../../../src/app/menu/sidebar.metadata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_servicos_ab_dic_componente_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-componente.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ComponentesComponent = (function () {
    function ComponentesComponent(router, globalVar, ABDICCOMPONENTEService) {
        this.router = router;
        this.globalVar = globalVar;
        this.ABDICCOMPONENTEService = ABDICCOMPONENTEService;
    }
    ComponentesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cols = [];
        this.globalVar.setvoltar(false);
        this.globalVar.seteditar(false);
        this.globalVar.setapagar(false);
        this.globalVar.setseguinte(false);
        this.globalVar.setanterior(false);
        this.globalVar.setcriar(true);
        this.globalVar.setpesquisar(true);
        this.globalVar.setduplicar(false);
        this.ABDICCOMPONENTEService.getAll("T").subscribe(function (response) {
            for (var x in response) {
                var tipo = "";
                if (response[x].tipo == "T") {
                    tipo = "Componente / Aditivo";
                }
                else if (response[x].tipo == "A") {
                    tipo = "Aditivo";
                }
                else if (response[x].tipo == "C") {
                    tipo = "Componente";
                }
                _this.cols.push({
                    id: response[x].id_COMPONENTE, nome: response[x].nome_COMPONENTE, tipo: tipo
                });
            }
            _this.cols = _this.cols.slice();
        }, function (error) { return console.log(error); });
    };
    ComponentesComponent.prototype.addNewEntry = function (event) {
        alert();
    };
    //clicar 2 vezes na tabela abre linha
    ComponentesComponent.prototype.abrir = function (event) {
        this.router.navigate(['componentes/view'], { queryParams: { id: event.data.id } });
    };
    return ComponentesComponent;
}());
ComponentesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-componentes',
        template: __webpack_require__("../../../../../src/app/paginas/componentes/componentes.component.html"),
        styles: [__webpack_require__("../../../../../src/app/paginas/componentes/componentes.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_menu_sidebar_metadata__["a" /* AppGlobals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_menu_sidebar_metadata__["a" /* AppGlobals */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_servicos_ab_dic_componente_service__["a" /* ABDICCOMPONENTEService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_servicos_ab_dic_componente_service__["a" /* ABDICCOMPONENTEService */]) === "function" && _c || Object])
], ComponentesComponent);

var _a, _b, _c;
//# sourceMappingURL=componentes.component.js.map

/***/ }),

/***/ "../../../../../src/app/paginas/configuracoes/configuracoes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n * Imageless CSS3 Treeview with Checkbox Support\r\n * @namespace window.AcidJs\r\n * @class CSS3Treeview\r\n * @version 3.0\r\n * @author Martin Ivanov\r\n * @url developer website: http://wemakesites.net/\r\n * @url developer twitter: https://twitter.com/#!/wemakesitesnet\r\n * @url developer blog http://acidmartin.wordpress.com/\r\n **/\r\n \r\n/*\r\n * Do you like this solution? Please, donate:\r\n * https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QFUHPWJB2JDBS\r\n **/\r\n \r\n.acidjs-css3-treeview,\r\n.acidjs-css3-treeview *\r\n{\r\n    padding: 0;\r\n    /*margin: 0;*/\r\n    list-style: none;\r\n}\r\n\r\n.acidjs-css3-treeview .editar::before\r\n{\r\n    content: \"\\F044\" !important;\r\n    font-size: 12px !important;\r\n}\r\n\r\n\r\n.acidjs-css3-treeview .remover::before\r\n{\r\n    content: \"\\F1F8\" !important;\r\n}\r\n\r\n.acidjs-css3-treeview .imprimir::before\r\n{\r\n    content: \"\\1F5A8\" !important;\r\n}\r\n\r\n.acidjs-css3-treeview .lista::before\r\n{\r\n    content: \"\\F03A\" !important;\r\n}\r\n\r\n.acidjs-css3-treeview label[for]::before,\r\n.acidjs-css3-treeview label span::before\r\n{\r\n    content: \"\\25B6\";\r\n    \r\n    display: inline-block;\r\n    margin: 2px 0 0;\r\n    width: 13px;\r\n    height: 13px;\r\n    vertical-align: top;\r\n    text-align: center;\r\n    color: #e74c3c;\r\n    font-size: 8px;\r\n    line-height: 13px;\r\n    font: normal normal normal 14px/1 FontAwesome;\r\n}\r\n \r\n.acidjs-css3-treeview li ul\r\n{\r\n    margin: 0 0 0 22px;\r\n}\r\n \r\n.acidjs-css3-treeview *\r\n{\r\n    vertical-align: middle;\r\n}\r\n \r\n.acidjs-css3-treeview\r\n{\r\n    font: normal 11px/16px \"Segoe UI\", Arial, Sans-serif;\r\n}\r\n \r\n.acidjs-css3-treeview li\r\n{\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n        user-select: none;\r\n}\r\n \r\n.acidjs-css3-treeview input[type=\"checkbox\"]\r\n{\r\n    display: none;\r\n}\r\n \r\n.acidjs-css3-treeview label\r\n{\r\n    cursor: pointer;\r\n    color: black;\r\n}\r\n \r\n.acidjs-css3-treeview label[for]::before\r\n{\r\n    -webkit-transform: translatex(-24px);\r\n    transform: translatex(-24px);\r\n        margin-top: 4px;\r\n}\r\n \r\n.acidjs-css3-treeview label span::before\r\n{\r\n    -webkit-transform: translatex(16px);\r\n    transform: translatex(16px);\r\n}\r\n \r\n.acidjs-css3-treeview input[type=\"checkbox\"][id]:checked ~ label[for]::before\r\n{\r\n    content: \"\\25BC\";\r\n}\r\n \r\n.acidjs-css3-treeview input[type=\"checkbox\"][id]:not(:checked) ~ ul\r\n{\r\n    display: none;\r\n}\r\n \r\n.acidjs-css3-treeview label:not([for])\r\n{\r\n    margin: 0 8px 0 0;\r\n}\r\n \r\n.acidjs-css3-treeview label span::before\r\n{\r\n    content: \"\";\r\n    border: solid 1px #1375b3;\r\n    color: #1375b3;\r\n    opacity: .50;\r\n}\r\n \r\n.acidjs-css3-treeview label input:checked + span::before\r\n{\r\n    content: \"\\2714\";\r\n    box-shadow: 0 0 2px rgba(0, 0, 0, .25) inset;\r\n    opacity: 1;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/paginas/configuracoes/configuracoes.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"red\" style=\"padding: 0px;\">\n            <ul class=\"nav nav-tabs\">\n              <li class=\"active\"><a data-toggle=\"tab\" href=\"#menu2\">Perfis</a></li>\n            </ul>\n          </div>\n          <div class=\"card-content\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"tab-content\">\n                  <!-- PERFIS -->\n                  <div id=\"menu2\" class=\"tab-pane fade in active\">\n                    <div class=\"col-md-4\">\n                      <p-dataTable [style]=\"{'width':'300px'}\" [value]=\"perfis\" selectionMode=\"single\" [(selection)]=\"selectedCar\" (onRowSelect)=\"onRowSelect($event)\"\n                        [paginator]=\"true\" rows=\"15\">\n                        <p-column [style]=\"{'width':'30px'}\" field=\"medida\" header=\"Perfil\" [filter]=\"true\" [sortable]=\"true\"></p-column>\n                        <p-footer>\n                          <a (click)=\"showDialogToAdd()\" style=\"color: black; cursor:pointer; margin-left:10px;\" title=\"Adicionar nova linha\">\n                         <i class=\"material-icons\">add</i> Adicionar\n                        </a>\n                        </p-footer>\n                      </p-dataTable>\n                    </div>\n                    <div class=\"col-md-8\">\n                      <div class=\"acidjs-css3-treeview\">\n                        <ul>\n                          <li>\n                            <input type=\"checkbox\" id=\"node-0\" checked=\"checked\" /><label><input type=\"checkbox\" /><span></span></label>\n                            <label for=\"node-0\"><b>Análise de Banhos</b></label>\n                            <ul>\n                              <li>\n                                <input type=\"checkbox\" id=\"node-0-0\"  /><label><input type=\"checkbox\" /><span></span></label>\n                                <label for=\"node-0-0\">Movimentos</label>\n                                <ul>\n                                  <li>\n                                    <input type=\"checkbox\" id=\"node-0-0-0\" /><label><input type=\"checkbox\"   [(ngModel)]=\"node000\" [ngModelOptions]=\"{standalone: true}\"/><span></span></label>\n                                    <label for=\"node-0-0-0\">Análises</label>\n                                    <ul>\n                                      <li>\n                                        <input type=\"checkbox\" id=\"node-0-0-0-0\" /><label><input type=\"checkbox\" /><span></span></label>\n                                        <label for=\"node-0-0-0-0\" class=\"editar\">Editar</label>\n                                      </li>\n                                      <li>\n                                        <input type=\"checkbox\" id=\"node-0-0-0-1\" /><label><input type=\"checkbox\" /><span></span></label>\n                                        <label for=\"node-0-0-0-1\" class=\"remover\">Apagar</label>\n                                      </li>\n                                    </ul>\n                                  </li>\n                                </ul>\n                                <ul>\n                                  <li>\n                                    <input type=\"checkbox\" id=\"node-0-0-1\"/><label><input type=\"checkbox\"   [(ngModel)]=\"node001\" [ngModelOptions]=\"{standalone: true}\"/><span></span></label>\n                                    <label for=\"node-0-0-1\">Manutenções</label>\n                                    <ul>\n                                      <li>\n                                        <input type=\"checkbox\" id=\"node-0-0-1-0\" /><label><input [(ngModel)]=\"node0010\" [ngModelOptions]=\"{standalone: true}\" type=\"checkbox\" /><span></span></label>\n                                        <label for=\"node-0-0-1-0\">Editar</label>\n                                      </li>\n                                      <li>\n                                        <input type=\"checkbox\" id=\"node-0-0-1-1\" /><label><input [(ngModel)]=\"node0011\" [ngModelOptions]=\"{standalone: true}\" type=\"checkbox\" /><span></span></label>\n                                        <label for=\"node-0-0-1-1\">Apagar</label>\n                                      </li>\n                                    </ul>\n                                  </li>\n                                </ul>\n                                <ul>\n                                  <li>\n                                    <input type=\"checkbox\" id=\"node-0-0-2\" /><label><input type=\"checkbox\"  checked=\"checked\"/><span></span></label>\n                                    <label for=\"node-0-0-2\">Reg. Parâmetros de Operação</label>\n                                    <ul>\n                                      <li>\n                                        <input type=\"checkbox\" id=\"node-0-0-2-0\" /><label><input type=\"checkbox\" /><span></span></label>\n                                        <label for=\"node-0-0-2-0\">Editar</label>\n                                      </li>\n                                      <li>\n                                        <input type=\"checkbox\" id=\"node-0-0-2-1\" /><label><input type=\"checkbox\" /><span></span></label>\n                                        <label for=\"node-0-0-2-1\">Apagar</label>\n                                      </li>\n                                    </ul>\n                                  </li>\n                                </ul>\n                              </li>\n                              <li>\n                                <input type=\"checkbox\" id=\"node-0-1\" /><label><input type=\"checkbox\" /><span></span></label>\n                                <label for=\"node-0-1\">Tinas</label>\n                                <ul>\n                                  <li>\n                                    <input type=\"checkbox\" id=\"node-0-1-0\" /><label><input type=\"checkbox\" /><span></span></label>\n                                    <label for=\"node-0-1-0\">Componentes</label>\n                                  </li>\n                                  <li>\n                                    <input type=\"checkbox\" id=\"node-0-1-1\" /><label><input type=\"checkbox\" /><span></span></label>\n                                    <label for=\"node-0-1-1\">Banhos</label>\n                                  </li>\n                                  <li>\n                                    <input type=\"checkbox\" id=\"node-0-1-2\" /><label><input type=\"checkbox\" /><span></span></label>\n                                    <label for=\"node-0-1-2\">Utilizadores</label>\n                                  </li>\n                                   <li>\n                                    <input type=\"checkbox\" id=\"node-0-1-2\" /><label><input type=\"checkbox\" /><span></span></label>\n                                    <label for=\"node-0-1-3\">Fornecedres</label>\n                                  </li>\n                                </ul>\n\n                              </li>\n                              <li>\n                                <input type=\"checkbox\" id=\"node-0-2\" /><label><input type=\"checkbox\" /><span></span></label>\n                                <label for=\"node-0-2\">Parâmetros</label>\n                                <ul>\n                                  <li>\n                                    <input type=\"checkbox\" id=\"node-0-2-0\" /><label><input type=\"checkbox\" /><span></span></label>\n                                    <label for=\"node-0-2-0\">My Pictures</label>\n                                  </li>\n                                  <li>\n                                    <input type=\"checkbox\" id=\"node-0-2-1\" /><label><input type=\"checkbox\" /><span></span></label>\n                                    <label for=\"node-0-2-1\">Public Pictures</label>\n                                  </li>\n                                </ul>\n                              </li>\n                            </ul>\n                          </li>\n                        </ul>\n                      </div>\n                      <p> </p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/paginas/configuracoes/configuracoes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracoesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfiguracoesComponent = (function () {
    function ConfiguracoesComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.node0010 = true;
        this.node0011 = true;
        this.node000 = true;
    }
    ConfiguracoesComponent.prototype.ngOnInit = function () {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "assets/js/demo.js";
        this.elementRef.nativeElement.appendChild(s);
    };
    return ConfiguracoesComponent;
}());
ConfiguracoesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-configuracoes',
        template: __webpack_require__("../../../../../src/app/paginas/configuracoes/configuracoes.component.html"),
        styles: [__webpack_require__("../../../../../src/app/paginas/configuracoes/configuracoes.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object])
], ConfiguracoesComponent);

var _a, _b;
//# sourceMappingURL=configuracoes.component.js.map

/***/ }),

/***/ "../../../../../src/app/paginas/fornecedores/form/form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/paginas/fornecedores/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<app-controlos (anteriorbt)=\"anterior()\" (seguintebt)=\"seguinte()\" (apagarbt)=\"apagar()\"></app-controlos>\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"red\">\n            <h4 class=\"title\">Ficha de Fornecedor</h4>\n            <p class=\"category\">Complete os Dados</p>\n          </div>\n          <div class=\"card-content\">\n            <form id=\"formfornecedor\" (ngSubmit)=\"gravar()\" ngNativeValidate>\n              <div class=\"row\">\n                <div class=\"col-md-5\">\n                  <div [ngClass]=\"codigo == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating \">\n                    <label class=\"control-label\">Código Fornecedor</label>\n                    <input type=\"text\" class=\"form-control\" value=\"{{codigo}}\" disabled>\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <div [ngClass]=\"data == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating\">\n                    <label class=\"control-label\">Data Última Alteração</label>\n                    <input type=\"text\" class=\"form-control\" value=\"{{data}}\" disabled>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-3\">\n                  <div [ngClass]=\"num_fornecedor == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating\">\n                    <div class=\"form-group form-black label-floating\">\n                      <label class=\"control-label\">Número Fornecedor</label>\n                      <p-dropdown [filter]=\"true\" [ngClass]=\"class_numexiste\" (onChange)=\"resetclass($event)\" [options]=\"fornecedores_silver\" [style]=\"{'width':'300px'}\"\n                        [(ngModel)]=\"num_fornecedor\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"!modoedicao\" [required]=\"true\"></p-dropdown>\n                    </div>\n                    <span style=\"font-size: 12px; color: red; font-weight: 500;\" [hidden]=\"!num_existe\">Número Fornecedor já existe! </span>\n                  </div>\n                </div>\n                <div class=\"col-md-9\">\n                  <div [ngClass]=\"nome == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating\">\n                    <label class=\"control-label\">Nome Fornecedor</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"nome\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"true\"\n                      required>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <div [ngClass]=\"obs == '' || obs == null ? 'is-empty' : null\" class=\"form-group form-black label-floating\">\n                      <label class=\"control-label\">Observações</label>\n                      <textarea class=\"form-control\" rows=\"5\" [disabled]=\"!modoedicao\" [(ngModel)]=\"obs\" [ngModelOptions]=\"{standalone: true}\"></textarea >\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <button type=\"reset\" (click)=\"backview()\" class=\"btn btn-danger pull-right\" [hidden]=\"!modoedicao\">Cancelar</button>\n              <button type=\"submit\"  class=\"btn btn-success pull-right\" [hidden]=\"!modoedicao\">Gravar</button>\n              <div class=\"clearfix\"></div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<button class=\"btn btn-danger btn-block\" #inputnotifi [hidden]=\"true\" onclick=\"demo.showNotification('top','right','Inseriu com Sucesso!',2)\"></button>\n<button class=\"btn btn-danger btn-block\" #inputgravou [hidden]=\"true\" onclick=\"demo.showNotification('top','right','Alterado com Sucesso!',2)\"></button>\n<button class=\"btn btn-danger btn-block\" #inputapagar [hidden]=\"true\" onclick=\"demo.showNotification('top','right','Apagado com Sucesso!',2)\"></button>\n<button class=\"btn btn-danger btn-block\" #inputerro [hidden]=\"true\" onclick=\"demo.showNotification('top','right','ERRO!! Registo não foi Gravado!',4)\"></button>"

/***/ }),

/***/ "../../../../../src/app/paginas/fornecedores/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_menu_sidebar_metadata__ = __webpack_require__("../../../../../src/app/menu/sidebar.metadata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_entidades_GER_FORNECEDOR__ = __webpack_require__("../../../../../src/app/entidades/GER_FORNECEDOR.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_servicos_ger_fornecedor_service__ = __webpack_require__("../../../../../src/app/servicos/ger-fornecedor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_primeng__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FormComponent = (function () {
    function FormComponent(confirmationService, router, GERFORNECEDORService, renderer, route, globalVar, location) {
        this.confirmationService = confirmationService;
        this.router = router;
        this.GERFORNECEDORService = GERFORNECEDORService;
        this.renderer = renderer;
        this.route = route;
        this.globalVar = globalVar;
        this.location = location;
        this.forne = [];
        this.modoedicao = false;
        this.novo = false;
        this.nome = "";
        this.data = null;
        this.obs = "";
        this.num_existe = false;
        this.class_numexiste = "";
    }
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalVar.setapagar(true);
        this.globalVar.seteditar(true);
        this.globalVar.setvoltar(true);
        this.globalVar.seteditar(true);
        this.globalVar.setseguinte(true);
        this.globalVar.setanterior(true);
        this.globalVar.setpesquisar(true);
        this.user = JSON.parse(localStorage.getItem('userapp'))["id"];
        var url = this.router.routerState.snapshot.url;
        url = url.slice(1);
        var urlarray = url.split("/");
        if (urlarray[1].match("editar") || urlarray[1].match("view")) {
            this.novo = false;
            this.codigo = 0;
            this.data = 0;
            this.num_fornecedor = 0;
            var id;
            var sub = this.route
                .queryParams
                .subscribe(function (params) {
                id = params['id'] || 0;
            });
            //preenche array para navegar nos fornecedores 
            this.GERFORNECEDORService.getAll().subscribe(function (response) {
                for (var x in response) {
                    _this.forne.push(response[x].id_FORNECEDOR);
                }
                _this.i = _this.forne.indexOf(+id);
                _this.inicia(_this.forne[_this.i]);
            }, function (error) { console.log(error); });
        }
        if (urlarray[1] != null) {
            if (urlarray[1].match("editar")) {
                this.globalVar.setcriar(true);
                this.globalVar.setseguinte(false);
                this.globalVar.setanterior(false);
                this.globalVar.setapagar(false);
                this.modoedicao = true;
            }
            else if (urlarray[1].match("novo")) {
                this.globalVar.setcriar(false);
                this.globalVar.setseguinte(false);
                this.globalVar.setanterior(false);
                this.globalVar.setapagar(false);
                this.novo = true;
                this.globalVar.seteditar(false);
                this.modoedicao = true;
                var dirtyFormID = 'formfornecedor';
                var resetForm = document.getElementById(dirtyFormID);
                resetForm.reset();
                //preenche combobox fornecedores_silver
                this.fornecedores_silver = [];
                this.fornecedores_silver.push({ label: 'Seleccione Fornecedor', value: "" });
                this.GERFORNECEDORService.getAll_silver().subscribe(function (response) {
                    for (var x in response) {
                        _this.fornecedores_silver.push({ label: response[x].FOUCOD + ' - ' + response[x].ADRNOM, value: { id: response[x].FOUCOD, nome: response[x].ADRNOM } });
                    }
                    _this.fornecedores_silver = _this.fornecedores_silver.slice();
                }, function (error) { return console.log(error); });
            }
            else if (urlarray[1].match("view")) {
                this.globalVar.setcriar(true);
            }
        }
    };
    //preenche dados com o id
    FormComponent.prototype.inicia = function (id) {
        var _this = this;
        if (id != 0 && id != "undefined") {
            //preenche combobox fornecedores_silver
            this.fornecedores_silver = [];
            this.fornecedores_silver.push({ label: 'Seleccione Fornecedor', value: "" });
            this.GERFORNECEDORService.getAll_silver().subscribe(function (response) {
                for (var x in response) {
                    _this.fornecedores_silver.push({ label: response[x].FOUCOD + ' - ' + response[x].ADRNOM, value: { id: response[x].FOUCOD, nome: response[x].ADRNOM } });
                }
                _this.fornecedores_silver = _this.fornecedores_silver.slice();
                _this.GERFORNECEDORService.getbyID(id).subscribe(function (response) {
                    var count = Object.keys(response).length;
                    //se existir forncedeor com o id
                    if (count > 0) {
                        _this.fornecedor_dados = response[0];
                        for (var x in response) {
                            _this.codigo = response[x].id_FORNECEDOR;
                            _this.data = new Date(response[x].data_ULT_MODIF).toLocaleDateString();
                            _this.nome = response[x].nome_FORNECEDOR;
                            _this.obs = response[x].obs;
                            _this.num_fornecedor = _this.fornecedores_silver.find(function (item) { return item.value.id == response[x].num_FORNECEDOR; }).value;
                        }
                    }
                    else {
                        _this.router.navigate(['fornecedor']);
                    }
                }, function (error) { console.log(error); });
            }, function (error) { return console.log(error); });
        }
        else {
            this.router.navigate(['fornecedor']);
        }
    };
    //bt cancelar
    FormComponent.prototype.backview = function () {
        this.location.back();
    };
    FormComponent.prototype.resetclass = function (event) {
        this.nome = "";
        this.nome = event.value.nome;
        this.num_existe = false;
        this.class_numexiste = "";
    };
    //bt gravar
    FormComponent.prototype.gravar = function () {
        var _this = this;
        var fornecedor = new __WEBPACK_IMPORTED_MODULE_4_app_entidades_GER_FORNECEDOR__["a" /* GER_FORNECEDOR */];
        if (this.novo) {
            fornecedor.nome_FORNECEDOR = this.nome;
            fornecedor.obs = this.obs;
            fornecedor.data_ULT_MODIF = new Date();
            fornecedor.utz_CRIA = this.user;
            fornecedor.data_CRIA = new Date();
            fornecedor.inativo = false;
            //verifica se numero de fornecedor existe
            this.GERFORNECEDORService.verifica_num(this.num_fornecedor['id']).subscribe(function (response) {
                var count = Object.keys(response).length;
                //se existir forncedeor com o id
                if (count == 0) {
                    fornecedor.num_FORNECEDOR = _this.num_fornecedor['id'];
                    _this.GERFORNECEDORService.create(fornecedor).subscribe(function (res) {
                        _this.simular(_this.inputnotifi);
                        _this.router.navigate(['fornecedor/view'], { queryParams: { id: res.id_FORNECEDOR } });
                    }, function (error) { console.log(error); _this.simular(_this.inputerro); });
                }
                else {
                    _this.num_existe = true;
                    _this.class_numexiste = "num_existe";
                }
            }, function (error) { console.log(error); _this.simular(_this.inputerro); });
        }
        else {
            var id;
            var sub = this.route
                .queryParams
                .subscribe(function (params) {
                id = params['id'] || 0;
            });
            fornecedor = this.fornecedor_dados;
            fornecedor.nome_FORNECEDOR = this.nome;
            fornecedor.obs = this.obs;
            fornecedor.id_FORNECEDOR = id;
            fornecedor.data_ULT_MODIF = new Date();
            fornecedor.utz_ULT_MODIF = this.user;
            fornecedor.num_FORNECEDOR = this.num_fornecedor['id'];
            //verifica se numero de fornecedor existe
            this.GERFORNECEDORService.verifica_num_fornece(id, this.num_fornecedor['id']).subscribe(function (response) {
                var count = Object.keys(response).length;
                //se existir forncedeor com o id
                if (count == 0) {
                    _this.GERFORNECEDORService.update(fornecedor).then(function () {
                        _this.simular(_this.inputgravou);
                        _this.router.navigate(['fornecedor/view'], { queryParams: { id: id } });
                    });
                }
                else {
                    _this.num_existe = true;
                    _this.class_numexiste = "num_existe";
                }
            }, function (error) { console.log(error); _this.simular(_this.inputerro); });
        }
    };
    FormComponent.prototype.apagar = function () {
        var id;
        var sub = this.route
            .queryParams
            .subscribe(function (params) {
            id = params['id'] || 0;
        });
        if (id != 0) {
            this.confirm(id);
        }
    };
    FormComponent.prototype.seguinte = function () {
        this.i = this.i + 1;
        this.i = this.i % this.forne.length;
        if (this.forne.length > 0) {
            this.inicia(this.forne[this.i]);
            this.router.navigate(['fornecedor/view'], { queryParams: { id: this.forne[this.i] } });
        }
    };
    FormComponent.prototype.anterior = function () {
        if (this.i === 0) {
            this.i = this.forne.length;
        }
        this.i = this.i - 1;
        if (this.forne.length > 0) {
            this.inicia(this.forne[this.i]);
            this.router.navigate(['fornecedor/view'], { queryParams: { id: this.forne[this.i] } });
        }
    };
    //popup apagar
    FormComponent.prototype.confirm = function (id) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Tem a certeza que pretende apagar?',
            header: 'Apagar Confirmação',
            icon: 'fa fa-trash',
            accept: function () {
                var fornecedor = new __WEBPACK_IMPORTED_MODULE_4_app_entidades_GER_FORNECEDOR__["a" /* GER_FORNECEDOR */];
                fornecedor = _this.fornecedor_dados;
                fornecedor.inativo = true;
                fornecedor.utz_ANULACAO = _this.user;
                fornecedor.data_ANULACAO = new Date();
                _this.GERFORNECEDORService.update(fornecedor).then(function () {
                    _this.simular(_this.inputapagar);
                    _this.router.navigate(['fornecedor']);
                });
            }
        });
    };
    //simular click para mostrar mensagem
    FormComponent.prototype.simular = function (element) {
        var event = new MouseEvent('click', { bubbles: true });
        this.renderer.invokeElementMethod(element.nativeElement, 'dispatchEvent', [event]);
    };
    return FormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputnotifi'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], FormComponent.prototype, "inputnotifi", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputgravou'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], FormComponent.prototype, "inputgravou", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputapagar'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object)
], FormComponent.prototype, "inputapagar", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputerro'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object)
], FormComponent.prototype, "inputerro", void 0);
FormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-form',
        template: __webpack_require__("../../../../../src/app/paginas/fornecedores/form/form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/paginas/fornecedores/form/form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ConfirmationService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5_app_servicos_ger_fornecedor_service__["a" /* GERFORNECEDORService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_servicos_ger_fornecedor_service__["a" /* GERFORNECEDORService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_app_menu_sidebar_metadata__["a" /* AppGlobals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_menu_sidebar_metadata__["a" /* AppGlobals */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _l || Object])
], FormComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
//# sourceMappingURL=form.component.js.map

/***/ }),

/***/ "../../../../../src/app/paginas/fornecedores/fornecedores.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/paginas/fornecedores/fornecedores.component.html":
/***/ (function(module, exports) {

module.exports = "<app-controlos></app-controlos>\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"red\">\n            <h4 class=\"title\">Fornecedores</h4>\n            <p class=\"category\"></p>\n          </div>\n          <div class=\"card-content table-responsive\">\n\n            <p-dataTable  (onRowDblclick)=\"abrir($event)\"  [value]=\"cols\" dataKey=\"id\" [rows]=\"15\" [paginator]=\"true\" [pageLinks]=\"3\"  [stacked]=\"stacked\" >\n              <p-column [sortable]=\"true\" [filter]=\"true\" styleclass=\"text-danger\" field=\"id\" header=\"ID\"></p-column>\n              <p-column [filter]=\"true\" styleclass=\"text-danger\" field=\"num\" header=\"Número\"></p-column>\n              <p-column [filter]=\"true\" styleclass=\"text-danger\" field=\"nome\" header=\"Nome\"></p-column>\n              <p-column styleClass=\"col-button\">\n                <ng-template pTemplate=\"header\">\n                </ng-template>\n                <ng-template let-car=\"rowData\" pTemplate=\"body\">\n                  <a style=\"color: black; cursor:pointer;\" title=\"Ver mais\" [routerLink]=\"['/fornecedor/view']\" [queryParams]=\"{ id: car.id }\">\n                  <i class=\"material-icons\">search</i>\n                  </a>\n                </ng-template>\n              </p-column>\n            </p-dataTable>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/paginas/fornecedores/fornecedores.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_menu_sidebar_metadata__ = __webpack_require__("../../../../../src/app/menu/sidebar.metadata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_servicos_ger_fornecedor_service__ = __webpack_require__("../../../../../src/app/servicos/ger-fornecedor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FornecedoresComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FornecedoresComponent = (function () {
    function FornecedoresComponent(GERFORNECEDORService, globalVar, router) {
        this.GERFORNECEDORService = GERFORNECEDORService;
        this.globalVar = globalVar;
        this.router = router;
        this.cols = [];
    }
    FornecedoresComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalVar.setvoltar(false);
        this.globalVar.seteditar(false);
        this.globalVar.setapagar(false);
        this.globalVar.setseguinte(false);
        this.globalVar.setanterior(false);
        this.globalVar.setcriar(true);
        this.globalVar.setduplicar(false);
        this.GERFORNECEDORService.getAll().subscribe(function (response) {
            for (var x in response) {
                _this.cols.push({ id: response[x].id_FORNECEDOR, nome: response[x].nome_FORNECEDOR, num: response[x].num_FORNECEDOR });
            }
            _this.cols = _this.cols.slice();
        }, function (error) { return console.log(error); });
    };
    //clicar 2 vezes na tabela abre linha
    FornecedoresComponent.prototype.abrir = function (event) {
        this.router.navigate(['fornecedor/view'], { queryParams: { id: event.data.id } });
    };
    return FornecedoresComponent;
}());
FornecedoresComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-fornecedores',
        template: __webpack_require__("../../../../../src/app/paginas/fornecedores/fornecedores.component.html"),
        styles: [__webpack_require__("../../../../../src/app/paginas/fornecedores/fornecedores.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_servicos_ger_fornecedor_service__["a" /* GERFORNECEDORService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_servicos_ger_fornecedor_service__["a" /* GERFORNECEDORService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_menu_sidebar_metadata__["a" /* AppGlobals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_menu_sidebar_metadata__["a" /* AppGlobals */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _c || Object])
], FornecedoresComponent);

var _a, _b, _c;
//# sourceMappingURL=fornecedores.component.js.map

/***/ }),

/***/ "../../../../../src/app/paginas/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/paginas/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <p-chart type=\"bar\" [data]=\"data\"></p-chart>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"card\">                    \n                    <p-chart type=\"line\" [data]=\"data1\"></p-chart>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-6 col-md-12\">\n                <div class=\"card card-nav-tabs\">\n                    <div class=\"card-header\" data-background-color=\"purple\">\n                        <div class=\"nav-tabs-navigation\">\n                            <div class=\"nav-tabs-wrapper\">\n                                <span class=\"nav-tabs-title\">Tasks:</span>\n                                <ul class=\"nav nav-tabs\" data-tabs=\"tabs\">\n                                    <li class=\"active\">\n                                        <a href=\"#profile\" data-toggle=\"tab\">\n                                                <i class=\"material-icons\">bug_report</i>\n                                                Bugs\n                                            <div class=\"ripple-container\"></div></a>\n                                    </li>\n                                    <li class=\"\">\n                                        <a href=\"#messages\" data-toggle=\"tab\">\n                                                <i class=\"material-icons\">code</i>\n                                                Website\n                                            <div class=\"ripple-container\"></div></a>\n                                    </li>\n                                    <li class=\"\">\n                                        <a href=\"#settings\" data-toggle=\"tab\">\n                                                <i class=\"material-icons\">cloud</i>\n                                                Server\n                                            <div class=\"ripple-container\"></div></a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"card-content\">\n                        <div class=\"tab-content\">\n                            <div class=\"tab-pane active\" id=\"profile\">\n                                <table class=\"table\">\n                                    <tbody>\n                                        <tr>\n                                            <td>\n                                                <div class=\"checkbox\">\n                                                    <label>\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\n                                                        </label>\n                                                </div>\n                                            </td>\n                                            <td>Sign contract for \"What are conference organizers afraid of?\"</td>\n                                            <td class=\"td-actions text-right\">\n                                                <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">edit</i>\n                                                    </button>\n                                                <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">close</i>\n                                                    </button>\n                                            </td>\n                                        </tr>\n                                        <tr>\n                                            <td>\n                                                <div class=\"checkbox\">\n                                                    <label>\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\">\n                                                        </label>\n                                                </div>\n                                            </td>\n                                            <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>\n                                            <td class=\"td-actions text-right\">\n                                                <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">edit</i>\n                                                    </button>\n                                                <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">close</i>\n                                                    </button>\n                                            </td>\n                                        </tr>\n                                        <tr>\n                                            <td>\n                                                <div class=\"checkbox\">\n                                                    <label>\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\">\n                                                        </label>\n                                                </div>\n                                            </td>\n                                            <td>Flooded: One year later, assessing what was lost and what was found when a ravaging\n                                                rain swept through metro Detroit\n                                            </td>\n                                            <td class=\"td-actions text-right\">\n                                                <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">edit</i>\n                                                    </button>\n                                                <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">close</i>\n                                                    </button>\n                                            </td>\n                                        </tr>\n                                        <tr>\n                                            <td>\n                                                <div class=\"checkbox\">\n                                                    <label>\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\n                                                        </label>\n                                                </div>\n                                            </td>\n                                            <td>Create 4 Invisible User Experiences you Never Knew About</td>\n                                            <td class=\"td-actions text-right\">\n                                                <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">edit</i>\n                                                    </button>\n                                                <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">close</i>\n                                                    </button>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                            <div class=\"tab-pane\" id=\"messages\">\n                                <table class=\"table\">\n                                    <tbody>\n                                        <tr>\n                                            <td>\n                                                <div class=\"checkbox\">\n                                                    <label>\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\n                                                        </label>\n                                                </div>\n                                            </td>\n                                            <td>Flooded: One year later, assessing what was lost and what was found when a ravaging\n                                                rain swept through metro Detroit\n                                            </td>\n                                            <td class=\"td-actions text-right\">\n                                                <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">edit</i>\n                                                    </button>\n                                                <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">close</i>\n                                                    </button>\n                                            </td>\n                                        </tr>\n                                        <tr>\n                                            <td>\n                                                <div class=\"checkbox\">\n                                                    <label>\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\">\n                                                        </label>\n                                                </div>\n                                            </td>\n                                            <td>Sign contract for \"What are conference organizers afraid of?\"</td>\n                                            <td class=\"td-actions text-right\">\n                                                <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">edit</i>\n                                                    </button>\n                                                <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">close</i>\n                                                    </button>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                            <div class=\"tab-pane\" id=\"settings\">\n                                <table class=\"table\">\n                                    <tbody>\n                                        <tr>\n                                            <td>\n                                                <div class=\"checkbox\">\n                                                    <label>\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\">\n                                                        </label>\n                                                </div>\n                                            </td>\n                                            <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>\n                                            <td class=\"td-actions text-right\">\n                                                <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">edit</i>\n                                                    </button>\n                                                <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">close</i>\n                                                    </button>\n                                            </td>\n                                        </tr>\n                                        <tr>\n                                            <td>\n                                                <div class=\"checkbox\">\n                                                    <label>\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\n                                                        </label>\n                                                </div>\n                                            </td>\n                                            <td>Flooded: One year later, assessing what was lost and what was found when a ravaging\n                                                rain swept through metro Detroit\n                                            </td>\n                                            <td class=\"td-actions text-right\">\n                                                <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">edit</i>\n                                                    </button>\n                                                <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">close</i>\n                                                    </button>\n                                            </td>\n                                        </tr>\n                                        <tr>\n                                            <td>\n                                                <div class=\"checkbox\">\n                                                    <label>\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\">\n                                                        </label>\n                                                </div>\n                                            </td>\n                                            <td>Sign contract for \"What are conference organizers afraid of?\"</td>\n                                            <td class=\"td-actions text-right\">\n                                                <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">edit</i>\n                                                    </button>\n                                                <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">close</i>\n                                                    </button>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-lg-6 col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header\" data-background-color=\"orange\">\n                        <h4 class=\"title\">Employees Stats</h4>\n                        <p class=\"category\">New employees on 15th September, 2016</p>\n                    </div>\n                    <div class=\"card-content table-responsive\">\n                        <table class=\"table table-hover\">\n                            <thead class=\"text-warning\">\n                                <tr>\n                                    <th>ID</th>\n                                    <th>Name</th>\n                                    <th>Salary</th>\n                                    <th>Country</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>1</td>\n                                    <td>Dakota Rice</td>\n                                    <td>$36,738</td>\n                                    <td>Niger</td>\n                                </tr>\n                                <tr>\n                                    <td>2</td>\n                                    <td>Minerva Hooper</td>\n                                    <td>$23,789</td>\n                                    <td>Curaçao</td>\n                                </tr>\n                                <tr>\n                                    <td>3</td>\n                                    <td>Sage Rodriguez</td>\n                                    <td>$56,142</td>\n                                    <td>Netherlands</td>\n                                </tr>\n                                <tr>\n                                    <td>4</td>\n                                    <td>Philip Chaney</td>\n                                    <td>$38,735</td>\n                                    <td>Korea, South</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/paginas/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent(elementRef) {
        this.elementRef = elementRef;
        this.data3 = null;
        this.data2 = null;
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
        this.data1 = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#4bc0c0'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#565656'
                }
            ]
        };
        this.data2 = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }
            ]
        };
        this.data3 = {
            datasets: [{
                    data: [
                        11,
                        16,
                        7,
                        3,
                        14
                    ],
                    backgroundColor: [
                        "#FF6384",
                        "#4BC0C0",
                        "#FFCE56",
                        "#E7E9ED",
                        "#36A2EB"
                    ],
                    label: 'My dataset'
                }],
            labels: [
                "Red",
                "Green",
                "Yellow",
                "Grey",
                "Blue"
            ]
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "assets/js/initMenu.js";
        this.elementRef.nativeElement.appendChild(s);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/paginas/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/paginas/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/paginas/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/paginas/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\n  body {\n    background: white !important;\n  }\n</style>\n<div class=\"container\">\n\n  <div id=\"loginbox\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3\">\n\n    <div class=\"row\">\n      <div class=\"iconmelon\">\n\n        <img src=\"assets/img/logo.png\" />\n\n      </div>\n    </div>\n\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <div class=\"panel-title text-center\">LOGIN</div>\n      </div>\n\n      <div class=\"panel-body\">\n        <div [hidden]=\"erro\" class=\"alert alert-danger\" style=\"margin-top: 10px;\">\n          <strong>Login Falhou!</strong> Username ou Pasword incorretos!!\n        </div>\n\n        <form name=\"form\" id=\"form\" class=\"form-horizontal\" (ngSubmit)=\"login()\" ngNativeValidate>\n\n          <div class=\"input-group\" style=\"padding-right: 22px;\">\n            <span class=\"input-group-addon iconspan\"><i class=\"glyphicon glyphicon-user\"></i></span>\n            <input id=\"user\" type=\"text\" [(ngModel)]=\"user\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" name=\"user\" value=\"\"\n              placeholder=\"Utilizador\" style=\"margin-top: 22px;\" required>\n          </div>\n\n          <div class=\"input-group\" style=\"padding-right: 22px;\">\n            <span class=\"input-group-addon iconspan\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n            <input id=\"password\" type=\"password\" [(ngModel)]=\"password\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" name=\"password\"\n              placeholder=\"Password\" style=\"margin-top: 22px;\"  required>\n          </div>\n\n          <div class=\"form-group\">\n            <!-- Button -->\n            <div class=\"col-sm-12 controls\">\n              \n              <button type=\"submit\" class=\"btn btn-default pull-right\"><i class=\"glyphicon glyphicon-log-in\"></i> Log in</button>\n            </div>\n          </div>\n\n        </form>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n<div id=\"particles\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/paginas/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_servicos_LoginService__ = __webpack_require__("../../../../../src/app/servicos/LoginService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_servicos_ger_utilizadores_service__ = __webpack_require__("../../../../../src/app/servicos/ger-utilizadores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(elementRef, service, utilizadores, router) {
        this.elementRef = elementRef;
        this.service = service;
        this.utilizadores = utilizadores;
        this.router = router;
        this.erro = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "assets/js/demo.js";
        this.elementRef.nativeElement.appendChild(s);
        if (localStorage.getItem("userapp")) {
            this.router.navigate(['home']);
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.erro = true;
        this.utilizadores.getbyLogin(this.user).subscribe(function (response) {
            var count = Object.keys(response).length;
            if (count == 1) {
                if (response[0].password == _this.password) {
                    localStorage.setItem('userapp', JSON.stringify({ nome: response[0].nome_UTILIZADOR, id: response[0].id_UTILIZADOR }));
                    localStorage.setItem('time', JSON.stringify({ data: new Date() }));
                    _this.router.navigate(['home']);
                }
                else {
                    _this.erro = false;
                }
            }
            else {
                _this.erro = false;
            }
        }, function (error) { return console.log(error); });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/paginas/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/paginas/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_servicos_LoginService__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_servicos_LoginService__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_servicos_ger_utilizadores_service__["a" /* GERUTILIZADORESService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_servicos_ger_utilizadores_service__["a" /* GERUTILIZADORESService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/paginas/manutencao/manutencao.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/paginas/manutencao/manutencao.component.html":
/***/ (function(module, exports) {

module.exports = "<app-controlos></app-controlos>\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"red\">\n            <h4 class=\"title\">Manutenções</h4>\n            <p class=\"category\"></p>\n          </div>\n          <div class=\"card-content table-responsive\">\n\n            <p-dataTable [value]=\"cols\" dataKey=\"id\" [rows]=\"15\" [paginator]=\"true\" [pageLinks]=\"3\" [stacked]=\"stacked\" (onRowDblclick)=\"abrir($event)\"\n              [rowsPerPageOptions]=\"[15,20,30,'todos']\">\n              <p-column [sortable]=\"true\" [filter]=\"true\" styleclass=\"text-danger\" field=\"id\" header=\"Nº Manut\"></p-column>\n              <p-column [sortable]=\"true\" [filter]=\"true\" styleclass=\"text-danger\" field=\"tipo_manu\" header=\"Tipo\"></p-column>\n              <p-column [sortable]=\"true\" [filter]=\"true\" styleclass=\"text-danger\" field=\"data\" header=\"Data Planea.\"></p-column>\n              <p-column [sortable]=\"true\" [filter]=\"true\" styleclass=\"text-danger\" field=\"linha\" header=\"Linha\">\n                <ng-template let-car=\"rowData\" pTemplate=\"body\">\n                  <div [style.background]=\"car['cor']\">\n                    {{car['linha']}}\n                  </div>\n                </ng-template>\n              </p-column>\n              <p-column [sortable]=\"true\" [filter]=\"true\" styleclass=\"text-danger\" field=\"turno\" header=\"Turno\">\n              </p-column>\n              <p-column [sortable]=\"true\" [filter]=\"true\" styleclass=\"text-danger\" field=\"estado\" header=\"Estado\">\n              </p-column>\n              <p-column styleClass=\"col-button\">\n                <ng-template pTemplate=\"header\">\n                </ng-template>\n                <ng-template let-car=\"rowData\" pTemplate=\"body\">\n                  <a style=\"color: black; cursor:pointer;\" title=\"Ver mais\" [routerLink]=\"['/manutencao/view']\" [queryParams]=\"{ id: car.id }\">\n                  <i class=\"material-icons\">search</i>\n                  </a>\n                  <a (click)=\"duplicar(car.id)\" style=\"color: black; cursor:pointer;\" title=\"Duplicar\">\n                  <i class=\"material-icons\">content_copy</i>\n                  </a>\n                </ng-template>\n              </p-column>\n            </p-dataTable>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<button class=\"btn btn-danger btn-block\" #inputgravou [hidden]=\"true\" onclick=\"demo.showNotification('top','right','Duplicado com Sucesso!',2)\"></button>\n<button class=\"btn btn-danger btn-block\" #inputerro [hidden]=\"true\" onclick=\"demo.showNotification('top','right','ERRO!! Registo não foi Gravado!',4)\"></button>\n\n\n<button type=\"button\" [hidden]=\"true\" #waitingDialog  class=\"btn btn-primary\" onclick=\"waitingDialog.show('A Duplicar Registo', {dialogSize: 'md'});\"></button>\n<button type=\"button\" [hidden]=\"true\" #waitingDialogclose  class=\"btn btn-primary\" onclick=\"waitingDialog.hide();\"></button>"

/***/ }),

/***/ "../../../../../src/app/paginas/manutencao/manutencao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_menu_sidebar_metadata__ = __webpack_require__("../../../../../src/app/menu/sidebar.metadata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_servicos_ab_mov_manutencao_service__ = __webpack_require__("../../../../../src/app/servicos/ab-mov-manutencao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_entidades_AB_MOV_MANUTENCAO__ = __webpack_require__("../../../../../src/app/entidades/AB_MOV_MANUTENCAO.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_servicos_ab_mov_manutencao_cab_service__ = __webpack_require__("../../../../../src/app/servicos/ab-mov-manutencao-cab.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_servicos_ab_mov_manutencao_linha_service__ = __webpack_require__("../../../../../src/app/servicos/ab-mov-manutencao-linha.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_entidades_AB_MOV_MANUTENCAO_CAB__ = __webpack_require__("../../../../../src/app/entidades/AB_MOV_MANUTENCAO_CAB.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_entidades_AB_MOV_MANUTENCAO_LINHA__ = __webpack_require__("../../../../../src/app/entidades/AB_MOV_MANUTENCAO_LINHA.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_primeng__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManutencaoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ManutencaoComponent = (function () {
    function ManutencaoComponent(confirmationService, renderer, ABMOVMANUTENCAOLINHAService, ABMOVMANUTENCAOCABService, ABMOVMANUTENCAOService, router, globalVar) {
        this.confirmationService = confirmationService;
        this.renderer = renderer;
        this.ABMOVMANUTENCAOLINHAService = ABMOVMANUTENCAOLINHAService;
        this.ABMOVMANUTENCAOCABService = ABMOVMANUTENCAOCABService;
        this.ABMOVMANUTENCAOService = ABMOVMANUTENCAOService;
        this.router = router;
        this.globalVar = globalVar;
    }
    ManutencaoComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('userapp'))["id"];
        this.cols = [];
        this.globalVar.setvoltar(false);
        this.globalVar.seteditar(false);
        this.globalVar.setapagar(false);
        this.globalVar.setseguinte(false);
        this.globalVar.setanterior(false);
        this.globalVar.setcriar(true);
        this.globalVar.setpesquisar(true);
        this.globalVar.setduplicar(false);
        this.carregarlista();
    };
    ManutencaoComponent.prototype.carregarlista = function () {
        var _this = this;
        this.cols = [];
        this.ABMOVMANUTENCAOService.getAll().subscribe(function (response) {
            for (var x in response) {
                _this.cols.push({ id: response[x][0].id_MANUTENCAO, tipo_manu: response[x][2].nome_TIPO_MANUTENCAO, data: new Date(response[x][0].data_PLANEAMENTO).toLocaleDateString(), cor: response[x][1].cor, linha: response[x][1].nome_LINHA, turno: response[x][3].nome_TURNO, estado: response[x][0].estado });
            }
            _this.cols = _this.cols.slice();
        }, function (error) { return console.log(error); });
    };
    //clicar 2 vezes na tabela abre linha
    ManutencaoComponent.prototype.abrir = function (event) {
        this.router.navigate(['manutencao/view'], { queryParams: { id: event.data.id } });
    };
    ManutencaoComponent.prototype.duplicar = function (id) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Tem a certeza que pretende duplicar?',
            header: 'Duplicar Registo',
            icon: 'fa fa-files-o',
            accept: function () {
                _this.criarmanu(id);
                _this.simular(_this.waitingDialog);
            }
        });
    };
    ManutencaoComponent.prototype.criarmanu = function (id) {
        var _this = this;
        this.data_actual = new Date();
        this.estado = "Em Planeamento";
        var MOV_MANUTENCAO = new __WEBPACK_IMPORTED_MODULE_4_app_entidades_AB_MOV_MANUTENCAO__["a" /* AB_MOV_MANUTENCAO */];
        this.ABMOVMANUTENCAOService.getbyID(id).subscribe(function (response) {
            var count = Object.keys(response).length;
            if (count > 0) {
                for (var x in response) {
                    MOV_MANUTENCAO = response[x][0];
                    MOV_MANUTENCAO.id_MANUTENCAO = null;
                    MOV_MANUTENCAO.estado = _this.estado;
                    MOV_MANUTENCAO.hora_PLANEAMENTO = _this.data_actual.toLocaleTimeString().slice(0, 5);
                    MOV_MANUTENCAO.inativo = false;
                    MOV_MANUTENCAO.data_PLANEAMENTO = _this.data_actual;
                    MOV_MANUTENCAO.data_CRIA = new Date();
                    MOV_MANUTENCAO.utz_CRIA = _this.user;
                    MOV_MANUTENCAO.utz_PLANEAMENTO = _this.user;
                    MOV_MANUTENCAO.impresso = false;
                    MOV_MANUTENCAO.data_ULT_IMPRES = null;
                    MOV_MANUTENCAO.data_ULT_IMPRES = null;
                    MOV_MANUTENCAO.data_ULT_MODIF = null;
                    MOV_MANUTENCAO.utz_ULT_MODIF = null;
                    _this.ABMOVMANUTENCAOService.create(MOV_MANUTENCAO).subscribe(function (res) {
                        _this.criarmanu_cab(id, res.id_MANUTENCAO);
                    }, function (error) {
                        console.log(error);
                    });
                }
            }
        }, function (error) { return console.log(error); });
    };
    ManutencaoComponent.prototype.criarmanu_cab = function (id, id_manu_nova) {
        var _this = this;
        this.id = id_manu_nova;
        var MOV_MANUTENCAO_CAB = new __WEBPACK_IMPORTED_MODULE_7_app_entidades_AB_MOV_MANUTENCAO_CAB__["a" /* AB_MOV_MANUTENCAO_CAB */];
        this.ABMOVMANUTENCAOCABService.getbyID(id).subscribe(function (response) {
            var count = Object.keys(response).length;
            if (count > 0) {
                for (var x in response) {
                    MOV_MANUTENCAO_CAB = response[x][0];
                    var id = MOV_MANUTENCAO_CAB.id_MANUTENCAO_CAB;
                    MOV_MANUTENCAO_CAB.id_MANUTENCAO_CAB = null;
                    MOV_MANUTENCAO_CAB.id_MANUTENCAO = id_manu_nova;
                    MOV_MANUTENCAO_CAB.data_CRIA = new Date();
                    MOV_MANUTENCAO_CAB.utz_CRIA = _this.user;
                    MOV_MANUTENCAO_CAB.data_EXECUCAO = null;
                    MOV_MANUTENCAO_CAB.hora_EXECUCAO = null;
                    MOV_MANUTENCAO_CAB.obs_EXECUCAO = null;
                    MOV_MANUTENCAO_CAB.utz_EXECUCAO = null;
                    MOV_MANUTENCAO_CAB.impresso = false;
                    MOV_MANUTENCAO_CAB.data_ULT_IMPRES = null;
                    MOV_MANUTENCAO_CAB.data_ULT_IMPRES = null;
                    MOV_MANUTENCAO_CAB.data_ULT_MODIF = null;
                    MOV_MANUTENCAO_CAB.utz_ULT_MODIF = null;
                    _this.criarmanucac(MOV_MANUTENCAO_CAB, id);
                }
                _this.simular(_this.inputgravou);
                _this.router.navigate(['manutencao/editar'], { queryParams: { id: _this.id } });
                _this.simular(_this.waitingDialogclose);
            }
            else {
                _this.simular(_this.inputgravou);
                _this.router.navigate(['manutencao/editar'], { queryParams: { id: _this.id } });
                _this.simular(_this.waitingDialogclose);
            }
        });
    };
    ManutencaoComponent.prototype.criarmanucac = function (MOV_MANUTENCAO_CAB, id) {
        var _this = this;
        this.ABMOVMANUTENCAOCABService.create(MOV_MANUTENCAO_CAB).subscribe(function (res) {
            _this.criarmanu_lin(id, res.id_MANUTENCAO_CAB);
        }, function (error) {
            console.log(error);
        });
    };
    ManutencaoComponent.prototype.criarmanu_lin = function (id, id_manu_cab_novo) {
        var _this = this;
        this.ABMOVMANUTENCAOLINHAService.getbyID(id).subscribe(function (response) {
            var count = Object.keys(response).length;
            if (count > 0) {
                for (var x in response) {
                    var MOV_MANUTENCAO_LINHA = new __WEBPACK_IMPORTED_MODULE_8_app_entidades_AB_MOV_MANUTENCAO_LINHA__["a" /* AB_MOV_MANUTENCAO_LINHA */];
                    MOV_MANUTENCAO_LINHA = response[x][0];
                    MOV_MANUTENCAO_LINHA.id_MANUTENCAO_LIN = null;
                    MOV_MANUTENCAO_LINHA.id_MANUTENCAO_CAB = id_manu_cab_novo;
                    _this.ABMOVMANUTENCAOLINHAService.create(MOV_MANUTENCAO_LINHA).subscribe(function (res) {
                    }, function (error) {
                        console.log(error);
                        _this.simular(_this.inputerro);
                    });
                }
            }
        }, function (error) {
            console.log(error);
            _this.simular(_this.inputerro);
        });
    };
    //simular click para mostrar mensagem
    ManutencaoComponent.prototype.simular = function (element) {
        var event = new MouseEvent('click', { bubbles: true });
        this.renderer.invokeElementMethod(element.nativeElement, 'dispatchEvent', [event]);
    };
    return ManutencaoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputgravou'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], ManutencaoComponent.prototype, "inputgravou", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputerro'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], ManutencaoComponent.prototype, "inputerro", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('waitingDialog'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object)
], ManutencaoComponent.prototype, "waitingDialog", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('waitingDialogclose'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object)
], ManutencaoComponent.prototype, "waitingDialogclose", void 0);
ManutencaoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-manutencao',
        template: __webpack_require__("../../../../../src/app/paginas/manutencao/manutencao.component.html"),
        styles: [__webpack_require__("../../../../../src/app/paginas/manutencao/manutencao.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["ConfirmationService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6_app_servicos_ab_mov_manutencao_linha_service__["a" /* ABMOVMANUTENCAOLINHAService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_app_servicos_ab_mov_manutencao_linha_service__["a" /* ABMOVMANUTENCAOLINHAService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5_app_servicos_ab_mov_manutencao_cab_service__["a" /* ABMOVMANUTENCAOCABService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_servicos_ab_mov_manutencao_cab_service__["a" /* ABMOVMANUTENCAOCABService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3_app_servicos_ab_mov_manutencao_service__["a" /* ABMOVMANUTENCAOService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_servicos_ab_mov_manutencao_service__["a" /* ABMOVMANUTENCAOService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_app_menu_sidebar_metadata__["a" /* AppGlobals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_menu_sidebar_metadata__["a" /* AppGlobals */]) === "function" && _l || Object])
], ManutencaoComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
//# sourceMappingURL=manutencao.component.js.map

/***/ }),

/***/ "../../../../../src/app/paginas/manutencao/manutencaoform/manutencaoform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#container label{\r\n    width: 98px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/paginas/manutencao/manutencaoform/manutencaoform.component.html":
/***/ (function(module, exports) {

module.exports = "<app-controlos (anteriorbt)=\"anterior()\" (duplicarbt)=\"duplicar()\" (seguintebt)=\"seguinte()\" (apagarbt)=\"apagar()\"></app-controlos>\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\" style=\"height: 54px;\" data-background-color=\"red\">\n            <h4 class=\"title\">Manutenção de Arranque</h4>\n            <button [disabled]=\"novo\" title=\"Imprimir em folhas separadas\" type=\"button\" style=\"color: black; float:right; margin-top: -19px; background-color: #ccc1c1;\" class=\"btn btn-white btn-round btn-just-icon\"\n              (click)=\"imprimir('manutencao_separadas',num_manutencao)\">\n                <i class=\"material-icons\">print</i><div class=\"ripple-container\"></div>\n              </button>\n            <button  [disabled]=\"novo\" title=\"Imprimir na mesma folha\" type=\"button\" style=\"color:white; float:right; margin-top: -19px;background-color: #ccc1c1;\" class=\"btn btn-white btn-round btn-just-icon\"\n              (click)=\"imprimir('manutencao_juntas',num_manutencao)\">\n                <i class=\"material-icons\">print</i><div class=\"ripple-container\"></div>\n              </button>\n          </div>\n          <div class=\"card-content\">\n            <form id=\"formArranque\" (ngSubmit)=\"gravar()\" ngNativeValidate>\n              <div class=\"row\" style=\"border-bottom: 3px solid #ddd; margin-bottom: 10px;\">\n                <div class=\"col-md-1\">\n                  <div [ngClass]=\"num_manutencao == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating \">\n                    <label style=\"font-size: 14px;\">Nº Manutenção</label>\n                    <input disabled type=\"text\" style=\"background: white;\" [disabled]=\"true\" class=\"form-control\" style=\" margin-top: -13px; padding-bottom: 0px;\"\n                      [(ngModel)]=\"num_manutencao\" [ngModelOptions]=\"{standalone: true}\">\n                  </div>\n                </div>\n                <div class=\"col-md-2\">\n                  <div class=\"form-group form-black label-floating\">\n                    <label style=\"font-size: 14px;\">Tipo Manutenção</label>\n                    <p-dropdown [options]=\"tipo_manu\" [style]=\"{'width':'225px'}\" [(ngModel)]=\"tipo_manu_id\" [ngModelOptions]=\"{standalone: true}\"\n                      [disabled]=\"!novo\" [required]=\"true\"></p-dropdown>\n                  </div>\n                </div>\n                <div class=\"col-md-2\">\n                  <div [ngClass]=\"data_planeamento == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating\">\n                    <label style=\"font-size: 14px;\">Data Planeamento</label>\n                    <input disabled type=\"text\" style=\"background: white;\" [disabled]=\"true\" class=\"form-control\" style=\" margin-top: -13px; padding-bottom: 0px;\"\n                      [(ngModel)]=\"data_planeamento\" [ngModelOptions]=\"{standalone: true}\">\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div [ngClass]=\"responsavel == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating\">\n                    <label style=\"font-size: 14px;\">Responsável Planeamento</label>\n                    <input disabled type=\"text\" style=\"background: white;\" [disabled]=\"true\" class=\"form-control\" style=\" margin-top: -13px; padding-bottom: 0px;\"\n                      [(ngModel)]=\"responsavel\" [ngModelOptions]=\"{standalone: true}\">\n                  </div>\n                </div>\n                <div class=\"col-md-1\">\n                  <div class=\"form-group form-black label-floating\">\n                    <label style=\"font-size: 14px;\">Linha</label>\n                    <p-dropdown [style.background]=\"cor_linha\" [options]=\"linhas\" [style]=\"{'width':'100px'}\" [(ngModel)]=\"linha\" [ngModelOptions]=\"{standalone: true}\"\n                      [disabled]=\"!novo\" [required]=\"true\"></p-dropdown>\n                  </div>\n                </div>\n                <div class=\"col-md-1\">\n                  <div class=\"form-group form-black label-floating\">\n                    <label style=\"font-size: 14px;\">Turno</label>\n                    <p-dropdown [options]=\"turno\" [style]=\"{'width':'100px'}\" [(ngModel)]=\"id_turno\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"!novo\"\n                      [required]=\"true\"></p-dropdown>\n                  </div>\n                </div>\n                <div class=\"col-md-2\">\n                  <div [ngClass]=\"estado == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating\">\n                    <label style=\"font-size: 14px;\">Estado</label>\n                    <input disabled type=\"text\" style=\"background: white;\" [disabled]=\"true\" class=\"form-control\" style=\" margin-top: -13px; padding-bottom: 0px;\"\n                      [(ngModel)]=\"estado\" [ngModelOptions]=\"{standalone: true}\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\" *ngFor=\"let item of arrayForm\" id=\"container\">\n                <form (ngSubmit)=\"gravarlinha(item.pos)\" ngNativeValidate>\n                  <div class=\"col-md-12 well\">\n                    <div class=\"col-md-4 \" style=\"width: 35%; padding:0px;\">\n                      <div class=\"form-group form-black label-floating\">\n                        <label style=\"font-size: 14px;\">Banho</label>\n                        <p-dropdown [filter]=\"true\" [options]=\"banhos\" [style]=\"{'width':'250px'}\" [(ngModel)]=\"item.id_banho\" [ngModelOptions]=\"{standalone: true}\"\n                          (onChange)=\"nome_tinas($event,item.pos)\" [required]=\"true\" [disabled]=\"!modoedicao\"></p-dropdown>\n                      </div>\n                      <div class=\"col-md-12  form-group form-black label-floating\" style=\"padding: 0px;\">\n                        <div class=\" col-md-6 form-group form-black label-floating\" style=\"padding: 0px;\">\n                          <label style=\"font-size: 14px; float: left;\">Tina</label>\n                          <input type=\"text\" class=\"form-control\" [disabled]=\"true\" style=\"width: 30%; float: left; margin-top: -13px; margin-left: 8px; padding-bottom: 0px; padding-top: 13px;\"\n                            [(ngModel)]=\"item.tina\" [ngModelOptions]=\"{standalone: true}\">\n                        </div>\n                        <div class=\"col-md-6 form-group form-black label-floating\" style=\"padding: 0px;\">\n                          <label style=\"font-size: 14px; float: left; width: auto;\">Capacidade</label>\n                          <input type=\"text\" style=\"background: white;\" [disabled]=\"true\" class=\"form-control\" style=\"width: 30%; float: left; margin-top: -13px; margin-left: 8px; padding-bottom: 0px; padding-top: 13px;\"\n                            [(ngModel)]=\"item.capacidade\" [ngModelOptions]=\"{standalone: true}\">\n                        </div>\n                      </div>\n                      <div class=\"col-md-12 form-group form-black label-floating\" style=\"padding: 0px;\">\n                        <label style=\"font-size: 14px; float: left;\">Cod. Análise</label>\n                        <input type=\"text\" style=\"background: white;\" [disabled]=\"true\" class=\"form-control\" style=\"width: 50%; float: left; margin-top: -13px; margin-left: 8px; padding-bottom: 0px; padding-top: 13px;\"\n                          [(ngModel)]=\"item.nome_analise\" [ngModelOptions]=\"{standalone: true}\">\n                        <button id=\"pesquisa\" (click)=\"showDialog($event,item.pos)\" class=\"btn btn-white btn-round btn-just-icon\" style=\"padding: 3px 3px; margin: auto;\"\n                          type=\"button\" [disabled]=\"!modoedicao\">\n                              <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\n                          </button>\n                      </div>\n                      <div class=\"col-md-12 form-group form-black label-floating\" style=\"padding: 0px;\">\n                        <label style=\"font-size: 14px; float: left;\">Data/Hora Prev</label>\n                        <input type=\"text\" style=\"background: white;\" [disabled]=\"true\" class=\"form-control\" style=\"width: 50%; float: left; margin-top: -13px; margin-left: 8px; padding-bottom: 0px; padding-top: 13px;\"\n                          [(ngModel)]=\"item.data_pre\" [ngModelOptions]=\"{standalone: true}\">\n                      </div>\n                      <div class=\"col-md-12  form-group form-black label-floating\" style=\"padding: 0px;\">\n                        <label style=\"font-size: 14px;\">Tipo Adição</label>\n                        <p-dropdown (onChange)=\"verifica_adicao($event,item.pos)\" [options]=\"tipo_adicao\" [style]=\"{'width':'250px'}\" [(ngModel)]=\"item.tipo_adicao\"\n                          [ngModelOptions]=\"{standalone: true}\" [required]=\"true\" [disabled]=\"!modoedicao\"></p-dropdown>\n                      </div>\n                      <div class=\"col-md-12  form-group form-black label-floating\" style=\"padding: 0px;\">\n                        <div class=\"col-md-9 form-group form-black label-floating\" style=\"padding: 0px;\">\n                          <div style=\"float: left;\">\n                            <label style=\"font-size: 14px;\">Intervalo Oper.</label>\n                            <p-dropdown #op [options]=\"intervalo_op\" [disabled]=\"item.disable_op || !modoedicao\" [style]=\"{'width':'200px'}\" [(ngModel)]=\"item.interva_ope\"\n                              [ngModelOptions]=\"{standalone: true}\" [required]=\"true\"></p-dropdown>\n                          </div>\n                          <div *ngIf=\"op.value != null && op.value != ''\" style=\"float: left; margin-left: 10px; padding-top: 5px;\">\n                            <button (click)=\"preencher_id195(item.id,item.id_195)\" [hidden]=\"op.value.id195 == false \" class=\"btn btn-white btn-round btn-just-icon\"\n                              style=\"padding: 3px 3px; margin: auto;\" type=\"button\">\n                              <i style=\"color: red;\" class=\"material-icons\">insert_drive_file</i><div class=\"ripple-container\"></div>\n                          </button>\n                          </div>\n                        </div>\n                        <div class=\"col-md-3 form-group form-black label-floating\" style=\"padding: 0px;\">\n                          <label style=\"width: auto;font-size: 14px; float: left; margin-top: 11px; margin-right: 12px;\">ID</label>\n                          <input type=\"text\" style=\"background: white; width: 40%;\" class=\"form-control\" [(ngModel)]=\"item.id_195\" [ngModelOptions]=\"{standalone: true}\"\n                            [disabled]=\"!modoedicao\">\n                        </div>\n                      </div>\n                      <div class=\"col-md-12  form-group form-black label-floating\" style=\"padding: 0px;\">\n                        <label style=\"font-size: 14px; float: left; margin-top: 11px; margin-right: 4px;\">Obs. Planea.</label>\n                        <input type=\"text\" style=\"background: white; width: 77%;\" class=\"form-control\" [(ngModel)]=\"item.obs_pla\" [ngModelOptions]=\"{standalone: true}\"\n                          [disabled]=\"!modoedicao\">\n                      </div>\n                      <div class=\"col-md-12  form-group form-black label-floating\" style=\"padding: 0px;\">\n                        <label style=\"font-size: 14px; float: left; margin-top: 11px; margin-right: 4px;\">Obs. Prepara.</label>\n                        <input type=\"text\" style=\"background: white; width: 77%;\" class=\"form-control\" [(ngModel)]=\"item.obs_prep\" [ngModelOptions]=\"{standalone: true}\"\n                          [disabled]=\"!modoedicao && item.preparado\">\n                      </div>\n                      <div class=\"col-md-12  form-group form-black label-floating\" style=\"padding: 0px;\">\n                        <label style=\"font-size: 14px; float: left; margin-top: 11px; margin-right: 4px;\">Obs. Exec.</label>\n                        <input type=\"text\" style=\"background: white; width: 77%;\" class=\"form-control\" [(ngModel)]=\"item.obs_exec\" [ngModelOptions]=\"{standalone: true}\"\n                          [disabled]=\"(!modoedicao && !item.preparado) || item.executado\">\n                      </div>\n                      <div class=\"col-md-12 form-group form-black label-floating\" style=\"padding: 0px;\">\n                        <div class=\" col-md-6 form-group form-black label-floating\" style=\"padding: 0px;\">\n                          <label style=\"font-size: 14px; float: left;\">Resp. Exec</label>\n                          <input type=\"text\" style=\"background: white;\" [disabled]=\"true\" class=\"form-control\" style=\"width: 55%; float: left; margin-top: -13px; margin-left: 8px; padding-bottom: 0px; padding-top: 13px;\"\n                            [(ngModel)]=\"item.resp_exe\" [ngModelOptions]=\"{standalone: true}\">\n                        </div>\n                        <div class=\" col-md-6 form-group form-black label-floating\" style=\"padding: 0px;\">\n                          <label style=\"font-size: 14px; float: left;\">Data/Hora Exec</label>\n                          <input type=\"text\" style=\"background: white;\" [disabled]=\"true\" class=\"form-control\" style=\"width: 56%; float: left; margin-top: -13px; margin-left: 8px; padding-bottom: 0px; padding-top: 13px;\"\n                            [(ngModel)]=\"item.data_exc\" [ngModelOptions]=\"{standalone: true}\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-md-7\" style=\"width: 60%; padding:0px;\">\n                      <p-dataTable [value]=\"item.aditivos\" dataKey=\"id\">\n                        <p-column styleclass=\"text-danger\" field=\"nome\" header=\"Aditivo\">\n                          <ng-template pTemplate=\"body\" let-col2 let-row2=\"rowData \">\n                            <input type=\"text\" style=\"background: white;\" class=\"form-control\" [(ngModel)]=\"row2['nome']\" [ngModelOptions]=\"{standalone: true}\"\n                              [disabled]=\"true\">\n                          </ng-template>\n                        </p-column>\n                        <p-column styleclass=\"text-danger\" field=\"valor1\" header=\"Valor 1\" [style]=\"{'width':'11%'}\">\n                          <ng-template pTemplate=\"body\" let-col3 let-row3=\"rowData \">\n                            <input type=\"text\" style=\"background: white; text-align: center;\" class=\"form-control\" [(ngModel)]=\"row3['valor1']\" [ngModelOptions]=\"{standalone: true}\"\n                              [disabled]=\"!modoedicao\" [required]=\"true\">\n                          </ng-template>\n                        </p-column>\n                        <p-column styleclass=\"text-danger\" field=\"unidade1\" header=\"Unid. 1\" [style]=\"{'width':'11%'}\">\n                          <ng-template pTemplate=\"body\" let-col4 let-row4=\"rowData \">\n                            <p-dropdown [filter]=\"true\" [options]=\"medidas\" [style]=\"{'width':'100%'}\" [(ngModel)]=\"row4['unidade1']\" [ngModelOptions]=\"{standalone: true}\"\n                              [disabled]=\"!modoedicao\" [required]=\"true\"> </p-dropdown>\n                          </ng-template>\n                        </p-column>\n                        <p-column styleclass=\"text-danger\" field=\"valor2\" header=\"Valor 2\" [style]=\"{'width':'11%'}\">\n                          <ng-template pTemplate=\"body\" let-col5 let-row5=\"rowData \">\n                            <input type=\"text\" style=\"background: white;  text-align: center;\" class=\"form-control\" [(ngModel)]=\"row5['valor2']\" [ngModelOptions]=\"{standalone: true}\"\n                              [disabled]=\"!modoedicao\">\n                          </ng-template>\n                        </p-column>\n                        <p-column styleclass=\"text-danger\" field=\"unidade2\" header=\"Unid. 2\" [style]=\"{'width':'11%'}\">\n                          <ng-template pTemplate=\"body\" let-col6 let-row6=\"rowData \">\n                            <p-dropdown [filter]=\"true\" [options]=\"medidas\" [style]=\"{'width':'100%'}\" [(ngModel)]=\"row6['unidade2']\" [ngModelOptions]=\"{standalone: true}\"\n                              [disabled]=\"!modoedicao\" [required]=\"true\"> </p-dropdown>\n                          </ng-template>\n                        </p-column>\n                        <p-column styleclass=\"text-danger\" field=\"obs\" header=\"Observações\">\n                          <ng-template pTemplate=\"body\" let-col let-row=\"rowData \">\n                            <input type=\"text\" style=\"background: white;\" class=\"form-control\" [(ngModel)]=\"row['obs']\" [ngModelOptions]=\"{standalone: true}\"\n                              [disabled]=\"!modoedicao\">\n                          </ng-template>\n                        </p-column>\n                      </p-dataTable>\n                    </div>\n                    <div class=\"col-md-1\" style=\"padding:0px; text-align: -webkit-center; display: inline-grid; width: 5%; height: 100%; position: absolute;\">\n                      <div style=\" margin: auto 0;\">\n                        <button [disabled]=\"item.id == null\" type=\"button\" style=\"color: black;\" class=\"btn btn-white btn-round btn-just-icon\" (click)=\"imprimir('manutencao_individual',item.id)\">\n                          <i class=\"material-icons\">print</i><div class=\"ripple-container\"></div>\n                        </button>\n                        <button [hidden]=\"planeado\" class=\"btn btn-white btn-round btn-just-icon\" style=\"color: black;\" type=\"submit\" [disabled]=\"!modoedicao\">\n                          <i class=\"material-icons\">save</i><div class=\"ripple-container\"></div>\n                        </button>\n                        <button [hidden]=\"planeado\" type=\"button\" style=\"color: black;\" class=\"btn btn-white btn-round btn-just-icon\" (click)=\"apagarlinha(item.pos,item.id)\"\n                          [disabled]=\"!modoedicao\">\n                          <i class=\"material-icons\">delete</i><div class=\"ripple-container\"></div>\n                        </button>\n                      </div>\n                      <div class=\"[ form-group ]\" [hidden]=\"!planeado\">\n                        <input (change)=\"preparar_linha(item.pos,item.id,item.id_manu)\" type=\"checkbox\" name=\"fancy-checkbox-success{{item.pos}}\"\n                          id=\"fancy-checkbox-success{{item.pos}}\" [(ngModel)]=\"item.preparado\" [disabled]=\"item.preparado\"\n                          [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\" />\n                        <div class=\"[ btn-group ]\" style=\"margin-right: 37px;\">\n                          <label style=\" padding: 2px 24px 5px 16px; font-size: 24px; background-color: green;\" for=\"fancy-checkbox-success{{item.pos}}\"\n                            class=\"[ btn btn-success ] \" id=\"burst-8\">\n                           <span class=\"[ glyphicon glyphicon-ok ]\" id=\"burst-9\"></span>\n                          <span> </span>\n                        </label>\n                        </div>\n                      </div>\n                      <div class=\"[ form-group ]\" [hidden]=\"!preparado\">\n                        <input (change)=\"confirmar_linha(item.pos,item.id,item.id_manu)\" type=\"checkbox\" name=\"fancy-checkbox-success1{{item.pos}}\"\n                          id=\"fancy-checkbox-success1{{item.pos}}\" [(ngModel)]=\"item.executado\" [disabled]=\"item.executado\"\n                          [ngModelOptions]=\"{standalone: true}\" autocomplete=\"off\" />\n                        <div class=\"[ btn-group ]\" style=\"margin-right: 37px;\">\n                          <label style=\" padding: 7px 39px 3px 13px; font-size: 24px; background-color: #c1c1c1;\" for=\"fancy-checkbox-success1{{item.pos}}\"\n                            class=\"[ btn btn-success ]\">\n                           <span class=\"[ glyphicon glyphicon-ok ]\"></span>\n                          <span> </span>\n                        </label>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </form>\n              </div>\n              <div class=\"row\" style=\"border-top: 2px solid #ddd;\" [hidden]=\"!planeamento\">\n                <a (click)=\"novalinha()\" [ngClass]=\"!modoedicao ? 'not-active' : null\" style=\"color: black; cursor:pointer; margin-left:10px;\"\n                  title=\"Adicionar nova linha\">\n                         <i class=\"material-icons\">playlist_add</i>\n                        </a>\n              </div>\n              <button type=\"reset\" (click)=\"backview()\" class=\"btn btn-danger pull-right\" [hidden]=\"!modoedicao\">Cancelar</button>\n              <button type=\"submit\" class=\"btn btn-success pull-right\" [hidden]=\"!novo\">Gravar</button>\n              <button type=\"button\" (click)=\"concluir()\" class=\"btn btn-success pull-right\" [hidden]=\"!planeamento || ( executado && preparado)\">Concluir Planeamento</button>\n              <div class=\"clearfix\"></div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<button class=\"btn btn-danger btn-block\" #inputnotifi [hidden]=\"true\" onclick=\"demo.showNotification('top','right','Inseriu com Sucesso!',2)\"></button>\n<button class=\"btn btn-danger btn-block\" #inputgravou [hidden]=\"true\" onclick=\"demo.showNotification('top','right','Alterado com Sucesso!',2)\"></button>\n<button class=\"btn btn-danger btn-block\" #inputapagar [hidden]=\"true\" onclick=\"demo.showNotification('top','right','Apagado com Sucesso!',2)\"></button>\n<button class=\"btn btn-danger btn-block\" #inputerro [hidden]=\"true\" onclick=\"demo.showNotification('top','right','ERRO!! Registo não foi Gravado!',4)\"></button>\n<button #aviso_gravar data-toggle=\"modal\" [hidden]=\"true\" data-target=\"#aviso_gravar\"></button>\n\n<button class=\"btn btn-danger btn-block\" #inputgduplica [hidden]=\"true\" onclick=\"demo.showNotification('top','right','Duplicado com Sucesso!',2)\"></button>\n<button class=\"btn btn-primary btn-lg\" #dialoglinhas data-toggle=\"modal\" [hidden]=\"true\" data-target=\"#myModallinhas\" data-backdrop=\"false\"></button>\n\n<!-- Modal Linhas-->\n<div class=\"modal fade\" id=\"myModallinhas\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n                       <span style=\"font-size: 30px;\" aria-hidden=\"true\">&times;</span>\n                       <span  class=\"sr-only\">Close</span>\n                </button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">\n          Análises\n        </h4>\n        <span style=\"color:red;\">*clique em cima da linha para seleccionar uma análise</span>\n      </div>\n      <!-- Modal Body -->\n      <p-dataTable [value]=\"pesquisa_analise\" dataKey=\"id\" [rows]=\"15\" [paginator]=\"true\" [pageLinks]=\"3\" selectionMode=\"single\"\n        [stacked]=\"stacked\" (onRowSelect)=\"seleciona($event)\" [rowsPerPageOptions]=\"[15,20,30,'todos']\">\n        <p-column [sortable]=\"true\" styleclass=\"text-danger\" field=\"linha\" header=\"Linha\">\n          <ng-template let-car=\"rowData\" pTemplate=\"body\">\n            <div [style.background]=\"car['cor']\">\n              {{car['linha']}}\n            </div>\n          </ng-template>\n        </p-column>\n        <p-column [sortable]=\"true\" [filter]=\"true\" styleclass=\"text-danger\" field=\"id\" header=\"Código da Análise\"></p-column>\n        <p-column [sortable]=\"true\" [filter]=\"true\" styleclass=\"text-danger\" field=\"nome\" header=\"Banho\"></p-column>\n        <p-column [sortable]=\"true\" [filter]=\"true\" styleclass=\"text-danger\" field=\"tina\" header=\"Tina\"></p-column>\n        <p-column [sortable]=\"true\" [filter]=\"true\" styleclass=\"text-danger\" field=\"data\" header=\"Data Registo\"></p-column>\n      </p-dataTable>\n      <!-- Modal Footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" #closedialoglinha data-dismiss=\"modal\">Fechar</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<button type=\"button\" [hidden]=\"true\" #waitingDialog class=\"btn btn-primary\" onclick=\"waitingDialog.show('A Duplicar Registo', {dialogSize: 'md'});\"></button>\n<button type=\"button\" [hidden]=\"true\" #waitingDialogclose class=\"btn btn-primary\" onclick=\"waitingDialog.hide();\"></button>"

/***/ }),

/***/ "../../../../../src/app/paginas/manutencao/manutencaoform/manutencaoform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_menu_sidebar_metadata__ = __webpack_require__("../../../../../src/app/menu/sidebar.metadata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_servicos_ab_unidade_medida_service__ = __webpack_require__("../../../../../src/app/servicos/ab-unidade-medida.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_servicos_ab_dic_linha_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-linha.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_servicos_ab_dic_banho_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-banho.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_servicos_ab_dic_tipo_manutencao_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-tipo-manutencao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_servicos_ab_dic_turno_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-turno.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_servicos_ab_mov_manutencao_service__ = __webpack_require__("../../../../../src/app/servicos/ab-mov-manutencao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_entidades_AB_MOV_MANUTENCAO__ = __webpack_require__("../../../../../src/app/entidades/AB_MOV_MANUTENCAO.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_servicos_ab_dic_banho_aditivo_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-banho-aditivo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_servicos_ab_dic_tipo_adicao_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-tipo-adicao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_servicos_ab_dic_tipo_operacao_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-tipo-operacao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_entidades_AB_MOV_MANUTENCAO_LINHA__ = __webpack_require__("../../../../../src/app/entidades/AB_MOV_MANUTENCAO_LINHA.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_app_entidades_AB_MOV_MANUTENCAO_CAB__ = __webpack_require__("../../../../../src/app/entidades/AB_MOV_MANUTENCAO_CAB.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_app_servicos_ab_mov_analise_service__ = __webpack_require__("../../../../../src/app/servicos/ab-mov-analise.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_app_servicos_ab_mov_manutencao_cab_service__ = __webpack_require__("../../../../../src/app/servicos/ab-mov-manutencao-cab.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_app_servicos_ab_mov_manutencao_linha_service__ = __webpack_require__("../../../../../src/app/servicos/ab-mov-manutencao-linha.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_app_servicos_ad_mov_reg_param_operacao_service__ = __webpack_require__("../../../../../src/app/servicos/ad-mov-reg-param-operacao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_app_entidades_AD_MOV_REG_PARAM_OPERACAO__ = __webpack_require__("../../../../../src/app/entidades/AD_MOV_REG_PARAM_OPERACAO.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_app_servicos_ab_dic_componente_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-componente.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManutencaoformComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
























var ManutencaoformComponent = (function () {
    function ManutencaoformComponent(ADMOVREGPARAMOPERACAOService, ABMOVMANUTENCAOLINHAService, ABMOVMANUTENCAOCABService, ABMOVANALISEService, ABDICTIPOOPERACAOService, ABDICTIPOADICAOService, ABDICBANHOADITIVOService, ABMOVMANUTENCAOService, ABDICTURNOService, ABDICTIPOMANUTENCAOService, confirmationService, ABDICCOMPONENTEService, ABDICBANHOService, ABDICLINHAService, globalVar, ABUNIDADADEMEDIDAService, location, router, renderer, route) {
        this.ADMOVREGPARAMOPERACAOService = ADMOVREGPARAMOPERACAOService;
        this.ABMOVMANUTENCAOLINHAService = ABMOVMANUTENCAOLINHAService;
        this.ABMOVMANUTENCAOCABService = ABMOVMANUTENCAOCABService;
        this.ABMOVANALISEService = ABMOVANALISEService;
        this.ABDICTIPOOPERACAOService = ABDICTIPOOPERACAOService;
        this.ABDICTIPOADICAOService = ABDICTIPOADICAOService;
        this.ABDICBANHOADITIVOService = ABDICBANHOADITIVOService;
        this.ABMOVMANUTENCAOService = ABMOVMANUTENCAOService;
        this.ABDICTURNOService = ABDICTURNOService;
        this.ABDICTIPOMANUTENCAOService = ABDICTIPOMANUTENCAOService;
        this.confirmationService = confirmationService;
        this.ABDICCOMPONENTEService = ABDICCOMPONENTEService;
        this.ABDICBANHOService = ABDICBANHOService;
        this.ABDICLINHAService = ABDICLINHAService;
        this.globalVar = globalVar;
        this.ABUNIDADADEMEDIDAService = ABUNIDADADEMEDIDAService;
        this.location = location;
        this.router = router;
        this.renderer = renderer;
        this.route = route;
        this.pesquisa_analise = [];
        this.manutencao = [];
        this.pos = 0;
        this.arrayForm = [];
        this.modoedicao = false;
        this.planeamento = true;
        this.planeado = false;
        this.preparado = false;
    }
    ManutencaoformComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalVar.setapagar(true);
        this.globalVar.seteditar(true);
        this.globalVar.setvoltar(true);
        this.globalVar.seteditar(true);
        this.globalVar.setseguinte(true);
        this.globalVar.setanterior(true);
        this.globalVar.setpesquisar(true);
        this.globalVar.setduplicar(true);
        // this.pos=3;
        /* this.arrayForm = [{pos: 1, id: null, id_banho: 1, tina: 2, capacidade: "11 L", aditivos: [{ id: 1, valor: 10, unidade: "aa", obs: "" }] },
         {pos: 2, id: null, id_banho: 1, tina: 2, capacidade: "11 L", aditivos: [{ id: 1, valor: 10, unidade: "aa", obs: "" }] }];*/
        this.user = JSON.parse(localStorage.getItem('userapp'))["id"];
        var url = this.router.routerState.snapshot.url;
        url = url.slice(1);
        var urlarray = url.split("/");
        if (urlarray[1].match("editar") || urlarray[1].match("view")) {
            this.novo = false;
            var id;
            var sub = this.route
                .queryParams
                .subscribe(function (params) {
                id = params['id'] || 0;
            });
            //preenche array para navegar nas manutenções 
            this.ABMOVMANUTENCAOService.getAll().subscribe(function (response) {
                for (var x in response) {
                    _this.manutencao.push(response[x][0].id_MANUTENCAO);
                }
                _this.i = _this.manutencao.indexOf(+id);
                _this.inicia(_this.manutencao[_this.i]);
            }, function (error) { console.log(error); });
        }
        if (urlarray[1] != null) {
            if (urlarray[1].match("editar")) {
                this.globalVar.setseguinte(false);
                this.globalVar.setanterior(false);
                this.globalVar.setapagar(false);
                this.globalVar.setcriar(true);
                this.globalVar.setduplicar(true);
                this.modoedicao = true;
                this.planeamento = true;
            }
            else if (urlarray[1].match("novo")) {
                this.globalVar.setduplicar(false);
                this.globalVar.setseguinte(false);
                this.globalVar.setanterior(false);
                this.globalVar.setapagar(false);
                this.globalVar.setcriar(false);
                this.novo = true;
                this.globalVar.seteditar(false);
                this.modoedicao = true;
                var dirtyFormID = 'formArranque';
                var resetForm = document.getElementById(dirtyFormID);
                resetForm.reset();
                this.data_actual = new Date();
                this.data_planeamento = this.data_actual.toLocaleString();
                this.responsavel = JSON.parse(localStorage.getItem('userapp'))["nome"];
                this.estado = "Em Planeamento";
                this.planeamento = false;
                this.novalinha();
            }
            else if (urlarray[1].match("view")) {
                this.globalVar.setcriar(true);
                this.modoedicao = false;
                this.planeamento = false;
            }
        }
        //preenche combobox unidades
        this.ABUNIDADADEMEDIDAService.getAll().subscribe(function (response) {
            _this.medidas = [];
            for (var x in response) {
                _this.medidas.push({ label: response[x].medida, value: response[x].id_MEDIDA });
            }
            _this.medidas = _this.medidas.slice();
        }, function (error) { return console.log(error); });
        //preenche combobox linhas
        this.ABDICLINHAService.getAll().subscribe(function (response) {
            _this.linhas = [];
            _this.linhas.push({ label: "Sel. Linha", value: "" });
            for (var x in response) {
                _this.linhas.push({ label: response[x].nome_LINHA, value: { id: response[x].id_LINHA, cor: response[x].cor } });
            }
            if (_this.globalVar.getlinha() != 0)
                _this.linha = _this.linhas.find(function (item) { return item.value.id == _this.globalVar.getlinha(); }).value;
            _this.linhas = _this.linhas.slice();
        }, function (error) { return console.log(error); });
        //preenche combobox Tipo Manutenção
        this.ABDICTIPOMANUTENCAOService.getAll().subscribe(function (response) {
            _this.tipo_manu = [];
            _this.tipo_manu.push({ label: "Sel. Tipo Manutenção", value: "" });
            for (var x in response) {
                _this.tipo_manu.push({ label: response[x].nome_TIPO_MANUTENCAO, value: response[x].id_TIPO_MANUTENCAO });
            }
            _this.tipo_manu = _this.tipo_manu.slice();
        }, function (error) { return console.log(error); });
        //preenche tabela das análises
        this.ABMOVANALISEService.getAll2().subscribe(function (response) {
            for (var x in response) {
                _this.pesquisa_analise.push({ id: response[x][0].id_ANALISE, linha: response[x][0].id_LINHA, data: new Date(response[x][0].data_ANALISE).toLocaleDateString(), nome: response[x][2].nome_BANHO, tina: response[x][3].cod_TINA, cor: response[x][1].cor });
            }
            _this.pesquisa_analise = _this.pesquisa_analise.slice();
        }, function (error) { return console.log(error); });
        //preenche combobox Turno
        this.ABDICTURNOService.getAll().subscribe(function (response) {
            _this.turno = [];
            _this.turno.push({ label: "Sel. Turno", value: "" });
            for (var x in response) {
                _this.turno.push({ label: response[x].nome_TURNO, value: response[x].id_TURNO });
            }
            _this.turno = _this.turno.slice();
        }, function (error) { return console.log(error); });
        //preenche combobox Tipo Adição
        this.ABDICTIPOADICAOService.getAll().subscribe(function (response) {
            _this.tipo_adicao = [];
            _this.tipo_adicao.push({ label: "Sel. Tipo Adição", value: "" });
            for (var x in response) {
                _this.tipo_adicao.push({ label: response[x].nome_TIPO_ADICAO, value: { id: response[x].id_TIPO_ADICAO, id195: response[x].id_TIPO_OPERACAO } });
            }
            _this.tipo_adicao = _this.tipo_adicao.slice();
        }, function (error) { return console.log(error); });
        //preenche combobox Intervalo Oper.
        this.ABDICTIPOOPERACAOService.getAll().subscribe(function (response) {
            _this.intervalo_op = [];
            _this.intervalo_op.push({ label: "Sel. Intervalo Oper.", value: "" });
            for (var x in response) {
                _this.intervalo_op.push({ label: response[x].nome_TIPO_OPERACAO, value: { id: response[x].id_TIPO_OPERACAO, id195: response[x].id195 } });
            }
            _this.intervalo_op = _this.intervalo_op.slice();
        }, function (error) { return console.log(error); });
    };
    ManutencaoformComponent.prototype.inicia = function (id) {
        var _this = this;
        this.planeado = false;
        this.preparado = false;
        this.planeamento = false;
        this.ABMOVMANUTENCAOService.getbyID(id).subscribe(function (response) {
            var count = Object.keys(response).length;
            if (count > 0) {
                for (var x in response) {
                    _this.manutencao_dados = response[x][0];
                    _this.num_manutencao = response[x][0].id_MANUTENCAO;
                    _this.tipo_manu_id = response[x][0].id_TIPO_MANUTENCAO;
                    _this.data_planeamento = new Date(new Date(response[x][0].data_PLANEAMENTO).toDateString() + " " + response[x][0].hora_PLANEAMENTO.slice(0, 5)).toLocaleString();
                    _this.responsavel = response[x][4].nome_UTILIZADOR;
                    _this.linha = _this.linhas.find(function (item) { return item.value.id === response[x][0].id_LINHA; }).value;
                    _this.id_turno = response[x][0].id_TURNO;
                    _this.estado = response[x][0].estado;
                    _this.cor_linha = response[x][1].cor;
                    if (_this.estado == "Planeado") {
                        _this.planeado = true;
                    }
                    else if (_this.estado == "Preparado") {
                        _this.preparado = true;
                    }
                    else if (_this.estado == "Em Planeamento") {
                        _this.planeamento = true;
                    }
                }
                _this.preenche_banhos(id);
            }
        }, function (error) { return console.log(error); });
    };
    //carrega linhas
    ManutencaoformComponent.prototype.carregarlinhas = function (id) {
        var _this = this;
        this.arrayForm = [];
        this.ABMOVMANUTENCAOCABService.getbyID(id).subscribe(function (response) {
            var count = Object.keys(response).length;
            if (count > 0) {
                for (var x in response) {
                    var data_prev = new Date(new Date(response[x][0].data_PREVISTA).toDateString() + ' ' + response[x][0].hora_PREVISTA.slice(0, 5));
                    var data_exec = null;
                    var id_adicao = _this.tipo_adicao.find(function (item) { return item.value.id == response[x][0].id_TIPO_ADICAO; }).value;
                    var int_op = _this.intervalo_op.find(function (item) { return item.value.id == response[x][0].id_TIPO_OPERACAO; }).value;
                    var id_banho = _this.banhos.find(function (item) { return item.value.id == response[x][0].id_BANHO; }).value;
                    var nome_analise = "";
                    var executado = false;
                    var preparado = false;
                    var disable = false;
                    if (response[x][0].id_ANALISE != "" && response[x][0].id_ANALISE != null)
                        nome_analise = response[x][0].id_ANALISE + ' - ' + response[x][1];
                    if (id_adicao.id195 != "" && id_adicao.id195 != null)
                        disable = true;
                    if (response[x][0].data_EXECUCAO != null) {
                        data_exec = new Date(new Date(response[x][0].data_EXECUCAO).toDateString() + ' ' + response[x][0].hora_EXECUCAO.slice(0, 5)).toLocaleString();
                        executado = true;
                    }
                    if (response[x][0].data_PREPARACAO != null) {
                        preparado = true;
                    }
                    _this.pos++;
                    _this.arrayForm.push({
                        executado: executado, preparado: preparado, obs_prep: response[x][0].obs_PREPARACAO,
                        id_manu: response[x][0].id_MANUTENCAO, data: data_prev, cod_analise: response[x][0].id_ANALISE, nome_analise: nome_analise, disable_op: disable,
                        pos: _this.pos, id: response[x][0].id_MANUTENCAO_CAB, id_banho: id_banho, data_pre: data_prev.toLocaleString(), tipo_adicao: id_adicao,
                        interva_ope: int_op, id_195: response[x][3], obs_pla: response[x][0].obs_PLANEAMENTO, obs_exec: response[x][0].obs_EXECUCAO,
                        resp_exe: response[x][4], data_exc: data_exec,
                        id_tina: response[x][0].id_TINA, tina: response[x][0].cod_TINA, capacidade: response[x][2], aditivos: []
                    });
                    _this.carregaraditivoslinhas(response[x][0].id_MANUTENCAO_CAB, _this.pos);
                }
            }
            else {
                if (_this.modoedicao)
                    _this.novalinha();
            }
        }, function (error) { return console.log(error); });
    };
    ManutencaoformComponent.prototype.carregaraditivoslinhas = function (id, pos) {
        var _this = this;
        this.ABMOVMANUTENCAOLINHAService.getbyID(id).subscribe(function (response) {
            var count = Object.keys(response).length;
            if (count > 0) {
                for (var x in response) {
                    _this.arrayForm.find(function (item) { return item.pos == pos; }).aditivos.push({
                        id_LIN: response[x][0].id_MANUTENCAO_LIN, id: response[x][0].id_ADITIVO, nome: response[x][1].nome_COMPONENTE, valor1: response[x][0].valor1, valor2: response[x][0].valor2,
                        unidade1: response[x][0].id_UNIDADE1, unidade2: response[x][0].id_UNIDADE2, obs: response[x][0].obs_PLANEAMENTO
                    });
                }
                _this.arrayForm.find(function (item) { return item.pos == pos; }).aditivos = _this.arrayForm.find(function (item) { return item.pos == pos; }).aditivos.slice();
            }
        }, function (error) { return console.log(error); });
    };
    //adicionar novo formulário
    ManutencaoformComponent.prototype.novalinha = function () {
        var id;
        var sub = this.route
            .queryParams
            .subscribe(function (params) {
            id = params['id'] || 0;
        });
        this.pos++;
        this.arrayForm.push({
            executado: false, preparado: false, obs_prep: null,
            id_manu: id, data: new Date(), cod_analise: null, nome_analise: null, disable_op: false,
            pos: this.pos, id: null, id_banho: null, data_pre: new Date().toLocaleString(), tipo_adicao: null,
            interva_ope: null, id_195: null, obs_pla: null, obs_exec: null, resp_exe: null, data_exc: null, tina: null, id_tina: null, capacidade: null, aditivos: []
        });
    };
    //preencher nome da tina/capacidade e tabela dos aditivos
    ManutencaoformComponent.prototype.nome_tinas = function (event, pos) {
        var _this = this;
        this.arrayForm.find(function (item) { return item.pos == pos; }).tina = event.value.nome_tina;
        this.arrayForm.find(function (item) { return item.pos == pos; }).id_tina = event.value.id_tina;
        this.arrayForm.find(function (item) { return item.pos == pos; }).capacidade = event.value.capacidade;
        this.arrayForm.find(function (item) { return item.pos == pos; }).aditivos = [];
        if (event.value.id != "" && event.value.id != null) {
            this.ABDICBANHOADITIVOService.getbyID_banho(event.value.id).subscribe(function (response) {
                var count = Object.keys(response).length;
                //se existir componente Componente
                if (count > 0) {
                    for (var x in response) {
                        _this.arrayForm.find(function (item) { return item.pos == pos; }).aditivos.push({ id_LIN: null, id: response[x][1].id_COMPONENTE, nome: response[x][1].nome_COMPONENTE, valor1: null, valor2: null, unidade1: response[x][0].id_UNIDADE1, unidade2: response[x][0].id_UNIDADE2, obs: "" });
                    }
                    _this.arrayForm.find(function (item) { return item.pos == pos; }).aditivos = _this.arrayForm.find(function (item) { return item.pos == pos; }).aditivos.slice();
                }
            }, function (error) { return console.log(error); });
        }
    };
    //preenche combobox banhos
    ManutencaoformComponent.prototype.preenche_banhos = function (id) {
        var _this = this;
        this.banhos = [];
        if (this.linha["id"] != "") {
            //preenche combobox banhos
            this.ABDICBANHOService.getAllLINHAbylinha(this.linha["id"]).subscribe(function (response) {
                _this.banhos.push({ label: 'Seleccione Banho', value: "" });
                for (var x in response) {
                    _this.banhos.push({ label: response[x][0].id_BANHO + " / " + response[x][0].nome_BANHO + " - Tina: " + response[x][2].cod_TINA, value: { id: response[x][0].id_BANHO, id_tina: response[x][2].id_TINA, nome_tina: response[x][2].cod_TINA, capacidade: response[x][2].capacidade } });
                }
                _this.banhos = _this.banhos.slice();
                _this.carregarlinhas(id);
            }, function (error) { return console.log(error); });
        }
    };
    //apagar linha
    ManutencaoformComponent.prototype.apagarlinha = function (pos, id) {
        this.confirmapagarlinha(pos, id);
    };
    //popup apagarlinha
    ManutencaoformComponent.prototype.confirmapagarlinha = function (pos, id) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Tem a certeza que pretende apagar?',
            header: 'Apagar Confirmação',
            icon: 'fa fa-trash',
            accept: function () {
                if (id != null && id != "") {
                    _this.ABMOVMANUTENCAOCABService.getbyID_cab(id).subscribe(function (response) {
                        for (var x in response) {
                            var MOV_MANUTENCAO_CAB = new __WEBPACK_IMPORTED_MODULE_16_app_entidades_AB_MOV_MANUTENCAO_CAB__["a" /* AB_MOV_MANUTENCAO_CAB */];
                            MOV_MANUTENCAO_CAB = response[x][0];
                            MOV_MANUTENCAO_CAB.data_ANULACAO = new Date();
                            MOV_MANUTENCAO_CAB.utz_ANULACAO = _this.user;
                            MOV_MANUTENCAO_CAB.inativo = true;
                            if (response[x][3] != null) {
                                _this.ADMOVREGPARAMOPERACAOService.getbyID(response[x][3]).subscribe(function (resp) {
                                    var MOV_REG_PARAM_OPERACAO = new __WEBPACK_IMPORTED_MODULE_21_app_entidades_AD_MOV_REG_PARAM_OPERACAO__["a" /* AD_MOV_REG_PARAM_OPERACAO */];
                                    MOV_REG_PARAM_OPERACAO = resp[0][0];
                                    MOV_REG_PARAM_OPERACAO.data_ANULACAO = new Date();
                                    MOV_REG_PARAM_OPERACAO.utz_ANULACAO = _this.user;
                                    MOV_REG_PARAM_OPERACAO.inativo = true;
                                    _this.ADMOVREGPARAMOPERACAOService.update(MOV_REG_PARAM_OPERACAO).then(function () {
                                    }, function (error) {
                                        console.log(error);
                                        _this.simular(_this.inputerro);
                                    });
                                }, function (error) {
                                    console.log(error);
                                    _this.simular(_this.inputerro);
                                });
                            }
                            _this.ABMOVMANUTENCAOCABService.update(MOV_MANUTENCAO_CAB).then(function () {
                            }, function (error) {
                                console.log(error);
                                _this.simular(_this.inputerro);
                            });
                        }
                        _this.arrayForm.splice(index, 1);
                        _this.arrayForm = _this.arrayForm.slice();
                        _this.simular(_this.inputapagar);
                    }, function (error) { return console.log(error); });
                }
                else {
                    var index = _this.arrayForm.findIndex(function (item) { return item.pos === pos; });
                    _this.arrayForm.splice(index, 1);
                    _this.arrayForm = _this.arrayForm.slice();
                    _this.simular(_this.inputapagar);
                }
            }
        });
    };
    //bt cancelar
    ManutencaoformComponent.prototype.backview = function () {
        this.location.back();
    };
    ManutencaoformComponent.prototype.gravar = function () {
        var _this = this;
        if (!this.planeamento) {
            var MOV_MANUTENCAO = new __WEBPACK_IMPORTED_MODULE_11_app_entidades_AB_MOV_MANUTENCAO__["a" /* AB_MOV_MANUTENCAO */];
            MOV_MANUTENCAO.id_LINHA = this.linha["id"];
            MOV_MANUTENCAO.estado = this.estado;
            MOV_MANUTENCAO.hora_PLANEAMENTO = this.data_actual.toLocaleTimeString().slice(0, 5);
            MOV_MANUTENCAO.inativo = false;
            MOV_MANUTENCAO.id_TURNO = this.id_turno;
            MOV_MANUTENCAO.data_PLANEAMENTO = this.data_actual;
            MOV_MANUTENCAO.id_TIPO_MANUTENCAO = this.tipo_manu_id;
            MOV_MANUTENCAO.data_CRIA = new Date();
            MOV_MANUTENCAO.utz_CRIA = this.user;
            MOV_MANUTENCAO.utz_PLANEAMENTO = this.user;
            MOV_MANUTENCAO.inativo = false;
            this.ABMOVMANUTENCAOService.create(MOV_MANUTENCAO).subscribe(function (res) {
                _this.simular(_this.inputnotifi);
                _this.router.navigate(['manutencao/editar'], { queryParams: { id: res.id_MANUTENCAO } });
            }, function (error) {
                console.log(error);
                _this.simular(_this.inputerro);
            });
        }
    };
    ManutencaoformComponent.prototype.gravarlinha = function (pos) {
        var _this = this;
        var MOV_MANUTENCAO_CAB = new __WEBPACK_IMPORTED_MODULE_16_app_entidades_AB_MOV_MANUTENCAO_CAB__["a" /* AB_MOV_MANUTENCAO_CAB */];
        this.gravarlinhas = false;
        if (this.arrayForm.find(function (item) { return item.pos == pos; }).id != null) {
            //update
            this.ABMOVMANUTENCAOCABService.getbyID_cab(this.arrayForm.find(function (item) { return item.pos == pos; }).id).subscribe(function (response) {
                for (var x in response) {
                    MOV_MANUTENCAO_CAB = response[x][0];
                    MOV_MANUTENCAO_CAB.data_ULT_MODIF = new Date();
                    MOV_MANUTENCAO_CAB.id_ANALISE = _this.arrayForm.find(function (item) { return item.pos == pos; }).cod_analise;
                    MOV_MANUTENCAO_CAB.id_BANHO = _this.arrayForm.find(function (item) { return item.pos == pos; }).id_banho['id'];
                    MOV_MANUTENCAO_CAB.id_TIPO_ADICAO = _this.arrayForm.find(function (item) { return item.pos == pos; }).tipo_adicao['id'];
                    MOV_MANUTENCAO_CAB.id_TIPO_OPERACAO = _this.arrayForm.find(function (item) { return item.pos == pos; }).interva_ope['id'];
                    MOV_MANUTENCAO_CAB.obs_EXECUCAO = _this.arrayForm.find(function (item) { return item.pos == pos; }).obs_exec;
                    MOV_MANUTENCAO_CAB.obs_PLANEAMENTO = _this.arrayForm.find(function (item) { return item.pos == pos; }).obs_pla;
                    MOV_MANUTENCAO_CAB.id_TINA = _this.arrayForm.find(function (item) { return item.pos == pos; }).id_tina;
                    MOV_MANUTENCAO_CAB.utz_ULT_MODIF = _this.user;
                    _this.ABMOVMANUTENCAOCABService.update(MOV_MANUTENCAO_CAB).then(function () {
                        _this.gravarlinhasaditivos(response[x][0].id_MANUTENCAO_CAB, pos);
                    }, function (error) {
                        console.log(error);
                        _this.simular(_this.inputerro);
                    });
                }
            }, function (error) { return console.log(error); });
        }
        else {
            this.gravarlinhas = true;
            //insere
            MOV_MANUTENCAO_CAB.data_CRIA = new Date();
            MOV_MANUTENCAO_CAB.data_PREVISTA = this.arrayForm.find(function (item) { return item.pos == pos; }).data;
            MOV_MANUTENCAO_CAB.hora_PREVISTA = this.arrayForm.find(function (item) { return item.pos == pos; }).data.toLocaleTimeString().slice(0, 5);
            MOV_MANUTENCAO_CAB.id_ANALISE = this.arrayForm.find(function (item) { return item.pos == pos; }).cod_analise;
            MOV_MANUTENCAO_CAB.id_BANHO = this.arrayForm.find(function (item) { return item.pos == pos; }).id_banho['id'];
            MOV_MANUTENCAO_CAB.id_MANUTENCAO = this.arrayForm.find(function (item) { return item.pos == pos; }).id_manu;
            MOV_MANUTENCAO_CAB.id_TINA = this.arrayForm.find(function (item) { return item.pos == pos; }).id_tina;
            MOV_MANUTENCAO_CAB.id_TIPO_ADICAO = this.arrayForm.find(function (item) { return item.pos == pos; }).tipo_adicao['id'];
            MOV_MANUTENCAO_CAB.id_TIPO_OPERACAO = this.arrayForm.find(function (item) { return item.pos == pos; }).interva_ope['id'];
            MOV_MANUTENCAO_CAB.utz_CRIA = this.user;
            MOV_MANUTENCAO_CAB.obs_EXECUCAO = this.arrayForm.find(function (item) { return item.pos == pos; }).obs_exec;
            MOV_MANUTENCAO_CAB.obs_PLANEAMENTO = this.arrayForm.find(function (item) { return item.pos == pos; }).obs_pla;
            MOV_MANUTENCAO_CAB.inativo = false;
            this.ABMOVMANUTENCAOCABService.create(MOV_MANUTENCAO_CAB).subscribe(function (res) {
                _this.gravarlinhasaditivos(res.id_MANUTENCAO_CAB, pos);
            }, function (error) {
                console.log(error);
                _this.simular(_this.inputerro);
            });
        }
    };
    ManutencaoformComponent.prototype.gravarlinhasaditivos = function (id, pos) {
        var _this = this;
        if (this.arrayForm.find(function (item) { return item.pos == pos; }).aditivos.length > 0) {
            for (var x in this.arrayForm.find(function (item) { return item.pos == pos; }).aditivos) {
                if (this.arrayForm.find(function (item) { return item.pos == pos; }).aditivos[x].id_LIN == null) {
                    var MOV_MANUTENCAO_LINHA = new __WEBPACK_IMPORTED_MODULE_15_app_entidades_AB_MOV_MANUTENCAO_LINHA__["a" /* AB_MOV_MANUTENCAO_LINHA */];
                    MOV_MANUTENCAO_LINHA.id_ADITIVO = this.arrayForm.find(function (item) { return item.pos == pos; }).aditivos[x].id;
                    MOV_MANUTENCAO_LINHA.id_MANUTENCAO_CAB = id;
                    MOV_MANUTENCAO_LINHA.id_UNIDADE1 = this.arrayForm.find(function (item) { return item.pos == pos; }).aditivos[x].unidade1;
                    MOV_MANUTENCAO_LINHA.id_UNIDADE2 = this.arrayForm.find(function (item) { return item.pos == pos; }).aditivos[x].unidade2;
                    MOV_MANUTENCAO_LINHA.valor1 = this.arrayForm.find(function (item) { return item.pos == pos; }).aditivos[x].valor1;
                    MOV_MANUTENCAO_LINHA.valor2 = this.arrayForm.find(function (item) { return item.pos == pos; }).aditivos[x].valor2;
                    MOV_MANUTENCAO_LINHA.hora_PREVISTA = null;
                    this.ABMOVMANUTENCAOLINHAService.create(MOV_MANUTENCAO_LINHA).subscribe(function (res) {
                    }, function (error) {
                        console.log(error);
                        _this.simular(_this.inputerro);
                    });
                }
                else {
                    this.atualizalinhasaditivos(this.arrayForm.find(function (item) { return item.pos == pos; }).aditivos[x].id_LIN, pos, x);
                }
            }
        }
        if (this.gravarlinhas) {
            this.simular(this.inputnotifi);
        }
        else {
            this.simular(this.inputgravou);
        }
    };
    ManutencaoformComponent.prototype.atualizalinhasaditivos = function (id, pos, x) {
        var _this = this;
        var MOV_MANUTENCAO_LINHA = new __WEBPACK_IMPORTED_MODULE_15_app_entidades_AB_MOV_MANUTENCAO_LINHA__["a" /* AB_MOV_MANUTENCAO_LINHA */];
        this.ABMOVMANUTENCAOLINHAService.getbyID_lin(id).subscribe(function (response) {
            for (var x in response) {
                MOV_MANUTENCAO_LINHA = response[x];
                MOV_MANUTENCAO_LINHA.id_UNIDADE1 = _this.arrayForm.find(function (item) { return item.pos == pos; }).aditivos[x].unidade1;
                MOV_MANUTENCAO_LINHA.id_UNIDADE2 = _this.arrayForm.find(function (item) { return item.pos == pos; }).aditivos[x].unidade2;
                MOV_MANUTENCAO_LINHA.valor1 = _this.arrayForm.find(function (item) { return item.pos == pos; }).aditivos[x].valor1;
                MOV_MANUTENCAO_LINHA.valor2 = _this.arrayForm.find(function (item) { return item.pos == pos; }).aditivos[x].valor2;
                _this.ABMOVMANUTENCAOLINHAService.update(MOV_MANUTENCAO_LINHA).then(function () {
                }, function (error) {
                    console.log(error);
                    _this.simular(_this.inputerro);
                });
            }
        }, function (error) { return console.log(error); });
    };
    //simular click para mostrar mensagem
    ManutencaoformComponent.prototype.simular = function (element) {
        var event = new MouseEvent('click', { bubbles: true });
        this.renderer.invokeElementMethod(element.nativeElement, 'dispatchEvent', [event]);
    };
    ManutencaoformComponent.prototype.seguinte = function () {
        this.i = this.i + 1;
        this.i = this.i % this.manutencao.length;
        if (this.manutencao.length > 0) {
            this.inicia(this.manutencao[this.i]);
            this.router.navigate(['manutencao/view'], { queryParams: { id: this.manutencao[this.i] } });
        }
    };
    ManutencaoformComponent.prototype.anterior = function () {
        if (this.i === 0) {
            this.i = this.manutencao.length;
        }
        this.i = this.i - 1;
        this.router.navigate(['manutencao/view'], { queryParams: { id: this.manutencao[this.i] } });
        if (this.manutencao.length > 0) {
            this.inicia(this.manutencao[this.i]);
        }
    };
    //abre popup de análises
    ManutencaoformComponent.prototype.showDialog = function (event, pos) {
        this.pos_sele = pos;
        var elem = document.getElementById("pesquisa");
        var elm2 = document.getElementById("myModallinhas");
        var coords = elem.getBoundingClientRect();
        elm2.style.top = Math.abs(coords.bottom - event.screenY) + 'px';
        elm2.style.bottom = 'none';
        this.simular(this.dialoglinhas);
    };
    //seleccionar analise da tabela e grava campos
    ManutencaoformComponent.prototype.seleciona = function (event) {
        var _this = this;
        this.arrayForm.find(function (item) { return item.pos == _this.pos_sele; }).cod_analise = event.data.id;
        this.arrayForm.find(function (item) { return item.pos == _this.pos_sele; }).nome_analise = event.data.id + ' - ' + event.data.nome;
        this.simular(this.closedialoglinha);
    };
    //ao selecionar tipode adição verifica se tem id195 se sim o int. oper. fica por defeito vermelho
    ManutencaoformComponent.prototype.verifica_adicao = function (event, pos) {
        this.arrayForm.find(function (item) { return item.pos == pos; }).disable_op = false;
        this.arrayForm.find(function (item) { return item.pos == pos; }).interva_ope = null;
        if (event.value.id195 != "" && event.value.id195 != null) {
            this.arrayForm.find(function (item) { return item.pos == pos; }).interva_ope = this.intervalo_op.find(function (item) { return item.value.id195 == true; }).value;
            this.arrayForm.find(function (item) { return item.pos == pos; }).disable_op = true;
        }
    };
    ManutencaoformComponent.prototype.preencher_id195 = function (id, id195) {
        if (id == null) {
            this.simular(this.aviso_gravar);
        }
        else {
            if (id195 == null) {
                this.router.navigate(['registopara/novo'], { queryParams: { manu: id } });
            }
            else {
                this.router.navigate(['registopara/editar'], { queryParams: { id: id195 } });
            }
        }
    };
    ManutencaoformComponent.prototype.concluir = function () {
        var _this = this;
        var MOV_MANUTENCAO = new __WEBPACK_IMPORTED_MODULE_11_app_entidades_AB_MOV_MANUTENCAO__["a" /* AB_MOV_MANUTENCAO */];
        MOV_MANUTENCAO = this.manutencao_dados;
        MOV_MANUTENCAO.data_ULT_MODIF = this.data_actual;
        MOV_MANUTENCAO.utz_ULT_MODIF = this.user;
        MOV_MANUTENCAO.estado = "Planeado";
        this.ABMOVMANUTENCAOService.update(MOV_MANUTENCAO).then(function () {
            _this.router.navigate(['manutencao/view'], { queryParams: { id: MOV_MANUTENCAO.id_MANUTENCAO } });
            _this.simular(_this.inputgravou);
        }, function (error) {
            console.log(error);
            _this.simular(_this.inputerro);
        });
    };
    ManutencaoformComponent.prototype.duplicar = function () {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Tem a certeza que pretende duplicar?',
            header: 'Duplicar Registo',
            icon: 'fa fa-files-o',
            accept: function () {
                _this.criarmanu(_this.num_manutencao);
                _this.simular(_this.waitingDialog);
            }
        });
    };
    ManutencaoformComponent.prototype.criarmanu = function (id) {
        var _this = this;
        this.data_actual = new Date();
        this.estado = "Em Planeamento";
        var MOV_MANUTENCAO = new __WEBPACK_IMPORTED_MODULE_11_app_entidades_AB_MOV_MANUTENCAO__["a" /* AB_MOV_MANUTENCAO */];
        this.ABMOVMANUTENCAOService.getbyID(id).subscribe(function (response) {
            var count = Object.keys(response).length;
            if (count > 0) {
                for (var x in response) {
                    MOV_MANUTENCAO = response[x][0];
                    MOV_MANUTENCAO.id_MANUTENCAO = null;
                    MOV_MANUTENCAO.estado = _this.estado;
                    MOV_MANUTENCAO.hora_PLANEAMENTO = _this.data_actual.toLocaleTimeString().slice(0, 5);
                    MOV_MANUTENCAO.inativo = false;
                    MOV_MANUTENCAO.data_PLANEAMENTO = _this.data_actual;
                    MOV_MANUTENCAO.data_CRIA = new Date();
                    MOV_MANUTENCAO.utz_CRIA = _this.user;
                    MOV_MANUTENCAO.utz_PLANEAMENTO = _this.user;
                    MOV_MANUTENCAO.impresso = false;
                    MOV_MANUTENCAO.data_ULT_IMPRES = null;
                    MOV_MANUTENCAO.data_ULT_IMPRES = null;
                    MOV_MANUTENCAO.data_ULT_MODIF = null;
                    MOV_MANUTENCAO.utz_ULT_MODIF = null;
                    _this.ABMOVMANUTENCAOService.create(MOV_MANUTENCAO).subscribe(function (res) {
                        _this.criarmanu_cab(id, res.id_MANUTENCAO);
                    }, function (error) {
                        console.log(error);
                    });
                }
            }
        }, function (error) { return console.log(error); });
    };
    ManutencaoformComponent.prototype.criarmanu_cab = function (id, id_manu_nova) {
        var _this = this;
        this.id = id_manu_nova;
        var MOV_MANUTENCAO_CAB = new __WEBPACK_IMPORTED_MODULE_16_app_entidades_AB_MOV_MANUTENCAO_CAB__["a" /* AB_MOV_MANUTENCAO_CAB */];
        this.ABMOVMANUTENCAOCABService.getbyID(id).subscribe(function (response) {
            var count = Object.keys(response).length;
            if (count > 0) {
                for (var x in response) {
                    MOV_MANUTENCAO_CAB = response[x][0];
                    var id = MOV_MANUTENCAO_CAB.id_MANUTENCAO_CAB;
                    MOV_MANUTENCAO_CAB.id_MANUTENCAO_CAB = null;
                    MOV_MANUTENCAO_CAB.id_MANUTENCAO = id_manu_nova;
                    MOV_MANUTENCAO_CAB.data_CRIA = new Date();
                    MOV_MANUTENCAO_CAB.utz_CRIA = _this.user;
                    MOV_MANUTENCAO_CAB.data_EXECUCAO = null;
                    MOV_MANUTENCAO_CAB.hora_EXECUCAO = null;
                    MOV_MANUTENCAO_CAB.obs_EXECUCAO = null;
                    MOV_MANUTENCAO_CAB.utz_EXECUCAO = null;
                    MOV_MANUTENCAO_CAB.impresso = false;
                    MOV_MANUTENCAO_CAB.data_ULT_IMPRES = null;
                    MOV_MANUTENCAO_CAB.data_ULT_IMPRES = null;
                    MOV_MANUTENCAO_CAB.data_ULT_MODIF = null;
                    MOV_MANUTENCAO_CAB.utz_ULT_MODIF = null;
                    _this.criarmanucac(MOV_MANUTENCAO_CAB, id);
                }
                _this.simular(_this.inputgduplica);
                _this.inicia(_this.id);
                _this.simular(_this.waitingDialogclose);
                _this.router.navigate(['manutencao/editar'], { queryParams: { id: _this.id } });
            }
            else {
                _this.simular(_this.inputgduplica);
                _this.inicia(_this.id);
                _this.simular(_this.waitingDialogclose);
                _this.router.navigate(['manutencao/editar'], { queryParams: { id: _this.id } });
            }
        });
    };
    ManutencaoformComponent.prototype.criarmanucac = function (MOV_MANUTENCAO_CAB, id) {
        var _this = this;
        this.ABMOVMANUTENCAOCABService.create(MOV_MANUTENCAO_CAB).subscribe(function (res) {
            _this.criarmanu_lin(id, res.id_MANUTENCAO_CAB);
        }, function (error) {
            console.log(error);
        });
    };
    ManutencaoformComponent.prototype.criarmanu_lin = function (id, id_manu_cab_novo) {
        var _this = this;
        this.ABMOVMANUTENCAOLINHAService.getbyID(id).subscribe(function (response) {
            var count = Object.keys(response).length;
            if (count > 0) {
                for (var x in response) {
                    var MOV_MANUTENCAO_LINHA = new __WEBPACK_IMPORTED_MODULE_15_app_entidades_AB_MOV_MANUTENCAO_LINHA__["a" /* AB_MOV_MANUTENCAO_LINHA */];
                    MOV_MANUTENCAO_LINHA = response[x][0];
                    MOV_MANUTENCAO_LINHA.id_MANUTENCAO_LIN = null;
                    MOV_MANUTENCAO_LINHA.id_MANUTENCAO_CAB = id_manu_cab_novo;
                    _this.ABMOVMANUTENCAOLINHAService.create(MOV_MANUTENCAO_LINHA).subscribe(function (res) {
                    }, function (error) {
                        console.log(error);
                        _this.simular(_this.inputerro);
                    });
                }
            }
        }, function (error) {
            console.log(error);
            _this.simular(_this.inputerro);
        });
    };
    ManutencaoformComponent.prototype.apagar = function () {
        var id;
        var sub = this.route
            .queryParams
            .subscribe(function (params) {
            id = params['id'] || 0;
        });
        if (id != 0) {
            this.confirm(id);
        }
    };
    //popup apagar
    ManutencaoformComponent.prototype.confirm = function (id) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Tem a certeza que pretende apagar?',
            header: 'Apagar Confirmação',
            icon: 'fa fa-trash',
            accept: function () {
                _this.ABMOVMANUTENCAOCABService.getbyID(id).subscribe(function (response) {
                    for (var x in response) {
                        var MOV_MANUTENCAO_CAB = new __WEBPACK_IMPORTED_MODULE_16_app_entidades_AB_MOV_MANUTENCAO_CAB__["a" /* AB_MOV_MANUTENCAO_CAB */];
                        MOV_MANUTENCAO_CAB = response[x][0];
                        MOV_MANUTENCAO_CAB.data_ANULACAO = new Date();
                        MOV_MANUTENCAO_CAB.utz_ANULACAO = _this.user;
                        MOV_MANUTENCAO_CAB.inativo = true;
                        if (response[x][3] != null) {
                            _this.ADMOVREGPARAMOPERACAOService.getbyID(response[x][3]).subscribe(function (resp) {
                                var MOV_REG_PARAM_OPERACAO = new __WEBPACK_IMPORTED_MODULE_21_app_entidades_AD_MOV_REG_PARAM_OPERACAO__["a" /* AD_MOV_REG_PARAM_OPERACAO */];
                                MOV_REG_PARAM_OPERACAO = resp[0][0];
                                MOV_REG_PARAM_OPERACAO.data_ANULACAO = new Date();
                                MOV_REG_PARAM_OPERACAO.utz_ANULACAO = _this.user;
                                MOV_REG_PARAM_OPERACAO.inativo = true;
                                _this.ADMOVREGPARAMOPERACAOService.update(MOV_REG_PARAM_OPERACAO).then(function () {
                                }, function (error) {
                                    console.log(error);
                                    _this.simular(_this.inputerro);
                                });
                            }, function (error) {
                                console.log(error);
                                _this.simular(_this.inputerro);
                            });
                        }
                        _this.ABMOVMANUTENCAOCABService.update(MOV_MANUTENCAO_CAB).then(function () {
                        }, function (error) {
                            console.log(error);
                            _this.simular(_this.inputerro);
                        });
                    }
                    var MOV_MANUTENCAO = new __WEBPACK_IMPORTED_MODULE_11_app_entidades_AB_MOV_MANUTENCAO__["a" /* AB_MOV_MANUTENCAO */];
                    MOV_MANUTENCAO = _this.manutencao_dados;
                    MOV_MANUTENCAO.data_ANULACAO = new Date();
                    MOV_MANUTENCAO.utz_ANULACAO = _this.user;
                    MOV_MANUTENCAO.inativo = true;
                    _this.ABMOVMANUTENCAOService.update(MOV_MANUTENCAO).then(function () {
                        _this.router.navigate(['manutencao']);
                        _this.simular(_this.inputapagar);
                    }, function (error) {
                        console.log(error);
                        _this.simular(_this.inputerro);
                    });
                }, function (error) { return console.log(error); });
            }
        });
    };
    ManutencaoformComponent.prototype.preparar_linha = function (pos, id, id_manu) {
        var _this = this;
        this.ABMOVMANUTENCAOCABService.getbyID_cab(id).subscribe(function (response) {
            for (var x in response) {
                var MOV_MANUTENCAO_CAB = new __WEBPACK_IMPORTED_MODULE_16_app_entidades_AB_MOV_MANUTENCAO_CAB__["a" /* AB_MOV_MANUTENCAO_CAB */];
                MOV_MANUTENCAO_CAB = response[x][0];
                MOV_MANUTENCAO_CAB.data_PREPARACAO = new Date();
                MOV_MANUTENCAO_CAB.utz_PREPARACAO = _this.user;
                MOV_MANUTENCAO_CAB.hora_PREPARACAO = new Date().toLocaleTimeString().slice(0, 5);
                MOV_MANUTENCAO_CAB.obs_PREPARACAO = _this.arrayForm.find(function (item) { return item.pos == pos; }).obs_prep;
                _this.arrayForm.find(function (item) { return item.pos == pos; }).preparado = true;
                _this.ABMOVMANUTENCAOCABService.update(MOV_MANUTENCAO_CAB).then(function () {
                    var tamanho = _this.arrayForm.length;
                    var count = 0;
                    for (var x in _this.arrayForm) {
                        if (_this.arrayForm[x].preparado)
                            count++;
                    }
                    if (tamanho == count) {
                        _this.estado = "Preparado";
                        _this.preparado = false;
                    }
                    else {
                        _this.estado = "Em Preparação";
                    }
                    var MOV_MANUTENCAO = new __WEBPACK_IMPORTED_MODULE_11_app_entidades_AB_MOV_MANUTENCAO__["a" /* AB_MOV_MANUTENCAO */];
                    MOV_MANUTENCAO = _this.manutencao_dados;
                    MOV_MANUTENCAO.estado = _this.estado;
                    MOV_MANUTENCAO.data_ULT_MODIF = new Date();
                    MOV_MANUTENCAO.utz_ULT_MODIF = _this.user;
                    _this.ABMOVMANUTENCAOService.update(MOV_MANUTENCAO).then(function () {
                        _this.inicia(id_manu);
                    }, function (error) {
                        console.log(error);
                        _this.simular(_this.inputerro);
                    });
                }, function (error) {
                    console.log(error);
                    _this.simular(_this.inputerro);
                });
            }
        }, function (error) { return console.log(error); });
    };
    ManutencaoformComponent.prototype.confirmar_linha = function (pos, id, id_manu) {
        var _this = this;
        this.ABMOVMANUTENCAOCABService.getbyID_cab(id).subscribe(function (response) {
            for (var x in response) {
                var MOV_MANUTENCAO_CAB = new __WEBPACK_IMPORTED_MODULE_16_app_entidades_AB_MOV_MANUTENCAO_CAB__["a" /* AB_MOV_MANUTENCAO_CAB */];
                MOV_MANUTENCAO_CAB = response[x][0];
                MOV_MANUTENCAO_CAB.data_EXECUCAO = new Date();
                MOV_MANUTENCAO_CAB.utz_EXECUCAO = _this.user;
                MOV_MANUTENCAO_CAB.hora_EXECUCAO = new Date().toLocaleTimeString().slice(0, 5);
                MOV_MANUTENCAO_CAB.obs_EXECUCAO = _this.arrayForm.find(function (item) { return item.pos == pos; }).obs_exec;
                _this.arrayForm.find(function (item) { return item.pos == pos; }).executado = true;
                _this.ABMOVMANUTENCAOCABService.update(MOV_MANUTENCAO_CAB).then(function () {
                    var tamanho = _this.arrayForm.length;
                    var count = 0;
                    for (var x in _this.arrayForm) {
                        if (_this.arrayForm[x].executado)
                            count++;
                    }
                    if (tamanho == count) {
                        _this.estado = "Executado";
                    }
                    else {
                        _this.estado = "Em Execução";
                    }
                    var MOV_MANUTENCAO = new __WEBPACK_IMPORTED_MODULE_11_app_entidades_AB_MOV_MANUTENCAO__["a" /* AB_MOV_MANUTENCAO */];
                    MOV_MANUTENCAO = _this.manutencao_dados;
                    MOV_MANUTENCAO.estado = _this.estado;
                    MOV_MANUTENCAO.data_ULT_MODIF = new Date();
                    MOV_MANUTENCAO.utz_ULT_MODIF = _this.user;
                    _this.ABMOVMANUTENCAOService.update(MOV_MANUTENCAO).then(function () {
                        _this.inicia(id_manu);
                    }, function (error) {
                        console.log(error);
                        _this.simular(_this.inputerro);
                    });
                }, function (error) {
                    console.log(error);
                    _this.simular(_this.inputerro);
                });
            }
        }, function (error) { return console.log(error); });
    };
    ManutencaoformComponent.prototype.imprimir = function (relatorio, id) {
        this.router.navigate(['relatorio'], { queryParams: { id: id, relatorio: relatorio } });
    };
    return ManutencaoformComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputnotifi'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], ManutencaoformComponent.prototype, "inputnotifi", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputgravou'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], ManutencaoformComponent.prototype, "inputgravou", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputapagar'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object)
], ManutencaoformComponent.prototype, "inputapagar", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputerro'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object)
], ManutencaoformComponent.prototype, "inputerro", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialoglinhas'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _e || Object)
], ManutencaoformComponent.prototype, "dialoglinhas", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closedialoglinha'),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _f || Object)
], ManutencaoformComponent.prototype, "closedialoglinha", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('waitingDialog'),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _g || Object)
], ManutencaoformComponent.prototype, "waitingDialog", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('waitingDialogclose'),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _h || Object)
], ManutencaoformComponent.prototype, "waitingDialogclose", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputgduplica'),
    __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _j || Object)
], ManutencaoformComponent.prototype, "inputgduplica", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('aviso_gravar'),
    __metadata("design:type", typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _k || Object)
], ManutencaoformComponent.prototype, "aviso_gravar", void 0);
ManutencaoformComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-manutencaoform',
        template: __webpack_require__("../../../../../src/app/paginas/manutencao/manutencaoform/manutencaoform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/paginas/manutencao/manutencaoform/manutencaoform.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_20_app_servicos_ad_mov_reg_param_operacao_service__["a" /* ADMOVREGPARAMOPERACAOService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_20_app_servicos_ad_mov_reg_param_operacao_service__["a" /* ADMOVREGPARAMOPERACAOService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_19_app_servicos_ab_mov_manutencao_linha_service__["a" /* ABMOVMANUTENCAOLINHAService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_19_app_servicos_ab_mov_manutencao_linha_service__["a" /* ABMOVMANUTENCAOLINHAService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_18_app_servicos_ab_mov_manutencao_cab_service__["a" /* ABMOVMANUTENCAOCABService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_18_app_servicos_ab_mov_manutencao_cab_service__["a" /* ABMOVMANUTENCAOCABService */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_17_app_servicos_ab_mov_analise_service__["a" /* ABMOVANALISEService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_17_app_servicos_ab_mov_analise_service__["a" /* ABMOVANALISEService */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_14_app_servicos_ab_dic_tipo_operacao_service__["a" /* ABDICTIPOOPERACAOService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14_app_servicos_ab_dic_tipo_operacao_service__["a" /* ABDICTIPOOPERACAOService */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_13_app_servicos_ab_dic_tipo_adicao_service__["a" /* ABDICTIPOADICAOService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13_app_servicos_ab_dic_tipo_adicao_service__["a" /* ABDICTIPOADICAOService */]) === "function" && _r || Object, typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_12_app_servicos_ab_dic_banho_aditivo_service__["a" /* ABDICBANHOADITIVOService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12_app_servicos_ab_dic_banho_aditivo_service__["a" /* ABDICBANHOADITIVOService */]) === "function" && _s || Object, typeof (_t = typeof __WEBPACK_IMPORTED_MODULE_10_app_servicos_ab_mov_manutencao_service__["a" /* ABMOVMANUTENCAOService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10_app_servicos_ab_mov_manutencao_service__["a" /* ABMOVMANUTENCAOService */]) === "function" && _t || Object, typeof (_u = typeof __WEBPACK_IMPORTED_MODULE_9_app_servicos_ab_dic_turno_service__["a" /* ABDICTURNOService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_app_servicos_ab_dic_turno_service__["a" /* ABDICTURNOService */]) === "function" && _u || Object, typeof (_v = typeof __WEBPACK_IMPORTED_MODULE_8_app_servicos_ab_dic_tipo_manutencao_service__["a" /* ABDICTIPOMANUTENCAOService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_app_servicos_ab_dic_tipo_manutencao_service__["a" /* ABDICTIPOMANUTENCAOService */]) === "function" && _v || Object, typeof (_w = typeof __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["ConfirmationService"]) === "function" && _w || Object, typeof (_x = typeof __WEBPACK_IMPORTED_MODULE_22_app_servicos_ab_dic_componente_service__["a" /* ABDICCOMPONENTEService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_22_app_servicos_ab_dic_componente_service__["a" /* ABDICCOMPONENTEService */]) === "function" && _x || Object, typeof (_y = typeof __WEBPACK_IMPORTED_MODULE_6_app_servicos_ab_dic_banho_service__["a" /* ABDICBANHOService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_app_servicos_ab_dic_banho_service__["a" /* ABDICBANHOService */]) === "function" && _y || Object, typeof (_z = typeof __WEBPACK_IMPORTED_MODULE_5_app_servicos_ab_dic_linha_service__["a" /* ABDICLINHAService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_servicos_ab_dic_linha_service__["a" /* ABDICLINHAService */]) === "function" && _z || Object, typeof (_0 = typeof __WEBPACK_IMPORTED_MODULE_1_app_menu_sidebar_metadata__["a" /* AppGlobals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_menu_sidebar_metadata__["a" /* AppGlobals */]) === "function" && _0 || Object, typeof (_1 = typeof __WEBPACK_IMPORTED_MODULE_2_app_servicos_ab_unidade_medida_service__["a" /* ABUNIDADADEMEDIDAService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_servicos_ab_unidade_medida_service__["a" /* ABUNIDADADEMEDIDAService */]) === "function" && _1 || Object, typeof (_2 = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _2 || Object, typeof (_3 = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === "function" && _3 || Object, typeof (_4 = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _4 || Object, typeof (_5 = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"]) === "function" && _5 || Object])
], ManutencaoformComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;
//# sourceMappingURL=manutencaoform.component.js.map

/***/ }),

/***/ "../../../../../src/app/paginas/parametrosanalisebanhos/linhas/linhas.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/paginas/parametrosanalisebanhos/linhas/linhas.component.html":
/***/ (function(module, exports) {

module.exports = "<app-controlos (anteriorbt)=\"anterior()\" (seguintebt)=\"seguinte()\" (apagarbt)=\"apagar()\"></app-controlos>\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"red\">\n            <h4 class=\"title\">Linhas</h4>\n          </div>\n          <div class=\"card-content\">\n            <div class=\"col-md-12\">\n              <p-dataTable [style]=\"{'width':'600px'}\" [value]=\"linhas\" selectionMode=\"single\" [(selection)]=\"selectedCar\" (onRowSelect)=\"onRowSelectlinha($event)\"\n                [paginator]=\"true\" rows=\"15\">\n                <p-column [style]=\"{'width':'30px'}\" field=\"nome\" header=\"Nome Linha\" [filter]=\"true\" [sortable]=\"true\"></p-column>\n                <p-column [style]=\"{'width':'30px'}\" field=\"cor\" header=\"Cor Linha\" [sortable]=\"true\">\n                  <ng-template pTemplate=\"body\" let-col3 let-row3=\"rowData \">\n                    <p-colorPicker [(ngModel)]=\"row3[col3.field]\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"true\"></p-colorPicker>\n                  </ng-template>\n                </p-column>\n                <p-footer>\n                  <a (click)=\"showDialogToAddlinhas()\" style=\"color: black; cursor:pointer; margin-left:10px;\" title=\"Adicionar nova linha\">\n                         <i class=\"material-icons\">add</i> Adicionar\n                        </a>\n                </p-footer>\n              </p-dataTable>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<button class=\"btn btn-primary btn-lg\" #dialoglinhas data-toggle=\"modal\" [hidden]=\"true\" data-target=\"#myModallinhas\" data-backdrop=\"false\"></button>\n<!-- Modal Linhas-->\n<div class=\"modal fade\" id=\"myModallinhas\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n                       <span aria-hidden=\"true\">&times;</span>\n                       <span class=\"sr-only\">Close</span>\n                </button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">\n          Linhas\n        </h4>\n      </div>\n      <form role=\"form\" ngNativeValidate (ngSubmit)=\"gravarlinhas()\">\n        <!-- Modal Body -->\n        <div class=\"modal-body\">\n          <div class=\"form-group\">\n            <label for=\"nmlinha\">Nome Linha</label>\n            <input type=\"text\" class=\"form-control\" id=\"nmlinha\" [(ngModel)]=\"nome_linha\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Introduza o Nome da Linha\"\n              required />\n          </div>\n          <div class=\"form-group\">\n            <label>Cor Linha</label>\n            <p-colorPicker [(ngModel)]=\"cor_linha\" [ngModelOptions]=\"{standalone: true}\"></p-colorPicker>\n          </div>\n        </div>\n        <!-- Modal Footer -->\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" #closedialoglinha data-dismiss=\"modal\">Fechar</button>\n          <button type=\"button\" (click)=\"apagarlinhas()\" [hidden]=\"novalinha\" class=\"btn btn-danger\" data-dismiss=\"modal\">Remover</button>\n          <button type=\"submit\"  class=\"btn btn-success \">Gravar</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/paginas/parametrosanalisebanhos/linhas/linhas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_servicos_ab_dic_linha_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-linha.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_entidades_AB_DIC_LINHA__ = __webpack_require__("../../../../../src/app/entidades/AB_DIC_LINHA.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinhasComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LinhasComponent = (function () {
    function LinhasComponent(ABDICLINHAService, renderer) {
        this.ABDICLINHAService = ABDICLINHAService;
        this.renderer = renderer;
    }
    LinhasComponent.prototype.ngOnInit = function () {
        this.listar_linhas();
    };
    //abre popup para adicionar linha
    LinhasComponent.prototype.showDialogToAddlinhas = function () {
        this.novalinha = true;
        this.id_linha_selected = 0;
        this.nome_linha = "";
        this.cor_linha = '#ffffff';
        this.simular(this.dialoglinhas);
    };
    //gravar linhas de linha
    LinhasComponent.prototype.gravarlinhas = function () {
        var _this = this;
        var LINHAS = new __WEBPACK_IMPORTED_MODULE_2_app_entidades_AB_DIC_LINHA__["a" /* AB_DIC_LINHA */];
        LINHAS.nome_LINHA = this.nome_linha;
        LINHAS.cor = "#" + this.cor_linha;
        LINHAS.inativo = false;
        if (this.novalinha) {
            this.ABDICLINHAService.create(LINHAS).subscribe(function (response) {
                _this.listar_linhas();
                _this.simular(_this.closedialoglinha);
            }, function (error) { return console.log(error); });
        }
        else {
            LINHAS.id_LINHA = this.id_linha_selected;
            this.ABDICLINHAService.update(LINHAS).then(function () {
                _this.listar_linhas();
                _this.simular(_this.closedialoglinha);
            });
        }
    };
    //listar os dados das Linhas
    LinhasComponent.prototype.listar_linhas = function () {
        var _this = this;
        this.linhas = [];
        this.ABDICLINHAService.getAll().subscribe(function (response) {
            for (var x in response) {
                _this.linhas.push({ id: response[x].id_LINHA, nome: response[x].nome_LINHA, cor: response[x].cor });
            }
            _this.linhas = _this.linhas.slice();
        }, function (error) { return console.log(error); });
    };
    //apagar linhas
    LinhasComponent.prototype.apagarlinhas = function () {
        var _this = this;
        var DIC_LINHA = new __WEBPACK_IMPORTED_MODULE_2_app_entidades_AB_DIC_LINHA__["a" /* AB_DIC_LINHA */];
        DIC_LINHA.nome_LINHA = this.nome_linha;
        DIC_LINHA.id_LINHA = this.id_linha_selected;
        DIC_LINHA.cor = "#" + this.cor_linha;
        DIC_LINHA.data_ANULACAO = new Date();
        DIC_LINHA.utz_ANULACAO = JSON.parse(localStorage.getItem('userapp'))["id"];
        DIC_LINHA.inativo = true;
        this.ABDICLINHAService.update(DIC_LINHA).then(function () {
            _this.listar_linhas();
        }, function (error) {
            console.log(error);
        });
    };
    //ao clicar na tabela abrir popup para editar
    LinhasComponent.prototype.onRowSelectlinha = function (event) {
        this.id_linha_selected = event.data.id;
        this.nome_linha = event.data.nome;
        this.cor_linha = event.data.cor;
        this.novalinha = false;
        this.simular(this.dialoglinhas);
    };
    //simular click para mostrar mensagem
    LinhasComponent.prototype.simular = function (element) {
        var event = new MouseEvent('click', { bubbles: true });
        this.renderer.invokeElementMethod(element.nativeElement, 'dispatchEvent', [event]);
    };
    return LinhasComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialoglinhas'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], LinhasComponent.prototype, "dialoglinhas", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closedialoglinha'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], LinhasComponent.prototype, "closedialoglinha", void 0);
LinhasComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-linhas',
        template: __webpack_require__("../../../../../src/app/paginas/parametrosanalisebanhos/linhas/linhas.component.html"),
        styles: [__webpack_require__("../../../../../src/app/paginas/parametrosanalisebanhos/linhas/linhas.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_app_servicos_ab_dic_linha_service__["a" /* ABDICLINHAService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_servicos_ab_dic_linha_service__["a" /* ABDICLINHAService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _d || Object])
], LinhasComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=linhas.component.js.map

/***/ }),

/***/ "../../../../../src/app/paginas/parametrosanalisebanhos/tipoadicao/tipoadicao.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/paginas/parametrosanalisebanhos/tipoadicao/tipoadicao.component.html":
/***/ (function(module, exports) {

module.exports = "<app-controlos (anteriorbt)=\"anterior()\" (seguintebt)=\"seguinte()\" (apagarbt)=\"apagar()\"></app-controlos>\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"red\">\n            <h4 class=\"title\">Tipo Adição</h4>\n          </div>\n          <div class=\"card-content\">\n            <p-dataTable [style]=\"{'width':'500px'}\" [value]=\"TipoAdicaos\" selectionMode=\"single\" [(selection)]=\"selectedCar\" (onRowSelect)=\"onRowSelect($event)\"\n              [paginator]=\"true\" rows=\"15\">\n              <p-column [style]=\"{'width':'30px'}\" field=\"nome\" header=\"Tipo Adiçao\" [filter]=\"true\" [sortable]=\"true\"></p-column>\n              <p-column [style]=\"{'width':'30px'}\" field=\"nome_op\" header=\"Tipo Operação\" [filter]=\"true\" [sortable]=\"true\"></p-column>\n              <p-footer>\n                <a (click)=\"showDialogToAdd()\" style=\"color: black; cursor:pointer; margin-left:10px;\" title=\"Adicionar nova linha\">\n                         <i class=\"material-icons\">add</i> Adicionar\n                        </a>\n              </p-footer>\n            </p-dataTable>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<button class=\"btn btn-primary btn-lg\" #dialog data-toggle=\"modal\" [hidden]=\"true\" data-target=\"#myModalNorm\" data-backdrop=\"false\"></button>\n\n<!-- Modal TipoAdicaos-->\n<div class=\"modal fade\" id=\"myModalNorm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n                       <span aria-hidden=\"true\">&times;</span>\n                       <span class=\"sr-only\">Close</span>\n                </button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">\n          Tipo Adição\n        </h4>\n      </div>\n      <form role=\"form\" ngNativeValidate (ngSubmit)=\"gravarTipoAdicaos()\">\n        <!-- Modal Body -->\n        <div class=\"modal-body\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"TipoAdicao\">Nome Adição</label>\n              <input type=\"text\" class=\"form-control\" id=\"TipoAdicao\" [(ngModel)]=\"valor_TipoAdicao\" [ngModelOptions]=\"{standalone: true}\"\n                placeholder=\"Introduza a TipoAdicao\" required />\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"tipoop\">Tipo Operação</label>\n              <p-dropdown [options]=\"intervalo_op\" [style]=\"{'width':'225px'}\" [(ngModel)]=\"intervalo_op_id\" [ngModelOptions]=\"{standalone: true}\"></p-dropdown>\n            </div>\n          </div>\n        </div>\n        <!-- Modal Footer -->\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" #closedialog data-dismiss=\"modal\">Fechar</button>\n          <button type=\"button\" (click)=\"apagarTipoAdicaos()\" [hidden]=\"novo\" class=\"btn btn-danger\" data-dismiss=\"modal\">Remover</button>\n          <button type=\"submit\" class=\"btn btn-success \">Gravar</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/paginas/parametrosanalisebanhos/tipoadicao/tipoadicao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_servicos_ab_dic_tipo_adicao_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-tipo-adicao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_entidades_AB_DIC_TIPO_ADICAO__ = __webpack_require__("../../../../../src/app/entidades/AB_DIC_TIPO_ADICAO.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_servicos_ab_dic_tipo_operacao_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-tipo-operacao.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipoadicaoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TipoadicaoComponent = (function () {
    function TipoadicaoComponent(ABDICTIPOOPERACAOService, ABDICTIPOADICAOService, renderer) {
        this.ABDICTIPOOPERACAOService = ABDICTIPOOPERACAOService;
        this.ABDICTIPOADICAOService = ABDICTIPOADICAOService;
        this.renderer = renderer;
    }
    TipoadicaoComponent.prototype.ngOnInit = function () {
        var _this = this;
        //preenche combobox Intervalo Oper.
        this.ABDICTIPOOPERACAOService.getAll().subscribe(function (response) {
            _this.intervalo_op = [];
            _this.intervalo_op.push({ label: "Sel. Intervalo Oper.", value: "" });
            for (var x in response) {
                _this.intervalo_op.push({ label: response[x].nome_TIPO_OPERACAO, value: response[x].id_TIPO_OPERACAO });
            }
            _this.intervalo_op = _this.intervalo_op.slice();
            _this.listar_TipoAdicaos();
        }, function (error) { return console.log(error); });
    };
    //abre popup para adicionar TipoAdicao
    TipoadicaoComponent.prototype.showDialogToAdd = function () {
        this.novo = true;
        this.id_TipoAdicao_selected = 0;
        this.valor_TipoAdicao = "";
        this.intervalo_op_id = null;
        this.simular(this.dialog);
    };
    //gravar unidade de TipoAdicao
    TipoadicaoComponent.prototype.gravarTipoAdicaos = function () {
        var _this = this;
        var TipoAdicao = new __WEBPACK_IMPORTED_MODULE_2_app_entidades_AB_DIC_TIPO_ADICAO__["a" /* AB_DIC_TIPO_ADICAO */];
        TipoAdicao.nome_TIPO_ADICAO = this.valor_TipoAdicao;
        TipoAdicao.id_TIPO_OPERACAO = this.intervalo_op_id;
        TipoAdicao.inativo = false;
        console.log(this.intervalo_op_id);
        if (this.novo) {
            this.ABDICTIPOADICAOService.create(TipoAdicao).subscribe(function (response) {
                _this.listar_TipoAdicaos();
                _this.simular(_this.closedialog);
            }, function (error) { return console.log(error); });
        }
        else {
            TipoAdicao.id_TIPO_ADICAO = this.id_TipoAdicao_selected;
            this.ABDICTIPOADICAOService.update(TipoAdicao).then(function () {
                _this.listar_TipoAdicaos();
                _this.simular(_this.closedialog);
            });
        }
    };
    //listar os dados das unidades de TipoAdicaos na tabela
    TipoadicaoComponent.prototype.listar_TipoAdicaos = function () {
        var _this = this;
        this.TipoAdicaos = [];
        this.ABDICTIPOADICAOService.getAll().subscribe(function (response) {
            for (var x in response) {
                var nome_op = "";
                if (response[x].id_TIPO_OPERACAO != null)
                    nome_op = _this.intervalo_op.find(function (item) { return item.value == response[x].id_TIPO_OPERACAO; }).label;
                _this.TipoAdicaos.push({ id: response[x].id_TIPO_ADICAO, nome: response[x].nome_TIPO_ADICAO, nome_op: nome_op, operacao: response[x].id_TIPO_OPERACAO });
            }
            _this.TipoAdicaos = _this.TipoAdicaos.slice();
        }, function (error) { return console.log(error); });
    };
    //apagar TipoAdicao
    TipoadicaoComponent.prototype.apagarTipoAdicaos = function () {
        var _this = this;
        var TipoAdicao = new __WEBPACK_IMPORTED_MODULE_2_app_entidades_AB_DIC_TIPO_ADICAO__["a" /* AB_DIC_TIPO_ADICAO */];
        TipoAdicao.nome_TIPO_ADICAO = this.valor_TipoAdicao;
        TipoAdicao.id_TIPO_OPERACAO = this.intervalo_op_id;
        TipoAdicao.id_TIPO_ADICAO = this.id_TipoAdicao_selected;
        TipoAdicao.data_ANULACAO = new Date();
        TipoAdicao.utz_ANULACAO = JSON.parse(localStorage.getItem('userapp'))["id"];
        TipoAdicao.inativo = true;
        this.ABDICTIPOADICAOService.update(TipoAdicao).then(function () {
            _this.listar_TipoAdicaos();
        });
    };
    //ao clicar na tabela abrir popup para editar
    TipoadicaoComponent.prototype.onRowSelect = function (event) {
        this.id_TipoAdicao_selected = event.data.id;
        this.valor_TipoAdicao = event.data.nome;
        this.intervalo_op_id = event.data.operacao;
        this.novo = false;
        this.simular(this.dialog);
    };
    //simular click para mostrar mensagem
    TipoadicaoComponent.prototype.simular = function (element) {
        var event = new MouseEvent('click', { bubbles: true });
        this.renderer.invokeElementMethod(element.nativeElement, 'dispatchEvent', [event]);
    };
    return TipoadicaoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialog'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], TipoadicaoComponent.prototype, "dialog", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closedialog'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], TipoadicaoComponent.prototype, "closedialog", void 0);
TipoadicaoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tipoadicao',
        template: __webpack_require__("../../../../../src/app/paginas/parametrosanalisebanhos/tipoadicao/tipoadicao.component.html"),
        styles: [__webpack_require__("../../../../../src/app/paginas/parametrosanalisebanhos/tipoadicao/tipoadicao.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_servicos_ab_dic_tipo_operacao_service__["a" /* ABDICTIPOOPERACAOService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_servicos_ab_dic_tipo_operacao_service__["a" /* ABDICTIPOOPERACAOService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_app_servicos_ab_dic_tipo_adicao_service__["a" /* ABDICTIPOADICAOService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_servicos_ab_dic_tipo_adicao_service__["a" /* ABDICTIPOADICAOService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _e || Object])
], TipoadicaoComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=tipoadicao.component.js.map

/***/ }),

/***/ "../../../../../src/app/paginas/parametrosanalisebanhos/tipomanutenacao/tipomanutenacao.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/paginas/parametrosanalisebanhos/tipomanutenacao/tipomanutenacao.component.html":
/***/ (function(module, exports) {

module.exports = "<app-controlos (anteriorbt)=\"anterior()\" (seguintebt)=\"seguinte()\" (apagarbt)=\"apagar()\"></app-controlos>\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"red\">\n            <h4 class=\"title\">Tipo Manutenção</h4>\n          </div>\n          <div class=\"card-content\">\n            <p-dataTable [style]=\"{'width':'300px'}\" [value]=\"manutencoes\" selectionMode=\"single\" [(selection)]=\"selectedCar\" (onRowSelect)=\"onRowSelect($event)\"\n              [paginator]=\"true\" rows=\"15\">\n              <p-column [style]=\"{'width':'30px'}\" field=\"nome\" header=\"Tipo Manutenção\" [filter]=\"true\" [sortable]=\"true\"></p-column>\n              <p-footer>\n                <a (click)=\"showDialogToAdd()\" style=\"color: black; cursor:pointer; margin-left:10px;\" title=\"Adicionar nova linha\">\n                         <i class=\"material-icons\">add</i> Adicionar\n                        </a>\n              </p-footer>\n            </p-dataTable>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<button class=\"btn btn-primary btn-lg\" #dialog data-toggle=\"modal\" [hidden]=\"true\" data-target=\"#myModalNorm\" data-backdrop=\"false\"></button>\n\n<!-- Modal Tipo Manutenção-->\n<div class=\"modal fade\" id=\"myModalNorm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n                       <span aria-hidden=\"true\">&times;</span>\n                       <span class=\"sr-only\">Close</span>\n                </button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">\n          Tipo Manutenção\n        </h4>\n      </div>\n      <form role=\"form\" ngNativeValidate (ngSubmit)=\"gravarmanutencoes()\">\n        <!-- Modal Body -->\n        <div class=\"modal-body\">\n          <div class=\"form-group\">\n            <label for=\"manutencao\">Nome Manutencao</label>\n            <input type=\"text\" class=\"form-control\" id=\"manutencao\" [(ngModel)]=\"valor_manutencao\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Introduza o Tipo Manutenção\"\n              required />\n          </div>\n        </div>\n        <!-- Modal Footer -->\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" #closedialog data-dismiss=\"modal\">Fechar</button>\n          <button type=\"button\" (click)=\"apagarmanutencao()\" [hidden]=\"novo\" class=\"btn btn-danger\" data-dismiss=\"modal\">Remover</button>\n          <button type=\"submit\" class=\"btn btn-success \">Gravar</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/paginas/parametrosanalisebanhos/tipomanutenacao/tipomanutenacao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_servicos_ab_dic_tipo_manutencao_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-tipo-manutencao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_entidades_AB_DIC_TIPO_MANUTENCAO__ = __webpack_require__("../../../../../src/app/entidades/AB_DIC_TIPO_MANUTENCAO.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipomanutenacaoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TipomanutenacaoComponent = (function () {
    function TipomanutenacaoComponent(ABDICTIPOMANUTENCAOService, renderer) {
        this.ABDICTIPOMANUTENCAOService = ABDICTIPOMANUTENCAOService;
        this.renderer = renderer;
    }
    TipomanutenacaoComponent.prototype.ngOnInit = function () {
        this.listar_manutencoes();
    };
    //abre popup para adicionar manutencao
    TipomanutenacaoComponent.prototype.showDialogToAdd = function () {
        this.novo = true;
        this.id_manutencao_selected = 0;
        this.valor_manutencao = "";
        this.simular(this.dialog);
    };
    //gravar unidade de manutencao
    TipomanutenacaoComponent.prototype.gravarmanutencoes = function () {
        var _this = this;
        var tipo_manutencao = new __WEBPACK_IMPORTED_MODULE_2_app_entidades_AB_DIC_TIPO_MANUTENCAO__["a" /* AB_DIC_TIPO_MANUTENCAO */];
        tipo_manutencao.nome_TIPO_MANUTENCAO = this.valor_manutencao;
        tipo_manutencao.inativo = false;
        if (this.novo) {
            this.ABDICTIPOMANUTENCAOService.create(tipo_manutencao).subscribe(function (response) {
                _this.listar_manutencoes();
                _this.simular(_this.closedialog);
            }, function (error) { return console.log(error); });
        }
        else {
            tipo_manutencao.id_TIPO_MANUTENCAO = this.id_manutencao_selected;
            this.ABDICTIPOMANUTENCAOService.update(tipo_manutencao).then(function () {
                _this.listar_manutencoes();
                _this.simular(_this.closedialog);
            });
        }
    };
    //listar os dados das unidades de manutencoes na tabela
    TipomanutenacaoComponent.prototype.listar_manutencoes = function () {
        var _this = this;
        this.manutencoes = [];
        this.ABDICTIPOMANUTENCAOService.getAll().subscribe(function (response) {
            for (var x in response) {
                _this.manutencoes.push({ id: response[x].id_TIPO_MANUTENCAO, nome: response[x].nome_TIPO_MANUTENCAO });
            }
            _this.manutencoes = _this.manutencoes.slice();
        }, function (error) { return console.log(error); });
    };
    //apagar manutencao
    TipomanutenacaoComponent.prototype.apagarmanutencao = function () {
        var _this = this;
        var tipo_manutencao = new __WEBPACK_IMPORTED_MODULE_2_app_entidades_AB_DIC_TIPO_MANUTENCAO__["a" /* AB_DIC_TIPO_MANUTENCAO */];
        tipo_manutencao.nome_TIPO_MANUTENCAO = this.valor_manutencao;
        tipo_manutencao.id_TIPO_MANUTENCAO = this.id_manutencao_selected;
        tipo_manutencao.data_ANULACAO = new Date();
        tipo_manutencao.utz_ANULACAO = JSON.parse(localStorage.getItem('userapp'))["id"];
        tipo_manutencao.inativo = true;
        this.ABDICTIPOMANUTENCAOService.update(tipo_manutencao).then(function () {
            _this.listar_manutencoes();
        });
    };
    //ao clicar na tabela abrir popup para editar
    TipomanutenacaoComponent.prototype.onRowSelect = function (event) {
        this.id_manutencao_selected = event.data.id;
        this.valor_manutencao = event.data.nome;
        this.novo = false;
        this.simular(this.dialog);
    };
    //simular click para mostrar mensagem
    TipomanutenacaoComponent.prototype.simular = function (element) {
        var event = new MouseEvent('click', { bubbles: true });
        this.renderer.invokeElementMethod(element.nativeElement, 'dispatchEvent', [event]);
    };
    return TipomanutenacaoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialog'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], TipomanutenacaoComponent.prototype, "dialog", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closedialog'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], TipomanutenacaoComponent.prototype, "closedialog", void 0);
TipomanutenacaoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tipomanutenacao',
        template: __webpack_require__("../../../../../src/app/paginas/parametrosanalisebanhos/tipomanutenacao/tipomanutenacao.component.html"),
        styles: [__webpack_require__("../../../../../src/app/paginas/parametrosanalisebanhos/tipomanutenacao/tipomanutenacao.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_app_servicos_ab_dic_tipo_manutencao_service__["a" /* ABDICTIPOMANUTENCAOService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_servicos_ab_dic_tipo_manutencao_service__["a" /* ABDICTIPOMANUTENCAOService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _d || Object])
], TipomanutenacaoComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=tipomanutenacao.component.js.map

/***/ }),

/***/ "../../../../../src/app/paginas/parametrosanalisebanhos/tipooperacao/tipooperacao.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".material-switch > input[type=\"checkbox\"] {\r\n    display: none;   \r\n}\r\n\r\n.material-switch > label {\r\n    cursor: pointer;\r\n    height: 0px;\r\n    position: relative; \r\n    width: 40px;  \r\n}\r\n\r\n.material-switch > label::before {\r\n    background: rgb(0, 0, 0);\r\n    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.5);\r\n    border-radius: 8px;\r\n    content: '';\r\n    height: 16px;\r\n    margin-top: -8px;\r\n    position:absolute;\r\n    opacity: 0.3;\r\n    transition: all 0.4s ease-in-out;\r\n    width: 40px;\r\n}\r\n.material-switch > label::after {\r\n    background: rgb(255, 255, 255);\r\n    border-radius: 16px;\r\n    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);\r\n    content: '';\r\n    height: 24px;\r\n    left: -4px;\r\n    margin-top: -8px;\r\n    position: absolute;\r\n    top: -4px;\r\n    transition: all 0.3s ease-in-out;\r\n    width: 24px;\r\n}\r\n.material-switch > input[type=\"checkbox\"]:checked + label::before {\r\n    background: inherit;\r\n    opacity: 0.5;\r\n}\r\n.material-switch > input[type=\"checkbox\"]:checked + label::after {\r\n    background: inherit;\r\n    left: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/paginas/parametrosanalisebanhos/tipooperacao/tipooperacao.component.html":
/***/ (function(module, exports) {

module.exports = "<app-controlos (anteriorbt)=\"anterior()\" (seguintebt)=\"seguinte()\" (apagarbt)=\"apagar()\"></app-controlos>\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"red\">\n            <h4 class=\"title\">Tipo Operação</h4>\n          </div>\n          <div class=\"card-content\">\n            <p-dataTable [style]=\"{'width':'300px'}\" [value]=\"operacoes\" selectionMode=\"single\" [(selection)]=\"selectedCar\" (onRowSelect)=\"onRowSelect($event)\"\n              [paginator]=\"true\" rows=\"15\">\n              <p-column [style]=\"{'width':'30px'}\" field=\"nome\" header=\"Tipo Operação\" [filter]=\"true\" [sortable]=\"true\"></p-column>\n              <p-column [style]=\"{'width':'30px'}\" field=\"id195\" header=\"ID195\" [filter]=\"true\" [sortable]=\"true\">\n                <ng-template let-car=\"rowData\" pTemplate=\"body\">\n                  <i *ngIf=\"car.id195 == false\" class=\"material-icons\" style=\"color: red;\">close</i>\n                  <i *ngIf=\"car.id195 == true\" class=\"material-icons\" style=\"color: green;\">check</i>\n                </ng-template>\n              </p-column>\n              <p-footer>\n                <a (click)=\"showDialogToAdd()\" style=\"color: black; cursor:pointer; margin-left:10px;\" title=\"Adicionar nova linha\">\n                         <i class=\"material-icons\">add</i> Adicionar\n                        </a>\n              </p-footer>\n            </p-dataTable>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<button class=\"btn btn-primary btn-lg\" #dialog data-toggle=\"modal\" [hidden]=\"true\" data-target=\"#myModalNorm\" data-backdrop=\"false\"></button>\n\n<!-- Modal Tipo Operação-->\n<div class=\"modal fade\" id=\"myModalNorm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n                       <span aria-hidden=\"true\">&times;</span>\n                       <span class=\"sr-only\">Close</span>\n                </button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">\n          Tipo Operação\n        </h4>\n      </div>\n      <form role=\"form\" ngNativeValidate (ngSubmit)=\"gravaroperacoes()\">\n        <!-- Modal Body -->\n        <div class=\"modal-body\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"operacao\">Nome Operação</label>\n              <input type=\"text\" class=\"form-control\" id=\"operacao\" [(ngModel)]=\"valor_operacao\" [ngModelOptions]=\"{standalone: true}\"\n                placeholder=\"Introduza o Tipo Operação\" required />\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"operacao\">ID195</label>\n              <br>\n              <div class=\"material-switch pull-left\">\n                <input id=\"someSwitchOptionSuccess\" type=\"checkbox\" [(ngModel)]=\"id195\" [ngModelOptions]=\"{standalone: true}\">\n                <label for=\"someSwitchOptionSuccess\" class=\"label-success\" ></label>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- Modal Footer -->\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" #closedialog data-dismiss=\"modal\">Fechar</button>\n          <button type=\"button\" (click)=\"apagaroperacao()\" [hidden]=\"novo\" class=\"btn btn-danger\" data-dismiss=\"modal\">Remover</button>\n          <button type=\"submit\" class=\"btn btn-success \">Gravar</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/paginas/parametrosanalisebanhos/tipooperacao/tipooperacao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_servicos_ab_dic_tipo_operacao_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-tipo-operacao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_entidades_AB_DIC_TIPO_OPERACAO__ = __webpack_require__("../../../../../src/app/entidades/AB_DIC_TIPO_OPERACAO.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipooperacaoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TipooperacaoComponent = (function () {
    function TipooperacaoComponent(ABDICTIPOOPERACAOService, renderer) {
        this.ABDICTIPOOPERACAOService = ABDICTIPOOPERACAOService;
        this.renderer = renderer;
    }
    TipooperacaoComponent.prototype.ngOnInit = function () {
        this.listar_operacoes();
    };
    //abre popup para adicionar operacao
    TipooperacaoComponent.prototype.showDialogToAdd = function () {
        this.novo = true;
        this.id_operacao_selected = 0;
        this.valor_operacao = "";
        this.id195 = false;
        this.simular(this.dialog);
    };
    //gravar unidade de operacao
    TipooperacaoComponent.prototype.gravaroperacoes = function () {
        var _this = this;
        var tipo_operacao = new __WEBPACK_IMPORTED_MODULE_2_app_entidades_AB_DIC_TIPO_OPERACAO__["a" /* AB_DIC_TIPO_OPERACAO */];
        tipo_operacao.nome_TIPO_OPERACAO = this.valor_operacao;
        tipo_operacao.inativo = false;
        tipo_operacao.id195 = this.id195;
        if (this.novo) {
            this.ABDICTIPOOPERACAOService.create(tipo_operacao).subscribe(function (response) {
                _this.listar_operacoes();
                _this.simular(_this.closedialog);
            }, function (error) { return console.log(error); });
        }
        else {
            tipo_operacao.id_TIPO_OPERACAO = this.id_operacao_selected;
            this.ABDICTIPOOPERACAOService.update(tipo_operacao).then(function () {
                _this.listar_operacoes();
                _this.simular(_this.closedialog);
            });
        }
    };
    //listar os dados das unidades de operacoes na tabela
    TipooperacaoComponent.prototype.listar_operacoes = function () {
        var _this = this;
        this.operacoes = [];
        this.ABDICTIPOOPERACAOService.getAll().subscribe(function (response) {
            for (var x in response) {
                _this.operacoes.push({ id: response[x].id_TIPO_OPERACAO, nome: response[x].nome_TIPO_OPERACAO, id195: response[x].id195 });
            }
            _this.operacoes = _this.operacoes.slice();
        }, function (error) { return console.log(error); });
    };
    //apagar operacao
    TipooperacaoComponent.prototype.apagaroperacao = function () {
        var _this = this;
        var tipo_operacao = new __WEBPACK_IMPORTED_MODULE_2_app_entidades_AB_DIC_TIPO_OPERACAO__["a" /* AB_DIC_TIPO_OPERACAO */];
        tipo_operacao.nome_TIPO_OPERACAO = this.valor_operacao;
        tipo_operacao.id195 = this.id195;
        tipo_operacao.id_TIPO_OPERACAO = this.id_operacao_selected;
        tipo_operacao.data_ANULACAO = new Date();
        tipo_operacao.utz_ANULACAO = JSON.parse(localStorage.getItem('userapp'))["id"];
        tipo_operacao.inativo = true;
        this.ABDICTIPOOPERACAOService.update(tipo_operacao).then(function () {
            _this.listar_operacoes();
        });
    };
    //ao clicar na tabela abrir popup para editar
    TipooperacaoComponent.prototype.onRowSelect = function (event) {
        this.id_operacao_selected = event.data.id;
        this.valor_operacao = event.data.nome;
        this.novo = false;
        this.id195 = event.data.id195;
        this.simular(this.dialog);
    };
    //simular click para mostrar mensagem
    TipooperacaoComponent.prototype.simular = function (element) {
        var event = new MouseEvent('click', { bubbles: true });
        this.renderer.invokeElementMethod(element.nativeElement, 'dispatchEvent', [event]);
    };
    return TipooperacaoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialog'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], TipooperacaoComponent.prototype, "dialog", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closedialog'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], TipooperacaoComponent.prototype, "closedialog", void 0);
TipooperacaoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tipooperacao',
        template: __webpack_require__("../../../../../src/app/paginas/parametrosanalisebanhos/tipooperacao/tipooperacao.component.html"),
        styles: [__webpack_require__("../../../../../src/app/paginas/parametrosanalisebanhos/tipooperacao/tipooperacao.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_app_servicos_ab_dic_tipo_operacao_service__["a" /* ABDICTIPOOPERACAOService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_servicos_ab_dic_tipo_operacao_service__["a" /* ABDICTIPOOPERACAOService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _d || Object])
], TipooperacaoComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=tipooperacao.component.js.map

/***/ }),

/***/ "../../../../../src/app/paginas/parametrosanalisebanhos/turnos/turnos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/paginas/parametrosanalisebanhos/turnos/turnos.component.html":
/***/ (function(module, exports) {

module.exports = "<app-controlos (anteriorbt)=\"anterior()\" (seguintebt)=\"seguinte()\" (apagarbt)=\"apagar()\"></app-controlos>\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"red\">\n            <h4 class=\"title\">turnos</h4>\n          </div>\n          <div class=\"card-content\">\n            <p-dataTable [style]=\"{'width':'300px'}\" [value]=\"turnos\" selectionMode=\"single\" [(selection)]=\"selectedCar\" (onRowSelect)=\"onRowSelect($event)\"\n              [paginator]=\"true\" rows=\"15\">\n              <p-column [style]=\"{'width':'30px'}\" field=\"nome\" header=\"Nome turno\" [filter]=\"true\" [sortable]=\"true\"></p-column>\n              <p-footer>\n                <a (click)=\"showDialogToAdd()\" style=\"color: black; cursor:pointer; margin-left:10px;\" title=\"Adicionar nova linha\">\n                         <i class=\"material-icons\">add</i> Adicionar\n                        </a>\n              </p-footer>\n            </p-dataTable>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<button class=\"btn btn-primary btn-lg\" #dialog data-toggle=\"modal\" [hidden]=\"true\" data-target=\"#myModalNorm\" data-backdrop=\"false\"></button>\n\n<!-- Modal turnos-->\n<div class=\"modal fade\" id=\"myModalNorm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n                       <span aria-hidden=\"true\">&times;</span>\n                       <span class=\"sr-only\">Close</span>\n                </button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">\n          turnos\n        </h4>\n      </div>\n      <form role=\"form\" ngNativeValidate>\n        <!-- Modal Body -->\n        <div class=\"modal-body\">\n          <div class=\"form-group\">\n            <label for=\"turno\">Nome Turno</label>\n            <input type=\"text\" class=\"form-control\" id=\"turno\" [(ngModel)]=\"valor_turno\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Introduza a turno\"\n              required />\n          </div>\n        </div>\n        <!-- Modal Footer -->\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" #closedialog data-dismiss=\"modal\">Fechar</button>\n          <button type=\"button\" (click)=\"apagarturnos()\" [hidden]=\"novo\" class=\"btn btn-danger\" data-dismiss=\"modal\">Remover</button>\n          <button type=\"submit\" (click)=\"gravarturnos()\" class=\"btn btn-success \">Gravar</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/paginas/parametrosanalisebanhos/turnos/turnos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_servicos_ab_dic_turno_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-turno.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_entidades_AB_DIC_TURNO__ = __webpack_require__("../../../../../src/app/entidades/AB_DIC_TURNO.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TurnosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TurnosComponent = (function () {
    function TurnosComponent(ABDICTURNOService, renderer) {
        this.ABDICTURNOService = ABDICTURNOService;
        this.renderer = renderer;
    }
    TurnosComponent.prototype.ngOnInit = function () {
        this.listar_turnos();
    };
    //abre popup para adicionar turno
    TurnosComponent.prototype.showDialogToAdd = function () {
        this.novo = true;
        this.id_turno_selected = 0;
        this.valor_turno = "";
        this.simular(this.dialog);
    };
    //gravar unidade de turno
    TurnosComponent.prototype.gravarturnos = function () {
        var _this = this;
        var turno = new __WEBPACK_IMPORTED_MODULE_2_app_entidades_AB_DIC_TURNO__["a" /* AB_DIC_TURNO */];
        turno.nome_TURNO = this.valor_turno;
        turno.inativo = false;
        if (this.novo) {
            this.ABDICTURNOService.create(turno).subscribe(function (response) {
                _this.listar_turnos();
                _this.simular(_this.closedialog);
            }, function (error) { return console.log(error); });
        }
        else {
            turno.id_TURNO = this.id_turno_selected;
            this.ABDICTURNOService.update(turno).then(function () {
                _this.listar_turnos();
                _this.simular(_this.closedialog);
            });
        }
    };
    //listar os dados das unidades de turnos na tabela
    TurnosComponent.prototype.listar_turnos = function () {
        var _this = this;
        this.turnos = [];
        this.ABDICTURNOService.getAll().subscribe(function (response) {
            for (var x in response) {
                _this.turnos.push({ id: response[x].id_TURNO, nome: response[x].nome_TURNO });
            }
            _this.turnos = _this.turnos.slice();
        }, function (error) { return console.log(error); });
    };
    //apagar turno
    TurnosComponent.prototype.apagarturnos = function () {
        var _this = this;
        var turno = new __WEBPACK_IMPORTED_MODULE_2_app_entidades_AB_DIC_TURNO__["a" /* AB_DIC_TURNO */];
        turno.nome_TURNO = this.valor_turno;
        turno.id_TURNO = this.id_turno_selected;
        turno.data_ANULACAO = new Date();
        turno.utz_ANULACAO = JSON.parse(localStorage.getItem('userapp'))["id"];
        turno.inativo = true;
        this.ABDICTURNOService.update(turno).then(function () {
            _this.listar_turnos();
        });
    };
    //ao clicar na tabela abrir popup para editar
    TurnosComponent.prototype.onRowSelect = function (event) {
        this.id_turno_selected = event.data.id;
        this.valor_turno = event.data.nome;
        this.novo = false;
        this.simular(this.dialog);
    };
    //simular click para mostrar mensagem
    TurnosComponent.prototype.simular = function (element) {
        var event = new MouseEvent('click', { bubbles: true });
        this.renderer.invokeElementMethod(element.nativeElement, 'dispatchEvent', [event]);
    };
    return TurnosComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialog'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], TurnosComponent.prototype, "dialog", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closedialog'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], TurnosComponent.prototype, "closedialog", void 0);
TurnosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-turnos',
        template: __webpack_require__("../../../../../src/app/paginas/parametrosanalisebanhos/turnos/turnos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/paginas/parametrosanalisebanhos/turnos/turnos.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_app_servicos_ab_dic_turno_service__["a" /* ABDICTURNOService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_servicos_ab_dic_turno_service__["a" /* ABDICTURNOService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _d || Object])
], TurnosComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=turnos.component.js.map

/***/ }),

/***/ "../../../../../src/app/paginas/parametrosanalisebanhos/unidadesmedida/unidadesmedida.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/paginas/parametrosanalisebanhos/unidadesmedida/unidadesmedida.component.html":
/***/ (function(module, exports) {

module.exports = "<app-controlos (anteriorbt)=\"anterior()\" (seguintebt)=\"seguinte()\" (apagarbt)=\"apagar()\"></app-controlos>\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"red\">\n            <h4 class=\"title\">Unidades de Medida</h4>\n          </div>\n          <div class=\"card-content\">\n            <p-dataTable [style]=\"{'width':'300px'}\" [value]=\"medidas\" selectionMode=\"single\" [(selection)]=\"selectedCar\" (onRowSelect)=\"onRowSelect($event)\"\n              [paginator]=\"true\" rows=\"15\">\n              <p-column [style]=\"{'width':'30px'}\" field=\"medida\" header=\"Unidades de Medida\" [filter]=\"true\" [sortable]=\"true\"></p-column>\n              <p-footer>\n                <a (click)=\"showDialogToAdd()\" style=\"color: black; cursor:pointer; margin-left:10px;\" title=\"Adicionar nova linha\">\n                         <i class=\"material-icons\">add</i> Adicionar\n                        </a>\n              </p-footer>\n            </p-dataTable>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<button class=\"btn btn-primary btn-lg\" #dialog data-toggle=\"modal\" [hidden]=\"true\" data-target=\"#myModalNorm\" data-backdrop=\"false\"></button>\n\n<!-- Modal Medidas-->\n<div class=\"modal fade\" id=\"myModalNorm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n                       <span aria-hidden=\"true\">&times;</span>\n                       <span class=\"sr-only\">Close</span>\n                </button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">\n          Unidades de Medida\n        </h4>\n      </div>\n      <form role=\"form\" ngNativeValidate (ngSubmit)=\"gravarmedidas()\">\n        <!-- Modal Body -->\n        <div class=\"modal-body\">\n          <div class=\"form-group\">\n            <label for=\"medida\">Medida</label>\n            <input type=\"text\" class=\"form-control\" id=\"medida\" [(ngModel)]=\"valor_medida\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Introduza a medida\"\n              required />\n          </div>\n        </div>\n        <!-- Modal Footer -->\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" #closedialog data-dismiss=\"modal\">Fechar</button>\n          <button type=\"button\" (click)=\"apagarmedidas()\" [hidden]=\"novo\" class=\"btn btn-danger\" data-dismiss=\"modal\">Remover</button>\n          <button type=\"submit\" class=\"btn btn-success \">Gravar</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/paginas/parametrosanalisebanhos/unidadesmedida/unidadesmedida.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_entidades_AB_DIC_UNIDADE_MEDIDA__ = __webpack_require__("../../../../../src/app/entidades/AB_DIC_UNIDADE_MEDIDA.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_servicos_ab_unidade_medida_service__ = __webpack_require__("../../../../../src/app/servicos/ab-unidade-medida.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnidadesmedidaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UnidadesmedidaComponent = (function () {
    function UnidadesmedidaComponent(ABUNIDADADEMEDIDAService, renderer) {
        this.ABUNIDADADEMEDIDAService = ABUNIDADADEMEDIDAService;
        this.renderer = renderer;
        this.medidas = [];
    }
    UnidadesmedidaComponent.prototype.ngOnInit = function () {
        this.listar_medidas();
    };
    //abre popup para adicionar medida
    UnidadesmedidaComponent.prototype.showDialogToAdd = function () {
        this.novo = true;
        this.id_medida_selected = 0;
        this.valor_medida = "";
        this.simular(this.dialog);
    };
    //gravar unidade de medida
    UnidadesmedidaComponent.prototype.gravarmedidas = function () {
        var _this = this;
        var UNIDADE_MEDIDA = new __WEBPACK_IMPORTED_MODULE_1_app_entidades_AB_DIC_UNIDADE_MEDIDA__["a" /* AB_DIC_UNIDADE_MEDIDA */];
        UNIDADE_MEDIDA.medida = this.valor_medida;
        UNIDADE_MEDIDA.inativo = false;
        if (this.novo) {
            this.ABUNIDADADEMEDIDAService.create(UNIDADE_MEDIDA).subscribe(function (response) {
                _this.listar_medidas();
                _this.simular(_this.closedialog);
            }, function (error) { return console.log(error); });
        }
        else {
            UNIDADE_MEDIDA.id_MEDIDA = this.id_medida_selected;
            this.ABUNIDADADEMEDIDAService.update(UNIDADE_MEDIDA).then(function () {
                _this.listar_medidas();
                _this.simular(_this.closedialog);
            });
        }
    };
    //listar os dados das unidades de medidas na tabela
    UnidadesmedidaComponent.prototype.listar_medidas = function () {
        var _this = this;
        this.medidas = [];
        this.ABUNIDADADEMEDIDAService.getAll().subscribe(function (response) {
            for (var x in response) {
                _this.medidas.push({ id: response[x].id_MEDIDA, medida: response[x].medida });
            }
            _this.medidas = _this.medidas.slice();
        }, function (error) { return console.log(error); });
    };
    //apagar medida
    UnidadesmedidaComponent.prototype.apagarmedidas = function () {
        var _this = this;
        var UNIDADE_MEDIDA = new __WEBPACK_IMPORTED_MODULE_1_app_entidades_AB_DIC_UNIDADE_MEDIDA__["a" /* AB_DIC_UNIDADE_MEDIDA */];
        UNIDADE_MEDIDA.id_MEDIDA = this.id_medida_selected;
        UNIDADE_MEDIDA.medida = this.valor_medida;
        UNIDADE_MEDIDA.data_ANULACAO = new Date();
        UNIDADE_MEDIDA.utz_ANULACAO = JSON.parse(localStorage.getItem('userapp'))["id"];
        UNIDADE_MEDIDA.inativo = true;
        this.ABUNIDADADEMEDIDAService.update(UNIDADE_MEDIDA).then(function () {
            _this.listar_medidas();
        }, function (error) {
            console.log(error);
        });
    };
    //ao clicar na tabela abrir popup para editar
    UnidadesmedidaComponent.prototype.onRowSelect = function (event) {
        this.id_medida_selected = event.data.id;
        this.valor_medida = event.data.medida;
        this.novo = false;
        this.simular(this.dialog);
    };
    //simular click para mostrar mensagem
    UnidadesmedidaComponent.prototype.simular = function (element) {
        var event = new MouseEvent('click', { bubbles: true });
        this.renderer.invokeElementMethod(element.nativeElement, 'dispatchEvent', [event]);
    };
    return UnidadesmedidaComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialog'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], UnidadesmedidaComponent.prototype, "dialog", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closedialog'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], UnidadesmedidaComponent.prototype, "closedialog", void 0);
UnidadesmedidaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-unidadesmedida',
        template: __webpack_require__("../../../../../src/app/paginas/parametrosanalisebanhos/unidadesmedida/unidadesmedida.component.html"),
        styles: [__webpack_require__("../../../../../src/app/paginas/parametrosanalisebanhos/unidadesmedida/unidadesmedida.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_servicos_ab_unidade_medida_service__["a" /* ABUNIDADADEMEDIDAService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_servicos_ab_unidade_medida_service__["a" /* ABUNIDADADEMEDIDAService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _d || Object])
], UnidadesmedidaComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=unidadesmedida.component.js.map

/***/ }),

/***/ "../../../../../src/app/paginas/parametrosanalisebanhos/zonas/zonas.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/paginas/parametrosanalisebanhos/zonas/zonas.component.html":
/***/ (function(module, exports) {

module.exports = "<app-controlos (anteriorbt)=\"anterior()\" (seguintebt)=\"seguinte()\" (apagarbt)=\"apagar()\"></app-controlos>\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"red\">\n            <h4 class=\"title\">Zonas</h4>\n          </div>\n          <div class=\"card-content\">\n            <p-dataTable [style]=\"{'width':'300px'}\" [value]=\"zonas\" selectionMode=\"single\" [(selection)]=\"selectedCar\" (onRowSelect)=\"onRowSelect($event)\"\n              [paginator]=\"true\" rows=\"15\">\n              <p-column [style]=\"{'width':'30px'}\" field=\"nome\" header=\"Nome Zona\" [filter]=\"true\" [sortable]=\"true\"></p-column>\n              <p-footer>\n                <a (click)=\"showDialogToAdd()\" style=\"color: black; cursor:pointer; margin-left:10px;\" title=\"Adicionar nova linha\">\n                         <i class=\"material-icons\">add</i> Adicionar\n                        </a>\n              </p-footer>\n            </p-dataTable>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<button class=\"btn btn-primary btn-lg\" #dialog data-toggle=\"modal\" [hidden]=\"true\" data-target=\"#myModalNorm\" data-backdrop=\"false\"></button>\n\n<!-- Modal zonas-->\n<div class=\"modal fade\" id=\"myModalNorm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n                       <span aria-hidden=\"true\">&times;</span>\n                       <span class=\"sr-only\">Close</span>\n                </button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">\n          Zonas\n        </h4>\n      </div>\n      <form role=\"form\" ngNativeValidate (ngSubmit)=\"gravarzonas()\">\n        <!-- Modal Body -->\n        <div class=\"modal-body\">\n          <div class=\"form-group\">\n            <label for=\"zona\">Nome Zona</label>\n            <input type=\"text\" class=\"form-control\" id=\"zona\" [(ngModel)]=\"valor_zona\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Introduza a zona\"\n              required />\n          </div>\n        </div>\n        <!-- Modal Footer -->\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" #closedialog data-dismiss=\"modal\">Fechar</button>\n          <button type=\"button\" (click)=\"apagarzonas()\" [hidden]=\"novo\" class=\"btn btn-danger\" data-dismiss=\"modal\">Remover</button>\n          <button type=\"submit\" class=\"btn btn-success \">Gravar</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/paginas/parametrosanalisebanhos/zonas/zonas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_entidades_AB_DIC_ZONA__ = __webpack_require__("../../../../../src/app/entidades/AB_DIC_ZONA.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_servicos_ab_dic_zona_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-zona.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZonasComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ZonasComponent = (function () {
    function ZonasComponent(ABDICZONAService, renderer) {
        this.ABDICZONAService = ABDICZONAService;
        this.renderer = renderer;
    }
    ZonasComponent.prototype.ngOnInit = function () {
        this.listar_zonas();
    };
    //abre popup para adicionar zona
    ZonasComponent.prototype.showDialogToAdd = function () {
        this.novo = true;
        this.id_zona_selected = 0;
        this.valor_zona = "";
        this.simular(this.dialog);
    };
    //gravar unidade de zona
    ZonasComponent.prototype.gravarzonas = function () {
        var _this = this;
        var UNIDADE_zona = new __WEBPACK_IMPORTED_MODULE_1_app_entidades_AB_DIC_ZONA__["a" /* AB_DIC_ZONA */];
        UNIDADE_zona.nome_ZONA = this.valor_zona;
        UNIDADE_zona.inativo = false;
        if (this.novo) {
            this.ABDICZONAService.create(UNIDADE_zona).subscribe(function (response) {
                _this.listar_zonas();
                _this.simular(_this.closedialog);
            }, function (error) { return console.log(error); });
        }
        else {
            UNIDADE_zona.id_ZONA = this.id_zona_selected;
            this.ABDICZONAService.update(UNIDADE_zona).then(function () {
                _this.listar_zonas();
                _this.simular(_this.closedialog);
            });
        }
    };
    //listar os dados das unidades de zonas na tabela
    ZonasComponent.prototype.listar_zonas = function () {
        var _this = this;
        this.zonas = [];
        this.ABDICZONAService.getAll().subscribe(function (response) {
            for (var x in response) {
                _this.zonas.push({ id: response[x].id_ZONA, nome: response[x].nome_ZONA });
            }
            _this.zonas = _this.zonas.slice();
        }, function (error) { return console.log(error); });
    };
    //apagar zona
    ZonasComponent.prototype.apagarzonas = function () {
        var _this = this;
        var UNIDADE_zona = new __WEBPACK_IMPORTED_MODULE_1_app_entidades_AB_DIC_ZONA__["a" /* AB_DIC_ZONA */];
        UNIDADE_zona.nome_ZONA = this.valor_zona;
        UNIDADE_zona.id_ZONA = this.id_zona_selected;
        UNIDADE_zona.inativo = true;
        UNIDADE_zona.utz_ANULACAO = JSON.parse(localStorage.getItem('userapp'))["id"];
        UNIDADE_zona.data_ANULACAO = new Date();
        this.ABDICZONAService.update(UNIDADE_zona).then(function () {
            _this.listar_zonas();
        });
    };
    //ao clicar na tabela abrir popup para editar
    ZonasComponent.prototype.onRowSelect = function (event) {
        this.id_zona_selected = event.data.id;
        this.valor_zona = event.data.nome;
        this.novo = false;
        this.simular(this.dialog);
    };
    //simular click para mostrar mensagem
    ZonasComponent.prototype.simular = function (element) {
        var event = new MouseEvent('click', { bubbles: true });
        this.renderer.invokeElementMethod(element.nativeElement, 'dispatchEvent', [event]);
    };
    return ZonasComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialog'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], ZonasComponent.prototype, "dialog", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closedialog'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], ZonasComponent.prototype, "closedialog", void 0);
ZonasComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-zonas',
        template: __webpack_require__("../../../../../src/app/paginas/parametrosanalisebanhos/zonas/zonas.component.html"),
        styles: [__webpack_require__("../../../../../src/app/paginas/parametrosanalisebanhos/zonas/zonas.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_servicos_ab_dic_zona_service__["a" /* ABDICZONAService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_servicos_ab_dic_zona_service__["a" /* ABDICZONAService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _d || Object])
], ZonasComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=zonas.component.js.map

/***/ }),

/***/ "../../../../../src/app/paginas/perfil/perfil.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/paginas/perfil/perfil.component.html":
/***/ (function(module, exports) {

module.exports = "<app-controlos (anteriorbt)=\"anterior()\" (seguintebt)=\"seguinte()\" (apagarbt)=\"apagar()\"></app-controlos>\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"red\">\n            <h4 class=\"title\">Perfil</h4>\n            <p class=\"category\">Complete os Dados</p>\n          </div>\n          <div class=\"card-content\">\n            <form id=\"formUtilizador\" (ngSubmit)=\"gravar()\" ngNativeValidate>\n              <div class=\"row\">\n                <div class=\"col-md-5\">\n                  <div [ngClass]=\"id_utl == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating \">\n                    <label class=\"control-label\">ID Utilizador</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"id_utl\" [ngModelOptions]=\"{standalone: true}\" disabled>\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <div [ngClass]=\"login == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating\">\n                    <label class=\"control-label\">Login</label>\n                    <input [ngClass]=\"class_numexiste\" type=\"text\" class=\"form-control\" (change)=\"resetclass()\" [(ngModel)]=\"login\" [ngModelOptions]=\"{standalone: true}\"\n                      [disabled]=\"!modoedicao\" required>\n                    <span style=\"font-size: 12px; color: red; font-weight: 500;\" [hidden]=\"!num_existe\">Nome para Login não se encontra disponível! </span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div [ngClass]=\"nome == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating\">\n                    <label class=\"control-label\">Nome Utilizador</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"nome\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"!modoedicao\"\n                      required>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <div [ngClass]=\"password == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating\">\n                    <label class=\"control-label\">Password</label>\n                    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"!modoedicao\"\n                      required>\n                  </div>\n                </div>\n                <div class=\"col-md-8\">\n                  <div class=\"form-group\">\n                    <div [ngClass]=\"email == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating\">\n                      <label class=\"control-label\">Email</label>\n                      <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"!modoedicao\"\n                        required>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <button type=\"reset\" (click)=\"backview()\" class=\"btn btn-danger pull-right\" [hidden]=\"!modoedicao\">Cancelar</button>\n              <button type=\"submit\" class=\"btn btn-success pull-right\" [hidden]=\"!modoedicao\">Gravar</button>\n              <div class=\"clearfix\"></div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<button class=\"btn btn-danger btn-block\" #inputnotifi [hidden]=\"true\" onclick=\"demo.showNotification('top','right','Inseriu com Sucesso!',2)\"></button>\n<button class=\"btn btn-danger btn-block\" #inputgravou [hidden]=\"true\" onclick=\"demo.showNotification('top','right','Alterado com Sucesso!',2)\"></button>\n<button class=\"btn btn-danger btn-block\" #inputerro [hidden]=\"true\" onclick=\"demo.showNotification('top','right','ERRO!! Registo não foi Gravado!',4)\"></button>"

/***/ }),

/***/ "../../../../../src/app/paginas/perfil/perfil.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_entidades_GER_UTILIZADORES__ = __webpack_require__("../../../../../src/app/entidades/GER_UTILIZADORES.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_menu_sidebar_metadata__ = __webpack_require__("../../../../../src/app/menu/sidebar.metadata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_servicos_ger_utilizadores_service__ = __webpack_require__("../../../../../src/app/servicos/ger-utilizadores.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PerfilComponent = (function () {
    function PerfilComponent(confirmationService, router, GERUTILIZADORESService, renderer, route, globalVar, location) {
        this.confirmationService = confirmationService;
        this.router = router;
        this.GERUTILIZADORESService = GERUTILIZADORESService;
        this.renderer = renderer;
        this.route = route;
        this.globalVar = globalVar;
        this.location = location;
        this.utilizador = [];
        this.modoedicao = false;
        this.novo = false;
        this.nome = "";
        this.login = "";
        this.email = "";
        this.password = null;
        this.num_existe = false;
        this.class_numexiste = "";
    }
    PerfilComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalVar.setseguinte(false);
        this.globalVar.setanterior(false);
        this.globalVar.setapagar(false);
        this.globalVar.setcriar(false);
        this.globalVar.seteditar(true);
        this.globalVar.setvoltar(true);
        this.globalVar.setpesquisar(false);
        this.globalVar.setduplicar(false);
        this.user = JSON.parse(localStorage.getItem('userapp'))["id"];
        var url = this.router.routerState.snapshot.url;
        url = url.slice(1);
        var urlarray = url.split("/");
        if (urlarray[1].match("editar") || urlarray[1].match("view")) {
            this.novo = false;
            this.id_utl = 0;
            this.email = "";
            this.password = 0;
        }
        if (urlarray[1] != null) {
            if (urlarray[1].match("editar")) {
                this.globalVar.setseguinte(false);
                this.globalVar.setanterior(false);
                this.globalVar.setapagar(false);
                this.globalVar.setcriar(true);
                this.modoedicao = true;
            }
            else {
                this.modoedicao = false;
            }
        }
        this.GERUTILIZADORESService.getbyID(this.user).subscribe(function (response) {
            var count = Object.keys(response).length;
            //se existir utilizadores com o id
            if (count > 0) {
                _this.utilizadores_dados = response[0];
                for (var x in response) {
                    _this.id_utl = response[x].id_UTILIZADOR;
                    _this.nome = response[x].nome_UTILIZADOR;
                    _this.email = response[x].email;
                    _this.password = response[x].password;
                    _this.login = response[x].login;
                }
            }
            else {
                _this.router.navigate(['home']);
            }
        }, function (error) { console.log(error); });
    };
    //bt cancelar
    PerfilComponent.prototype.backview = function () {
        this.location.back();
    };
    PerfilComponent.prototype.resetclass = function () {
        this.num_existe = false;
        this.class_numexiste = "";
    };
    //bt gravar
    PerfilComponent.prototype.gravar = function () {
        var _this = this;
        var utilizador = new __WEBPACK_IMPORTED_MODULE_1_app_entidades_GER_UTILIZADORES__["a" /* GER_UTILIZADORES */];
        var id = this.user;
        utilizador = this.utilizadores_dados;
        utilizador.nome_UTILIZADOR = this.nome;
        utilizador.login = this.login;
        utilizador.password = this.password;
        utilizador.email = this.email;
        //verifica se existe utilizadro com o mesmo login
        this.GERUTILIZADORESService.verifica_login(id, this.login).subscribe(function (response) {
            var count = Object.keys(response).length;
            if (count == 0) {
                _this.GERUTILIZADORESService.update(utilizador).then(function () {
                    _this.simular(_this.inputgravou);
                    _this.router.navigate(['perfil/view']);
                });
            }
            else {
                _this.num_existe = true;
                _this.class_numexiste = "num_existe";
            }
        }, function (error) { console.log(error); _this.simular(_this.inputerro); });
    };
    //simular click para mostrar mensagem
    PerfilComponent.prototype.simular = function (element) {
        var event = new MouseEvent('click', { bubbles: true });
        this.renderer.invokeElementMethod(element.nativeElement, 'dispatchEvent', [event]);
    };
    return PerfilComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputnotifi'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], PerfilComponent.prototype, "inputnotifi", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputgravou'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], PerfilComponent.prototype, "inputgravou", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputerro'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object)
], PerfilComponent.prototype, "inputerro", void 0);
PerfilComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-perfil',
        template: __webpack_require__("../../../../../src/app/paginas/perfil/perfil.component.html"),
        styles: [__webpack_require__("../../../../../src/app/paginas/perfil/perfil.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6_app_servicos_ger_utilizadores_service__["a" /* GERUTILIZADORESService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_app_servicos_ger_utilizadores_service__["a" /* GERUTILIZADORESService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["ActivatedRoute"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2_app_menu_sidebar_metadata__["a" /* AppGlobals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_menu_sidebar_metadata__["a" /* AppGlobals */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _k || Object])
], PerfilComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=perfil.component.js.map

/***/ }),

/***/ "../../../../../src/app/paginas/registoanalises/registoanalises.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/paginas/registoanalises/registoanalises.component.html":
/***/ (function(module, exports) {

module.exports = "<app-controlos></app-controlos>\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"red\">\n            <h4 class=\"title\">Registo Análises</h4>\n            <p class=\"category\"></p>\n          </div>\n          <div class=\"card-content table-responsive\">\n\n            <p-dataTable [value]=\"cols\" dataKey=\"id\" [rows]=\"15\" [paginator]=\"true\" [pageLinks]=\"3\" [stacked]=\"stacked\" (onRowDblclick)=\"abrir($event)\" [rowsPerPageOptions]=\"[15,20,30,'todos']\">\n              <p-column [filter]=\"true\" [sortable]=\"true\" styleclass=\"text-danger\" field=\"linha\" header=\"Linha\">\n                <ng-template let-car=\"rowData\" pTemplate=\"body\">\n                  <div [style.background]=\"car['cor']\">\n                    {{car['linha']}}\n                  </div>\n                </ng-template>\n              </p-column>\n              <p-column [sortable]=\"true\" [filter]=\"true\" styleclass=\"text-danger\" field=\"id\" header=\"Código da Análise\"></p-column>\n              <p-column [sortable]=\"true\" [filter]=\"true\" styleclass=\"text-danger\" field=\"nome\" header=\"Banho\"></p-column>\n              <p-column [sortable]=\"true\" [filter]=\"true\" styleclass=\"text-danger\" field=\"tina\" header=\"Tina\"></p-column>\n              <p-column [sortable]=\"true\" [filter]=\"true\" styleclass=\"text-danger\" field=\"data\" header=\"Data Registo\"></p-column>\n              \n              <p-column styleClass=\"col-button\">\n                <ng-template pTemplate=\"header\">\n                </ng-template>\n                <ng-template let-car=\"rowData\" pTemplate=\"body\">\n                  <a style=\"color: black; cursor:pointer;\" title=\"Ver mais\" [routerLink]=\"['/registo/view']\" [queryParams]=\"{ id: car.id }\">\n                  <i class=\"material-icons\">search</i>\n                  </a>\n                </ng-template>\n              </p-column>\n            </p-dataTable>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/paginas/registoanalises/registoanalises.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_menu_sidebar_metadata__ = __webpack_require__("../../../../../src/app/menu/sidebar.metadata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_servicos_ab_mov_analise_service__ = __webpack_require__("../../../../../src/app/servicos/ab-mov-analise.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistoanalisesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistoanalisesComponent = (function () {
    function RegistoanalisesComponent(router, globalVar, ABMOVANALISEService) {
        this.router = router;
        this.globalVar = globalVar;
        this.ABMOVANALISEService = ABMOVANALISEService;
    }
    RegistoanalisesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cols = [];
        this.globalVar.setvoltar(false);
        this.globalVar.seteditar(false);
        this.globalVar.setapagar(false);
        this.globalVar.setseguinte(false);
        this.globalVar.setanterior(false);
        this.globalVar.setcriar(true);
        this.globalVar.setpesquisar(true);
        this.globalVar.setduplicar(false);
        this.ABMOVANALISEService.getAll2().subscribe(function (response) {
            for (var x in response) {
                _this.cols.push({ id: response[x][0].id_ANALISE, linha: response[x][0].id_LINHA, data: new Date(response[x][0].data_ANALISE).toLocaleDateString(), nome: response[x][2].nome_BANHO, tina: response[x][3].cod_TINA, cor: response[x][1].cor });
            }
            _this.cols = _this.cols.slice();
        }, function (error) { return console.log(error); });
    };
    //clicar 2 vezes na tabela abre linha
    RegistoanalisesComponent.prototype.abrir = function (event) {
        this.router.navigate(['registo/view'], { queryParams: { id: event.data.id } });
    };
    return RegistoanalisesComponent;
}());
RegistoanalisesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-registoanalises',
        template: __webpack_require__("../../../../../src/app/paginas/registoanalises/registoanalises.component.html"),
        styles: [__webpack_require__("../../../../../src/app/paginas/registoanalises/registoanalises.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_menu_sidebar_metadata__["a" /* AppGlobals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_menu_sidebar_metadata__["a" /* AppGlobals */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_servicos_ab_mov_analise_service__["a" /* ABMOVANALISEService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_servicos_ab_mov_analise_service__["a" /* ABMOVANALISEService */]) === "function" && _c || Object])
], RegistoanalisesComponent);

var _a, _b, _c;
//# sourceMappingURL=registoanalises.component.js.map

/***/ }),

/***/ "../../../../../src/app/paginas/registoanalises/registoform/registoform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".material-switch > input[type=\"checkbox\"] {\r\n    display: none;   \r\n}\r\n\r\n.material-switch > label {\r\n    cursor: pointer;\r\n    height: 0px;\r\n    position: relative; \r\n    width: 40px;  \r\n}\r\n\r\n.material-switch > label::before {\r\n    background: rgb(0, 0, 0);\r\n    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.5);\r\n    border-radius: 8px;\r\n    content: '';\r\n    height: 16px;\r\n    margin-top: -8px;\r\n    position:absolute;\r\n    opacity: 0.3;\r\n    transition: all 0.4s ease-in-out;\r\n    width: 40px;\r\n}\r\n.material-switch > label::after {\r\n    background: rgb(255, 255, 255);\r\n    border-radius: 16px;\r\n    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);\r\n    content: '';\r\n    height: 24px;\r\n    left: -4px;\r\n    margin-top: -8px;\r\n    position: absolute;\r\n    top: -4px;\r\n    transition: all 0.3s ease-in-out;\r\n    width: 24px;\r\n}\r\n.material-switch > input[type=\"checkbox\"]:checked + label::before {\r\n    background: inherit;\r\n    opacity: 0.5;\r\n}\r\n.material-switch > input[type=\"checkbox\"]:checked + label::after {\r\n    background: inherit;\r\n    left: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/paginas/registoanalises/registoform/registoform.component.html":
/***/ (function(module, exports) {

module.exports = "<app-controlos (anteriorbt)=\"anterior()\" (seguintebt)=\"seguinte()\" (apagarbt)=\"apagar()\"></app-controlos>\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"red\">\n            <h4 class=\"title\">Registo de Análises</h4>\n            <p class=\"category\">Complete os Dados</p>\n          </div>\n          <div class=\"card-content\">\n            <form id=\"formAnalise\" (ngSubmit)=\"gravar()\" ngNativeValidate>\n              <div class=\"row\">\n                <div class=\"col-md-2\">\n                  <div [ngClass]=\"codigo == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating \">\n                    <label class=\"control-label\">Código Analise</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"codigo\" [ngModelOptions]=\"{standalone: true}\" disabled>\n                  </div>\n                </div>\n                <div class=\"col-md-2\">\n                  <div [ngClass]=\"data == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating\">\n                    <label class=\"control-label\">Data Última Alteração</label>\n                    <input type=\"text\" class=\"form-control\" value=\"{{data}}\" disabled>\n                  </div>\n                </div>\n                <div class=\"col-md-5\">\n                  <div class=\"form-group form-black label-floating\">\n                    <label style=\"font-size: 14px;\">Data/Hora Análise</label>\n                    <p-calendar [style]=\"{'width':'150px','height':'36px','padding':'5px 4px'}\" dateFormat=\"yy-mm-dd\" placeholder=\"yy-mm-dd\" [monthNavigator]=\"true\"\n                      [yearNavigator]=\"true\" yearRange=\"2000:2050\" [(ngModel)]=\"data_ANALISE\" [ngModelOptions]=\"{standalone: true}\"\n                      [showIcon]=\"true\" [hidden]=\"!modoedicao\" [required]=\"true\"></p-calendar>\n                    <label style=\"width:100px\" class=\"ng-tns-c3-11 ui-dropdown-label ui-inputtext ui-corner-all\" [hidden]=\"modoedicao\">{{data_ANALISE | date: 'yyyy-MM-dd'}}</label>\n                    <input [hidden]=\"!modoedicao\" style=\"width:80px; margin-left:30px; padding: 5px 4px;\" [(ngModel)]=\"hora_ANALISE\" [ngModelOptions]=\"{standalone: true}\"\n                      type=\"time\" class=\"ng-tns-c9-3 ui-inputtext ui-widget ui-state-default ui-corner-all\" ng-reflect-ng-class=\"ui-inputtext ui-widget ui-stat\"\n                      required=\"true\" placeholder=\"hh:mm\">\n                    <label style=\"width:70px;\" class=\"ng-tns-c3-11 ui-dropdown-label ui-inputtext ui-corner-all\" [hidden]=\"modoedicao\">{{hora_ANALISE}}</label>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-2\">\n                  <div class=\"form-group form-black label-floating\">\n                    <label style=\"font-size: 14px;\">Linha</label>\n                    <p-dropdown (onChange)=\"preenche_banhos($event)\" [options]=\"linhas\" [style.background]=\"cor_linha\" [style]=\"{'width':'100px'}\" [(ngModel)]=\"linha\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"!novo\"\n                      [required]=\"true\"></p-dropdown>\n                  </div>\n                </div>\n                <div class=\"col-md-5\">\n                  <div class=\"form-group form-black label-floating\">\n                    <label style=\"font-size: 14px;\">Banho</label>\n                    <p-dropdown [filter]=\"true\" [options]=\"banhos\" [style]=\"{'width':'300px'}\" [(ngModel)]=\"banhos_valor\" [ngModelOptions]=\"{standalone: true}\"\n                      (onChange)=\"nome_tinas($event)\" [disabled]=\"disablebanho\" [required]=\"true\"></p-dropdown>\n                    <label style=\"font-size: 14px;\">Tina: </label>\n                    <span style=\"font-size: 12px; padding-right: 20px;\"><b> {{nome_tina}}</b></span>\n                    <span style=\"font-size: 12px; padding-right: 20px;\"><b> {{capacidade_tina}} L</b></span>\n                  </div>\n                </div>\n                <div class=\"col-md-5\">\n                  <div class=\"form-group form-black label-floating\">\n                    <label style=\"font-size: 14px;\">Análise Interna/Externa</label>\n                    <p-dropdown [options]=\"tipo_analise\" [(ngModel)]=\"analise_valor\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"!modoedicao\"\n                      [required]=\"true\"></p-dropdown>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-8\">\n                  <div class=\"form-group\">\n                    <div [ngClass]=\"obs == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating\">\n                      <label class=\"control-label\">Observações</label>\n                      <textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"obs\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"!modoedicao\"></textarea>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-4\">\n                  <div class=\" form-black label-floating\" style=\"padding-top: 11px;\">\n                    <label class=\"pull-left\" style=\"font-size: 14px; color:black;\">Célula HULL</label>\n                    <div class=\"material-switch pull-left\">\n                      <input id=\"someSwitchOptionSuccess\" type=\"checkbox\" [(ngModel)]=\"celula\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"!modoedicao\">\n                      <label for=\"someSwitchOptionSuccess\" class=\"label-success\" style=\"margin-left: 24px;\"></label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <p-dataTable [value]=\"banho_componentes\">\n                    <p-column field=\"nome_comp\" header=\"COMPONENTE\">\n                      <ng-template pTemplate=\"body\" let-col let-row=\"rowData \">\n                        <label class=\"ng-tns-c3-11 ui-dropdown-label ui-inputtext ui-corner-all\">{{row['nome_comp']}}</label>\n                      </ng-template>\n                    </p-column>\n                    <p-column field=\"resultado\" header=\"RESULTADO\">\n                      <ng-template pTemplate=\"body\" let-col2 let-row2=\"rowData \">\n                        <input type=\"text\" style=\"text-align:center\"class=\"form-control\" [(ngModel)]=\"row2['resultado']\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"!modoedicao\">\n                      </ng-template>\n                    </p-column>\n                    <p-column field=\"calculo\" header=\"CÁLCULO\">\n                      <ng-template pTemplate=\"body\"  let-col3 let-row3=\"rowData \">\n                        <input type=\"text\" style=\"text-align:center\" class=\"form-control\" [(ngModel)]=\"row3['calculo']\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"!modoedicao\">\n                      </ng-template>\n                    </p-column>\n                  </p-dataTable>\n                </div>\n              </div>\n              <button type=\"reset\" (click)=\"backview()\" class=\"btn btn-danger pull-right\" [hidden]=\"!modoedicao\">Cancelar</button>\n              <button type=\"submit\" class=\"btn btn-success pull-right\" [hidden]=\"!modoedicao\">Gravar</button>\n              <div class=\"clearfix\"></div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<button class=\"btn btn-danger btn-block\" #inputnotifi [hidden]=\"true\" onclick=\"demo.showNotification('top','right','Inseriu com Sucesso!',2)\"></button>\n<button class=\"btn btn-danger btn-block\" #inputgravou [hidden]=\"true\" onclick=\"demo.showNotification('top','right','Alterado com Sucesso!',2)\"></button>\n<button class=\"btn btn-danger btn-block\" #inputapagar [hidden]=\"true\" onclick=\"demo.showNotification('top','right','Apagado com Sucesso!',2)\"></button>\n<button class=\"btn btn-danger btn-block\" #inputerro [hidden]=\"true\" onclick=\"demo.showNotification('top','right','ERRO!! Registo não foi Gravado!',4)\"></button>\n\n<button #dialog data-toggle=\"modal\" [hidden]=\"true\" data-target=\"#dialog_novo_componente_banho\"></button>"

/***/ }),

/***/ "../../../../../src/app/paginas/registoanalises/registoform/registoform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_menu_sidebar_metadata__ = __webpack_require__("../../../../../src/app/menu/sidebar.metadata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_servicos_ab_dic_banho_componente_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-banho-componente.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_servicos_ab_dic_componente_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-componente.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_servicos_ab_dic_linha_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-linha.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_servicos_ab_dic_banho_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-banho.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_entidades_AB_MOV_ANALISE__ = __webpack_require__("../../../../../src/app/entidades/AB_MOV_ANALISE.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_servicos_ab_mov_analise_service__ = __webpack_require__("../../../../../src/app/servicos/ab-mov-analise.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_entidades_AB_MOV_ANALISE_LINHA__ = __webpack_require__("../../../../../src/app/entidades/AB_MOV_ANALISE_LINHA.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_servicos_ab_mov_analise_linha_service__ = __webpack_require__("../../../../../src/app/servicos/ab-mov-analise-linha.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistoformComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var RegistoformComponent = (function () {
    function RegistoformComponent(ABMOVANALISELINHAService, ABMOVANALISEService, ABDICBANHOService, ABDICLINHAService, ABDICCOMPONENTEService, ABDICBANHOCOMPONENTEService, confirmationService, router, renderer, route, globalVar, location) {
        this.ABMOVANALISELINHAService = ABMOVANALISELINHAService;
        this.ABMOVANALISEService = ABMOVANALISEService;
        this.ABDICBANHOService = ABDICBANHOService;
        this.ABDICLINHAService = ABDICLINHAService;
        this.ABDICCOMPONENTEService = ABDICCOMPONENTEService;
        this.ABDICBANHOCOMPONENTEService = ABDICBANHOCOMPONENTEService;
        this.confirmationService = confirmationService;
        this.router = router;
        this.renderer = renderer;
        this.route = route;
        this.globalVar = globalVar;
        this.location = location;
        this.hora_ANALISE = new Date().toLocaleTimeString().slice(0, 5);
        this.data_ANALISE = new Date();
        this.banho_componentes = [];
        this.celula = false;
        this.banhos_valor = 0;
        this.analises = [];
        this.modoedicao = false;
        this.novo = false;
        this.disablebanho = true;
        this.nome_tina = "";
        this.data = null;
        this.obs = "";
        this.pos = 0;
        this.display = true;
    }
    RegistoformComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tipo_analise = [{ label: "INTERNA", value: "I" }, { label: "EXTERNA", value: "E" }];
        this.analise_valor = "I";
        this.globalVar.setapagar(true);
        this.globalVar.seteditar(true);
        this.globalVar.setvoltar(true);
        this.globalVar.seteditar(true);
        this.globalVar.setseguinte(true);
        this.globalVar.setanterior(true);
        this.globalVar.setpesquisar(true);
        this.user = JSON.parse(localStorage.getItem('userapp'))["id"];
        var url = this.router.routerState.snapshot.url;
        url = url.slice(1);
        var urlarray = url.split("/");
        if (urlarray[1].match("editar") || urlarray[1].match("view")) {
            this.novo = false;
            this.codigo = 0;
            this.data = 0;
            var id;
            var sub = this.route
                .queryParams
                .subscribe(function (params) {
                id = params['id'] || 0;
            });
            //preenche array para navegar nas analises 
            this.ABMOVANALISEService.getAll().subscribe(function (response) {
                for (var x in response) {
                    _this.analises.push(response[x].id_ANALISE);
                }
                _this.i = _this.analises.indexOf(+id);
                _this.inicia(_this.analises[_this.i]);
            }, function (error) { console.log(error); });
        }
        //preenche combobox linhas
        this.ABDICLINHAService.getAll().subscribe(function (response) {
            _this.linhas = [];
            _this.linhas.push({ label: "Sel. Linha", value: "" });
            for (var x in response) {
                _this.linhas.push({ label: response[x].nome_LINHA, value: { id: response[x].id_LINHA, cor: response[x].cor } });
            }
            if (_this.globalVar.getlinha() != 0)
                _this.linha = _this.linhas.find(function (item) { return item.value.id == _this.globalVar.getlinha(); }).value;
            _this.linhas = _this.linhas.slice();
        }, function (error) { return console.log(error); });
        if (urlarray[1] != null) {
            if (urlarray[1].match("editar")) {
                this.globalVar.setseguinte(false);
                this.globalVar.setanterior(false);
                this.globalVar.setapagar(false);
                this.globalVar.setcriar(true);
                this.modoedicao = true;
            }
            else if (urlarray[1].match("novo")) {
                this.globalVar.setseguinte(false);
                this.globalVar.setanterior(false);
                this.globalVar.setapagar(false);
                this.globalVar.setcriar(false);
                this.novo = true;
                this.globalVar.seteditar(false);
                this.modoedicao = true;
                var dirtyFormID = 'formAnalise';
                var resetForm = document.getElementById(dirtyFormID);
                resetForm.reset();
            }
            else if (urlarray[1].match("view")) {
                this.globalVar.setcriar(true);
            }
        }
    };
    //preenche combobox banhos ao alterar linha
    RegistoformComponent.prototype.preenche_banhos = function (event) {
        var _this = this;
        this.cor_linha = event.value.cor;
        this.disablebanho = true;
        this.banhos = [];
        this.banho_componentes = [];
        this.banhos_valor = 0;
        if (event.value.id != "") {
            //preenche combobox banhos
            this.disablebanho = false;
            this.ABDICBANHOService.getAllLINHAbylinha(event.value.id).subscribe(function (response) {
                _this.banhos.push({ label: 'Seleccione Banho', value: "" });
                for (var x in response) {
                    _this.banhos.push({ label: response[x][0].id_BANHO + " / " + response[x][0].nome_BANHO + " - Tina: " + response[x][2].cod_TINA, value: { id: response[x][0].id_BANHO, nome_tina: response[x][2].cod_TINA, capacidade_tina: response[x][2].capacidade } });
                }
                _this.banhos = _this.banhos.slice();
            }, function (error) { return console.log(error); });
        }
    };
    //preenche tabela componentes apartir do banho seleccionado
    RegistoformComponent.prototype.banhosComp = function (id) {
        var _this = this;
        this.ABDICBANHOCOMPONENTEService.getbyid_banho(id).subscribe(function (response) {
            var count = Object.keys(response).length;
            //se existir componentes do banho
            if (count > 0) {
                for (var x in response) {
                    _this.banho_componentes.push({ id_ANALISE_LIN: response[x][0].id_ANALISE_LIN, id: response[x][0].id_COMPONENTE, nome_comp: response[x][1].nome_COMPONENTE, resultado: null, calculo: null });
                }
                _this.banho_componentes = _this.banho_componentes.slice();
            }
        }, function (error) { console.log(error); });
    };
    //preenche tabela componentes da analise
    RegistoformComponent.prototype.componenteanalise = function (id) {
        var _this = this;
        this.ABMOVANALISELINHAService.getbyid_analise(id).subscribe(function (response) {
            var count = Object.keys(response).length;
            //se existir componentes do banho
            if (count > 0) {
                _this.banho_componentes = [];
                for (var x in response) {
                    _this.banho_componentes.push({ id_ANALISE_LIN: response[x][0].id_ANALISE_LIN, id: response[x][0].id_COMPONENTE, nome_comp: response[x][1].nome_COMPONENTE, resultado: response[x][0].resultado, calculo: response[x][0].calculo });
                }
                _this.banho_componentes = _this.banho_componentes.slice();
            }
        }, function (error) { console.log(error); });
    };
    //preencher nome da tina e tabela dos componentes
    RegistoformComponent.prototype.nome_tinas = function (event) {
        this.nome_tina = event.value.nome_tina;
        this.capacidade_tina = event.value.capacidade_tina;
        this.banho_componentes = [];
        if (event.value.id != null) {
            this.banhosComp(event.value.id);
        }
    };
    //preenche dados com o id
    RegistoformComponent.prototype.inicia = function (id) {
        var _this = this;
        if (id != 0 && id != "undefined") {
            //preenche combobox banhos
            this.ABDICBANHOService.getAllLINHA().subscribe(function (response) {
                _this.banhos = [];
                _this.banhos.push({ label: 'Seleccione Banho', value: "" });
                for (var x in response) {
                    _this.banhos.push({ label: response[x][0].id_BANHO + " / " + response[x][0].nome_BANHO, value: { id: response[x][0].id_BANHO, nome_tina: response[x][2].cod_TINA, capacidade_tina: response[x][2].capacidade } });
                }
                _this.banhos = _this.banhos.slice();
                _this.ABMOVANALISEService.getbyID(id).subscribe(function (response) {
                    var count = Object.keys(response).length;
                    //se existir banhos com o id
                    if (count > 0) {
                        _this.analise_dados = response[0][0];
                        for (var x in response) {
                            _this.codigo = response[x][0].id_ANALISE;
                            _this.data = new Date(response[x][0].data_ULT_MODIF).toLocaleDateString();
                            _this.celula = response[x][0].celulahull;
                            _this.linha = _this.linhas.find(function (item) { return item.value.id === response[x][0].id_LINHA; }).value;
                            _this.cor_linha = response[x][1].cor;
                            _this.data_ANALISE = new Date(response[x][0].data_ANALISE);
                            _this.analise_valor = response[x][0].analise_INT_EXT;
                            _this.hora_ANALISE = (response[x][0].hora_ANALISE).slice(0, 5);
                            _this.banhos_valor = _this.banhos.find(function (item) { return item.value.id === response[x][0].id_BANHO; }).value;
                            _this.nome_tina = _this.banhos.find(function (item) { return item.value.id === response[x][0].id_BANHO; }).value['nome_tina'];
                            _this.capacidade_tina = _this.banhos.find(function (item) { return item.value.id === response[x][0].id_BANHO; }).value['capacidade_tina'];
                            _this.obs = response[x][0].obs;
                        }
                        _this.componenteanalise(id);
                    }
                    else {
                        _this.router.navigate(['registo']);
                    }
                }, function (error) { console.log(error); });
            }, function (error) { return console.log(error); });
        }
        else {
            this.router.navigate(['registo']);
        }
    };
    //bt cancelar
    RegistoformComponent.prototype.backview = function () {
        this.location.back();
    };
    //bt gravar
    RegistoformComponent.prototype.gravar = function () {
        var _this = this;
        var analise = new __WEBPACK_IMPORTED_MODULE_9_app_entidades_AB_MOV_ANALISE__["a" /* AB_MOV_ANALISE */];
        if (this.novo) {
            analise.obs = this.obs;
            analise.data_ULT_MODIF = new Date();
            analise.utz_CRIA = this.user;
            analise.data_CRIA = new Date();
            analise.celulahull = this.celula;
            analise.id_BANHO = this.banhos_valor['id'];
            analise.id_LINHA = this.linha;
            analise.data_ANALISE = this.data_ANALISE;
            analise.hora_ANALISE = new Date(this.hora_ANALISE).toLocaleTimeString();
            analise.analise_INT_EXT = this.analise_valor;
            this.ABMOVANALISEService.create(analise).subscribe(function (res) {
                _this.inserir_linhas(res.id_ANALISE);
            }, function (error) { console.log(error); _this.simular(_this.inputerro); });
        }
        else {
            var id;
            var sub = this.route
                .queryParams
                .subscribe(function (params) {
                id = params['id'] || 0;
            });
            analise = this.analise_dados;
            analise.obs = this.obs;
            analise.id_BANHO = this.banhos_valor['id'];
            analise.id_LINHA = this.linha;
            analise.data_ULT_MODIF = new Date();
            analise.utz_ULT_MODIF = this.user;
            analise.data_ANALISE = this.data_ANALISE;
            analise.analise_INT_EXT = this.analise_valor;
            analise.hora_ANALISE = this.hora_ANALISE;
            this.ABMOVANALISEService.update(analise).then(function () {
                _this.inserir_linhas(id);
            });
        }
    };
    //inserir linhas na BD
    RegistoformComponent.prototype.inserir_linhas = function (id) {
        var _this = this;
        if (this.banho_componentes.length > 0) {
            for (var x in this.banho_componentes) {
                var banho_comp = new __WEBPACK_IMPORTED_MODULE_11_app_entidades_AB_MOV_ANALISE_LINHA__["a" /* AB_MOV_ANALISE_LINHA */];
                if (this.banho_componentes[x].id != "" && this.banho_componentes[x].id != null) {
                    if (this.banho_componentes[x].id_ANALISE_LIN == "" || this.banho_componentes[x].id_ANALISE_LIN == null) {
                        banho_comp.id_ANALISE = id;
                        banho_comp.resultado = this.banho_componentes[x].resultado;
                        banho_comp.calculo = this.banho_componentes[x].calculo;
                        banho_comp.id_COMPONENTE = this.banho_componentes[x].id;
                        this.ABMOVANALISELINHAService.create(banho_comp).subscribe(function (res) {
                        }, function (error) { console.log(error); _this.simular(_this.inputerro); });
                    }
                    else {
                        this.update(id, x);
                    }
                }
            }
        }
        if (this.novo) {
            this.simular(this.inputnotifi);
        }
        else {
            this.simular(this.inputgravou);
        }
        this.router.navigate(['registo/view'], { queryParams: { id: id } });
    };
    RegistoformComponent.prototype.update = function (id, x) {
        var _this = this;
        this.ABMOVANALISELINHAService.getbyid(this.banho_componentes[x].id_ANALISE_LIN).subscribe(function (res) {
            var banho_comp = new __WEBPACK_IMPORTED_MODULE_11_app_entidades_AB_MOV_ANALISE_LINHA__["a" /* AB_MOV_ANALISE_LINHA */];
            banho_comp = res[0];
            banho_comp.id_ANALISE = id;
            banho_comp.resultado = _this.banho_componentes[x].resultado;
            banho_comp.id_COMPONENTE = _this.banho_componentes[x].id;
            banho_comp.calculo = _this.banho_componentes[x].calculo;
            _this.ABMOVANALISELINHAService.update(banho_comp).then(function () {
            });
        }, function (error) { console.log(error); _this.simular(_this.inputerro); });
    };
    RegistoformComponent.prototype.apagar = function () {
        var id;
        var sub = this.route
            .queryParams
            .subscribe(function (params) {
            id = params['id'] || 0;
        });
        if (id != 0) {
            this.confirm(id);
        }
    };
    RegistoformComponent.prototype.seguinte = function () {
        this.i = this.i + 1;
        this.i = this.i % this.analises.length;
        if (this.analises.length > 0) {
            this.inicia(this.analises[this.i]);
            this.router.navigate(['registo/view'], { queryParams: { id: this.analises[this.i] } });
        }
    };
    RegistoformComponent.prototype.anterior = function () {
        if (this.i === 0) {
            this.i = this.analises.length;
        }
        this.i = this.i - 1;
        this.router.navigate(['registo/view'], { queryParams: { id: this.analises[this.i] } });
        if (this.analises.length > 0) {
            this.inicia(this.analises[this.i]);
        }
    };
    //popup apagar
    RegistoformComponent.prototype.confirm = function (id) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Tem a certeza que pretende apagar?',
            header: 'Apagar Confirmação',
            icon: 'fa fa-trash',
            accept: function () {
                _this.ABMOVANALISELINHAService.getbyid_analise(id).subscribe(function (response) {
                    var analise = new __WEBPACK_IMPORTED_MODULE_9_app_entidades_AB_MOV_ANALISE__["a" /* AB_MOV_ANALISE */];
                    analise = _this.analise_dados;
                    analise.inativo = true;
                    analise.utz_ANULACAO = _this.user;
                    analise.data_ANULACAO = new Date();
                    _this.ABMOVANALISEService.update(analise).then(function () {
                        _this.simular(_this.inputapagar);
                        _this.router.navigate(['registo']);
                    });
                }, function (error) { return console.log(error); });
            }
        });
    };
    //simular click para mostrar mensagem
    RegistoformComponent.prototype.simular = function (element) {
        var event = new MouseEvent('click', { bubbles: true });
        this.renderer.invokeElementMethod(element.nativeElement, 'dispatchEvent', [event]);
    };
    return RegistoformComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputnotifi'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], RegistoformComponent.prototype, "inputnotifi", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputgravou'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], RegistoformComponent.prototype, "inputgravou", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputapagar'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object)
], RegistoformComponent.prototype, "inputapagar", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputerro'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object)
], RegistoformComponent.prototype, "inputerro", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialog'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _e || Object)
], RegistoformComponent.prototype, "dialog", void 0);
RegistoformComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-registoform',
        template: __webpack_require__("../../../../../src/app/paginas/registoanalises/registoform/registoform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/paginas/registoanalises/registoform/registoform.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_12_app_servicos_ab_mov_analise_linha_service__["a" /* ABMOVANALISELINHAService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12_app_servicos_ab_mov_analise_linha_service__["a" /* ABMOVANALISELINHAService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_10_app_servicos_ab_mov_analise_service__["a" /* ABMOVANALISEService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10_app_servicos_ab_mov_analise_service__["a" /* ABMOVANALISEService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8_app_servicos_ab_dic_banho_service__["a" /* ABDICBANHOService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_app_servicos_ab_dic_banho_service__["a" /* ABDICBANHOService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7_app_servicos_ab_dic_linha_service__["a" /* ABDICLINHAService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_app_servicos_ab_dic_linha_service__["a" /* ABDICLINHAService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_6_app_servicos_ab_dic_componente_service__["a" /* ABDICCOMPONENTEService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_app_servicos_ab_dic_componente_service__["a" /* ABDICCOMPONENTEService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_5_app_servicos_ab_dic_banho_componente_service__["a" /* ABDICBANHOCOMPONENTEService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_servicos_ab_dic_banho_componente_service__["a" /* ABDICBANHOCOMPONENTEService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["ConfirmationService"]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_3_app_menu_sidebar_metadata__["a" /* AppGlobals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_menu_sidebar_metadata__["a" /* AppGlobals */]) === "function" && _r || Object, typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]) === "function" && _s || Object])
], RegistoformComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
//# sourceMappingURL=registoform.component.js.map

/***/ }),

/***/ "../../../../../src/app/paginas/registoparametros/registoparaform/registoparaform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/paginas/registoparametros/registoparaform/registoparaform.component.html":
/***/ (function(module, exports) {

module.exports = "<app-controlos (anteriorbt)=\"anterior()\" (seguintebt)=\"seguinte()\" (apagarbt)=\"apagar()\"></app-controlos>\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"red\">\n            <h4 class=\"title\">Registos dos Parâmetros de Operação</h4>\n          </div>\n          <div class=\"card-content\">\n            <form id=\"formPara\" (ngSubmit)=\"gravar()\" ngNativeValidate>\n              <div class=\"row\">\n                <div class=\"col-md-3\">\n                  <div [ngClass]=\"nome_criacao == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating \">\n                    <label class=\"control-label\">Criado por:</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"nome_criacao\" [ngModelOptions]=\"{standalone: true}\" disabled>\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div [ngClass]=\"data_criacao == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating\">\n                    <label class=\"control-label\">Data:</label>\n                    <input type=\"text\" class=\"form-control\" value=\"{{data_criacao}}\" disabled>\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div [ngClass]=\"nome_validado == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating\">\n                    <label class=\"control-label\">Validado por:</label>\n                    <input type=\"text\" class=\"form-control\" value=\"{{nome_validado}}\" disabled>\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div [ngClass]=\"data_validado == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating\">\n                    <label class=\"control-label\">Data:</label>\n                    <input type=\"text\" class=\"form-control\" value=\"{{data_validado}}\" disabled>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-3\">\n                  <div [ngClass]=\"cob_analise == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating\">\n                    <label class=\"control-label\">Cod. Análise:</label>\n                    <input type=\"text\" class=\"form-control\" value=\"{{cob_analise}}\" disabled>\n                  </div>\n                </div>\n                 <div class=\"col-md-2\">\n                  <div class=\"form-group form-black label-floating\">\n                    <label style=\"font-size: 14px;\">Linha</label>\n                    <p-dropdown [style.background]=\"cor_linha\" [options]=\"linhas\" [style]=\"{'width':'150px'}\" [(ngModel)]=\"linha\" [ngModelOptions]=\"{standalone: true}\"\n                      [disabled]=\"!modoedicao\" [required]=\"true\"></p-dropdown>\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div [ngClass]=\"banho == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating \">\n                    <label class=\"control-label\">Banho:</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"banho\" [ngModelOptions]=\"{standalone: true}\" disabled>\n                  </div>\n                </div>\n                <div class=\"col-md-2\">\n                  <div [ngClass]=\"tina == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating\">\n                    <label class=\"control-label\">Tina:</label>\n                    <input type=\"text\" class=\"form-control\" value=\"{{tina}}\" disabled>\n                  </div>\n                </div>\n                <div class=\"col-md-2\">\n                  <div [ngClass]=\"capacidade == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating\">\n                    <label class=\"control-label\">Capacidade:</label>\n                    <input type=\"text\" class=\"form-control\" value=\"{{capacidade}}\" disabled>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row\" style=\"border-top: 2px solid #ddd;\">\n                <div class=\"col-md-12\">\n                  <div class=\"col-md-12\">\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-1\">\n                      <label style=\"font-size: 14px; float: left; color:black;\">Decisão:</label>\n                    </div>\n                    <div class=\"col-md-4\" style=\"padding: 0px;     margin-top: -4px;\" >\n                      <div class=\"radio\">\n                        <input   type=\"radio\" name=\"radio1\" id=\"radio1\" value=\"s\" [(ngModel)]=\"decisao\" required>\n                        <label for=\"radio1\">\n                                    Seguir com a Produção\n                        </label>\n                      </div>\n                      <div class=\"radio\">\n                        <input [disabled]=\"!modoedicao\" type=\"radio\" name=\"radio1\" id=\"radio2\" value=\"p\" [(ngModel)]=\"decisao\"  required>\n                        <label for=\"radio2\">\n                                    Para a Produção\n                        </label>\n                      </div>\n                    </div>\n\n                    <div class=\"col-md-4\">\n                      <div class=\"form-group form-black label-floating\">\n                        <label style=\"font-size: 14px; float: left; \">Parâmetro Incorrecto:</label>\n                        <input  [disabled]=\"!modoedicao\" [required]=\"true\" type=\"text\" [(ngModel)]=\"param_incorreto\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\"\n                          style=\"width: 60%; float: left; margin-top: -13px; margin-left: 8px; padding-bottom: 0px;\" value=\"\">\n                      </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                      <div class=\"form-group form-black label-floating\">\n                        <label style=\"font-size: 14px; float: left;\">Valores Óptimos:</label>\n                        <input  [disabled]=\"!modoedicao\" [required]=\"true\" type=\"text\" [(ngModel)]=\"valor_otimo\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\"\n                          style=\"width: 20%; float: left; margin-top: -13px; margin-left: 8px; padding-bottom: 0px;\" value=\"\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <div class=\"form-group\">\n                        <div [ngClass]=\"efeito == '' ? 'is-empty' : null\" class=\"form-group form-black \">\n                          <label style=\"font-size: 14px;\" class=\"control-label\">Efeito Sobre as Peças:</label>\n                          <textarea  [required]=\"true\" class=\"form-control\" rows=\"3\" [(ngModel)]=\"efeito\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"!modoedicao\"></textarea>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <div class=\"form-group\">\n                        <div [ngClass]=\"causa == '' ? 'is-empty' : null\" class=\"form-group form-black \">\n                          <label style=\"font-size: 14px;\" class=\"control-label\">Causas:</label>\n                          <textarea [required]=\"true\" class=\"form-control\" rows=\"3\" [(ngModel)]=\"causa\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"!modoedicao\"></textarea>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <div class=\"form-group\">\n                        <div [ngClass]=\"acao_corretiva == '' ? 'is-empty' : null\" class=\"form-group form-black \">\n                          <label style=\"font-size: 14px;\" class=\"control-label\">Acções Correctivas</label>\n                          <textarea [required]=\"true\" class=\"form-control\" rows=\"3\" [(ngModel)]=\"acao_corretiva\" [ngModelOptions]=\"{standalone: true}\"\n                            [disabled]=\"!modoedicao\"></textarea>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <div class=\"form-group\">\n                        <div [ngClass]=\"acao_preventiva == '' ? 'is-empty' : null\" class=\"form-group form-black \">\n                          <label style=\"font-size: 14px;\" class=\"control-label\">Acções Preventivas</label>\n                          <textarea [required]=\"true\" class=\"form-control\" rows=\"3\" [(ngModel)]=\"acao_preventiva\" [ngModelOptions]=\"{standalone: true}\"\n                            [disabled]=\"!modoedicao\"></textarea>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <div class=\"form-group\">\n                        <div [ngClass]=\"seguimento == '' ? 'is-empty' : null\" class=\"form-group form-black \">\n                          <label style=\"font-size: 14px;\" class=\"control-label\">Traçabilidade/Seguimento(Peças Produzidas)</label>\n                          <textarea [required]=\"true\" class=\"form-control\" rows=\"3\" [(ngModel)]=\"seguimento\" [ngModelOptions]=\"{standalone: true}\"\n                            [disabled]=\"!modoedicao\"></textarea>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <div class=\"form-group\">\n                        <div [ngClass]=\"obs == '' ? 'is-empty' : null\" class=\"form-group form-black \">\n                          <label style=\"font-size: 14px;\" class=\"control-label\">Observações</label>\n                          <textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"obs\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"!modoedicao\"></textarea>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-1\">\n                      <label style=\"font-size: 14px; float: left; color:black;\">Distribuição:</label>\n                    </div>\n                    <div class=\"col-md-9\" style=\"    padding: 0px;\">\n                      <div class=\"radio\" style=\"float: none\">\n                        <input   type=\"radio\" name=\"distribuicao\" id=\"radio5\" value=\"q\" [(ngModel)]=\"distribuicao\">\n                        <label for=\"radio5\">\n                                    Qualidade\n                        </label>\n                      </div>\n                      <div class=\"radio\" style=\"float: none; margin-left: 0px;\">\n                        <input [disabled]=\"!modoedicao\" type=\"radio\" name=\"distribuicao\" id=\"radio6\" value=\"o\" [(ngModel)]=\"distribuicao\">\n                        <label for=\"radio6\">\n                                    Outros:\n                        </label>\n                         <input  [disabled]=\"!modoedicao\" type=\"text\" [(ngModel)]=\"distribuicao_outros\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" style=\"width: 60%; float: left; margin-top: -8px; margin-left: 6px;\"\n                        value=\"\">\n                      </div>                     \n                    </div>\n                  </div>\n                </div>\n              </div>\n              <button type=\"reset\" (click)=\"backview()\" class=\"btn btn-danger pull-right\" [hidden]=\"!modoedicao\">Cancelar</button>\n              <button type=\"submit\" class=\"btn btn-success pull-right\" [hidden]=\"!modoedicao\">Gravar</button>\n              <button type=\"button\" (click)=\"validar()\" class=\"btn btn-success pull-right\" [hidden]=\"validado || (novo && modoedicao) \">Validar</button>\n              <div class=\"clearfix\"></div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<button class=\"btn btn-danger btn-block\" #inputnotifi [hidden]=\"true\" onclick=\"demo.showNotification('top','right','Inseriu com Sucesso!',2)\"></button>\n<button class=\"btn btn-danger btn-block\" #inputgravou [hidden]=\"true\" onclick=\"demo.showNotification('top','right','Alterado com Sucesso!',2)\"></button>\n<button class=\"btn btn-danger btn-block\" #inputapagar [hidden]=\"true\" onclick=\"demo.showNotification('top','right','Apagado com Sucesso!',2)\"></button>\n<button class=\"btn btn-danger btn-block\" #inputerro [hidden]=\"true\" onclick=\"demo.showNotification('top','right','ERRO!! Registo não foi Gravado!',4)\"></button>"

/***/ }),

/***/ "../../../../../src/app/paginas/registoparametros/registoparaform/registoparaform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_menu_sidebar_metadata__ = __webpack_require__("../../../../../src/app/menu/sidebar.metadata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_servicos_ab_mov_manutencao_cab_service__ = __webpack_require__("../../../../../src/app/servicos/ab-mov-manutencao-cab.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_entidades_AD_MOV_REG_PARAM_OPERACAO__ = __webpack_require__("../../../../../src/app/entidades/AD_MOV_REG_PARAM_OPERACAO.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_servicos_ad_mov_reg_param_operacao_service__ = __webpack_require__("../../../../../src/app/servicos/ad-mov-reg-param-operacao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_servicos_ab_dic_linha_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-linha.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistoparaformComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RegistoparaformComponent = (function () {
    function RegistoparaformComponent(ABDICLINHAService, confirmationService, ADMOVREGPARAMOPERACAOService, ABMOVMANUTENCAOCABService, globalVar, location, router, renderer, route) {
        this.ABDICLINHAService = ABDICLINHAService;
        this.confirmationService = confirmationService;
        this.ADMOVREGPARAMOPERACAOService = ADMOVREGPARAMOPERACAOService;
        this.ABMOVMANUTENCAOCABService = ABMOVMANUTENCAOCABService;
        this.globalVar = globalVar;
        this.location = location;
        this.router = router;
        this.renderer = renderer;
        this.route = route;
        this.banho = "";
        this.tina = "";
        this.cob_analise = "";
        this.capacidade = "";
        this.nome_validado = "";
        this.nome_criacao = "";
        this.data_validado = "";
        this.data_criacao = "";
        this.data_actual = null;
        this.validado = false;
    }
    RegistoparaformComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalVar.setapagar(true);
        this.globalVar.seteditar(true);
        this.globalVar.setvoltar(true);
        this.globalVar.setseguinte(true);
        this.globalVar.setanterior(true);
        this.globalVar.setpesquisar(true);
        this.globalVar.setduplicar(false);
        this.data_actual = new Date();
        this.user = JSON.parse(localStorage.getItem('userapp'))["id"];
        var url = this.router.routerState.snapshot.url;
        url = url.slice(1);
        var urlarray = url.split("/");
        if (urlarray[1].match("editar") || urlarray[1].match("view")) {
            this.novo = false;
            var id;
            var sub = this.route
                .queryParams
                .subscribe(function (params) {
                id = params['id'] || 0;
            });
            this.carregadados(id);
        }
        //preenche combobox linhas
        this.ABDICLINHAService.getAll().subscribe(function (response) {
            _this.linhas = [];
            _this.linhas.push({ label: 'Seleccione Linha', value: "" });
            for (var x in response) {
                _this.linhas.push({ label: response[x].nome_LINHA, value: response[x].id_LINHA });
            }
            //this.linha = this.linhas[0].value;
            _this.linhas = _this.linhas.slice();
        }, function (error) { return console.log(error); });
        if (urlarray[1] != null) {
            if (urlarray[1].match("editar")) {
                this.globalVar.setseguinte(false);
                this.globalVar.setanterior(false);
                this.globalVar.setapagar(false);
                this.globalVar.setcriar(false);
                this.modoedicao = true;
                this.nome_validado = JSON.parse(localStorage.getItem('userapp'))["nome"];
            }
            else if (urlarray[1].match("novo")) {
                this.globalVar.setseguinte(false);
                this.globalVar.setanterior(false);
                this.globalVar.setapagar(false);
                this.globalVar.setcriar(false);
                this.novo = true;
                this.globalVar.seteditar(false);
                this.modoedicao = true;
                var dirtyFormID = 'formPara';
                var resetForm = document.getElementById(dirtyFormID);
                resetForm.reset();
                this.data_criacao = this.data_actual.toLocaleString();
                this.nome_criacao = JSON.parse(localStorage.getItem('userapp'))["nome"];
                var id;
                var sub = this.route
                    .queryParams
                    .subscribe(function (params) {
                    id = params['manu'] || 0;
                });
                if (id != null && id != "") {
                    this.carregacab(id);
                }
                else {
                    this.router.navigate(['registopara']);
                }
            }
            else if (urlarray[1].match("view")) {
                this.globalVar.setcriar(false);
                this.modoedicao = false;
            }
        }
    };
    RegistoparaformComponent.prototype.carregadados = function (id) {
        var _this = this;
        this.ADMOVREGPARAMOPERACAOService.getbyID(id).subscribe(function (response) {
            var count = Object.keys(response).length;
            if (count > 0) {
                for (var x in response) {
                    if (response[x][0].data_VALIDA != null) {
                        _this.data_validado = new Date(response[x][0].data_VALIDA).toLocaleString();
                        _this.nome_validado = response[x][2];
                        _this.validado = true;
                    }
                    _this.reg_dados = response[x][0];
                    _this.nome_criacao = response[x][1];
                    _this.data_criacao = new Date(response[x][0].data_CRIA).toLocaleString();
                    _this.carregacab(response[x][0].id_MANUTENCAO_CAB);
                    _this.acao_corretiva = response[x][0].acao_CORRETIVA;
                    _this.acao_preventiva = response[x][0].acao_PREVENTIVA;
                    _this.causa = response[x][0].causa;
                    _this.decisao = response[x][0].decisao;
                    _this.efeito = response[x][0].efeito;
                    _this.distribuicao = response[x][0].distribuicao;
                    _this.distribuicao_outros = response[x][0].distribuicao_OUTROS;
                    _this.obs = response[x][0].obs;
                    _this.param_incorreto = response[x][0].param_INCORRETO;
                    _this.seguimento = response[x][0].seguimento;
                    _this.valor_otimo = response[x][0].valor_OTIMO;
                }
            }
        }, function (error) { return console.log(error); });
    };
    RegistoparaformComponent.prototype.carregacab = function (id) {
        var _this = this;
        this.ABMOVMANUTENCAOCABService.getbyID_cab(id).subscribe(function (response) {
            var count = Object.keys(response).length;
            if (count > 0) {
                for (var x in response) {
                    var nome_analise = "";
                    if (response[x][0].id_ANALISE != "" && response[x][0].id_ANALISE != null)
                        nome_analise = response[x][0].id_ANALISE + ' - ' + response[x][1];
                    _this.banho = response[x][0].id_BANHO + ' - ' + response[x][4];
                    _this.id_banho = response[x][0].id_BANHO;
                    _this.tina = response[x][5];
                    _this.cob_analise = nome_analise;
                    _this.capacidade = response[x][2] + ' L';
                    _this.id_manutencao_cab = id;
                    _this.id_manutencao = response[x][0].id_MANUTENCAO;
                    _this.cor_linha = response[x][7].cor;
                    _this.linha = response[x][7].id_LINHA;
                }
            }
        }, function (error) { return console.log(error); });
    };
    RegistoparaformComponent.prototype.gravar = function () {
        var _this = this;
        var MOV_REG_PARAM_OPERACAO = new __WEBPACK_IMPORTED_MODULE_5_app_entidades_AD_MOV_REG_PARAM_OPERACAO__["a" /* AD_MOV_REG_PARAM_OPERACAO */];
        if (this.novo) {
            MOV_REG_PARAM_OPERACAO.data_CRIA = this.data_actual;
            MOV_REG_PARAM_OPERACAO.utz_CRIA = this.user;
            MOV_REG_PARAM_OPERACAO.inativo = false;
            MOV_REG_PARAM_OPERACAO.obs = this.obs;
            MOV_REG_PARAM_OPERACAO.param_INCORRETO = this.param_incorreto;
            MOV_REG_PARAM_OPERACAO.seguimento = this.seguimento;
            MOV_REG_PARAM_OPERACAO.acao_CORRETIVA = this.acao_corretiva;
            MOV_REG_PARAM_OPERACAO.acao_PREVENTIVA = this.acao_preventiva;
            MOV_REG_PARAM_OPERACAO.causa = this.causa;
            MOV_REG_PARAM_OPERACAO.decisao = this.decisao;
            MOV_REG_PARAM_OPERACAO.efeito = this.efeito;
            MOV_REG_PARAM_OPERACAO.distribuicao = this.distribuicao;
            MOV_REG_PARAM_OPERACAO.distribuicao_OUTROS = this.distribuicao_outros;
            MOV_REG_PARAM_OPERACAO.id_MANUTENCAO_CAB = this.id_manutencao_cab;
            MOV_REG_PARAM_OPERACAO.valor_OTIMO = this.valor_otimo;
            this.ADMOVREGPARAMOPERACAOService.create(MOV_REG_PARAM_OPERACAO).subscribe(function (res) {
                _this.simular(_this.inputnotifi);
                _this.router.navigate(['manutencao/view'], { queryParams: { id: _this.id_manutencao } });
            }, function (error) {
                console.log(error);
                _this.simular(_this.inputerro);
            });
        }
        else {
            MOV_REG_PARAM_OPERACAO = this.reg_dados;
            MOV_REG_PARAM_OPERACAO.obs = this.obs;
            MOV_REG_PARAM_OPERACAO.param_INCORRETO = this.param_incorreto;
            MOV_REG_PARAM_OPERACAO.seguimento = this.seguimento;
            MOV_REG_PARAM_OPERACAO.acao_CORRETIVA = this.acao_corretiva;
            MOV_REG_PARAM_OPERACAO.acao_PREVENTIVA = this.acao_preventiva;
            MOV_REG_PARAM_OPERACAO.causa = this.causa;
            MOV_REG_PARAM_OPERACAO.decisao = this.decisao;
            MOV_REG_PARAM_OPERACAO.efeito = this.efeito;
            MOV_REG_PARAM_OPERACAO.distribuicao = this.distribuicao;
            MOV_REG_PARAM_OPERACAO.distribuicao_OUTROS = this.distribuicao_outros;
            MOV_REG_PARAM_OPERACAO.id_MANUTENCAO_CAB = this.id_manutencao_cab;
            MOV_REG_PARAM_OPERACAO.valor_OTIMO = this.valor_otimo;
            this.ADMOVREGPARAMOPERACAOService.update(MOV_REG_PARAM_OPERACAO).then(function () {
                _this.router.navigate(['registopara/view'], { queryParams: { id: MOV_REG_PARAM_OPERACAO.id_REG_PARAM_OPERA } });
                _this.simular(_this.inputgravou);
            }, function (error) {
                console.log(error);
                _this.simular(_this.inputerro);
            });
        }
    };
    RegistoparaformComponent.prototype.validar = function () {
        var _this = this;
        var MOV_REG_PARAM_OPERACAO = new __WEBPACK_IMPORTED_MODULE_5_app_entidades_AD_MOV_REG_PARAM_OPERACAO__["a" /* AD_MOV_REG_PARAM_OPERACAO */];
        MOV_REG_PARAM_OPERACAO = this.reg_dados;
        MOV_REG_PARAM_OPERACAO.data_VALIDA = this.data_actual;
        MOV_REG_PARAM_OPERACAO.utz_VALIDA = this.user;
        this.ADMOVREGPARAMOPERACAOService.update(MOV_REG_PARAM_OPERACAO).then(function () {
            _this.router.navigate(['registopara/view'], { queryParams: { id: MOV_REG_PARAM_OPERACAO.id_REG_PARAM_OPERA } });
            _this.simular(_this.inputgravou);
        }, function (error) {
            console.log(error);
            _this.simular(_this.inputerro);
        });
    };
    //simular click para mostrar mensagem
    RegistoparaformComponent.prototype.simular = function (element) {
        var event = new MouseEvent('click', { bubbles: true });
        this.renderer.invokeElementMethod(element.nativeElement, 'dispatchEvent', [event]);
    };
    //bt cancelar
    RegistoparaformComponent.prototype.backview = function () {
        this.location.back();
    };
    RegistoparaformComponent.prototype.apagar = function () {
        var id;
        var sub = this.route
            .queryParams
            .subscribe(function (params) {
            id = params['id'] || 0;
        });
        if (id != 0) {
            this.confirm(id);
        }
    };
    //popup apagar
    RegistoparaformComponent.prototype.confirm = function (id) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Tem a certeza que pretende apagar?',
            header: 'Apagar Confirmação',
            icon: 'fa fa-trash',
            accept: function () {
                var MOV_REG_PARAM_OPERACAO = new __WEBPACK_IMPORTED_MODULE_5_app_entidades_AD_MOV_REG_PARAM_OPERACAO__["a" /* AD_MOV_REG_PARAM_OPERACAO */];
                MOV_REG_PARAM_OPERACAO = _this.reg_dados;
                MOV_REG_PARAM_OPERACAO.data_ANULACAO = new Date();
                MOV_REG_PARAM_OPERACAO.utz_ANULACAO = _this.user;
                MOV_REG_PARAM_OPERACAO.inativo = true;
                _this.ADMOVREGPARAMOPERACAOService.update(MOV_REG_PARAM_OPERACAO).then(function () {
                    _this.router.navigate(['registopara']);
                    _this.simular(_this.inputapagar);
                }, function (error) {
                    console.log(error);
                    _this.simular(_this.inputerro);
                });
            }
        });
    };
    return RegistoparaformComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputnotifi'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], RegistoparaformComponent.prototype, "inputnotifi", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputgravou'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], RegistoparaformComponent.prototype, "inputgravou", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputapagar'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object)
], RegistoparaformComponent.prototype, "inputapagar", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputerro'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object)
], RegistoparaformComponent.prototype, "inputerro", void 0);
RegistoparaformComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-registoparaform',
        template: __webpack_require__("../../../../../src/app/paginas/registoparametros/registoparaform/registoparaform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/paginas/registoparametros/registoparaform/registoparaform.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8_app_servicos_ab_dic_linha_service__["a" /* ABDICLINHAService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_app_servicos_ab_dic_linha_service__["a" /* ABDICLINHAService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["ConfirmationService"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6_app_servicos_ad_mov_reg_param_operacao_service__["a" /* ADMOVREGPARAMOPERACAOService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_app_servicos_ad_mov_reg_param_operacao_service__["a" /* ADMOVREGPARAMOPERACAOService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4_app_servicos_ab_mov_manutencao_cab_service__["a" /* ABMOVMANUTENCAOCABService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_servicos_ab_mov_manutencao_cab_service__["a" /* ABMOVMANUTENCAOCABService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_app_menu_sidebar_metadata__["a" /* AppGlobals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_menu_sidebar_metadata__["a" /* AppGlobals */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _o || Object])
], RegistoparaformComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
//# sourceMappingURL=registoparaform.component.js.map

/***/ }),

/***/ "../../../../../src/app/paginas/registoparametros/registoparametros.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/paginas/registoparametros/registoparametros.component.html":
/***/ (function(module, exports) {

module.exports = "<app-controlos></app-controlos>\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"red\">\n            <h4 class=\"title\">Registos dos Parâmetros de Operação </h4>\n            <p class=\"category\"></p>\n          </div>\n          <div class=\"card-content table-responsive\">\n\n            <p-dataTable [value]=\"cols\" dataKey=\"id\" [rows]=\"15\" [paginator]=\"true\" [pageLinks]=\"3\" [stacked]=\"stacked\" (onRowDblclick)=\"abrir($event)\"\n              [rowsPerPageOptions]=\"[15,20,30,'todos']\">\n              <p-column [sortable]=\"true\" [filter]=\"true\" styleclass=\"text-danger\" field=\"id\" header=\"ID\"></p-column>\n              <p-column [sortable]=\"true\" [filter]=\"true\" styleclass=\"text-danger\" field=\"data\" header=\"Data\"></p-column>\n              <p-column [sortable]=\"true\" styleclass=\"text-danger\" field=\"estado\" header=\"Estado\">\n              </p-column>\n              <p-column styleClass=\"col-button\">\n                <ng-template pTemplate=\"header\">\n                </ng-template>\n                <ng-template let-car=\"rowData\" pTemplate=\"body\">\n                  <a style=\"color: black; cursor:pointer;\" title=\"Ver mais\" [routerLink]=\"['/registopara/view']\" [queryParams]=\"{ id: car.id }\">\n                  <i class=\"material-icons\">search</i>\n                  </a>\n                </ng-template>\n              </p-column>\n            </p-dataTable>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/paginas/registoparametros/registoparametros.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_menu_sidebar_metadata__ = __webpack_require__("../../../../../src/app/menu/sidebar.metadata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_servicos_ad_mov_reg_param_operacao_service__ = __webpack_require__("../../../../../src/app/servicos/ad-mov-reg-param-operacao.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistoparametrosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistoparametrosComponent = (function () {
    function RegistoparametrosComponent(ADMOVREGPARAMOPERACAOService, router, globalVar) {
        this.ADMOVREGPARAMOPERACAOService = ADMOVREGPARAMOPERACAOService;
        this.router = router;
        this.globalVar = globalVar;
    }
    RegistoparametrosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cols = [];
        this.globalVar.setvoltar(false);
        this.globalVar.seteditar(false);
        this.globalVar.setapagar(false);
        this.globalVar.setseguinte(false);
        this.globalVar.setanterior(false);
        this.globalVar.setcriar(false);
        this.globalVar.setpesquisar(true);
        this.globalVar.setduplicar(false);
        this.ADMOVREGPARAMOPERACAOService.getAll().subscribe(function (response) {
            for (var x in response) {
                var estado = "Registado";
                if (response[x][0].data_VALIDA != null) {
                    estado = "Validado";
                }
                _this.cols.push({ id: response[x][0].id_REG_PARAM_OPERA,
                    data: new Date(response[x][0].data_CRIA).toLocaleDateString(), estado: estado });
            }
            _this.cols = _this.cols.slice();
        }, function (error) { return console.log(error); });
    };
    //clicar 2 vezes na tabela abre linha
    RegistoparametrosComponent.prototype.abrir = function (event) {
        this.router.navigate(['registopara/view'], { queryParams: { id: event.data.id } });
    };
    return RegistoparametrosComponent;
}());
RegistoparametrosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-registoparametros',
        template: __webpack_require__("../../../../../src/app/paginas/registoparametros/registoparametros.component.html"),
        styles: [__webpack_require__("../../../../../src/app/paginas/registoparametros/registoparametros.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_servicos_ad_mov_reg_param_operacao_service__["a" /* ADMOVREGPARAMOPERACAOService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_servicos_ad_mov_reg_param_operacao_service__["a" /* ADMOVREGPARAMOPERACAOService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_menu_sidebar_metadata__["a" /* AppGlobals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_menu_sidebar_metadata__["a" /* AppGlobals */]) === "function" && _c || Object])
], RegistoparametrosComponent);

var _a, _b, _c;
//# sourceMappingURL=registoparametros.component.js.map

/***/ }),

/***/ "../../../../../src/app/paginas/relatorio-viewer/relatorio-viewer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/paginas/relatorio-viewer/relatorio-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\" style=\"height: 100%; position: absolute;\">\n        <div class=\"col-md-12\" style=\"padding:0px\">\n          <div class=\"card-header\" data-background-color=\"orange\">\n            <div class=\"nav-tabs-navigation\">\n              <div class=\"nav-tabs-wrapper\">\n                <ul class=\"nav nav-tabs\" style=\"background:black\">\n                  <li>\n                    <a (click)=\" backClicked()\">\n                                <i class=\"material-icons\">arrow_back</i>Voltar\n                                <div class=\"ripple-container\"></div>\n                            </a>\n                  </li>\n                  <li>\n                    <a id=\"imprime\">\n                                <i class=\"material-icons\">print</i>\n                                <div class=\"ripple-container\"></div>\n                            </a>\n                  </li>\n                  <li>\n                    <a (click)=\"sendmessage()\">\n                                <i class=\"material-icons\">email</i>\n                                <div class=\"ripple-container\"></div>\n                            </a>\n                  </li>\n                  <li>\n                    <a (click)=\"exportexcel()\" style=\"font-size: 20px;\">\n                                <i class=\"fa fa-file-excel-o\"></i>\n                                <div class=\"ripple-container\"></div>\n                            </a>\n                  </li>\n                  <li>\n                    <a (click)=\"exportword()\" style=\"font-size: 20px;\">\n                                <i class=\"fa fa-file-word-o\"></i>\n                                <div class=\"ripple-container\"></div>\n                            </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n        <iframe [src]=\"fileURL\" *ngIf=\"fileURL!=null\" id=\"printf\" type=\"application/pdf\" width=\"100%\" height=\"100%\" style=\"overflow: auto;\">\n        </iframe>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<button class=\"btn btn-danger btn-block\" #inputenvio [hidden]=\"true\" onclick=\"demo.showNotification('top','right','Email Enviado com Sucesso!',2)\"></button>\n<button class=\"btn btn-danger btn-block\" #inputerro [hidden]=\"true\" onclick=\"demo.showNotification('top','right','ERRO!! Email não foi Enviado!',4)\"></button>\n\n<button class=\"btn btn-primary btn-lg\" #dialog data-toggle=\"modal\" [hidden]=\"true\" data-target=\"#myModallinhas\" data-backdrop=\"false\"></button>\n<!-- Modal Linhas-->\n<div class=\"modal fade\" id=\"myModallinhas\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n                       <span aria-hidden=\"true\">&times;</span>\n                       <span class=\"sr-only\">Close</span>\n                </button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">\n          Enviar Email\n        </h4>\n      </div>\n      <form role=\"form\" ngNativeValidate (ngSubmit)=\"enviar()\">\n        <!-- Modal Body -->\n        <div class=\"modal-body\">\n          <div class=\"form-group\">\n            <label for=\"nmlinha\">De:</label>\n            <input type=\"email\" class=\"form-control\" id=\"nmlinha\" [(ngModel)]=\"email_de\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"exemplo@exemplo.pt\"\n              required />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"nmlinha\">Para:</label>\n            <input type=\"text\" class=\"form-control\" id=\"nmlinha\" [(ngModel)]=\"email_para\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"exemplo1@exemplo.pt, exemplo2@exemplo.pt\"\n              required />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"nmlinha\">Assunto:</label>\n            <input type=\"text\" class=\"form-control\" id=\"nmlinha\" [(ngModel)]=\"email_assunto\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Introduza o Assunto\"\n              required />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"nmlinha\">Mensagem:</label>\n             <textarea class=\"form-control\" rows=\"5\" id=\"comment\"  [(ngModel)]=\"email_mensagem\" [ngModelOptions]=\"{standalone: true}\"></textarea>\n          </div>\n        </div>\n        <!-- Modal Footer -->\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" #closedialog data-dismiss=\"modal\">Fechar</button>\n          <button type=\"submit\" class=\"btn btn-success \">Enviar</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/paginas/relatorio-viewer/relatorio-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_servicos_relatorios_service__ = __webpack_require__("../../../../../src/app/servicos/relatorios.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_entidades_EMAIL__ = __webpack_require__("../../../../../src/app/entidades/EMAIL.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_servicos_email_service__ = __webpack_require__("../../../../../src/app/servicos/email.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_assets_js_demo_js__ = __webpack_require__("../../../../../src/assets/js/demo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_assets_js_demo_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_assets_js_demo_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelatorioViewerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RelatorioViewerComponent = (function () {
    function RelatorioViewerComponent(elementRef, route, EmailService, sanitizer, RelatoriosService, location, renderer) {
        this.elementRef = elementRef;
        this.route = route;
        this.EmailService = EmailService;
        this.sanitizer = sanitizer;
        this.RelatoriosService = RelatoriosService;
        this.location = location;
        this.renderer = renderer;
        this.fileURL = null;
    }
    RelatorioViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "assets/js/demo.js";
        this.elementRef.nativeElement.appendChild(s);
        var sub = this.route
            .queryParams
            .subscribe(function (params) {
            _this.id = params['id'] || 0;
            _this.relatorio = params['relatorio'] || 0;
        });
        this.filename = new Date().toLocaleString().replace(/\D/g, '');
        this.RelatoriosService.downloadPDF("pdf", this.filename, this.id, this.relatorio).subscribe(function (res) {
            _this.fileURL = URL.createObjectURL(res);
            _this.fileURL = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.fileURL);
        });
    };
    RelatorioViewerComponent.prototype.exportexcel = function () {
        var _this = this;
        this.RelatoriosService.downloadPDF("xlsx", this.filename, this.id, this.relatorio).subscribe(function (res) {
            _this.fileURL = URL.createObjectURL(res);
            _this.fileURL = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.fileURL);
            var myWindow = window.open(_this.fileURL, "", "width=200,height=100");
            myWindow.close();
        });
    };
    RelatorioViewerComponent.prototype.exportword = function () {
        var _this = this;
        this.RelatoriosService.downloadPDF("docx", this.filename, this.id, this.relatorio).subscribe(function (res) {
            _this.fileURL = URL.createObjectURL(res);
            _this.fileURL = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.fileURL);
            var myWindow = window.open(_this.fileURL, "", "width=200,height=100");
            myWindow.close();
        });
    };
    RelatorioViewerComponent.prototype.backClicked = function () {
        this.location.back();
    };
    RelatorioViewerComponent.prototype.sendmessage = function () {
        this.email_de;
        this.email_para = "";
        this.email_assunto = "";
        this.email_mensagem = "";
        this.simular(this.dialog);
    };
    RelatorioViewerComponent.prototype.enviar = function () {
        var _this = this;
        var email = new __WEBPACK_IMPORTED_MODULE_4_app_entidades_EMAIL__["a" /* EMAIL */]();
        email.de = this.email_de;
        email.para = this.email_para;
        email.assunto = this.email_assunto;
        email.mensagem = this.email_mensagem;
        email.nome_FICHEIRO = this.filename;
        this.EmailService.enviarEmail(email).subscribe(function (res) {
            _this.simular(_this.inputenvio);
            _this.simular(_this.closedialog);
        }, function (error) {
            _this.simular(_this.inputerro);
        });
    };
    //simular click para mostrar mensagem
    RelatorioViewerComponent.prototype.simular = function (element) {
        var event = new MouseEvent('click', { bubbles: true });
        this.renderer.invokeElementMethod(element.nativeElement, 'dispatchEvent', [event]);
    };
    return RelatorioViewerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dialog'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], RelatorioViewerComponent.prototype, "dialog", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('closedialog'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], RelatorioViewerComponent.prototype, "closedialog", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputenvio'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object)
], RelatorioViewerComponent.prototype, "inputenvio", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputerro'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object)
], RelatorioViewerComponent.prototype, "inputerro", void 0);
RelatorioViewerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-relatorio-viewer',
        template: __webpack_require__("../../../../../src/app/paginas/relatorio-viewer/relatorio-viewer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/paginas/relatorio-viewer/relatorio-viewer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["ActivatedRoute"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5_app_servicos_email_service__["a" /* EmailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_servicos_email_service__["a" /* EmailService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_app_servicos_relatorios_service__["a" /* RelatoriosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_servicos_relatorios_service__["a" /* RelatoriosService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _l || Object])
], RelatorioViewerComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
//# sourceMappingURL=relatorio-viewer.component.js.map

/***/ }),

/***/ "../../../../../src/app/paginas/tinas/tinas.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/paginas/tinas/tinas.component.html":
/***/ (function(module, exports) {

module.exports = "<app-controlos></app-controlos>\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"red\">\n            <h4 class=\"title\">Tinas</h4>\n            <p class=\"category\"></p>\n          </div>\n          <div class=\"card-content table-responsive\">\n\n            <p-dataTable (onRowDblclick)=\"abrir($event)\" [value]=\"cols\" dataKey=\"cod\" [rows]=\"15\" [paginator]=\"true\" [pageLinks]=\"3\" [stacked]=\"stacked\">\n              <p-column [sortable]=\"true\" styleclass=\"text-danger\" field=\"linha\" header=\"Linha\">\n                <ng-template let-car=\"rowData\" pTemplate=\"body\">\n                  <div [style.background]=\"car['cor']\">\n                    {{car['linha']}}\n                  </div>\n                </ng-template>\n              </p-column>\n              <p-column [sortable]=\"true\" [filter]=\"true\" styleclass=\"text-danger\" field=\"cod\" header=\"Código. Tina\"></p-column>\n              <p-column [filter]=\"true\" styleclass=\"text-danger\" field=\"obs\" header=\"Observações\"></p-column>\n              <p-column styleClass=\"col-button\">\n                <ng-template pTemplate=\"header\">\n                </ng-template>\n                <ng-template let-car=\"rowData\" pTemplate=\"body\">\n                  <a style=\"color: black; cursor:pointer;\" title=\"Ver mais\" [routerLink]=\"['/tinas/view']\" [queryParams]=\"{ id: car.id }\">\n                  <i class=\"material-icons\">search</i>\n                  </a>\n                </ng-template>\n              </p-column>\n            </p-dataTable>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/paginas/tinas/tinas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_menu_sidebar_metadata__ = __webpack_require__("../../../../../src/app/menu/sidebar.metadata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_servicos_ab_dic_tina_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-tina.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TinasComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TinasComponent = (function () {
    function TinasComponent(router, globalVar, ABDICTINAService) {
        this.router = router;
        this.globalVar = globalVar;
        this.ABDICTINAService = ABDICTINAService;
    }
    TinasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cols = [];
        this.globalVar.setvoltar(false);
        this.globalVar.seteditar(false);
        this.globalVar.setapagar(false);
        this.globalVar.setseguinte(false);
        this.globalVar.setanterior(false);
        this.globalVar.setcriar(true);
        this.globalVar.setpesquisar(true);
        this.globalVar.setduplicar(false);
        this.ABDICTINAService.getAll2().subscribe(function (response) {
            for (var x in response) {
                _this.cols.push({ id: response[x][0].id_TINA, linha: response[x][0].id_LINHA, cod: response[x][0].cod_TINA, obs: response[x][0].obs, cor: response[x][1].cor });
            }
            _this.cols = _this.cols.slice();
        }, function (error) { return console.log(error); });
    };
    //clicar 2 vezes na tabela abre linha
    TinasComponent.prototype.abrir = function (event) {
        this.router.navigate(['tinas/view'], { queryParams: { id: event.data.id } });
    };
    return TinasComponent;
}());
TinasComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tinas',
        template: __webpack_require__("../../../../../src/app/paginas/tinas/tinas.component.html"),
        styles: [__webpack_require__("../../../../../src/app/paginas/tinas/tinas.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_menu_sidebar_metadata__["a" /* AppGlobals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_menu_sidebar_metadata__["a" /* AppGlobals */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_servicos_ab_dic_tina_service__["a" /* ABDICTINAService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_servicos_ab_dic_tina_service__["a" /* ABDICTINAService */]) === "function" && _c || Object])
], TinasComponent);

var _a, _b, _c;
//# sourceMappingURL=tinas.component.js.map

/***/ }),

/***/ "../../../../../src/app/paginas/tinas/tinasform/tinasform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/paginas/tinas/tinasform/tinasform.component.html":
/***/ (function(module, exports) {

module.exports = "<app-controlos (anteriorbt)=\"anterior()\"  (seguintebt)=\"seguinte()\"  (apagarbt)=\"apagar()\"></app-controlos>\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"red\">\n            <h4 class=\"title\">Ficha de Tina</h4>\n            <p class=\"category\">Complete os Dados</p>\n          </div>\n          <div class=\"card-content\">\n            <form id=\"formTina\" (ngSubmit)=\"gravar()\" ngNativeValidate>\n              <div class=\"row\">\n                <div class=\"col-md-3\">\n                  <div [ngClass]=\"codigo == '' ? 'is-empty' : null\"  class=\"form-group form-black label-floating \">\n                    <label class=\"control-label\">Código Tina</label>\n                    <input type=\"text\"  mask='000-000' class=\"form-control\"  [(ngModel)]=\"codigo\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"!modoedicao\" required>\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div [ngClass]=\"data == '' ? 'is-empty' : null\"  class=\"form-group form-black label-floating\">\n                    <label class=\"control-label\">Data Última Alteração</label>\n                    <input type=\"text\" class=\"form-control\" value=\"{{data}}\"disabled>\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group form-black label-floating\">\n                    <label style=\"font-size: 14px;\">Linha</label>\n                    <p-dropdown [options]=\"linhas\" [style]=\"{'width':'150px'}\" [style.background]=\"cor_linha\" [(ngModel)]=\"linha\" [ngModelOptions]=\"{standalone: true}\"\n                      [disabled]=\"!modoedicao\" [required]=\"true\"></p-dropdown>\n                  </div>\n                </div>\n                <div class=\"col-md-3\">\n                  <div class=\"form-group form-black label-floating\">\n                    <label style=\"font-size: 14px;\">Zona</label>\n                    <p-dropdown [options]=\"zonas\" [style]=\"{'width':'150px'}\" [(ngModel)]=\"zona\" [ngModelOptions]=\"{standalone: true}\"\n                      [disabled]=\"!modoedicao\" ></p-dropdown>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div [ngClass]=\"capacidade == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating\">\n                    <label class=\"control-label\">Capacidade Tina (L)</label>\n                    <input type=\"number\" class=\"form-control\"  [(ngModel)]=\"capacidade\" [ngModelOptions]=\"{standalone: true}\"   [disabled]=\"!modoedicao\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <div [ngClass]=\"obs == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating\">\n                      <label class=\"control-label\">Observações</label>\n                      <textarea class=\"form-control\" rows=\"5\"  [(ngModel)]=\"obs\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"!modoedicao\"></textarea>\n                    </div>\n                  </div>\n                </div>\n              </div>\n               <button type=\"reset\" (click)=\"backview()\" class=\"btn btn-danger pull-right\" [hidden]=\"!modoedicao\">Cancelar</button>\n              <button type=\"submit\"  class=\"btn btn-success pull-right\" [hidden]=\"!modoedicao\">Gravar</button>\n              <div class=\"clearfix\"></div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<button class=\"btn btn-danger btn-block\" #inputnotifi [hidden]=\"true\" onclick=\"demo.showNotification('top','right','Inseriu com Sucesso!',2)\"></button>\n<button class=\"btn btn-danger btn-block\" #inputgravou [hidden]=\"true\" onclick=\"demo.showNotification('top','right','Alterado com Sucesso!',2)\"></button>\n<button class=\"btn btn-danger btn-block\" #inputapagar [hidden]=\"true\" onclick=\"demo.showNotification('top','right','Apagado com Sucesso!',2)\"></button>\n<button class=\"btn btn-danger btn-block\" #inputerro [hidden]=\"true\" onclick=\"demo.showNotification('top','right','ERRO!! Registo não foi Gravado!',4)\"></button>\n "

/***/ }),

/***/ "../../../../../src/app/paginas/tinas/tinasform/tinasform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_menu_sidebar_metadata__ = __webpack_require__("../../../../../src/app/menu/sidebar.metadata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_entidades_AB_DIC_TINA__ = __webpack_require__("../../../../../src/app/entidades/AB_DIC_TINA.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_servicos_ab_dic_tina_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-tina.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_servicos_ab_dic_linha_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-linha.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_servicos_ab_dic_zona_service__ = __webpack_require__("../../../../../src/app/servicos/ab-dic-zona.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TinasformComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TinasformComponent = (function () {
    function TinasformComponent(ABDICZONAService, ABDICLINHAService, confirmationService, router, ABDICTINAService, renderer, route, globalVar, location) {
        this.ABDICZONAService = ABDICZONAService;
        this.ABDICLINHAService = ABDICLINHAService;
        this.confirmationService = confirmationService;
        this.router = router;
        this.ABDICTINAService = ABDICTINAService;
        this.renderer = renderer;
        this.route = route;
        this.globalVar = globalVar;
        this.location = location;
        this.tina = [];
        this.modoedicao = false;
        this.novo = false;
        this.codigo = "";
        this.data = null;
        this.obs = "";
    }
    TinasformComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalVar.setapagar(true);
        this.globalVar.seteditar(true);
        this.globalVar.setvoltar(true);
        this.globalVar.seteditar(true);
        this.globalVar.setseguinte(true);
        this.globalVar.setanterior(true);
        this.globalVar.setpesquisar(true);
        this.user = JSON.parse(localStorage.getItem('userapp'))["id"];
        var url = this.router.routerState.snapshot.url;
        url = url.slice(1);
        var urlarray = url.split("/");
        if (urlarray[1].match("editar") || urlarray[1].match("view")) {
            this.novo = false;
            this.codigo = "";
            this.data = 0;
            this.capacidade = 0;
            var id;
            var sub = this.route
                .queryParams
                .subscribe(function (params) {
                id = params['id'] || 0;
            });
            //preenche array para navegar nos tinas 
            this.ABDICTINAService.getAll().subscribe(function (response) {
                for (var x in response) {
                    _this.tina.push(response[x].id_TINA);
                }
                _this.i = _this.tina.indexOf(+id);
                _this.incia(_this.tina[_this.i]);
            }, function (error) { console.log(error); });
        }
        //preenche combobox linhas
        this.ABDICLINHAService.getAll().subscribe(function (response) {
            _this.linhas = [];
            _this.linhas.push({ label: 'Seleccione Linha', value: "" });
            for (var x in response) {
                _this.linhas.push({ label: response[x].nome_LINHA, value: response[x].id_LINHA });
            }
            _this.linha = _this.globalVar.getlinha();
            _this.linhas = _this.linhas.slice();
        }, function (error) { return console.log(error); });
        //preenche combobox zonas
        this.zonas = [];
        this.zonas.push({ label: 'Seleccione Zona', value: "" });
        this.ABDICZONAService.getAll().subscribe(function (response) {
            for (var x in response) {
                _this.zonas.push({ value: response[x].id_ZONA, label: response[x].nome_ZONA });
            }
            _this.zonas = _this.zonas.slice();
        }, function (error) { return console.log(error); });
        if (urlarray[1] != null) {
            if (urlarray[1].match("editar")) {
                this.globalVar.setseguinte(false);
                this.globalVar.setanterior(false);
                this.globalVar.setapagar(false);
                this.globalVar.setcriar(true);
                this.modoedicao = true;
            }
            else if (urlarray[1].match("novo")) {
                this.globalVar.setseguinte(false);
                this.globalVar.setanterior(false);
                this.globalVar.setapagar(false);
                this.globalVar.setcriar(false);
                this.novo = true;
                this.globalVar.seteditar(false);
                this.modoedicao = true;
                var dirtyFormID = 'formTina';
                var resetForm = document.getElementById(dirtyFormID);
                resetForm.reset();
            }
            else if (urlarray[1].match("view")) {
                this.globalVar.setcriar(true);
            }
        }
    };
    //preenche dados com o id
    TinasformComponent.prototype.incia = function (id) {
        var _this = this;
        if (id != 0 && id != "undefined") {
            this.ABDICTINAService.getbyID(id).subscribe(function (response) {
                var count = Object.keys(response).length;
                //se existir tinas com o id
                if (count > 0) {
                    _this.tinas_dados = response[0][0];
                    for (var x in response) {
                        _this.codigo = response[x][0].cod_TINA;
                        _this.data = new Date(response[x][0].data_ULT_MODIF).toLocaleDateString();
                        _this.capacidade = response[x][0].capacidade;
                        _this.linha = response[x][0].id_LINHA;
                        _this.zona = response[x][0].id_ZONA;
                        _this.obs = response[x][0].obs;
                        _this.cor_linha = response[x][1].cor;
                    }
                }
                else {
                    _this.router.navigate(['tinas']);
                }
            }, function (error) { console.log(error); });
        }
        else {
            this.router.navigate(['tinas']);
        }
    };
    //bt cancelar
    TinasformComponent.prototype.backview = function () {
        this.location.back();
    };
    //bt gravar
    TinasformComponent.prototype.gravar = function () {
        var _this = this;
        var tina = new __WEBPACK_IMPORTED_MODULE_5_app_entidades_AB_DIC_TINA__["a" /* AB_DIC_TINA */];
        if (this.novo) {
            tina.obs = this.obs;
            tina.data_ULT_MODIF = new Date();
            tina.utz_CRIA = this.user;
            tina.data_CRIA = new Date();
            tina.capacidade = this.capacidade;
            tina.cod_TINA = this.codigo;
            tina.id_LINHA = this.linha;
            tina.id_ZONA = this.zona;
            tina.inativo = false;
            this.ABDICTINAService.create(tina).subscribe(function (res) {
                _this.simular(_this.inputnotifi);
                _this.router.navigate(['tinas/view'], { queryParams: { id: res.id_TINA } });
            }, function (error) { console.log(error); _this.simular(_this.inputerro); });
        }
        else {
            var id;
            var sub = this.route
                .queryParams
                .subscribe(function (params) {
                id = params['id'] || 0;
            });
            tina = this.tinas_dados;
            tina.obs = this.obs;
            tina.capacidade = this.capacidade;
            tina.cod_TINA = this.codigo;
            tina.data_ULT_MODIF = new Date();
            tina.utz_ULT_MODIF = this.user;
            tina.id_LINHA = this.linha;
            tina.id_ZONA = this.zona;
            this.ABDICTINAService.update(tina).then(function () {
                _this.simular(_this.inputgravou);
                _this.router.navigate(['tinas/view'], { queryParams: { id: id } });
            });
        }
    };
    TinasformComponent.prototype.apagar = function () {
        var id;
        var sub = this.route
            .queryParams
            .subscribe(function (params) {
            id = params['id'] || 0;
        });
        if (id != 0) {
            this.confirm(id);
        }
    };
    TinasformComponent.prototype.seguinte = function () {
        this.i = this.i + 1;
        this.i = this.i % this.tina.length;
        if (this.tina.length > 0) {
            this.incia(this.tina[this.i]);
            this.router.navigate(['tinas/view'], { queryParams: { id: this.tina[this.i] } });
        }
    };
    TinasformComponent.prototype.anterior = function () {
        if (this.i === 0) {
            this.i = this.tina.length;
        }
        this.i = this.i - 1;
        this.router.navigate(['tinas/view'], { queryParams: { id: this.tina[this.i] } });
        if (this.tina.length > 0) {
            this.incia(this.tina[this.i]);
        }
    };
    //popup apagar
    TinasformComponent.prototype.confirm = function (id) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Tem a certeza que pretende apagar?',
            header: 'Apagar Confirmação',
            icon: 'fa fa-trash',
            accept: function () {
                var tina = new __WEBPACK_IMPORTED_MODULE_5_app_entidades_AB_DIC_TINA__["a" /* AB_DIC_TINA */];
                tina = _this.tinas_dados;
                tina.inativo = true;
                tina.utz_ANULACAO = _this.user;
                tina.data_ANULACAO = new Date();
                _this.ABDICTINAService.update(tina).then(function () {
                    _this.simular(_this.inputapagar);
                    _this.router.navigate(['tinas']);
                });
            }
        });
    };
    //simular click para mostrar mensagem
    TinasformComponent.prototype.simular = function (element) {
        var event = new MouseEvent('click', { bubbles: true });
        this.renderer.invokeElementMethod(element.nativeElement, 'dispatchEvent', [event]);
    };
    return TinasformComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputnotifi'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], TinasformComponent.prototype, "inputnotifi", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputgravou'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], TinasformComponent.prototype, "inputgravou", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputapagar'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object)
], TinasformComponent.prototype, "inputapagar", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputerro'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object)
], TinasformComponent.prototype, "inputerro", void 0);
TinasformComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tinasform',
        template: __webpack_require__("../../../../../src/app/paginas/tinas/tinasform/tinasform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/paginas/tinas/tinasform/tinasform.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8_app_servicos_ab_dic_zona_service__["a" /* ABDICZONAService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_app_servicos_ab_dic_zona_service__["a" /* ABDICZONAService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7_app_servicos_ab_dic_linha_service__["a" /* ABDICLINHAService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_app_servicos_ab_dic_linha_service__["a" /* ABDICLINHAService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6_app_servicos_ab_dic_tina_service__["a" /* ABDICTINAService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_app_servicos_ab_dic_tina_service__["a" /* ABDICTINAService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1_app_menu_sidebar_metadata__["a" /* AppGlobals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_menu_sidebar_metadata__["a" /* AppGlobals */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _o || Object])
], TinasformComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
//# sourceMappingURL=tinasform.component.js.map

/***/ }),

/***/ "../../../../../src/app/paginas/utilizadores/utilizadores.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/paginas/utilizadores/utilizadores.component.html":
/***/ (function(module, exports) {

module.exports = "<app-controlos></app-controlos>\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"red\">\n            <h4 class=\"title\">Utilizadores</h4>\n            <p class=\"category\"></p>\n          </div>\n          <div class=\"card-content table-responsive\">\n\n            <p-dataTable [value]=\"cols\" dataKey=\"id\" [rows]=\"15\" [paginator]=\"true\" [pageLinks]=\"3\" [stacked]=\"stacked\" (onRowDblclick)=\"abrir($event)\" [rowsPerPageOptions]=\"[15,20,30,'todos']\">\n              <p-column [sortable]=\"true\" [filter]=\"true\" styleclass=\"text-danger\" field=\"id\" header=\"ID\"></p-column>\n              <p-column [sortable]=\"true\" [filter]=\"true\" styleclass=\"text-danger\" field=\"nome\" header=\"Nome do Utilizador\"></p-column>\n              <p-column styleClass=\"col-button\">\n                <ng-template pTemplate=\"header\">\n                </ng-template>\n                <ng-template let-car=\"rowData\" pTemplate=\"body\">\n                  <a style=\"color: black; cursor:pointer;\" title=\"Ver mais\" [routerLink]=\"['/utilizadores/view']\" [queryParams]=\"{ id: car.id }\">\n                  <i class=\"material-icons\">search</i>\n                  </a>\n                </ng-template>\n              </p-column>\n            </p-dataTable>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/paginas/utilizadores/utilizadores.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_menu_sidebar_metadata__ = __webpack_require__("../../../../../src/app/menu/sidebar.metadata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_servicos_ger_utilizadores_service__ = __webpack_require__("../../../../../src/app/servicos/ger-utilizadores.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilizadoresComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UtilizadoresComponent = (function () {
    function UtilizadoresComponent(router, globalVar, GERUTILIZADORESService) {
        this.router = router;
        this.globalVar = globalVar;
        this.GERUTILIZADORESService = GERUTILIZADORESService;
    }
    UtilizadoresComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cols = [];
        this.globalVar.setvoltar(false);
        this.globalVar.seteditar(false);
        this.globalVar.setapagar(false);
        this.globalVar.setseguinte(false);
        this.globalVar.setanterior(false);
        this.globalVar.setcriar(true);
        this.globalVar.setpesquisar(true);
        this.globalVar.setduplicar(false);
        this.GERUTILIZADORESService.getAll().subscribe(function (response) {
            for (var x in response) {
                _this.cols.push({ id: response[x].id_UTILIZADOR, nome: response[x].nome_UTILIZADOR });
            }
            _this.cols = _this.cols.slice();
        }, function (error) { return console.log(error); });
    };
    //clicar 2 vezes na tabela abre linha
    UtilizadoresComponent.prototype.abrir = function (event) {
        this.router.navigate(['utilizadores/view'], { queryParams: { id: event.data.id } });
    };
    return UtilizadoresComponent;
}());
UtilizadoresComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-utilizadores',
        template: __webpack_require__("../../../../../src/app/paginas/utilizadores/utilizadores.component.html"),
        styles: [__webpack_require__("../../../../../src/app/paginas/utilizadores/utilizadores.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_menu_sidebar_metadata__["a" /* AppGlobals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_menu_sidebar_metadata__["a" /* AppGlobals */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_servicos_ger_utilizadores_service__["a" /* GERUTILIZADORESService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_servicos_ger_utilizadores_service__["a" /* GERUTILIZADORESService */]) === "function" && _c || Object])
], UtilizadoresComponent);

var _a, _b, _c;
//# sourceMappingURL=utilizadores.component.js.map

/***/ }),

/***/ "../../../../../src/app/paginas/utilizadores/utlform/utlform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/paginas/utilizadores/utlform/utlform.component.html":
/***/ (function(module, exports) {

module.exports = "<app-controlos (anteriorbt)=\"anterior()\" (seguintebt)=\"seguinte()\" (apagarbt)=\"apagar()\"></app-controlos>\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header\" data-background-color=\"red\">\n            <h4 class=\"title\">Ficha do Utilizador</h4>\n            <p class=\"category\">Complete os Dados</p>\n          </div>\n          <div class=\"card-content\">\n            <form id=\"formUtilizador\" (ngSubmit)=\"gravar()\" ngNativeValidate>\n              <div class=\"row\">\n                <div class=\"col-md-5\">\n                  <div [ngClass]=\"id_utl == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating \">\n                    <label class=\"control-label\">ID Utilizador</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"id_utl\" [ngModelOptions]=\"{standalone: true}\" disabled>\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <div [ngClass]=\"login == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating\">\n                    <label class=\"control-label\">Login</label>\n                    <input [ngClass]=\"class_numexiste\" type=\"text\" class=\"form-control\" (change)=\"resetclass()\" [(ngModel)]=\"login\" [ngModelOptions]=\"{standalone: true}\"\n                      [disabled]=\"!modoedicao\" required>\n                    <span style=\"font-size: 12px; color: red; font-weight: 500;\" [hidden]=\"!num_existe\">Nome para Login não se encontra disponível! </span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div [ngClass]=\"nome == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating\">\n                    <label class=\"control-label\">Nome Utilizador</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"nome\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"!modoedicao\"\n                      required>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <div [ngClass]=\"password == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating\">\n                    <label class=\"control-label\">Password</label>\n                    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"!modoedicao\"\n                      required>\n                  </div>\n                </div>\n                <div class=\"col-md-8\">\n                  <div class=\"form-group\">\n                    <div [ngClass]=\"email == '' ? 'is-empty' : null\" class=\"form-group form-black label-floating\">\n                      <label class=\"control-label\">Email</label>\n                      <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\" [disabled]=\"!modoedicao\"\n                        required>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <button type=\"reset\" (click)=\"backview()\" class=\"btn btn-danger pull-right\" [hidden]=\"!modoedicao\">Cancelar</button>\n              <button type=\"submit\" class=\"btn btn-success pull-right\" [hidden]=\"!modoedicao\">Gravar</button>\n              <div class=\"clearfix\"></div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<button class=\"btn btn-danger btn-block\" #inputnotifi [hidden]=\"true\" onclick=\"demo.showNotification('top','right','Inseriu com Sucesso!',2)\"></button>\n<button class=\"btn btn-danger btn-block\" #inputgravou [hidden]=\"true\" onclick=\"demo.showNotification('top','right','Alterado com Sucesso!',2)\"></button>\n<button class=\"btn btn-danger btn-block\" #inputapagar [hidden]=\"true\" onclick=\"demo.showNotification('top','right','Apagado com Sucesso!',2)\"></button>\n<button class=\"btn btn-danger btn-block\" #inputerro [hidden]=\"true\" onclick=\"demo.showNotification('top','right','ERRO!! Registo não foi Gravado!',4)\"></button>"

/***/ }),

/***/ "../../../../../src/app/paginas/utilizadores/utlform/utlform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_entidades_GER_UTILIZADORES__ = __webpack_require__("../../../../../src/app/entidades/GER_UTILIZADORES.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_menu_sidebar_metadata__ = __webpack_require__("../../../../../src/app/menu/sidebar.metadata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_servicos_ger_utilizadores_service__ = __webpack_require__("../../../../../src/app/servicos/ger-utilizadores.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtlformComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UtlformComponent = (function () {
    function UtlformComponent(confirmationService, router, GERUTILIZADORESService, renderer, route, globalVar, location) {
        this.confirmationService = confirmationService;
        this.router = router;
        this.GERUTILIZADORESService = GERUTILIZADORESService;
        this.renderer = renderer;
        this.route = route;
        this.globalVar = globalVar;
        this.location = location;
        this.utilizador = [];
        this.modoedicao = false;
        this.novo = false;
        this.nome = "";
        this.login = "";
        this.email = "";
        this.password = null;
        this.num_existe = false;
        this.class_numexiste = "";
    }
    UtlformComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.globalVar.setapagar(true);
        this.globalVar.seteditar(true);
        this.globalVar.setvoltar(true);
        this.globalVar.seteditar(true);
        this.globalVar.setseguinte(true);
        this.globalVar.setanterior(true);
        this.globalVar.setpesquisar(true);
        this.user = JSON.parse(localStorage.getItem('userapp'))["id"];
        var url = this.router.routerState.snapshot.url;
        url = url.slice(1);
        var urlarray = url.split("/");
        if (urlarray[1].match("editar") || urlarray[1].match("view")) {
            this.novo = false;
            this.id_utl = 0;
            this.email = "";
            this.password = 0;
            var id;
            var sub = this.route
                .queryParams
                .subscribe(function (params) {
                id = params['id'] || 0;
            });
            //preenche array para navegar nos utilizadores 
            this.GERUTILIZADORESService.getAll().subscribe(function (response) {
                for (var x in response) {
                    _this.utilizador.push(response[x].id_UTILIZADOR);
                }
                _this.i = _this.utilizador.indexOf(+id);
                _this.inicia(_this.utilizador[_this.i]);
            }, function (error) { console.log(error); });
        }
        if (urlarray[1] != null) {
            if (urlarray[1].match("editar")) {
                this.globalVar.setseguinte(false);
                this.globalVar.setanterior(false);
                this.globalVar.setapagar(false);
                this.globalVar.setcriar(true);
                this.modoedicao = true;
            }
            else if (urlarray[1].match("novo")) {
                this.globalVar.setseguinte(false);
                this.globalVar.setanterior(false);
                this.globalVar.setapagar(false);
                this.globalVar.setcriar(false);
                this.novo = true;
                this.globalVar.seteditar(false);
                this.modoedicao = true;
                var dirtyFormID = 'formUtilizador';
                var resetForm = document.getElementById(dirtyFormID);
                resetForm.reset();
            }
            else if (urlarray[1].match("view")) {
                this.globalVar.setcriar(true);
            }
        }
    };
    //preenche dados com o id
    UtlformComponent.prototype.inicia = function (id) {
        var _this = this;
        if (id != 0 && id != "undefined") {
            this.GERUTILIZADORESService.getbyID(id).subscribe(function (response) {
                var count = Object.keys(response).length;
                //se existir utilizadores com o id
                if (count > 0) {
                    _this.utilizadores_dados = response[0];
                    for (var x in response) {
                        _this.id_utl = response[x].id_UTILIZADOR;
                        _this.nome = response[x].nome_UTILIZADOR;
                        _this.email = response[x].email;
                        _this.password = response[x].password;
                        _this.login = response[x].login;
                    }
                }
                else {
                    _this.router.navigate(['utilizadores']);
                }
            }, function (error) { console.log(error); });
        }
        else {
            this.router.navigate(['utilizadores']);
        }
    };
    //bt cancelar
    UtlformComponent.prototype.backview = function () {
        this.location.back();
    };
    UtlformComponent.prototype.resetclass = function () {
        this.num_existe = false;
        this.class_numexiste = "";
    };
    //bt gravar
    UtlformComponent.prototype.gravar = function () {
        var _this = this;
        var utilizador = new __WEBPACK_IMPORTED_MODULE_1_app_entidades_GER_UTILIZADORES__["a" /* GER_UTILIZADORES */];
        if (this.novo) {
            utilizador.nome_UTILIZADOR = this.nome;
            utilizador.login = this.login;
            utilizador.password = this.password;
            utilizador.data_CRIA = new Date();
            utilizador.email = this.email;
            utilizador.inativo = false;
            utilizador.admin = false;
            //verifica se existe utilizadro com o mesmo login
            this.GERUTILIZADORESService.getbyLogin(this.login).subscribe(function (response) {
                var count = Object.keys(response).length;
                if (count == 0) {
                    _this.GERUTILIZADORESService.create(utilizador).subscribe(function (res) {
                        _this.simular(_this.inputnotifi);
                        _this.router.navigate(['utilizadores/view'], { queryParams: { id: res.id_UTILIZADOR } });
                    }, function (error) { console.log(error); _this.simular(_this.inputerro); });
                }
                else {
                    _this.num_existe = true;
                    _this.class_numexiste = "num_existe";
                }
            }, function (error) { console.log(error); _this.simular(_this.inputerro); });
        }
        else {
            var id;
            var sub = this.route
                .queryParams
                .subscribe(function (params) {
                id = params['id'] || 0;
            });
            utilizador = this.utilizadores_dados;
            utilizador.nome_UTILIZADOR = this.nome;
            utilizador.login = this.login;
            utilizador.password = this.password;
            utilizador.email = this.email;
            //verifica se existe utilizadro com o mesmo login
            this.GERUTILIZADORESService.verifica_login(id, this.login).subscribe(function (response) {
                var count = Object.keys(response).length;
                if (count == 0) {
                    _this.GERUTILIZADORESService.update(utilizador).then(function () {
                        _this.simular(_this.inputgravou);
                        _this.router.navigate(['utilizadores/view'], { queryParams: { id: id } });
                    });
                }
                else {
                    _this.num_existe = true;
                    _this.class_numexiste = "num_existe";
                }
            }, function (error) { console.log(error); _this.simular(_this.inputerro); });
        }
    };
    UtlformComponent.prototype.apagar = function () {
        var id;
        var sub = this.route
            .queryParams
            .subscribe(function (params) {
            id = params['id'] || 0;
        });
        if (id != 0) {
            this.confirm(id);
        }
    };
    UtlformComponent.prototype.seguinte = function () {
        this.i = this.i + 1;
        this.i = this.i % this.utilizador.length;
        if (this.utilizador.length > 0) {
            this.inicia(this.utilizador[this.i]);
            this.router.navigate(['utilizadores/view'], { queryParams: { id: this.utilizador[this.i] } });
        }
    };
    UtlformComponent.prototype.anterior = function () {
        if (this.i === 0) {
            this.i = this.utilizador.length;
        }
        this.i = this.i - 1;
        this.router.navigate(['utilizadores/view'], { queryParams: { id: this.utilizador[this.i] } });
        if (this.utilizador.length > 0) {
            this.inicia(this.utilizador[this.i]);
        }
    };
    //popup apagar
    UtlformComponent.prototype.confirm = function (id) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Tem a certeza que pretende apagar?',
            header: 'Apagar Confirmação',
            icon: 'fa fa-trash',
            accept: function () {
                var utilizador = new __WEBPACK_IMPORTED_MODULE_1_app_entidades_GER_UTILIZADORES__["a" /* GER_UTILIZADORES */];
                utilizador = _this.utilizadores_dados;
                utilizador.inativo = true;
                utilizador.utz_ANULACAO = _this.user;
                utilizador.data_ANULACAO = new Date();
                _this.GERUTILIZADORESService.update(utilizador).then(function () {
                    _this.simular(_this.inputapagar);
                    _this.router.navigate(['utilizadores']);
                });
            }
        });
    };
    //simular click para mostrar mensagem
    UtlformComponent.prototype.simular = function (element) {
        var event = new MouseEvent('click', { bubbles: true });
        this.renderer.invokeElementMethod(element.nativeElement, 'dispatchEvent', [event]);
    };
    return UtlformComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputnotifi'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], UtlformComponent.prototype, "inputnotifi", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputgravou'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], UtlformComponent.prototype, "inputgravou", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputapagar'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object)
], UtlformComponent.prototype, "inputapagar", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputerro'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object)
], UtlformComponent.prototype, "inputerro", void 0);
UtlformComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-utlform',
        template: __webpack_require__("../../../../../src/app/paginas/utilizadores/utlform/utlform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/paginas/utilizadores/utlform/utlform.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6_app_servicos_ger_utilizadores_service__["a" /* GERUTILIZADORESService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_app_servicos_ger_utilizadores_service__["a" /* GERUTILIZADORESService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["ActivatedRoute"]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2_app_menu_sidebar_metadata__["a" /* AppGlobals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_menu_sidebar_metadata__["a" /* AppGlobals */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _l || Object])
], UtlformComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
//# sourceMappingURL=utlform.component.js.map

/***/ }),

/***/ "../../../../../src/app/rodape/rodape.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/rodape/rodape.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class=\"container-fluid\">\n        <p class=\"copyright pull-right\">\n            &copy; {{test | date: 'yyyy'}} <a href=\"http://www.doureca.com\">DOURECA</a>\n        </p>\n    </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/rodape/rodape.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RodapeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RodapeComponent = (function () {
    function RodapeComponent() {
        this.test = new Date();
    }
    return RodapeComponent;
}());
RodapeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-rodape',
        template: __webpack_require__("../../../../../src/app/rodape/rodape.component.html"),
        styles: [__webpack_require__("../../../../../src/app/rodape/rodape.component.css")]
    })
], RodapeComponent);

//# sourceMappingURL=rodape.component.js.map

/***/ }),

/***/ "../../../../../src/app/router.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/router.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RouterComponent = (function () {
    function RouterComponent() {
    }
    return RouterComponent;
}());
RouterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'router-cmp',
        template: __webpack_require__("../../../../../src/app/router.component.html")
    })
], RouterComponent);

//# sourceMappingURL=router.component.js.map

/***/ }),

/***/ "../../../../../src/app/servicos/LoginService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = (function () {
    function LoginService(router) {
        this.router = router;
    }
    LoginService.prototype.canActivate = function () {
        if (localStorage.getItem('time')) {
            var data_storage = new Date(JSON.parse(localStorage.getItem('time'))["data"]).getTime();
            if ((data_storage + 86400000) <= new Date().getTime()) {
                localStorage.clear();
            }
        }
        var access = JSON.parse(localStorage.getItem('access'));
        if (!localStorage.getItem('userapp') || !localStorage.getItem('time')) {
            // alert('Efetue o Login!');
            this.router.navigate(['./login']);
            return false;
        } /*else if (!localStorage.getItem('access')) {
            alert('Acesso Negado!');
            this.router.navigate(['./login']);
            return false;
        }*/
        return true;
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=LoginService.js.map

/***/ }),

/***/ "../../../../../src/app/servicos/ab-dic-banho-aditivo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_webUrl__ = __webpack_require__("../../../../../src/webUrl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ABDICBANHOADITIVOService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ABDICBANHOADITIVOService = (function () {
    function ABDICBANHOADITIVOService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    ABDICBANHOADITIVOService.prototype.create = function (data) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/createAB_DIC_BANHO_ADITIVO', JSON.stringify(data), { headers: this.headers })
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICBANHOADITIVOService.prototype.getAll = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_DIC_BANHO_ADITIVO';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICBANHOADITIVOService.prototype.getbyID = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_DIC_BANHO_ADITIVObyid_aditivo/' + id + '';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICBANHOADITIVOService.prototype.getbyID_banho = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_DIC_BANHO_ADITIVObyid_banho/' + id + '';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICBANHOADITIVOService.prototype.delete = function (id) {
        return this.http
            .delete(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/deleteAB_DIC_BANHO_ADITIVO/' + id + '')
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    ABDICBANHOADITIVOService.prototype.update = function (data) {
        return this.http
            .put(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/updateAB_DIC_BANHO_ADITIVO', JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ABDICBANHOADITIVOService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    return ABDICBANHOADITIVOService;
}());
ABDICBANHOADITIVOService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ABDICBANHOADITIVOService);

var _a;
//# sourceMappingURL=ab-dic-banho-aditivo.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicos/ab-dic-banho-componente.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_webUrl__ = __webpack_require__("../../../../../src/webUrl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ABDICBANHOCOMPONENTEService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ABDICBANHOCOMPONENTEService = (function () {
    function ABDICBANHOCOMPONENTEService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    ABDICBANHOCOMPONENTEService.prototype.create = function (data) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/createAB_DIC_BANHO_COMPONENTE', JSON.stringify(data), { headers: this.headers })
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICBANHOCOMPONENTEService.prototype.getbyid_banho = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_DIC_BANHO_COMPONENTEbyid_banho/' + id;
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICBANHOCOMPONENTEService.prototype.getbyid_banho_comp = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_DIC_BANHO_COMPONENTEbyid_banho_comp/' + id;
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICBANHOCOMPONENTEService.prototype.getAll = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_DIC_BANHO_COMPONENTE';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICBANHOCOMPONENTEService.prototype.delete = function (id) {
        return this.http
            .delete(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/deleteAB_DIC_BANHO_COMPONENTE/' + id + '')
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    ABDICBANHOCOMPONENTEService.prototype.update = function (data) {
        return this.http
            .put(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/updateAB_DIC_BANHO_COMPONENTE', JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ABDICBANHOCOMPONENTEService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    return ABDICBANHOCOMPONENTEService;
}());
ABDICBANHOCOMPONENTEService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ABDICBANHOCOMPONENTEService);

var _a;
//# sourceMappingURL=ab-dic-banho-componente.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicos/ab-dic-banho.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_webUrl__ = __webpack_require__("../../../../../src/webUrl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ABDICBANHOService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ABDICBANHOService = (function () {
    function ABDICBANHOService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    ABDICBANHOService.prototype.create = function (data) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/createAB_DIC_BANHO', JSON.stringify(data), { headers: this.headers })
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICBANHOService.prototype.getAll = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_DIC_BANHO';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICBANHOService.prototype.getAllLINHA = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_DIC_BANHOLINHA';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICBANHOService.prototype.getAllLINHAbylinha = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAllLINHAbylinha/' + id;
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICBANHOService.prototype.getbyID = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_DIC_BANHOyid_banho/' + id + '';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICBANHOService.prototype.delete = function (id) {
        return this.http
            .delete(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/deleteAB_DIC_BANHO/' + id + '')
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    ABDICBANHOService.prototype.update = function (data) {
        return this.http
            .put(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/updateAB_DIC_BANHO', JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ABDICBANHOService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    return ABDICBANHOService;
}());
ABDICBANHOService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ABDICBANHOService);

var _a;
//# sourceMappingURL=ab-dic-banho.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicos/ab-dic-componente.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_webUrl__ = __webpack_require__("../../../../../src/webUrl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ABDICCOMPONENTEService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ABDICCOMPONENTEService = (function () {
    function ABDICCOMPONENTEService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    ABDICCOMPONENTEService.prototype.create = function (data) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/createAB_DIC_COMPONENTE', JSON.stringify(data), { headers: this.headers })
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICCOMPONENTEService.prototype.getbyID = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_DIC_COMPONENTEbyid_componente/' + id + '';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICCOMPONENTEService.prototype.getAll = function (tipo) {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_DIC_COMPONENTE/' + tipo;
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICCOMPONENTEService.prototype.getComponentes = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getComponentes';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICCOMPONENTEService.prototype.delete = function (id) {
        return this.http
            .delete(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/deleteAB_DIC_COMPONENTE/' + id + '')
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    ABDICCOMPONENTEService.prototype.update = function (data) {
        return this.http
            .put(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/updateAB_DIC_COMPONENTE', JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ABDICCOMPONENTEService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    return ABDICCOMPONENTEService;
}());
ABDICCOMPONENTEService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ABDICCOMPONENTEService);

var _a;
//# sourceMappingURL=ab-dic-componente.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicos/ab-dic-linha.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_webUrl__ = __webpack_require__("../../../../../src/webUrl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ABDICLINHAService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ABDICLINHAService = (function () {
    function ABDICLINHAService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    ABDICLINHAService.prototype.create = function (data) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/createAB_DIC_LINHA', JSON.stringify(data), { headers: this.headers })
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICLINHAService.prototype.getby = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_DIC_LINHAbyid_linha/' + id;
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICLINHAService.prototype.getAll = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_DIC_LINHA';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICLINHAService.prototype.delete = function (id) {
        return this.http
            .delete(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/deleteAB_DIC_LINHA/' + id + '')
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    ABDICLINHAService.prototype.update = function (data) {
        return this.http
            .put(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/updateAB_DIC_LINHA', JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ABDICLINHAService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    return ABDICLINHAService;
}());
ABDICLINHAService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ABDICLINHAService);

var _a;
//# sourceMappingURL=ab-dic-linha.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicos/ab-dic-tina.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_webUrl__ = __webpack_require__("../../../../../src/webUrl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ABDICTINAService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ABDICTINAService = (function () {
    function ABDICTINAService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    ABDICTINAService.prototype.create = function (data) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/createAB_DIC_TINA', JSON.stringify(data), { headers: this.headers })
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICTINAService.prototype.getAll = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_DIC_TINA';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICTINAService.prototype.getAll2 = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getallAB_DIC_TINA';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICTINAService.prototype.getbyID = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_DIC_TINAvbyid_tina/' + id + '';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICTINAService.prototype.delete = function (id) {
        return this.http
            .delete(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/deleteAB_DIC_TINA/' + id + '')
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    ABDICTINAService.prototype.update = function (data) {
        return this.http
            .put(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/updateAB_DIC_TINA', JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ABDICTINAService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    return ABDICTINAService;
}());
ABDICTINAService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ABDICTINAService);

var _a;
//# sourceMappingURL=ab-dic-tina.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicos/ab-dic-tipo-adicao.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_webUrl__ = __webpack_require__("../../../../../src/webUrl.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ABDICTIPOADICAOService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ABDICTIPOADICAOService = (function () {
    function ABDICTIPOADICAOService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    ABDICTIPOADICAOService.prototype.create = function (data) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/createAB_DIC_TIPO_ADICAO', JSON.stringify(data), { headers: this.headers })
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICTIPOADICAOService.prototype.getAll = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_DIC_TIPO_ADICAO';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICTIPOADICAOService.prototype.getbyID = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_DIC_TIPO_ADICAObyid_aditivo/' + id + '';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICTIPOADICAOService.prototype.getbyID_banho = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_DIC_TIPO_ADICAObyid_banho/' + id + '';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICTIPOADICAOService.prototype.delete = function (id) {
        return this.http
            .delete(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/deleteAB_DIC_TIPO_ADICAO/' + id + '')
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    ABDICTIPOADICAOService.prototype.update = function (data) {
        return this.http
            .put(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/updateAB_DIC_TIPO_ADICAO', JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ABDICTIPOADICAOService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    return ABDICTIPOADICAOService;
}());
ABDICTIPOADICAOService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ABDICTIPOADICAOService);

var _a;
//# sourceMappingURL=ab-dic-tipo-adicao.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicos/ab-dic-tipo-manutencao.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_webUrl__ = __webpack_require__("../../../../../src/webUrl.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ABDICTIPOMANUTENCAOService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ABDICTIPOMANUTENCAOService = (function () {
    function ABDICTIPOMANUTENCAOService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    ABDICTIPOMANUTENCAOService.prototype.create = function (data) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/createAB_DIC_TIPO_MANUTENCAO', JSON.stringify(data), { headers: this.headers })
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICTIPOMANUTENCAOService.prototype.getAll = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_DIC_TIPO_MANUTENCAO';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICTIPOMANUTENCAOService.prototype.getbyID = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_DIC_TIPO_MANUTENCAObyid_aditivo/' + id + '';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICTIPOMANUTENCAOService.prototype.getbyID_banho = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_DIC_TIPO_MANUTENCAObyid_banho/' + id + '';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICTIPOMANUTENCAOService.prototype.delete = function (id) {
        return this.http
            .delete(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/deleteAB_DIC_TIPO_MANUTENCAO/' + id + '')
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    ABDICTIPOMANUTENCAOService.prototype.update = function (data) {
        return this.http
            .put(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/updateAB_DIC_TIPO_MANUTENCAO', JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ABDICTIPOMANUTENCAOService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    return ABDICTIPOMANUTENCAOService;
}());
ABDICTIPOMANUTENCAOService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ABDICTIPOMANUTENCAOService);

var _a;
//# sourceMappingURL=ab-dic-tipo-manutencao.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicos/ab-dic-tipo-operacao.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_webUrl__ = __webpack_require__("../../../../../src/webUrl.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ABDICTIPOOPERACAOService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ABDICTIPOOPERACAOService = (function () {
    function ABDICTIPOOPERACAOService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    ABDICTIPOOPERACAOService.prototype.create = function (data) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/createAB_DIC_TIPO_OPERACAO', JSON.stringify(data), { headers: this.headers })
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICTIPOOPERACAOService.prototype.getAll = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_DIC_TIPO_OPERACAO';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICTIPOOPERACAOService.prototype.getbyID = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_DIC_TIPO_OPERACAObyid_aditivo/' + id + '';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICTIPOOPERACAOService.prototype.getbyID_banho = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_DIC_TIPO_OPERACAObyid_banho/' + id + '';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICTIPOOPERACAOService.prototype.delete = function (id) {
        return this.http
            .delete(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/deleteAB_DIC_TIPO_OPERACAO/' + id + '')
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    ABDICTIPOOPERACAOService.prototype.update = function (data) {
        return this.http
            .put(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/updateAB_DIC_TIPO_OPERACAO', JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ABDICTIPOOPERACAOService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    return ABDICTIPOOPERACAOService;
}());
ABDICTIPOOPERACAOService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ABDICTIPOOPERACAOService);

var _a;
//# sourceMappingURL=ab-dic-tipo-operacao.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicos/ab-dic-turno.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_webUrl__ = __webpack_require__("../../../../../src/webUrl.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ABDICTURNOService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ABDICTURNOService = (function () {
    function ABDICTURNOService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    ABDICTURNOService.prototype.create = function (data) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/createAB_DIC_TURNO', JSON.stringify(data), { headers: this.headers })
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICTURNOService.prototype.getAll = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_DIC_TURNO';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICTURNOService.prototype.getbyID = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_DIC_TURNObyid_aditivo/' + id + '';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICTURNOService.prototype.getbyID_banho = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_DIC_TURNObyid_banho/' + id + '';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICTURNOService.prototype.delete = function (id) {
        return this.http
            .delete(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/deleteAB_DIC_TURNO/' + id + '')
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    ABDICTURNOService.prototype.update = function (data) {
        return this.http
            .put(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/updateAB_DIC_TURNO', JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ABDICTURNOService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    return ABDICTURNOService;
}());
ABDICTURNOService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ABDICTURNOService);

var _a;
//# sourceMappingURL=ab-dic-turno.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicos/ab-dic-zona.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_webUrl__ = __webpack_require__("../../../../../src/webUrl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ABDICZONAService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ABDICZONAService = (function () {
    function ABDICZONAService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    ABDICZONAService.prototype.create = function (data) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/createAB_DIC_ZONA', JSON.stringify(data), { headers: this.headers })
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICZONAService.prototype.getbyid = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_DIC_ZONAbyid_zona/' + id;
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICZONAService.prototype.getAll = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_DIC_ZONA';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABDICZONAService.prototype.delete = function (id) {
        return this.http
            .delete(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/deleteAB_DIC_ZONA/' + id + '')
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    ABDICZONAService.prototype.update = function (data) {
        return this.http
            .put(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/updateAB_DIC_ZONA', JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ABDICZONAService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    return ABDICZONAService;
}());
ABDICZONAService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ABDICZONAService);

var _a;
//# sourceMappingURL=ab-dic-zona.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicos/ab-mov-analise-linha.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_webUrl__ = __webpack_require__("../../../../../src/webUrl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ABMOVANALISELINHAService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ABMOVANALISELINHAService = (function () {
    function ABMOVANALISELINHAService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    ABMOVANALISELINHAService.prototype.create = function (data) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/createAB_MOV_ANALISE_LINHA', JSON.stringify(data), { headers: this.headers })
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABMOVANALISELINHAService.prototype.getAll = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_MOV_ANALISE_LINHA';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABMOVANALISELINHAService.prototype.getbyid = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_MOV_ANALISE_LINHAbyid/' + id;
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABMOVANALISELINHAService.prototype.getbyid_analise = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_MOV_ANALISE_LINHAbyid_analise/' + id;
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABMOVANALISELINHAService.prototype.delete = function (id) {
        return this.http
            .delete(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/deleteAB_MOV_ANALISE_LINHA/' + id + '')
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    ABMOVANALISELINHAService.prototype.update = function (data) {
        return this.http
            .put(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/updateAB_MOV_ANALISE_LINHA', JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ABMOVANALISELINHAService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    return ABMOVANALISELINHAService;
}());
ABMOVANALISELINHAService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ABMOVANALISELINHAService);

var _a;
//# sourceMappingURL=ab-mov-analise-linha.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicos/ab-mov-analise.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_webUrl__ = __webpack_require__("../../../../../src/webUrl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ABMOVANALISEService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ABMOVANALISEService = (function () {
    function ABMOVANALISEService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    ABMOVANALISEService.prototype.create = function (data) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/createAB_MOV_ANALISE', JSON.stringify(data), { headers: this.headers })
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABMOVANALISEService.prototype.getAll = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_MOV_ANALISE';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABMOVANALISEService.prototype.getAll2 = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getallAB_MOV_ANALISE';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABMOVANALISEService.prototype.delete = function (id) {
        return this.http
            .delete(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/deleteAB_MOV_ANALISE/' + id + '')
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    ABMOVANALISEService.prototype.getbyID = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_MOV_ANALISEbyid/' + id + '';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABMOVANALISEService.prototype.update = function (data) {
        return this.http
            .put(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/updateAB_MOV_ANALISE', JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ABMOVANALISEService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    return ABMOVANALISEService;
}());
ABMOVANALISEService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ABMOVANALISEService);

var _a;
//# sourceMappingURL=ab-mov-analise.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicos/ab-mov-manutencao-cab.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_webUrl__ = __webpack_require__("../../../../../src/webUrl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ABMOVMANUTENCAOCABService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ABMOVMANUTENCAOCABService = (function () {
    function ABMOVMANUTENCAOCABService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    ABMOVMANUTENCAOCABService.prototype.create = function (data) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/createAB_MOV_MANUTENCAO_CAB', JSON.stringify(data), { headers: this.headers })
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABMOVMANUTENCAOCABService.prototype.getAll = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_MOV_MANUTENCAO_CAB';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABMOVMANUTENCAOCABService.prototype.getbyID = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_MOV_MANUTENCAO_CABbyidmanutencao/' + id + '';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABMOVMANUTENCAOCABService.prototype.getbyID_cab = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_MOV_MANUTENCAO_CABbyid/' + id + '';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABMOVMANUTENCAOCABService.prototype.delete = function (id) {
        return this.http
            .delete(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/deleteAB_MOV_MANUTENCAO_CAB/' + id + '')
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    ABMOVMANUTENCAOCABService.prototype.update = function (data) {
        return this.http
            .put(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/updateAB_MOV_MANUTENCAO_CAB', JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ABMOVMANUTENCAOCABService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    return ABMOVMANUTENCAOCABService;
}());
ABMOVMANUTENCAOCABService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ABMOVMANUTENCAOCABService);

var _a;
//# sourceMappingURL=ab-mov-manutencao-cab.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicos/ab-mov-manutencao-linha.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_webUrl__ = __webpack_require__("../../../../../src/webUrl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ABMOVMANUTENCAOLINHAService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ABMOVMANUTENCAOLINHAService = (function () {
    function ABMOVMANUTENCAOLINHAService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    ABMOVMANUTENCAOLINHAService.prototype.create = function (data) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/createAB_MOV_MANUTENCAO_LINHA', JSON.stringify(data), { headers: this.headers })
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABMOVMANUTENCAOLINHAService.prototype.getAll = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_MOV_MANUTENCAO_LINHA';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABMOVMANUTENCAOLINHAService.prototype.getbyID = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_MOV_MANUTENCAO_LINHAbyidmanutencaocab/' + id + '';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABMOVMANUTENCAOLINHAService.prototype.getbyID_lin = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_MOV_MANUTENCAO_LINHAbyid/' + id + '';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABMOVMANUTENCAOLINHAService.prototype.delete = function (id) {
        return this.http
            .delete(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/deleteAB_MOV_MANUTENCAO_LINHA/' + id + '')
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    ABMOVMANUTENCAOLINHAService.prototype.update = function (data) {
        return this.http
            .put(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/updateAB_MOV_MANUTENCAO_LINHA', JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ABMOVMANUTENCAOLINHAService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    return ABMOVMANUTENCAOLINHAService;
}());
ABMOVMANUTENCAOLINHAService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ABMOVMANUTENCAOLINHAService);

var _a;
//# sourceMappingURL=ab-mov-manutencao-linha.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicos/ab-mov-manutencao.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_webUrl__ = __webpack_require__("../../../../../src/webUrl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ABMOVMANUTENCAOService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ABMOVMANUTENCAOService = (function () {
    function ABMOVMANUTENCAOService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    ABMOVMANUTENCAOService.prototype.create = function (data) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/createAB_MOV_MANUTENCAO', JSON.stringify(data), { headers: this.headers })
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABMOVMANUTENCAOService.prototype.getAll = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_MOV_MANUTENCAO';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABMOVMANUTENCAOService.prototype.getbyID = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_MOV_MANUTENCAObyid/' + id + '';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABMOVMANUTENCAOService.prototype.delete = function (id) {
        return this.http
            .delete(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/deleteAB_MOV_MANUTENCAO/' + id + '')
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    ABMOVMANUTENCAOService.prototype.update = function (data) {
        return this.http
            .put(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/updateAB_MOV_MANUTENCAO', JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ABMOVMANUTENCAOService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    return ABMOVMANUTENCAOService;
}());
ABMOVMANUTENCAOService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ABMOVMANUTENCAOService);

var _a;
//# sourceMappingURL=ab-mov-manutencao.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicos/ab-unidade-medida.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_webUrl__ = __webpack_require__("../../../../../src/webUrl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ABUNIDADADEMEDIDAService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ABUNIDADADEMEDIDAService = (function () {
    function ABUNIDADADEMEDIDAService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    ABUNIDADADEMEDIDAService.prototype.create = function (data) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/createAB_DIC_UNIDADE_MEDIDA', JSON.stringify(data), { headers: this.headers })
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABUNIDADADEMEDIDAService.prototype.getAll = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAB_DIC_UNIDADE_MEDIDA';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ABUNIDADADEMEDIDAService.prototype.delete = function (id) {
        return this.http
            .delete(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/deleteAB_DIC_UNIDADE_MEDIDA/' + id + '')
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    ABUNIDADADEMEDIDAService.prototype.update = function (data) {
        return this.http
            .put(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/updateAB_DIC_UNIDADE_MEDIDA', JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ABUNIDADADEMEDIDAService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    return ABUNIDADADEMEDIDAService;
}());
ABUNIDADADEMEDIDAService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ABUNIDADADEMEDIDAService);

var _a;
//# sourceMappingURL=ab-unidade-medida.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicos/ad-mov-reg-param-operacao.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_webUrl__ = __webpack_require__("../../../../../src/webUrl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADMOVREGPARAMOPERACAOService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ADMOVREGPARAMOPERACAOService = (function () {
    function ADMOVREGPARAMOPERACAOService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    ADMOVREGPARAMOPERACAOService.prototype.create = function (data) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/createAD_MOV_REG_PARAM_OPERACAO', JSON.stringify(data), { headers: this.headers })
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ADMOVREGPARAMOPERACAOService.prototype.getAll = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAD_MOV_REG_PARAM_OPERACAO';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ADMOVREGPARAMOPERACAOService.prototype.getbyID = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getAD_MOV_REG_PARAM_OPERACAObyid/' + id + '';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ADMOVREGPARAMOPERACAOService.prototype.delete = function (id) {
        return this.http
            .delete(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/deleteAD_MOV_REG_PARAM_OPERACAO/' + id + '')
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    ADMOVREGPARAMOPERACAOService.prototype.update = function (data) {
        return this.http
            .put(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/updateAD_MOV_REG_PARAM_OPERACAO', JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ADMOVREGPARAMOPERACAOService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    return ADMOVREGPARAMOPERACAOService;
}());
ADMOVREGPARAMOPERACAOService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ADMOVREGPARAMOPERACAOService);

var _a;
//# sourceMappingURL=ad-mov-reg-param-operacao.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicos/email.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_webUrl__ = __webpack_require__("../../../../../src/webUrl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmailService = (function () {
    function EmailService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    EmailService.prototype.enviarEmail = function (data) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/sendemail', JSON.stringify(data), { headers: this.headers })
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    EmailService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    return EmailService;
}());
EmailService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], EmailService);

var _a;
//# sourceMappingURL=email.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicos/ger-fornecedor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_webUrl__ = __webpack_require__("../../../../../src/webUrl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GERFORNECEDORService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GERFORNECEDORService = (function () {
    function GERFORNECEDORService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    GERFORNECEDORService.prototype.create = function (data) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/createGER_FORNECEDOR', JSON.stringify(data), { headers: this.headers })
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    GERFORNECEDORService.prototype.getAll = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getGER_FORNECEDOR';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    GERFORNECEDORService.prototype.getAll_silver = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getFornecedores';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    GERFORNECEDORService.prototype.getbyID = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getGER_FORNECEDORbyid_fornecedor/' + id + '';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    GERFORNECEDORService.prototype.getMaxID = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getGER_FORNECEDORMaxID/';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    GERFORNECEDORService.prototype.verifica_num_fornece = function (id, num) {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/verifica_num_fornece/' + id + '/' + num + '';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    GERFORNECEDORService.prototype.verifica_num = function (num) {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/verifica_num/' + num + '';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    GERFORNECEDORService.prototype.delete = function (id) {
        return this.http
            .delete(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/deleteGER_FORNECEDOR/' + id + '')
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    GERFORNECEDORService.prototype.update = function (data) {
        return this.http
            .put(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/updateGER_FORNECEDOR', JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    GERFORNECEDORService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    return GERFORNECEDORService;
}());
GERFORNECEDORService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], GERFORNECEDORService);

var _a;
//# sourceMappingURL=ger-fornecedor.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicos/ger-utilizadores.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_webUrl__ = __webpack_require__("../../../../../src/webUrl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GERUTILIZADORESService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GERUTILIZADORESService = (function () {
    function GERUTILIZADORESService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    GERUTILIZADORESService.prototype.create = function (data) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/createGER_UTILIZADORES', JSON.stringify(data), { headers: this.headers })
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    GERUTILIZADORESService.prototype.getAll = function () {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getGER_UTILIZADORES';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    GERUTILIZADORESService.prototype.getbyLogin = function (login) {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getGER_UTILIZADORESbylogin/' + login + '';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    GERUTILIZADORESService.prototype.verifica_login = function (id, login) {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getGER_UTILIZADORESverifica_login/' + id + '/' + login;
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    GERUTILIZADORESService.prototype.getbyID = function (id) {
        var url = __WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/getGER_UTILIZADORESbyid_utilizador/' + id + '';
        return this.http
            .get(url)
            .map(this.extractData)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    GERUTILIZADORESService.prototype.delete = function (id) {
        return this.http
            .delete(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/deleteGER_UTILIZADORES/' + id + '')
            .toPromise()
            .then(function (res) { return res; })
            .catch(this.handleError);
    };
    GERUTILIZADORESService.prototype.update = function (data) {
        return this.http
            .put(__WEBPACK_IMPORTED_MODULE_3_webUrl__["a" /* webUrl */].host + '/rest/sirb/updateGER_UTILIZADORES', JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    GERUTILIZADORESService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    return GERUTILIZADORESService;
}());
GERUTILIZADORESService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], GERUTILIZADORESService);

var _a;
//# sourceMappingURL=ger-utilizadores.service.js.map

/***/ }),

/***/ "../../../../../src/app/servicos/relatorios.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_webUrl__ = __webpack_require__("../../../../../src/webUrl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelatoriosService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RelatoriosService = (function () {
    function RelatoriosService(http) {
        this.http = http;
    }
    RelatoriosService.prototype.downloadPDF = function (format, filename, id, relatorio) {
        var url = __WEBPACK_IMPORTED_MODULE_1_webUrl__["a" /* webUrl */].host + '/rest/sirb/get/' + format + '/' + filename + '/' + id + '/' + relatorio;
        return this.http.get(url, { responseType: __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* ResponseContentType */].Blob }).map(function (res) {
            if (format == "pdf") {
                return new Blob([res.blob()], { type: 'application/pdf' });
            }
            else if (format == "xlsx") {
                return new Blob([res.blob()], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            }
            else if (format == "docx") {
                return new Blob([res.blob()], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
            }
        });
    };
    return RelatoriosService;
}());
RelatoriosService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _a || Object])
], RelatoriosService);

var _a;
//# sourceMappingURL=relatorios.service.js.map

/***/ }),

/***/ "../../../../../src/assets/js/demo.js":
/***/ (function(module, exports) {

/* TIAGO */

!function (a) { function b(b, d) { function e() { if (w) { $canvas = a('<canvas class="pg-canvas"></canvas>'), v.prepend($canvas), p = $canvas[0], q = p.getContext("2d"), f(); for (var b = Math.round(p.width * p.height / d.density), c = 0; b > c; c++) { var e = new l; e.setStackPos(c), x.push(e) } a(window).on("resize", function () { h() }), a(document).on("mousemove", function (a) { y = a.pageX, z = a.pageY }), B && !A && window.addEventListener("deviceorientation", function () { D = Math.min(Math.max(-event.beta, -30), 30), C = Math.min(Math.max(-event.gamma, -30), 30) }, !0), g(), o("onInit") } } function f() { p.width = v.width(), p.height = v.height(), q.fillStyle = d.dotColor, q.strokeStyle = d.lineColor, q.lineWidth = d.lineWidth } function g() { if (w) { s = a(window).width(), t = a(window).height(), q.clearRect(0, 0, p.width, p.height); for (var b = 0; b < x.length; b++)x[b].updatePosition(); for (var b = 0; b < x.length; b++)x[b].draw(); E || (r = requestAnimationFrame(g)) } } function h() { for (f(), i = x.length - 1; i >= 0; i--)(x[i].position.x > v.width() || x[i].position.y > v.height()) && x.splice(i, 1); var a = Math.round(p.width * p.height / d.density); if (a > x.length) for (; a > x.length;) { var b = new l; x.push(b) } else a < x.length && x.splice(a); for (i = x.length - 1; i >= 0; i--)x[i].setStackPos(i) } function j() { E = !0 } function k() { E = !1, g() } function l() { switch (this.stackPos, this.active = !0, this.layer = Math.ceil(3 * Math.random()), this.parallaxOffsetX = 0, this.parallaxOffsetY = 0, this.position = { x: Math.ceil(Math.random() * p.width), y: Math.ceil(Math.random() * p.height) }, this.speed = {}, d.directionX) { case "left": this.speed.x = +(-d.maxSpeedX + Math.random() * d.maxSpeedX - d.minSpeedX).toFixed(2); break; case "right": this.speed.x = +(Math.random() * d.maxSpeedX + d.minSpeedX).toFixed(2); break; default: this.speed.x = +(-d.maxSpeedX / 2 + Math.random() * d.maxSpeedX).toFixed(2), this.speed.x += this.speed.x > 0 ? d.minSpeedX : -d.minSpeedX }switch (d.directionY) { case "up": this.speed.y = +(-d.maxSpeedY + Math.random() * d.maxSpeedY - d.minSpeedY).toFixed(2); break; case "down": this.speed.y = +(Math.random() * d.maxSpeedY + d.minSpeedY).toFixed(2); break; default: this.speed.y = +(-d.maxSpeedY / 2 + Math.random() * d.maxSpeedY).toFixed(2), this.speed.x += this.speed.y > 0 ? d.minSpeedY : -d.minSpeedY } } function m(a, b) { return b ? void (d[a] = b) : d[a] } function n() { v.find(".pg-canvas").remove(), o("onDestroy"), v.removeData("plugin_" + c) } function o(a) { void 0 !== d[a] && d[a].call(u) } var p, q, r, s, t, u = b, v = a(b), w = !!document.createElement("canvas").getContext, x = [], y = 0, z = 0, A = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), B = !!window.DeviceOrientationEvent, C = 0, D = 0, E = !1; return d = a.extend({}, a.fn[c].defaults, d), l.prototype.draw = function () { q.beginPath(), q.arc(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY, d.particleRadius / 2, 0, 2 * Math.PI, !0), q.closePath(), q.fill(), q.beginPath(); for (var a = x.length - 1; a > this.stackPos; a--) { var b = x[a], c = this.position.x - b.position.x, e = this.position.y - b.position.y, f = Math.sqrt(c * c + e * e).toFixed(2); f < d.proximity && (q.moveTo(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY), d.curvedLines ? q.quadraticCurveTo(Math.max(b.position.x, b.position.x), Math.min(b.position.y, b.position.y), b.position.x + b.parallaxOffsetX, b.position.y + b.parallaxOffsetY) : q.lineTo(b.position.x + b.parallaxOffsetX, b.position.y + b.parallaxOffsetY)) } q.stroke(), q.closePath() }, l.prototype.updatePosition = function () { if (d.parallax) { if (B && !A) { var a = (s - 0) / 60; pointerX = (C - -30) * a + 0; var b = (t - 0) / 60; pointerY = (D - -30) * b + 0 } else pointerX = y, pointerY = z; this.parallaxTargX = (pointerX - s / 2) / (d.parallaxMultiplier * this.layer), this.parallaxOffsetX += (this.parallaxTargX - this.parallaxOffsetX) / 10, this.parallaxTargY = (pointerY - t / 2) / (d.parallaxMultiplier * this.layer), this.parallaxOffsetY += (this.parallaxTargY - this.parallaxOffsetY) / 10 } switch (d.directionX) { case "left": this.position.x + this.speed.x + this.parallaxOffsetX < 0 && (this.position.x = v.width() - this.parallaxOffsetX); break; case "right": this.position.x + this.speed.x + this.parallaxOffsetX > v.width() && (this.position.x = 0 - this.parallaxOffsetX); break; default: (this.position.x + this.speed.x + this.parallaxOffsetX > v.width() || this.position.x + this.speed.x + this.parallaxOffsetX < 0) && (this.speed.x = -this.speed.x) }switch (d.directionY) { case "up": this.position.y + this.speed.y + this.parallaxOffsetY < 0 && (this.position.y = v.height() - this.parallaxOffsetY); break; case "down": this.position.y + this.speed.y + this.parallaxOffsetY > v.height() && (this.position.y = 0 - this.parallaxOffsetY); break; default: (this.position.y + this.speed.y + this.parallaxOffsetY > v.height() || this.position.y + this.speed.y + this.parallaxOffsetY < 0) && (this.speed.y = -this.speed.y) }this.position.x += this.speed.x, this.position.y += this.speed.y }, l.prototype.setStackPos = function (a) { this.stackPos = a }, e(), { option: m, destroy: n, start: k, pause: j } } var c = "particleground"; a.fn[c] = function (d) { if ("string" == typeof arguments[0]) { var e, f = arguments[0], g = Array.prototype.slice.call(arguments, 1); return this.each(function () { a.data(this, "plugin_" + c) && "function" == typeof a.data(this, "plugin_" + c)[f] && (e = a.data(this, "plugin_" + c)[f].apply(this, g)) }), void 0 !== e ? e : this } return "object" != typeof d && d ? void 0 : this.each(function () { a.data(this, "plugin_" + c) || a.data(this, "plugin_" + c, new b(this, d)) }) }, a.fn[c].defaults = { minSpeedX: .1, maxSpeedX: .7, minSpeedY: .1, maxSpeedY: .7, directionX: "center", directionY: "center", density: 1e4, dotColor: "#666666", lineColor: "#666666", particleRadius: 7, lineWidth: 1, curvedLines: !1, proximity: 100, parallax: !0, parallaxMultiplier: 5, onInit: function () { }, onDestroy: function () { } } }(jQuery),/**
 * requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
 * @see: http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 * @see: http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 * @license: MIT license
 */


    function () { for (var a = 0, b = ["ms", "moz", "webkit", "o"], c = 0; c < b.length && !window.requestAnimationFrame; ++c)window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"]; window.requestAnimationFrame || (window.requestAnimationFrame = function (b) { var c = (new Date).getTime(), d = Math.max(0, 16 - (c - a)), e = window.setTimeout(function () { b(c + d) }, d); return a = c + d, e }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (a) { clearTimeout(a) }) }();
/**
 * Module for displaying "Waiting for..." dialog using Bootstrap
 *
 * @author Eugene Maslovich <ehpc@em42.ru>
 */

var waitingDialog = waitingDialog || (function ($) {
    'use strict';

    // Creating modal dialog's DOM
    var $dialog = $(
        '<div class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="padding-top:15%; overflow-y:visible;">' +
        '<div class="modal-dialog modal-m">' +
        '<div class="modal-content">' +
        '<div class="modal-header"><h3 style="margin:0;"></h3></div>' +
        '<div class="modal-body">' +
        '<div class="progress progress-striped active" style="margin-bottom:0;"><div class="progress-bar" style="width: 100%"></div></div>' +
        '</div>' +
        '</div></div></div>');

    return {
		/**
		 * Opens our dialog
		 * @param message Custom message
		 * @param options Custom options:
		 * 				  options.dialogSize - bootstrap postfix for dialog size, e.g. "sm", "m";
		 * 				  options.progressType - bootstrap postfix for progress bar type, e.g. "success", "warning".
		 */
        show: function (message, options) {
            // Assigning defaults
            if (typeof options === 'undefined') {
                options = {};
            }
            if (typeof message === 'undefined') {
                message = 'Loading';
            }
            var settings = $.extend({
                dialogSize: 'm',
                progressType: '',
                onHide: null // This callback runs after the dialog was hidden
            }, options);

            // Configuring dialog
            $dialog.find('.modal-dialog').attr('class', 'modal-dialog').addClass('modal-' + settings.dialogSize);
            $dialog.find('.progress-bar').attr('class', 'progress-bar');
            if (settings.progressType) {
                $dialog.find('.progress-bar').addClass('progress-bar-' + settings.progressType);
            }
            $dialog.find('h3').text(message);
            // Adding callbacks
            if (typeof settings.onHide === 'function') {
                $dialog.off('hidden.bs.modal').on('hidden.bs.modal', function (e) {
                    settings.onHide.call($dialog);
                });
            }
            // Opening dialog
            $dialog.modal();
        },
		/**
		 * Closes dialog
		 */
        hide: function () {
            $dialog.modal('hide');
        }
    };

})(jQuery);

$(function () {

    $('#particles').particleground({
        minSpeedX: 0.1,
        maxSpeedX: 0.7,
        minSpeedY: 0.1,
        maxSpeedY: 0.7,
        directionX: 'center', // 'center', 'left' or 'right'. 'center' = dots bounce off edges
        directionY: 'center', // 'center', 'up' or 'down'. 'center' = dots bounce off edges
        density: 10000, // How many particles will be generated: one particle every n pixels
        dotColor: '#6eacff',
        lineColor: '#6eacff',
        particleRadius: 7, // Dot size
        lineWidth: 1,
        curvedLines: true,
        proximity: 100, // How close two dots need to be before they join
        parallax: false
    });

});

$(document).ready(function () {

    $(".acidjs-css3-treeview").delegate("label input:checkbox", "change", function () {
        var
            checkbox = $(this),
            nestedList = checkbox.parent().next().next(),
            selectNestedListCheckbox = nestedList.find("label:not([for]) input:checkbox");

        if (checkbox.is(":checked")) {
            return selectNestedListCheckbox.prop("checked", true);
        }
        selectNestedListCheckbox.prop("checked", false);
    });
    
    $('#imprime').click(function () {
        $("#printf").get(0).contentWindow.print();
    });
    $('.main-panel').scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $(".main-panel").animate({ scrollTop: 0 }, 600);
        return false;
    });

});



/* ************************************************** */
type = ['', 'info', 'success', 'warning', 'danger'];


demo = {
    initPickColor: function () {
        $('.pick-class-label').click(function () {
            var new_class = $(this).attr('new-class');
            var old_class = $('#display-buttons').attr('data-class');
            var display_div = $('#display-buttons');
            if (display_div.length) {
                var display_buttons = display_div.find('.btn');
                display_buttons.removeClass(old_class);
                display_buttons.addClass(new_class);
                display_div.attr('data-class', new_class);
            }
        });
    },

    initFormExtendedDatetimepickers: function () {
        $('.datetimepicker').datetimepicker({
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove'
            }
        });
    },

    initDocumentationCharts: function () {
        /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

        dataDailySalesChart = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };

        optionsDailySalesChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
        }

        var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

        md.startAnimationForLineChart(dailySalesChart);
    },

    initDashboardPageCharts: function () {

        /* ----------==========     Daily Sales Chart initialization    ==========---------- */

        dataDailySalesChart = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };

        optionsDailySalesChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
        }

        var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

        md.startAnimationForLineChart(dailySalesChart);



        /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

        dataCompletedTasksChart = {
            labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
            series: [
                [230, 750, 450, 300, 280, 240, 200, 190]
            ]
        };

        optionsCompletedTasksChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
        }

        var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

        // start animation for the Completed Tasks Chart - Line Chart
        md.startAnimationForLineChart(completedTasksChart);



        /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

        var dataEmailsSubscriptionChart = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

            ]
        };
        var optionsEmailsSubscriptionChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];
        var emailsSubscriptionChart = Chartist.Bar('#emailsSubscriptionChart', dataEmailsSubscriptionChart, optionsEmailsSubscriptionChart, responsiveOptions);

        //start animation for the Emails Subscription Chart
        md.startAnimationForBarChart(emailsSubscriptionChart);

    },

    initGoogleMaps: function () {
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
            styles: [{ "featureType": "water", "stylers": [{ "saturation": 43 }, { "lightness": -11 }, { "hue": "#0088ff" }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "hue": "#ff0000" }, { "saturation": -100 }, { "lightness": 99 }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "color": "#808080" }, { "lightness": 54 }] }, { "featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [{ "color": "#ece2d9" }] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{ "color": "#ccdca1" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#767676" }] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "poi", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape.natural", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#b8cb93" }] }, { "featureType": "poi.park", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.sports_complex", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.medical", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.business", "stylers": [{ "visibility": "simplified" }] }]

        }
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Hello World!"
        });

        // To add the marker to the map, call setMap();
        marker.setMap(map);
    },

    showNotification: function (from, align, messages, cor) {
        color = cor;

        $.notify({
            icon: "notifications",
            message: messages

        }, {
                type: type[cor],
                timer: 100,
                placement: {
                    from: from,
                    align: align
                }
            });
    }



}


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/webUrl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return webUrl; });
var webUrl = {
    //host: 'http://192.168.30.119:8080/app-0.0.1-SNAPSHOT'
    //host: 'http://localhost:8080/app-0.0.1-SNAPSHOT'
    host: 'http://192.168.40.101:8080/sirb'
};
//# sourceMappingURL=webUrl.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map