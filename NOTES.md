# blokdust.github.io

built using https://github.com/GitbookIO/gitbook

install gitbook-cli

	npm install gitbook-cli -g
	
run 

	gulp build
	
to build to `_book`

run

	gulp deploy
	
to deploy the contents of `_book` on the default `book` branch to the remote `master` branch.

## Notes

If you get an `Updates were rejected` error when running `gulp deploy`, delete the remote `master` branch and push again.

The `master` branch is purely for the deployed book files. Delete the local and remote `master` before running `gulp deploy` if you have problems.

To delete locally:

	git branch -d master

To delete remotely:

	git push origin :master