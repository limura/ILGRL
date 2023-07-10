#!/bin/sh

TARGET="ILGRL"
rm -f $TARGET.zip
zip -r $TARGET.zip $TARGET/*.js $TARGET/*.json $TARGET/_locales/*/messages.json $TARGET/icon/*.png $TARGET/*.html
