Write a bash script that generates a string of ever .js file in the current directory in this format:

filename.js
```
FILE CONTENTS
```

filename1.js
```
FILE CONTENTS
```
Here's a bash script that should generate a string of every .js file in the current directory in the specified format:

bash
Copy code
#!/bin/bash

# Find all .js files in current directory
files=$(find . -type f -name '*.js')

# Loop through each file and output its contents in the specified format
for file in $files; do
  filename=$(basename "$file")
  echo "$filename"
  echo "------------------------"
  cat "$file"
  echo ""
done
To use the script, save the code into a file (e.g. js-file-contents.sh), make it executable with chmod +x js-file-contents.sh, and then run it with ./js-file-contents.sh.

This script uses the find command to find all .js files in the current directory, and then loops through each file, using basename to get just the filename (without the path), and cat to output the file's contents. The script outputs each file's name as well as a line of dashes before the file's contents.