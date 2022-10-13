include .env
# dist dir to lambda.zip
zip-lambda:
	mkdir -p zip && npm run build && cd ./dist \
	&& zip -r lambda.zip * -x "*www*" && mv -f lambda.zip ../zip

# deploy dist
deploy-lambda:
	make zip-lambda \
	&& cd ./zip && aws lambda update-function-code --function-name $(LAMBDA_FUNC) --zip-file fileb://lambda.zip	

# node_modules dir to nodejs.zip
zip-nodejs:
	mkdir -p {./nodejs,zip} && cp package.json ./nodejs \
	&& cd ./nodejs && npm i --production \
	&& rm -f package.json package-lock.json && cd ../ \
	&& zip -r nodejs.zip ./nodejs && mv -f nodejs.zip ./zip && rm -rf ./nodejs

# deploy layer of node_modules
deploy-layer:
	make zip-nodejs \
	&& aws s3 cp ./zip/nodejs.zip s3://$(S3_BUCKET) \
	&& aws lambda publish-layer-version --layer-name $(LAMBDA_LAYER) \
	--description "node_modules" \
	--license-info "MIT" --content S3Bucket=$(S3_BUCKET),S3Key=nodejs.zip \
	--compatible-runtimes nodejs16.x \
	--compatible-architectures "arm64"