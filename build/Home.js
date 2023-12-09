"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const debug_1 = __importDefault(require("debug"));
const react_native_1 = require("react-native");
const d = (0, debug_1.default)('terrene.server');
function Home() {
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: styles.container, children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { children: "Welcome to Site Seeker" }) }));
}
exports.default = Home;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
