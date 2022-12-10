gendiff:
		node bin/gendiff.js -h
install:
	npm ci
publish:
	npm publish --dry-run
lint:
	npx eslint .