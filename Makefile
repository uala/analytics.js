##
# Binaries
##

BROWSERIFY = node_modules/.bin/browserify
ESLINT = node_modules/.bin/eslint
UGLIFYJS = node_modules/.bin/uglifyjs

##
# Files
##

SRC = $(wildcard lib/*.js)

##
# Tasks
##

# Install node modules.
node_modules: package.json $(wildcard node_modules/*/package.json)
	@npm install
	@touch node_modules

# Install dependencies.
install: node_modules

# Remove temporary files and build artifacts.
clean:
	rm -rf *.log analytics.js analytics.min.js
.PHONY: clean

# Remove temporary files, build artifacts, and vendor dependencies.
distclean: clean
	rm -rf node_modules
.PHONY: distclean

# Build analytics.js.
analytics.js: install $(SRC) package.json
	@$(BROWSERIFY) lib/index.js --standalone analytics > analytics.js

# Build minified analytics.js.
analytics.min.js:
	@$(UGLIFYJS) analytics.js --output $@

# Build shortcut.
build: analytics.min.js
.PHONY: build

# Lint JavaScript source files.
lint: node_modules
	@$(ESLINT) $(SRC)
.PHONY: lint
