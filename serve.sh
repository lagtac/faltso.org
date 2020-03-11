#! /usr/bin/bash

export FALTSO_BUILD_PATH=$HOME/source/faltso.org/docs

bundle exec jekyll serve -s src/ -d src/_site
