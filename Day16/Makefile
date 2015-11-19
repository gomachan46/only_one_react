INPUT="sample.js"
OUTPUT="bundle.js"

install:
	npm install
build:
	browserify -t [ babelify --presets [ react ] ] ${INPUT} -o ${OUTPUT}
