"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var ajax_1 = require("rxjs/ajax");
var GITHUB_API_URL = 'https://api.github.com/users';
var GITHUB_USER = 'k1raRD';
(0, rxjs_1.forkJoin)({
    usuario: ajax_1.ajax.getJSON("".concat(GITHUB_API_URL, "/").concat(GITHUB_USER)),
    repos: ajax_1.ajax.getJSON("".concat(GITHUB_API_URL, "/").concat(GITHUB_USER, "/repos")),
    gists: ajax_1.ajax.getJSON("".concat(GITHUB_API_URL, "/").concat(GITHUB_USER, "/gists"))
}).pipe((0, rxjs_1.catchError)(function (err) { return (0, rxjs_1.of)(err.message); }))
    .subscribe(console.log);
