"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const child_process_1 = require("child_process");
try {
    fs_1.default.readFileSync('pokedex.js');
    fs_1.default.readFileSync('pokedex.js');
    (0, child_process_1.exec)('npx tsc', (err) => {
        if (err) {
            console.log(err);
        }
    });
    try {
        (0, child_process_1.exec)('npm test', (err) => {
            if (err) {
                console.log(err);
            }
        });
    }
    catch (error) { }
}
catch (error) {
    console.log(error);
}
