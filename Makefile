gendiff:
		node bin/gendiff.js -h
install:
	npm ci
publish:
	npm publish --dry-run
lint:
	npx eslint .
test: 
	npm test
test-watch:
	npm test -s -- --watch