/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";

const RawSource = require("webpack-sources").RawSource;

class WasmModuleTemplatePlugin {
	apply(moduleTemplate) {
		moduleTemplate.plugin("content", (moduleSource, module, {
			chunk
		}) => {
			if(module.type && module.type.startsWith("webassembly")) {
				if(chunk.isInitial())
					throw new Error("Sync WebAsssmbly compilation is not yet implemented");
				const generateExports = () => {
					if(Array.isArray(module.buildMeta.providedExports) && Array.isArray(module.usedExports)) {
						// generate mangled exports
						return module.buildMeta.providedExports.map(exp => {
							const usedName = module.isUsed(exp);
							if(usedName) {
								return `${module.exportsArgument}[${JSON.stringify(usedName)}] = instance.exports[${JSON.stringify(exp)}];`;
							} else {
								return `// unused ${JSON.stringify(exp)} export`;
							}
						}).join("\n");
					} else {
						// generate simple export
						return `${module.moduleArgument}.exports = instance.exports;`;
					}
				};
				const source = new RawSource([
					"\"use strict\";",
					"",
					"// Instanciate WebAssembly module",
					"var instance = new WebAssembly.Instance(__webpack_require__.w[module.i], {});",
					"",
					"// export exports from WebAssmbly module",
					// TODO rewrite this to getters depending on exports to support circular dependencies
					generateExports()
				].join("\n"));
				return source;
			} else {
				return moduleSource;
			}
		});

		moduleTemplate.plugin("hash", hash => {
			hash.update("WasmModuleTemplatePlugin");
			hash.update("1");
		});
	}
}
module.exports = WasmModuleTemplatePlugin;
