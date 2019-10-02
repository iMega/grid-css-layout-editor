dev: node_modules
	@npm run dev

node_modules:
	@npm install

build_pages: node_modules
	@npm run build-pages
