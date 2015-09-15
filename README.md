# blokdust.github.io

built using https://github.com/GitbookIO/gitbook

install gitbook-cli

	npm install gitbook-cli -g
	
run 

	gulp build
	
to build to `_book`

run

	gulp deploy
	
to deploy the contents of `_book` to the `master` branch

## Notes

The `book` branch must be your repo's default  branch.

If you get an `Updates were rejected` error when running `gulp deploy`, delete the remote master branch and push again.