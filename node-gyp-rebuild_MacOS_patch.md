# Resolve node-gyp rebuild failed due to "No Xcode or CLT version detected"
[See instructions.](https://medium.com/@mrjohnkilonzi/how-to-resolve-no-xcode-or-clt-version-detected-d0cf2b10a750)

Step 1 (Reset):
```
FINE=$("Reset fine. Please reboot your computer, then continue with step 2.") && \\
NOTFINE=$("There was a problem while resetting xcode-select.") && \\
NOCLT=$(No command line tools (or Xcode) installed. Continue with step 2.)
echo "Checking for installed Xcode or command line tools (CLT)."
OUTPUT=$(xcode-select -print-path) && \\
if [ OUTPUT = '/Library/Developer/CommandLineTools' ]; then sudo xcode-select --reset else echo NOCLT fi && \\
OUTPUT=$(xcode-select -print-path) && \\
if [ OUTPUT = '/Applications/Xcode.app/Contents/Developer' ]; then echo FINE else echo NOTFINE fi && \\
```

Step 2 (Purge & Install):
```
sudo rm -rf $(xcode-select -print-path) && \\
sudo rm -rf /Library/Developer/CommandLineTool && \\ 
xcode-select --install
```