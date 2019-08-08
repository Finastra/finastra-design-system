#!/usr/bin/env bash

ANGULAR_THEME_PATH='themes/angular-theme'
ANGULAR_THEME_PKG_NAME='@ffdc/uxg-angular-theme'

echo&Launch () {
    echo ""
    printf "$ $1"
    $1
}

echo&Launch "cd $ANGULAR_THEME_PATH"
echo&Launch "npm link"
echo&Launch "cd .."
echo&Launch "npm link $ANGULAR_THEME_PKG_NAME"
