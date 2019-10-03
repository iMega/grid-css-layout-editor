dev: node_modules
	@npm run dev

node_modules:
	@npm install

build_pages: node_modules test
	@npm run build-pages

lint: node_modules
	@-eslint $(CURDIR)

test: node_modules lint
	@npm test
